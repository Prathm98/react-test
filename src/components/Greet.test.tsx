import { render, screen } from "@testing-library/react"
import Greet from "./Greet"
describe("Greet", () => {
    test("Renders Correctly", () => {
        render(<Greet />)
        const expectedText = screen.getByText(/hello/i)
        expect(expectedText).toBeInTheDocument()
    })
})

describe("Greet with name", ()=>{
    test("Renders Correctly with User", () => {
        render(<Greet name="User" />)
        const expectedText = screen.getByText("Hello User")
        expect(expectedText).toBeInTheDocument()
    })
    
    test("Renders Correctly with User1", () => {
        render(<Greet name="User1" />)
        const expectedText = screen.getByText("Hello User1")
        expect(expectedText).toBeInTheDocument()
    })
})
