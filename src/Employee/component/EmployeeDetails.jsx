import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { EmailAddress, Password } from "../../Constant";
import DatePicker from "react-datepicker";
import { Typeahead } from "react-bootstrap-typeahead";
import Select from "react-select";

const EmployeeDetails = ({ handleChange, options }) => {
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
      <FormGroup>
        <Label htmlFor="exampleInputPassword1">Employee Name</Label>
        <Input
          className="form-control input-air-primary"
          type="text"
          placeholder="Employee Name"
          value={empDetails.empName}
          onChange={(e) => handleInputChange("empName", e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label pt-0">{EmailAddress}</Label>
        <Input
          className="form-control input-air-primary"
          type="email"
          placeholder="Enter email"
          value={empDetails.empEmail}
          onChange={(e) => handleInputChange("empEmail", e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleInputPassword1">{Password}</Label>
        <Input
          className="form-control input-air-primary"
          type="password"
          placeholder="Password"
          value={empDetails.empPassword}
          onChange={(e) => handleInputChange("empPassword", e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleInputPassword1">Date Of Joining</Label>
        <DatePicker
          className="form-control digits input-air-primary"
          selected={empDetails.empDOJ}
          onChange={(date) => handleInputChange("empDOJ", date)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleInputPassword1">Designation</Label>
        <Select
          options={options}
          className="js-example-basic-single col-sm-12"
          isMulti
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleInputPassword1">Permissions</Label>
        <Typeahead
          id="multiple-typeahead"
          clearButton
          defaultSelected={options.slice(0, 5)}
          labelKey={"name"}
          multiple
          options={options}
          placeholder="Assign a Permissions..."
          className="form-control input-air-primary"
          onChange={(selected) => handleInputChange("empPermission", selected)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleInputPassword1">Projects</Label>
        <Typeahead
          id="multiple-typeahead"
          clearButton
          defaultSelected={options.slice(0, 5)}
          labelKey={"name"}
          multiple
          options={options}
          placeholder="Assign a Projects..."
          className="form-control input-air-primary"
          onChange={(selected) => handleInputChange("empProjects", selected)}
        />
      </FormGroup>
    </>
  );
};

export default EmployeeDetails;
