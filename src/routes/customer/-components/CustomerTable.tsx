import { Link } from '@tanstack/react-router';
import { useState } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useCustomerDelete } from '@/hooks/useCustomer';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SuccessAlert } from '@/components/atoms/SuccessAlert';
import { DeleteDialog } from '@/components/molecules/DeleteDialog';
import { PATH } from '@/constant/routes';

import type { CustomerListSchema } from '../-types/schema';

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
      } catch (_e) {
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
        <Table sx={{ minWidth: 650 }} aria-label='sticky table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>ID</TableCell>
              <TableCell align='right'>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row: { name: string; id: string }) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>
                  <Link to={PATH.CUSTOMER_DETAIL} params={{ id: row.id }}>
                    {row.id}
                  </Link>
                </TableCell>
                <TableCell align='right'>
                  <SimpleButton
                    buttonName={'Delete'}
                    buttonType='submit'
                    color='error'
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
        dialogMessage={`Can I really delete ID: ${deleteId} ?`}
      />
    </>
  );
};
