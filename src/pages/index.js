import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect, useState } from 'react';
//import { campaigns } from '../__mocks__/campaigns'

const Dashboard = () => {

  const [campaigns, setCampaigns] = useState([]);
  const [budget, setBudget] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [impressions, setImpressions] = useState(0);
  const [purchases, setPurchases] = useState(0);

  useEffect(() => {
    const url = 'http://147.182.129.43:8080/api/queryAll';

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            json = json.response;
            //console.log(JSON.parse(json).length);
            var totalBudget = 0;
            var totalClick = 0;
            var totalImpression = 0;
            var totalPurchases = 0;
            for(var i = 0; i < JSON.parse(json).length; i++){
              //console.log(JSON.parse(json)[i]);
              totalBudget += parseFloat(JSON.parse(json)[i]['Budget']);
              totalClick += parseInt(JSON.parse(json)[i]['ClickCount']);
              totalImpression += parseInt(JSON.parse(json)[i]['ImpressionCount']);
              totalPurchases += parseInt(JSON.parse(json)[i]['PurchaseCount']);
            }
            //console.log(totalBudget);
            setBudget(totalBudget.toFixed(4));
            setClicks(totalClick);
            setImpressions(totalImpression);
            setPurchases(totalPurchases);
            setCampaigns(JSON.parse(json));
            console.log(campaigns);
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
        Dashboard | Mooonshot Digital Advertising
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
            <TotalCustomers totalclicks={clicks}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress totalimpressions={impressions}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} totalpurchases={purchases}/>
          </Grid>
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
