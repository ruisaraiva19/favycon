import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { LazyImage } from 'components/lazy-image'

import styles from './index.module.scss'

type FavyconWizardProps = {
	children: PropTypes.ReactNodeLike
	showDndImage: boolean
}

const unsplashImageProps = (isMobile: boolean) => ({
	src: `/images/unsplash${isMobile ? '-vertical' : ''}@1x.jpg`,
	srcRetina: `/images/unsplash${isMobile ? '-vertical' : ''}@2x.jpg`,
	srcPlaceholder: isMobile
		? 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAGQAUAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQECAwcABv/aAAgBAQAAAAD4xWtDGwpX0dUVKl4eGdYnraxQrBGzr6ewLU6lcLnWZ7CvUJ1ouVZnsQChOtEyr6exAKU60bLP3uwgqU64fLOI7AErTrh8qUr2AVaoWiZZ517DgCrVAYY0z7HmMuUrQx88+xxgCrUgC40//8QAGgEAAgMBAQAAAAAAAAAAAAAABAUBAgMGAP/aAAgBAhAAAADqZVrKdPZcrjo7BrYe6UXjttbign6aUAKtp4H/xAAbAQACAgMBAAAAAAAAAAAAAAAEBQMHAAEGAv/aAAgBAxAAAADj3R82+DfNp8r5+5IyvXzgj1XzpwTJXbF4fNXZTtsT/8QAGxAAAwEBAQEBAAAAAAAAAAAAAAECAyAQMRH/2gAIAQEAAT8A1zNoNJLRRQ+NYN4NpNEWUPjSTaTaTVFlD4tG0m8myLKHxaNkbr6bI0RSHxZsbr6bGiKQ1xRsbmxaKQ0fntGxubFlIaGvaNTdGyLRSGhoflGiNpNoNJKQ0MYxlyawbZmsFyUhj9pGkm0G2ZpBaKQx+MtGqNkjYsoYz//EABwRAAMBAQEAAwAAAAAAAAAAAAABAgMQMRESIf/aAAgBAgEBPwBMrw3L4h+G5fokLm0lx+ikQi4+UaZn1ESM0gueJiZaNFxElGp//8QAHBEAAgEFAQAAAAAAAAAAAAAAAAEDAgQQITER/9oACAEDAQE/ALeUhq9RQLEFWy2q4RixC9lq+Eb0J4h6Wr4RsTxE9ltXwjq0JiKWW8vnhBJ6ihixD0tiMR//2Q=='
		: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIADsAWgMBIgACEQEDEQH/xAAaAAABBQEAAAAAAAAAAAAAAAAFAAECAwQI/9oACAEBAAAAANwAKFE4M1bJ36HBBggcflqZ3fogIGBhx+WqDyXRAQOEDj81ME66HChwgfDnqrZl0MFEBQ+GiquMV0MGFBRGDPVCuMehhAwMHH5qoVwX/8QAGAEAAwEBAAAAAAAAAAAAAAAAAwQFAgb/2gAIAQIQAAAA606cVUvRnDLT1dY0lPFYYKGep//EABoBAAEFAQAAAAAAAAAAAAAAAAUBAgMEBwb/2gAIAQMQAAAAzI6fvOTMDfQ3pEzE10FyVcyLH70z/wD/xAAhEAACAgEEAwEBAAAAAAAAAAAAAQIDMQQFIDMQQXEjEf/aAAgBAQABPwDcl+0vpesmojkvWS1EyQ+O4r9pFyNQsl6yXIsRJD47j3SLlk1CyahZLkWIkhrjuHdIuNQaj2XE0SQ0fzhuHdIuNR7NR7LiaJIaGuG4d0vpaXrJqFktRNDQ0NcNw7pfS1F8cl8cl0SaGhoaGvO4d0vpYXF/suLCQxj8/wD/xAAdEQACAgIDAQAAAAAAAAAAAAAAAgEDETIQEnEh/9oACAECAQE/AKtV84vj4XL9OpCleq+EFi5gurOhCleqikrmC2seswV6L4Lw8FqwTB//xAAgEQACAQQCAwEAAAAAAAAAAAAAAQIDBBAxIXIRIzND/9oACAEDAQE/AFL3z7FpLRReiOf2n2LR6KD4RFnnD+8+xaPRRfBFieJfafYtZaKL4RFix//Z',
	alt: 'Unsplash',
	aspectRatio: isMobile ? '614/768' : '540/354',
	stretch: isMobile,
})

const FavyconWizardComponent = ({ children, showDndImage }: FavyconWizardProps) => {
	return (
		<div className={styles.root}>
			<div className={styles.background}>
				<LazyImage className={styles.mobileBackground} {...unsplashImageProps(true)} />
				<LazyImage className={styles.desktopBackground} {...unsplashImageProps(false)} />
			</div>
			{children}
			<div className={classnames(styles.image, { [styles.hide]: !showDndImage })}>
				<LazyImage
					src={`/images/dnd-light@1x.png`}
					srcRetina={`/images/dnd-light@2x.png`}
					alt="Drag and drop here!"
					aspectRatio="185/109"
					className={styles.imageLight}
				/>
				<LazyImage
					src={`/images/dnd-dark@1x.png`}
					srcRetina={`/images/dnd-dark@2x.png`}
					alt="Drag and drop here!"
					aspectRatio="185/109"
					className={styles.imageDark}
				/>
			</div>
		</div>
	)
}

export const FavyconWizard = React.memo(FavyconWizardComponent)
