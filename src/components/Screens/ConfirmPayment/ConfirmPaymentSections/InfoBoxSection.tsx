export const InfoBoxSection = ({ email }: { email: string | null }) => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
      <div className="flex items-start gap-3">
        <span className="text-blue-600 text-lg">📧</span>
        <div>
          <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
            Check Your Email
          </h3>
          <p className="text-sm text-blue-700">
            Your voucher has been sent to <strong>{email}</strong>. If you
            don&apos;t see it in your inbox, check your spam folder.
          </p>
        </div>
      </div>
    </div>
  );
};
