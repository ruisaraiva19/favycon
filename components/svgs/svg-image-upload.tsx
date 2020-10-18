import classnames from 'classnames'

import styles from './svg-image-upload.module.scss'

type SvgImageUploadProps = {
	active?: boolean
}

const SvgImageUpload: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement> & SvgImageUploadProps> = ({
	active = false,
	...props
}) => {
	const idPrefix = 'svg-image-upload-'
	return (
		<svg width={88} height={88} viewBox="0 0 88 88" aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Image Upload</title>
			<circle r={44} cx={44} cy={44} className={styles.circle} />
			<rect x={43} y={20} width={2} height={48} className={classnames(styles.rect, { [styles.active]: active })} />
			<rect x={20} y={43} width={48} height={2} className={classnames(styles.rect, { [styles.active]: active })} />
		</svg>
	)
}

export { SvgImageUpload }
