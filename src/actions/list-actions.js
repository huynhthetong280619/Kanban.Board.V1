const LIST_DELETE = 'LIST_DELETE';

export const removeList = listId => {
  return {
    type: LIST_DELETE,
    payload: {
      listId,
    },
  };
};
