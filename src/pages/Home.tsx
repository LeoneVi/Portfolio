import { Link } from 'react-router-dom'
import * as styles from "./Home.css.ts";
import {useState, useEffect} from 'react';

function Buttons() {
    const buttons = [
        { src: "/buttons/umass.png", link: "https://www.umass.edu/", alt: "UMass Amherst" },
        { src: "/buttons/linux-p.gif", alt: "Linux Powered" },
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

function Umaring(){
    type UmaringData = {
        prev: { name: string; url: string };
        next: { name: string; url: string };
    };

    const [data, setData] = useState<UmaringData | null>(null);
    useEffect(() => {
        fetch('https://umaring.mkr.cx/toryleone')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    if(!data){
        return <div>Loading...</div>;
    }else{
        const prevUrl = data.prev.url;
        const prevName = data.prev.name;
        const nextUrl = data.next.url;
        const nextName = data.next.name;
        return (
            <div id="umaring" className={styles.buttons}>
                <a href={prevUrl}>&larr; {prevName}</a>{" "}
                <a href="https://github.com/umacabal/umaring">umaring</a>{" "}
                <a href={nextUrl}>{nextName} &rarr;</a>
            </div>
        );
    }

}

function MainContent() {
    return (
        <div>
            <div className={styles.links}>
                <a href="https://github.com/LeoneVi">GitHub</a>
                <span> | </span>
                <a href="https://www.linkedin.com/in/victoria-leone-b27162270/">LinkedIn</a>
                <span> | </span>
                <Link to="/portfolio">Portfolio</Link>
            </div>
            <h1>Tory's Website</h1>
            <h2>About me</h2>
            <p>
                Hello, my name is Tory. I'm a CS student at UMass Amherst.
                I enjoy doing software development, hackathons, and web development.
            </p>
        </div>
    );
}

export default function Home() {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <MainContent/>
                <div>
                    <Buttons/>
                    <Umaring/>
                </div>
            </div>
            <Img/>
        </div>
    );
}