import "@testing-library/jest-dom/vitest"

// jsdom lacks these browser APIs that motion/react and observers rely on.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}

class MockObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

if (!window.IntersectionObserver) {
  window.IntersectionObserver = MockObserver
}
if (!window.ResizeObserver) {
  window.ResizeObserver = MockObserver
}
