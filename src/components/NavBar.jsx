import {useState} from 'react';
import {Link} from 'react-router';
import {navBarHeight} from '../Helpers/Constants.js';
import {HOME_PAGE_ROUTE, PROJECT_PAGE_ROUTE} from '../utility/routes.js';

export default function NavBar(){

    // Style

    const styles = {
        navBar:{
            width:'100%',
            height:navBarHeight,
            display:'flex',
            alignItems:'center',
            flexDirection:'row',
            backgroundColor:'#3F72AF'
        },
        name:{
            width:'auto',
            margin:0,
            marginLeft:20,
            fontSize:30,
            fontWeight:600
        },
        verticalLine:{
            width:'2px',
            height:'50%',
            marginLeft:'20px',
            backgroundColor:'#FFFFFF'
        },
        pagesLinks:{
            gap:20,
            height:'100%',
            display:'flex',
            alignItems:'center',
            paddingRight:20,
            flexDirection:'row'
        }
    };

    // Render

    return (
        <nav>
            <div style={styles.navBar}>
                <NavLink to={HOME_PAGE_ROUTE}
                         text="NJWM"
                         textStyle={styles.name}
                />

                <div style={styles.verticalLine}></div>

                <div style={styles.pagesLinks}>
                    <NavLink to={PROJECT_PAGE_ROUTE}
                             text="Projects"
                    />
                </div>
            </div>
        </nav>
    );
}

const NavLink = ({to, text, textStyle}) => {

    // Instance Variable

    const [hovered, setHovered] = useState(false);

    // Helper

    const mouseEnter = () => setHovered(true);

    const mouseLeave = () => setHovered(false);

    // Style

    const styles = {
        linkComponent:{
            textDecoration:'none'
        },
        link:{
            color:(
                hovered ?
                    '#FFFFFF88'
                    :
                    '#FFFFFF'
            ),
            margin:0,
            fontSize:20,
            fontWeight:600,
            marginLeft:20,
            paddingHorizontal:20,
            ...textStyle
        }
    };

    // Render

    return (
        <Link to={to} style={styles.linkComponent}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}>
            <p style={styles.link}>{text}</p>
        </Link>
    );
}
