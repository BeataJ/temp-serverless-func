const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/2-basic-api');
    result.innerHTML = `<h2>Success</h2>`;
  } catch (error) {
    result.innerHTML = `<h2>There was an error. Please try again later</h2>`;
  }
};

fetchData();
