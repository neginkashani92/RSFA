import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

function changePassword({password}) {
  const form = useForm({
    password:"",
    confirmPassword:""
  }
  );
   useEffect(() => {
     if (password) {
       form.reset({
         password: password || "",
       });
     }
   }, [password, form]);

  return (
    <>
      <Form {...form}>
        <form className="space-y-8">
          <div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="New password"
                      {...field}
                      type="password"
                      className="rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="confirm password"
                      {...field}
                      type="password"
                      className="rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="text-right">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
}

export default changePassword;
