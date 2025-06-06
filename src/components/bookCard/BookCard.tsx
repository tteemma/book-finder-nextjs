import { Book } from '@/types/type'
import styles from './BookCard.module.scss'
import Link from 'next/link'
import AddFavoritesButton from '../addFavoritesButton/AddFavoritesButton'

interface BookCardProps {
	book: Book
}

const BookCard = ({ book }: BookCardProps) => {
	return (
		<>
			<Link href={`/books/${book.id}`}>
				<main className={styles.card}>
					<section className={styles.imageSection}>
						{book.volumeInfo.imageLinks?.thumbnail ? (
							<img
								src={book.volumeInfo.imageLinks.thumbnail}
								alt={book.volumeInfo.title}
								className={styles.thumbnail}
							/>
						) : (
							<div className={styles.noImage}>Нет обложки</div>
						)}
						<p className={styles.authors}>
							{book.volumeInfo.authors?.join(', ') || 'Автор неизвестен'}
						</p>
					</section>
					<article className={styles.content}>
						<h2 className={styles.title}>{book.volumeInfo.title}</h2>
						<p className={styles.description}>
							{book.volumeInfo.description?.slice(0, 80) || 'Нет описания'}...
						</p>
					</article>
				</main>
			</Link>
			<aside>
				<AddFavoritesButton book={book} />
			</aside>
		</>
	)
}

export default BookCard
