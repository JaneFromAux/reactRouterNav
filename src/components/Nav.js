import { useState } from "react";
import { Link } from "react-router-dom";



const Nav = () => {

    const [change, setChange] = useState("hellbutton");
    const colorSpeise = () => {
        setChange(!change);
        setColor(true);
        setGall(true);
        setOeff(true);
    }
    const [color, setColor] = useState(true);
    const colorKontakt = () => {
        setChange(true);
        setColor(!color);
        setGall(true);
        setOeff(true);
    }
    const [oeff, setOeff] = useState(true);
    const colorOeffnung = () => {
        setOeff(!oeff);
        setChange(true);
        setColor(true);
        setGall(true);
    }
    const [gall, setGall] = useState(true);
    const colorGallerie = () => {
        setGall(!gall);
        setOeff(true);
        setChange(true);
        setColor(true);
    }

    return (
        <nav className="header">
            <div className="navText">
                <p>Kim's Café Köln</p>
            </div>
            <ul className="rechtButtons">
                <li className={change ? "hellButton" : "dunkelButton"}>
                    <Link onClick={colorSpeise} to="/speisekarte">Speisekarte</Link>
                </li>
                <li className={color ? "hellButton" : "dunkelButton"}>
                    <Link onClick={colorKontakt} to="/kontakt">Kontakt</Link>
                </li>
                <li className={oeff ? "hellButton" : "dunkelButton"}>
                    <Link onClick={colorOeffnung} to="/oeffnungszeiten">Öffnungszeiten</Link>
                </li>
                <li className={gall ? "hellButton" : "dunkelButton"}>
                    <Link onClick={colorGallerie} to="/gallerie">Gallerie</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;