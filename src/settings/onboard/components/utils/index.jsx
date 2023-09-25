import React from "react";
import { Button, Col, FormGroup, Label, Row } from "reactstrap";
import IncrementButton from "./components/incrementButton";
import InputFields from "./components/incrementInputs";
import { defaultInputTypes } from "../../../../Data/InputTypes";

const InputGenerator = () => {
  const [InputElements, setInputElements] = React.useState([
    <InputFields
      key={0}
      type={"text"}
      name1={"Field"}
      label1={"Field Name"}
      name2={"FieldType"}
      label2={"Field Type"}
      options={defaultInputTypes}
    />,
  ]);
  const [showButton, setShowButton] = React.useState(false);
  const incrementInputs = () => {
    setShowButton(true);
    setInputElements((prevElements) => [
      ...prevElements,
      <InputFields
        key={InputElements.length}
        type={"text"}
        name1={"Field"}
        label1={"Field Name"}
        name2={"FieldType"}
        label2={"Field Type"}
        options={defaultInputTypes}
      />,
    ]);
  };
  const decrementInputs = () => {
    setInputElements((prevElements) => prevElements.slice(0, -1));
    if (InputElements.length === 2) {
      setShowButton(false);
    }
  };
  return (
    <Row>
      <Col sm="9">
        {InputElements.map((element) => (
          <div key={element.key}>{element}</div>
        ))}
      </Col>
      <Col sm="3">
        <div>
          <IncrementButton
            incrementInputs={incrementInputs}
            buttonStatus={showButton}
            decrementInputs={decrementInputs}
          />
        </div>
      </Col>
    </Row>
  );
};
export default InputGenerator;
