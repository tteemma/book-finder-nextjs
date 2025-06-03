import { Book } from '@/types/type'

export const fetchBooksInfo = async (): Promise<Book[]> => {
	try {
		const responseBook = await fetch(
			'https://www.googleapis.com/books/v1/volumes?q=a'
		)
		if (!responseBook.ok) throw new Error('Ошибка при загрузке данных')
		const books = await responseBook.json()
		return books.items
	} catch (err) {
		console.log(err)
		return []
	}
}

export const fetchBookById = async (id: string): Promise<Book | null> => {
	try {
		const responseBook = await fetch(
			`https://www.googleapis.com/books/v1/volumes/${id}`
		)
		if (!responseBook.ok) throw new Error('Ошибка при загрузке данных')
		return responseBook.json()
	} catch (err) {
		console.log(err)
		return null
	}
}
