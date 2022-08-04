import { useToggle } from 'hooks';
import { useState } from 'react';

export default function useModal() {
    const [isOpen, toggleModal] = useToggle();

    const [size, setSize] = useState<'sm' | 'lg' | 'xl'>();
    const [className, setClassName] = useState<string>('');
    const [scroll, setScroll] = useState<boolean>(false);

    // Opens large modal
    const openModalWithSize = (size: 'sm' | 'lg' | 'xl') => {
        setSize(size);
        setClassName('');
        setScroll(false);
        toggleModal();
    };

    // Opens modal with custom class
    const openModalWithClass = (className: string) => {
        setClassName(className);
        setScroll(false);
        toggleModal();
    };

    // Opens large modal
    const openModalWithScroll = () => {
        setScroll(true);
        setSize('sm');
        setClassName('');
        toggleModal();
    };

    return {
        isOpen,
        size,
        className,
        scroll,
        toggleModal,
        openModalWithSize,
        openModalWithClass,
        openModalWithScroll,
    };
}
