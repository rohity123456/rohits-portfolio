'use client';
import { ReactNode, useState } from 'react';
import Button from '../button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='modal modal-open'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>{title}</h3>
        {children}
        <div className='modal-action'>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
