import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

vi.mock('utils/api')

expect.extend(matchers);

afterEach(() => {
  cleanup();
});