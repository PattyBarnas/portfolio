import React from "react";
import Question from "./Question";
import "./FrequentlyAskedQuestions.css";

const faqs = [
  {
    id: "faq-1",
    question: "What do you specialize in?",
    answer:
      "I'm a Full Stack Web Developer with a focus on Technical SEO — I build with React, Next.js, Node.js, and Spring Boot, and I optimize sites for performance, Core Web Vitals, and search visibility.",
  },
  {
    id: "faq-2",
    question: "Do you work remotely?",
    answer:
      "Yes, I'm open to remote work. I'm based in Chicago, Illinois and have experience working with fully remote and distributed teams.",
  },
  {
    id: "faq-3",
    question: "What technologies do you work with?",
    answer:
      "On the frontend I use TypeScript, JavaScript, React, and Next.js. On the backend I work with Node.js, Express.js, Java, Spring Boot, and MySQL. I also use Git, REST APIs, Selenium, and JUnit for testing and version control.",
  },
  {
    id: "faq-4",
    question: "Do you have experience with SEO, not just development?",
    answer:
      "Yes — I handle both. At Warner's Decking I increased organic traffic by 225% and improved Core Web Vitals through technical SEO, site migrations, structured data, and performance optimization.",
  },
  {
    id: "faq-5",
    question: "Are you available for freelance or contract work?",
    answer:
      "I'm open to discussing freelance, contract, or full-time opportunities — feel free to reach out at patrykbarnas@yahoo.com or +1-708-351-7684.",
  },
];

function FrequentlyAskedQuestions() {
  return (
    <div className="faq-container">
      <div className="faq-header">
        <span>FAQ</span>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <p>
          Quick answers on about me and what not filler here for now. This
          should be a little longer. Quick answers on about me and what not
          filler here for now. This should be a little longer
        </p>
      </div>
      <ul>
        {faqs.map((q) => {
          return (
            <Question
              id={q.id}
              key={q.question}
              question={q.question}
              answer={q.answer}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default FrequentlyAskedQuestions;
