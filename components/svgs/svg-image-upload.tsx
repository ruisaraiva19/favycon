import React from 'react'
import useDarkMode from 'use-dark-mode'
import { uniqueId } from 'utils/ids'

type SvgImageUploadProps = {
	active?: boolean
}

const SvgImageUpload: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement> & SvgImageUploadProps> = ({
	active = false,
	...props
}) => {
	const { value: isDark } = useDarkMode(false)
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={88} height={88} viewBox="0 0 88 88" aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Image Upload</title>
			<path fill={active ? '#4c66d5' : isDark ? '#5A5B66' : '#CCC'} d="M43 20H45V68H43z" />
			<path fill={active ? '#4c66d5' : isDark ? '#5A5B66' : '#CCC'} d="M20 43H68V45H20z" />
			<style jsx>{`
				path {
					transition: fill 0.2s ease;
				}
			`}</style>
		</svg>
	)
}

export { SvgImageUpload }
