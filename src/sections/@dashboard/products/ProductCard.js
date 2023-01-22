import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
// components
import Label from '../../../components/label';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
    product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
    const { product_name, photo, category, model } = product;

    return (
        <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
                <Label
                    variant="filled"
                    color="error"
                    sx={{
                        zIndex: 9,
                        top: 16,
                        right: 16,
                        position: 'absolute',
                        textTransform: 'uppercase',
                    }}
                >
                    -
                </Label>
                <Label
                    variant="filled"
                    color="info"
                    sx={{
                        zIndex: 9,
                        position: 'absolute',
                        textTransform: 'uppercase',
                        top: 16,
                        right: 60,
                    }}
                >
                    +
                </Label>
                <StyledProductImg alt={product_name} src={photo} />
            </Box>

            <Stack spacing={2} sx={{ p: 3 }}>
                <Link color="inherit" underline="hover">
                    <Typography variant="subtitle2" noWrap>
                        {product_name}
                    </Typography>
                    <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        {category.category_name} / {model.model_name}
                    </Typography>
                </Link>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle1">QTD: {25}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle1">
                        R$ {1200213}
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    );
}
