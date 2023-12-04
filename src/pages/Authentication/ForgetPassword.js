
import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Alert, Card, CardBody, Container, FormFeedback, Input, Label, Form } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";


// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { userForgetPassword } from "../../store/actions";

// import images
import logo from "../../assets/images/f-logo-light.png";
import CarouselPage from "./CarouselPage";

const ForgetPasswordPage = () => {


  //meta title
  document.title = "Forget Password | FW-Game";

  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      dispatch(userForgetPassword(values, props.history));
    }
  });


  const selectForgotPasswordState = (state) => state.ForgetPassword;
  const ForgotPasswordProperties = createSelector(
    selectForgotPasswordState,
    (forgetPassword) => ({
      forgetError: forgetPassword.forgetError,
      forgetSuccessMsg: forgetPassword.forgetSuccessMsg,
    })
  );
  const {
    forgetError,
    forgetSuccessMsg
  } = useSelector(ForgotPasswordProperties);
  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0">
          <Row className="g-0">
            <CarouselPage />

            <Col xl={4}>
              <div className="auth-full-page-content p-md-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5">
                      <Link to="/dashboard" className="d-block auth-logo">
                        <img
                          src={logo}
                          alt=""
                          width="100"
                          height="30"
                          className="auth-logo-dark"
                        />
                        <img
                          src={logo}
                          alt=""
                          width="100"
                          height="30"
                          className="auth-logo-light"
                        />
                      </Link>
                    </div>
                    <div className="my-auto">
                      <div>
                        <h5 className="text-primary">Reset Password</h5>
                        <p className="text-muted">Re-Password with FW-Game.
                        </p>
                      </div>

                      <div className="mt-4">
                        {forgetError && forgetError ? (
                          <Alert color="danger" style={{ marginTop: "13px" }}>
                            {forgetError}
                          </Alert>
                        ) : null}
                        {forgetSuccessMsg ? (
                          <Alert color="success" style={{ marginTop: "13px" }}>
                            {forgetSuccessMsg}
                          </Alert>
                        ) : null}

                        <Form
                          className="form-horizontal"
                          onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                          }}
                        >
                          <div className="mb-3">
                            <Label className="form-label">Email</Label>
                            <Input
                              name="email"
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.email || ""}
                              invalid={
                                validation.touched.email && validation.errors.email ? true : false
                              }
                            />
                            {validation.touched.email && validation.errors.email ? (
                              <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                            ) : null}
                          </div>
                          <Row className="mb-3">
                            <Col className="text-end">
                              <button
                                className="btn btn-primary w-md "
                                type="submit"
                              >
                                Reset
                              </button>
                            </Col>
                          </Row>
                        </Form>
                        <div className="mt-5 text-center">
                          <p>
                            Remember It ?{" "}
                            <Link
                              to="/register"
                              className="fw-medium text-primary"
                            >
                              {" "}
                              Sign In here{" "}
                            </Link>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <p>
                        Go back to{" "}
                        <Link to="/login" className="font-weight-medium text-primary">
                          Login
                        </Link>{" "}
                      </p>
                      <p>
                        © {new Date().getFullYear()} FW-Game. Crafted with{" "}
                        <i className="mdi mdi-heart text-danger" /> by Our Teams
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};


ForgetPasswordPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ForgetPasswordPage);
