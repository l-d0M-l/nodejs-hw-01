import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contactToAdd = createFakeContact();
  writeContacts(contactToAdd);
};
addOneContact();
