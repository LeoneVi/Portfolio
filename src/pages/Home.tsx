import { Link } from 'react-router-dom'
import * as styles from "./Home.css.ts";

function Buttons() {
    const buttons = [
        { src: "/buttons/umass.png", link: "https://www.umass.edu/", alt: "UMass Amherst" },
        { src: "/buttons/linux-p.gif", alt: "Linux Powered" },
        { src: "/buttons/banporn.png", link: "https://denshi.org/antiporn", alt: "Ban Porn" },
        { src: "/buttons/denshi.png", link: "https://denshi.org", alt: "Denshi" },
    ];

    return (
        <div>
            <div className={styles.buttons}>
                {buttons.map((btn, i) => (
                    <a key={i} href={btn.link}>
                        <img src={btn.src} alt={btn.alt} />
                    </a>
                ))}
            </div>
        </div>
    );
}

function Img() {
    return (
        <div className={styles.imageDisplay}>
            <img
                src="/field.jpeg"
                alt="field"
                className={styles.image}
            />
        </div>
    );
}

function MainContent() {
    return (

        <div className={styles.mainContent}>
            <div className={styles.links}>
                <a href="https://github.com/LeoneVi">GitHub</a>
                <span> | </span>
                <a href="https://www.linkedin.com/in/victoria-leone-b27162270/">LinkedIn</a>
                <span> | </span>
                <a><Link to="/portfolio">Portfolio</Link></a>
            </div>

            <h1>Tory's Website</h1>

            <h2>About me</h2>
            <p>
                Hello, my name is Tory. I'm a CS student at UMass Amherst.
                I enjoy doing software development, hackathons, and web development.
            </p>


            <h3> Cool things </h3>
            <ul>
                <li><Link to="/adventures">My Adventures</Link></li>
            </ul>
            <Buttons/>
        </div>
    );
}

export default function Home() {
    return (
        <div className={styles.layout}>
            <MainContent/>
            <Img/>
        </div>
    );
}