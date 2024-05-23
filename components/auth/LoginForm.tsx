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
import { LoginSchema } from "@/schema";
import { login } from "@/serverActions/auth.action";
import Link from "next/link";
import { useState, useTransition } from "react";
import ErrorMessage from "../shared/ErrorMessage";
import SuccessMessage from "../shared/SuccessMessage";
import AuthProviders from "./AuthProviders";

export function SigninForm() {
   const [error, setError] = useState<string | undefined>("");
   const [success, setSuccess] = useState<string | undefined>("");
   const [isPending, startTransition] = useTransition();

   //using react-hook-form and shadcn validating with zod

   const form = useForm<z.infer<typeof LoginSchema>>({
      resolver: zodResolver(LoginSchema),
      defaultValues: defaultValues,
   });

   // 2. Define a submit handler.
   async function onSubmit(values: z.infer<typeof LoginSchema>) {
      setError("");
      setSuccess("");
      startTransition(() => {
         login(values).then((res) => {
            setError(res?.error);
         });
      });
   }

   return (
      <div className="w-full">
         <div className="space-y-4">
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
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
            <AuthProviders />
         </div>
         <Link href="/auth/signup">
            <p className="underline mt-2">Create An account</p>
         </Link>
      </div>
   );
}
