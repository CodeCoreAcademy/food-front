import { Typography } from '@mui/material'
import React from 'react'
import PrimarySearchAppBar from './Appbar'
export default function Home() {
    return (
        <div>
            <PrimarySearchAppBar />
            <Typography variant="h3" component="h2" align='left'>
                Offers
            </Typography>
            <Typography variant="h3" component="h2" align='left'>
                Cuisins
            </Typography>
            <Typography variant="h3" component="h2" align='left'>
                Restaurants
            </Typography>
        </div>
    )
}

