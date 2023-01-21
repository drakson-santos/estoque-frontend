import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort, ProductList } from '../sections/@dashboard/products';
// mock
import ShowFormButton from '../components/form/button';
import { getProducts } from '../controllers/product';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.products || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard: Produtos </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Produtos
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductSort />
          </Stack>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ShowFormButton />
          </Stack>
        </Stack>

        <ProductList products={products} />
      </Container>
    </>
  );
}
