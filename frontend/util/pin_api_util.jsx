export const fetchAllPins = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/pins'
  });
};

export const fetchSinglePin = (pinId) => {
  return $.ajax({
    method: 'GET',
    url: `api/pins/${pinId}`
  });
};

export const createPin = (pin) => {
  return $.ajax({
    method: 'POST',
    url: 'api/pins',
    data: { pin }
  });
};
