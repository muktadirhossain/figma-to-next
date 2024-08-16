import { cn } from '@/lib/utils'
import React from 'react'

const MainHeading = ({ children, className, ...rest }) => {
    return (
        <h2
            className={cn("scroll-m-20 text-6xl font-black tracking-tighter lg:text-5xl text-center text-color-heading", className)}
            {...rest}
        >{children}</h2>
    )
}

export default MainHeading