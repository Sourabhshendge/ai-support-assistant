import { useState } from "react";

import api from
"../../services/api";

import ChatInput from
"./ChatInput";

import ChatMessage from
"./ChatMessage";

import SourceCard from
"./SourceCard";

import TypingLoader from
"./TypingLoader";

function ChatBox() {

  const [question, setQuestion] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const [sources, setSources] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const askQuestion = async () => {

    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      content: question
    };

    setMessages((prev) => [
      ...prev,
      userMessage
    ]);

    try {

      setLoading(true);

      const response =
        await api.post(
          "/api/chat/ask",
          {
            question
          }
        );

      const aiMessage = {
        role: "assistant",
        content:
          response.data.answer
      };

      setMessages((prev) => [
        ...prev,
        aiMessage
      ]);

      setSources(
        response.data.sources
      );

      setQuestion("");

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="
      max-w-6xl
      mx-auto
    ">

      <div className="
        mb-8
      ">

        <h1 className="
          text-4xl
          font-bold
          text-white
          mb-2
        ">
          AI Knowledge Assistant
        </h1>

        <p className="
          text-slate-400
        ">
          Ask questions about uploaded documents
        </p>

      </div>

      <ChatInput
        question={question}
        setQuestion={setQuestion}
        askQuestion={askQuestion}
        loading={loading}
      />

      <div className="
        mt-10
        space-y-6
      ">

        {
          messages.map(
            (message, index) => (

              <ChatMessage
                key={index}
                role={message.role}
                content={message.content}
              />

            )
          )
        }

        {
          loading &&
          <TypingLoader />
        }

      </div>

      {
        sources.length > 0 &&
        (
          <div className="
            mt-14
          ">

            <h2 className="
              text-2xl
              font-bold
              text-white
              mb-6
            ">
              Retrieval Debug Panel
            </h2>

            <div className="
              grid
              gap-5
            ">

              {
                sources.map(
                  (source, index) => (

                    <SourceCard
                      key={index}
                      source={source}
                      index={index}
                    />

                  )
                )
              }

            </div>

          </div>
        )
      }

    </div>
  );
}

export default ChatBox;