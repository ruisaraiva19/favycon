import React from 'react'
import Prism from 'prismjs'

import styles from './index.module.scss'

type CodeHighlightProps = {
	template: string
}

const CodeHighlight = React.forwardRef<HTMLPreElement, CodeHighlightProps>(({ template }, ref) => {
	const htmlCode = Prism.highlight(template, Prism.languages.markup, 'markup')
	return (
		<pre className={styles.root} ref={ref}>
			<code className="language-markup" dangerouslySetInnerHTML={{ __html: htmlCode }}></code>
		</pre>
	)
})

CodeHighlight.displayName = 'CodeHighlight'

export { CodeHighlight }
