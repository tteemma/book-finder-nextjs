'use client'

import { useAppSelector } from '@/hooks/useAppSelector'
import BookCard from '../bookCard/BookCard'
const FavoriteList = () => {
	const favorites = useAppSelector(state => state.favorites.favorites)

	if (!favorites) return <p>Нет избранных книг.</p>

	return (
		<main>
			{favorites.map(favoriteBook => (
				<BookCard key={favoriteBook.id} book={favoriteBook} />
			))}
		</main>
	)
}

export default FavoriteList
