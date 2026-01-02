import { Button as ChakraButton } from '@chakra-ui/react';
import { MouseEventHandler, ReactNode } from 'react';

const variants = {
  solid: "w-full mx-auto flex justify-center py-2 px-4 border border-transparent rounded-sm shadow-sm text-lg font-medium text-white bg-orange-600 hover:bg-orange-700 active:scale-[0.98] transition-all",
  outline: "bg-white text-blue-500 border border-blue-500",
};

export type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: keyof typeof variants;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string; // optional extra Tailwind classes
};

export const Button = ({
  variant = 'solid',
  type = 'button',
  children,
  className = "font-roboto",
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton
      {...props}
      type={type}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </ChakraButton>
  );
};