import React from "react";

import { Stack, Img, Column, Text, Input, Button } from "@components/index";

const LoginPage = () => {
  // const navigate = useNavigate();

  function handleNavigate64() {
    // navigate("/users");
  }
  function handleNavigate65() {
    // navigate("/forgotpassword");
  }

  return (
    <>
      <Stack className="relative mx-auto w-full bg-white_A700 font-inter lg:h-[640px] xl:h-[801px] 2xl:h-[901px] 3xl:h-[1081px]">
        <Stack className="absolute w-full lg:h-[640px] xl:h-[801px] 2xl:h-[901px] 3xl:h-[1081px]">
          <Img
            src="images/img_vector1.svg"
            className="absolute right-[0] w-[79%] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] 3xl:h-[1081px]"
            alt="VectorOne"
          />
          <Img
            src="images/img_vector2.png"
            className="absolute left-[0] w-[67%] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] 3xl:h-[1081px]"
            alt="VectorTwo"
          />
        </Stack>
        <Column className="absolute inset-[0] m-auto h-[max-content] w-[35%] items-center justify-center rounded-radius15 bg-white_A700 lg:p-[8px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px]">
          <Text className="w-auto text-purple_800" as="h1" variant="h1">
            Login
          </Text>
          <Text
            className="w-auto not-italic text-purple_800 lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px]"
            variant="body1"
          >
            Please enter your login details
          </Text>
          <Column className="w-[89%] justify-start lg:mb-[17px] lg:mt-[33px] xl:mb-[22px] xl:mt-[41px] 2xl:mb-[25px] 2xl:mt-[47px] 3xl:mb-[30px] 3xl:mt-[56px]">
            <Input
              className="w-full p-[0] font-roboto font-medium text-purple_800 placeholder:text-purple_800 lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px]"
              wrapClassName="w-full"
              type="email"
              name="LoginBox"
              placeholder="Username or E-mail"
              shape="RoundedBorder10"
              size="sm"
              variant="OutlineDeeppurple300"
            ></Input>
            <Input
              className="w-full p-[0] font-roboto font-medium text-purple_800 placeholder:text-purple_800 lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px]"
              wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[17px] w-full xl:mt-[21px]"
              type="password"
              name="PasswordBox"
              placeholder="Password"
              shape="RoundedBorder10"
              size="md"
              variant="OutlineDeeppurple300"
            ></Input>
            <Text
              className="common-pointer w-auto font-inter font-normal italic text-purple_800 lg:ml-[199px] lg:mt-[27px] xl:ml-[249px] xl:mt-[33px] 2xl:ml-[280px] 2xl:mt-[38px] 3xl:ml-[336px] 3xl:mt-[45px]"
              as="h5"
              variant="h5"
              onClick={handleNavigate65}
            >
              Forgot password?
            </Text>
            <Button
              className="common-pointer w-full text-center font-ptsans font-bold text-white_A700 lg:mt-[9px] lg:text-[13px] xl:mt-[11px] xl:text-[16px] 2xl:mt-[13px] 2xl:text-[19px] 3xl:mt-[15px] 3xl:text-[22px]"
              onClick={handleNavigate64}
              shape="RoundedBorder15"
              size="md"
            >
              Login
            </Button>
          </Column>
        </Column>
        <Img
          src="images/img_whitelogo.svg"
          className="absolute left-[4%] top-[6%] w-[13%] lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px]"
          alt="whitelogo"
        />
      </Stack>
    </>
  );
};

export default LoginPage;
