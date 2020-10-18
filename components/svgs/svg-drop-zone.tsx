import styles from './svg-drop-zone.module.scss'

const SvgDropZone: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width="100%" height="100%">
			<rect
				width="100%"
				height="100%"
				fill="none"
				rx="6"
				ry="6"
				className={styles.rect}
				strokeWidth="2"
				strokeDasharray="10, 10"
				strokeDashoffset="0"
				strokeLinecap="square"
			/>
		</svg>
	)
}

export { SvgDropZone }
