import { render, screen } from '@testing-library/react'
import { Application } from './Application';

describe('Application', () => { 
    test("renders correctly", () => {
        render(<Application />)
        const nameElement = screen.getByRole('textbox')
        expect(nameElement).toBeInTheDocument()

        const jobElement = screen.getByRole('combobox')
        expect(jobElement).toBeInTheDocument()

        const checkElement = screen.getByRole('checkbox')
        expect(checkElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    });
})