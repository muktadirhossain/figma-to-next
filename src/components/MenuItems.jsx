import { cn } from '@/lib/utils'
import Link from 'next/link'

const MenuItems = ({ label, path, className, ...rest }) => {
    return (
        <Link href={path}
            className={cn('block text-base font-[500] text-color-heading hover:underline delay-150 ease-in-out', className)}
            {...rest}
        >{label}</Link>
    )
}

export default MenuItems