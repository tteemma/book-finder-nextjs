import { Book } from '@/types/type'
import { apiRequest } from './apiRequest'

export const fetchBookById = async (id: string): Promise<Book | null> => {
	const responseBook = await apiRequest(`/books/v1/volumes/${id}`)
	return responseBook
}

export const fetchBooksRaw = async (
	query: string
): Promise<{ items: Book[] }> => {
	const resp = await apiRequest(`books/v1/volumes?q=${query}`, {
		next: {
			revalidate: 300,
		},
	})

	return resp
}

export const validateBooksData = (data: { items: Book[] }): Book[] => {
	if (!data.items || !Array.isArray(data.items))
		throw new Error('Данные API не содержат items или имеют неверный формат')
	return data.items
}
export const mapBooksToParams = (data: Book[]): { id: string }[] => {
	if (!data.length) {
		console.warn('Нет данных для генерации страниц. Генерируем фолбэк.')
		return [{ id: 'fallback-id' }]
	}
	return data.map((book: Book) => ({ id: book.id.toString() }))
}
