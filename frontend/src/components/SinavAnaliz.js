import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';

function SinavAnaliz() {
  const [isSystemMenuOpen, setIsSystemMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [examSelection, setExamSelection] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [excelRows, setExcelRows] = useState([]); // Yüklenen Excel verisi

  // Excel dosyasını okuyup tabloyu state'e aktarır
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const rows = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
      setExcelRows(rows);
    };
    reader.readAsArrayBuffer(file);
  };

  // Yüzdelere göre renkli bar
  const getPercentageColor = (percentage) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 80) return 'bg-yellow-400';
    if (percentage >= 70) return 'bg-yellow-500';
    if (percentage >= 60) return 'bg-orange-400';
    if (percentage >= 50) return 'bg-orange-500';
    if (percentage >= 40) return 'bg-red-400';
    if (percentage >= 30) return 'bg-red-500';
    if (percentage >= 20) return 'bg-red-600';
    if (percentage >= 10) return 'bg-red-700';
    return 'bg-red-800';
  };
  const getPercentageBarWidth = (percentage) => Math.max(percentage, 5);

  // Excel'e export fonksiyonu (tabloyu indir)
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const headers = [
      'kitapçık_türü','soruNo','toplamKisi','dogru','yanlis','bos','dogruYuzde','basilanB','basilanC','basilanD','basilanE','analizSonuc','baglantiliSoru','toplamBasari'
    ];
    const excelData = [
      headers,
      ...excelRows.map(row => headers.map(h => row[h])),
    ];
    const ws = XLSX.utils.aoa_to_sheet(excelData);
    XLSX.utils.book_append_sheet(wb, ws, 'Soru Analizi');
    const fileName = `Sinav_Analiz_${new Date().toLocaleDateString('tr-TR').replace(/\./g, '-')}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            <div>
              <h1 className="font-bold text-gray-900">Üniversite</h1>
              <p className="text-sm text-gray-500">Soru Bankası</p>
            </div>
          </div>
          <nav className="space-y-2">
            <div className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
              YÖNETİM
            </div>
            <div>
              <button
                onClick={() => setIsSystemMenuOpen(!isSystemMenuOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <div className="flex items-center space-x-3">
                  <span>📊</span>
                  <span>Sistem Ayarları</span>
                </div>
                <span className={`transform transition-transform ${isSystemMenuOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {isSystemMenuOpen && (
                <div className="ml-8 mt-2 space-y-1">
                  <Link to="/bolumler" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm">
                    <span>○</span>
                    <span>Bölümler</span>
                  </Link>
                  <Link to="/donem-islemleri" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm">
                    <span>○</span>
                    <span>Dönem İşlemleri</span>
                  </Link>
                  <Link to="/dersler" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm">
                    <span>○</span>
                    <span>Dersler</span>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/kullanicilar" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span>👥</span>
              <span>Kullanıcı İşlemleri</span>
            </Link>
            <div className="text-sm font-medium text-gray-400 uppercase tracking-wider mt-8 mb-4">
              ANALİZ
            </div>
            <Link to="/sinav-analiz" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md bg-pink-100 text-pink-600">
              <span>📈</span>
              <span>Sınav Analiz</span>
            </Link>
          </nav>
        </div>
        
      </div>
      {/* Main Content */}
      <div className="ml-64">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                <span>🏠</span>
                <span>/</span>
                <span>Analiz</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Analiz</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">🌙</button>
              <button className="p-2 text-gray-400 hover:text-gray-600">⚙️</button>
              <button className="p-2 text-gray-400 hover:text-gray-600">🔔</button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">U</span>
              </div>
            </div>
          </div>
        </header>
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            {/* Adım adım navigasyon */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-8">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= 1 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    1
                  </div>
                  <span className={`ml-3 text-sm font-medium ${
                    currentStep >= 1 ? 'text-pink-600' : 'text-gray-500'
                  }`}>
                    Sınav Seçimi
                  </span>
                </div>
                <div className="w-16 h-px bg-gray-300"></div>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= 2 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    2
                  </div>
                  <span className={`ml-3 text-sm font-medium ${
                    currentStep >= 2 ? 'text-pink-600' : 'text-gray-500'
                  }`}>
                    Rapor Türleri
                  </span>
                </div>
                <div className="w-16 h-px bg-gray-300"></div>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= 3 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    3
                  </div>
                  <span className={`ml-3 text-sm font-medium ${
                    currentStep >= 3 ? 'text-pink-600' : 'text-gray-500'
                  }`}>
                    Sonuç
                  </span>
                </div>
              </div>
            </div>
            {/* Content Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {currentStep === 1 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Sınav seçimi yapmak ister misiniz?
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="examSelection"
                        value="evet"
                        checked={examSelection === 'evet'}
                        onChange={(e) => setExamSelection(e.target.value)}
                        className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">Evet</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="examSelection"
                        value="hayir"
                        checked={examSelection === 'hayir'}
                        onChange={(e) => setExamSelection(e.target.value)}
                        className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">Hayır</span>
                    </label>
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Excel Dosyası Yükle
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <label className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300 transition-colors">
                        <input
                          type="file"
                          accept=".xlsx"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                        Dosya Seç
                      </label>
                      {selectedFile && (
                        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-md">
                          {selectedFile.name}
                        </span>
                      )}
                      {!selectedFile && (
                        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-md">
                          Lütfen bir Excel dosyası seçiniz.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Soru Analizi
                      </h3>
                    </div>
                    <button
                      onClick={exportToExcel}
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors text-sm"
                    >
                      Excel Olarak İndir
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border px-2 py-2">Kitapçık Türü</th>
                          <th className="border px-2 py-2">Soru No</th>
                          <th className="border px-2 py-2">Toplam Kişi</th>
                          <th className="border px-2 py-2">Doğru</th>
                          <th className="border px-2 py-2">Yanlış</th>
                          <th className="border px-2 py-2">Boş</th>
                          <th className="border px-2 py-2">Doğru %</th>
                          <th className="border px-2 py-2">B Basmış</th>
                          <th className="border px-2 py-2">C Basmış</th>
                          <th className="border px-2 py-2">D Basmış</th>
                          <th className="border px-2 py-2">E Basmış</th>
                          <th className="border px-2 py-2">Analiz Sonuç</th>
                          <th className="border px-2 py-2">Bağlantılı Soru</th>
                          <th className="border px-2 py-2">Toplam Başarı</th>
                        </tr>
                      </thead>
                      <tbody>
                        {excelRows.map((row, idx) => {
                          let basariYuzde = 0;
                          if (typeof row.toplamBasari === 'string') {
                            // "66,00%" gibi
                            basariYuzde = parseFloat(row.toplamBasari.replace(',', '.').replace('%', '')) || 0;
                          } else if (typeof row.toplamBasari === 'number') {
                            // Eğer sayı küçükse (ör: 0.66), % ile çarp
                            basariYuzde = row.toplamBasari < 1 ? row.toplamBasari * 100 : row.toplamBasari;
                          }

                          return (
                            <tr key={idx}>
                              <td className="border px-2 py-2 text-center">{row.kitapçık_türü}</td>
                              <td className="border px-2 py-2 text-center">{row.soruNo}</td>
                              <td className="border px-2 py-2 text-center">{row.toplamKisi}</td>
                              <td className="border px-2 py-2 text-center">{row.dogru}</td>
                              <td className="border px-2 py-2 text-center">{row.yanlis}</td>
                              <td className="border px-2 py-2 text-center">{row.bos}</td>
                              <td className="border px-2 py-2 text-center">{row.dogruYuzde}</td>
                              <td className="border px-2 py-2 text-center">{row.basilanB}</td>
                              <td className="border px-2 py-2 text-center">{row.basilanC}</td>
                              <td className="border px-2 py-2 text-center">{row.basilanD}</td>
                              <td className="border px-2 py-2 text-center">{row.basilanE}</td>
                              <td className="border px-2 py-2 text-center">{row.analizSonuc}</td>
                              <td className="border px-2 py-2 text-center">{row.baglantiliSoru}</td>
                              <td className="border px-2 py-2 text-center">
                                <div className="flex items-center justify-center">
                                  <div
                                    className={`h-4 ${getPercentageColor(basariYuzde)} text-white text-xs flex items-center justify-center font-medium`}
                                    style={{ width: `${getPercentageBarWidth(basariYuzde)}%`, minWidth: '40px' }}
                                  >
                                    {Math.round(basariYuzde)}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {/* Yüzdelik Skala */}
                  <div className="mt-6 flex items-center justify-end">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-600">Başarı Oranı:</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-xs">90-100%</span>
                        <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                        <span className="text-xs">80-89%</span>
                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                        <span className="text-xs">70-79%</span>
                        <div className="w-4 h-4 bg-orange-400 rounded"></div>
                        <span className="text-xs">60-69%</span>
                        <div className="w-4 h-4 bg-orange-500 rounded"></div>
                        <span className="text-xs">50-59%</span>
                        <div className="w-4 h-4 bg-red-400 rounded"></div>
                        <span className="text-xs">40-49%</span>
                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                        <span className="text-xs">30-39%</span>
                        <div className="w-4 h-4 bg-red-600 rounded"></div>
                        <span className="text-xs">20-29%</span>
                        <div className="w-4 h-4 bg-red-700 rounded"></div>
                        <span className="text-xs">10-19%</span>
                        <div className="w-4 h-4 bg-red-800 rounded"></div>
                        <span className="text-xs">0-9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Navigation Buttons */}
              <div className="flex items-center justify-end space-x-4 mt-8">
                {currentStep > 1 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Geri
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={currentStep === 1 && !examSelection}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      currentStep === 1 && !examSelection
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-pink-500 text-white hover:bg-pink-600'
                    }`}
                  >
                    İleri
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                    Tamamla
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SinavAnaliz;
