import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';

vi.mock('utils/api');

expect.extend(matchers);

afterEach(() => {
  cleanup();
});