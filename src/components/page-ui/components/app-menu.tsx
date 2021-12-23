import { FC } from 'react';
import * as React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import { ListItemButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export const AppMenu: FC = () => {
  return (
    <div>
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
        <ListItemButton component={Link} to="/hash">
          <ListItemIcon>
            <TagIcon />
          </ListItemIcon>
          <ListItemText primary="Hashes" />
        </ListItemButton>
      </List>
      <Divider />
    </div>
  );
};
