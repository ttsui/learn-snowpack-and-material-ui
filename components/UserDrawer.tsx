import React, { useState } from "react";
import { Avatar, Box, Drawer, makeStyles, Typography } from "@material-ui/core";
import { User } from "../models/User";

interface UserDrawerProp {
  user: User | null;
  isDrawerOpen: boolean;
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

export const UserDrawer = ({ user }: UserDrawerProp) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [prevUser, setPrevUser] = useState(null);

  if (user?.id !== prevUser?.id) {
    setOpen(true);
    setPrevUser(user);
  }

  return user != null ? (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      classes={{ paper: classes.desktopDrawer }}
    >
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} src={user.avatarUrl} />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
    </Drawer>
  ) : null;
};
