import getHomePage from './pages/homePage';
import getInformation, { addListenersForInfoPage } from './pages/informationPage';
import getAuthForm from './auth/authForm';
import './styles.css';
import { addAuthFormListeners } from './auth/authServices';

const navigationList = document.querySelector('.navigationList');
const content = document.querySelector('.content');
content.innerHTML = getHomePage();

const getPage = (e) => {
  if (e.target === e.currentTarget) {
    return
  }
  setActiveLink(e.target)
  switch (e.target.dataset.page) {
    case 'home':
      content.innerHTML = getHomePage();
      break;
    case 'information':
      content.innerHTML = getInformation();
      addListenersForInfoPage();
      break;
    case 'signUp':
      content.innerHTML = getAuthForm();
      addAuthFormListeners();
      break;
    case 'signOut':
      const home = document.querySelector('[data-page="home"]');
      content.innerHTML = getHomePage();
      setActiveLink(home);
      localStorage.setItem('token', '');
      break;

    default:
      break;
  }
}

const setActiveLink = (target) => {
  const activePage = document.querySelector('.activeLink');
  activePage.classList.remove('activeLink');
  target.classList.add('activeLink');
}

navigationList.addEventListener('click', getPage);

