import React from 'react'
import { HomeElement } from '../components/HomeElement'

export function HomeView () {
  const items = ['todo', 'list', 'pagination-table', 'profile']
  const homeElements = items.map((item) => <HomeElement title={item} key={item}/>)
  return (
        <div className="home-view">
            { homeElements }
        </div>
  )
}
