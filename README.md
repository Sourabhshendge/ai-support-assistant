# AI Customer Support SaaS

AI-powered customer support platform built using Spring AI, local LLMs, semantic search, and Retrieval-Augmented Generation (RAG).

This project allows users to upload PDF documents and ask AI-powered questions based on uploaded content using vector embeddings and similarity search.

---

# Why This Project?

Traditional chatbots rely only on static prompts and cannot understand uploaded documents dynamically.

This project implements Retrieval-Augmented Generation (RAG) using semantic embeddings and vector similarity search to provide context-aware AI responses from uploaded PDFs.

---

# Features

* JWT Authentication
* PDF Upload & Parsing
* Semantic Chunking
* Vector Embeddings
* Similarity Search
* Retrieval-Augmented Generation (RAG)
* Local LLM Integration using Ollama
* AI Chat Interface
* Retrieval Debug Panel
* React + Tailwind SaaS Dashboard UI

---

# Key Engineering Concepts

* Retrieval-Augmented Generation (RAG)
* Semantic Search
* Vector Embeddings
* Cosine Similarity
* Context Grounding
* JWT Authentication
* Semantic Chunking
* Local LLM Inference
* Similarity-Based Retrieval

---

# Tech Stack

## Backend

* Java
* Spring Boot
* Spring AI
* Spring Security
* JWT Authentication
* JPA / Hibernate
* MySQL

## Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Router DOM

## AI / RAG

* Ollama
* Phi3 Mini
* Nomic Embedding Model
* Cosine Similarity
* Semantic Search

---

# Architecture

```text
Frontend (React + Tailwind)
           ↓
Spring Boot REST APIs
           ↓
PDF Upload & Parsing
           ↓
Semantic Chunking
           ↓
Embedding Generation
           ↓
MySQL Vector Storage
           ↓
Cosine Similarity Search
           ↓
Context Retrieval
           ↓
Phi3 Mini (Ollama)
           ↓
AI Response Generation
```

---

# Screenshots

## Login Page

<img width="1905" height="1009" alt="Login Page" src="https://github.com/user-attachments/assets/2db11fb6-9d86-4576-be25-3935efc3ab3d" />

---

## Dashboard

<img width="1919" height="1018" alt="Dashboard" src="https://github.com/user-attachments/assets/ee79251a-5162-471c-966f-cec0b35653ce" />

---

## Upload Documents

<img width="1919" height="972" alt="Upload Documents" src="https://github.com/user-attachments/assets/7e6fdf5a-d582-4126-8e2f-73ff0dc505eb" />

---

## AI Chat Interface

<img width="1919" height="1077" alt="AI Chat" src="https://github.com/user-attachments/assets/fb018a97-23c7-4843-b170-67ebe8fd0284" />

---

# Backend Setup

## Clone Repository

```bash
git clone https://github.com/sourabhshendge/ai-support-assistant.git
```

---

## Backend Setup

```bash
cd ai_support
```

Install dependencies:

```bash
mvn clean install
```

Run Spring Boot:

```bash
mvn spring-boot:run
```

---

# Frontend Setup

```bash
cd ai-support-ui
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

---

# Ollama Setup

Install Ollama:

https://ollama.com/

Pull models:

```bash
ollama pull phi3:mini
ollama pull nomic-embed-text
```

Run Ollama:

```bash
ollama run phi3:mini
```

---

# API Endpoints

## Authentication

```http
POST /api/auth/login
```

---

## Upload PDF

```http
POST /api/documents/upload
```

---

## Ask AI

```http
POST /api/chat/ask
```

Request:

```json
{
  "question": "What technologies are used?"
}
```

---

# Current Features

* Semantic document chunking
* Vector similarity search
* Context-aware AI responses
* Local AI inference
* Protected APIs with JWT
* Retrieval score visualization

---

# Future Improvements

* PostgreSQL + pgvector migration
* Hybrid Search (BM25 + Vector Search)
* Streaming AI responses
* Conversation memory
* Multi-document filtering
* Analytics dashboard
* Multi-user SaaS isolation
* Docker deployment
* Kubernetes deployment

---

# Author

## Sourabh Shendge

* Java Backend Developer
* Spring Boot Developer
* AI/RAG Enthusiast
