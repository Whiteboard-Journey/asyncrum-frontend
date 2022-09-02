import React, { useState } from 'react';
import { useToggle } from 'hooks';

const useWhiteboardCard = () => {
  const [isEditOpen, toggleEdit] = useToggle();
  const [isDeleteOpen, toggleDelete] = useToggle();
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const closeModalAfterFunction = (
    f: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    event: React.FormEvent<HTMLFormElement>,
    toggle: () => void
  ) => {
    f(event);
    toggle();
  };

  return { isEditOpen, isDeleteOpen, isReadMore, toggleEdit, toggleDelete, toggleReadMore, closeModalAfterFunction };
};

export default useWhiteboardCard;
