import React, { useEffect, useState } from "react";
import {FormControl,NativeSelect} from "@material-ui/core";
import styles from "./CountryPicker.module.css"
import {fetchCountries} from "../../api"

const CountryPicker = ({handlerCountryChange}) => {

    const [fetchedCountries,setFetchCountries]=useState([]);

    useEffect(() => {
        const fetchCountrie= async () => {
            setFetchCountries(await fetchCountries());
        }

        fetchCountrie();
    },[setFetchCountries]);
 
    return(
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handlerCountryChange(e.target.value)}>
                    <option   value="">Global</option> 
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option> )}  
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default CountryPicker