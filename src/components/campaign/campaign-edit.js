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


export const CampaignEditForm = (props) => {

  const originalTotalBudget = props.campaign.TotalBudget;

  const [values, setValues] = useState({});

  useEffect(() => {
    setValues(props.campaign);
    }, [props.campaign]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = (event) => {
    const url = 'http://147.182.129.43:8080/api/updateCampaign';
    const additionalBudget = parseInt(values.TotalBudget) - parseInt(originalTotalBudget);

    const data = {
        "id": values.ID,
        "name": values.Name,
        "buyer": values.Buyer,
        "seller": values.Seller,
        "budget": additionalBudget,
        "clickPrice": values.ClickPrice,
        "impressionPrice": values.ImpressionPrice,
        "status": "ACTIVE"
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
  }

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
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
                label="Change Budget"
                name="TotalBudget"
                onChange={handleChange}
                type="number"
                value={values.TotalBudget || ''}
                error ={values.TotalBudget < originalTotalBudget ? true : false }
                helperText="the budget must exceed that of the original budget"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
                <Typography>
                    Current Budget for this Campaign is ${props.campaign.TotalBudget}
                </Typography>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
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
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
