import { Book, Favorites } from '@/types/type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Favorites = {
	favorites: [],
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites(state, action: PayloadAction<Book>) {
			const index = state.favorites.findIndex(b => b.id === action.payload.id)
			if (index === -1) {
				state.favorites.push(action.payload)
			} else {
				state.favorites = state.favorites.filter(
					b => b.id !== action.payload.id
				)
			}
		},
	},
})

export const { toggleFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
