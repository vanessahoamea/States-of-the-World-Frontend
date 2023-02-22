import "../assets/css/Card.css";

export default function Card(props)
{
    const defaultSrc = "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_with_question_mark.svg";
    const languages = props.language.replace("[", "").replace("]", "");
    const population = new Intl.NumberFormat("en-DE").format(props.population);
    const area = new Intl.NumberFormat("en-DE").format(props["area (km2)"]);

    return (
        <div className="card">
            <div className="image-container">
                <img 
                    src={props.flag} 
                    onError={(e) => {e.target.onError = null; e.target.src = defaultSrc}} 
                    crossOrigin="anonymous" 
                    alt="National flag">
                </img>
            </div>

            <div className="country-data">
                <h2>{props.name}</h2>
                <p><i className="fa-solid fa-landmark-flag fa-fw"></i> <b>Capital:</b> {props.capital}</p>
                <p><i className="fa-solid fa-language fa-fw"></i> <b>Language(s):</b> {languages}</p>
                <p><i className="fa-solid fa-user-group fa-fw"></i> <b>Population:</b> {population}</p>
                <p><i className="fa-solid fa-people-roof fa-fw"></i> <b>Density:</b> {props["density (per km2)"]}/km<sup>2</sup></p>
                <p><i className="fa-solid fa-mountain-city fa-fw"></i> <b>Area:</b> {area} km<sup>2</sup></p>
                <p><i className="fa-solid fa-clock fa-fw"></i> <b>Time zone:</b> {props.time_zone}</p>
                <p><i className="fa-solid fa-money-bill fa-fw"></i> <b>Currency:</b> {props.currency}</p>
                <p><i className="fa-solid fa-scale-balanced fa-fw"></i> <b>Government:</b> {props.government}</p>
            </div>
        </div>
    );
}