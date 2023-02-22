import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card.js";
import InputPair from "../components/InputPair.js";
import "../assets/css/Countries.css";

export default function AllCountries()
{
    const [selectedValues, setSelectedValues] = useState({});
    const [showOptions, setShowOptions] = useState(false);

    return (
        <>
            <nav className="navigation">
                <Link to="/">States of the World</Link>
            </nav>
            
            <div className="data-input">
                <div className="container">
                    <InputPair 
                        key={0}
                        first_label="Country name"
                        first_id="name"
                        second_label="Capital"
                        second_id="name"
                    />

                    <InputPair 
                        key={1}
                        first_label="Language(s) spoken"
                        first_id="languages"
                        second_label="Population"
                        second_id="population"
                    />

                    <InputPair 
                        key={2}
                        first_label={"Density (per km²)"}
                        first_id="density"
                        second_label="Area (in km²)"
                        second_id="area"
                    />

                    <InputPair 
                        key={3}
                        first_label="Time zone"
                        first_id="time-zone"
                        second_label="Currency used"
                        second_id="currency"
                    />

                    <label className="label">Government</label>
                    <input className="input last-input" type="text" id="government" name="government"></input>
                </div>
            </div>

            <button className="show-button" onClick={null}>Apply</button>
        </>
    );
}