'use client';
import { useEffect } from 'react';

type SnackbarProps = {
  message: string;
  isOpen: boolean;
  duration?: number;
  onClose: () => void;
};

const Snackbar = ({
  message,
  isOpen,
  duration = 3000,
  onClose
}: SnackbarProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`alert alert-info shadow-lg`}>
      <span>{message}</span>
    </div>
  );
};

export default Snackbar;
