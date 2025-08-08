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

function accessSetting() {
 const form = useForm();

  return (
    <>
   <Form {...form}>
                  <form className="space-y-5">
                    <div>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input {...field} className="rounded-none" />
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

export default accessSetting;
