import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import Router, {useRouter} from 'next/router'
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  CircularProgress,
  Grid
} from '@mui/material';
import { CampaignTimeSeries } from './campaign-time-series';
import { CampaignBarChart } from './campaign-bar-chart';
  
  
  export const CampaignTransactions = (props) => {

    const [isLoadingHistory, setIsLoadingHistory] = useState(false);
    const [txns, setTxns] = useState([])
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    useEffect(() => {
      const url = `http://147.182.129.43:8080/api/retrieveHistory/${props.campaign}`;
  
      const fetchData = async () => {
          try {
              //get one campaign
              setIsLoadingHistory(true);
              const response = await fetch(url);
              const json = await response.json();
              json = json.response;
              setTxns(JSON.parse(json));
              setIsLoadingHistory(false);
          } catch (error) {
              console.log("error", error);
          }
      };
  
      fetchData();
    }, []);
  
    const handleLimitChange = (event) => {
      setLimit(event.target.value);
    };
  
    const handlePageChange = (event, newPage) => {
      setPage(newPage);
    };

    return(
      <>
      <Grid
            container
            spacing={3}
      >
        <Grid 
          item
          lg={4}
          md={12}
          xl={3}
          xs={12}>
            <CampaignBarChart campaign={props.campaign} txns={txns}/>
        </Grid>
        <Grid 
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}>
            <CampaignTimeSeries campaign={props.campaign} txns={txns}/>
        </Grid>
        </Grid>
        <Card style={{margin: 25}}>
          <PerfectScrollbar>
            <Box sx={{ minWidth: 1050 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Transaction ID
                    </TableCell>
                    <TableCell>
                      Timestamp
                    </TableCell>
                    <TableCell>
                      IP Address
                    </TableCell>
                    <TableCell>
                      Browser
                    </TableCell>
                    <TableCell>
                      Device
                    </TableCell>
                    <TableCell>
                      Page Time
                    </TableCell>
                    <TableCell>
                      Type
                    </TableCell>
                  </TableRow>
                </TableHead>
                { isLoadingHistory ?
                <CircularProgress></CircularProgress>
                :
                <TableBody>
                  {txns.slice(0, limit).map((txn) => {
                    var date = new Date(txn.LastUpdated).toLocaleString();
                    return txn.LastUpdated === txn.CreatedOnDate 
                    ?
                    <TableRow
                      hover
                      key={txn.Id}
                    >
                      <TableCell
                        style={{width: '20%'}}
                      >
                        Campaign Created
                      </TableCell>
                      <TableCell>
                        {date}
                      </TableCell>
                      <TableCell>
                        
                      </TableCell>
                      <TableCell>
                        
                      </TableCell>
                      <TableCell>
                        
                      </TableCell>
                      <TableCell>
                        
                      </TableCell>
                    </TableRow>
                    :
                    (
                    <TableRow
                      hover
                      key={txn.Id}
                    >
                      <TableCell
                        style={{
                          maxWidth: 350,
                          overflow: 'hidden',
                          }}
                      >
                        {txn.LastTxn.Id}
                      </TableCell>
                      <TableCell>
                        {date}
                      </TableCell>
                      <TableCell>
                        {txn.LastTxn.Ip}
                      </TableCell>
                      <TableCell>
                        {txn.LastTxn.Browser}
                      </TableCell>
                      <TableCell>
                        {txn.LastTxn.Device}
                      </TableCell>
                      <TableCell>
                        {txn.LastTxn.PageTime}
                      </TableCell>
                      <TableCell>
                        Txn Type
                      </TableCell>
                    </TableRow>
                  )})}
                </TableBody>
                }
              </Table>
            </Box>
          </PerfectScrollbar>
          <TablePagination
            component="div"
            count={txns.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Card>
      </>
    )
  };