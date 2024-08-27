"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import axios from "axios";
import InputFeild from "@/components/InputFeild";

const schema = z.object({
  email: z.string().email({ message: "Inavild email addres !" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 charectors long!" }),
});

type Inputs = z.infer<typeof schema>;

 const loginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema), // Apply the zodResolver
  });

  return (
    <section className="h-screen flex flex-col bg-lamaPurple md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-2/3 max-w-md bg-white rounded-md py-16 px-8">
        <h1 className="text-2xl font-semibold text-center pb-10">
          Welcome Back
        </h1>
       
      </div>
    </section>
  );
};

export default loginForm;