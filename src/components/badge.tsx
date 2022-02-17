import React from 'react'

interface IBadgeProps extends JSX.ElementChildrenAttribute {
    isBlack?: boolean
}

export function Badge({ isBlack, children }: IBadgeProps) {
    return (
        <section
            className={`inline-block bg-[#5BA4A4] px-2 py-1 mr-2 rounded-2xl text-white ${
                isBlack ? 'bg-black' : ''
            }`}
        >
            {children}
        </section>
    )
}
