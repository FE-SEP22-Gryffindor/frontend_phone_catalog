import { client } from '../utils/fetchClient';
import { Tablet } from '../types/Tablet';

export const getTablets = (page: number, perPage: number) => {
  return client.get<Tablet[]>(
    `/tablets?page=${page}&perPage=${perPage}`,
    'tablets-count',
  );
};

export const getNewTablets = () => {
  return client.get<Tablet[]>(`/tablets/new`, 'tablets-count');
};

export const getDiscountTablets = () => {
  return client.get<Tablet[]>(`/tablets/discount`, 'tablets-count');
};
