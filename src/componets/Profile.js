import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  cardsize: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",

    alignItems: "center",
    margin: "12px",

    height: 500,
    width: 400,
    marginTop: 30,

    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(4),
  },
  name: {
    textAlign: "center",
  },
  button: {
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  more: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(0.5),
  },
}));

const Profile = ({ picture, name, location, email, phone }) => {
  const [showMore, setshowMore] = useState(true);
  const handelButton = () => {
    setshowMore(!showMore);
  };
  const classes = useStyles();

  return (
    <Card className={classes.cardsize}>
      <Avatar alt={name.first} src={picture} className={classes.large} />
      <Typography variant="h4" className={classes.name}>
        {name.first} {name.last}
      </Typography>

      <Button
        onClick={handelButton}
        variant="contained"
        color="primary"
        disableElevation
        className={classes.button}
      >
        more info
      </Button>
      {showMore ? (
        <>
          <Typography variant="h6" className={classes.more}>
            Address: {location.street.number} {location.street.name}
          </Typography>
          <Typography variant="h6" className={classes.more}>
            City: {location.city}
          </Typography>

          <Typography variant="h6" className={classes.more}>
            Country: {location.country}
          </Typography>
          <Typography variant="h6" className={classes.more}>
            Phone: {phone}
          </Typography>
          <Typography variant="h6" className={classes.more}>
            Email: {email}
          </Typography>
        </>
      ) : (
        ""
      )}
    </Card>
  );
};

export default Profile;
