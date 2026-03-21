import { Link } from 'react-router-dom'
import * as styles from "./Adventures.css.ts";


export default function IlhaGrande() {
    return (
        <div>
            <Link to="/adventures" className={styles.backArrow}>←</Link>
            <h1>My adventure in Ilha Grande, Brazil</h1>
        </div>
    )
}