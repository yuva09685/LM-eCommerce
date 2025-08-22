import Header from "@/components/Header";
import ProductCard, { Product } from "@/components/ProductCard";

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("http://localhost:3000/products", { cache: 'no-store' });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <Header />
      <main className="p-8">
        <h2 className="text-3xl font-bold mb-6">Products</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>No products found. The backend server may be down or the database is empty.</p>
        )}
      </main>
    </div>
  );
}
