'use client';
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'none';
  className?: string;
  onClick: () => void;
};

const Button = ({
  children,
  variant = 'primary',
  onClick,
  className = ''
}: ButtonProps) => {
  const baseStyle = 'btn';
  const variantStyle = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-error',
    none: ''
  };

  return (
    <button
      className={`${baseStyle} ${variantStyle[variant]}${' ' + className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
