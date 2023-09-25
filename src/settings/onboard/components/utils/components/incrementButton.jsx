import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { Btn } from "../../../../../AbstractElements";
// import InputFields from "./incrementInputs";

const IncrementButton = (props) => {
  return (
    <>
      {props.buttonStatus ? (
        <ButtonGroup>
          <Btn
            attrBtn={{
              onClick: props.incrementInputs,
              color: "primary",
              btnClass: "btn-pill",
              size: "xs",
            }}
          >
            Add Fields
          </Btn>

          <Btn
            attrBtn={{
              onClick: props.decrementInputs,
              color: "secondary",
              btnClass: "btn-pill",
              size: "xs",
            }}
          >
            Remove Fields
          </Btn>
        </ButtonGroup>
      ) : (
        <Btn
          attrBtn={{
            onClick: props.incrementInputs,
            color: "primary",
            btnClass: "btn-pill",
            size: "xs",
          }}
        >
          Add Fields
        </Btn>
      )}
    </>
  );
};
export default IncrementButton;
