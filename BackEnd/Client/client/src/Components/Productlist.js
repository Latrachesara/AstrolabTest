import "./../Style/Productlist.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProdcutByWishList } from "./../Redux/Actions/ProductActions";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ChangeCost } from "./../Tools/CurrencyAPI";
import Alert from "@material-ui/lab/Alert";
const useStyles = makeStyles({
  table: {
    width: 800,
    marginLeft: "5%",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function Productlist({ filterStatus }) {
  const classes = useStyles();
  const PATH = process.env.REACT_APP_IMAGES_PATH;
  const dispatch = useDispatch();
  const { Wishlist, Product, Currency } = useSelector((state) => state);
  useEffect(() => {
    dispatch(GetProdcutByWishList(Wishlist.SelectedWishList));
  }, [dispatch, Wishlist.SelectedWishList]);
  const FilerCurrency = (data) => {
    let Curr = "";
    if (Currency.currency === null) {
      return (Curr = data);
    } else {
      return (Curr = Currency.currency);
    }
    return Curr;
  };
  const NewCost = () => {};
  useEffect(() => {
    ChangeCost("TND", Currency.currency, 100);
  }, [Currency.Currency]);
  return (
    <div>
      <TableContainer style={{width:"80%", marginLeft:"5%"}}component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Product.Selected.filter((product) => {
              if (filterStatus === "") {
                return product;
              } else {
                if (filterStatus === product.status) {
                  return product;
                }
              }
            }).map((Product) => (
              <TableRow key={Product.name}>
                <TableCell align="left" style={{ width: "15%" }}>
                  <img
                    src={
                      Product.image ? `${PATH}${Product.image}` : "/product.png"
                    }
                  />
                </TableCell>
                <TableCell align="left">{Product.name}</TableCell>
                <TableCell align="left">{Product.description}</TableCell>
                <TableCell align="left">
                  {ChangeCost(
                    Product.Price,
                    Product.currency,
                    Currency.currency
                  )}
                </TableCell>
                <TableCell align="left">{Product.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {Product.Selected.length === 0 && (
        <div style={{ marginLeft: "5%", width: "80%" }}>
          <Alert severity="warning">Your wishlist is empty</Alert>
        </div>
      )}
    </div>
  );
}

export default Productlist;
