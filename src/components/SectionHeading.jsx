import { cn } from "@/lib/utils"

const SectionHeading = ({ children, className, ...rest }) => {
    return (
        <h3
            className={cn("text-center font-bold text-color-heading text-[32px] px-70 mt-10 mb-12 leading-9", className)}
            {...rest}
        >{children}</h3>
    )
}

export default SectionHeading