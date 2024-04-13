import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box, Grid } from '@mui/material';

export default function Variants({
  skeletonQuantity = 1,
}: {
  skeletonQuantity?: number;
}) {
  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      {[...new Array(skeletonQuantity)].map((_, i) => (
        <Grid item key={`${i}-skeleton`}>
          <Box sx={{ width: 220, marginRight: 0.5, m: 3 }}>
            <Skeleton variant="rectangular" animation="wave" height={120} />
            <br />
            <Box>
              <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rectangular" width={210} height={60} />
              </Stack>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
