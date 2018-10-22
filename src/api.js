import axios from "axios";

const urlAPI = 'http://localhost:3001';

export const fetchListToDo = async () => {
    try{
        const response = await axios.get(`${urlAPI}/List`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const postItem = async (value) => {
    try{
        await axios.post(`${urlAPI}/List`, {
            name: value
        });
        return fetchListToDo();
    } catch (error) {
        console.log(error);
    }
}
export const deleteItem = async (id) => {
    try{
        await axios.delete(`${urlAPI}/List/${id}`);
        return fetchListToDo();
    } catch (error) {
        console.log(error);
    }
}
export const putItem = async (id, value) => {
    try{
        await axios.put(`${urlAPI}/List/${id}`, {
            name: value
        });
        return fetchListToDo();
    } catch (error) {
        console.log(error);
    }
}