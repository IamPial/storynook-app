"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
  Toast,
} from "@heroui/react";
import Image from "next/image";
import bookIcon from "@/assets/book.png";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      router.push("/");
      router.refresh();
    }
    if (error) {
      Toast.danger("Invalid email or password");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="py-10  px-4 md:px-0 ">
      <Form
        onSubmit={handleSubmit}
        className="rounded-lg bg-background/70 shadow-lg flex border border-purple-100 p-5  max-w-md mx-auto flex-col gap-4"
      >
        <div>
          <Image
            src={bookIcon}
            alt="bookImage"
            width={50}
            height={50}
            className="mx-auto my-2 border border-purple-200 bg-white rounded-lg"
          />
          <h2 className="text-center text-3xl">Login to StudyNook</h2>
          <p className="text-center text-purple-500 my-2 text-lg">
            Welcome back. Pick up where you left off
          </p>
        </div>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input
            className="rounded-lg  focus:right-2 focus:ring-purple-400  border border-purple-200 w-full shadow-none  mt-0.5"
            placeholder="john@example.com"
          />
          <FieldError />
        </TextField>

        <TextField isRequired minLength={6} name="password" type="password">
          <Label>Password</Label>
          <Input
            className="rounded-lg focus:right-2 focus:ring-purple-400   border border-purple-200 w-full shadow-none  mt-0.5"
            placeholder="create a password"
          />
          <FieldError />
        </TextField>

        <div className="mb-2">
          <Button
            type="submit"
            className="cursor-pointer w-full rounded-lg  bg-[#9d4edd] hover:bg-[#8d46c7]"
          >
            Login
          </Button>
          <div className="flex gap-1 justify-between items-center ">
            <Separator className="w-45" />
            <p className="text-center text-gray-500 my-2 ">OR</p>
            <Separator className="w-45" />
          </div>
          <Button
            onClick={handleGoogleSignIn}
            className="w-full  hover:bg-purple-400 rounded-lg bg-white border text-neutral-900 border-gray-200 hover:text-white "
          >
            <FcGoogle className="mb-2" />
            Sign Up With Google
          </Button>
        </div>
        <Separator />
        <div className="text-center text-dark">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-purple-500 hover:underline">
            Register
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
