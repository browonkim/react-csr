import React from 'react'

export interface HomeElementProps {
    img?: string
    title?: string
    handleClick?: () => void
}

export function HomeElement (props: HomeElementProps) {
    const clickElement = () => {
        props.handleClick?.()
    }

    return (
        <div className="home-element" onClick={clickElement}>
            <h1>{props.title}</h1>
        </div>
    )
}
