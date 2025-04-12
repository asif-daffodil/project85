import { Link, usePage } from '@inertiajs/react';
import { FaTachometerAlt, FaBoxOpen, FaPlus, FaList } from 'react-icons/fa';

export default function AdminSidebar({ sidebarOpen }) {
    const { url } = usePage();
    const isActive = (route) => url.startsWith(route);

    return (
        <aside
            className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen p-4 space-y-6 fixed z-40 transform top-0 left-0 w-64 transition-transform duration-300 ease-in-out 
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            md:relative md:translate-x-0`}
        >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">My Dashboard</h2>

            <nav className="flex flex-col space-y-2">
                <Link
                    href={route('dashboard')}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                        isActive('/dashboard')
                            ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                >
                    <FaTachometerAlt className="mr-2" />
                    Dashboard
                </Link>

                {/* Product Section */}
                <div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mt-4 mb-1 px-4">Products</p>

                    <Link
                        href={route('all-products')}
                        className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                            isActive('/all-products')
                                ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                        }`}
                    >
                        <FaList className="mr-2" />
                        All Products
                    </Link>

                    <Link
                        href={route('add-new-product')}
                        className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                            isActive('/add-new-product')
                                ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                        }`}
                    >
                        <FaPlus className="mr-2" />
                        Add New Product
                    </Link>
                </div>
            </nav>
        </aside>
    );
}
