export function counter(state = 0, action) {
  switch (action.type) {

    case 'INCREMENT':
      return state + 1;

    case 'ADD':
      const { value } = action;
      return state + value;

    default:
      return state;
  }
}
