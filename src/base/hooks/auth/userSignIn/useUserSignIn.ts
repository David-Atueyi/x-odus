import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
import { SubmitHandler } from "react-hook-form";
import { useFormManager } from "../../formManager/useFormManager";
import { userSignInFormValidator } from "./userSignInFormValidator";
import { useRouter } from "next/router";
import { toast } from "sonner";

export const useUserSignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormManager({
    validator: userSignInFormValidator,
  });

  const { push } = useRouter();
  // const { authenticateUser } = useAuthHelper();

  const signInMutation = useMutation({
    mutationFn: async (
      formData: Record<string, any>
    ): Promise<any> => {
      // const response = await axios.post(API_ROUTES.auth.logIn, formData);
      // return response.data;
    },
    onSuccess: (data:any) => {
      // authenticateUser(data, true);
      push("/");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          error?.message ??
          "Something went wrong"
      );
    
    },
  });

  const handleSignin: SubmitHandler<Record<string, any>> = (formData) => {
    signInMutation.mutate(formData);
  };

  const userSignIn = handleSubmit(handleSignin);

  return { userSignIn, control, errors, isLoading: signInMutation.isPending };
};
