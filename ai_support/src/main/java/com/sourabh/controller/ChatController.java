package com.sourabh.controller;

import com.sourabh.dto.AskRequest;
import com.sourabh.dto.AskResponse;
import com.sourabh.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;

    @PostMapping("/ask")
    public AskResponse ask(
            @RequestBody AskRequest request
    ) throws Exception {

        return chatService.askQuestion(
                request.getQuestion()
        );
    }
}