export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

export const OPEN = (component) => ({
  type: OPEN,
  component: component,
});

export const CLOSE = () => ({
  type: CLOSE,
  board: board,
});
