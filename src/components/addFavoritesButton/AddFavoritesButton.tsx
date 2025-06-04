import { useAppDispatch } from '@/hooks/useAppDispatch'
import { Book } from '@/types/type'
import { toggleFavorites } from '@/store/features/favorites.slice'
import { useAppSelector } from '@/hooks/useAppSelector'

interface AddFavoritesButtonProp {
	book: Book
}

const AddFavoritesButton = ({ book }: AddFavoritesButtonProp) => {
	const favorites = useAppSelector(state => state.favorites.favorites)
	const dispatch = useAppDispatch()

	const isFavorite = favorites.some(b => b.id === book.id)

	const toggle = () => {
		dispatch(toggleFavorites(book))
	}

	return (
		<button onClick={toggle}>
			{!isFavorite ? 'Add To ' : 'Remove From '}Favorites
		</button>
	)
}

export default AddFavoritesButton
