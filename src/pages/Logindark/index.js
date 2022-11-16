import React from "react";

import { Stack, Img, Column, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const LogindarkPage = () => {
  const navigate = useNavigate();

  function handleNavigate59() {
    navigate("/usersalldark");
  }
  function handleNavigate60() {
    navigate("/forgotpassworddark");
  }

  return (
    <>
      <Stack className="bg-gray_900 font-inter 3xl:h-[1081px] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] mx-[auto] w-[100%]">
        <Stack className="absolute 3xl:h-[1081px] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] w-[100%]">
          <Img
            src="images/img_vector1.svg"
            className="absolute 3xl:h-[1081px] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] right-[0] w-[79%]"
            alt="VectorOne"
          />
          <Img
            src="images/img_vector2.png"
            className="absolute 3xl:h-[1081px] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] left-[0] w-[67%]"
            alt="VectorTwo"
          />
        </Stack>
        <Column className="absolute bg-bluegray_900 h-[max-content] inset-[0] items-center justify-center m-[auto] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius15 w-[35%]">
          <Text className="text-purple_200 w-[auto]" as="h1" variant="h1">
            Login
          </Text>
          <Text
            className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic text-purple_200 w-[auto]"
            variant="body1"
          >
            Please enter your login details
          </Text>
          <Column className="justify-start lg:mb-[17px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[89%]">
            <Input
              className="font-medium font-roboto p-[0] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] placeholder:text-purple_200 text-purple_200 w-[100%]"
              wrapClassName="w-[100%]"
              type="email"
              name="LoginBox"
              placeholder="Username or E-mail"
              shape="RoundedBorder10"
              size="sm"
              variant="OutlineDeeppurple300"
            ></Input>
            <Input
              className="font-medium font-roboto p-[0] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] placeholder:text-purple_200 text-purple_200 w-[100%]"
              wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[17px] w-[100%] xl:mt-[21px]"
              type="password"
              name="PasswordBox"
              placeholder="Password"
              shape="RoundedBorder10"
              size="md"
              variant="OutlineDeeppurple300"
            ></Input>
            <Text
              className="common-pointer font-inter font-normal italic lg:ml-[199px] xl:ml-[249px] 2xl:ml-[280px] 3xl:ml-[336px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] text-purple_200 w-[auto]"
              as="h5"
              variant="h5"
              onClick={handleNavigate60}
            >
              Forgot password?
            </Text>
            <Button
              className="common-pointer font-bold font-ptsans xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-center text-white_A700 w-[100%]"
              onClick={handleNavigate59}
              shape="RoundedBorder15"
              size="md"
              variant="FillPurple300"
            >
              Login
            </Button>
          </Column>
        </Column>
        <Img
          src="images/img_whitelogo.svg"
          className="absolute lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] left-[4%] top-[6%] w-[13%]"
          alt="whitelogo"
        />
      </Stack>
    </>
  );
};

export default LogindarkPage;
