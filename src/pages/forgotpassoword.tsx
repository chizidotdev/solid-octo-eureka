import React from "react";

import { Row, Img, Column, Text, Input, Button } from "@components/index";
import Link from "next/link";
import { useRouter } from "next/router";

const ForgotPasswordPage = () => {
  const { push } = useRouter();

  return (
    <>
      <Row className="relative flex h-screen flex-col items-center justify-center overflow-hidden p-5 font-inter">
        <Img
          src="images/img_vector1.png"
          className="absolute bottom-0 -right-20 sm:w-[79%] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] 3xl:h-[1081px]"
          alt="VectorOne"
        />

        <Img
          src="images/img_starrhendalog.svg"
          className="absolute left-[6%] top-[6%] w-44 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px]"
          alt="starrhendalog"
        />

        <Column className="z-10 flex max-w-lg flex-col items-center justify-center gap-3 rounded-radius15 bg-white_day p-10 text-brand-primary_day shadow-xl dark:bg-white-secondary_night dark:text-brand-primary_night md:w-[50%]">
          <Text intent="h1">Forgot Password</Text>

          <Text intent="p">Please enter your email address</Text>

          <div className="flex w-full flex-col gap-5">
            <form className="flex flex-col gap-4">
              <Input type="email" name="LoginBox" placeholder="Enter E-mail" />
            </form>

            <Text intent="p">
              <Link href="/">Go back to Login</Link>
            </Text>

            <Button onClick={() => push("/users")}>Continue</Button>
          </div>
        </Column>
      </Row>
    </>
  );
};

export default ForgotPasswordPage;
