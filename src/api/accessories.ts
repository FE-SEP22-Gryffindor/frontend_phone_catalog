import { client } from '../utils/fetchClient';
import { Accessory } from '../types/Accessory';

export const getAccessorieslets = (page: number, perPage: number) => {
  return client.get<Accessory[]>(
    `/accessories?page=${page}&perPage=${perPage}`,
    'accessories-count',
  );
};

export const getNewAccessories = () => {
  return client.get<Accessory[]>(`/accessories/new`, 'accessories-count');
};

export const getDiscountAccessories = () => {
  return client.get<Accessory[]>(`/accessories/discount`, 'accessories-count');
};
