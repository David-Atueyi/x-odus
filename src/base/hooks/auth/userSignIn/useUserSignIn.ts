import { useMutation } from "@tanstack/react-query";
import { SubmitHandler } from "react-hook-form";
import { useFormManager } from "../../formManager/useFormManager";
import { userSignInFormValidator } from "./userSignInFormValidator";
import { useRouter } from "next/router";
import { toast } from "sonner";

type FormData = Record<string, unknown>;

export const useUserSignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormManager({
    validator: userSignInFormValidator,
  });

  const { push } = useRouter();

  const signInMutation = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mutationFn: async (_formData: FormData): Promise<void> => {
      // const response = await axios.post(API_ROUTES.auth.logIn, _formData);
    },
    onSuccess: () => {
      push("/");
    },
    onError: (error: Error & { response?: { data?: { message?: string } } }) => {
      toast.error(
        error?.response?.data?.message ??
          error?.message ??
          "Something went wrong"
      );
    },
  });

  const handleSignin: SubmitHandler<FormData> = (formData) => {
    signInMutation.mutate(formData);
  };

  const userSignIn = handleSubmit(handleSignin);

  return { userSignIn, control, errors, isLoading: signInMutation.isPending };
};
