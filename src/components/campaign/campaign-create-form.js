import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { useRouter } from 'next/router';


export const CampaignCreateForm = (props) => {

  const router = useRouter();

  const [values, setValues] = useState({});


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = (event) => {
    const url = 'http://147.182.129.43:8080/api/createCampaign';

    const data = {
        "id": values.ID,
        "name": values.Name,
        "buyer": values.Buyer,
        "seller": values.Seller,
        "budget": values.Budget,
        "clickPrice": values.ClickPrice,
        "impressionPrice": values.ImpressionPrice,
        //"status": "ACTIVE"
    }

    const fetchData = async () => {
        try {
            const response = await fetch(url,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            const json = await response.json();
            json = json.response;
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
    router.push('/campaigns');
  }

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          //subheader=""
          title={`Campaign Information`}
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
              <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                required
                label="Capmaign ID"
                name="ID"
                onChange={handleChange}
                value={values.ID || ''}
                error={props.ids.includes(values.ID) ? true : false }
                helperText="ID must be unique"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                required
                label="Capmaign Name"
                name="Name"
                onChange={handleChange}
                value={values.Name || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                required
                helperText="Name of Purchaser of Ad Space"
                label="Buyer Name"
                name="Buyer"
                onChange={handleChange}
                value={values.Buyer || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                required
                helperText="Name of Seller of Ad Space"
                label="Seller Name"
                name="Seller"
                onChange={handleChange}
                value={values.Seller || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                required
                label="Budget"
                name="Budget"
                onChange={handleChange}
                type="number"
                value={values.Budget || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                required
                label="Click Price"
                name="ClickPrice"
                onChange={handleChange}
                value={values.ClickPrice || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                required
                label="Impression Price"
                name="ImpressionPrice"
                onChange={handleChange}
                value={values.ImpressionPrice || ''}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => onSubmit()}
          >
            Create Campaign
          </Button>
        </Box>
      </Card>
    </form>
  );
};
