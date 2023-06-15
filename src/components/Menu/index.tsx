import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useIntl } from 'react-intl'
import { Icon } from '../Icon';
import { MdOutlineManageAccounts } from 'react-icons/md'
import { Link } from 'react-router-dom';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const intl = useIntl()
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
		<Tooltip title={intl.formatMessage({id: 'popup_menu.profile'})}>
		 	<Button
        		id="basic-button"
        		aria-controls={open ? 'basic-menu' : undefined}
        		aria-haspopup="true"
        		aria-expanded={open ? 'true' : undefined}
        		onClick={handleClick}
      		>
        		<a href='#'><Icon icon = {<MdOutlineManageAccounts size={24}/>} /></a>
      		</Button>
	  	</Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
		<Link to = '/profile'>
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<Avatar sx={{ width: '20px', height: '20px' }}/>
				</ListItemIcon>
				{intl.formatMessage({id: 'popup_menu.profile'})}
			</MenuItem>
		</Link>


        <MenuItem onClick={handleClose}>
			<ListItemIcon>
            	<MailIcon fontSize="small" />
          	</ListItemIcon>
			{intl.formatMessage({id: 'popup_menu.messages'})}
		</MenuItem>

		<Divider />

		<Link to = '/favorites'>
        	<MenuItem onClick={handleClose}>
				<ListItemIcon>
            		<FavoriteIcon fontSize="small" />
          		</ListItemIcon>
				{intl.formatMessage({id: 'popup_menu.favorites'})}
			</MenuItem>
		</Link>

		<Link to = '/'>
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<Logout fontSize="small" />
				</ListItemIcon>
				{intl.formatMessage({id: 'popup_menu.logout'})}
			</MenuItem>
		</Link>

      </Menu>
	</div>
  );
}