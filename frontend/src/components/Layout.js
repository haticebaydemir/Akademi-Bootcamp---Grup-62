import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Layout = ({ children, pageTitle = "Soru Editörü" }) => {
  const [isSystemMenuOpen, setIsSystemMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // SVG İkonlar - Görseldeki birebir aynı
  const SettingsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  );

  const UsersIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );

  const BarChartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V10"/>
      <path d="M18 20V4"/>
      <path d="M6 20v-6"/>
    </svg>
  );

  // Sınav İşlemleri İkonu
  const ExamIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10,9 9,9 8,9"/>
    </svg>
  );

  // Dark/Light Mode Toggle İkonu - Görseldeki gibi
  const DarkModeToggle = () => (
    <div className="w-8 h-8 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </div>
  );

  // 3D Altın Çan İkonu - Görseldeki gibi
  const BellIcon = () => (
    <div className="w-8 h-8 bg-white border-2 border-blue-500 rounded-lg flex items-center justify-center shadow-lg">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    </div>
  );

  // Profil Toggle İkonu - Diğer ikonlarla aynı stil
  const UserAvatar = () => (
    <div className="w-8 h-8 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center shadow-lg">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    </div>
  );

  const navigationItems = [
    {
      section: 'YÖNETİM',
      items: [
        {
          name: 'Sistem Ayarları',
          icon: <SettingsIcon />,
          path: '/dashboard',
          hasSubmenu: true,
          subItems: [
            { name: 'Bölümler', path: '/dashboard/bolumler' },
            { name: 'Dönem İşlemleri', path: '/dashboard/donem-islemleri' },
            { name: 'Dersler', path: '/dashboard/dersler' }
          ]
        },
        {
          name: 'Kullanıcı İşlemleri',
          icon: <UsersIcon />,
          path: '/dashboard/kullanicilar'
        }
      ]
    },
    {
      section: 'SINAV İŞLEMLERİ',
      items: [
        {
          name: 'Soru Editörü',
          icon: <ExamIcon />,
          path: '/dashboard/soru-editoru'
        }
      ]
    },
    {
      section: 'ANALİZ',
      items: [
        {
          name: 'Sınav Analiz',
          icon: <BarChartIcon />,
          path: '/dashboard/sinav-analiz'
        }
      ]
    }
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="p-6">
          {/* Logo and Title - Görseldeki tasarım */}
          <div className="mb-8">
            <h1 className={`font-bold text-xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} leading-tight`}>
              ÜNİVERSİTE SORU<br />
              HAVUZU
            </h1>
            <div className="flex items-center mt-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                Çevrimiçi
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            {navigationItems.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className={`text-xs font-medium uppercase tracking-wider mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {section.section}
                </div>
                <div className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.hasSubmenu ? (
                        <div>
                          <button
                            onClick={() => setIsSystemMenuOpen(!isSystemMenuOpen)}
                            className={`flex items-center justify-between w-full px-3 py-2 rounded-md transition-colors ${
                              isDarkMode 
                                ? 'text-gray-300 hover:bg-gray-700' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-gray-400">{item.icon}</span>
                              <span>{item.name}</span>
                            </div>
                            <span className={`transform transition-transform ${isSystemMenuOpen ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          
                          {isSystemMenuOpen && (
                            <div className="ml-8 mt-2 space-y-1">
                              {item.subItems.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                                    location.pathname === subItem.path
                                      ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700')
                                      : (isDarkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50')
                                  }`}
                                >
                                  <span>○</span>
                                  <span>{subItem.name}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                            location.pathname === item.path
                              ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700')
                              : (isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100')
                          }`}
                        >
                          <span className="text-gray-400">{item.icon}</span>
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4`}>
          <div className="flex items-center justify-between">
            <div>
              <div className={`flex items-center space-x-2 text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <span>🏠</span>
                <span>/</span>
                <span>{pageTitle}</span>
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {pageTitle}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Uzantılar
              </span>
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <DarkModeToggle />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                <BellIcon />
              </button>
              <UserAvatar />
              <button 
                onClick={handleLogout}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md' 
                    : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16,17 21,12 16,7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  <span>Çıkış Yap</span>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className={`p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;