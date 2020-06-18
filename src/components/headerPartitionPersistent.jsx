import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";
import bxBell from "@iconify/icons-bx/bx-bell";
import magnifyingGlass from "@iconify/icons-entypo/magnifying-glass";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { makeInitials } from "../utilities/functions";
import { cardStyles } from "../styles";

const styles = makeStyles((theme) => ({
  container: {
    width: "20vw",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& *": {
      margin: "0 4%",
    },

    "& svg": {
      fontSize: "180%",
      color: "gray",
    },
  },
  // avatar: {
  //   width: theme.spacing(3),
  //   height: theme.spacing(3),
  //   border: "1px solid green",
  // },
}));

function PersistentHeader(props) {
  const me = JSON.parse(sessionStorage.getItem("user"));
  const classes = styles();
  const cardClasses = cardStyles();

  return (
    <section className={classes["container"]}>
      <Icon icon={bxBell} />
      <Icon icon={magnifyingGlass} />
      <Avatar
        onClick={props.openDrawer}
        style={props.open ? { display: "none" } : { display: "flex", border: "2px solid rgba(88, 212, 115, 0.3)" }}
        className={cardClasses.avatar}
        alt="Picture User Avatar"
        src={me.photo !== "null" ? me.photo : null}
      >
        {me.photo === "null" && <Typography>{makeInitials(me)}</Typography>}
      </Avatar>
    </section>
  );
}

export default PersistentHeader;
