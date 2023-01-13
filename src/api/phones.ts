import { client } from '../utils/fetchClient';
import { FullPhone, Phone } from '../types/Phone';

export const getPhones = (page: number, perPage: number) => {
  return client.get<Phone[]>(
    `/phones?page=${page}&perPage=${perPage}`,
    'phones-count',
  );
};

export const getOnePhone = (slug: string) => {
  return client.get<FullPhone>(
    `/phones/${slug}`,
    'phones-count',
  );
};

export const getNewPhones = () => {
  return client.get<Phone[]>(`/phones/new`, 'phones-count');
};

export const getDiscountPhones = () => {
  return client.get<Phone[]>(`/phones/discount`, 'phones-count');
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
