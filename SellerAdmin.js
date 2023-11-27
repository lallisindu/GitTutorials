const URL = 'https://crudcrud.com/api/91f7ccfebd8a44c9898b85a71422e834'; 

document.addEventListener('DOMContentLoaded', () => {
  const productForm = document.getElementById('productForm');
  const productsList = document.getElementById('productsList');
  const totalWorth = document.getElementById('totalWorth');

  productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    if (productName && productPrice) {
      const product = {
        name: productName,
        price: parseFloat(productPrice),
      };

      try {
        await addProduct(product);
        await displayProducts();
      } catch (error) {
        console.error('Error:', error);
      }

      productForm.reset();
    }
  });

  async function addProduct(product) {
    try {
      const response = await fetch(`${URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
      await updateTotalWorth();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function displayProducts() {
    try {
      const response = await fetch(`${URL}/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const products = await response.json();
      renderProducts(products);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function renderProducts(products) {
    productsList.innerHTML = '';
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.innerHTML = `
        <p>${product.name} - $${product.price}</p>
        <button onclick="deleteProduct('${product._id}')">Delete</button>
      `;
      productsList.appendChild(productItem);
    });
  }

  async function deleteProduct(productId) {
    try {
      const response = await fetch(`${URL}/products/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      await updateTotalWorth();
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async function updateTotalWorth() {
    try {
      const response = await fetch(`${URL}/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const products = await response.json();
      const total = products.reduce((acc, curr) => acc + curr.price, 0);
      totalWorth.textContent = `Total Worth of Products: ${total.toFixed(2)}`;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  window.deleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      await displayProducts();
    } catch (error) {
      console.error('Error:', error);
    }
  };


  // Display products on page load
  displayProducts();
  updateTotalWorth(); 
});