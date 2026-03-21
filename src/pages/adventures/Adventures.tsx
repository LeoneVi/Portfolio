import { Link } from 'react-router-dom'
import * as styles from "./Adventures.css.ts";

function Maps(){
    const maps = [
        { src: "/Maps/Brazil.png", alt: "Brazil", width: "300px" },
        { src: "/Maps/America.png", alt: "America", width: "490px" },
        { src: "/Maps/Italy.png", alt: "Italy", width: "300px" },
    ];

    return (

        <div className={styles.maps}>
            {maps.map((map, i) => (
                <a key={i}>
                    <img src={map.src} alt={map.alt} style={{width: map.width}}/>
                </a>
            ))}
        </div>
    );
}

export default function Adventures() {
    return (
        <div className={styles.layout}>
            <Link to="/" className={styles.backArrow}>←</Link>
            <h1>My Adventures</h1>
            <h2>Countries I've visited</h2>
            <Maps/>
            <h2>Adventure stories</h2>
            <ul>
                <li><Link to="/adventures/cheshire">Cheshire, Massachusetts</Link></li>
            </ul>
        </div>
    )
}