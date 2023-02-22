import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home.js";
import TopCountries from "./pages/TopCountries.js";
import AllCountries from "./pages/AllCountries.js";
import "./assets/css/App.css";

export default function App()
{
    const navigate = useNavigate();
    function redirect(path)
    {
        navigate(path);
    }

    return (
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Home redirect={redirect}/>} />
                <Route path="/top10" element={<TopCountries />} />
                <Route path="/all" element={<AllCountries />} />
            </Routes>
        </main>
    );
}