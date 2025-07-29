import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-peniword-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-peniword-gold to-gold-300 rounded-full flex items-center justify-center">
                <Icon name="Scissors" size={20} className="text-black" />
              </div>
              <span className="text-2xl font-bold font-heading text-peniword-gold">
                PENIWORD
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Элегантное ателье в центре Сочи с 40-летним опытом создания эксклюзивной одежды. 
              Работаем с топовыми брендами и гарантируем превосходное качество каждого изделия.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open('https://wa.me/79002507665', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={16} />
                WhatsApp
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-peniword-gold text-peniword-gold hover:bg-peniword-gold hover:text-black"
                onClick={() => window.open('tel:+79002507665', '_self')}
              >
                <Icon name="Phone" className="mr-2" size={16} />
                Позвонить
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-heading text-peniword-gold mb-4">
              Навигация
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-peniword-gold transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-peniword-gold transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-peniword-gold transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-heading text-peniword-gold mb-4">
              Контакты
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-peniword-gold" />
                <span className="text-gray-300">+7 (900) 250-76-65</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-peniword-gold" />
                <span className="text-gray-300">
                  г. Сочи, ул. Донская 3/3
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-peniword-gold" />
                <span className="text-gray-300">
                  Пн-Пт: 9:00-18:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} PENIWORD. Все права защищены.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-gray-500">
              Создано с помощью poehali.dev
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}