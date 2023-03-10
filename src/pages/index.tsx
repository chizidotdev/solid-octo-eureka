import React, { useState } from "react";
import { Img } from "@components/index";
import { Input, Button, Text } from "@components/ui";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginPage = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <main className="relative flex h-screen items-center justify-center overflow-hidden bg-white_day p-5 font-inter dark:bg-white_night">
        <Img
          src="images/img_vector1.png"
          className="absolute -right-20 bottom-0 sm:w-[79%] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] 3xl:h-[1081px]"
          alt="VectorOne"
        />
        <Img
          src="images/img_vector2.png"
          className="absolute left-0 top-0 sm:w-[67%] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] 3xl:h-[1081px]"
          alt="VectorTwo"
        />

        <div className="z-10 flex max-w-lg flex-col items-center justify-center gap-3 rounded-radius15 bg-white_day p-10 text-brand-primary_day shadow-xl dark:bg-white-secondary_night dark:text-brand-primary_night md:w-[50%]">
          <Text intent="h1">Login</Text>

          <Text intent="p">Please enter your login details</Text>

          <div className="flex w-full flex-col gap-3">
            <form className="flex flex-col gap-4">
              <Input
                type="email"
                name="LoginBox"
                placeholder="Username or E-mail"
                color="brand"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                name="PasswordBox"
                placeholder="Password"
                color="brand"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>

            <Text intent="p" className="self-end">
              <Link href="/forgotpassoword">
                <em>Forgot password?</em>
              </Link>
            </Text>

            <Button onClick={() => push("/dashboard")}>Login</Button>
          </div>
        </div>

        <Img
          src="images/img_whitelogo.svg"
          className="absolute left-[6%] top-[6%] w-44 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px]"
          alt="whitelogo"
        />
      </main>
    </>
  );
};

export default LoginPage;
