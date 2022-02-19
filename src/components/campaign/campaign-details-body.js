import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
    LinearProgress
  } from '@mui/material';
  
  export const CampaignDetailsBody = (props) => (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            color="textPrimary"
            variant="h5"
          >
            {props.campaign.Name}
          </Typography>
        </Box>
        <Box
          m={3}
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body"
          >
            Running Budget
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body"
          >
            {props.campaign.Budget}/{props.campaign.TotalBudget}
          </Typography>
          <LinearProgress />
          </Box>
          <Box
          m={3}
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body"
          >
            Click Count: {props.campaign.ClickCount}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body"
          >
            Impression Count: {props.campaign.ImpressionCount}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body"
          >
            Purchase Count: {props.campaign.PurchaseCount}
          </Typography>
          </Box>
          <Box
          m={3}
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body"
          >
            Click Price: {props.campaign.ClickPrice}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body"
          >
            Impression Price: {props.campaign.ImpressionPrice}
          </Typography>
          </Box>
          <Box
          m={3}
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body"
          >
            Buyer: {props.campaign.Buyer}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body"
          >
            Seller: {props.campaign.Seller}
          </Typography>
          
          </Box>
          <Box
          m={3}
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body"
          >
            Status: {props.campaign.Status}
          </Typography>
          </Box>
      </CardContent>
      <Divider />
      <CardActions style={{display: "flex", justifyContent: "flex-end"}}>
        <Button
          color="primary"
          variant="text"
        >
          Edit Campaign
        </Button>
        <Button
          color="error"
          variant="text"
        >
          Delete Campaign
        </Button>
      </CardActions>
    </Card>
  );