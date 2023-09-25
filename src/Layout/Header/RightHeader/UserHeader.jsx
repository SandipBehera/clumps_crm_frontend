import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, LogIn, Mail, User } from "react-feather";
import man from "../../../assets/images/dashboard/profile.png";

import { LI, UL, Image, P } from "../../../AbstractElements";
import CustomizerContext from "../../../_helper/Customizer";
import { Account, Admin, Inbox, LogOut, Taskboard } from "../../../Constant";

const getRandomColor = () => {
  const colors = ["#E57373", "#81C784", "#64B5F6", "#FFD54F", "#9575CD"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const UserHeader = () => {
  const history = useNavigate();
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("Emay Walter");
  const { layoutURL } = useContext(CustomizerContext);
  const authenticated = JSON.parse(sessionStorage.getItem("authenticated"));
  const auth0_profile = JSON.parse(sessionStorage.getItem("auth0_profile"));
  const backgroundColor = getRandomColor();

  useEffect(() => {
    setProfile(sessionStorage.getItem("profileURL") || man);
    setName(
      sessionStorage.getItem("user_name")
        ? sessionStorage.getItem("user_name")
        : name
    );
  }, []);

  const getInitials = (name) => {
    let initials;
    const nameSplit = name.split(" ");
    const nameLength = nameSplit.length;
    if (nameLength > 1) {
      initials =
        nameSplit[0].substring(0, 1) +
        nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
      initials = nameSplit[0].substring(0, 1);
    } else return;

    return initials.toUpperCase();
  };
  const Logout = () => {
    sessionStorage.removeItem("profileURL");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("auth0_profile");
    sessionStorage.removeItem("user_name");
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("authenticated");
    sessionStorage.removeItem("login");
    history(`/login`);
  };

  const UserMenuRedirect = (redirect) => {
    history(redirect);
  };

  return (
    <>
      <li className="profile-nav onhover-dropdown pe-0 py-0">
        <div className="media profile-media">
          {auth0_profile ? (
            <Image
              attrImage={{
                className: "b-r-10 m-0",
                src: `${authenticated ? auth0_profile.picture : profile}`,
                alt: "",
              }}
            />
          ) : (
            <>
              <div
                className="media-body"
                style={{
                  backgroundColor: backgroundColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                <span className="initials">{getInitials(name)}</span>
              </div>
            </>
          )}
          {/* <div className="media-body">
            <span>{authenticated ? auth0_profile.name : name}</span>
            <P attrPara={{ className: "mb-0 font-roboto" }}>
              {Admin} <i className="middle fa fa-angle-down"></i>
            </P>
          </div> */}
        </div>
        <UL
          attrUL={{
            className: "simple-list profile-dropdown onhover-show-div",
          }}
          style={{ marginLeft: "12px" }}
        >
          <LI
            attrLI={{
              onClick: () =>
                UserMenuRedirect(`/app/users/profile/${layoutURL}`),
            }}
          >
            <User />
            <span>{Account} </span>
          </LI>
          <LI
            attrLI={{
              onClick: () => UserMenuRedirect(`/app/email-app/${layoutURL}`),
            }}
          >
            <Mail />
            <span>{Inbox}</span>
          </LI>
          <LI
            attrLI={{
              onClick: () =>
                UserMenuRedirect(`/app/todo-app/todo/${layoutURL}`),
            }}
          >
            <FileText />
            <span>{Taskboard}</span>
          </LI>
          <LI attrLI={{ onClick: Logout }}>
            <LogIn />
            <span>{LogOut}</span>
          </LI>
        </UL>
      </li>
    </>
  );
};

export default UserHeader;
