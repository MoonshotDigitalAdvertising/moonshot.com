import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
//import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

export const TotalImpressions = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
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
            TOTAL IMPRESSIONS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.totalimpressions}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
