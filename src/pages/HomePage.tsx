import styles from "../styles/pages/Home.module.css"
import "swiper/css"
import "swiper/css/pagination"
import 'swiper/css/effect-coverflow'
import Button from "../components/Button.tsx";
import TextStream from "../components/TextStream.tsx"
import TypeWriter from "../components/TypeWriter.tsx"
import {useNavigate} from "react-router-dom";
import DayNightBackground from "../components/DayNightBackground.tsx"
import {type Project, TOP} from "../utility/projects.ts"
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, EffectCoverflow, Autoplay} from "swiper/modules"
import {PROJECTS_ROUTE} from "../utility/routes.ts";

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

export default function HomePage() {
    
    const navigate = useNavigate()
    
    return (
        <>
            <DayNightBackground />
            
            <div className={styles.main}>
                <div className={`${styles.frame} ${styles.intro}`}>
                    <div className={styles.introContainer}>
                        <div className={`${styles.introSection} ${styles.headshotContainer}`}>
                            <img
                                src={"/2048me.jpg"}
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
                                    <a href={social.href} target={"_blank"}>
                                        <img
                                            alt={social.alt}
                                            key={social.src}
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
                            effect={'coverflow'}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            autoplay={{
                                delay: 2000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false,
                            }}
                            className={styles.slider}
                            grabCursor={true}
                            pagination={true}
                            slidesPerView={3}
                            centeredSlides={true}
                            coverflowEffect={{
                                rotate: -30,
                                stretch: -30,
                                depth: 200,
                                modifier: 1,
                                slideShadows: true,
                            }}
                        >
                            {TOP.map(({name, img, description}: Project) =>
                                <SwiperSlide className={styles.swiperSlide}>
                                    <div className={styles.topProjectContainer}>
                                        <h2>{name}</h2>
                                        
                                        <img alt={`${name} project image`}
                                             src={img}
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
                            buttonStyle={styles.seeMore}
                        />
                    </div>
                </div>
                
                <div className={styles.frame}>
                    EXPERIENCES
                </div>
                
                <div className={styles.frame}>
                    OTHER STUFF
                </div>
            </div>
        </>
    )
}