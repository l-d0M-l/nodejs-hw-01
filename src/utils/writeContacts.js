import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { deepStrictEqual } from 'node:assert';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  const data = await readContacts();
  const contacts = JSON.parse(data);

  //smart check: if added array(from generate contacts) then add it, if just 1 (from add-one) then just push it
  const newContacts = Array.isArray(updatedContacts)
    ? [...contacts, ...updatedContacts] // merge arrays
    : [...contacts, updatedContacts]; // push single item

  await fs.writeFile(
    PATH_DB,
    JSON.stringify(newContacts, undefined, 2),
    'utf-8',
  );
};
