// src/components/SchedulingLayout.jsx
import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../services/useAuth';
import coverImg from '../assets/cb2.png';

export default function SchedulingLayout() {
  const { role } = useAuth();
  const nav = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    nav('/login', { replace: true });
  };


  return (
    
    <div className="min-h-screen bg-cover bg-no-repeat " style={{ backgroundImage: `url(${coverImg})` }} >
      <nav className="shadow px-4 py-3 flex items-center justify-between">
        {/* Left‑side tabs */}
        
        <div className="flex space-x-6">
          {role === 'manager' && (
          <NavLink
            to="crew"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold'
                : 'text-white hover:text-blue-500'
            }
          >
            Crew Detail
          </NavLink>
          )}
          <NavLink
            to="boat"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold'
                : 'text-white hover:text-blue-500'
            }
          >
            Boat Scheduling
          </NavLink>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <button
            onClick={logout}
            className="text-red-100 hover:underline"
          >
            Logout
          </button>
          <Link
            to="/"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
          >
            Exit
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
