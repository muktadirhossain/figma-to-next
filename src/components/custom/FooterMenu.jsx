import MenuItems from '../MenuItems'

const FooterMenu = ({ links }) => {
    return (
        <nav className='flex justify-center items-center gap-x-6'>
            {
                links?.map(link => <MenuItems key={link.id}
                    label={link?.name}
                    path={link?.path}
                    className={"font-semibold text-[18px] "}
                />)
            }
        </nav>
    )
}

export default FooterMenu