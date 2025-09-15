export const SuccessIconSection = () => {
  return (
    <div className="text-center mb-8">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
        <span className="text-3xl">✅</span>
      </div>
      <h1 className="text-3xl font-bold text-[#184b8c] mb-2">
        Payment Successful!
      </h1>
      <p className="text-[#184b8c]/70">
        Your purchase has been completed successfully
      </p>
    </div>
  );
};
