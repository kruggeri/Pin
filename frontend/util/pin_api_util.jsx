export const fetchAllPins = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pins'
  });
};

export const fetchSinglePin = (pinId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pins/${pinId}`
  });
};

export const createPin = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/pins',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const destroyPin = (pinId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/pins/${pinId}`
  })
}
