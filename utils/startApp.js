import { getBooks } from '../api/bookData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showBooks } from '../pages/books';
// import { getAuthors } from '../api/authorData';
// import { showAuthors } from '../pages/authors';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM we need the structure of the dom built first
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM we have to add event listeners to things already on the dom
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT remember events go last
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR we are only using bubbling

  // TODO: Put all books on the DOM on App load getBooks is a Promise! always .then it books is taco, it pulls the resolve
  getBooks(user.uid).then((books) => showBooks(books));
  // getAuthors(user.uid).then((authors) => showAuthors(authors));
};

export default startApp;
