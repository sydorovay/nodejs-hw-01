import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts';

export const readContacts = async () => {
  try {
    // Зчитуємо файл з вказаного шляху
    const data = await readFile(PATH_DB, 'utf-8');
    // Парсимо дані JSON
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error); // Логування помилки
    throw new Error('Unable to read contacts'); // Генерація нової помилки
  }
};
