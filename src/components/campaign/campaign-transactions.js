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
  
  
  export const CampaignTransactions = (props) => (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={false}
                    color="primary"
                  />
                </TableCell>
                <TableCell>
                  Transaction ID
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
                <TableCell>
                  User
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                  <TableCell>

                  </TableCell>
                  <TableCell>
                      Transactional Data Coming Soon
                  </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );