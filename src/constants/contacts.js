import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const filepath = path.join(dirname, '..', 'db', 'db.json');

export const PATH_DB = filepath;

// console.log(filepath);
