import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { getCartProducts, getTotalPrice } from "../lib/selectors/selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    padding: "16px"
  },
  textarea: {
    marginTop: "16px"
  }
}));

const validationSchema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  city: yup.string().required("City is required"),
  street: yup.string().required("Street is required"),
  postCode: yup
    .string()
    .min(5, "Post Code should be of minimum 5 numbers length")
    .required("Post Code is required"),
  phone: yup
    .string()
    .min(8, "Phone should be of minimum 9 numbers length")
    .required("Phone is required")
});

export const OrderForm: React.FC = () => {
  const classes = useStyles();
  const cartProducts = useSelector(getCartProducts);
  const totalPrice = useSelector(getTotalPrice);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      city: "",
      street: "",
      postCode: "",
      phone: ""
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify({ ...values, cartProducts, totalPrice }, null, 2));
    }
  });

  return (
    <Paper variant="outlined">
      <form onSubmit={formik.handleSubmit} className={classes.root}>
        <Typography variant="h6" align="center">
          Order Form
        </Typography>
        <TextField
          className={classes.textarea}
          id="fullName"
          name="fullName"
          label="Full Name"
          variant="outlined"
          size="small"
          value={formik.values.fullName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          className={classes.textarea}
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          size="small"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className={classes.textarea}
          id="city"
          name="city"
          label="City"
          variant="outlined"
          size="small"
          value={formik.values.city}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <TextField
          className={classes.textarea}
          id="street"
          name="street"
          label="Street"
          variant="outlined"
          size="small"
          value={formik.values.street}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.street && Boolean(formik.errors.street)}
          helperText={formik.touched.street && formik.errors.street}
        />
        <TextField
          className={classes.textarea}
          id="postCode"
          name="postCode"
          label="Post Code"
          variant="outlined"
          size="small"
          value={formik.values.postCode}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.postCode && Boolean(formik.errors.postCode)}
          helperText={formik.touched.postCode && formik.errors.postCode}
        />
        <TextField
          className={classes.textarea}
          id="phone"
          name="phone"
          label="Phone"
          variant="outlined"
          size="small"
          value={formik.values.phone}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Typography variant="overline" className={classes.textarea}>
          total price: {totalPrice}{" "}
        </Typography>
        <Button
          className={classes.textarea}
          variant="outlined"
          disabled={!formik.isValid && !formik.dirty}
          fullWidth
          type="submit"
        >
          Order
        </Button>
      </form>
    </Paper>
  );
};
