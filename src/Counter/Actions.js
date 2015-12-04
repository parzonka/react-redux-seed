export function increment() {
  return {
    type: 'INCREMENT'
  }
}

export function add(value) {
  return {
    type: 'ADD',
    value
  }
}
