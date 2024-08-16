import { cn } from '@/lib/utils'
import Link from 'next/link'

const MenuItems = ({ label, path, className, ...rest }) => {
    return (
        <Link href={path}
            className={cn('block text-base font-normal text-color-heading', className)}
            {...rest}
        >{label}</Link>
    )
}

export default MenuItems