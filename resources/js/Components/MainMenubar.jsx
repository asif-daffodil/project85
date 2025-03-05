import { Link, usePage } from "@inertiajs/react";

const MainMenubar = ({ auth }) => {
  const { url } = usePage();  // Getting the current URL to compare

  return (
    <nav className="flex flex-1 justify-center">
      <Link
        href="/"
        className={`rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white ${
          url === "/" ? "text-blue-600 font-bold hover:text-blue-700" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href={route('about')}
        className={`rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white ${
          url === "/about" ? "text-blue-600 font-bold hover:text-blue-700" : ""
        }`}
      >
        About
      </Link>
      <Link
        href={route('shop')}
        className={`rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white ${
          url === "/shop" ? "text-blue-600 font-bold hover:text-blue-700" : ""
        }`}
      >
        Shop
      </Link>
      {auth.user ? (
        <Link
          href={route('dashboard')}
          className={`rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white ${
            url === '/dashboard' ? "text-blue-600 font-bold hover:text-blue-700" : ""
          }`}
        >
          Dashboard
        </Link>
      ) : (
        <>
          <Link
            href={route('login')}
            className={`rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white ${
              url === '/login' ? "text-blue-600 font-bold hover:text-blue-700" : ""
            }`}
          >
            Log in
          </Link>
          <Link
            href={route('register')}
            className={`rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white ${
              url === '/register' ? "text-blue-600 font-bold hover:text-blue-700" : ""
            }`}
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default MainMenubar;
