import Link from 'next/link.js';
import styles from '../../../style/layout-ui/navbar.module.scss';
import { HOME_PAGE_ROUTE, PROJECT_PAGE_ROUTE } from '../../../utility/routes.ts';

export default function NavBar(){

    // Render

    return (
        <nav>
            <div className={styles.navBar}>
                <div>
                    <Link href={HOME_PAGE_ROUTE} className={styles.linkComponent}>
                        <h1 className={styles.name}>NJWM</h1>
                    </Link>
                </div>
                
                <div className={styles.verticalLine}></div>
                
                <div className={styles.pagesLinks}>
                    <Link href={PROJECT_PAGE_ROUTE} className={styles.linkComponent}>
                        <p className={styles.link}>Projects</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
