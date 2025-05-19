import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const data = await readContacts();
  const contacts = JSON.parse(data);
  contacts.pop();
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2), 'utf-8');
};

removeLastContact();
