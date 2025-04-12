import AdminSidebar from '@/Components/AdminSidebar';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function DashboardLayout({ header, children }) {
    const { user } = usePage().props.auth;
    const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <AdminSidebar sidebarOpen={sidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar */}
                <div className='flex justify-between bg-white dark:bg-gray-800 shadow'>
                    {header && (
                        <div className="">
                            <div className="hidden md:block px-4 py-6 sm:px-6 lg:px-8">
                                {header}
                            </div>
                        </div>
                    )}
                    <header className="px-6 py-4 flex justify-between items-center">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={sidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>

                        <div className="flex items-center gap-4">
                            <span className="text-gray-700 dark:text-gray-300">{user.name}</span>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                                        Account
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </header>
                </div>



                {/* Page Content */}
                <main className="flex-1 p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
