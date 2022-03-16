import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
    LinearProgress,
    Grid
  } from '@mui/material';
  import {useRouter} from 'next/router'
  import { CardTile } from '../dashboard/card-tile'
  
  export const CampaignDetailsBody = (props) => {

    const router = useRouter();

    const deleteCampaign = async () => {
      const url = `http://147.182.129.43:8080/api/endCampaign/${props.campaign.ID}`;

      const deleteRequest = async () => {
          try {
              const response = await fetch(url,{
                  method: 'GET',
                  headers: {'Content-Type': 'application/json'},
              });
              const json = await response.json();
              json = json.response;
          } catch (error) {
              console.log("error", error);
          }
      };

      await deleteRequest();
      window.location = '/'
    }

    return(
      <>
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
          }}
        >
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.campaign.Name}
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
        <Box
          m={3}
          width={400}
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h5"
          >
            Buyer: {props.campaign.Buyer}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h5"
          >
            Seller: {props.campaign.Seller}
          </Typography>
          
          </Box>
          <Box
          m={3}
          width={400}
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h5"
          >
            Click Price: {props.campaign.ClickPrice}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h5"
          >
            Impression Price: {props.campaign.ImpressionPrice}
          </Typography>
          </Box>
          
          <Box
          m={3}
          width={400}
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h5"
          >
            Status: {props.campaign.Status}
          </Typography>
          </Box>
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
          End Campaign
        </Button>
      </CardActions>
    </Card>
    <Grid
      container
      spacing={3}
      style={{marginTop: 10}}
    >
    <Grid
    item
    xl={3}
    lg={3}
    sm={6}
    xs={12}
  >
    <CardTile title="Running Budget" body={`${props.campaign.Budget?.toFixed(2)}/${props.campaign.TotalBudget}`}/>
    <Box sx={{ width: '100%' }}>
      <div style={{backgroundColor: 'blue'}} height="15px" width={`${props.campaign.Budget/props.campaign.TotalBudget}%`}/>
    </Box>
  </Grid>
  <Grid
    item
    xl={3}
    lg={3}
    sm={6}
    xs={12}
  >
    <CardTile title={`Click Count`} body={props.campaign.ClickCount}/>
  </Grid>
  <Grid
    item
    xl={3}
    lg={3}
    sm={6}
    xs={12}
  >
    <CardTile title="Impression Count" body={props.campaign.ImpressionCount}/>
  </Grid>
  <Grid
    item
    xl={3}
    lg={3}
    sm={6}
    xs={12}
  >
    <CardTile title="Purchase Count" body={props.campaign.PurchaseCount}/>
  </Grid>
  </Grid>
  <Grid
    container
    spacing={3}
    style={{marginTop: 10}}
  >
    <Grid
    item
    xl={2}
    lg={2}
    sm={4}
    xs={6}
  >
    <CardTile title="Click Through Rate" body={0}/>
  </Grid>
  <Grid
    item
    xl={2}
    lg={2}
    sm={4}
    xs={6}
  >
    <CardTile title={`Conversion Rate`} body={0}/>
  </Grid>
  <Grid
    item
    xl={2}
    lg={2}
    sm={4}
    xs={6}
  >
    <CardTile title="CPC" body={0}/>
  </Grid>
  <Grid
    item
    xl={2}
    lg={2}
    sm={4}
    xs={6}
  >
    <CardTile title="ACOS" body={0}/>
  </Grid>
  <Grid
    item
    xl={2}
    lg={2}
    sm={4}
    xs={6}
  >
    <CardTile title="ROAS" body={0}/>
  </Grid>
  <Grid
    item
    xl={2}
    lg={2}
    sm={4}
    xs={6}
  >
    <CardTile title="Purchase Amount" body={0}/>
  </Grid>
  </Grid>
  </>
    )
    
  };