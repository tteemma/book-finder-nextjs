'use client'
import { FilterParams, Genre, GenreLabels, SortOrder } from '@/types/type'
import style from './FilterSelector.module.scss'

interface FilterSelectorProps {
	onChange: ({ genre, sortOrder }: FilterParams) => void
}

const getGenreLabel = (genre: Genre): string => {
	return GenreLabels[genre] || genre
}

const sortOrders: { value: SortOrder | ''; label: string }[] = [
	{ value: '', label: 'Без сортировки' },
	{ value: 'relevance', label: 'По релевантности' },
	{ value: 'newest', label: 'По новизне' },
]

const FilterSelector = ({ onChange }: FilterSelectorProps) => {
	const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange({ genre: (e.target.value as Genre) || '' })
	}
	const handleOrderBySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange({ sortOrder: (e.target.value as SortOrder) || '' })
	}

	return (
		<main className={style.filterSelectorContainer}>
			<select
				name='category'
				id='category'
				defaultValue=''
				onChange={handleCategorySelect}
			>
				<option disabled id='category' value=''>
					Категория
				</option>
				{(Object.keys(GenreLabels) as Genre[]).map(genre => (
					<option key={genre} value={genre}>
						{getGenreLabel(genre)}
					</option>
				))}
			</select>
			<select
				name='orderBy'
				id='orderBy'
				defaultValue=''
				onChange={handleOrderBySelect}
			>
				<option disabled id='orderBy' value=''>
					Сортировать по
				</option>
				{sortOrders.map(order => (
					<option key={order.value} value={order.value}>
						{order.label}
					</option>
				))}
			</select>
		</main>
	)
}

export default FilterSelector
