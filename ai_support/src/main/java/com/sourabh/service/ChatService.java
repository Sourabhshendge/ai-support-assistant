package com.sourabh.service;

import com.sourabh.dto.AskResponse;
import com.sourabh.dto.RetrievalResult;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatClient chatClient;
    private final RetrievalService retrievalService;

    public AskResponse askQuestion(String question)
            throws Exception {

        // RETRIEVE RELEVANT CHUNKS

        List<RetrievalResult> results =
                retrievalService.retrieveRelevantChunks(
                        question
                );

        // BUILD CONTEXT

        String context =
                results.stream()
                        .map(RetrievalResult::getChunkText)
                        .reduce("", (a, b) -> a + "\n\n" + b);

        System.out.println(context);

        // BUILD PROMPT

        String prompt = """
                You are an AI customer support assistant.

                Answer ONLY using the context below.

                If answer is not present,
                say:
                "I could not find relevant information."

                Context:
                %s

                Question:
                %s
                """.formatted(context, question);

        // CALL LOCAL MODEL

        String answer = chatClient.prompt()
                .user(prompt)
                .call()
                .content();

        // RETURN RESPONSE

        return new AskResponse(
                answer,
                results
        );
    }
}