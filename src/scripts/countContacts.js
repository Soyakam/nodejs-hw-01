import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error;
  }
};
(async () => {
  try {
    const contactCount = await countContacts();
    console.log('Number of contacts:', contactCount);
  } catch(error) {
    console.error('Error counting contacts', error);
  }
})();
