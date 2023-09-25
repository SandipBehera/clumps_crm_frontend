import React, { Fragment, useState } from "react";
import { Breadcrumbs, H6 } from "../AbstractElements";
import { Card, CardBody, CardHeader, Col, Container, Form } from "reactstrap";
import FooterCard from "../Components/Forms/FormControl/Common/FooterCard";
import EmployeeDetails from "./component/EmployeeDetails";
import EmployeeInforamtion from "./component/EmployeeInforamtion";
import EmployeeDocument from "./component/EmployeeDocument";
import EmployeeSalary from "./component/EmployeeSalary";

const EmployeeCreate = () => {
  const [options, setOptions] = useState([]);
  const [formData, setFormData] = useState({
    employeeDetails: {},
    employeeInformation: {},
    employeeDocument: {},
    employeeSalary: {},
  });
  const handleChange = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };
  const onsubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Create Employee" />
      <Container fluid={true}>
        <Col sm="12">
          <Card>
            <CardBody>
              <H6 attrH6={{ className: "pb-2" }}>Employee Information</H6>
              <Form className="theme-form" onSubmit={onsubmit}>
                <EmployeeDetails
                  handleChange={(data) => handleChange("employeeDetails", data)}
                  options={options}
                />
                <EmployeeInforamtion
                  handleChange={(data) =>
                    handleChange("employeeInformation", data)
                  }
                />
                <EmployeeDocument
                  handleChange={(data) =>
                    handleChange("employeeDocument", data)
                  }
                />
                <EmployeeSalary
                  handleChange={(data) => handleChange("employeeSalary", data)}
                />
                <FooterCard onSubmit={onsubmit} />
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </Fragment>
  );
};
export default EmployeeCreate;
