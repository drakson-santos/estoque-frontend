import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
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
  const { name, cover, price, priceSale } = product;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {/* {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )} */}
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
        <StyledProductImg alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
          <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Honda / XRE
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale && fCurrency(priceSale)}
            </Typography>
            R${fCurrency(price)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
