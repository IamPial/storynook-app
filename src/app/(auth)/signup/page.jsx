"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import bookIcon from "@/assets/book.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignUpPage = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
      await authClient.signOut();
      // toast.success("Registration successful!");
      toast("Registration successful!", {
        style: {
          color: "#00c950",
        },
      });
      router.push("/login");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
    // toast.success("Singed in with google");
    toast("Singed in with google", {
      style: {
        color: "#00c950",
      },
    });
    router.push("/");
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
          <h2 className="text-center text-3xl">Create a StudyNook Account</h2>
          <p className="text-center text-purple-500 my-2 text-lg">
            Start booking quiet rooms today.
          </p>
        </div>

        <TextField isRequired name="name" type="name">
          <Label>Name</Label>
          <Input
            className="rounded-lg  focus:right-2 focus:ring-purple-400  border border-purple-200 w-full shadow-none  mt-0.5"
            placeholder="Enter your name"
          />
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="url">
          <Label>Photo URL</Label>
          <Input
            className="rounded-lg focus:right-2 focus:ring-purple-400   border border-purple-200 w-full shadow-none  mt-0.5"
            placeholder="https://"
          />
          <FieldError />
        </TextField>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input
            className="rounded-lg focus:right-2 focus:ring-purple-400   border border-purple-200 w-full shadow-none  mt-0.5"
            placeholder="john@example.com"
          />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={6}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[a-z]/.test(value)) {
              return "Password must contain at least one lowercase letter";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input
            className="rounded-lg focus:right-2 focus:ring-purple-400   border border-purple-200 w-full shadow-none  mt-0.5"
            placeholder="create a password"
          />
          <Description>
            At least 6 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="mb-2">
          <Button
            type="submit"
            className="cursor-pointer w-full rounded-lg  bg-[#9d4edd] hover:bg-[#8d46c7]"
          >
            Register
          </Button>
          <div className="flex gap-1 justify-between items-center ">
            <Separator className="w-45" />
            <p className="text-center text-gray-500 my-2 ">OR</p>
            <Separator className="w-45" />
          </div>
          <Button
            onClick={handleGoogleSignIn}
            className="w-full  hover:bg-purple-400 rounded-lg bg-white border text-neutral-900 border-gray-200 hover:text-white  "
          >
            <FcGoogle className="mb-2" />
            Continue with Google
          </Button>
        </div>
        <Separator />
        <div className="text-center text-dark">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-500 hover:underline">
            Sign In
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
