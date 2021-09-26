import { fetchData } from "../utils/fetchWrapper";

export const getUsers = (numItemsPerRequest: number): Promise<any> => {
    return fetchData(`https://randomuser.me/api/?results=${numItemsPerRequest}&inc=name,picture&noinfo`);
};
