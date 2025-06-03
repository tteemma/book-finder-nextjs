'use client'

import { useFetchBooks } from '@/hooks/useFetchBooks'
import BookCard from '../bookCard/BookCard'
import { useState } from 'react'
import styles from './SearchBooks.module.scss'
import { useDebounce } from '@/hooks/useDebounce'
import FilterSelector from '../filterSelector/FilterSelector'
import { FilterParams } from '@/types/type'

const SearchBooks = () => {
	const [query, setQuery] = useState<string>('')
	const [filters, setFilters] = useState<FilterParams>({})

	const debouncedQuery = useDebounce({
		query: query,
		delay: 300,
	})

	const combinedQuery = `${debouncedQuery || 'Harry Potter'}${
		filters.genre ? `:${filters.genre}` : ''
	}`

	const { data, isLoading, isError, error } = useFetchBooks(
		combinedQuery,
		filters.sortOrder || undefined
	)
	const handleFilterChange = (newFilter: FilterParams) => {
		setFilters(prev => ({ ...prev, ...newFilter }))
	}

	const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	return (
		<div className={styles.search}>
			<div className={styles.searchBar}>
				<label htmlFor='bookName' className={styles.label}>
					Название
				</label>
				<input
					id='bookName'
					type='text'
					placeholder='Введите название книги'
					value={query}
					onChange={handleChangeQuery}
					className={styles.input}
				/>
				<FilterSelector onChange={handleFilterChange} />
			</div>

			{isError && <p className={styles.error}>Ошибка: {error?.message}</p>}
			{isLoading && <p className={styles.loading}>Загрузка...</p>}
			<section className={styles.bookGrid}>
				{data?.length === 0 && !isLoading && !isError && (
					<p className={styles.empty}>Книги не найдены</p>
				)}
				{data?.map(book => (
					<BookCard key={book.id} book={book} />
				))}
			</section>
		</div>
	)
}

export default SearchBooks
