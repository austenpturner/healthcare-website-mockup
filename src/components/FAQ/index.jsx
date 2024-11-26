import { useState } from "react";
import { faqs } from "../../config/faqs";
import styles from "./faq.module.scss";
import { GoPlusCircle, GoXCircle } from "react-icons/go";

export function FAQ() {
  const [currentId, setCurrentId] = useState(null);

  return (
    <section className={styles.faqSection}>
      <h2>FAQs</h2>
      {faqs.map((question) => {
        return (
          <div key={question.id} className={styles.faqContainer}>
            <div className={styles.question}>
              <p>{question.question}</p>
              {question.id === currentId ? (
                <GoXCircle onClick={() => setCurrentId(null)} />
              ) : (
                <GoPlusCircle onClick={() => setCurrentId(question.id)} />
              )}
            </div>
            <div
              className={
                question.id === currentId
                  ? `${styles.answer}`
                  : `${styles.answer} ${styles.hidden}`
              }
            >
              <p>{question.answer}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
