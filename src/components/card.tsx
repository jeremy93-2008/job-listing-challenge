import React, { useCallback } from 'react'
import { FaCircle } from 'react-icons/fa'
import { FilterAtom, IJob } from '../store'
import { Badge } from './badge'
import { Tag } from './tag'
import { useAtom } from 'jotai'

export interface ICardProps extends IJob {
    isSelected?: boolean
    onClick?: (id: number) => void
    onTagClick?: (name: string) => void
}

export function Card(props: ICardProps) {
    const [filter] = useAtom(FilterAtom)
    const onClickCard = useCallback(
        (id: number) => {
            if (!props.onClick) return
            props.onClick(id)
        },
        [props]
    )
    const onTagClickCard = useCallback(
        (name: string) => {
            if (!props.onTagClick) return
            props.onTagClick(name)
        },
        [props]
    )
    return (
        <div
            onClick={() => onClickCard(props.id)}
            className={`bg-white flex flex-col mb-8 sm:flex-row items-center relative w-[80vw] sm:h-[105px] sm:mb-5 cursor-pointer
                rounded shadow-lg shadow-slate-400/30 transition-all border-l-2 ${
                    props.isSelected
                        ? 'border-l-[#5BA4A4] '
                        : 'border-l-transparent'
                }`}
        >
            <div className="pl-8">
                <img
                    alt="card-image"
                    className="w-[32px] top-[-18px] left-[15px] absolute sm:w-[108px] sm:top-0 sm:left-0 sm:relative"
                    src={props.logo}
                />
            </div>
            <div className="flex flex-col justify-center pl-5 w-full sm:pt-0 pt-5 sm:pb-0 pb-1">
                <div className="text-[10px] mb-1">
                    <span className="mr-2 text-[#5BA4A4] font-bold">
                        {props.company}
                    </span>
                    {props.new && <Badge>New</Badge>}
                    {props.featured && <Badge isBlack>Featured</Badge>}
                </div>
                <div className="font-bold mb-1 hover:text-[#5BA4A4]">
                    {props.position}
                </div>
                <div className="flex items-center text-[10px] text-gray-400">
                    <span className="mr-2">{props.postedAt}</span>
                    <FaCircle className="mr-2 w-[4px] h-[4px]" />
                    <span className="mr-2">{props.contract}</span>
                    <FaCircle className="mr-2 w-[4px] h-[4px]" />
                    <span>{props.location}</span>
                </div>
            </div>
            <div
                className="flex flex-1 text-[10px] mr-5 justify-start border-t-2 border-gray-100 flex-wrap ml-3 pt-2
            sm:flex-nowrap sm:border-0 sm:justify-end sm:ml-0 sm:pt-0"
            >
                {[
                    props.role,
                    props.level,
                    ...props.languages,
                    ...props.tools,
                ].map((entry) => (
                    <Tag
                        className="mb-2 sm:mb-0"
                        isActive={filter.includes(entry)}
                        onClick={() => onTagClickCard(entry)}
                    >
                        {entry}
                    </Tag>
                ))}
            </div>
        </div>
    )
}
