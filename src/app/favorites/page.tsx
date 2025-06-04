import FavoriteList from '@/components/favoriteList/FavoriteList'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Избранное — Book Finder',
	description: 'Ваши избранные книги, добавленные в коллекцию.',
}

const FavoritePage = () => {
	return (
		<main>
			<section>
				<h1>Избранное</h1>
				<Link href={'/'}>Back</Link>
			</section>
			<aside>
				<FavoriteList />
			</aside>
		</main>
	)
}

export default FavoritePage
