import { Button } from "@chakra-ui/react";
import { data } from "../../public/data.js";
import { useProductStore } from "../store/product.js";

const ProductsButton = () => {
  const { createProduct, deleteAllProducts } = useProductStore();

  const handleRefreshProducts = async () => {
    await deleteAllProducts();
    data.map(async (product) => await createProduct(product));
  };

  return (
    <Button colorScheme="blue" onClick={handleRefreshProducts} w="200px" mt={2}>
      Refresh Products
    </Button>
  );
};

export default ProductsButton;
