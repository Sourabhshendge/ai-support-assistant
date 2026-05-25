package com.sourabh.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class AskResponse {

    private String answer;

    private List<RetrievalResult> sources;
}
