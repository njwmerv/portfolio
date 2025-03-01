import {Link} from 'react-router';
import {navBarHeight} from '../Helpers/Constants.js';
import {HOME_PAGE_ROUTE, PROJECT_PAGE_ROUTE} from '../Utility/routes.js';

export default function NavBar(){

    // Styles

    const styles = {
        navBar: {
            width:'100%',
            height:navBarHeight,
            display:'flex',
            alignItems:'center',
            flexDirection:'row',
            backgroundColor:'#3F72AF'
        },
        linkComponent:{
            textDecoration:'none'
        },
        name: {
            color:'#FFFFFF',
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
        },
        link:{
            color:'#FFFFFF',
            margin:0,
            fontSize:20,
            fontWeight:600,
            marginLeft:20,
            paddingHorizontal:20,
        }
    };

    // Render

    return (
        <nav>
            <div style={styles.navBar}>
                <Link to={HOME_PAGE_ROUTE} style={styles.linkComponent}>
                    <p style={styles.name}>NJWM</p>
                </Link>

                <div style={styles.verticalLine}></div>

                <div style={styles.pagesLinks}>
                    <Link to={PROJECT_PAGE_ROUTE} style={styles.linkComponent}>
                      <p style={styles.link}>Projects</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
