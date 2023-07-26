import React from "react";

import { useHistory } from "react-router-dom";

import Q81Image from "./assets/images/SignUp1__8_1.png";

import Q11Image from "./assets/images/SignUp1__1_1.png";

import Q81EmailImage from "./assets/images/sign_up_with_email_image.png";

import Q31Image from "./assets/images/SignUp1__3_1.png";

import Q91Image from "./assets/images/SignUp1__9_1.png";

import { styled } from "@mui/material/styles";

const SignUp11 = styled("div")({
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
  overflow: `hidden`
});

const Q81 = styled("img")({
  height: `1080px`,
  width: `1920px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

const Q11 = styled("img")({
  height: `132px`,
  width: `230px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `98px`,
  top: `36px`
});

const Group13 = styled("div")({
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
  top: `60px`
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
  top: `0px`
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
  top: `22px`
});

const Q31 = styled("img")({
  height: `867.14px`,
  width: `894.97px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `121px`,
  top: `154px`,
  transform: `rotate(10.37deg)`
});

const LetSStartYourNftJourSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const LetSStartYourNftJourSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `700`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const LetSStartYourNftJourSpan3 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const LetSStartYourNftJourSpan4 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `700`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const LetSStartYourNftJour = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `664px`,
  height: `353px`,
  position: `absolute`,
  left: `1124px`,
  top: `229px`
});

const MostPowerfulNftDesigSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const MostPowerfulNftDesigSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const MostPowerfulNftDesigSpan3 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const MostPowerfulNftDesig = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `378px`,
  height: `40px`,
  position: `absolute`,
  left: `1124px`,
  top: `610px`
});

const Group1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `664px`,
  height: `94px`,
  left: `1124px`,
  top: `700px`
});

const Rectangle2 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `58px`,
  width: `664px`,
  height: `94px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

const SignUpWithGoogleSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const SignUpWithGoogleSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const SignUpWithGoogle = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `250px`,
  height: `40px`,
  position: `absolute`,
  left: `248px`,
  top: `30px`
});

const Q91 = styled("img")({
  height: `72px`,
  width: `70px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `166px`,
  top: `11px`
});

const Group2 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `664px`,
  height: `94px`,
  left: `1124px`,
  top: `822px`
});

const SignUpWithEmailSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const SignUpWithEmailSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: "700",
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const SignUpWithEmail = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `250px`,
  height: `40px`,
  position: `absolute`,
  left: `248px`,
  top: `30px`
});

const Q81Email = styled("img")({
  height: `72px`,
  width: `70px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `166px`,
  top: `11px`
});

const Q101 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `68px`,
  height: `63px`,
  left: `166px`,
  top: `15px`,
  overflow: `hidden`
});

const Layer1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `67.77px`,
  height: `62.79px`,
  left: `0px`,
  top: `0px`
});

function SignUp1() {
  const history = useHistory();

  const handleSignUpWithEmailClick = () => {
    history.push("/SignUp2"); // Redirect to SignUp2 page
  };

  const handleLoginButtonClick = () => {
    history.push("/LogIn1"); // Redirect to LogIn1 page
  };

  return (
    <SignUp11>
      <Q81 src={Q81Image} loading="lazy" alt={"8 1"} />
      <Q11 src={Q11Image} loading="lazy" alt={"1 1"} />
      <Group13>
        <Rectangle1></Rectangle1>
        <LogIn onClick={handleLoginButtonClick}>{`Log In`}</LogIn>
      </Group13>
      <Q31 src={Q31Image} loading="lazy" alt={"3 1"} />
      <LetSStartYourNftJour>
        <LetSStartYourNftJourSpan1>{`Let’s start your `}</LetSStartYourNftJourSpan1>
        <LetSStartYourNftJourSpan2>{`NFT JOURNEY
`}</LetSStartYourNftJourSpan2>
        <LetSStartYourNftJourSpan3>{`with `}</LetSStartYourNftJourSpan3>
        <LetSStartYourNftJourSpan4>{`NFT.CO`}</LetSStartYourNftJourSpan4>
      </LetSStartYourNftJour>
      <MostPowerfulNftDesig>
        <MostPowerfulNftDesigSpan1>{`Most powerful `}</MostPowerfulNftDesigSpan1>
        <MostPowerfulNftDesigSpan2>{`NFT`}</MostPowerfulNftDesigSpan2>
        <MostPowerfulNftDesigSpan3>{` design tool.`}</MostPowerfulNftDesigSpan3>
      </MostPowerfulNftDesig>
      <Group1>
        <Rectangle2></Rectangle2>
        <SignUpWithGoogle>
          <SignUpWithGoogleSpan1>{`Sign up with `}</SignUpWithGoogleSpan1>
          <SignUpWithGoogleSpan2>{`Google`}</SignUpWithGoogleSpan2>
        </SignUpWithGoogle>
        <Q91 src={Q91Image} loading="lazy" alt={"9 1"} />
      </Group1>
      <Group2>
        <Rectangle2 onClick={handleSignUpWithEmailClick}></Rectangle2>
        <SignUpWithEmail onClick={handleSignUpWithEmailClick}>
          <SignUpWithEmailSpan1>{`Sign up with `}</SignUpWithEmailSpan1>
          <SignUpWithEmailSpan2>{`Email`}</SignUpWithEmailSpan2>
        </SignUpWithEmail>
        <Q81Email src={Q81EmailImage} loading="lazy" alt={"8 1"} />
        <Q101>
          <Layer1></Layer1>
        </Q101>
      </Group2>
      <LogIn onClick={handleLoginButtonClick}>{`Log In`}</LogIn>{" "}
      {/* LogIn button to redirect to LogIn1 page */}
    </SignUp11>
  );
}

export default SignUp1;
