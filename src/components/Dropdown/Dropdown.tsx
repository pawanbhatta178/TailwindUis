import React, { useState } from 'react';
import Select, { components } from "react-select";
import { AiFillCaretDown } from "react-icons/ai";


interface IDropdownProps extends IBaseProps {
    options: any;
    isMulti?: boolean | undefined;
    isSearchable?: boolean | undefined;
    isLoading?: boolean | undefined;
    isDisabled?: boolean | undefined;
}


const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <AiFillCaretDown />
        </components.DropdownIndicator>
    );
};


const Dropdown: React.FC<IDropdownProps> = ({ options, isMulti, isDisabled, isLoading, isSearchable }) => {

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            '&:active': { borderColor: 'gray' },
            '&:focus': { borderColor: 'gray' },
            '&:select': { borderColor: 'gray' },
            '&:hover': { borderColor: 'gray' },
            borderColor: 'none',
            boxShadow: "none",
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


    const [region, setRegion] = useState(options[0]);

    const onchangeSelect = (item: any) => {
        console.log(item)
        setRegion(item);
    };

    return (
        <Select
            isMulti={isMulti}
            isSearchable={isSearchable}
            isDisabled={isDisabled}
            isLoading={isLoading}
            placeholder="Please select one.."
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











export { Dropdown }