import React from 'react'
import { FaTimes } from 'react-icons/all'

interface ITagProps extends JSX.ElementChildrenAttribute {
    isActive?: boolean
    className?: string
    onClick?: () => void
    onClose?: () => void
}

export function Tag({
    isActive,
    onClick,
    onClose,
    className,
    children,
}: ITagProps) {
    const isCloseShown = !!onClose
    return (
        <section
            onClick={isCloseShown ? () => {} : onClick}
            className={`inline-flex items-center font-bold 
            mr-2 rounded-md cursor-pointer overflow-hidden box-border sm:mb-0 mb-2 ${
                isCloseShown
                    ? 'pl-2 py-0'
                    : 'px-2 py-1 hover:text-white hover:bg-[#5BA4A4]'
            } ${
                !isCloseShown && isActive
                    ? 'bg-[#5BA4A4] text-white'
                    : 'text-[#5BA4A4] bg-[#5BA4A420]'
            } ${className}`}
        >
            <span className="text-[12px]">{children}</span>
            {isCloseShown && (
                <div
                    onClick={() => onClose()}
                    className="flex items-center ml-2 bg-[#5BA4A4] h-[30px] px-2
                text-white text-[12px] hover:bg-black"
                >
                    <FaTimes />
                </div>
            )}
        </section>
    )
}
