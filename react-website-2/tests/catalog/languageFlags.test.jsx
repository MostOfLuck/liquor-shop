// Create a test for the LanguageFlags component using React Testing Library.

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LanguageFlags from '../src/components/LanguageFlags'

describe('LanguageFlags', () => {
  test('should change language when a language is selected', () => {
    render(<LanguageFlags />)
    const languageSwitcher = screen.getByRole('button', { name: 'עברית' })
    userEvent.click(languageSwitcher)
    const english = screen.getByRole('button', { name: 'English' })
    userEvent.click(english)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
