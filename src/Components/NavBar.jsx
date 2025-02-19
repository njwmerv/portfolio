import {Link} from 'react-router';
import {navBarHeight} from '../Helpers/Constants';
import {HOME_PAGE_ROUTE} from '../Utility/routes.js';

export default function NavBar(){

    // Styles
    const styles = {
        navBar: {
            width: '100%',
            height: navBarHeight,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#3F72AF'
        },
        name: {
            color: '#FFFFFF',
            width: 'auto',
            margin: 0,
            marginLeft: 20,
            fontSize: 30,
            fontWeight: 600,
            textDecoration:'none',
            textDecorationLine:'none'
        },
        pagesLinks:{
            gap:20,
            height:'100%',
            alignItems:'center',
            paddingRight:20,
            flexDirection:'row'
        },
        link:{
            color:'#FFFFFF',
            fontSize:20,
            paddingHorizontal:20,
            fontWeight:600,
            borderLeftColor:'#FFFFFF',
            borderLeftWidth:4,
        }
    };

    // Render

    return (
        <header>
            <div style={styles.navBar}>
                <Link to={HOME_PAGE_ROUTE} style={{textDecoration:'none'}}>
                    <p style={styles.name}>NJWM</p>
                </Link>

                <div style={styles.pagesLinks}>
                    {/*<Link to={'/projects'}>*/}
                    {/*  <Text style={styles.link}>Projects</Text>*/}
                    {/*</Link>*/}
                </div>
            </div>
        </header>
    );
}
