import React, { useEffect, useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback, textarea } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Link, useNavigate } from "react-router-dom";
import logolight from "../../assets/images/f-logo-light.png";
import CarouselPage from "./CarouselPage";
import axios from "axios";

let errorStyle = {
  color:"#f8a6a6",
  width: "100%",
  marginTop: "0.25rem",
  fontSize: "80%",
}
const Register = props => {
  let [userCategoryOption, setUserCategoryOption] = useState([]);
  let user_role_option = ['Visitors', 'Participators', 'Community', 'Supporting Staff', 'Brands', 'Proffessionals', 'Frenchisers'];
  document.title = "Register | FW-Game";
  let errors  =  {};

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serveError, setServeError] = useState({});
  const validation = useFormik({
    // enableReinitialize: true,

    initialValues: {
      email: 'dummy@hm.kjl  ',
      first_name: 'qwerty',
      last_name: 'qwert',
      phone: '1234567890',
      password: '1234567890',
      c_password: '1234567890',
      role_id: '',
      user_category: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      first_name: Yup.string().required("Please Enter Your first name"),
      last_name: Yup.string().required("Please Enter Your Last name"),
      phone: Yup.string().required("Please Enter your mobile number").matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
      password: Yup.string().required("Please Enter Your Password").min(8, "Password must be at least 8 characters long"),
      c_password: Yup.string().required("Please Enter Your confirm Password").oneOf([Yup.ref("password"), null], "Passwords must match"),
      role_id: Yup.string().required("Please Select User Role"),
      user_category: Yup.string().required("Please Select User Category"),
    }),
    onSubmit: () => {
      handleRegisterApi()
    }
  });

  const setCategory = (userRole) => {
    const roleOptions = {
      1: ["Enquiry_Visitors"],
      2: ["Participators"],
      3: [
        "School_Insti",
        "College_Univ",
        "Gym_Club_FC",
        "Army_Police",
        "Federation_Asso",
        "Corporate_Mncs",
      ],
      4: [
        "Coach_Trainers",
        "Vendors_Products",
        "Vendors_Services",
        "Refree_Judges",
        "Others Manpower",
      ],
      5: [
        "Brands_Investors Scolarship",
        "Brands_Investors Sponsorship",
        "Brands_Investors Investor",
        "Brands_Investors Barters",
        "Brands_Investors Partners",
      ],
      6: [
        "Consultant",
        "Dietitian",
        "Fitness Expert",
        "Physiotherapist",
        "Doctors",
        "Medical_Labs",
      ],
      7: ["Team Owner League"],
    };
  
    setUserCategoryOption(roleOptions[userRole] || []);
  };

  let handleRegisterApi = () => {
    let { first_name, last_name, phone, email, password, c_password, role_id, user_category } = validation.values;
    let allData = {
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      email: email,
      password: password,
      c_password: c_password,
      role_id: role_id,
      user_category: user_category,
    };
    
    axios.post(process.env.REACT_APP_DATABASEURL + "/register", allData)
    .then((response) => {
      alert(response.data.message)
      setServeError({});
      navigate('/login');
    }).catch((error) => {

      setServeError({});
      let errorsData = error.response.data.errors;
      for (let item in errorsData) {
        errors[item]= errorsData[item][0];
      }
      setServeError(errors);
    });
  }

  const selectAccountState = (state) => state.Account;
  const AccountProperties = createSelector(
    selectAccountState,
    (account) => ({
      user: account.user,
      registrationError: account.registrationError,
      success: account.success
    })
  );

  const {user, registrationError, success } = useSelector(AccountProperties);

  useEffect(() => {
    success && setTimeout(() => navigate("/login"), 2000)
  }, [success]);

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
                      <Link to="/login" className="d-block auth-logo">
                        <img src={logolight} alt="" width="100" height="30" className="auth-logo-dark" />
                        <img src={logolight} alt="" width="100" height="30" className="auth-logo-light" />
                      </Link>
                    </div>
                    <div className="my-auto">
                      <div>
                        <h5 className="text-primary">Register account</h5>
                        <p className="text-muted">Create your Fw-Game account now.</p>
                      </div>
                      <div className="mt-4">
                        <Form className="form-horizontal" onSubmit={validation.handleSubmit} >
                          {user && user ? (
                            <Alert color="success">
                              Register User Successfully
                            </Alert>
                          ) : null}
                          {registrationError && registrationError ? (
                            <Alert color="danger">{registrationError}</Alert>
                          ) : null}
                          <div className="mb-3">
                            <Label className="form-label">First Name</Label>
                            <Input
                              name="first_name"
                              type="text"
                              placeholder="Enter First Name"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.first_name || ""}
                              invalid={
                                validation.touched.first_name && validation.errors.first_name ? true : false
                              }
                            />
                            {validation.touched.first_name && validation.errors.first_name ? (
                              <FormFeedback type="invalid">{validation.errors.first_name}</FormFeedback>
                            ) : null}
                            {<small style={errorStyle}>{serveError.first_name != "" ? serveError.first_name:null}</small>}
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Last Name</Label>
                            <Input
                              name="last_name"
                              type="text"
                              placeholder="Enter Last name"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.last_name || ""}
                              invalid={
                                validation.touched.last_name && validation.errors.last_name ? true : false
                              }
                            />
                            {validation.touched.last_name && validation.errors.last_name ? (
                              <FormFeedback type="invalid">{validation.errors.last_name}</FormFeedback>
                            ) : null}
                            {<small style={errorStyle}>{serveError.last_name != "" ? serveError.last_name:null}</small>}
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Mobile</Label>
                            <Input
                              id="phone"
                              name="phone"
                              className="form-control"
                              placeholder="Enter your mobile number"
                              type="tel"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.phone || ""}
                              invalid={
                                validation.touched.phone && validation.errors.phone ? true : false
                              }
                            />
                            {validation.touched.phone && validation.errors.phone ? (
                              <FormFeedback type="invalid">{validation.errors.phone}</FormFeedback>
                            ) : null}
                            {<small style={errorStyle}>{serveError.phone != "" ? serveError.phone:null}</small>}
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Email</Label>
                            <Input
                              id="email"
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
                            {<small style={errorStyle}>{serveError.email != "" ? serveError.email : null}</small>}
                          </div>

                          <div className="mb-3">
                            <Label htmlFor="role_id">User Role</Label>
                            <select
                              id="role_id"
                              name="role_id"
                              value={validation.values.role_id || ""}
                              onChange={(e)  => {validation.handleChange(e); setCategory(e.target.value);}}
                              onBlur={validation.handleBlur}
                              className="form-control"
                            >
                              <option value="">-- Select --</option>
                              {user_role_option.map((val, ind)=>{
                                return (
                                    <option key={ind} value={ind+1}>{val}</option>
                                );
                              })}
                            </select>
                            {validation.touched.role_id && validation.errors.role_id ? (
                              <small style={errorStyle}>
                                {validation.errors.role_id}
                              </small>
                            ) : null}
                            {<small style={errorStyle}>{serveError.role_id != "" ? serveError.role_id:null}</small>}
                          </div>
                          <div className="mb-3">
                            <Label htmlFor="user_category">User Category</Label>
                            <select
                              id="user_category"
                              name="user_category"
                              value={validation.values.user_category}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              className="form-control"
                            >
                              <option value="">-- Select --</option>
                              {userCategoryOption.map((val, ind) => {
                                return (
                                  <option key={ind} selected={ind == validation.values.user_category ? 'selected' : ''} value={ind + 1}>{val}</option>
                                );
                              })}
                            </select>
                            {validation.touched.user_category && validation.errors.user_category ? (
                              <FormFeedback type="invalid">{validation.errors.user_category}</FormFeedback>
                            ) : null}
                            <small style={errorStyle}>
                              {validation.errors.user_category}
                            </small>
                          </div>

                          <div className="mb-3">
                            <Label className="form-label">Password</Label>
                            <Input
                              name="password"
                              type="password"
                              placeholder="Enter Password"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.password || ""}
                              invalid={
                                validation.touched.password && validation.errors.password ? true : false
                              }
                            />
                            {validation.touched.password && validation.errors.password ? (
                              <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                            ) : null}
                            {<small style={errorStyle}>{errors.errors != "" ? errors.errors:null}</small>}
                          </div>

                          <div className="mb-3">
                            <Label className="form-label">Confirm Password</Label>
                            <Input
                              name="c_password"
                              type="password"
                              placeholder="Enter confirm Password"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.c_password || ""}
                              invalid={
                                validation.touched.c_password && validation.errors.c_password ? true : false
                              }
                            />
                            {validation.touched.c_password && validation.errors.c_password ? (
                              <FormFeedback type="invalid">{validation.errors.c_password}</FormFeedback>
                            ) : null}
                            <small style={errorStyle}>{serveError.c_password != "" ? serveError.c_password:null}</small>
                          </div>
                          <div className="mt-4 d-grid">
                            <button
                              className="btn btn-primary btn-block"
                              type="submit"
                            >
                              Register
                            </button>
                          </div>

                          <div className="mt-4 text-center">
                            <p className="mb-0">
                              By registering you agree to the FW-Game{" "}
                              <Link to="#" className="text-primary">Terms of Use</Link>
                            </p>
                          </div>
                        </Form>

                        <div className="mt-5 text-center">
                          <p>
                            Already have an account ?{" "}
                            <Link to="/login" className="fw-medium text-primary">Login</Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        ©{" "}
                        {new Date().getFullYear()}
                        Fw-Game. Crafted with{" "}
                        <i className="mdi mdi-heart text-danger"></i> by
                        Our Teams
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
export default Register;