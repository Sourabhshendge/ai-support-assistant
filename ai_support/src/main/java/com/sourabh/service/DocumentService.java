package com.sourabh.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sourabh.entity.Document;
import com.sourabh.entity.DocumentChunk;
import com.sourabh.repository.DocumentChunkRepository;
import com.sourabh.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DocumentService {

    private final DocumentRepository documentRepository;
    private final DocumentChunkRepository chunkRepository;
    private final EmbeddingService embeddingService;

    public String uploadPdf(MultipartFile file)
            throws Exception {

        // FILE VALIDATION

        if (file.isEmpty()) {
            throw new RuntimeException("File is empty");
        }

        if (!file.getContentType().equals("application/pdf")) {
            throw new RuntimeException("Only PDF files allowed");
        }

        // CREATE UPLOAD DIRECTORY

        String uploadDir =
                System.getProperty("user.dir")
                        + "/uploads/";

        File dir = new File(uploadDir);

        if (!dir.exists()) {
            dir.mkdirs();
        }

        // GENERATE UNIQUE FILE NAME

        String fileName =
                UUID.randomUUID()
                        + "_"
                        + file.getOriginalFilename();

        String filePath = uploadDir + fileName;

        // SAVE FILE

        file.transferTo(new File(filePath));

        // EXTRACT PDF TEXT

        String text;

        try (PDDocument pdf =
                     PDDocument.load(new File(filePath))) {

            PDFTextStripper stripper =
                    new PDFTextStripper();

            text = stripper.getText(pdf);
        }

        // SAVE DOCUMENT

        Document document = Document.builder()
                .fileName(fileName)
                .fileType(file.getContentType())
                .filePath(filePath)
                .extractedText(text)
                .uploadedAt(LocalDateTime.now())
                .build();

        documentRepository.save(document);

        // CHUNK TEXT

        List<String> chunks = chunkText(text);

        // SAVE CHUNKS

        for (int i = 0; i < chunks.size(); i++) {

            String chunkText = chunks.get(i);

            float[] embedding =
                    embeddingService.generateEmbedding(
                            chunkText
                    );

            DocumentChunk chunk =
                    DocumentChunk.builder()
                            .document(document)
                            .chunkText(chunkText)
                            .chunkIndex(i)
                            .embedding(
                                    embeddingToJson(embedding)
                            )
                            .build();

            chunkRepository.save(chunk);
        }

        return "PDF uploaded and chunked successfully";
    }

    // TEXT CHUNKING

    private List<String> chunkText(String text) {

        List<String> chunks = new ArrayList<>();

        String[] paragraphs = text.split("\\n\\s*\\n");

        StringBuilder currentChunk = new StringBuilder();

        int maxChunkSize = 300;

        for (String paragraph : paragraphs) {

            paragraph = paragraph.trim();

            if (paragraph.isEmpty()) {
                continue;
            }

            if (currentChunk.length() + paragraph.length() > maxChunkSize) {

                if (!currentChunk.toString().trim().isEmpty()) {

                    chunks.add(
                            currentChunk.toString().trim()
                    );
                }

                currentChunk = new StringBuilder();
            }

            currentChunk
                    .append(paragraph)
                    .append("\n\n");
        }

        if (!currentChunk.toString().trim().isEmpty()) {

            chunks.add(
                    currentChunk.toString().trim()
            );
        }

        return chunks;
    }

    private String embeddingToJson(float[] embedding)
            throws Exception {

        ObjectMapper mapper = new ObjectMapper();

        return mapper.writeValueAsString(embedding);
    }
}