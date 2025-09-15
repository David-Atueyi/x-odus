import { useFormManager } from "@/base/hooks/formManager/useFormManager";
import { cn } from "@/base/lib/cn";
import { useState } from "react";
import { Control, useController } from "react-hook-form";
import { EyeClosedIcon } from "../Icons/EyeClosedIcon";
import { EyeIcon } from "../Icons/EyeIcon";

export const AppTextInput = ({
  iconClassName,
  textInputClassName,
  labelClassName,
  children,
  error,
  control,
  name,
  defaultValue,
  label,
  ...props
}: {
  placeholder: string;
  children?: any;
  className?: string;
  textInputClassName?: string;
  labelClassName?: string;
  iconClassName?: string;
  error?: string;
  control?: Control;
  name?: string;
  defaultValue?: string;
  label?: string;
  [key: string]: any;
}) => {
  const { control: defaultController } = useFormManager();

  const [showPassword, setShowPassword] = useState(false);
  //
  const isPasswordInput =
    name?.toLowerCase() === "password" ||
    name?.toLowerCase() === "confirm_password" ||
    name?.toLowerCase() === "confirm_new_password" ||
    name?.toLowerCase() === "current_password" ||
    name?.toLowerCase() === "new_password" ||
    name?.toLowerCase() === "old_password" ||
    name?.toLowerCase() === "password_confirmation";

  const { field } = useController({
    name: name ?? "default",
    defaultValue: defaultValue ?? "",
    control: control ?? defaultController,
  });
  //
  return (
    <>
      {label ? (
        <div className="mb-2">
          <h5 className={cn(`text-[#184b8c]/80 ${labelClassName}`)}>{label}</h5>
        </div>
      ) : null}
      <div className={`flex-row items-center relative`}>
        {children ? (
          <div className={`absolute z-10 left-4 ${iconClassName}`}>
            {children}
          </div>
        ) : null}

        <input
          onChange={field.onChange}
          value={field.value}
          type={isPasswordInput && !showPassword ? "password" : "text"}
          {...props}
          className={cn(`w-full placeholder:text-[1rem] tracking-wider flex-1 text-black/80 
          ${
            children ? "pl-12" : "pl-5"
          } border rounded-[14px]  pt-3 pb-4 bg-whiteColor 
          ${
            error
              ? "border-rose-500/70 placeholder:text-rose-500/70 focus:border-rose-500/70"
              : "focus:border-[#184b8c]/30 placeholder:text-[#184b8c]/60 border-[#184b8c]"
          }
          ${isPasswordInput ? "pr-12" : "pr-4"}
         ${textInputClassName}
         `)}
        />
        {/*  */}
        <button
          className="absolute top-5 right-4"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword && isPasswordInput ? (
            <EyeIcon className="h-5 w-5" stroke="#184b8c" />
          ) : null}
          {!showPassword && isPasswordInput ? (
            <EyeClosedIcon className=" h-5 w-5" stroke="#184b8c" />
          ) : null}
        </button>

        {/* Error message */}
        <p
          className="absolute -bottom-6 right-0 text-right py-1 pt-2 text-rose-500
         text-sm tracking-wide"
        >
          {error ?? ""}
        </p>
      </div>
    </>
  );
};
