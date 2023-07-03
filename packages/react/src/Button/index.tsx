import React from 'react'
import clsx from 'clsx'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    color?:
        | 'primary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'dark'
        | 'lightGrey'
        | 'white'
    size?: 'auto' | 'w-full'
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
        className={clsx(
            `font-secondary flex justify-center rounded p-2 text-sm font-semibold transition-opacity duration-300 hover:opacity-75 ${className}`,
            {
                'w-full': size === 'w-full',
                'bg-lightGrey': disabled === true,
                'bg-primary': color === 'primary' && !disabled,
                'bg-success': color === 'success' && !disabled,
                'bg-danger': color === 'danger' && !disabled,
                'bg-warning': color === 'warning' && !disabled,
                'bg-dark': color === 'dark' && !disabled,
                'bg-light': color === 'lightGrey' && !disabled,
                'bg-white': color === 'white' && !disabled,
                'cursor-not-allowed': disabled,
            },
        )}
        disabled={disabled}
        {...rest}
    >
        <span
            className={clsx('', {
                'text-white': !color,
                'text-light':
                    color === 'lightGrey' || disabled || color === 'white',
            })}
        >
            {children}
        </span>
    </button>
)
