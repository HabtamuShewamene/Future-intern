import contactApi from '../api/contactApi';

export const submitContactForm = async (payload) => {
  const { data } = await contactApi.post('/api/contact', payload);
  return data;
};
