export const ErrorText = ({ errorMessage }: { errorMessage?: string }) => {
  return (
    <p
      className="text-right py-1 pt-2 text-red-500
         text-sm tracking-wide"
    >
      {errorMessage ?? ""}
    </p>
  );
};
