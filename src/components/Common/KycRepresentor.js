import React from "react";
import { Card, CardBody, CardTitle, Col, Label, Row} from "reactstrap";
import {Field  } from 'formik'
const KycRepresentor = ({title}) =>  {
    return (
        <Row>
            <Col lg="12">
                <Card>
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <Row>
                            <Col lg="6" className="mb-3">
                                <Label for="name">Name</Label>
                                <Field type="text" className="form-control" id="name" name="name" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="mobile">Mobile</Label>
                                <Field type="number" className="form-control" id="mobile" name="mobile" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="passport_photo">Passport Photo</Label>
                                <Field type="file" className="form-control" id="passport_photo" name="passport_photo"
                                // onChange={(event) => {
                                //     setFieldValue("passport_photo", event.currentTarget.files[0]);
                                // }}
                                />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="whatsapp">Whatsapp</Label>
                                <Field type="number" className="form-control" id="whatsapp" name="whatsapp" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="email">Email</Label>
                                <Field type="text" className="form-control" id="email" name="email" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="dob">DOB</Label>
                                <Field type="date" className="form-control" id="dob" name="dob" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="height">Height</Label>
                                <Field type="number" className="form-control" id="height" name="height" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="weight">Weight</Label>
                                <Field type="number" className="form-control" id="weight" name="weight" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <div id="my-radio-group">Gender</div>
                                <div role="group" aria-labelledby="my-radio-group">
                                    <Label>
                                        <Field type="radio" name="gender" value="Male" /> Male
                                    </Label>
                                    <Label className="ms-3">
                                        <Field type="radio" name="gender" value="Female" /> Female
                                    </Label>
                                </div>
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="aadhar_card">Aadhar Card</Label>
                                <Field type="number" className="form-control" id="aadhar_card" name="aadhar_card" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="pan_card">Pan Card</Label>
                                <Field type="text" className="form-control" id="pan_card" name="pan_card" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="father_name">Father Name</Label>
                                <Field type="text" className="form-control" id="father_name" name="father_name" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="mother_name">Mother Name</Label>
                                <Field type="text" className="form-control" id="mother_name" name="mother_name" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="spouse_name">Spouse Name</Label>
                                <Field type="text" className="form-control" id="spouse_name" name="spouse_name" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="profession">Profession</Label>
                                <Field type="text" className="form-control" id="profession" name="profession" />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Social Link</CardTitle>
                        <Row>
                            <Col lg="6" className="mb-3">
                                <Label for="instagram_link">Instagram Link</Label>
                                <Field type="text" className="form-control" id="instagram_link" name="instagram_link" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="facebook_link">Facebook Link</Label>
                                <Field type="text" className="form-control" id="facebook_link" name="facebook_link" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="youtube_link">Youtube Link</Label>
                                <Field type="text" className="form-control" id="youtube_link" name="youtube_link" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="twitter_link">Twitter Link</Label>
                                <Field type="text" className="form-control" id="twitter_link" name="twitter_link" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="linkedin_link">Linkedin Link</Label>
                                <Field type="text" className="form-control" id="linkedin_link" name="linkedin_link" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="skype_link">Skype Link</Label>
                                <Field type="text" className="form-control" id="skype_link" name="skype_link" />
                            </Col>
                            <Col lg="6" className="mb-3">
                                <Label for="website_link">Website</Label>
                                <Field type="text" className="form-control" id="website_link" name="website_link" />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>

            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Permanent Address</CardTitle>
                            <Col className="mb-3">
                                <Label for="permanent_city" className="form-label">City</Label>
                                <Field type="text" className="form-control" id="permanent_city" name="permanent_city" />
                            </Col>
                            <Col className="mb-3">
                                <Label for="permanent_district" className="form-label">District</Label>
                                <Field type="text" className="form-control" id="permanent_district" name="permanent_district" />
                            </Col>
                            <Col className="mb-3">
                                <Label for="permanent_pincode" className="form-label">Pin Code</Label>
                                <Field type="number" className="form-control" id="permanent_pincode" name="permanent_pincode" />
                            </Col>
                            <Col className="mb-3">
                                <Label for="permanent_state" className="form-label">State</Label>
                                <Field type="text" className="form-control" id="permanent_state" name="permanent_state" />
                            </Col>
                            <Col className="mb-3">
                                <Label for="permanent_country" className="form-label">Country</Label>
                                <Field type="text" className="form-control" id="permanent_country" name="permanent_country" />
                            </Col>
                            <Col className="mb-3">
                                <Label for="permanent_address" className="form-label">Address</Label>
                                <Field as="textarea" className="form-control" id="permanent_address" name="permanent_address" />
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Temporary Address</CardTitle>
                            <Col className="mb-3">
                                <Label for="temporary_city" className="form-label">City</Label>
                                <Field type="text" className="form-control" id="temporary_city" name="temporary_city" />
                            </Col>
                            <Col className="mb-3">
                                <Label for="temporary_district" className="form-label">District</Label>
                                <Field type="text" className="form-control" id="temporary_district" name="temporary_district" />
                            </Col>
                            <Col className="mb-3">
                                <Label for="temporary_pincode" className="form-label">Pin Code</Label>
                                <Field type="number" className="form-control" id="temporary_pincode" name="temporary_pincode" />
                            </Col>
                            <Col className="mb-3">
                                <Label for="temporary_state" className="form-label">State</Label>
                                <Field type="text" className="form-control" id="temporary_state" name="temporary_state" />
                            </Col>
                            <Col className="mb-3">
                                <Label for="temporary_country" className="form-label">Country</Label>
                                <Field type="text" className="form-control" id="temporary_country" name="temporary_country" />
                            </Col>
                            <Col className="mb-3">
                                <Label for="temporary_address" className="form-label">Address</Label>
                                <Field as="textarea" className="form-control" id="temporary_address" name="temporary_address" />
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Row>
    );
}
export default KycRepresentor;