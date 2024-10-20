import { writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    // Конвертація оновлених контактів у формат JSON
    const data = JSON.stringify(updatedContacts, null, 2); // Додавання форматування для зручності
    // Запису даних у файл
    await writeFile(PATH_DB, data, 'utf-8');
    console.log("Contats have been sucessfuly written to the file.");
  } catch (error) {
    console.error("Error writing contacts:", error); // Логування помилки
    throw new Error("Unable to write contacts"); // Генерація нової помилки
  }
};
