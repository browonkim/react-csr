import React from 'react'
import { HomeElementDialog } from './HomeElementDialog'

export interface HomeElementProps {
    img?: string
    title?: string
}

export function HomeElement (props: HomeElementProps) {
  return (
      <div className="home-element">
          <h1>{props.title}</h1>
          <HomeElementDialog dialogButtonLabel="modal" />
      </div>
  )
}
