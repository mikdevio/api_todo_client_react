import "@testing-library/jest-dom";
import { cleanup } from '@testing-library/react';
import { afterEach, vi} from 'vitest';

// Automatic cleaning after each test
afterEach(()=>{
    cleanup();
});

// MatchMedia mock (Needed fro Shadcn components)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), 
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});