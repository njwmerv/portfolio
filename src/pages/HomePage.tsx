import styles from "../styles/pages/Home.module.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import Button from "../components/Button.tsx"
import TextStream from "../components/TextStream.tsx"
import TypeWriter from "../components/TypeWriter.tsx"
import {useNavigate} from "react-router-dom"
import CareerTimeline from "../components/CareerTimeline.tsx"
import {useMediaQuery} from "../hooks/useMediaQuery.tsx"
import {PROJECTS_ROUTE} from "../utility/routes.ts"
import {type Project, TOP} from "../utility/projects.ts"
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, EffectCoverflow, Autoplay, Navigation} from "swiper/modules"
import CaptionedImage from "../components/CaptionedImage.tsx"

const GREETINGS: string[] = [
    "Hey! I'm:",
    "Kumusta! Ako si:",
    "Bonjour! Je m'appelle:",
    "你好！我叫:",
]

const DESCRIPTIONS: string[] = [
    "<Computer Science Student/>",
    "<Software Developer/>",
]

interface Social {
    alt: string
    src: string
    href: string
}

const SOCIALS: Social[] = [
    {alt: "Link to GitHub/njwmerv", src: "/github-logo-2.png", href: "https://github.com/njwmerv/"},
    {alt: "Link to LinkedIn/Nicanor Josemaria W. Montoya", src: "/linkedin-logo-2.png", href: "https://www.linkedin.com/in/nicanor-josemaria-montoya-63029a255/"},
    {alt: "Link to Email/montoya.nicanor04@gmail.com", src: "/email-logo-2.png", href: "mailto:montoya.nicanor04@gmail.com"},
]

interface OtherStuff {
    img: string
    caption: string
}

const OTHER_STUFF: OtherStuff[] = [
    {
        img: "/baking.webp",
        caption: "Me when I bake",
    },
    {
        img: "/garden.webp",
        caption: "At the Botanical Gardens in Toronto",
    },
    {
        img: "/hike.webp",
        caption: "On a hike along the Dragon's Back in Hong Kong",
    },
    {
        img: "/lotr.webp",
        caption: "Playing a DnD-inspired Lord of the Ring's game with friends",
    },
    {
        img: "/pets.webp",
        caption: "Nutmeg (cat) & Wendy (dog) playing",
    },
    {
        img: "/pirate.webp",
        caption: "I'm the king of the world!",
    },
]

export default function HomePage() {
    
    const navigate = useNavigate()
    
    const isTablet: boolean = useMediaQuery("max-width: 964px")
    
    return (
        <div className={styles.main}>
            <div className={`${styles.frame} ${styles.intro}`}>
                <div className={styles.introContainer}>
                    <div className={`${styles.introSection} ${styles.headshotContainer}`}>
                        <img
                            src={"/2048me.webp"}
                            alt={"Image of Mari Montoya"}
                            className={styles.headshot}
                        />
                    </div>
                    
                    <div className={`${styles.introSection} ${styles.introText}`}>
                        <TextStream
                            texts={GREETINGS}
                            duration={900}
                            textClassName={styles.greeting}
                        />
                        
                        <TypeWriter
                            text={"Mari Montoya"}
                            delay={100}
                            textClassName={styles.name}
                            cursor={"|"}
                        />
                        
                        <p className={styles.pronunciation}>(pronounced like "Mario" w/o the 'o')</p>
                        
                        <TextStream
                            texts={DESCRIPTIONS}
                            textClassName={styles.descriptions}
                        />
                        
                        <div className={styles.socials}>
                            {SOCIALS.map((social) =>
                                <a href={social.href} target={"_blank"} key={social.src}>
                                    <img
                                        alt={social.alt}
                                        src={social.src}
                                        color={"#FCF6E1"}
                                        className={styles.socialsButton}
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`${styles.frame} ${styles.projects}`}>
                <div className={styles.projectsContainer}>
                    <p className={styles.projectsDescription}>Here's some of what I've worked on and built!</p>
                    
                    <Swiper
                        loop={true}
                        effect="coverflow"
                        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}
                        className={styles.slider}
                        grabCursor={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        slidesPerView={isTablet ? 1 : 3}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: -15,
                            stretch: -45,
                            depth: 200,
                            modifier: 1,
                            slideShadows: false,
                        }}
                    >
                        {TOP.map(({name, img, description}: Project) =>
                            <SwiperSlide className={styles.swiperSlide} key={name}>
                                <div className={styles.topProjectContainer}>
                                    <h2>{name}</h2>
                                    
                                    <img alt={`${name} project image`}
                                         src={img}
                                         loading="lazy"
                                    />
                                    
                                    <p>{description}</p>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    
                    <Button
                        label={"See More"}
                        onClick={() => navigate(PROJECTS_ROUTE)}
                        onMouseDown={() => navigate(PROJECTS_ROUTE)}
                        textStyle={styles.seeMoreText}
                        buttonStyle={styles.seeMore}
                    />
                </div>
            </div>
            
            <div className={`${styles.frame} ${styles.experiences}`}>
                <div className={styles.container}>
                    <p className={styles.description}>Here's a quick timeline of my career <b>so far...</b></p>
                    
                    <div className={styles.calendarScroll}>
                        <CareerTimeline />
                    </div>
                    
                    {/*<Button*/}
                    {/*    label={"See More"}*/}
                    {/*    onClick={() => navigate(EXPERIENCES_ROUTE)}*/}
                    {/*    onMouseDown={() => navigate(EXPERIENCES_ROUTE)}*/}
                    {/*    buttonStyle={styles.seeMore}*/}
                    {/*/>*/}
                </div>
            </div>
            
            <div className={`${styles.frame} ${styles.others}`}>
                <div className={styles.container}>
                    <p className={styles.description}>Here's the other stuff I get up to besides school & work!</p>
                    
                    <div className={styles.grid}>
                        {OTHER_STUFF.map((os: OtherStuff, i: number) => {
                            return (
                                <CaptionedImage key={`other-stuff-${i}`}
                                                img={os.img}
                                                alt={os.caption}
                                                caption={os.caption}
                                />
                            )
                        })}
                    </div>
                    
                    {/*<Button*/}
                    {/*    label={"See More"}*/}
                    {/*    onClick={() => navigate(OTHERS_ROUTE)}*/}
                    {/*    onMouseDown={() => navigate(OTHERS_ROUTE)}*/}
                    {/*    buttonStyle={styles.seeMore}*/}
                    {/*/>*/}
                </div>
            </div>
            
            <div className={styles.footer}>
                <p>© Nicanor Josemaria W. Montoya, NJWM</p>
                
                <p>Trademarks and logos belong to their respective owners.</p>
            </div>
        </div>
    )
}