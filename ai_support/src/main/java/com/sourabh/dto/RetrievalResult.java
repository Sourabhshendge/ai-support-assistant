package com.sourabh.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RetrievalResult {

    private String chunkText;

    private double score;
}