import PreviewCell from '../Components/PreviewCell';
import {openInNewTab} from '../Helpers/Helpers';
import backgroundImage from './pixel-galaxy.png';

export default function HomePage(){

    // Instance Variables

    const projectsList = [
        {
            link:'https://github.com/njwmerv/tictactoe-python',
            title:'Tic-Tac-Toe',
            imageUri:'/tic-tac-toe.png',
            description:'Tic-tac-toe implemented in Python, playable in the command line.'
        },
        {
            link:'https://github.com/njwmerv/pong',
            title:'Pong',
            imageUri:'/pong.png',
            description:'Pong recreated in Pygame, where you can 1v1 your friend.'
        },
        {
            link:'https://github.com/njwmerv/juman-ping',
            title:'Juman Ping',
            imageUri:'/juman-ping.png',
            description:'2D platformer game for the PC, where players create and break their own platforms.'
        }
    ];

    const experiencesList = [
        {
            title:'UWaterloo',
            imageUri:'/uwaterloo-logo.png',
            description:(
                <>
                    <strong>Computer Science, Co-op Program</strong>
                    <p>Sep 2023 - Apr 2028</p>
                </>
            )
        },
        {
            title:'Tuq Inc.',
            imageUri:'/tuq-logo.png',
            description:(
                <>
                    <strong>Junior Developer</strong>
                    <p>May 2024 - Aug 2024</p>
                </>
            )
        },
        {
            title:'Propel Holdings',
            imageUri:'/propel-holdings-logo.jpg',
            description:(
                <>
                    <strong>Software Developer Intern</strong>
                    <p>Jan 2025 - Apr 2025</p>
                </>
            )
        }
    ];

    // Styles
    const styles = {
        text:{
            color:'#FFFFFF',
            fontSize:24,
            textAlign:'center',
            marginBottom:10,
        },
        headerText:{
            color:'#FFFFFF',
            textAlign:'center',
            marginBottom:10,
            fontSize:36,
        },
        profileTextContainer:{
            display:'flex',
            padding:30,
            alignItems:'center',
            justifySelf:'center',
            borderRadius:64,
            flexDirection:'column',
            backgroundColor:'#3F72AF60'
        },
        profileNameText:{
            color:'#FFFFFF',
            textAlign:'center',
            marginBottom:10,
            fontSize:60
        },
        profileSubText:{
            color:'#FFFFFF',
            textAlign:'center',
            marginBottom:10,
            fontSize:40
        },
        linksContainer:{
            gap:20,
            width:'100%',
            display:'flex',
            marginTop:20,
            flexDirection:'row',
            justifyContent:'space-evenly',
        },
        link:{
            width:72,
            height:72,
            backgroundColor:'none'
        },
        contentContainer:{
            width:'100vw',
            height:'calc(100vh - 60px)',
            flexWrap:'wrap',
            overflowX:'hidden',
            overflowY:'scroll',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            flexDirection:'column',
            backgroundImage:`url(${backgroundImage})`
        },
        contentSection:{
            width:'100vw',
            minHeight:'calc(100vh - 60px)',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            justifyContent:'center',
        },
        projectsList:{
            gap:20,
            width:'fit-content',
            margin:'auto',
            display:'flex',
            flexWrap:'wrap',
            flexDirection:'row',
            justifyContent:'center'
        },
        seeMore:{
            marginTop:20
        },
        experienceDescription:{
            height:'fit-content',
            textAlign:'center',
        }
    };

    // Render

    return (
        <div style={styles.contentContainer}>
            <div style={styles.contentSection}>
                <div style={styles.profileTextContainer}>
                    <p style={styles.profileSubText}>Hey, I'm</p>

                    <p style={styles.profileNameText}>Nicanor Josemaria W. Montoya</p>

                    <p style={styles.profileSubText}>Developer | Student</p>

                    <div style={styles.linksContainer}>
                        <a onClick={() => openInNewTab('https://github.com/njwmerv')}>
                            <img style={styles.link}
                                 src={'/github-logo-2.png'}
                                 alt={'Link to GitHub page'}
                            />
                        </a>

                        <a onClick={() => openInNewTab('https://www.linkedin.com/in/nicanor-montoya-63029a255/')}>
                            <img style={styles.link}
                                 src={'/linkedin-logo-2.png'}
                                 alt={'Link to LinkedIn page'}
                            />
                        </a>

                        <a onClick={() => openInNewTab('mailto:montoya.nicanor04@gmail.com')}>
                            <img style={styles.link}
                                 src={'/email-logo-2.png'}
                                 alt={'Link to send email'}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div style={styles.contentSection}>
                <p style={styles.headerText}>Projects</p>

                <p style={styles.text}>Here's some of the stuff that I worked on.</p>

                <div style={styles.projectsList}>
                    {projectsList.map((aItem, aIndex) => (
                        <PreviewCell title={aItem.title}
                                     key={'projects-list-' + aIndex}
                                     imageUri={aItem.imageUri}
                                     description={aItem.description}
                                     projectLink={aItem.link}
                        />
                    ))}
                </div>
            </div>

            <div style={styles.contentSection}>
                <p style={styles.headerText}>Experience</p>

                <p style={styles.text}>Here's a quick timeline of my career <b>so far</b>.</p>

                <div style={styles.projectsList}>
                    {experiencesList.map((aItem, aIndex) => (
                        <PreviewCell title={aItem.title}
                                     key={'experiences-list-' + aIndex}
                                     imageUri={aItem.imageUri}
                                     description={aItem.description}
                                     descriptionStyle={styles.experienceDescription}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
