import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, Btn, H6 } from "../../AbstractElements";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import DatePicker from "react-datepicker";
import FooterCard from "../../Components/Forms/FormControl/Common/FooterCard";
import { date_to_local } from "../../Hooks/dateToString";
import Select, { components } from "react-select";
import { Client } from "../../api";
import CommonModal from "../../Components/UiKits/Modals/common/modal";
import HeaderCard from "../../Components/Common/Component/HeaderCard";
import ClientType from "./components/clientType";
import ProjectSetup from "./components/projectSetup";
// import { GetCompanyType } from "../../Services/Company.service";

const ClientOnBoard = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyPanNo, setCompanyPanNo] = useState("");
  const [companyGstNo, setCompanyGstNo] = useState("");
  const [licenceSatrtDate, setLicenceStartDate] = useState(new Date());
  const [licenceEndDate, setLicenceEndDate] = useState(new Date());
  const [companyType, setComapnyType] = useState("");
  const [data, setData] = useState();
  const [options, setOptions] = useState([]);
  const sdate = date_to_local(licenceSatrtDate, "L");
  const edate = date_to_local(licenceEndDate, "L");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [steps, setSteps] = useState(1);
  const [formdata, setFormdata] = useState({});
  const GetCompanyType = async () => {
    return await fetch(`${Client}/type`)
      .then((res) => res.json())
      .then((d) =>
        setOptions(
          d.data.map((keys) => {
            return {
              value: keys.company_type,
              label: keys.company_type,
            };
          })
        )
      );
  };
  useEffect(() => {
    GetCompanyType();
  }, []);
  const Menu = (props) => {
    return (
      <>
        <components.Menu {...props}>
          <div className="js-example-basic-single col-sm-12">
            {props.selectProps.fetchingData ? (
              <span className="fetching">Fetching data...</span>
            ) : (
              <div>{props.children}</div>
            )}
            <Btn
              attrBtn={{
                className: "btn js-example-basic-single col-sm-12",
                color: "primary",
                onClick: toggle,
              }}
            >
              {/* {props.title} */}
              Add New Company Type
            </Btn>
          </div>
        </components.Menu>
      </>
    );
  };

  const onsubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", {
      companyName,
      companyEmail,
      companyPhone,
      companyAddress,
      companyPanNo,
      companyGstNo,
      sdate,
      edate,
    });
  };
  return (
    <>
      <Fragment>
        <Breadcrumbs mainTitle="OnBoard Company" />
        <Container fluid={true}>
          <Col sm="12">
            <Card>
              <CardBody>
                <H6 attrH6={{ className: "pb-2" }}>Company Information</H6>
                <Form className="theme-form" onSubmit={onsubmit}>
                  <FormGroup>
                    <Label htmlFor="exampleInputPassword1">Company Name</Label>
                    <Input
                      className="form-control input-air-primary"
                      type="text"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleInputPassword1">Company Email</Label>
                    <Input
                      className="form-control input-air-primary"
                      type="text"
                      placeholder="Company Email"
                      value={companyEmail}
                      onChange={(e) => {
                        setCompanyEmail(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleInputPassword1">Company Phone</Label>
                    <Input
                      className="form-control input-air-primary"
                      type="text"
                      placeholder="Company Phone"
                      value={companyPhone}
                      onChange={(e) => {
                        setCompanyPhone(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleInputPassword1">Company Type</Label>
                    <Select
                      options={options}
                      className="js-example-basic-single col-sm-12"
                      isMulti={false}
                      components={{ Menu }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleInputPassword1">
                      Company Address
                    </Label>
                    <Input
                      type="textarea"
                      name="text"
                      row="5"
                      value={companyAddress}
                      onChange={(e) => {
                        setCompanyAddress(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleInputPassword1">
                      Company Pan No.
                    </Label>
                    <Input
                      className="form-control input-air-primary"
                      type="text"
                      placeholder="Company PAN No."
                      value={companyPanNo}
                      onChange={(e) => {
                        setCompanyPanNo(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleInputPassword1">
                      Company GST NO.
                    </Label>
                    <Input
                      className="form-control input-air-primary"
                      type="text"
                      placeholder="Company GST No."
                      value={companyGstNo}
                      onChange={(e) => {
                        setCompanyGstNo(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleInputPassword1">
                      Licence Start Date
                    </Label>
                    <DatePicker
                      className="form-control digits input-air-primary"
                      selected={licenceSatrtDate}
                      onChange={(date) => setLicenceStartDate(date)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleInputPassword1">
                      Licence End Date
                    </Label>
                    <DatePicker
                      className="form-control digits input-air-primary"
                      selected={licenceEndDate}
                      onChange={(date) => setLicenceEndDate(date)}
                    />
                  </FormGroup>
                  <FooterCard onSubmit={onsubmit} />
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </Fragment>
      <CommonModal
        isOpen={modal}
        title={"Add New Company Type"}
        toggler={toggle}
        footer={false}
      >
        <Card>
          <CardBody>
            {steps === 1 && (
              <ClientType
                setSteps={setSteps}
                setFormdata={setFormdata}
                formdata={formdata}
              />
            )}

            {steps === 2 && (
              <ProjectSetup
                setSteps={setSteps}
                setFormdata={setFormdata}
                formdata={formdata}
              />
            )}

            {/*  {steps === 3 && (
              <Birthdate
                setSteps={setSteps}
                setFormdata={setFormdata}
                formdata={formdata}
              />
            )} */}

            <div className="text-center">
              <span
                className={`step ${steps > 1 ? "finish" : ""} ${
                  steps === 1 ? "active" : ""
                }`}
              />
              <span
                className={`step ${steps > 2 ? "finish" : ""} ${
                  steps === 2 ? "active" : ""
                }`}
              />
              <span
                className={`step ${steps > 3 ? "finish" : ""} ${
                  steps === 3 ? "active" : ""
                }`}
              />
            </div>
          </CardBody>
        </Card>
      </CommonModal>
    </>
  );
};
export default ClientOnBoard;
