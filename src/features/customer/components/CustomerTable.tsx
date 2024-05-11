import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { PATH } from '@/pages/router/const';

import type { CustomerListSchema } from '@/features/customer/schema';

type CustomerTableProps = {
  data: CustomerListSchema;
};

export const CustomerTable: React.FC<CustomerTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="sticky table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data !== undefined &&
            data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <Link to={PATH.CUSTOMER + `/${row.id}`}>{row.id}</Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
