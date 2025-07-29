import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  const handlePhoneCall = () => {
    window.open('tel:+79002507665', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/79002507665', '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://yandex.ru/maps/?text=г.Сочи центральный район ул Донская 3/3', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-br from-peniword-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold font-heading mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-peniword-gold to-gold-300 bg-clip-text text-transparent">
              Контакты
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Свяжитесь с нами для консультации и записи на примерку в центре Сочи
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-2 hover:border-peniword-gold transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-peniword-gold to-gold-300 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading text-peniword-black">
                        Телефон
                      </CardTitle>
                      <CardDescription>
                        Звоните в рабочее время
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-peniword-gold mb-4">
                    +7 (900) 250-76-65
                  </p>
                  <Button 
                    className="w-full bg-peniword-gold hover:bg-gold-400 text-black"
                    onClick={handlePhoneCall}
                  >
                    <Icon name="Phone" className="mr-2" size={16} />
                    Позвонить
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-peniword-gold transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-peniword-gold to-gold-300 rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} className="text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading text-peniword-black">
                        WhatsApp
                      </CardTitle>
                      <CardDescription>
                        Быстрая связь в мессенджере
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 mb-4">
                    Напишите нам в WhatsApp для быстрого ответа
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleWhatsApp}
                  >
                    <Icon name="MessageSquare" className="mr-2" size={16} />
                    Написать в WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-peniword-gold transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-peniword-gold to-gold-300 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading text-peniword-black">
                        Адрес
                      </CardTitle>
                      <CardDescription>
                        Центральный район Сочи
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-800 mb-4">
                    г. Сочи, центральный район<br />
                    ул. Донская 3/3
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={handleMapsClick}
                  >
                    <Icon name="Navigation" className="mr-2" size={16} />
                    Показать на карте
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Working Hours & Info */}
            <div className="space-y-6">
              <Card className="border-2 border-peniword-gold">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-peniword-black flex items-center">
                    <Icon name="Clock" className="mr-3 text-peniword-gold" />
                    Режим работы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Понедельник - Пятница</span>
                    <span className="text-peniword-gold font-bold">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Суббота</span>
                    <span className="text-peniword-gold font-bold">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Воскресенье</span>
                    <span className="text-red-500 font-bold">Выходной</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-peniword-black to-gray-900 text-white border-2 border-peniword-gold">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-peniword-gold flex items-center">
                    <Icon name="Star" className="mr-3" />
                    Наши преимущества
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-peniword-gold" size={20} />
                    <span>Опыт более 40 лет</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-peniword-gold" size={20} />
                    <span>Работа с топовыми брендами</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-peniword-gold" size={20} />
                    <span>Превосходное качество</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-peniword-gold" size={20} />
                    <span>Индивидуальный подход</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-peniword-gold" size={20} />
                    <span>Выезд на дом</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-peniword-gold transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-peniword-black flex items-center">
                    <Icon name="Users" className="mr-3 text-peniword-gold" />
                    Целевая аудитория
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="User" size={16} className="text-peniword-gold" />
                      <span>Мужчины</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-peniword-gold" />
                      <span>Женщины</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Baby" size={16} className="text-peniword-gold" />
                      <span>Дети</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Briefcase" size={16} className="text-peniword-gold" />
                      <span>Бизнес</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Hotel" size={16} className="text-peniword-gold" />
                      <span>Гостиницы</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Utensils" size={16} className="text-peniword-gold" />
                      <span>Рестораны</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Building" size={16} className="text-peniword-gold" />
                      <span>Офисы</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Camera" size={16} className="text-peniword-gold" />
                      <span>Студии</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-peniword-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading text-peniword-gold mb-6">
            Мы находимся в центре Сочи
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Удобное расположение в центральном районе города, легкая доступность общественным транспортом
          </p>
          <div className="bg-gray-800 rounded-lg p-8 inline-block">
            <div className="flex items-center justify-center space-x-4 text-lg">
              <Icon name="MapPin" className="text-peniword-gold" size={24} />
              <span className="font-bold">г. Сочи, центральный район, ул. Донская 3/3</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-peniword-gold to-gold-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading text-black mb-6">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Свяжитесь с нами удобным способом для консультации и записи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              onClick={handleWhatsApp}
            >
              <Icon name="MessageCircle" className="mr-2" />
              WhatsApp
            </Button>
            <Button 
              size="lg" 
              className="bg-peniword-black hover:bg-gray-800 text-white px-8 py-3"
              onClick={handlePhoneCall}
            >
              <Icon name="Phone" className="mr-2" />
              Позвонить
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3"
              onClick={handleMapsClick}
            >
              <Icon name="MapPin" className="mr-2" />
              На карте
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}