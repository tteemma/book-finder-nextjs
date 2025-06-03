import { fetchBookById } from '@/lib/api'
import { Book } from '@/types/type'
import { Metadata } from 'next'
import styles from './page.module.scss'
import Link from 'next/link'

type BookPageProp = {
	params: { id: string }
}
export const dynamic = 'force-static'

export async function generateMetadata({
	params,
}: BookPageProp): Promise<Metadata> {
	try {
		const book = await fetchBookById(params.id)
		return {
			title: book?.volumeInfo.title || 'Страница не подгрузилась xD',
			description: book?.volumeInfo.description || 'Описание отсутствует',
		}
	} catch (err) {
		console.error(err)
		return {
			title: 'Страница не найдена',
		}
	}
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
	try {
		const resp = await fetch('https://www.googleapis.com/books/v1/volumes?q=a')
		if (!resp.ok) throw new Error('Ошибка при загрузке данных')
		const data: { items: Book[] } = await resp.json()
		if (!data.items || !Array.isArray(data.items))
			throw new Error('Данные API не содержат items или имеют неверный формат')
		if (!data.items?.length) {
			console.warn('Нет данных для генерации страниц. Генерируем фолбэк.')
			return [{ id: 'fallback-id' }]
		}
		return data.items.map((book: Book) => ({ id: book.id.toString() }))
	} catch (err) {
		console.error(err)
		return []
	}
}

export default async function BookPage({ params }: BookPageProp) {
	const bookInfo = await fetchBookById(params.id)
	if (!bookInfo)
		return <main className={styles.noData}>Нет данных для отображения :(</main>
	return (
		<main className={styles.page}>
			<section className={styles.bookSection}>
				<div className={styles.imageContainer}>
					<label htmlFor=''>
						<img
							src={bookInfo.volumeInfo.imageLinks?.thumbnail}
							alt={bookInfo.volumeInfo.title}
						/>
						<span className={styles.authorLabel}>
							{bookInfo.volumeInfo.authors?.join(', ') || 'Автор неизвестен'}
						</span>
					</label>
				</div>
				<div>
					<h1 className={styles.title}>{bookInfo.volumeInfo.title}</h1>
				</div>
			</section>
			<section className={styles.descriptionSection}>
				<h2>
					{bookInfo.volumeInfo.description?.replace(/<[^>]+>/g, '') ||
						'Нет описания'}
				</h2>
			</section>
			<Link href='/'>
				<button className={styles.backButton}>На главную</button>
			</Link>
		</main>
	)
}
