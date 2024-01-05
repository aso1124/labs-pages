import { useState } from "react";
import { faq } from "./faq";
import "./faq.css";

const FAQ = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(0);

  return (
    <div className="section card">
      <h3 className="section-header">FAQ</h3>
      {faq.map((f) => {
        return (
          <div className="faq card">
            <h5
              onClick={() => {
                visibleAnswer === f.id
                  ? setVisibleAnswer(0)
                  : setVisibleAnswer(f.id);
              }}
            >
              {f.question}
            </h5>
            <div
              className={`faq-answer ${
                f.id === visibleAnswer ? "faq-answer-visible" : ""
              }`}
            >
              {f.answer.map((a) => (
                <p>{a}</p>
              ))}
              <div className="faq-links">
                {f.links.map((l) => (
                  <span className="faq-link link">
                    <a href={l.to} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
