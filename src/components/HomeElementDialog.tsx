import React from 'react'
import { Dialog, DialogTitle } from '@mui/material'

export function HomeElementDialog (props: any) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
        <div className="HomeElementModal">
            <button onClick={handleClickOpen}>{props.dialogButtonLabel}</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Dialog</DialogTitle>
            </Dialog>
        </div>
  )
}
