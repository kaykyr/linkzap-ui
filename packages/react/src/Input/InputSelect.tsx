import React, { useState } from 'react'
import clsx from 'clsx'

export interface SelectProps
    extends React.InputHTMLAttributes<HTMLSelectElement> {
    label?: string
    handler: any
    children: any
}

export const Select = ({
    label,
    className,
    children,
    defaultValue,
    handler,
}: SelectProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    return (
        <div
            className={clsx(`mb-4 w-full ${className}`)}
            onClick={() => setIsVisible(!isVisible)}
        >
            <div className="text-darkBlue mb-4 text-xs font-semibold leading-5">
                {label}
            </div>
            <div
                data-visible={isVisible}
                className="
                    data-[visible=true]:bg-bgContrast
                    data-[visible=false]:bg-bg

                    relative
                    float-none
                    h-[50px]
                    w-full
                    cursor-pointer
                    rounded-lg
                    border-none
                    font-medium
                    leading-10
                    shadow-md
                    transition-all
                    duration-200

                    before:absolute
                    before:right-4
                    before:mt-7
                    before:h-4
                    before:w-3
                    before:content-none
                "
            >
                <div
                    className="
                        overflow-hidden
                        overflow-ellipsis
                        whitespace-nowrap
                        text-gray-300
                    "
                    style={{
                        maxWidth: 'calc(100% - 46px)',
                    }}
                >
                    <span className="overflow-hidden overflow-ellipsis whitespace-nowrap px-4 py-0 text-gray-300">
                        {label}
                    </span>
                </div>
                <ul
                    className="
                        relative
                        left-0
                        right-0
                        z-10
                        mt-1
                        max-h-[300px]
                        overflow-hidden
                        overflow-y-auto
                        border
                        border-solid
                        border-gray-600
                        p-6
                        px-5
                        py-3
                        shadow-md
                        group-[data-[visible=true]]:block
                        group-[data-[visible=false]]:hidden
                    "
                >
                    <Option value="1">Teste 1</Option>
                    <Option value="2">Teste 2</Option>
                    <Option value="3">Teste 3</Option>
                    {/* {children &&
                        children.length > 0 &&
                        children.map((child: any, i: number) => (
                            <Option key={i} {...child} />
                        ))} */}
                </ul>
            </div>
        </div>
    )
}

export const Option = ({ label, value }: any) => (
    <li
        className="
            hover:text-primary
            relative
            text-gray-200
            opacity-70
            transition-all

            duration-200
            before:absolute
            before:-ml-4
            before:mt-6
            before:h-3

            before:w-3
            before:transition-opacity
            before:duration-200
            before:content-none
            hover:cursor-pointer
            hover:opacity-100

            hover:transition-all
            hover:duration-200
        "
        data-value={value}
    >
        {label}
    </li>
)
