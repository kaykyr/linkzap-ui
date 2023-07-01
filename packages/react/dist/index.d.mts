import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const Banner: () => react_jsx_runtime.JSX.Element;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color?: 'primary' | 'success' | 'danger' | 'warning' | 'dark' | 'lightGrey' | 'white';
    size?: 'small' | 'medium' | 'large' | 'w-full';
    className?: string;
    disabled?: boolean;
}
declare const Button: ({ children, color, size, className, disabled, ...rest }: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const Card: () => react_jsx_runtime.JSX.Element;

declare const Chart: () => react_jsx_runtime.JSX.Element;

declare const InputSearch: () => react_jsx_runtime.JSX.Element;

declare const List: () => react_jsx_runtime.JSX.Element;

declare const TopNav: () => react_jsx_runtime.JSX.Element;

export { Banner, Button, Card, Chart, InputSearch, List, TopNav };