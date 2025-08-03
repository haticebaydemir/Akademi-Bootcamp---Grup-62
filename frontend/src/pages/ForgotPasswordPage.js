import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MailCheck, Loader, ArrowLeft, Mail } from 'lucide-react';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (value) => {
    if (!value) return 'E-posta adresi gereklidir';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return 'Geçerli bir e-posta adresi girin';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validateEmail(email);
    setError(err);
    if (err) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-complementary flex font-sans overflow-hidden transition-colors duration-300 relative">
      {/* Sol Bölüm - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative z-10">
        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* Logo/Başlık */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl font-extrabold font-poppins text-blue-700 dark:text-blue-400 mb-4 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">
              Şifremi Unuttum
            </h1>
          </div>
          <div className="space-y-3 animate-slide-up">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Kayıtlı e-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.
            </p>
          </div>
          {success ? (
            <div className="flex flex-col items-center gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-200 px-6 py-5 rounded-lg animate-fade-in">
              <MailCheck className="w-8 h-8" />
              <span className="text-lg font-semibold">Sıfırlama bağlantısı e-posta adresinize gönderildi!</span>
              <button
                onClick={() => navigate('/login')}
                className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-base hover:underline transition-all duration-300 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Girişe Dön
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up delay-400">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  E-posta Adresi
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                    <Mail className="w-5 h-5" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={`input-modern w-full border pl-10 ${error ? 'border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400'}`}
                    placeholder="E-posta adresinizi girin"
                    required
                  />
                </div>
                {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-fade-in">{error}</p>}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="btn-modern group flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-500 hover:shadow-xl hover:scale-105"
              >
                {isLoading ? <Loader className="w-5 h-5 animate-spin" /> : null}
                {isLoading ? 'Gönderiliyor...' : 'Sıfırlama Linki Gönder'}
              </button>
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-base hover:underline transition-all duration-300 flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Girişe Dön
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      {/* Sağ Bölüm - İllüstrasyon */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 items-center justify-center p-8 relative overflow-hidden transition-colors duration-300">
        <div className="flex items-center justify-center w-full h-full relative z-10">
          <div className="animate-fade-in-delayed">
            <img 
              src="/images/Student stress-pana.png" 
              alt="Şifre Sıfırlama" 
              className="object-contain max-w-md w-full h-auto drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-500 transform hover:scale-105 dark:filter dark:brightness-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage; 