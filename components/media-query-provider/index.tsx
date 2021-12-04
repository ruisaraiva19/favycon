import React, { createContext, useContext, useMemo } from 'react'
import { useMedia } from 'react-use'
import PropTypes from 'prop-types'

type MediaQueryProviderProps = {
	children: PropTypes.ReactNodeLike
	isMobileDevice?: boolean
}
type ContextProps = {
	isMobile: boolean
}

export const MediaQueryContext = createContext<ContextProps>({ isMobile: false })

export const MediaQueryProvider = ({ children, isMobileDevice = false }: MediaQueryProviderProps) => {
	const isMobile = useMedia('(max-width: 991px)', isMobileDevice)
	const value = useMemo(() => ({ isMobile }), [isMobile])

	return <MediaQueryContext.Provider value={value}>{children}</MediaQueryContext.Provider>
}

MediaQueryProvider.propTypes = {
	children: PropTypes.node.isRequired,
	isMobileDevice: PropTypes.bool,
}

export const useMediaQueryContext = () => useContext(MediaQueryContext)
