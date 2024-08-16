import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import MenuItems from './MenuItems'



const HeaderMenu = ({links}) => {
    return (
        <div className='flex justify-between items-center'>
            <div><a href="#" className='font-bold text-2xl text-color-heading'>Name</a></div>
            <nav className='flex items-center gap-x-6'>
                {
                    links?.map(link => < MenuItems
                        key={link.id}
                        label={link?.name}
                        path={link?.path} />)
                }
            </nav>
            <div>
                <Button variant="link">Login</Button>
                <Button variant="primary_outline" size="regular">Sign in</Button>
            </div>
        </div>
    )
}

export default HeaderMenu