import React from 'react'
import { Dialog, DialogTitle } from '@mui/material'

export interface HomeElementDialogProps {
    title: string
    active: boolean
    path?: string
    handleClose: () => void
}

export function HomeElementDialog (props: HomeElementDialogProps) {
    return (
        <div className="HomeElementModal">
            <Dialog open={props.active} onClose={props.handleClose}>
                <DialogTitle>{props.title}</DialogTitle>
            </Dialog>
        </div>
    )
}
