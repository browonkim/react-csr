import React from 'react'

export function HomeElementModal (props: any) {
  return (
        <div className="HomeElementModal">
            <h1>{props.title}</h1>
            <button>cancel</button>
            <button>ok</button>
        </div>
  )
}
