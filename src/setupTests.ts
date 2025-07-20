/* eslint-disable no-var */
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';

// Declare types for globalThis
declare global {
  var expect: typeof import('vitest').expect;
  var test: typeof import('vitest').test;
}

// Make `expect` and `test` globally available
globalThis.expect = expect;
globalThis.test = test;
