type Product = {
  id: number;
  name: string;
  categoryId?: number;
  price: number;
  unit: string;
  image: string;
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
  id: number;
};

type CartItemType = {
  product: Product;
  quantity: number;
};

type RootState = {
  cart: {
    cartItems: CartItemType[];
  };
};

type RootStackParamList = {
  [K in (typeof ScreenNames)[keyof typeof ScreenNames]]: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;
