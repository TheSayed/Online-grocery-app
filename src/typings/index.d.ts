type Product = {
  id?: number;
  name?: string;
  categoryId?: number;
  price?: number;
  unit?: string;
  image?: string;
};

type Category = {
  id: number;
  name: string;
  image: string;
};

type CartItemProps = {
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  image: string;
  name: string;
  price: number;
  quantity: number;
};
