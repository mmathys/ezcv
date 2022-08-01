import React from "react";
import styles, {
  both,
  autolink,
  getLargeSectionHeader,
  getSectionHeader,
  getInlineItems,
  getItems,
  getSectionTitle,
} from "../styles";

const STYLES = {
  left: {
    flex: 0.3,
    marginRight: 20,
  },
  right: {
    flex: 1,
  },
}

export default function Modern({ header, subSection, subSectionIndex }) {
  const { title, subtitle, description, date, other } = subSection;
  const isFirstSubsection = subSectionIndex === 0;

  const getLeft = () => (
    <>
      {date && (
        <div style={STYLES.left}>
          <p style={styles.text}>{date}</p>
        </div>
      )}
    </>
  )

  const getRight = () => (
    <div style={STYLES.right}>
      {getSectionTitle(title, subtitle, description)}
      {getItems(other)}
    </div>
  )

  return (
    <>
      {isFirstSubsection && getSectionHeader(header)}
      <div style={styles.flex}>
        {getLeft()}
        {getRight()}
      </div>
    </>
  );
}
