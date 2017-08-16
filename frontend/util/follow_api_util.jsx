export const createFollow = (follow) => {
  return $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: { follow }
  });
};

export const deleteFollow = (follow) => {
  return $.ajax({
    method: 'DELETE',
    // TODO: change this when we change how follows controller delete
    // works
    url: '/api/follows/0',
    data: { follow }
  });
};
