import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color?: 'primary' | 'success' | 'danger' | 'warning' | 'dark' | 'lightGrey' | 'white';
    size?: 'auto' | 'w-full';
    className?: string;
    disabled?: boolean;
}
declare const Button: ({ children, color, size, className, disabled, ...rest }: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const Card: () => react_jsx_runtime.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    color?: 'transparent' | 'lightGrey';
    iconColor?: string;
    className?: string;
    disabled?: boolean;
}
declare const InputSearch: ({ color, iconColor, className, disabled, }: InputProps) => react_jsx_runtime.JSX.Element;

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    label?: string;
    handler: any;
    children: any;
}
declare const Select: ({ label, className, children, defaultValue, handler, }: SelectProps) => react_jsx_runtime.JSX.Element;
declare const Option: ({ label, value }: any) => react_jsx_runtime.JSX.Element;

declare const TopNav: () => react_jsx_runtime.JSX.Element;

export { Button, ButtonProps, Card, InputProps, InputSearch, Option, Select, SelectProps, TopNav };
