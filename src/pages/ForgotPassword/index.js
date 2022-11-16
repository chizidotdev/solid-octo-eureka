import React from "react";

import { Row, Img, Column, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  function handleNavigate72() {
    navigate("/users");
  }
  function handleNavigate73() {
    navigate("/");
  }

  return (
    <>
      <Row className="bg-white_A700 font-inter items-start mx-[auto] lg:pl-[37px] xl:pl-[47px] 2xl:pl-[53px] 3xl:pl-[63px] w-[100%]">
        <Img
          src="images/img_starrhendalog.svg"
          className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[13%]"
          alt="starrhendalog"
        />
        <Column
          className="bg-cover bg-repeat justify-start lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] lg:p-[101px] xl:p-[127px] 2xl:p-[143px] 3xl:p-[171px] w-[82%]"
          style={{ backgroundImage: "url('images/img_vector1.svg')" }}
        >
          <Column className="bg-white_A700 items-center justify-start 2xl:mb-[108px] 3xl:mb-[129px] lg:mb-[76px] xl:mb-[96px] 3xl:mt-[105px] lg:mt-[62px] xl:mt-[78px] 2xl:mt-[88px] lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius15 w-[60%]">
            <Text
              className="lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-purple_800 tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              Forgot Password
            </Text>
            <Text
              className="lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic text-purple_800 w-[auto]"
              variant="body1"
            >
              Please enter your email address
            </Text>
            <Column className="justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[99%]">
              <Input
                className="font-inter font-semibold p-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-purple_800 text-purple_800 w-[100%]"
                wrapClassName="w-[100%]"
                type="email"
                name="LoginBox"
                placeholder="E-mail"
                shape="RoundedBorder10"
                size="sm"
                variant="OutlinePurple800"
              ></Input>
              <Text
                className="common-pointer font-inter font-normal italic lg:ml-[204px] xl:ml-[256px] 2xl:ml-[288px] 3xl:ml-[345px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] text-purple_800 w-[auto]"
                as="h5"
                variant="h5"
                onClick={handleNavigate73}
              >
                Go back to Login
              </Text>
              <Button
                className="common-pointer font-bold font-ptsans xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-bluegray_100 text-center w-[100%]"
                onClick={handleNavigate72}
                shape="RoundedBorder15"
                size="md"
              >
                Continue
              </Button>
            </Column>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default ForgotPasswordPage;
