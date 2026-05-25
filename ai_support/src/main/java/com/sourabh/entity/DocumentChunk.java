package com.sourabh.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "document_chunks")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DocumentChunk {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Document document;

    @Lob
    private String chunkText;

    private Integer chunkIndex;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String embedding;
}
