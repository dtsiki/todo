import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Button from './../Button';

import './style.scss';

const PopUp = ({ children, isPopUpActive, closePopUp }) => {
  const [container] = useState(document.createElement('div'));
  container.classList.add('pop-up');

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container, container.classList]);

  useEffect(() => {
    if (isPopUpActive) container.classList.add('pop-up--active');
    if (!isPopUpActive) container.classList.remove('pop-up--active');
  }, [container, isPopUpActive]);

  if (!isPopUpActive) return <div />;
  return ReactDOM.createPortal(
    <>
      <div className="pop-up-wrapper">
        <div className="pop-up-content">{children}</div>
      </div>
      <Button
        icon={<FontAwesomeIcon icon={faTimes} />}
        buttonClassName="pop-up-close-button"
        value="Close pop up"
        onClick={closePopUp}
        type="submit"
        variant="close"
        isValueVisuallyHidden
      />
    </>,
    container
  );
};

PopUp.propTypes = {
  children: PropTypes.node,
  isPopUpActive: PropTypes.bool,
  closePopUp: PropTypes.func,
};

export default PopUp;
