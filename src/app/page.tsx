import Link from 'next/link'
import styles from './page.module.css'
import SearchBooks from '@/components/searchBooks/SearchBooks'

export default function Home() {
	return (
		<div className={styles.page}>
			<h1>Поиск книг</h1>
			<Link href={'/favorites'}>
				<button>TO FAVORITES</button>
			</Link>
			<SearchBooks />
		</div>
	)
}
