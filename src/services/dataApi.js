import axios from 'axios';

const BASE_URL = 'https://northwind-mykyta-tetyana.onrender.com';

export const getSuppliers = async () => {
  try {
    const { data } = await axios.get(
      'https://northwind-mykyta-tetyana.onrender.com/pages/suppliers/1',
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// const { data } = await axios.get(
//   'https://northwind-mykyta-tetyana.onrender.com/pages/suppliers/1',
// );

// console.log(data);
