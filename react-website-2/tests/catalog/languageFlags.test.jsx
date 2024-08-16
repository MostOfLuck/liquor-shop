import { fireEvent, render, screen } from '@testing-library/react'
import i18n from 'i18next'
import React from 'react'
import LanguageSwitcher from '../../src/components/LanguageFlags'

describe('LanguageSwitcher Component', () => {
    it('should render without crashing and display initial language', () => {
        render(<LanguageSwitcher />)
        const buttonElement = screen.getByText('HE')
        expect(buttonElement).toBeInTheDocument()
    })

    it('should open the dropdown when button is clicked', () => {
        render(<LanguageSwitcher />)
        const buttonElement = screen.getByText('HE')
        fireEvent.click(buttonElement)
        const dropdownElement = screen.getByText('English')
        expect(dropdownElement).toBeInTheDocument()
    })

    it('should change language and close dropdown when a language is selected', () => {
        render(<LanguageSwitcher />)
        const buttonElement = screen.getByText('HE')
        fireEvent.click(buttonElement)
        const englishOption = screen.getByText('English')
        fireEvent.click(englishOption)
        expect(i18n.language).toBe('EN')
        expect(screen.queryByText('English')).not.toBeInTheDocument()
    })

    it('should close the dropdown when clicking outside', () => {
        render(<LanguageSwitcher />)
        const buttonElement = screen.getByText('HE')
        fireEvent.click(buttonElement)
        const dropdownElement = screen.getByText('English')
        expect(dropdownElement).toBeInTheDocument()
        fireEvent.mouseDown(document)
        expect(screen.queryByText('English')).not.toBeInTheDocument()
    })

    it('should open and close the dropdown on mouse over and mouse out', () => {
        render(<LanguageSwitcher />)
        const buttonElement = screen.getByText('HE')
        fireEvent.mouseOver(buttonElement)
        const dropdownElement = screen.getByText('English')
        expect(dropdownElement).toBeInTheDocument()
        fireEvent.mouseOut(buttonElement)
        expect(screen.queryByText('English')).not.toBeInTheDocument()
    })
})