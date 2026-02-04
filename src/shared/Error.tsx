const Error = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-red-100">
      <div className="bg-white shadow-md p-6 rounded">
        <h2 className="mb-4 font-semibold text-red-600 text-lg">
          An error occurred while fetching data.
        </h2>
        <p className="text-gray-700">
          Please try again later or contact support if the problem persists.
        </p>
      </div>
    </div>
  );
};

export default Error;
