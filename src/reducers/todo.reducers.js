const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          complete: action.complete,
          text: action.text
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    case "Delete_TODO":
      return state.filter(
        todo =>
          todo.id !== action.id
      );
      case "Edit_TODO":
      // state.filter(
      //   todo =>
      //     todo.id !== action.id ? {...todo, }
      // );
      return state
      
      
    default:
      return state;
  }
};
export default todos;
