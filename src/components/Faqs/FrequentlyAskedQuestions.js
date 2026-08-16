import React from "react";
import Question from "./Question";
import "./FrequentlyAskedQuestions.css";

const faqs = [
  {
    question: "What is Array?",
    answer:
      "Array is a platform/tool designed to help you [core value proposition — e.g., organize, analyze, or manage your data/workflow].",
  },
  {
    question: "How do I get started with Array?",
    answer:
      "Sign up for a free account, complete the quick onboarding steps, and you'll be up and running in just a few minutes.",
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Yes, Array offers a free tier with core features. Paid plans unlock additional capabilities, higher limits, and priority support.",
  },
  {
    question: "Can I integrate Array with other tools?",
    answer:
      "Absolutely — Array supports integrations with popular tools via API and native connectors, so it fits right into your existing workflow.",
  },
  {
    question: "How do I contact support if I run into issues?",
    answer:
      "You can reach our support team through the in-app chat, email support@array.com, or browse our help center for self-service guides.",
  },
];

function FrequentlyAskedQuestions() {
  return (
    <ul>
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      {faqs.forEach((q) => {
        return <Question question={q.question} answer={q.answer} />;
      })}
    </ul>
  );
}

export default FrequentlyAskedQuestions;
