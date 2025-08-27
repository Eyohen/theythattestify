// src/components/dashboard/DashboardLayout.jsx
import React, { useState } from 'react';
import { 
  Bell,
  User,
  Menu,
  X,
  LogOut,
  Sun,
  Moon,
  LayoutDashboard,
  Search,
  Watch,
  WalletMinimal,
  OctagonAlert
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../url';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logo.png';
import facilities from '../../assets/facilities.png';
import bookings from '../../assets/bookings.png';
import community from '../../assets/community.png';
import financialoverview from '../../assets/financialoverview.png';
import getpaid from '../../assets/getpaid.png';
import reviews from '../../assets/reviews.png';
import profile from '../../assets/profile.png';






// MenuItem Component - Modified to handle special case for logout
const MenuItem = ({ icon, title, path, collapsed, active, onClick }) => {

  // If onClick is provided, use a button instead of a Link
  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className={`flex items-center w-full px-4 py-3 text-left rounded-xl
            'text-gray-500 hover:bg-gray-50 hover:text-black'
        } font-semibold transition-colors`}
      >
        <span className="flex-shrink-0">{icon}</span>
        {!collapsed && <span className="ml-3">{title}</span>}
      </button>
    );
  }
  
  // Regular menu item with Link
  return (
    <Link 
      to={path}
      className={`flex items-center w-[200px] px-3 py-3 text-left rounded-xl ${active ?
    'bg-[#7042D2] text-white font-semibold border-r-[6px] border-b-[4px] border-black'  : 'text-black font-normal hover:bg-gray-50 hover:text-black border-2 border-black' }`}
    >
      <span className="flex-shrink-0">{icon}</span>
      {!collapsed && <span className="ml-3">{title}</span>}
    </Link>
  );
};

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  console.log("layout user", user);

  // Handle logout function
  const handleLogout = () => {
    // Clear access token from localStorage
    localStorage.removeItem("access_token");
    
    // Call the logout function from AuthContext
    logout();
    
    // Navigate to the home/login page
    navigate("/");
  };

  // Menu items configuration
  const menuItems = [
    { path: "/dashboard", title: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/users", title: "Users", icon: <img src={community} size={25} /> },
    { path: "/sessions", title: "Sessions", icon:<Watch /> },
    { path: "/communities", title: "Communities", icon: <img src={community} size={25} /> },
    { path: "/financial-oversight", title: "Financial Oversight", icon: <WalletMinimal /> },
    { path: "/dispute-resolution", title: "Disputes Resolution", icon:<OctagonAlert /> },
    // { path: "/bookings", title: "Bookings", icon: <img src={facilities} size={25} /> },
    // { path: "/teams", title: "Teams", icon: <img src={bookings} size={25} /> },  
    // { path: "/transaction-history", title: "Transaction History", icon: <img src={financialoverview} size={25} /> },
    // { path: "/reviews", title: "Reviews", icon: <img src={getpaid} size={25} /> },  
    { path: "/profile", title: "Profile", icon: <img src={reviews} size={25} /> },
    // { path: "/settings", title: "Profile", icon: <img src={profile} size={25} /> },

  ];

  // Get page title based on current path
  const getPageTitle = () => {
    const page = menuItems.find(item => item.path === currentPath);
    return page ? page.title : "Dashboard";
  };

  return (
    <div className={`flex h-screen text-gray-800`}>
      {/* Sidebar */}
      <div className={`${collapsed ? 'w-16' : 'w-64'} bg-gray-100 transition-all duration-300 flex flex-col`}>
        {/* Logo and collapse button */}
        <div className={`flex items-center justify-between p-4 border-gray-200
        `}>
          {!collapsed && <div className="text-xl font-bold"><img src={logo} className='w-36' /></div>}
          <button 
            onClick={() => setCollapsed(!collapsed)} 
            className={`text-gray-500 hover:text-black p-1 rounded-md`}
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-4 px-2 rounded-xl space-y-4">
          {menuItems.map((item) => (
            <MenuItem 
              key={item.path}
              icon={item.icon} 
              title={item.title} 
              path={item.path}
              collapsed={collapsed} 
              active={currentPath === item.path}
            />
          ))}
          
          {/* Logout Item - Special handling */}
          <MenuItem 
            icon={<LogOut size={20} />} 
            title="Logout" 
            collapsed={collapsed}
            onClick={handleLogout}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className='bg-gray-100'>
        <header className={`${
          'bg-white rounded-t-3xl mt-4'
        } py-4 px-12 flex items-center justify-between`}>
          <h1 className={`text-2xl font-semibold text-gray-800`}>
            {getPageTitle()}
          </h1>
          <div className="flex items-center gap-4">
    
            <button className={`p-2
        text-gray-500 hover:text-black
            rounded-full`}>
              <Bell size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center`}>
                <User size={16} />
              </div>
              <span className={`text-sm font-medium text-gray-800`}>
                {user?.firstName} {user?.lastName}
              </span>
            </div>
          </div>
        </header>
        </div>

        {/* Page Content */}
        <main className={`flex-1 overflow-auto p-6 bg-white`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;