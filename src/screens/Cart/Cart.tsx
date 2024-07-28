import React, { useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementProductQuantity,
  incrementProductQuantity,
  removeFromCart,
} from "./cartSlice";
import { colors } from "../../constants/colors";
import CartItem from "./CartItem";
import { scale, verticalScale } from "../../utilis/scaling";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const handleIncrement = useCallback(
    (productId: number) => {
      dispatch(incrementProductQuantity(productId));
    },
    [dispatch]
  );

  const handleDecrement = useCallback(
    (productId: number) => {
      dispatch(decrementProductQuantity(productId));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (productId: number) => {
      dispatch(removeFromCart(productId));
    },
    [dispatch]
  );

  const renderItem = useCallback(
    ({ item }) => (
      <CartItem
        onIncrement={() => handleIncrement(item.product.id)}
        onDecrement={() => handleDecrement(item.product.id)}
        onRemove={() => handleRemove(item.product.id)}
        name={item.product.name}
        price={item.product.price}
        quantity={item.quantity}
        image={item.image}
      />
    ),
    [handleIncrement, handleDecrement, handleRemove]
  );

  const Separator = () => <View style={styles.separator} />;
  return (
    <View style={styles.container}>
      {cartItems && cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.product.id + ""}
            renderItem={renderItem}
            ItemSeparatorComponent={Separator}
          />
          <OrderSummary />
        </>
      ) : (
        <EmptyCart />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(19),
    backgroundColor: colors.white,
  },
  loadingText: {
    fontSize: 18,
    color: colors.primary,
    textAlign: "center",
    marginTop: 20,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.greySeparator,
  },
});
