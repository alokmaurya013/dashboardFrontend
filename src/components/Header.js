import React, { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'PrincipalView', href: '/principalDashboard', current: false },
  { name: 'TeacherView', href: '/teacherDashboard', current: false },
  { name: 'StudentView', href: '/studentDashboard', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(atob(token.split('.')[1]));
      setIsSignedIn(true);
      setUserRole(user.role);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsSignedIn(false);
    setUserRole('');
    navigate('/signin');
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
              <Link to='/' key="Dashboard" className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'>Dashboard</Link>
                {isSignedIn&&navigation
                    .filter((item) =>
                    userRole === 'Principal'
                      ? item.name === 'PrincipalView'
                      : userRole === 'Teacher'
                        ? item.name === 'TeacherView'
                        : item.name === 'StudentView'
                   )
                    .map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))
                }
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {isSignedIn ?
                <button onClick={handleSignOut} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Sign out</button>
                :
                <Link to="/signin" className="-m-2 block p-2 font-medium text-gray-400">Sign in</Link>
              }
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {isSignedIn ? (
            <>
              {navigation
                .filter((item) =>
                  userRole === 'Principal'
                    ? item.name === 'PrincipalView'
                    : userRole === 'Teacher'
                      ? item.name === 'TeacherView'
                      : item.name === 'StudentView'
                )
                .map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              <button
                onClick={handleSignOut}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link to="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Sign in
            </Link>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
export default Header;
