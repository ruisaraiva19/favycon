import { Checkbox } from '.'
import useDarkMode from 'use-dark-mode'
import { Typography } from 'components/typography'
import { boolean, withKnobs } from '@storybook/addon-knobs'

export default {
	title: 'Checkbox',
	decorators: [withKnobs],
}

export const ToggleDesktop = () => {
	const darkMode = useDarkMode(false)
	const disabled = boolean('disabled', false)

	return (
		<div style={{ padding: 20 }}>
			<Checkbox name="test" id="test" disabled={disabled}>
				<Typography variant="regularBody" weight="medium" muted={disabled}>
					Test Checkbox
				</Typography>
			</Checkbox>
			<br />
			<Typography>dark mode: {darkMode.value ? 'enabled' : 'disabled'}</Typography>
		</div>
	)
}

ToggleDesktop.story = {
	name: 'Desktop',
}
