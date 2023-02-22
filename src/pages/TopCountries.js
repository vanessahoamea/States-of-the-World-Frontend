import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card.js";
import "../assets/css/Countries.css";

export default function TopCountries()
{
    const [selectedValue, setSelectedValue] = useState("population");
    const [showOptions, setShowOptions] = useState(false);
    const [countries, setCountries] = useState([]);
    const [loadedCountries, setLoadedCountries] = useState(false);

    useEffect(() => {
        setLoadedCountries(false);

        fetch("http://localhost:5000/top-10/" + selectedValue)
        .then(resp => resp.json())
        .then(resp => {
            setCountries(resp.map(country => {
                return {...country, flag: "https://countryflagsapi.com/svg/" + country.name}
            }));
        });
    }, [selectedValue]);

    function handleChange(event)
    {
        if(event.target.value == null || event.target.text == null)
            return;

        setSelectedValue(event.target.value);
        document.getElementById("selected-item").textContent = event.target.text;
        toggleOptions();
    }

    function toggleOptions()
    {
        setShowOptions(prevShowOptions => !prevShowOptions);
    }

    function showCountries()
    {
        setLoadedCountries(true);
    }

    return (
        <>
            <nav className="navigation">
                <Link to="/">States of the World</Link>
            </nav>

            <div className="data-input">
                <div className="container">
                    <label className="label">Sort by</label>

                    <div className="dropdown">
                        <div className="select" onClick={toggleOptions}>
                            <span id="selected-item">{selectedValue}</span>
                            <div className="arrow"></div>
                        </div>
                        {
                            showOptions &&
                            <ul className="option-menu" onClick={handleChange}>
                                <option value="population">Population</option>
                                <option value="area">Area</option>
                                <option value="density">Density</option>
                            </ul>
                        }
                    </div>
                </div>
            </div>

            <button className="show-button" onClick={showCountries}>Apply</button>
            <div className="country-list">
                {
                    loadedCountries &&
                    countries.map((country, index) => <Card
                        key={index} 
                        {...country} />
                    )
                }
            </div>
        </>
    );
}