import {
  listSection,
  formSection,
  contactSection,
  navList,
  navForm,
  navContact,
} from './dom-element-selectors.js';

export const openBooksList = () => {
  navList.classList.add('active');
  navForm.classList.remove('active');
  navContact.classList.remove('active');
  listSection.classList.remove('hidden');
  formSection.classList.add('hidden');
  contactSection.classList.add('hidden');
};
export const openAddBook = () => {
  navList.classList.remove('active');
  navForm.classList.add('active');
  navContact.classList.remove('active');
  listSection.classList.add('hidden');
  formSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
};
export const openContact = () => {
  navList.classList.remove('active');
  navForm.classList.remove('active');
  listSection.classList.add('hidden');
  formSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
};
