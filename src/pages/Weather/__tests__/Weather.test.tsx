import { render } from "@testing-library/react"
import { Weather } from '..'
import { describe, it, expect } from "vitest"

describe("Integration tests Weather app", () => {
    it("Renders the main page", () => {
        const result = render(<Weather />)
        expect(result).toMatchSnapshot()
    })
})
