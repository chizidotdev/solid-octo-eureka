import React, { useState } from "react";

import { Img } from "@components/index";
import { Input, Button, Text } from "@components/ui";
import Link from "next/link";
import { useRouter } from "next/router";

const ForgotPasswordPage = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");

  return (
    <>
      <main className="relative flex h-screen flex-col items-center justify-center overflow-hidden p-5 font-inter dark:bg-white_night">
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

        <div className="z-10 flex max-w-lg flex-col items-center justify-center gap-3 rounded-radius15 bg-white_day p-10 text-brand-primary_day shadow-xl dark:bg-white-secondary_night dark:text-brand-primary_night md:w-[50%]">
          <Text intent="h1" className="text-center">
            Forgot Password
          </Text>

          <Text intent="p">Please enter your email address</Text>

          <div className="flex w-full flex-col gap-5">
            <form className="flex flex-col gap-4">
              <Input
                type="email"
                name="LoginBox"
                placeholder="Enter E-mail"
                color="brand"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </form>

            <Text intent="p" className="self-end">
              <Link href="/">
                <em>Go back to Login</em>
              </Link>
            </Text>

            <Button onClick={() => push("/dashboard")}>Continue</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgotPasswordPage;
