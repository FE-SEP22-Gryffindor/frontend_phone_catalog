import classNames from 'classnames';
import React from 'react';
import './Modal.scss';

interface Props {
  isShown: boolean;
  onModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  isYes: boolean;
  onAnswer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<Props> = ({
  isShown,
  onModalShown,
  isYes,
  onAnswer,
}) => {
  return (
    <div className={classNames('modal', { modal__isActive: isShown })}>
      {!isYes && (
        <div className="modal__question">
          <h2>Confirmation of an order</h2>
          <p>{'Are you ready to place an order?'}</p>
          <div className="modal__answers">
            <button
              className="modal__button modal__button--ans"
              onClick={() => {
                onAnswer(true);
              }}
            >
              Yes
            </button>
            <button
              className="modal__button modal__button--ans"
              onClick={() => {
                onModalShown(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      )}

      {isYes && (
        <div className="modal__content">
          <h2>Thank you for your order!</h2>
          <p>{'We will contact to you soon:)'}</p>
          <button
            className="modal__button"
            onClick={() => {
              onModalShown(false);
            }}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};
