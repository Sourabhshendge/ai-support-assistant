package com.sourabh.controller;

import com.sourabh.service.EmbeddingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/test")
public class TestController {

    private final EmbeddingService embeddingService;

    @GetMapping
    public float[] test() {

        return embeddingService.generateEmbedding(
                "hello world"
        );
    }
}
