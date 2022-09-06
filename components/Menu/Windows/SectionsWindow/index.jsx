/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '../../../Button';
import { SECTIONS, COLORS } from '../../../../constants';
import { useAppContext } from '../../../../context/state';
import { partition } from '../../../../utils';

const styles = {
  container: {
    display: 'flex',
    border: `2px solid ${COLORS.darkBrown}`,
    height: 90,
    overflowX: 'scroll',
    padding: 10,
    backgroundColor: COLORS.red,
    marginBottom: 10,
  },
  icon: {
    fontSize: 20,
  },
};

export default function SectionsWindow({ onClick, openModal, content }) {
  const { sections } = useAppContext();
  const exampleSection = SECTIONS.getExampleSection();

  const canFindInContent = (item) => {
    if (item.type === SECTIONS.TYPES.HEADER) {
      return content.find((object) => object.type === item.type);
    }

    return content.find((object) => object.header === item.name);
  };

  const [selected, notSelected] = partition(sections, (x) =>
    canFindInContent(x)
  );

  const getButtonContent = ({ placeholder, name, getIcon }) => (
    <>
      <div style={styles.icon}>{getIcon()}</div>
      {placeholder ?? name}
    </>
  );

  const getButtonStyle = (item, isSelected) => ({
    margin: '7px 0px 7px 10px',
    width: 120,
    minWidth: 120,
    height: '80%',
    backgroundColor: 'color' in item ? item.color : COLORS.yellow,
    borderRadius: isSelected ? 20 : undefined,
    cursor: isSelected ? 'not-allowed' : 'pointer',
    opacity: isSelected ? 0.3 : 'inherit',
  });

  const buttonProps = (item, isPrimary = false, isSelected = false) => {
    const handleOnClick = isPrimary
      ? () => openModal(item)
      : () => (isSelected ? null : onClick(item.char));

    return {
      item,
      content: getButtonContent(item),
      onClick: handleOnClick,
      isPrimary,
      style: getButtonStyle(item, isSelected),
    };
  };

  return (
    <div style={styles.container}>
      <Button {...buttonProps(exampleSection, true)} />

      {notSelected.map((item, index) => (
        <div key={`${index + 1}`}>
          <Button {...buttonProps(item)} />
        </div>
      ))}

      {selected.map((item, index) => (
        <div key={`${index + 1}`}>
          <Button {...buttonProps(item, false, true)} />
        </div>
      ))}
    </div>
  );
}
