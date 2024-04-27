'use client';
import { useEffect } from 'react';

type SnackbarProps = {
  message: string;
  isOpen: boolean;
  duration?: number;
  onClose: () => void;
  type?: 'success' | 'error' | 'info';
};

const Snackbar = ({
  message,
  isOpen,
  duration = 3000,
  onClose,
  type = 'info'
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

  const alertTypeCls =
    type === 'success'
      ? 'alert-success'
      : type === 'error'
      ? 'alert-error'
      : 'alert-info';

  return (
    <div className='transform-center-x z-50 fixed max-w-lg top-4'>
      <div className={`alert ${alertTypeCls} shadow-lg animate-bounce`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Snackbar;
