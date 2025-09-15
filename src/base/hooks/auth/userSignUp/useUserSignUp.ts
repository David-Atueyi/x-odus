
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
import { SubmitHandler } from "react-hook-form";
import { useFormManager } from "../../formManager/useFormManager";
import { userSignUpFormValidator } from "./userSignUpFormValidator";
// import { toQueryString } from "@/base/lib/toQueryString";
// import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useUserSignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormManager({
    validator: userSignUpFormValidator,
  });

  const { push } = useRouter();
  // const { authenticateUser } = useAuthHelper();

  // const signupMutation = useMutation({
  //   mutationFn: async (formData: Record<string, any>) => {
  //     const response = await axios.post<{ user: IUser; authToken: string }>(
  //       API_ROUTES.auth.createAccount,
  //       formData
  //     );
  //     return response.data;
  //   },
  //   onSuccess: async (data) => {
  //     axios.defaults.headers.common[
  //       "Authorization"
  //     ] = `Bearer ${data.authToken}`;

  //     authenticateUser(data);

  //     const qs = toQueryString({
  //       email: data.user.email,
  //     });

  //     navigate({
  //       pathname: appRoutes.auth.accountVerification,
  //       params: { qs },
  //     });
  //   },
  //   onError: (error: any) => {
    // toast.error(
    //   error?.response?.data?.message ?? error?.message ?? "Something went wrong"
    // );
  
  //   },
  // });

  const handleSignup: SubmitHandler<{ [x: string]: any }> = async (
    formData
  ) => {
    // signupMutation.mutate(formData);
  };

  const userSignUp = handleSubmit(handleSignup);

  return {
    control,
    userSignUp,
    errors,
    // isLoading: signupMutation.isPending,
  };
};
