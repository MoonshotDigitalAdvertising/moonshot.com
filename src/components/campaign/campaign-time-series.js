import { Bar, Line } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme, CircularProgress } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const CampaignTimeSeries = (props) => {
  const theme = useTheme();

  let clickData = [];
  let impressionData = [];
  let label = [];

  for( let i in props.txns){
      var date = new Date(props.txns[i].LastUpdated);
      if(!label.includes(date.toDateString())){
        label.push(date.toDateString());

        clickData[label.indexOf(date.toDateString())] = 0 
        impressionData[label.indexOf(date.toDateString())] = 0
      }
      console.log(clickData)
      console.log(impressionData)
      switch(props.txns[i].LastTxn.TxnType){
          case "CLICK":
            clickData[label.indexOf(date.toDateString())] += 1
            break;
          case "IMPRESSION" || "IMPRESION":
            impressionData[label.indexOf(date.toDateString())] += 1
            break;
          default:
            impressionData[label.indexOf(date.toDateString())] += 1
            break;
      }
  }
  //console.log(clickData);
  //console.log(impressionData);

  const data = {
    datasets: [
      {
        backgroundColor: '#3F51B5',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: clickData.reverse(),
        label: 'Clicks',
        maxBarThickness: 10
      },
      {
        backgroundColor: '#e53935',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: impressionData.reverse(),
        label: 'Impressions',
        maxBarThickness: 10
      }
    ],
    labels: label.reverse()
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {yAxes: {beginAtZero: true}},
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <div>
      { props.loading ?
      <CircularProgress></CircularProgress>
      :
    <Card {...props}>
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            size="small"
          >
            Last 7 days
          </Button>
        )}
        title="Click and Impression data by campaign"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Line
            data={data}
            options={options}
          />
        </Box>
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
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
        >
          Overview
        </Button>
      </Box>
    </Card>
}
    </div>
  );
};
