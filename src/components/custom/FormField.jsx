import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const FormField = ({ label, helperText, placeholder, ...rest }) => {
    return (
        <div className='mb-[30px]' {...rest}>
            <div className='mb-2 pl-1'>
                <Label className="block font-bold text-[18px]" htmlFor="Insurance">{label}</Label>
                <span className='block text-[#151439] opacity-40 text-base font-normal mt-1 mb-2'>{helperText}</span>
            </div>
            <Input type="text" id="Insurance" placeholder={placeholder}
                className="placeholder-xs-placeholder placeholder-[#15143923] font-bold"
            />
        </div>
    )
}

export default FormField