export function nextIndex(index, total) {
  return (index + 1) % total;
}

export function prevIndex(index, total) {
  return (index - 1 + total) % total;
}
