export const fetchSingleUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);
