const result = document.querySelector('.result');

const fetchProduct = () => {
  result.innerHTML = `<h2>Loading...</h2>`;
  try {
    const id = window.location.search;
    console.log(id);
  } catch (error) {}
};

fetchProduct();
