// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Select,
  DatePickerField,
} from "../../../../../../_metronic/_partials/controls";


// Validation schema
const CustomerEditSchema = Yup.object().shape({
  name: Yup.string(),
    // .required("Display Name is required"),
  customUrl: Yup.string(),
    // .min(3, "Minimum 3 symbols")
    // .max(50, "Maximum 50 symbols")
    // .required("Custom URL is required"),
  email: Yup.string()
    .email("Invalid email"),
    // .required("Email is required"),
  bio: Yup.string(),
    // .required("Bio is required"),
  facebookUname: Yup.string(), 
    // .required("Facebook Name is required"),
  twitterUname: Yup.string(),
    // .required("Twitter Name is required"),
  discordUname: Yup.string(),
    // .required("Discord Name is required"), 
  // waddress: Yup.string(),
});

export function CustomerEditForm({
  saveCustomer,
  customer,
  actionsLoading,
  onHide,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={customer}
        validationSchema={CustomerEditSchema}
        onSubmit={(values) => {
          saveCustomer(values);
        }}
      >
        {({ handleSubmit }) => (          
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
              <Form className="form form-label-right">
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Field
                      name="name"
                      component={Input}
                      placeholder="Trista Francis"
                      label="Display Name"
                    />

                    <Field
                      name="customUrl"
                      component={Input}
                      placeholder="Axies Trista Francis.com/"
                      label="Custom URL"
                    />

                    <Field
                      name="email"
                      component={Input}
                      placeholder="Enter your email."
                      label="Email"
                    />
                    
                    <label>Enter Bio</label>
                    <Field
                      name="bio"
                      component="textarea"
                      className="form-control"
                      placeholder="Enter your Bio."
                    />
                    <div className="feedback">Please enter <b>Bio</b></div>
                
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="facebookUname"
                      component={Input}
                      placeholder="Facebook Username"
                      label="Facebook"
                    />

                    <Field
                      name="twitterUname"
                      component={Input}
                      placeholder="Twitter Username"
                      label="Twitter username"
                    />

                    <Field
                      name="discordUname"
                      component={Input}
                      placeholder="Discord username"
                      label="Discord"
                    />
                    <Field
                      name="waddress"
                      component={Input}
                      placeholder="Wallet address"
                      label="Wallet address"
                    />
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                onClick={onHide}
                className="btn btn-light btn-elevate"
              >
                Cancel
              </button>
              <> </>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="btn btn-primary btn-elevate"
              >
                Save
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
}
