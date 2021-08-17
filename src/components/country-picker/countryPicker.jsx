import React from 'react'
import './countryPicker.scss'
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const CountryPicker = ({ countryData, handleCountryChange }) => {
    
    return (
        <div>
            <FormControl className="formControl">
                <NativeSelect className="nativeSelect" defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
                    <option className="option" value="">Global</option>
                    {countryData.map((country, i) => <option className="option" value={country} key={i}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default CountryPicker