import Head from 'next/head';
import { Box, Container, Grid, Typography, CircularProgress } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { CardTile } from '../components/dashboard/card-tile';
import { Sales } from '../components/dashboard/sales';
import { TotalImpressions } from '../components/dashboard/total-impressions';
import { TotalClicks } from '../components/dashboard/total-clicks';
import { TotalPurchases } from '../components/dashboard/total-purchases';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect, useState } from 'react';
//import { campaigns } from '../__mocks__/campaigns'

const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [budget, setBudget] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [impressions, setImpressions] = useState(0);
  const [purchases, setPurchases] = useState(0);

  useEffect(() => {
    const url = 'http://147.182.129.43:8080/api/queryAll';

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            json = json.response;
            var Budget = 0;
            var TotalBudget = 0;
            var totalClick = 0;
            var totalImpression = 0;
            var totalPurchases = 0;
            for(var i = 0; i < JSON.parse(json).length; i++){
              Budget += parseFloat(JSON.parse(json)[i]['Budget']);
              TotalBudget += parseFloat(JSON.parse(json)[i]['TotalBudget']);
              totalClick += parseInt(JSON.parse(json)[i]['ClickCount']);
              totalImpression += parseInt(JSON.parse(json)[i]['ImpressionCount']);
              totalPurchases += parseInt(JSON.parse(json)[i]['PurchaseCount']);
            }
            setBudget(Budget.toFixed(4));
            setTotalBudget(TotalBudget.toFixed(2));
            setClicks(totalClick);
            setImpressions(totalImpression);
            setPurchases(totalPurchases);
            setCampaigns(JSON.parse(json));
            setIsLoading(false);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
  }, []);

  return(
  <>
    <Head>
      <title>
        Dashboard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              p: 2,
              marginTop: -7
            }}
          >
            <Typography
              sx={{ m: 2 }}
              variant="h4"
            >
              Campaign Summary Dashboard
            </Typography>
          </Box>
      <Container maxWidth={false}>
        {isLoading ?
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
          >

            <Grid item xs={3}>
            <CircularProgress />
            </Grid>   
            
          </Grid> 
          
        :
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <Budget totalbudget={budget}/>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalClicks totalclicks={clicks}/>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalImpressions totalimpressions={impressions}/>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalPurchases 
                sx={{ height: '100%' }} 
                totalpurchases={purchases}
              />
            </Grid>
            {/* second row */}
            <Grid
              item
              lg={4}
              md={6}
              xl={9}
              xs={12}
            >
              <CardTile title={"Click Through Rate"} body={impressions === 0 ? '0%' : ((clicks/impressions * 100).toFixed(2)).toString().concat('%')}/>
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <CardTile title={"Ad Spend"} body={`$${(totalBudget - budget).toFixed(2)}`}/>
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <CardTile title={"Conversion Rate"} body={clicks === 0 ? '0%' : (purchases/clicks).toString().concat('%')}/>
            </Grid>
            {/* third row */}
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <Sales />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <TrafficByDevice sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              {/* <LatestProducts sx={{ height: '100%' }} /> */}
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              {/* <LatestOrders /> */}
            </Grid>
          </Grid>
        }
      </Container>
    </Box>
  </>
  )
};

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
