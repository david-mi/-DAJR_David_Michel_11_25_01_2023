import React, { useState } from 'react';
import styles from "./collapse.module.scss";
import { DropDownButton } from "./index";
import { CollapsePropTypes } from "./propTypes";

/**
 * Collapse with a button too show content and content
 * who is passed as a children
 * 
 * @param {Object} props
 * @param {string} props.name
 * @param {boolean=} props.showByDefault
 * @param {JSX.Element} props.children
 */

const Collapse = ({ name, children, showByDefault }) => {
  const [showContent, setShowContent] = useState(showByDefault || false);

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