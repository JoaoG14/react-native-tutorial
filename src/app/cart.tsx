import { View, Text, FlatList } from "react-native";
import React from "react";
import { useContext } from "react";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartListItem";

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
    </View>
  );
};

export default CartScreen;
