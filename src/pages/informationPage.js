import axios from 'axios';

const information = {
  message: '',
}

const getData = async () => {
  try {
    const token = JSON.parse(localStorage.getItem('token'));
    const data = await axios.get(`https://authhentication-31d97.firebaseio.com/information.json?auth=${token}`);
    console.log(data);
  } catch (error) {
    console.error(error)
  }
}

const resetData = (e) => {
  e.target.reset();
  information.message = '';
}

const postData = async (e) => {
  e.preventDefault();
  try {
    const token = JSON.parse(localStorage.getItem('token'));
    const data = await axios.post(`https://authhentication-31d97.firebaseio.com/information.json?auth=${token}`, information)
    console.log(data);
  } catch (error) {
    console.error(error)
  }
  information.message = '';
  console.log('e.currentTarget', e)
  resetData(e);
}

const createNewData = (e) => {
  const informationForm = document.forms.informationForm;
  information.message = informationForm.info.value;
  console.log(information);
}

export const addListenersForInfoPage = () => {
  console.log("dfsdfds")
  const informationForm = document.forms.informationForm;
  const dataGetButton = document.querySelector('.dataGetButton');
  informationForm.addEventListener('input', createNewData)
  informationForm.addEventListener('submit', postData);
  dataGetButton.addEventListener('click', getData)
}


const getInformation = () => {
  return `
  <h1>Information Page</h1>
  <form class="informationForm" name="informationForm">
    <input type="text" name="info">
    <button class="submitData" type="submit">Submit</button>
  </form>
  <button type="button" class="dataGetButton">Get data from Fire</button>
  <ul class="informationDataList"></ul>
  `
}
export default getInformation;
