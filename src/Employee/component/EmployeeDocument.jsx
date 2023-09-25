import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { H6 } from "../../AbstractElements";

const EmployeeDocument = ({ handleChange }) => {
  const [empDetails, setEmpDetails] = useState({
    empName: "",
    empEmail: "",
    empPassword: "",
    empDOJ: new Date(),
    empPermission: [],
    empProjects: [],
  });

  const handleInputChange = (field, value) => {
    setEmpDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
    handleChange(empDetails);
  };
  return (
    <>
      <hr className="mt-4 mb-4" />
      <H6 attrH6={{ className: "pb-2" }}>Personal Document</H6>
      <div className="row theme-form mt-3">
        <div className="col-lg-4 mb-3 ">
          <FormGroup>
            <Label htmlFor="exampleInputPassword1">Profile Picture</Label>
            <Input className="form-control" name="profilepic" type="file" />
          </FormGroup>
        </div>
        <div className="col-lg-4 mb-3 ">
          <FormGroup>
            <Label htmlFor="exampleInputPassword1">Aadhar Front</Label>
            <Input className="form-control" name="aadharpic" type="file" />
          </FormGroup>
        </div>
        <div className="col-lg-4 mb-3 ">
          <FormGroup>
            <Label htmlFor="exampleInputPassword1">Pan Card</Label>
            <Input className="form-control" name="panpic" type="file" />
          </FormGroup>
        </div>
      </div>
    </>
  );
};
export default EmployeeDocument;
