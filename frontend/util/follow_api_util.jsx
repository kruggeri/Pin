export const createFollow = (follow) => {
  let result = $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: { follow }
  });

  result.then(theServerResponse => {console.log(theServerResponse)});
  return result;
};

export const deleteFollow = (follow) => {
  // called for its side effect.
  let result = $.ajax({
    method: 'DELETE',
    // TODO: change this when we change how follows controller delete
    // works
    url: '/api/follows/0',
    data: { follow }
  })

  // what is result? is a promise
  result.then(theServerResponse => {console.log(theServerResponse)});

  return result;
};
