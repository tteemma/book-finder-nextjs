'use client'

import React, { useEffect, useRef, useState } from 'react'

interface debounceData {
	query: string
	delay: number
}

export const useDebounce = ({ query, delay }: debounceData) => {
	const refTimer = useRef<NodeJS.Timeout | null>(null)
	const [debouncedQuery, setDebouncedQuery] = useState(query)

	useEffect(() => {
		if (refTimer.current) clearTimeout(refTimer.current)

		refTimer.current = setTimeout(() => {
			setDebouncedQuery(query)
		}, delay)

		return () => {
			if (refTimer.current) clearTimeout(refTimer.current)
		}
	}, [delay, query])

	return debouncedQuery
}
