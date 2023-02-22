import "../assets/css/Home.css";

export default function Home(props)
{
    return (
        <>
            <div className="title-text">
                <h2>Welcome to</h2> 
                <i>States of the World!</i>
            </div>

            <div className="earth"></div>

            <h2 className="choose-text">Choose a filtering option:</h2>
            <div className="main-buttons">
                <button className="main-button" onClick={() => props.redirect("/top10")}>Top 10 countries</button>
                <button className="main-button" onClick={() => props.redirect("/all")}>All countries</button>
            </div>
        </>
    );
}