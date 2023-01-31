import React, { useState } from 'react';
import styles from "./collapse.module.scss";
import { DropDownButton } from "./index";

const Collapse = ({ content, name }) => {
  const [showContent, setShowContent] = useState(false);
  const isContentArray = Array.isArray(content);

  return (
    <div className={styles.collapse}>
      <DropDownButton
        name={name}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      {showContent && (isContentArray
        ? (
          <ul className={styles.content}>
            {content.map((info) => <li key={info}>{info}</li>)}
          </ul>
        )
        : <p className={styles.content}>{content}</p>)
      }
    </div>
  );
};

export default Collapse;