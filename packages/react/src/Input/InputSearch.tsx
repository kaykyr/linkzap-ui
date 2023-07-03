import React from 'react'
import clsx from 'clsx'

import { SearchIcon } from '../Icons'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    color?: 'transparent' | 'lightGrey'
    iconColor?: string
    className?: string
    disabled?: boolean
}

export const InputSearch = ({
    color,
    iconColor,
    className,
    disabled,
}: InputProps) => (
    <div
        className={clsx(
            `
                flex
                flex-row
                items-center
                justify-center
                rounded-xl
                px-6
                py-4
                ${className}
            `,
            {
                'bg-transparent': color === 'transparent' && !disabled,
                'bg-lightGrey': color === 'lightGrey' || !color || disabled,
                'cursor-not-allowed': disabled,
            },
        )}
    >
        <input
            className="
                bg-transparent
                placeholder:text-sm
                placeholder:font-bold
            "
            type="search"
            placeholder="Pesquisar"
        />
        <SearchIcon color={iconColor} />
    </div>
)
