'use client'
import { Book } from '@/types/type'
import { useQuery } from '@tanstack/react-query'

const fetchBooks = async (query: string, sort?: string): Promise<Book[]> => {
	let url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
		query
	)}`

	if (sort) url += `&orderBy=${sort}`

	console.log(url)

	const responseBook = await fetch(url, {
		cache: 'no-cache',
	})

	if (!responseBook.ok) throw new Error('Ошибка при загрузке данных')
	const books = await responseBook.json()
	return books.items || []
}

export const useFetchBooks = (query: string, sort?: string) => {
	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ['fetchBooks', query, sort],
		queryFn: () => fetchBooks(query, sort),
		enabled: !!query,
		staleTime: 1000 * 6 * 5,
	})
	console.log(sort)
	return { data, isLoading, isError, error }
}
