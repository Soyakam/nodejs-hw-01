import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
export const removeLastContact = async () => {
    try {
        // Читання вмісту файлу db.json
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);

        // Перевірка, чи є в масиві хоча б один контакт
        if (contacts.length > 0) {
            // Видалення останнього контакту
            contacts.pop();

            // Запис оновленого масиву контактів назад у файл
            await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
            console.log('Last contact has been removed.');
        } else {
            console.log('No contacts to remove.');
        }
    } catch (error) {
        console.error('Error removing last contact:', error);
        throw error;
    }
};


removeLastContact();
