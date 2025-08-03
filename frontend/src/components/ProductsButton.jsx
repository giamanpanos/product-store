import { Button } from "@chakra-ui/react";
import { data } from "../../public/data.js";
import { useProductStore } from "../store/product.js";

const ProductsResetButton = () => {
  const { createProduct, deleteAllProducts } = useProductStore();

  const handleResetProducts = async () => {
    await deleteAllProducts();
    data.map(async (product) => await createProduct(product));
  };

  return (
    <Button colorScheme="blue" onClick={handleResetProducts} w="200px" mt={2}>
      Reset Products
    </Button>
  );
};

export default ProductsResetButton;
