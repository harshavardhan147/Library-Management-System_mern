import React from "react";
import { useNavigate } from "react-router-dom";
import { HeadTitle, PageContainer, ContentContainer, Button } from "../components/Styles";
import backgroundImage from "../images/lib-bg.jpg";

const InitialPage = () => {
  const navigate = useNavigate(); 

  const handleAdminLogin = () => {
    navigate('/Adminlogin'); 
  };

  const handleUserLogin = () => {
    navigate('/userlogin'); 
  };

  const pageStyle = {
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100vh", 
  };

  const buttonStyle = {
    backgroundColor: "#ffa500", // Change color to orange, you can use any color code
    color: "#fff", // Text color
  };

  return (
    <div>
      <PageContainer style={pageStyle}>
        <ContentContainer>
          <HeadTitle style={{ marginTop: "130px", color: "#fff" }}>
            Library Management System
          </HeadTitle>
          <form style={{ marginTop: "50px", marginLeft: "550px" }}>
            <Button
              style={{ ...buttonStyle, marginLeft: "110px", marginTop: "50px" }}
              type="button"
              onClick={handleAdminLogin}
            >
              Admin Login
            </Button>
            <Button
              style={{ ...buttonStyle, marginLeft: "110px", marginTop: "50px" }}
              type="button"
              onClick={handleUserLogin}
            >
              User Login
            </Button>
          </form>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default InitialPage;
