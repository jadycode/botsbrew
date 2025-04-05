import React, { useState } from 'react';
import { Bot, Globe, GraduationCap, ChevronDown, Mail, Phone, Zap, Rocket, Menu, Instagram } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16 relative">
          <div className="flex items-center">
            <img src="https://jadycode.github.io/botsbrew/dist/assets/logo.png" alt="Botsbrew AI Logo" className="h-8 w-auto" />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-blue-400 transition">Қызметтер</a>
            <a href="#pricing" className="hover:text-blue-400 transition">Бағалар</a>
            <a href="#about" className="hover:text-blue-400 transition">Біз туралы</a>
            <a href="#contact" className="hover:text-blue-400 transition">Байланыс</a>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 w-48 bg-gray-800 rounded-lg shadow-lg py-2 md:hidden">
              <a href="#services" className="block px-4 py-2 hover:bg-gray-700 transition">Қызметтер</a>
              <a href="#pricing" className="block px-4 py-2 hover:bg-gray-700 transition">Бағалар</a>
              <a href="#about" className="block px-4 py-2 hover:bg-gray-700 transition">Біз туралы</a>
              <a href="#contact" className="block px-4 py-2 hover:bg-gray-700 transition">Байланыс</a>
            </div>
          )}
        </nav>
        
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Жасанды Интеллект арқылы бизнесіңізді дамытыңыз
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Біз заманауи AI технологияларын қолдана отырып, сіздің бизнесіңізді жаңа деңгейге көтереміз
          </p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition">
            Кеңес алу
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Біздің қызметтер</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-700 p-6 rounded-xl">
              <Bot className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Чатбот жасау</h3>
              <p className="text-gray-300">Сіздің бизнесіңізге арналған ақылды чатбот жасау және енгізу</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <Bot className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Агент әзірлеу</h3>
              <p className="text-gray-300">Күрделі тапсырмаларды автоматтандыруға арналған AI агенттерін жасау</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <Globe className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Веб-сайт жасау</h3>
              <p className="text-gray-300">Заманауи және жауапты веб-сайттарды әзірлеу</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <GraduationCap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI курстары</h3>
              <p className="text-gray-300">AI технологияларын үйрену бойынша онлайн курстар</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Курс бағалары</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-700 p-8 rounded-xl border-2 border-blue-400">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-12 h-12 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-bold">Fast Start</h3>
                  <p className="text-gray-300">n8n және чатботтар арқылы табыс табу</p>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                  <span>n8n платформасын толық үйрену</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                  <span>Чатбот жасау және баптау</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                  <span>Бизнес автоматтандыру негіздері</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-3xl font-bold mb-4">100 000 ₸</div>
                <a href="#contact" className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition">
                  Қатысу
                </a>
              </div>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl border-2 border-blue-400">
              <div className="flex items-center gap-4 mb-6">
                <Rocket className="w-12 h-12 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-bold">Professional Start</h3>
                  <p className="text-gray-300">Толық автоматтандыру және SaaS жасау</p>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                  <span>Fast Start курсының барлық мазмұны</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                  <span>SaaS жобаларын әзірлеу</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                  <span>Күрделі бизнес процестерді автоматтандыру</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-3xl font-bold mb-4">550 000 ₸</div>
                <a href="#contact" className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition">
                  Қатысу
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Біз туралы</h2>
            <p className="text-xl text-gray-300 mb-6">
              Біз AI технологияларын қазақстандық бизнеске енгізуде көшбасшымыз. Біздің команда тәжірибелі AI мамандары мен әзірлеушілерден тұрады.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Біздің команда" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Байланысқа шығу</h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-gray-700 p-8 rounded-xl">
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>business@botsbrew.ai</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+7 (708) 682-35-95</span>
                </div>
                <a 
                  href="https://wa.me/77086823595" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-blue-400 transition"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="text-lg">WhatsApp</span>
                </a>
                <a 
                  href="https://instagram.com/botsbrew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-blue-400 transition"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="text-lg">@botsbrew</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Botsbrew AI. Барлық құқықтар қорғалған.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;