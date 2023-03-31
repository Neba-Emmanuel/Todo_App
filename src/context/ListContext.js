import createDataContext from './createDataContext';

const listReducer = (state, action) => {
  switch (action.type) {
    case 'delete_listitem':
      return state.filter((listitem) => blogPost.id !== action.payload);
    case 'add_listitem':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addListItem = (dispatch) => {
  return (content, callback) => {
    dispatch({ type: 'add_listitem', payload: { content } });
    if (callback) {
      callback();
    }
  };
};
const deleteListItem = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_listitem', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  listReducer,
  { addListItem, deleteListItem },
  [{ content: 'TEST CONTENT', id: 1 }]
);
