import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { CreateCompanyType } from "../../../Constant";

const ClientType = ({ setSteps, setFormdata, formdata }) => {
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
            <FormGroup className="mb-3">
              <Label htmlFor="fname">{CreateCompanyType}</Label>
              <input
                className={`form-control ${
                  errors.CreateCompanyType && "is-invalid"
                }`}
                id="fname"
                type="text"
                name="Company Type"
                defaultValue={formdata.CreateCompanyType || ""}
                {...register("companytype", { required: true })}
              />
              <span className="text-danger">
                {errors.companytype && "Company Type is required"}
              </span>
            </FormGroup>
            <div className="text-end btn-mb">
              <Button className="primary">Next</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ClientType;
