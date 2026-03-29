import { SubmitHandler } from "react-hook-form";
import { useFormManager } from "../../formManager/useFormManager";
import { userSignUpFormValidator } from "./userSignUpFormValidator";

type FormData = Record<string, unknown>;

export const useUserSignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormManager({
    validator: userSignUpFormValidator,
  });

  const handleSignup: SubmitHandler<FormData> = async () => {
    // signupMutation.mutate(formData);
  };

  const userSignUp = handleSubmit(handleSignup);

  return { control, userSignUp, errors };
};
