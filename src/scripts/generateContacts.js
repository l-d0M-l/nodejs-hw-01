import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
const generateContacts = async (number) => {
  let newContacts = [];
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    newContacts.push(newContact);
    // writeContacts(newContact);
  }
  await writeContacts(newContacts); //push them all at once to increade productivity
};

generateContacts(3);
