import { useState } from 'react';
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useCustomerDelete } from '@/hooks/useCustomer';

import { PATH } from '@/pages/router/const';
import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SuccessAlert } from '@/components/atoms/SuccessAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { DeleteDialog } from '@/components/molecules/DeleteDialog';

import type { CustomerListSchema } from '@/features/customer/schema';

type CustomerTableProps = {
  data: CustomerListSchema;
};

export const CustomerTable: React.FC<CustomerTableProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleError = (message: string) => {
    setErrorMessage(message);
    setShowAlert(true);
  };

  const handleOpen = (id: string) => {
    setDeleteId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    setShowSuccess(false);
    setOpen(false);

    if (deleteId !== '') {
      try {
        await mutateAsync(deleteId);
      } catch (e) {
        return;
      }
    }

    setShowSuccess(true);
  };

  const { mutateAsync } = useCustomerDelete(handleError);

  return (
    <>
      <ErrorAlert errorMessage={errorMessage} isShow={showAlert} />

      <SuccessAlert
        successMessage={'Success to Delete!!'}
        isShow={showSuccess}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="sticky table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Delete</TableCell>
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
                  <TableCell align="right">
                    <SimpleButton
                      buttonName={'Delete'}
                      buttonType="submit"
                      color="error"
                      onClick={() => handleOpen(row.id)}
                    >
                      {row.id}
                    </SimpleButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DeleteDialog
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
        dialogTitle={'Delete customer detail'}
        dialogMessage={`Can I really delete ID: ${deleteId}`}
      />
    </>
  );
};
