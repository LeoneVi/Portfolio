import { Link } from 'react-router-dom'
import * as styles from "./Adventures.css.ts";

function Maps() {
    const maps = [
        {src: "/maps/Brazil.png", alt: "Brazil", width: "300px"},
        {src: "/maps/America.png", alt: "America", width: "490px"},
        {src: "/maps/Italy.png", alt: "Italy", width: "300px"},
    ];

    return (
        <div>
            <div className={styles.maps}>
                {maps.map((map, i) => (
                    <a key={i}>
                        <img src={map.src} alt={map.alt} style={{width: map.width}}/>
                    </a>
                ))}
            </div>
            <ul style={{listStyle: "none", padding: 0}}>
                <li>
                   <span
                       className={styles.square}
                       style={{backgroundColor: styles.mapColors.livedIn}}
                   />
                    {" "}States I've lived in.
                </li>
                <li>
                    <span
                        className={styles.square}
                        style={{backgroundColor: styles.mapColors.visited}}
                    />
                    {" "}States I've visited.
                </li>
                <li>
                    <span
                        className={styles.square}
                        style={{backgroundColor: styles.mapColors.drivenThrough}}
                    />
                    {" "}States I've passed through.
                </li>
            </ul>
        </div>
    );
}

export default function Adventures() {
    return (
        <div>
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