import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        // Запис порожнього масиву,
        await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf8');
        console.log('All contacts have been removed.');
    } catch (error) {
        console.error('Error removing all contacts:', error);
        throw error;
    }
};
removeAllContacts();
