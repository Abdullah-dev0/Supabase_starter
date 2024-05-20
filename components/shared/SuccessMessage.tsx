type SuccessMessageProps = {
   success: string | undefined;
};

const SuccessMessage = ({ success }: SuccessMessageProps) => {
   if (!success) return null;
   return (
      <div className="bg-green-500/80  text-white p-5 w-full">{success}</div>
   );
};

export default SuccessMessage;
