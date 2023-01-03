import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test("Greet Renders Correctly", () => {
    render(<Greet />)
    const expectedText = screen.getByText(/hello/i)
    expect(expectedText).toBeInTheDocument()
})

test("Greet Renders Correctly with Name", () => {
    render(<Greet name="User" />)
    const expectedText = screen.getByText("Hello User")
    expect(expectedText).toBeInTheDocument()
})