import { useState } from 'react';
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
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const CampaignListResults = ({ campaigns, ...rest }) => {
  const router = useRouter();
  const [selectedCampaignIds, setSelectedCampaignIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCampaignIds;

    if (event.target.checked) {
      newSelectedCampaignIds = campaigns.map((campaign) => campaign.ID);
    } else {
      newSelectedCampaignIds = [];
    }

    setSelectedCampaignIds(newSelectedCampaignIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCampaignIds.indexOf(id);
    let newSelectedCampaignIds = [];

    if (selectedIndex === -1) {
      newSelectedCampaignIds = newSelectedCampaignIds.concat(selectedCampaignIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCampaignIds = newSelectedCampaignIds.concat(selectedCampaignIds.slice(1));
    } else if (selectedIndex === selectedCampaignIds.length - 1) {
      newSelectedCampaignIds = newSelectedCampaignIds.concat(selectedCampaignIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCampaignIds = newSelectedCampaignIds.concat(
        selectedCampaignIds.slice(0, selectedIndex),
        selectedCampaignIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCampaignIds(newSelectedCampaignIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCampaignIds.length === campaigns.length}
                    color="primary"
                    indeterminate={
                      selectedCampaignIds.length > 0
                      && selectedCampaignIds.length < campaigns.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Campaign ID
                </TableCell>
                <TableCell>
                  Campaign Name
                </TableCell>
                <TableCell>
                  Buyer
                </TableCell>
                <TableCell>
                  Seller
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campaigns.slice(0, limit).map((campaign) => (
                <TableRow
                  hover
                  key={campaign.ID}
                  selected={selectedCampaignIds.indexOf(campaign.ID) !== -1}
                  onClick={() => router.push({
                    pathname: '/campaigndetail', 
                    query: {campaignid: campaign.ID}})}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCampaignIds.indexOf(campaign.ID) !== -1}
                      onChange={(event) => handleSelectOne(event, campaign.ID)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    
                    <Typography
                      color="textPrimary"
                      variant="body1"
                    >
                      {campaign.ID}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {campaign.Name}
                  </TableCell>
                  <TableCell>
                    {campaign.Buyer}
                  </TableCell>
                  <TableCell>
                    {campaign.Seller}
                  </TableCell>
                  <TableCell>
                    {campaign.Status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={campaigns.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CampaignListResults.propTypes = {
  campaigns: PropTypes.array.isRequired
};
