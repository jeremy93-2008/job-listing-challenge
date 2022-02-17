import React, { useCallback, useEffect, useState } from 'react'
import { Header } from './templates/header'
import { FilterAtom, ListOfJobs as originalListOfJobs } from './store'
import { Card } from './components/card'
import { useAtom } from 'jotai'

export function App() {
    const [filter, setFilter] = useAtom(FilterAtom)

    const [ListOfJobs, setListOfJobs] = useState(originalListOfJobs)
    const [selected, setSelected] = useState<number[]>([])

    const onSelectedClick = useCallback(
        (id: number) => {
            if (selected.indexOf(id) === -1)
                return setSelected([...selected, id])
            setSelected([...selected.filter((sel) => sel !== id)])
        },
        [selected]
    )

    const onFilterClick = useCallback(
        (text: string) => {
            if (!filter.includes(text)) return setFilter([...filter, text])
            setFilter([...filter.filter((sel) => sel !== text)])
        },
        [filter]
    )

    useEffect(() => {
        if (filter.length < 1) return setListOfJobs(originalListOfJobs)
        setListOfJobs(
            originalListOfJobs.filter(
                (job) =>
                    [
                        job.role,
                        job.level,
                        ...job.languages,
                        ...job.tools,
                    ].filter((text) => filter.includes(text)).length >
                    filter.length - 1
            )
        )
    }, [filter])

    return (
        <div>
            <Header />
            <div className={`flex flex-col items-center sm:mt-15 mt-20`}>
                {ListOfJobs.map((job) => (
                    <Card
                        isSelected={selected.includes(job.id)}
                        onClick={(id) => onSelectedClick(id)}
                        onTagClick={(name) => onFilterClick(name)}
                        {...job}
                    />
                ))}
            </div>
        </div>
    )
}
