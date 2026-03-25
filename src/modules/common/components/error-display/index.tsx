
const ErrorMessageDisply = ({ errorMessage }: { errorMessage: string|undefined }) => {
  return (
    <div className="flex items-center p-4 bg-primary-200 text-danger">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorMessageDisply;
