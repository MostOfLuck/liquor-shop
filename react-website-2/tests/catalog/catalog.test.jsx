import { fireEvent, render, screen } from '@testing-library/react'
import i18n from 'i18next'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import Catalog from '../../src/pages/trainers/Catalog'

describe('Catalog Component', () => {
	it('should render the catalog header', () => {
		render(
			<I18nextProvider i18n={i18n}>
				<Catalog />
			</I18nextProvider>
		)
		const headerElement = screen.getByText(/Our Catalog/i)
		expect(headerElement).toBeInTheDocument()
	})

	it('should show "No results found" when search yields no results', () => {
		render(
			<I18nextProvider i18n={i18n}>
				<Catalog />
			</I18nextProvider>
		)
		const searchInput = screen.getByPlaceholderText(/Search/i)
		fireEvent.change(searchInput, { target: { value: 'nonexistentproduct' } })
		const noResultsText = screen.getByText(/No results found/i)
		expect(noResultsText).toBeInTheDocument()
	})

	it('should filter products based on search input', () => {
		render(
			<I18nextProvider i18n={i18n}>
				<Catalog />
			</I18nextProvider>
		)
		const searchInput = screen.getByPlaceholderText(/Search/i)
		fireEvent.change(searchInput, { target: { value: 'wine' } })
		const productElement = screen.getByText(/Wine Product Name/i) // Измените на реальное имя продукта
		expect(productElement).toBeInTheDocument()
	})

	it('should open the modal with product details when a product card is clicked', () => {
		render(
			<I18nextProvider i18n={i18n}>
				<Catalog />
			</I18nextProvider>
		)
		const productCard = screen.getByText(/Wine Product Name/i) // Измените на реальное имя продукта
		fireEvent.click(productCard)
		const modalTitle = screen.getByText(/Product Details/i) // Заголовок в модальном окне
		expect(modalTitle).toBeInTheDocument()
	})

	it('should display the warning message in the modal if present', () => {
		render(
			<I18nextProvider i18n={i18n}>
				<Catalog />
			</I18nextProvider>
		)
		const productCard = screen.getByText(/Wine Product Name/i) // Измените на реальное имя продукта
		fireEvent.click(productCard)
		const warningText = screen.getByText(/Warning content missing/i) // Проверьте реальный текст предупреждения
		expect(warningText).toBeInTheDocument()
	})

	// Добавьте другие тесты здесь по мере необходимости
})
