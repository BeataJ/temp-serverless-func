const result = document.querySelector('.result');

const fetchProducts = async () => {
  const { data } = await axios.get('/api/3-airtable');
  try {
    console.log(data);
  } catch (error) {
    result.innerHTML = '<h4>There was an error</h4>';
  }
};

fetchProducts();
