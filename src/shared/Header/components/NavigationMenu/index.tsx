import React from "react";
import { Drawer, Button, Popover } from "@mui/material";
import { Link } from "react-router-dom";

import { useAppSelector } from "hooks/storeUsage";

import Logo from "assets/iconComponents/Logo";
import CloseCircleIcon from "assets/iconComponents/CloseCircleIcon";

import "./styles.scss";

interface IPage {
  label: string,
  href: string
}

const pages: IPage[] = [
  { label: "Casino Games", href: "/" },
  { label: "Live Games", href: "/" },
  { label: "TV-Bet", href: "/" },
  { label: "Sport Games", href: "/" },
  { label: "Virtual", href: "/" },
  { label: "Tournaments", href: "/" },
  { label: "Spin Shop", href: "/" },
  { label: "FAQ", href: "/" },
  { label: "Support Chat", href: "/" }
];

interface IProps {
  open: HTMLButtonElement | null,
  setOpen: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>
}

const NavigationMenu: React.FC<IProps> = ({ open, setOpen }) => {
  const clientWidth = useAppSelector(state => state.ui.clientWidth);

  const onLinkClick = () => setOpen(null);

  if (clientWidth >= 1060) { // show popover menu instead of drawer on desktop view
    return (
      <Popover
        className="navigation-menu-popover"
        open={!!open}
        anchorEl={open}
        onClose={() => setOpen(null)}
        anchorOrigin={{
          vertical: 40,
          horizontal: 150
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        {pages.map((page, i) => (
          <Link key={i} to={page.href} onClick={onLinkClick}>
            {page.label}
          </Link>
        ))}
      </Popover>
    )
  }

  return (
    <Drawer
      className="navigation-menu-drawer"
      anchor="left"
      onClose={() => setOpen(null)}
      open={!!open}
    >
      <div className="menu-head">
        <Logo className="logo" />
        <Button className="close-btn" onClick={() => setOpen(null)}>
          <CloseCircleIcon />
        </Button>
      </div>
      <div className="menu-content">
        {pages.map((page, i) => (
          <Link key={i} to={page.href} onClick={onLinkClick}>
            {page.label}
          </Link>
        ))}
      </div>
    </Drawer>
  )
};

export default NavigationMenu;
