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
import { fromTheme } from "tailwind-merge";

function editProfile() {
  const form = useForm();

  return (
    <>
      <Form {...form}>
        <form className="space-y-8">
          <div className="grid grid-cols-4 gap-x-4 gap-y-6 mt-4">
            <div className="col-span-4 md:col-span-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="rounded-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Family Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Family Name"
                        {...field}
                        className="rounded-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-4 md:col-span-3">
              <FormField
                control={form.control}
                name="Telephone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telephone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Telephone number"
                        {...field}
                        className="rounded-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-4 md:col-span-1">
              <FormField
                control={form.control}
                name="Telephone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ex.</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123"
                        {...field}
                        className="rounded-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-4">
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Second Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
                        {...field}
                        className="rounded-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="text-right">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
}

export default editProfile;
