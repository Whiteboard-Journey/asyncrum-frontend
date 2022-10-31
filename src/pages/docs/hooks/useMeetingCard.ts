import React, { useState } from 'react';
import { useToggle } from 'hooks';

const useMeetingCard = () => {
  const [isDeleteOpen, toggleDelete] = useToggle();

  const closeModalAfterFunction = (
    f: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    event: React.FormEvent<HTMLFormElement>,
    toggle: () => void
  ) => {
    f(event);
    toggle();
  };

  return { isDeleteOpen, toggleDelete, closeModalAfterFunction };
};

export default useMeetingCard;
