import React, { useState } from 'react';
import Layout from './Layout';

const SoruEditoru = () => {
  const [questionText, setQuestionText] = useState('');
  const [difficulty, setDifficulty] = useState('Kolay');
  const [source, setSource] = useState('');
  const [answers, setAnswers] = useState(['']);
  const [period, setPeriod] = useState('Güz Dönemi');
  const [week, setWeek] = useState('6. Hafta');
  const [selectedDepartmentOutcomes, setSelectedDepartmentOutcomes] = useState([]);
  const [selectedCourseOutcomes, setSelectedCourseOutcomes] = useState([]);

  const departmentOutcomes = [
    'Meslek profesyoneli doğrultusunda uygulamaları planlama',
    'Sağlıkla ilgili açıklamaları proje ve diğer etkinlikler kayıt',
    'Hasta bakım süreçlerini yönetme',
    'Tıbbi cihazları kullanma becerisi'
  ];

  const courseOutcomes = [
    'İnsan vücudunun fizyolojik yapılarını ayırt etmek',
    'Solunum sistemi fizyolojisini ayırt etmek',
    'Dolaşım sisteminin fizyolojisini ayırt etmek',
    'Sinir sisteminin fizyolojisini ayırt etmek'
  ];

  const addAnswer = () => {
    setAnswers([...answers, '']);
  };

  const updateAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const removeAnswer = (index) => {
    if (answers.length > 1) {
      setAnswers(answers.filter((_, i) => i !== index));
    }
  };

  const toggleDepartmentOutcome = (outcome) => {
    if (selectedDepartmentOutcomes.includes(outcome)) {
      setSelectedDepartmentOutcomes(selectedDepartmentOutcomes.filter(item => item !== outcome));
    } else {
      setSelectedDepartmentOutcomes([...selectedDepartmentOutcomes, outcome]);
    }
  };

  const toggleCourseOutcome = (outcome) => {
    if (selectedCourseOutcomes.includes(outcome)) {
      setSelectedCourseOutcomes(selectedCourseOutcomes.filter(item => item !== outcome));
    } else {
      setSelectedCourseOutcomes([...selectedCourseOutcomes, outcome]);
    }
  };

  const stats = [
    {
      title: 'Toplam Soru',
      value: '1,247',
      change: '+12% bu ay',
      changeType: 'positive',
      icon: '📄'
    },
    {
      title: 'Aktif Soru',
      value: '892',
      change: '+8% bu hafta',
      changeType: 'positive',
      icon: '✅'
    },
    {
      title: 'Ortalama Süre',
      value: '2.4dk',
      change: '-5% geçen ay',
      changeType: 'negative',
      icon: '⏰'
    },
    {
      title: 'Başarı Oranı',
      value: '87%',
      change: '+3% bu dönem',
      changeType: 'positive',
      icon: '🎯'
    }
  ];

  return (
    <Layout>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">{stat.icon}</div>
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
        {/* Left Column - Question Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Question Area */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl">❓</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Soru Alanı</h3>
            </div>

            <div className="space-y-6">
              {/* Question Text */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Soru Metni *
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  rows="4"
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder="Soru metnini buraya yazın..."
                />
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Soru Zorluğu *
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="Kolay">Kolay</option>
                  <option value="Orta">Orta</option>
                  <option value="Zor">Zor</option>
                </select>
              </div>

              {/* Source */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Kaynak
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="Kaynak bilgisi..."
                />
              </div>
            </div>
          </div>

          {/* Answers */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl">✅</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cevaplar</h3>
            </div>

            <div className="space-y-4">
              {answers.map((answer, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={answer}
                    onChange={(e) => updateAnswer(index, e.target.value)}
                    placeholder="Cevap seçeneğini buraya yazın..."
                  />
                  {answers.length > 1 && (
                    <button
                      onClick={() => removeAnswer(index)}
                      className="p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}

              <button
                onClick={addAnswer}
                className="text-blue-500 dark:text-blue-400 text-sm hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-1"
              >
                <span>+</span>
                <span>Yeni Şık Ekle</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 font-medium transition-all duration-200 flex items-center space-x-2">
              <span>💾</span>
              <span>Değişiklikleri Kaydet</span>
            </button>
            <button className="px-6 py-2 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors">
              Geri Dön
            </button>
          </div>
        </div>

        {/* Right Column - Settings */}
        <div className="space-y-6">
          {/* Achievement Levels */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Kazanım Belirleme</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Bölüm Kazanımları
                </label>
                <div className="space-y-2">
                  {departmentOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id={`dept-${index}`}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                        checked={selectedDepartmentOutcomes.includes(outcome)}
                        onChange={() => toggleDepartmentOutcome(outcome)}
                      />
                      <label htmlFor={`dept-${index}`} className="text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
                        {outcome}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Ders Kazanımları
                </label>
                <div className="space-y-2">
                  {courseOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id={`course-${index}`}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                        checked={selectedCourseOutcomes.includes(outcome)}
                        onChange={() => toggleCourseOutcome(outcome)}
                      />
                      <label htmlFor={`course-${index}`} className="text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
                        {outcome}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Period Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Dönem Ayarları</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Dönem Seçimi
                </label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                >
                  <option value="Güz Dönemi">Güz Dönemi</option>
                  <option value="Bahar Dönemi">Bahar Dönemi</option>
                  <option value="Yaz Dönemi">Yaz Dönemi</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hafta Seçimi
                </label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={week}
                  onChange={(e) => setWeek(e.target.value)}
                >
                  {Array.from({length: 16}, (_, i) => (
                    <option key={i} value={`${i + 1}. Hafta`}>{i + 1}. Hafta</option>
                  ))}
                </select>
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400">
                Yaz ve kış hafta dönemsel varsayımlar için kuş hd hafayın seçin.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SoruEditoru; 