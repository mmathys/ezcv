import React from 'react';
import { COLORS } from '../../constants';

const styles = {
  tab: {
    cursor: 'pointer',
    border: `1.5px solid ${COLORS.darkBrown}`,
    borderBottom: 0,
    backgroundColor: COLORS.yellow,
    fontWeight: 'bold',
    width: 120,
    minWidth: 120,
    padding: '8px 0',
  },
  active: {
    backgroundColor: COLORS.darkBrown,
    color: 'white',
  },
};

export default function Tab({ isActive, onClick, title }) {
  return (
    <button
      type="button"
      style={{ ...styles.tab, ...(isActive ? styles.active : {}) }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
