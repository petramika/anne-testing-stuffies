import { faker } from '@faker-js/faker';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { CUSTOM_ELEMENT } from 'utils/constants/testIds';
import { describe, expect, it } from 'vitest';

import Card from '..';

describe('Card unit tests', () => {
  it('tests cards with title and description', async () => {
    // ARRANGE
    const randomTitle = faker.lorem.words(5);
    const randomDescription = faker.lorem.paragraph();
  
    // ACT
    render(
      <Card 
        title={randomTitle} 
        description={randomDescription}
      />,
    );
  
    // ASSERT
    expect(screen.getByTestId(CUSTOM_ELEMENT)).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(randomDescription)).toBeDefined();
    expect(screen.getByText(randomTitle)).toBeDefined();

  });
});
