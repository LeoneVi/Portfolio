import { Link } from 'react-router-dom'
import * as styles from "./Adventures.css.ts";

export default function Cheshire() {
    return (
        <div className={styles.layout}>
            <Link to="/adventures" className={styles.backArrow}>←</Link>            <h1>My adventure in Cheshire</h1>
            <h2>Ashuwillticook Trail | May 14, 2025 </h2>
            <p>
                I borrowed a book about bike trails from my library, and discovered a trail
                not too far from my university. Inside the book, there was a map of a bike trail, starting in
                Adams, going through Cheshire before looping back.
            </p>

            <div className={styles.center}>
                <img src={"/adventures/cheshire/01.png"} alt={"Ashuwillticook Trail Map"} width="30%"/>
            </div>

            <p>
                It was a somewhat humid and cloudy spring morning. The leaves, just having grown back after a long
                winter, were vibrantly green.
                In order to minimize my phone usage as much as possible, I navigated solely by using the trail map I had
                printed out,
                and took photos using my digital camera.
            </p>

            <div className={styles.center}>
                <img src={"/adventures/cheshire/02.jpeg"} alt={"View of the river."} width="30%"/>
                <img src={"/adventures/cheshire/03.jpeg"} alt={"My bike."} width="30%"/>
            </div>

            <p>The beginning of the trail followed along a river with a strong current. There were some signs posted
                along
                the road
                explaining the history of how the energy from the river was used to power Mill factories. Eventually,
                this road led me to the Cheshire Reservoir, a gigantic body of water with cute houses along its shore.
                At this point, the trail ahead of me was blocked for 20 minutes due to construction, in the meantime I
                talked to two locals about
                the town.
            </p>

            <div className={styles.center}>
                <img src={"/adventures/cheshire/04.jpeg"} alt={"Sign that says Cheshire."} width="30%"/>
                <img src={"/adventures/cheshire/Lake.jpeg"} alt={"Cheshire Reservoir"} width="30%"/>
            </div>

            <p>
                I looped around the Reservoir via Farnams Rd. and started heading north. As I made my way, I passed by
                the most stereotypically American houses.
            </p>

            <div className={styles.center}>
                <img src={"/adventures/cheshire/06.jpeg"} alt={"Very American looking house."} width="30%"/>
            </div>
            <p>
                At this point, the roads started to become more isolated. I was the only biker for miles. A car would
                occasionally pass by
                every 20 minutes or so. At some point I stopped to look at my map, unsure of where I was. An older lady
                who saw me confusingly
                looking at my map, rolled down her car window and asked me, "Do you need help dear?". She helped
                confirm that I was on Wells Rd.
            </p>

            <div className={styles.center}>
                <img src={"/adventures/cheshire/07.jpeg"} alt={"Wells Rd, Cheshire"} width="30%"/>
                <img src={"/adventures/cheshire/08.jpeg"} alt={"View of the mountains on Wells Rd, Cheshire."}
                     width="30%"/>
            </div>

            <p>
                The ride up Wells Rd. was extremely steep, I was lucky that I had been consistently cycling for months
                before this point!
                My jaw dropped as I made my way up north and the blue mountains became more visible to me. I was
                completely in awe riding through this
                beautiful little farm town.
            </p>

            <div className={styles.center}>
                <img src={"/adventures/cheshire/field.jpeg"} alt={"Field"} width="30%"/>
                <img src={"/adventures/cheshire/goat.jpeg"} alt={"Goat"} width="30%"/>
            </div>

            <p>
                There were some livestock fenced in alongside the road. In the distance, I saw some horses walking
                over towards me.
            </p>

            <div className={styles.center}>
                <img src={"/adventures/cheshire/Horse1.jpeg"} alt={"Horses"} width="30%"/>
                <img src={"/adventures/cheshire/Horse2.jpeg"} alt={"Horses"} width="30%"/>
                <img src={"/adventures/cheshire/Horse3.jpeg"} alt={"Horses"} width="30%"/>
            </div>

            <p>
                I turned into Henry Wood Rd. Miles and miles of roads, not a person in site...
            </p>
            <div className={styles.center}>
                <img src={"/adventures/cheshire/redBarn.jpeg"} alt={"redBarn"} width="45%"/>
            </div>

            <p>
                I ran into a farm stand! You know you're in a high trust area when you see goods like this out in the
                open.
                I hadn't seen a little shop like this using the honor system since I visited Vermont a year prior! I
                bought some
                honey to give to my mom for Mother's day.
            </p>
            <div className={styles.center}>
                <img src={"/adventures/cheshire/Honey.jpeg"} alt={"Honey farmer's stand"} width="30%"/>
            </div>

            <p>
                The trail led me to the Susan B. Anthony Birthplace Museum via East rd. Behind the house was a little
                park area with tools from her era out on display.
            </p>
            <div className={styles.center}>
                <img src={"/adventures/cheshire/SusanBAnthony.jpeg"} alt={"Susan B Anthony Birthplace Museum"}
                     width="30%"/>
            </div>

            <p>
                The trail finishes off with a view of the highest point in Massachusetts, mount Greylock!
            </p>
            <div className={styles.center}>
                <img src={"/adventures/cheshire/mntGreylock.jpeg"} alt={"Susan B Anthony Birthplace Museum"}
                     width="30%"/>
            </div>

            <p>
                I rode back to the Adam Visitor Center where I had parked my car. This
                is by far my favorite bike trial I've ever been on. I can't wait to do it again!
            </p>
        </div>
    )
}