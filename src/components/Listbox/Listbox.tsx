import React, { useState } from 'react';
import Select, { components } from "react-select";
import { AiFillCaretDown } from "react-icons/ai";


const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <AiFillCaretDown />
        </components.DropdownIndicator>
    );
};


interface IListboxProps extends IBaseProps {
    options: any;
    isMulti?: boolean | undefined;
    isSearchable?: boolean | undefined;
    isLoading?: boolean | undefined;
    isDisabled?: boolean | undefined;
    defaultValue?: any;
    placeholder?: string;
}


const Listbox: React.FC<IListboxProps> = ({ options, isMulti, isDisabled, isLoading, isSearchable, defaultValue, placeholder }) => {

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            '&:active': { borderColor: 'gray' },
            '&:focus': { borderColor: 'gray' },
            '&:select': { borderColor: 'gray' },
            '&:hover': { borderColor: 'gray' },
            borderColor: 'none',
            boxShadow: "none",
            backgroundColor: "#F4F4F5"
        }),
        option: (provided: any, { data, isDisabled, isFocused, isSelected }: any) => ({
            ...provided,
            backgroundColor: isSelected ? "#9333EA" : (isFocused ? "#F3E8FF" : null),
        }),
        indicatorSeparator: (provided: any) => ({
            ...provided,
            display: "none"
        })
    }

    const [region, setRegion] = useState(defaultValue);

    const onchangeSelect = (item: any) => {
        setRegion(item);
    };

    return (
        <Select
        isMulti={isMulti}
        isSearchable={isSearchable}
        isDisabled={isDisabled}
        isLoading={isLoading}
        placeholder={placeholder}
        styles={customStyles}
        value={region}
        onChange={onchangeSelect}
        options={options}
        components={{ DropdownIndicator }}
        getOptionValue={(option: any) => option.value}
        getOptionLabel={(option: any) => option.value}
    />
       
    )
}





export { Listbox }