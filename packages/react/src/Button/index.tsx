import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    color?:
        | 'primary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'dark'
        | 'lightGrey'
        | 'white'
    size?: 'small' | 'medium' | 'large' | 'w-full'
    className?: string
    disabled?: boolean
}

export const Button = ({
    children,
    color,
    size,
    className,
    disabled,
    ...rest
}: ButtonProps) => (
    <button
        className={`flex w-[150px] justify-center rounded bg-${
            color || 'primary'
        } p-2 transition-opacity duration-300 hover:opacity-75 ${className}`}
        disabled={disabled}
        {...rest}
    >
        <span className="text-white">{children}</span>
    </button>
)
