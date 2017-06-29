export const OPEN = "OPEN";
export const CLOSE = "CLOSE";
export const RECEIVE_COMPONENT = "RECEIVE_COMPONENT";

export const open = (component) => ({
  type: OPEN,
  component: component,
});

export const close = () => ({
  type: CLOSE,
});

export const receiveComponent = component => ({
  type: RECEIVE_COMPONENT,
  component
});
