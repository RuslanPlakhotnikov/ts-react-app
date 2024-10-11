import React, { useState } from "react";
import { Button } from "@mui/material";
import { useAppSelector } from "hooks/storeUsage";

import BurgerIcon from "assets/iconComponents/BurgerIcon";
import Logo from "assets/iconComponents/Logo";
import SearchIcon from "assets/iconComponents/SearchIcon";
import GiftIcon from "assets/iconComponents/GiftIcon";
import NotificationIcon from "assets/iconComponents/NotificationIcon";

import NavigationMenu from "./components/NavigationMenu";
import BalanceDetails from "./components/BalanceDetails";
import "./styles.scss";

const Header = () => {
  const user = useAppSelector(state => state.user);
  const [openMenu, setOpenMenu] = useState<HTMLButtonElement | null>(null);

  return (
    <div className="header-wrapper">
      <div className="header-content">
        <div className="content-part">
          <Button className="menu-btn" onClick={e => setOpenMenu(e.currentTarget)}>
            <BurgerIcon />
          </Button>
          <NavigationMenu open={openMenu} setOpen={setOpenMenu} />
          <Logo className="logo" />
        </div>
        <div className="content-part">
          <Button className="icon-btn">
            <SearchIcon />
          </Button>
          <Button className="icon-btn">
            <GiftIcon />
          </Button>
          <Button className="icon-btn">
            <NotificationIcon hasNotification />
          </Button>
          <BalanceDetails />
          {user.info?.logoLink && (
            <div className="avatar">
              <img src={user.info.logoLink} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Header;
