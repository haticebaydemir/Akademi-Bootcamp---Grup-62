import React, { useState } from 'react';
import Layout from './Layout';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('haftalık');

  const stats = [
    {
      title: 'Toplam Soru',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      icon: '📄',
      color: 'bg-blue-500'
    },
    {
      title: 'Aktif Kullanıcı',
      value: '1,234',
      change: '+8%',
      changeType: 'positive',
      icon: '👥',
      color: 'bg-green-500'
    },
    {
      title: 'Başarı Oranı',
      value: '87%',
      change: '+5%',
      changeType: 'positive',
      icon: '🎯',
      color: 'bg-purple-500'
    },
    {
      title: 'Ortalama Süre',
      value: '2.4dk',
      change: '-3%',
      changeType: 'negative',
      icon: '⏰',
      color: 'bg-orange-500'
    }
  ];

  const recentActivities = [
    { id: 1, action: 'Yeni soru eklendi', user: 'Dr. Ahmet Yılmaz', time: '2 dakika önce', type: 'question' },
    { id: 2, action: 'Sınav analizi tamamlandı', user: 'Prof. Fatma Demir', time: '15 dakika önce', type: 'analysis' },
    { id: 3, action: 'Kullanıcı kaydı', user: 'Öğr. Gör. Mehmet Kaya', time: '1 saat önce', type: 'user' },
    { id: 4, action: 'Soru güncellendi', user: 'Dr. Ayşe Özkan', time: '2 saat önce', type: 'update' }
  ];

  const chartData = [
    { month: 'Ocak', sorular: 120, kullanicilar: 45 },
    { month: 'Şubat', sorular: 150, kullanicilar: 52 },
    { month: 'Mart', sorular: 180, kullanicilar: 60 },
    { month: 'Nisan', sorular: 220, kullanicilar: 75 },
    { month: 'Mayıs', sorular: 280, kullanicilar: 85 },
    { month: 'Haziran', sorular: 320, kullanicilar: 95 }
  ];

  return (
    <Layout pageTitle="Dashboard">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                {stat.icon}
              </div>
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Aylık İstatistikler</h3>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="haftalık">Haftalık</option>
                <option value="aylık">Aylık</option>
                <option value="yıllık">Yıllık</option>
              </select>
            </div>
            
            {/* Simple Chart */}
            <div className="space-y-4">
              {chartData.map((data, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 w-16">
                    {data.month}
                  </span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(data.sorular / 320) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white w-16 text-right">
                    {data.sorular}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Son Aktiviteler</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                  activity.type === 'question' ? 'bg-blue-500' :
                  activity.type === 'analysis' ? 'bg-green-500' :
                  activity.type === 'user' ? 'bg-purple-500' : 'bg-orange-500'
                }`}>
                  {activity.type === 'question' ? '📄' :
                   activity.type === 'analysis' ? '📊' :
                   activity.type === 'user' ? '👤' : '✏️'}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard; 