import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Контакты', path: '/contacts' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-peniword-black/95 backdrop-blur-sm border-b border-peniword-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-peniword-gold to-gold-300 rounded-full flex items-center justify-center">
              <Icon name="Scissors" size={20} className="text-black" />
            </div>
            <span className="text-2xl font-bold font-heading text-peniword-gold">
              PENIWORD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-peniword-gold ${
                  isActive(item.path)
                    ? 'text-peniword-gold border-b-2 border-peniword-gold pb-1'
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="bg-peniword-gold hover:bg-gold-400 text-black font-semibold"
              onClick={() => window.open('https://wa.me/79002507665', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" size={16} />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-peniword-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-peniword-black border-t border-peniword-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-peniword-gold bg-peniword-gold/10'
                      : 'text-white hover:text-peniword-gold hover:bg-peniword-gold/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-peniword-gold hover:bg-gold-400 text-black font-semibold"
                  onClick={() => {
                    window.open('https://wa.me/79002507665', '_blank');
                    setIsOpen(false);
                  }}
                >
                  <Icon name="MessageCircle" className="mr-2" size={16} />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}