import React, { useState } from 'react';
import Layout from './Layout';

function DonemIslemleri() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPeriod, setNewPeriod] = useState({
    educationYear: '',
    periodName: '',
    status: 'Aktif'
  });
  const [selectedPeriods, setSelectedPeriods] = useState([]);

  const periodOptions = [
    { value: 'Güz', label: 'Güz Dönemi' },
    { value: 'Bahar', label: 'Bahar Dönemi' },
    { value: 'Yaz', label: 'Yaz Dönemi' }
  ];

  const [periods] = useState([
    {
      id: 1,
      educationYear: '2024-2025',
      periodName: 'Güz',
      status: 'Aktif'
    },
    {
      id: 2,
      educationYear: '2024-2025',
      periodName: 'Bahar',
      status: 'Aktif'
    }
  ]);

  const handleNewPeriodChange = (field, value) => {
    setNewPeriod(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePeriodToggle = (period) => {
    setSelectedPeriods(prev => {
      if (prev.includes(period)) {
        return prev.filter(p => p !== period);
      } else {
        return [...prev, period];
      }
    });
  };

  const removePeriod = (periodToRemove) => {
    setSelectedPeriods(prev => prev.filter(p => p !== periodToRemove));
  };

  const handleAddPeriod = () => {
    console.log('Yeni dönem ekleniyor:', {
      educationYear: newPeriod.educationYear,
      periods: selectedPeriods,
      status: newPeriod.status
    });
    setIsModalOpen(false);
    setNewPeriod({
      educationYear: '',
      periodName: '',
      status: 'Aktif'
    });
    setSelectedPeriods([]);
  };

  const filteredPeriods = periods.filter(period =>
    period.educationYear.toLowerCase().includes(searchTerm.toLowerCase()) ||
    period.periodName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout pageTitle="Dönem İşlemleri">
      <div className="max-w-7xl mx-auto">
        {/* Header with Search and Add Button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Dönem ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <select
              value={recordsPerPage}
              onChange={(e) => setRecordsPerPage(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value={10}>10 kayıt</option>
              <option value={25}>25 kayıt</option>
              <option value={50}>50 kayıt</option>
            </select>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 font-medium transition-all duration-200"
          >
            + Yeni Dönem
          </button>
        </div>

        {/* Periods Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Eğitim Yılı
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Dönem Adı
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Durum
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredPeriods.map((period) => (
                  <tr key={period.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {period.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {period.educationYear}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {period.periodName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        period.status === 'Aktif' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {period.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                          Düzenle
                        </button>
                        <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                          Sil
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Period Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Yeni Dönem Ekle
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Eğitim Yılı
                  </label>
                  <input
                    type="text"
                    value={newPeriod.educationYear}
                    onChange={(e) => handleNewPeriodChange('educationYear', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="2024-2025"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Durum
                  </label>
                  <select
                    value={newPeriod.status}
                    onChange={(e) => handleNewPeriodChange('status', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Pasif">Pasif</option>
                  </select>
                </div>
              </div>

              {/* Period Selection */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Dönem Seçimi
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mevcut Dönemler</h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {periodOptions.map((period) => (
                        <button
                          key={period.value}
                          onClick={() => handlePeriodToggle(period)}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                        >
                          {period.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Seçilen Dönemler</h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {selectedPeriods.map((period) => (
                        <div key={period.value} className="flex items-center justify-between px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                          <span className="text-sm text-blue-800 dark:text-blue-200">{period.label}</span>
                          <button
                            onClick={() => removePeriod(period)}
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end space-x-3 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
                >
                  İptal
                </button>
                <button
                  onClick={handleAddPeriod}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 font-medium transition-all duration-200"
                >
                  Dönem Ekle
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default DonemIslemleri;
