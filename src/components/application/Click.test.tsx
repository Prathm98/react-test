import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import user from '@testing-library/user-event'

describe("Count", () => {
    test("Renders Correctly", () => {
        render(<Counter />)
        const expectedText = screen.getByRole('heading')
        expect(expectedText).toBeInTheDocument()

        const buttonEle = screen.getByRole('button', {
            name: 'Increment'
        })
        expect(buttonEle).toBeInTheDocument()
    })

    test("Renders correctly with initial count", () => {
        render(<Counter />)
        const expectedText = screen.getByRole('heading')
        expect(expectedText).toHaveTextContent("0")       
    })

    test("Renders Correctly with click event", async () => {
        user.setup()
        render(<Counter />)
        const expectedText = screen.getByRole('heading')
        expect(expectedText).toBeInTheDocument()

        const buttonEle = screen.getByRole('button', {
            name: 'Increment'
        })
        expect(buttonEle).toBeInTheDocument()

        await user.click(buttonEle)
        await user.click(buttonEle)

        const countText = screen.getByRole('heading')
        expect(countText).toHaveTextContent("2")
    })
})
