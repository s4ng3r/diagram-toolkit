export function useId(prefix = 'input') {
  return `${prefix}-${Math.random().toString(36).slice(2, 5)}`;
}
