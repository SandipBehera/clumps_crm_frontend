import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { CreateCompanyProjectType } from "../../../Constant";
import InputGenerator from "./utils";

const ProjectSetup = ({ setSteps, setFormdata, formdata }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setFormdata((prev) => ({ ...prev, ...data }));
    setSteps((prev) => prev + 1);
  };
  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Form
            className="form-bookmark needs-validation"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputGenerator />
            <div className="text-end btn-mb">
              <Button className="primary">Next</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};
export default ProjectSetup;
