import React, { useState } from 'react';
import styles from "./collapse.module.scss";
import { DropDownButton } from "./index";

const Collapse = ({ name, children }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className={styles.collapse}>
      <DropDownButton
        name={name}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      {showContent && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;