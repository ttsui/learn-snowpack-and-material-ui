import React from "react";
import { useState } from "react";
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
  Typography,
} from "@material-ui/core";

const UsersTable = ({ users, ...rest }) => {
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedUserIds;

    if (event.target.checked) {
      newSelectedUserIds = users.map((user) => user.id);
    } else {
      newSelectedUserIds = [];
    }

    setSelectedUserIds(newSelectedUserIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUserIds.indexOf(id);
    let newSelectedUserIds = [];

    if (selectedIndex === -1) {
      newSelectedUserIds = newSelectedUserIds.concat(selectedUserIds, id);
    } else if (selectedIndex === 0) {
      newSelectedUserIds = newSelectedUserIds.concat(selectedUserIds.slice(1));
    } else if (selectedIndex === selectedUserIds.length - 1) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedUserIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedUserIds.slice(0, selectedIndex),
        selectedUserIds.slice(selectedIndex + 1)
      );
    }

    setSelectedUserIds(newSelectedUserIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedUserIds.length === users.length}
                  color="primary"
                  indeterminate={
                    selectedUserIds.length > 0 &&
                    selectedUserIds.length < users.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(0, limit).map((user) => (
              <TableRow
                hover
                key={user.id}
                selected={selectedUserIds.indexOf(user.id) !== -1}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedUserIds.indexOf(user.id) !== -1}
                    onChange={(event) => handleSelectOne(event, user.id)}
                    value="true"
                  />
                </TableCell>
                <TableCell>
                  <Box>
                    <Avatar src={user.avatarUrl}>
                      {/* {getInitials(user.name)} */}
                    </Avatar>
                    <Typography color="textPrimary" variant="body1">
                      {user.name}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      {/* <TablePagination
        component="div"
        count={users.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
};

export default UsersTable;
