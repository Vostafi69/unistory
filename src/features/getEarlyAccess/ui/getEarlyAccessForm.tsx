import { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { formSchema } from "../model/formSchema";
import { Reveal } from "@/shared/lib/framerMotion/components/reveal";
import { useAppDispatch } from "@/shared/lib/rtk/hooks";
import { useAccount } from "wagmi";
import { setUser } from "../model/earlyAccessSlice";
import { Button } from "@/shared/ui/button";

export const GetEarlyAccessForm: FC = () => {
  const { address } = useAccount();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (address) {
      dispatch(setUser({ id: -1, address: address as string, ...values }));
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[18px]">
        <Reveal delay={0.35}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="We will display your email in participation list"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Reveal>
        <Reveal delay={0.45}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="We will display your email in participation list"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Reveal>
        <Reveal delay={0.55}>
          <Button disabled={!!!address} className="pt-[6px]" type="submit">
            Get EARLY ACCESS
          </Button>
        </Reveal>
      </form>
    </Form>
  );
};
