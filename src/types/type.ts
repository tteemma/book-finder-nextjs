export interface Book {
	id: string
	volumeInfo: {
		title: string
		authors?: string[]
		description?: string
		imageLinks?: {
			thumbnail: string
		}
	}
}

export type Genre =
	| ''
	| 'fiction'
	| 'fantasy'
	| 'history'
	| 'science'
	| 'romance'
export type SortOrder = 'relevance' | 'newest'

export interface FilterParams {
	genre?: Genre
	sortOrder?: SortOrder
}

export const GenreLabels: Record<Genre, string> = {
	'': 'Без фильтра',
	fiction: 'Художественная литература',
	fantasy: 'Фэнтези',
	history: 'История',
	science: 'Наука',
	romance: 'Романтика',
}

export interface Favorites {
	favorites: Book[]
}
