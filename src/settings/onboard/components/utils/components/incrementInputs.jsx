import React from "react";
import Select from "react-select";
import { Button, Col, FormGroup, Label, Row } from "reactstrap";

const InputFields = (props) => {
  const { type, name1, name2, label1, label2, register, errors, options } =
    props;
  return (
    <>
      <FormGroup className="mb-3">
        <Label htmlFor={name1}>{label1}</Label>
        <input
          // {...register(name)}
          name={name1}
          id={name1}
          type={type}
          className={`form-control`}
          placeholder={`Enter ${label1}`}
        />
        {/* <span className="text-danger">{errors[name]?.message}</span> */}
      </FormGroup>
      <FormGroup className="mb-3">
        <Label htmlFor={name2}>{label2}</Label>
        <Select
          // {...register(name)}
          options={options}
          name={name2}
          id={name2}
          className={`form-control`}
          placeholder={`Enter ${label2}`}
        />
        {/* <span className="text-danger">{errors[name]?.message}</span> */}
      </FormGroup>
    </>
  );
};
export default InputFields;
