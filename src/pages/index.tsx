import Link from 'next/link'
import Image from 'next/image'

import styles from '../style/pages/home.module.scss'

interface HomePageProps {}

interface Link {
	url: string
	title: string
}

const links: Link[] = [
	{ title: 'Skills', url: '/skills' },
	{ title: 'Projects', url: '/projects' },
	{ title: 'Experiences', url: '/experiences' },
	{ title: 'Contact Me', url: '/contact-me' },
	{ title: 'Other', url: '/other' },
]

const calculateIndex = (index: number): number => {
	const factor: number = links.length - 1
	return 1 - Math.abs(2 * index - factor) / factor
}

export default function HomePage({}: HomePageProps) {
	return (
		<div className={styles.contentContainer}>
			<div className={styles.nameContainer}>
				<p className={styles.subtitle}>Hi! I'm</p>
				<h1 className={styles.name}>Nicanor Josemaria "Mari" W. Montoya</h1>
			</div>

			<div className={styles.columns}>
				<div className={styles.leftColumn}>
					<Image
						className={styles.headshot}
						src={'/2048me.jpg'}
						alt={'Image of Mari Montoya'}
						width={300}
						height={300}
					/>
				</div>
				<div className={styles.rightColumn}>
					{links.map((value: Link, index: number) => {
						return (
							<Link
								key={`link-${index}`}
								href={value.url}
								className={styles.link}
								style={{
									marginLeft: `${calculateIndex(index) * 64}px`,
								}}
							>
								<h2 className={styles.link}>{value.title}</h2>
							</Link>
						)
					})}
				</div>
			</div>

			<div className={styles.footer}>
				<p>© 2025 Nicanor Josemaria W. Montoya. All rights reserved.</p>
			</div>
		</div>
	)
}
