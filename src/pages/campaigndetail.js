import Head from 'next/head';
import { Box, Container, Typography, Button } from '@mui/material';
import { Download as DownloadIcon } from '../icons/download';
import { Upload as UploadIcon } from '../icons/upload';
import { CampaignListResults } from '../components/campaign/campaign-list-results';
import { CampaignListToolbar } from '../components/campaign/campaign-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import {CampaignDetailsBody} from '../components/campaign/campaign-details-body';
import {CampaignTransactions} from '../components/campaign/campaign-transactions'
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router'

const CampaignDetail = () => {

  const router = useRouter()
  const { campaignid } = router.query

  const [campaign, setCampaign] = useState({});

  useEffect(() => {
    const url = `http://147.182.129.43:8080/api/campaign/${campaignid}`;

    const fetchData = async () => {
        try {
            //get one campaign
            const response = await fetch(url);
            const json = await response.json();
            json = json.response;
            setCampaign(JSON.parse(json))
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
        Campaign Detail | Moonshot Digital Advertising
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
      <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
        <Box
        sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            m: -1
          }}>
        <Button
            color="primary"
            variant="contained"
            onClick={() => router.back()}>
                {`<Back`}
        </Button>
      <Typography
        sx={{ m: 1 }}
        variant="h4"
        
      >
        Campaign - {campaignid}
      </Typography>
        </Box>
        
      <Box sx={{ m: 1 }}>
        <Button
          startIcon={(<DownloadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Download Data
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => router.push('/campaigncreate')}
        >
          Add New Campaign
        </Button>
      </Box>
    </Box>
        <Box sx={{ mt: 3 }}>
            <CampaignDetailsBody campaign={campaign}/>
        </Box>
        <Box sx={{ mt: 3 }}>
            <CampaignTransactions campaign={campaignid}/>
        </Box>
      </Container>
    </Box>
  </>
)
};

CampaignDetail.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default CampaignDetail;
