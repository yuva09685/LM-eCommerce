import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-bold">LM-eCommerce</h1>
      <Button variant="outline" size="icon">
        <ShoppingCart className="h-4 w-4" />
      </Button>
    </header>
  );
}
