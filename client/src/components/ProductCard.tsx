import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={product.imageUrl} alt={product.name} className="rounded-md" />
        <p className="mt-4 text-lg font-semibold">${(product.price / 100).toFixed(2)}</p>
        <p className="text-sm text-gray-500 mt-2">{product.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
