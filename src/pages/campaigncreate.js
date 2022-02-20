import Head from 'next/head';
import { Box, Container, Typography, Button } from '@mui/material';
import { Download as DownloadIcon } from '../icons/download';
import { Upload as UploadIcon } from '../icons/upload';
import { CampaignListResults } from '../components/campaign/campaign-list-results';
import { CampaignListToolbar } from '../components/campaign/campaign-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import {CampaignCreateForm} from '../components/campaign/campaign-create-form';
import { useEffect, useState } from 'react';
import Router, {useRouter} from 'next/router'

const CampaignCreate = () => {

  const router = useRouter()

  return(
  <>
    <Head>
      <title>
        Campaign Create | Moonshot Digital Advertising
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
        Create Campaign
      </Typography>
        </Box>
        
      <Box sx={{ m: 1 }}>
        
      </Box>
    </Box>
        <Box sx={{ mt: 3 }}>
            <CampaignCreateForm/>
        </Box>
      </Container>
    </Box>
  </>
)
};

CampaignCreate.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default CampaignCreate;
