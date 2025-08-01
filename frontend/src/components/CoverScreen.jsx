import React from 'react'
import { useNavigate } from 'react-router-dom';
import coverImg from '../assets/cover-bg.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getTest } from '../services/api.js';

export default function CoverScreen() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    getTest()
      .then(res => setMsg(res.data.message))
      .catch(err => console.error(err));
  }, []);
  const nav = useNavigate();
  const areas = ['Scheduling', 'For_Future(Provisions)', 'For_Future(Maintenance)', 'For_Future(Inventory)'];
  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    nav('/login', { replace: true });
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      <h2 >Only the Scheduling feature is active; other buttons are placeholders for future enhancements.</h2>
      {areas.map((area) => (
        <button
          key={area}
          onClick={() => nav(`/${area.toLowerCase()}`)}
          className="m-2 px-6 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
        >
          {area}
        </button>
      ))}

      <button onClick={logout} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow mt-6">
        Logout
      </button>
      {/* <button
        onClick={() => window.close()}
        className="mt-6 px-6 py-2 text-gray-700 hover:text-gray-900"
      >
        Exit
      </button> */}
    </div>
  );
}
