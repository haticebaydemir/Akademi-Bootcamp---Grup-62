import React, { useState } from 'react';
import Layout from './Layout';

function SinavOlusturma() {
  const [examData, setExamData] = useState({
    name: '',
    email: '',
    operations: ''
  });

  const [students] = useState([
    {
      id: 1,
      name: 'Emma Adams',
      role: 'Web Developer',
      email: 'adams@gmail.com',
      isSelected: true
    },
    {
      id: 2,
      name: 'Olivia Allen',
      role: 'Web Designer', 
      email: 'allen@gmail.com',
      isSelected: true
    },
    {
      id: 3,
      name: 'Isabella Anderson',
      role: 'UX/UI Designer',
      email: 'anderson@gmail.com',
      isSelected: false
    }
  ]);

  const [selectedStudents, setSelectedStudents] = useState([1, 2]);

  const toggleStudentSelection = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter(id => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  const handleInputChange = (field, value) => {
    setExamData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Layout pageTitle="Sınav Oluşturma">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Exam Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Sınav Bilgileri</h3>
              
                <div className="space-y-6">
                  <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sınav Adı
                    </label>
                    <input
                      type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      value={examData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Sınav adını girin..."
                    />
                  </div>

                  <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    E-posta
                    </label>
                    <input
                      type="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      value={examData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="E-posta adresini girin..."
                    />
                  </div>

                  <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      İşlemler
                    </label>
                    <textarea
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      rows="4"
                      value={examData.operations}
                      onChange={(e) => handleInputChange('operations', e.target.value)}
                    placeholder="İşlem detaylarını girin..."
                    />
                  </div>

                <div className="flex space-x-3">
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 font-medium transition-all duration-200">
                    Sınav Oluştur
                    </button>
                  <button className="px-6 py-2 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors">
                    İptal
                    </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Student Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Öğrenci Seçimi</h3>
              
              <div className="space-y-4">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-600 rounded-md">
                    <input
                      type="checkbox"
                      id={`student-${student.id}`}
                      checked={selectedStudents.includes(student.id)}
                      onChange={() => toggleStudentSelection(student.id)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                    />
                    <div className="flex-1">
                      <label htmlFor={`student-${student.id}`} className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer">
                        {student.name}
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{student.role}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{student.email}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <span className="font-medium">{selectedStudents.length}</span> öğrenci seçildi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SinavOlusturma;
