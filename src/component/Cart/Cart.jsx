import {
  Box,
  Button,
  Card,
  Divider,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import { AddressCard } from "./AddressCard";
// import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { AddLocation } from "@mui/icons-material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Grid from "@mui/material/Grid2";
import * as Yup from "yup";

 export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};
const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street Address is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string().required("Pincode is required"),
  city: Yup.string().required("City is required"),
});

const items = [1, 1];
const Cart = () => {
  const createOrderUsingSelectedAddress = () => {};
  const handleOpenAddressModal = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleSubmit = (values) => {};
    // console.log("form values", value);
  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {items.map((item, index) => (
            <CartItem key={index} />
          ))}
          <div className="billDetails px-5 text-sm">
            <p className=" font-extralight py-5"> Bill Details</p>
            <div className=" space-y-3">
              <div className=" flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹599</p>
              </div>
              <div className=" flex justify-between text-gray-400">
                <p>Deliver Fee</p>
                <p>₹250</p>
              </div>
              <div className=" flex justify-between text-gray-400">
                <p>GST and Restaurant charges</p>
                <p>₹50</p>
              </div>
              <Divider />
            </div>
            <div className=" flex justify-between text-gray-400">
              <p>Total Pay</p>
              <p>₹3500</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className=" text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className=" flex gap-5 flex-wrap justify-center ">
              {[1, 1, 1, 1, 1].map((item, index) => (
                <AddressCard
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  item={item}
                  key={index}
                  showButton={true}
                />
              ))}

              <Card className="flex gap-5 w-64 p-5">
                <AddLocation />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Add New Addres
                  </h1>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModal}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                {/* <Grid size={12}>
                  <Field
                    as={TextField}
                    name="streeAddress"
                    label="Street Address"
                    fulWidth
                    variant="outlined"
                    //   error={!ErrorMessage("streetAddress")}
                    //   helperText={
                    //     <ErrorMessage>
                    //       {(msg) => <span classname="text-red-700">{msg}</span>}
                    //     </ErrorMessage>
                    //   }
                  />
                </Grid> */}
                <Grid size={12}>
                  <Field
                    as={TextField}
                    name="street Address"
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                    //   error={!ErrorMessage("streetAddress")}
                    //   helperText={
                    //     <ErrorMessage>
                    //       {(msg) => <span classname="text-red-700">{msg}</span>}
                    //     </ErrorMessage>
                    //   }
                  />
                </Grid>
                <Grid size={12}>
                  <Field
                    as={TextField}
                    name="state"
                    label="state"
                    fullWidth
                    variant="outlined"
                    //   error={!ErrorMessage("streetAddress")}
                    //   helperText={
                    //     <ErrorMessage>
                    //       {(msg) => <span classname="text-red-700">{msg}</span>}
                    //     </ErrorMessage>
                    //   }
                  />
                </Grid>
                <Grid size={12}>
                  <Field
                    as={TextField}
                    name="city"
                    label="city"
                    fullWidth
                    variant="outlined"
                    //   error={!ErrorMessage("streetAddress")}
                    //   helperText={
                    //     <ErrorMessage>
                    //       {(msg) => <span classname="text-red-700">{msg}</span>}
                    //     </ErrorMessage>
                    //   }
                  />
                </Grid>
                <Grid size={12}>
                  <Field
                    as={TextField}
                    name="pincode"
                    label="pincode"
                    fullWidth
                    variant="outlined"
                    //   error={!ErrorMessage("streetAddress")}
                    //   helperText={
                    //     <ErrorMessage>
                    //       {(msg) => <span classname="text-red-700">{msg}</span>}
                    //     </ErrorMessage>
                    //   }
                  />
                </Grid>
                <Grid size={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    color="primary"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
