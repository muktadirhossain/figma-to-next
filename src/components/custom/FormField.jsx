import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const FormField = ({ label, helperText, placeholder, ...rest }) => {
    return (
        <div className='mb-[30px]' {...rest}>
            <div className='mb-2 pl-1'>
                <Label className="block font-bold text-[18px]" htmlFor="Insurance">{label}</Label>
                <p className='block text-[#151439] text-left opacity-40 text-base font-normal mt-1 mb-2'>{helperText}</p>
            </div>
            <Input type="text" id="Insurance" placeholder={placeholder}
                className="placeholder-xs-placeholder placeholder-color-text font-bold"
            />
        </div>
    )
}

export default FormField