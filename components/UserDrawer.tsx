import React, { useState } from "react";
import { Avatar, Box, Drawer, makeStyles, Typography } from "@material-ui/core";
import { User } from "../models/User";

interface UserDrawerProp {
  user: User | null;
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

export const UserDrawer = ({ user, open, onClose }: UserDrawerProp) => {
  const classes = useStyles();

  return user != null ? (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      classes={{ paper: classes.desktopDrawer }}
    >
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} src={user.avatarUrl} />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
    </Drawer>
  ) : null;
};
