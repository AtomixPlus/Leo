import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll } from "vitest";

// after each test
afterEach(() => {
  cleanup();
});

// before each test
beforeAll(() => {

});