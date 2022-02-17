import React from 'react'
import bgImage from '../images/bg-header-desktop.svg'
import { Search } from '../components/search'
import { useAtom } from 'jotai'
import { FilterAtom } from '../store'

export function Header() {
    const [filter] = useAtom(FilterAtom)
    return (
        <div className={`flex relative z-20 pt-[66px] justify-center`}>
            <div
                className="absolute z-20 top-0 left-0 w-full h-[100px] bg-[#5BA4A4]"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="relative z-30">
                {filter.length > 0 && <Search />}
            </div>
        </div>
    )
}
