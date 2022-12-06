import Layout from "@components/layout";
import { Button, Input, Text } from "@components/ui";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import type { NextPageWithLayout } from "../_app";

const Security: NextPageWithLayout = () => {
  const [password, setPassword] = useState("");
  const { push } = useRouter();
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleDone = (e: React.FormEvent) => {
    e.preventDefault();

    push("/settings");
  };

  return (
    <>
      <Text intent="h2">Reset Password</Text>

      <form className="flex max-w-lg flex-col gap-5">
        <label className="grid gap-2 text-sm">
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label className="grid gap-2 text-sm">
          Confirm Password
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <div className="mt-10 self-end">
          <Button size="small" variant="rounded" onClick={handleDone}>
            <span className="grid grid-cols-[1fr_6fr] place-items-center gap-5 pr-5">
              <FiCheck />
              Done
            </span>
          </Button>
        </div>
      </form>
    </>
  );
};

Security.getLayout = (page) => <Layout settings>{page}</Layout>;

export default Security;
