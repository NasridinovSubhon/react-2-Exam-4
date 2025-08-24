import { Link, useNavigate } from "react-router-dom";









const ErrorPage = () => {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/30 p-6 md:p-8 max-w-lg w-full mx-4">
        <div className="text-center">

          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 md:mb-6">⚠️</div>


          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Page Not Found
          </h1>

          <p className="text-red-500 dark:text-red-400 text-lg md:text-xl font-semibold mb-4">
            Error 404
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>


          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => navigate(- 1)}
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-medium xl:py-1 sm:py-1 px-4 sm:px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Go Back
            </button>
            <ul>
              <Link to={"/"}
              >
                <button
                  className="border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 font-medium xl:py-1 sm:py-1 px-4 sm:px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  Go Home
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
