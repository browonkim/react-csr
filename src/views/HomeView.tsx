import React, { useState } from 'react'
import { HomeElement } from '../components/HomeElement'
import { HomeElementDialog } from '../components/HomeElementDialog'

export function HomeView () {
    const items = ['todo', 'list', 'pagination-table', 'profile']
    const [dialogTitle, setDialogTitle] = useState<string>('')
    const [dialogActive, setDialogActive] = useState<boolean>(false)
    const handleClickElement = (title: string) => {
        setDialogTitle(title)
        setDialogActive(true)
    }
    const handleDialogClose = () => {
        setDialogActive(false)
    }
    const homeElements = items.map((item) => <HomeElement title={item} key={item}
                                                          handleClick={() => {
                                                              handleClickElement(item)
                                                          }}/>)

    return (
        <div className="home-view">
            {homeElements}
            <HomeElementDialog handleClose={handleDialogClose} title={dialogTitle} active={dialogActive}/>
        </div>
    )
}
