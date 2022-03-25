import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
//import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
//import PeopleIcon from '@mui/icons-material/PeopleOutlined';

export const CardTile = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            {props.title}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.body}
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
      </Box>
    </CardContent>
  </Card>
);
