import React, { useState } from 'react';
import styles from "./collapse.module.scss";
import { DropDownButton } from "./index";
import { CollapsePropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {JSX.Element} props.children
 */

const Collapse = ({ name, children }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <article className={styles.collapse}>
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
    </article>
  );
};

Collapse.propTypes = CollapsePropTypes;

export default Collapse;