import { render } from '@testing-library/react'
import Card from '..'
import { faker } from '@faker-js/faker';
import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/dom'
import { CUSTOM_ELEMENT } from 'utils/constants/testIds';

describe("Card unit tests", () => {
  it('tests cards with title and description', async () => {
    // ARRANGE
    const randomTitle = faker.lorem.words(5);
    const randomDescription = faker.lorem.paragraph();
  
    render(<Card 
          title={randomTitle} 
          description={randomDescription}
          />
      )
  
      // ACT
      // no actions required
  
      // ASSERT
      expect(screen.getByTestId(CUSTOM_ELEMENT)).toBeDefined()
      expect(screen.getByRole('button')).toBeDefined()
      expect(screen.getByText(randomDescription)).toBeDefined()
      expect(screen.getByText(randomTitle)).toBeDefined()

  })
})
