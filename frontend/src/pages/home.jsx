import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4 text-center">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-pulse">
        TEAM EAGLE
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-xl">
        Welcome to our <span className="font-semibold text-purple-700">Student Team Management App</span>. <br />Manage, organize, and view your team effortlessly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/add"
          className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
        >
          ➕ Add Member
        </Link>
        <Link
          to="/members"
          className="px-8 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
        >
          👥 View Members
        </Link>
      </div>
    </div>
  );
}

export default Home;
