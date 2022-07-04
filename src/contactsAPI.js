import axios from 'axios';
axios.defaults.baseURL = 'https://62bc5df16b1401736cf8f6e5.mockapi.io';

export async function contactsAPI() {
    const { data } = await axios.get('/user');
    return data;
}
export const createContact = async values => {
    const { data } = await axios.post('/user', values);
    return data;
};
export const deleteContact = async id => {
    const { data } = await axios.delete(`/user/${id}`);
    return data;
};