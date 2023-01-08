import { client } from '../utils/fetchClient';
import { SmallPhone } from '../types/Phone';

export const getPhones = (page: number, perPage: number) => {
  return client.get<SmallPhone[]>(`/phones?page=${page}&perPage=${perPage}`);
};

// export const postTodo = (newTodo: Omit<Todo, 'id'>) => {
//   return client.post<Todo>('/todos', newTodo);
// };
//
// export const deleteTodo = (todoId: number) => {
//   return client.delete(`/todos/${todoId}`);
// };
//
// export const modifyTodo = (userId: number, todo: Partial<Todo>) => {
//   return client.patch<Todo>(`/todos/${userId}`, todo);
// };
