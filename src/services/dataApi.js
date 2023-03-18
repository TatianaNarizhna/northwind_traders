import axios from 'axios';

const BASE_URL = 'https://northwind-mykyta-tetyana.onrender.com';

export const getSuppliersFirstRender = async pageNumber => {
  try {
    const { data } = await axios.get(
      `https://northwind-mykyta-tetyana.onrender.com/pages/suppliers/${pageNumber}?count=true`,
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSuppliers = async pageNumber => {
  try {
    const { data } = await axios.get(
      `https://northwind-mykyta-tetyana.onrender.com/pages/suppliers/${pageNumber}`,
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// const { data } = await axios.get(
//   'https://northwind-mykyta-tetyana.onrender.com/pages/suppliers/1',
// );

// console.log(data);
