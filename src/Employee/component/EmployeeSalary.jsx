import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { H6 } from "../../AbstractElements";

const EmployeeSalary = ({ handleChange }) => {
  const [empDetails, setEmpDetails] = useState({
    empAccNo: "",
    empBankName: "",
    empBankBranch: "",
    empIFSC: "",
    empAccName: "",
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
      <H6 attrH6={{ className: "pb-2" }}>Salary Payment</H6>
      <div className="row theme-form mt-3">
        <div className="col-lg-4 mb-3 ">
          <FormGroup>
            <Label htmlFor="exampleInputPassword1">Account Number</Label>
            <Input
              className="form-control input-air-primary"
              type="text"
              placeholder="Account Number"
              value={empDetails.empAccNo}
              onChange={(e) => handleInputChange("empAccNo", e.target.value)}
            />
          </FormGroup>
        </div>
        <div className="col-lg-4 mb-3 ">
          <FormGroup>
            <Label htmlFor="exampleInputPassword1">Bank Name</Label>
            <Input
              className="form-control input-air-primary"
              type="text"
              placeholder="Bank Name"
              value={empDetails.empBankName}
              onChange={(e) => handleInputChange("empBankName", e.target.value)}
            />
          </FormGroup>
        </div>
        <div className="col-lg-4 mb-3 ">
          <FormGroup>
            <Label htmlFor="exampleInputPassword1">Bank Branch</Label>
            <Input
              className="form-control input-air-primary"
              type="text"
              placeholder="Bank Branch"
              value={empDetails.empBankBranch}
              onChange={(e) =>
                handleInputChange("empBankBranch", e.target.value)
              }
            />
          </FormGroup>
        </div>
        <div className="col-lg-4 mb-3 ">
          <FormGroup>
            <Label htmlFor="exampleInputPassword1">IFSC Code</Label>
            <Input
              className="form-control input-air-primary"
              type="text"
              placeholder="IFSC Code"
              value={empDetails.empIFSC}
              onChange={(e) => handleInputChange("empIFSC", e.target.value)}
            />
          </FormGroup>
        </div>
        <div className="col-lg-4 mb-3 ">
          <FormGroup>
            <Label htmlFor="exampleInputPassword1">Account Holder Name</Label>
            <Input
              className="form-control input-air-primary"
              type="text"
              placeholder="Account Holder Name"
              value={empDetails.empAccName}
              onChange={(e) => handleInputChange("empAccName", e.target.value)}
            />
          </FormGroup>
        </div>
      </div>
    </>
  );
};
export default EmployeeSalary;
