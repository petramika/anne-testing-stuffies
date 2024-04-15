import { render, waitFor } from "@testing-library/react"
import { Weather } from '..'
import { describe, it, expect, vi, afterEach } from "vitest"
import { screen } from '@testing-library/dom'
import { SEARCH_RESPONSE_SUCCESS } from "./constants";
import { getWeatherData } from "utils/api";
import _ from "lodash";

describe("Integration tests Weather app", () => {
    afterEach(() => {
        vi.resetAllMocks()
      })
      
    it("Renders the weather page success search response", async () => { 
        // ARRANGE
        vi.mocked(getWeatherData).mockResolvedValue(SEARCH_RESPONSE_SUCCESS);
        
        // ACT
        const result = render(<Weather />)

        // ASSERT
        await waitFor(() => {
            expect(screen.getByText(_.first(SEARCH_RESPONSE_SUCCESS)!.name)).toBeDefined()
        })

        expect(result).toMatchSnapshot()

    })
})
