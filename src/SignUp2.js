import React from "react";

import { useNavigate } from "react-router-dom";

import Q81Image from "./assets/images/SignUp1__8_1.png";

import Q11Image from "./assets/images/SignUp1__1_1.png";

import Q31Image from "./assets/images/SignUp1__3_1.png";

import Q91Image from "./assets/images/gradient-bg-2.png"; // Replace with your PNG photo

import Q41Image from "./assets/images/gradient-bg-1.png"; // Replace with your PNG photo

import Q51Image from "./assets/images/gradient-bg-3.png"; // Replace with your PNG photo

import Q61Image from "./assets/images/gradient-bg-4.png"; // Replace with your PNG photo

import { styled } from "@mui/material/styles";

const SignUp21 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1920px`,
  height: `1080px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `visible`,
});

const Q81 = styled("img")({
  height: `1080px`,
  width: `1920px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q11 = styled("img")({
  height: `132px`,
  width: `230px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `98px`,
  top: `36px`,
});

const Group12 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `258px`,
  height: `84px`,
  left: `1530px`,
  top: `60px`,
});

const Rectangle1 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 0)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `58px`,
  width: `237px`,
  height: `84px`,
  position: `absolute`,
  left: `10px`,
  top: `0px`,
});

const LogIn = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `0px`,
  top: `22px`,
});

const Q31 = styled("img")({
  height: `867.14px`,
  width: `894.97px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `121px`,
  top: `154px`,
  transform: `rotate(10.37deg)`,
});

const Rectangle2 = styled("div")({
  background: `linear-gradient(139.52deg, rgba(255, 255, 255, 0.26) 0.0013581613137283231%, rgba(255, 255, 255, 0.07) 100.00114713056875%)`,
  backdropFilter: `blur(20px)`,
  WebkitBackdropFilter: `blur(20px)`,
  borderRadius: `21px`,
  width: `676px`,
  height: `792px`,
  position: `absolute`,
  left: `1101px`,
  top: `204px`,
});

const Group3 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `577px`,
  height: `86px`,
  left: `1151px`,
  top: `384px`,
});

const Rectangle3 = styled("img")({
  height: `86px`,
  width: `577px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1154px`,
  top: `172px`,
});

const Username = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `31px`,
  top: `23px`,
});

const Group4 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `577px`,
  height: `86px`,
  left: `1150px`,
  top: `497px`,
});

const Rectangle4 = styled("img")({
  height: `86px`,
  width: `577px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1154px`,
  top: `285px`,
});

const FullName = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `31px`,
  top: `23px`,
});

const Group5 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `577px`,
  height: `86px`,
  left: `1150px`,
  top: `610px`,
});

const Rectangle5 = styled("img")({
  height: `86px`,
  width: `577px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1154px`,
  top: `398px`,
});

const EmailAddress = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `31px`,
  top: `23px`,
});

const Group6 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `577px`,
  height: `86px`,
  left: `1151px`,
  top: `723px`,
});

const Rectangle6 = styled("img")({
  height: `86px`,
  width: `577px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1154px`,
  top: `511px`,
});

const Password = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `31px`,
  top: `23px`,
});

const SignUp = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `700`,
  fontSize: `64px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `85px`,
  position: `absolute`,
  left: `1310px`,
  top: `257px`,
});

const Group7 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `330px`,
  height: `78px`,
  left: `1275px`,
  top: `859px`,
});

const Rectangle7 = styled("div")({
  background: `linear-gradient(103.3deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.07) 100.00000298023232%)`,
  backdropFilter: `blur(10px)`,
  WebkitBackdropFilter: `blur(10px)`,
  borderRadius: `15px`,
  width: `330px`,
  height: `78px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const GetAccessToday = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `35px`,
  top: `19px`,
});

function SignUp2() {
  const history = useNavigate();

  const handleLoginButtonClick = () => {
    history.push("/LogIn1"); // Redirect to LogIn1 page
  };

  return (
    <div>
      <SignUp21>
        <Q81 src={Q81Image} loading="lazy" alt={"8 1"} />
        <Q11 src={Q11Image} loading="lazy" alt={"1 1"} />
        <Group12>
          <Rectangle1></Rectangle1>
          <LogIn onClick={handleLoginButtonClick}>{`Log In`}</LogIn>{" "}
          {/* LogIn button to redirect to LogIn1 page */}
        </Group12>
        <Q31 src={Q31Image} loading="lazy" alt={"3 1"} />
        <Rectangle2></Rectangle2>
        <Group3>
          <Rectangle3 src={Q91Image} loading="lazy" alt={"3 1"} />
          <Username>{`Username`}</Username>
        </Group3>
        <Group4>
          <Rectangle4 src={Q41Image} loading="lazy" alt={"4 1"} />
          <FullName>{`Full Name`}</FullName>
        </Group4>
        <Group5>
          <Rectangle5 src={Q51Image} loading="lazy" alt={"5 1"} />
          <EmailAddress>{`Email Address`}</EmailAddress>
        </Group5>
        <Group6>
          <Rectangle6 src={Q61Image} loading="lazy" alt={"6 1"} />
          <Password>{`Password`}</Password>
        </Group6>
        <SignUp>{`SIGN UP`}</SignUp>
        <Group7>
          <Rectangle7></Rectangle7>
          <GetAccessToday>{`Get Access Today`}</GetAccessToday>
        </Group7>
      </SignUp21>
    </div>
  );
}

export default SignUp2;
