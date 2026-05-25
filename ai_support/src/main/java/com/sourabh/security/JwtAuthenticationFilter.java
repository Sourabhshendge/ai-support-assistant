package com.sourabh.security;

import com.sourabh.entity.User;
import com.sourabh.repository.UserRepository;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter
        extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        String authHeader =
                request.getHeader("Authorization");

        // NO AUTH HEADER

        if (authHeader == null ||
                !authHeader.startsWith("Bearer ")) {

            filterChain.doFilter(request, response);
            return;
        }

        // EXTRACT TOKEN

        String token =
                authHeader.substring(7);

        // INVALID TOKEN VALUES

        if (token.isBlank() ||
                token.equals("undefined") ||
                token.equals("null")) {

            filterChain.doFilter(request, response);
            return;
        }

        try {

            // EXTRACT EMAIL

            String email =
                    jwtService.extractUsername(token);

            // AUTHENTICATE USER

            if (email != null &&
                    SecurityContextHolder
                            .getContext()
                            .getAuthentication() == null) {

                User user =
                        userRepository.findByEmail(email)
                                .orElseThrow();

                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(
                                user,
                                null,
                                Collections.emptyList()
                        );

                SecurityContextHolder.getContext()
                        .setAuthentication(authToken);
            }

        } catch (JwtException e) {

            System.out.println(
                    "Invalid JWT Token"
            );

        } catch (Exception e) {

            System.out.println(
                    "Authentication Error"
            );
        }

        filterChain.doFilter(request, response);
    }
}