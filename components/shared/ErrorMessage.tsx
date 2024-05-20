type ErrorMessageProps = {
   error: string | undefined;
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
   if (!error) return null;
   return <div className="bg-red-500/95 text-white p-3 w-full">{error}</div>;
};

export default ErrorMessage;
