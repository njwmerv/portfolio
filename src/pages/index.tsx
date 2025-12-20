import Image from 'next/image'

import styles from '@/style/pages/home.module.scss'
import PillButton from '@/components/layout-ui/pill-button.tsx'
import Link from 'next/link.js'
import { EXPERIENCE_URL, PROJECTS_URL } from '@/helpers/constants.ts'

export default function HomePage() {
	return (
		<div className={styles.twoColumn}>
			<div className={styles.personalDetails}>
				<div className={styles.topHalf}>
					<Image
						className={styles.headshot}
						src={'/2048me.jpg'}
						alt={'Mari-Montoya-headshot'}
						width={250}
						height={250}
						priority
						fetchPriority="high"
					/>
					<div className={styles.name}>
						<p>Hi! I'm</p>
						<h1>
							<b>N</b>icanor <b>J</b>osemaria "Mari" <b>W</b>. <b>M</b>ontoya
						</h1>
					</div>
				</div>

				<div className={styles.aboutMe}>
					<h2>Education</h2>
					<div className={styles.aboutRow}>
						<p>University of Waterloo</p>
						<p>2023 – 2028</p>
					</div>
					<div className={styles.aboutRow}>
						<p>Computer Science, Co-op</p>
						<p>CGPA: 90.80</p>
					</div>

					<h2>Languages</h2>
					<p>Python, JavaScript, C/C++, Java, HTML, CSS</p>
					<p>French, Tagalog</p>

					<h2>Frameworks</h2>
					<p>React, Next, Spring MVC, Express, React Native</p>
				</div>
			</div>

			<div className={styles.bentoBox}>
				<div className={styles.tl}>
					<div>
						<h2>Projects</h2>
						<p>stuff I've worked on</p>
					</div>

					<Link href={PROJECTS_URL}>
						<PillButton label="See More" />
					</Link>
				</div>

				<div className={styles.tr}>
					<div>
						<h2>Experience</h2>
						<p>places I've worked at</p>
					</div>

					<Link href={EXPERIENCE_URL}>
						<PillButton label="See More" />
					</Link>
				</div>

				<div className={styles.bl}>
					<h2>Hobbies & Other Stuff</h2>
				</div>

				<div className={styles.br}>
					<h2>Links</h2>

					<div className={styles.linksContainer}>
						<Link href="https://github.com/njwmerv/" target="_blank">
							<Image alt="link-to-github" src="/github-logo-2.png" width={50} height={50} />
						</Link>

						<Link href="https://www.linkedin.com/in/nicanor-josemaria-montoya-63029a255/" target="_blank">
							<Image alt="link-to-linkedin" src="/linkedin-logo-2.png" width={50} height={50} />
						</Link>

						<Link href="mailto:montoya.nicanor04@gmail.com" target="_blank">
							<Image alt="link-to-linkedin" src="/email-logo-2.png" width={50} height={50} />
						</Link>
					</div>

					<p>Feel free to reach out or check out my other sites!</p>
				</div>
			</div>
		</div>
	)
}
