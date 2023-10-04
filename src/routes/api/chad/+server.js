export async function GET() {
  const response = await fetch("https://dummyjson.com/products")
  const data = await response.json();
  const products = data.products;
  const appProducts = products.map((product) => {
    return {
      title: product.title,
      image: product.images[0]
    };
  });
  console.log(appProducts)
  return new Response(JSON.stringify(appProducts), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
