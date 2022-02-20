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
  import {useRouter} from 'next/router'
  
  export const CampaignDetailsBody = (props) => {

    const router = useRouter()

    const deleteCampaign = () => {
      const url = 'http://147.182.129.43:8080/api/deleteCampaign';

      const data = {
          "id" : props.campaign.ID
      }

      const deleteRequest = async () => {
          try {
              const response = await fetch(url,{
                  method: 'DELETE',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(data)
              });
              const json = await response.json();
              json = json.response;
              console.log(json);
          } catch (error) {
              console.log("error", error);
          }
      };

      deleteRequest();
      window.location = '/'
    }

    return(
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
          onClick={() => router.push({
            pathname: '/campaignedit', 
            query: {campaignid: props.campaign.ID}})}
        >
          Edit Campaign
        </Button>
        <Button
          color="error"
          variant="text"
          onClick={() => deleteCampaign()}
        >
          Delete Campaign
        </Button>
      </CardActions>
    </Card>
    )
  };