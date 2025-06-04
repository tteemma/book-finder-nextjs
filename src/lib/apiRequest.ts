const BASE_URL = 'https://www.googleapis.com/'

type ApiRequestOptions = {
	next?: {
		revalidate?: number | false
	}
	cache?: RequestCache
}

export const apiRequest = async <T = any>(
	query: string,
	options: ApiRequestOptions = {}
): Promise<T> => {
	try {
		const response = await fetch(`${BASE_URL}${query}`, {
			...options,
			next: options.next,
			cache: options.cache,
		})
		if (!response.ok) throw new Error(`API error: ${response.status}`)
		return response.json()
	} catch (ex) {
		console.error(`API error: ${ex}`)
		throw ex
	}
}
