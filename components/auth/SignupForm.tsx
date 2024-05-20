"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { defaultValues } from "@/constants";
import { SignupSchema } from "@/schema";
import { signup } from "@/serverActions/auth.action";
import Link from "next/link";
import { useState, useTransition } from "react";
import ErrorMessage from "../shared/ErrorMessage";
import SuccessMessage from "../shared/SuccessMessage";

export function SignupForm() {
   const [error, setError] = useState<string | undefined>("");
   const [success, setSuccess] = useState<string | undefined>("");
   const [isPending, startTransition] = useTransition();

   //using react-hook-form and shadcn validating with zod

   const form = useForm<z.infer<typeof SignupSchema>>({
      resolver: zodResolver(SignupSchema),
      defaultValues: defaultValues,
   });

   // 2. Define a submit handler.
   async function onSubmit(values: z.infer<typeof SignupSchema>) {
      setError("");
      setSuccess("");
      startTransition(() => {
         signup(values).then((res) => {
            setSuccess(res?.success);
            setError(res?.error);
         });
      });
   }

   return (
      <div className="w-full">
         <h1 className="text-3xl text-center">Sign Up </h1>
         <div className="">
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
               >
                  <FormField
                     control={form.control}
                     disabled={isPending}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>email</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="jhon@gmail.com"
                                 type="email"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="password"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>password</FormLabel>

                           <FormControl>
                              <Input
                                 placeholder="*****"
                                 disabled={isPending}
                                 type="password"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <ErrorMessage error={error} />
                  <SuccessMessage success={success} />
                  <Button disabled={isPending} className="w-full" type="submit">
                     Submit
                  </Button>
               </form>
            </Form>
         </div>
         <Link href="/auth/signin">
            <p className="underline mt-2">Already have An account</p>
         </Link>
      </div>
   );
}
