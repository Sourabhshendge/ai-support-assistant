package com.sourabh.service;



import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.embedding.EmbeddingResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmbeddingService {

    private final EmbeddingModel embeddingModel;
    private final ObjectMapper objectMapper =
            new ObjectMapper();

    public float[] generateEmbedding(String text) {

        EmbeddingResponse response =
                embeddingModel.embedForResponse(
                        List.of(text)
                );

        return response.getResults()
                .get(0)
                .getOutput();
    }

    public float[] jsonToVector(String json)
            throws Exception {

        return objectMapper.readValue(
                json,
                float[].class
        );
    }

}
