import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PurchaseOrderToolBar from "../components/PurchaseOrder/PurchaseOrderToolBar";
import { useSelector } from "react-redux";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
    margin: "1em",
    "& > *": {
      margin: theme.spacing(1),
      width: "95%",
      height: theme.spacing(16),
    },
  },
  poContainer: {
    display: "flex",
    height: "100%",
  },
  poCreationDate: {
    height: "100%",
    backgroundColor: "#e24443",
    flexGrow: 1,
    fontSize: "50px",
    textAlign: "center",
    color: "white",
    lineHeight: "50px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    fontFamily: "'Spartan', sans-serif",
    width: "90px",
    marginRight: ".5em",
  },
  poId: {
    fontSize: "13px",
  },
}));
export default function PurchaseOrder(props) {
  const classes = useStyles();
  const state = useSelector((state) => state);

  return (
    <div className={classes.root}>
      {state.PurchaseOrders.completingPurchaseOrder ? (
        props.history.push(
          `/purchase-order/${state.PurchaseOrders.lastInsertedOrderId}`
        )
      ) : (
        <PurchaseOrderToolBar />
      )}
    </div>
  );
}
