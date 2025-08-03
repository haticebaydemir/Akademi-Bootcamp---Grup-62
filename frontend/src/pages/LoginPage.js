import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { Eye, EyeOff, Sun, Moon, CheckCircle, AlertCircle, Loader, Save } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showAutoSave, setShowAutoSave] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: '',
    color: ''
  });

  // Load saved form data on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('loginFormData');
    const savedRememberMe = localStorage.getItem('rememberMe');
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedFormData) {
      try {
        const parsedData = JSON.parse(savedFormData);
        setFormData(parsedData);
        
        // Update password strength if password exists
        if (parsedData.password) {
          setPasswordStrength(checkPasswordStrength(parsedData.password));
        }
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
    
    if (savedRememberMe === 'true') {
      setRememberMe(true);
    }
    
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  // Auto-save form data
  useEffect(() => {
    if (formData.username || formData.password) {
      const saveTimeout = setTimeout(() => {
        localStorage.setItem('loginFormData', JSON.stringify(formData));
        setShowAutoSave(true);
        setTimeout(() => setShowAutoSave(false), 2000);
      }, 1000); // Save after 1 second of inactivity

      return () => clearTimeout(saveTimeout);
    }
  }, [formData]);

  // Save remember me preference
  useEffect(() => {
    localStorage.setItem('rememberMe', rememberMe.toString());
  }, [rememberMe]);

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+Enter for login
      if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        const submitEvent = { preventDefault: () => {} };
        handleSubmit(submitEvent);
      }
      
      // Ctrl+S for save (optional)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        localStorage.setItem('loginFormData', JSON.stringify(formData));
        setShowAutoSave(true);
        setTimeout(() => setShowAutoSave(false), 2000);
      }
      
      // Escape to clear form
      if (e.key === 'Escape') {
        e.preventDefault();
        setFormData({ username: '', password: '' });
        setErrors({ username: '', password: '' });
        setPasswordStrength({ score: 0, label: '', color: '' });
        localStorage.removeItem('loginFormData');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [formData]);

  // Password strength checker
  const checkPasswordStrength = (password) => {
    let score = 0;
    let label = '';
    let color = '';

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score === 0) {
      label = 'Çok Zayıf';
      color = 'red';
    } else if (score <= 2) {
      label = 'Zayıf';
      color = 'orange';
    } else if (score <= 3) {
      label = 'Orta';
      color = 'yellow';
    } else if (score <= 4) {
      label = 'Güçlü';
      color = 'lightgreen';
    } else {
      label = 'Çok Güçlü';
      color = 'green';
    }

    return { score, label, color };
  };

  // Real-time validation
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'username':
        if (!value) {
          error = 'Kullanıcı adı gereklidir';
        } else if (value.length < 3) {
          error = 'Kullanıcı adı en az 3 karakter olmalıdır';
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          error = 'Kullanıcı adı sadece harf, rakam ve alt çizgi içerebilir';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Şifre gereklidir';
        } else if (value.length < 6) {
          error = 'Şifre en az 6 karakter olmalıdır';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    // Password strength check
    if (name === 'password') {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const usernameError = validateField('username', formData.username);
    const passwordError = validateField('password', formData.password);
    
    setErrors({
      username: usernameError,
      password: passwordError
    });

    if (usernameError || passwordError) {
      return;
    }

    setIsLoading(true);
    setShowSuccess(false);
    setShowError(false);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/error based on credentials
      if (formData.username === 'admin' && formData.password === 'password123') {
        setShowSuccess(true);
        setShowError(false);
        // Clear saved data on successful login
        localStorage.removeItem('loginFormData');
        // Reset form after success
        setTimeout(() => {
          setFormData({ username: '', password: '' });
          setShowSuccess(false);
          navigate('/dashboard');
        }, 1500);
      } else {
        setShowError(true);
        setErrorMessage('Kullanıcı adı veya şifre hatalı');
        setShowSuccess(false);
      }
    } catch (error) {
      setShowError(true);
      setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
      setShowSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength.color) {
      case 'red': return 'bg-red-500';
      case 'orange': return 'bg-orange-500';
      case 'yellow': return 'bg-yellow-500';
      case 'lightgreen': return 'bg-green-400';
      case 'green': return 'bg-green-500';
      default: return 'bg-gray-300';
    }
  };

  const clearForm = () => {
    setFormData({ username: '', password: '' });
    setErrors({ username: '', password: '' });
    setPasswordStrength({ score: 0, label: '', color: '' });
    localStorage.removeItem('loginFormData');
  };

  // Google Login Handler
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        // Google'dan kullanıcı bilgilerini al
        const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${response.access_token}` },
        }).then(res => res.json());

        console.log('Google Login Success:', userInfo);
        
        // Başarılı giriş mesajı göster
        setShowSuccess(true);
        setShowError(false);
        setErrorMessage('');
        
        // 3 saniye sonra mesajı kapat
        setTimeout(() => {
          setShowSuccess(false);
          navigate('/dashboard');
        }, 1500);
        
        // Burada backend'e kullanıcı bilgilerini gönderebilirsiniz
        // Örnek: await loginWithGoogle(userInfo);
        
      } catch (error) {
        console.error('Google Login Error:', error);
        setShowError(true);
        setErrorMessage('Google ile giriş yapılırken bir hata oluştu');
        setShowSuccess(false);
      }
    },
    onError: (error) => {
      console.error('Google Login Error:', error);
      setShowError(true);
      setErrorMessage('Google ile giriş yapılamadı');
      setShowSuccess(false);
    }
  });

  return (
    <div className="min-h-screen bg-complementary flex font-sans overflow-hidden transition-colors duration-300 relative">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-600"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* Auto-save Indicator */}
      {showAutoSave && (
        <div className="fixed top-20 right-6 z-50 animate-slide-down">
          <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 border border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg shadow-lg">
            <Save className="w-4 h-4" />
            <span className="text-sm">Otomatik kaydedildi</span>
          </div>
        </div>
      )}

      {/* Success/Error Messages */}
      {showSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
          <div className="flex items-center gap-3 bg-green-100 dark:bg-green-900/50 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 px-6 py-3 rounded-lg shadow-lg">
            <CheckCircle className="w-5 h-5" />
            <span>Giriş başarılı! Yönlendiriliyorsunuz...</span>
          </div>
        </div>
      )}

      {showError && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
          <div className="flex items-center gap-3 bg-red-100 dark:bg-red-900/50 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 px-6 py-3 rounded-lg shadow-lg">
            <AlertCircle className="w-5 h-5" />
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      {/* Sol Bölüm - Giriş Formu */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative z-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 dark:bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 dark:bg-purple-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* Logo */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl font-extrabold font-poppins text-blue-700 dark:text-blue-400 mb-4 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">
              ÜNİVERSİTE SORU HAVUZU
            </h1>
          </div>
          
          {/* Başlık */}
          <div className="space-y-3 animate-slide-up">
            <h2 className="text-2xl font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
              Hoş Geldiniz
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300">
              Akademik Başarınız İçin Güvenilir Kaynak
            </p>
          </div>
          
          {/* Sosyal Giriş */}
          <div className="animate-slide-up delay-200">
            <button 
              onClick={() => googleLogin()}
              className="group w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span className="text-gray-700 dark:text-gray-200 text-sm font-medium group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">Google ile Giriş Yap</span>
            </button>
          </div>
          
          {/* Ayırıcı */}
          <div className="relative animate-slide-up delay-300">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">veya e-posta ile giriş yapın</span>
            </div>
          </div>
          
          {/* Giriş Formu */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up delay-400">
            <div className="space-y-2 group">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Kullanıcı Adı
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`input-modern w-full border ${
                    errors.username 
                      ? 'border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400'
                  }`}
                  placeholder="Kullanıcı adınızı girin"
                  required
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-fade-in">
                    {errors.username}
                  </p>
                )}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
            
            <div className="space-y-2 group">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Şifre
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`input-modern w-full pr-12 border ${
                    errors.password 
                      ? 'border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400'
                  }`}
                  placeholder="Şifrenizi girin"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:scale-110 transition-all duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-fade-in">
                    {errors.password}
                  </p>
                )}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2 animate-fade-in">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-600 dark:text-gray-400">Şifre gücü:</span>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      passwordStrength.color === 'red' ? 'text-red-600 dark:text-red-400' :
                      passwordStrength.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                      passwordStrength.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                      passwordStrength.color === 'lightgreen' ? 'text-green-600 dark:text-green-400' :
                      'text-green-600 dark:text-green-400'
                    }`}>
                      {passwordStrength.label}
                    </span>
                  </div>
                  <div className={`h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${getPasswordStrengthColor()}`}>
                    <div className="h-full rounded-full" style={{ width: `${passwordStrength.score * 20}%` }}></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:checked:bg-blue-600"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Beni Hatırla
                </label>
              </div>
              <button 
                type="button" 
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/forgot-password')}
              >
                Şifremi Unuttum?
              </button>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 transform hover:scale-105"
            >
              {isLoading ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                <CheckCircle className="w-5 h-5" />
              )}
              {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>
          {/* Demo Credentials and Signup Link */}
          <div className="text-center animate-slide-up delay-600">
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">Demo Giriş Bilgileri:</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Kullanıcı: <span className="font-mono">admin</span> | Şifre: <span className="font-mono">password123</span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-gray-600 dark:text-gray-400 text-sm">Hesabınız yok mu? </span>
              <button 
                onClick={() => navigate('/signup')}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm hover:underline transition-all duration-300 transform hover:scale-105"
              >
                Hesap Oluşturun
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Sağ Bölüm - İllüstrasyon */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 items-center justify-center p-8 relative overflow-hidden transition-colors duration-300">
        <div className="flex items-center justify-center w-full h-full relative z-10">
          <div className="animate-fade-in-delayed">
            <img 
              src="/images/Student stress-pana.png" 
              alt="Yorgun Öğrenci" 
              className="object-contain max-w-md w-full h-auto drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-500 transform hover:scale-105 dark:filter dark:brightness-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;