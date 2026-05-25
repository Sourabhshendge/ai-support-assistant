package com.sourabh.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sourabh.dto.RetrievalResult;
import com.sourabh.entity.DocumentChunk;
import com.sourabh.repository.DocumentChunkRepository;
import com.sourabh.utils.VectorUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RetrievalService {

    private final EmbeddingService embeddingService;
    private final DocumentChunkRepository chunkRepository;

    private final ObjectMapper objectMapper =
            new ObjectMapper();

    public List<RetrievalResult> retrieveRelevantChunks(
            String question
    ) throws Exception {

        // QUESTION EMBEDDING

        float[] questionEmbedding =
                embeddingService.generateEmbedding(
                        question
                );

        // LOAD ALL CHUNKS

        List<DocumentChunk> chunks =
                chunkRepository.findAll();

        // CALCULATE SIMILARITY

        List<RetrievalResult> results =
                chunks.stream()
                        .map(chunk -> {

                            try {

                                float[] chunkEmbedding =
                                        objectMapper.readValue(
                                                chunk.getEmbedding(),
                                                float[].class
                                        );

                                double similarity =
                                        VectorUtils.cosineSimilarity(
                                                questionEmbedding,
                                                chunkEmbedding
                                        );

                                return new RetrievalResult(
                                        chunk.getChunkText(),
                                        similarity
                                );

                            } catch (Exception e) {
                                throw new RuntimeException(e);
                            }

                        })
                        .sorted(
                                Comparator.comparingDouble(
                                        RetrievalResult::getScore
                                ).reversed()
                        )
                        .filter(result -> result.getScore() > 0.45)
                        .limit(3)
                        .collect(Collectors.toList());

        return results;
    }
}