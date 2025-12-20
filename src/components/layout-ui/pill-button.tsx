import styles from '@/style/layout-ui/pill-button.module.scss'

export interface PillButtonProps {
	label: string
	onPress?: () => void
}

export default function PillButton({ label, onPress }: PillButtonProps) {
	return (
		<button className={styles.pressable} onClick={onPress}>
			<p className={styles.text}>{label}</p>
		</button>
	)
}
