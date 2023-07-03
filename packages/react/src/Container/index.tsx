import React from 'react'
import clsx from 'clsx'

export interface ContainerProps
    extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    disabled?: boolean
}

export const Container = ({ children, className }: ContainerProps) => (
    <div className={clsx(` ${className}`)}>{children}</div>
)
