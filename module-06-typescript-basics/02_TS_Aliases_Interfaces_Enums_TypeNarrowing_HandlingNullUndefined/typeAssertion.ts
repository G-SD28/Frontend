// const input = document.querySelector('input') as HTMLInputElement;
// input.value = 'hello';

type Products = {
  id: number;
  title: string;
  price: number;
};

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = (await res.json()) as Products[];

  products.forEach((product) => {
    console.log(`${product.title} - $${product.price}`);
  });
}

fetchProducts();
