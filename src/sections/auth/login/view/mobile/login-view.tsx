"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "src/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { Input } from "src/components/ui/input";
import { z } from "zod";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "src/components/ui/input-group";
import { ExtendedForm } from "src/components/extended-form/extended-form";
import { useRouter } from "next/navigation";
import { paths } from "src/routes/paths";

// ------------------------------------------------------------

const GoogleIcon = () => (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48px"
    height="48px"
  >
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.641-3.337-11.28-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.233,4.14-4.082,5.421l6.19,5.238C39.924,34.411,44,28.718,44,20C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
);

const SignInSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  //   password: z.string().min(8, { message: "Kata sandi minimal 8 karakter" }),
});

// ------------------------------------------------------------

export function MobileLoginView() {
  const router = useRouter();

  const defaultValues = {
    email: "",
    // password: "",
  };

  type FormValues = z.infer<typeof SignInSchema>;

  const methods = useForm<FormValues>({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // alert(`${data.email} ${data.password}`);
    router.push(paths.dashboard.root);
  };

  const renderForm = () => (
    <ExtendedForm methods={methods} onSubmit={onSubmit} className="space-y-4">
      <ExtendedForm.Input
        name="email"
        type="email"
        label="Email"
        // placeholder="you@example.com"
      />
      <Button
        type="submit"
        className="w-full font-semibold shadow-none"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Lanjutkan..." : "Lanjutkan"}
      </Button>
    </ExtendedForm>
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-3 mb-8">
        <h1 className="text-xl font-semibold">Lanjutkan ke Invvit</h1>
        <p className="text-sm text-neutral-500">Untuk mulai membuat undangan</p>
      </div>
      <div className="flex flex-col gap-y-5">
        {renderForm()}

        <Button variant="outline" className="font-semibold shadow-none">
          <GoogleIcon />
          Lanjutkan dengan Google
        </Button>
      </div>
    </div>
  );
}
