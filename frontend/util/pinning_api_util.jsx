export const createPinning = (pinning) => {
  return $.ajax({
    method: 'POST',
    url: '/api/pinnings',
    data: { pinning }
  });
};

export const deletePinning = (pinning) => {
  return $.ajax({
    method: 'DELETE',
    // TODO: change this when we change how pinnings controller delete
    // works
    url: '/api/pinnings/0',
    data: { pinning }
  });
};
