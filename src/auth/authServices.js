import axios from 'axios';

const user = {
  email: '',
  password: ''
}

const userInfoHandler = (e) => {
  user[e.target.name] = e.target.value;
  console.log(user);
}

const resetData = (e) => {
  e.target.reset();
  user.email = '';
  user.password = '';
}

const authWithEmailAndPaswword = async (e) => {
  const apiKey = 'AIzaSyAHQrxoxIj1_QBCdgA7_iGxFyy3WMAXpK8';
  switch (e.submitter.dataset.action) {
    case 'signup':
      try {
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, { ...user, returnSecureToken: true })
        localStorage.setItem('token', JSON.stringify(response.data.idToken))
      } catch (error) {
        console.error(error);
      }
      break;
    case 'signin':
      try {
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, { ...user, returnSecureToken: true })
        localStorage.setItem('token', JSON.stringify(response.data.idToken))
      } catch (error) {
        console.error(error);
      }
      break;

    default:
      break;
  }
}

const submitData = (e) => {
  e.preventDefault();
  authWithEmailAndPaswword(e);
  resetData(e);
}

export const addAuthFormListeners = () => {
  const authForm = document.forms.authForm;
  authForm.addEventListener('input', userInfoHandler);
  authForm.addEventListener('submit', submitData);
}


