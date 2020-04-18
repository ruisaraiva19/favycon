import React from 'react'
import Prism from 'prismjs'

import styles from './index.module.scss'

type CodeHighlightProps = {
	template: string
}

const CodeHighlight = ({ template }: CodeHighlightProps) => {
	const htmlCode = Prism.highlight(template, Prism.languages.markup, 'markup')
	return (
		<pre className={styles.root}>
			<code className="language-markup" dangerouslySetInnerHTML={{ __html: htmlCode }}></code>
		</pre>
	)
}

export { CodeHighlight }
