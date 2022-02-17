import React, { useCallback } from 'react'
import { useAtom } from 'jotai'
import { FilterAtom } from '../store'
import { Tag } from './tag'

export function Search() {
    const [filter, setFilter] = useAtom(FilterAtom)

    const onTagClose = useCallback(
        (name: string) => {
            if (filter.includes(name))
                return setFilter(filter.filter((f) => f !== name))
            return setFilter([...filter, name])
        },
        [filter, setFilter]
    )

    const onSearchClear = useCallback(() => {
        return setFilter([])
    }, [])

    return (
        <>
            <div
                className="flex items-center bg-white w-[80vw] px-5 py-4 rounded shadow-[#EEF6F6] shadow-xl
            outline-none"
            >
                <div className="flex-1">
                    {filter.map((tag) => (
                        <Tag onClose={() => onTagClose(tag)}>{tag}</Tag>
                    ))}
                </div>
                <div
                    onClick={() => onSearchClear()}
                    className="text-[12px] text-[#5BA4A4] cursor-pointer hover:underline"
                >
                    Clear
                </div>
            </div>
        </>
    )
}
