let nextTodoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  complete: false,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const filter = filter => ({
  type: "FILTER_TODO",
  filter
});
export const editTodo = id => ({
  type: "Edit_TODO",
  id
});
export const deleteTodo = id => (
  {
  type: "Delete_TODO",
  id
});
