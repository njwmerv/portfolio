import Image from 'next/image'

export interface CardProps {
	alt?: string
	label: string
	imageURL?: string
	description?: string
}

export default function Card({ alt, label, imageURL, description }: CardProps) {
	return (
		<div>
			<Image src={imageURL} alt={alt} />
			<p>{label}</p>
			<p>{description}</p>
		</div>
	)
}
