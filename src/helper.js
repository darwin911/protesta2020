import axios from 'axios';

// const BASE_URL = `http://localhost:5000`;
const BASE_URL = `https://exercise-tracker-express.herokuapp.com`;

// Contacts

const addContact = async data => {
  try {
    const resp = await axios.post(`${BASE_URL}/contacts/add`, data);
    return resp;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

// const getUserExercises = async userId => {
//   try {
//     const resp = await axios.get(`${BASE_URL}/exercises/${userId}`);
//     return resp.data;
//   } catch (err) {
//     console.error(err);
//   }
// };

export { addContact };
