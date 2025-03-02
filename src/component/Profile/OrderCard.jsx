import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className=' flex justify-between items-center p-5'>
        <div className=' flex items-center space-x-5'>
            <img className=' h-16 w-16'
             src="https://media.istockphoto.com/id/1410336311/photo/chicken-biriyani-with-raita-and-pickle-served-in-a-golden-dish-isolated-on-dark-background.jpg?s=2048x2048&w=is&k=20&c=ZbTsrI9wkxxMuHSX54Gnz55DHa6HMQ8t2vbPeDC1GkU=" alt="" />
             <div>
                <p>Biryani</p>
                <p>499</p>
             </div>
        </div>
        <div>
            <Button className=' cursor-not-allowed'> Completed</Button>
        </div>
    </Card>
  )
}

