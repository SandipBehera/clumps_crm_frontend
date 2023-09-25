import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { H6 } from "../../AbstractElements";

const EmployeeInforamtion = ({ handleChange }) => {
  const [empDetails, setEmpDetails] = useState({
    empPAN: "",
    empAadhar: "",
    empPhone: "",
    empPerAddress: "",
    empPreAddress: "",
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
      <H6 attrH6={{ className: "pb-2" }}>Personal Identity</H6>
      <div className="row theme-form mt-3">
        <div className="col-lg-4 mb-3 ">
          <FormGroup>
            <Label htmlFor="exampleInputPassword1">PanCard No.</Label>
            <Input
              className="form-control input-air-primary"
              type="text"
              placeholder="PanCard No."
              value={empDetails.empPAN}
              onChange={(e) => handleInputChange("empPAN", e.target.value)}
            />
          </FormGroup>
        </div>
        <div className="col-lg-4 mb-3">
          <FormGroup>
            <Label htmlFor="exampleInputPassword1">Aadhar No.</Label>
            <Input
              className="form-control input-air-primary"
              type="text"
              placeholder="Aadhar No."
              value={empDetails.empAadhar}
              onChange={(e) => handleInputChange("empAadhar", e.target.value)}
            />
          </FormGroup>
        </div>
        <div className="col-lg-4 mb-3">
          <FormGroup>
            <Label htmlFor="exampleInputPassword1"> Personal Phone No.</Label>
            <Input
              className="form-control input-air-primary"
              type="text"
              placeholder="Phone No."
              value={empDetails.empPhone}
              onChange={(e) => handleInputChange("empPhone", e.target.value)}
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Label htmlFor="exampleInputAddress">Present Address</Label>
        <Input
          className="form-control input-air-primary"
          type="textarea"
          row="5"
          value={empDetails.empPerAddress}
          onChange={(e) => handleInputChange("empPerAddress", e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleInputAddress">Permanent Address</Label>
        <Input
          className="form-control input-air-primary"
          type="textarea"
          row="5"
          value={empDetails.empPreAddress}
          onChange={(e) => handleInputChange("empPreAddress", e.target.value)}
        />
      </FormGroup>
    </>
  );
};
export default EmployeeInforamtion;
