import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const TotalProfit = (props) => (
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
            TOTAL PURCHASES
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.totalpurchases}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
