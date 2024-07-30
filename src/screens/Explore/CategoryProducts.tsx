import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useGetProductsQuery } from "../../services/groceryApi";
import ProductsList from "../../components/ProductsList";

type Props = {
  categoryId?: number;
};

const CategoryProducts = ({ categoryId }: Props) => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading products</Text>;

  const filteredProducts = (products ?? []).filter(
    (product: Product) => !categoryId || product.categoryId === categoryId
  );

  return <ProductsList products={filteredProducts} />;
};

export default CategoryProducts;
