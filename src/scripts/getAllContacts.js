import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, {
        encoding: 'utf8',
    });
        return JSON.parse(data);
};
(async () => {
    try {
        const contacts = await getAllContacts();
        console.log(contacts);
    } catch (error) {
        console.error( error);
    }

})();
