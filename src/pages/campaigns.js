import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CampaignListResults } from '../components/campaign/campaign-list-results';
import { CampaignListToolbar } from '../components/campaign/campaign-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { useEffect, useState } from 'react';

const Campaigns = () => {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const url = 'http://147.182.129.43:8080/api/queryAll';

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            json = json.response;
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
        Campaigns | Moonshot Digital Advertising
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CampaignListToolbar />
        <Box sx={{ mt: 3 }}>
          <CampaignListResults campaigns={campaigns} />
        </Box>
      </Container>
    </Box>
  </>
)
};

Campaigns.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Campaigns;
