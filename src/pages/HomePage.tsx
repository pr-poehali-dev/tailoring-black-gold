import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const services = [
  { name: 'Пошив мужской одежды', description: 'Костюмы, рубашки, брюки по индивидуальным меркам', icon: 'User', href: '/services/mens-clothing' },
  { name: 'Пошив женской одежды', description: 'Платья, юбки, блузы высокого качества', icon: 'Users', href: '/services/womens-clothing' },
  { name: 'Пошив платьев', description: 'Вечерние, коктейльные, повседневные платья', icon: 'Heart', href: '/services/dresses' },
  { name: 'Пошив брюк', description: 'Классические, зауженные, широкие брюки', icon: 'ShirtIcon', href: '/services/pants' },
  { name: 'Пошив рубашек', description: 'Деловые и повседневные рубашки на заказ', icon: 'Shirt', href: '/services/shirts' },
  { name: 'Пошив вечернего платья', description: 'Эксклюзивные платья для особых случаев', icon: 'Crown', href: '/services/evening-dresses' },
  { name: 'Ремонт дорогой одежды', description: 'Профессиональная реставрация премиум вещей', icon: 'Wrench', href: '/services/luxury-repair' },
  { name: 'Пошив костюма на заказ', description: 'Индивидуальные мужские и женские костюмы', icon: 'Briefcase', href: '/services/custom-suits' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-peniword-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-peniword-gold to-gold-300 bg-clip-text text-transparent">
              PENIWORD
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Элегантное ателье в центре Сочи с 40-летним опытом создания эксклюзивной одежды
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-peniword-gold hover:bg-gold-400 text-black font-semibold px-8 py-3">
              <Icon name="Phone" className="mr-2" />
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="border-peniword-gold text-peniword-gold hover:bg-peniword-gold hover:text-black px-8 py-3">
              <Icon name="MapPin" className="mr-2" />
              Наше расположение
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-peniword-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-peniword-black mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр швейных услуг от пошива эксклюзивной одежды до профессионального ремонта
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-peniword-gold cursor-pointer h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-peniword-gold to-gold-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={service.icon as any} size={32} className="text-black" />
                    </div>
                    <CardTitle className="text-lg font-heading text-peniword-black">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-peniword-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-heading mb-6">
              40 лет мастерства в центре Сочи
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Мы создаем уникальную одежду, работая с топовыми брендами и обеспечивая превосходное качество каждого изделия.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Icon name="CheckCircle" className="text-peniword-gold mr-3" />
                <span>Опыт более 40 лет</span>
              </li>
              <li className="flex items-center">
                <Icon name="CheckCircle" className="text-peniword-gold mr-3" />
                <span>Работа с топовыми брендами</span>
              </li>
              <li className="flex items-center">
                <Icon name="CheckCircle" className="text-peniword-gold mr-3" />
                <span>Превосходное качество</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img 
              src="/img/5ed9b1db-9a6e-4e4a-85eb-31ed193ac851.jpg" 
              alt="Ателье PENIWORD" 
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-peniword-gold to-gold-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading text-black mb-6">
            Готовы создать уникальную одежду?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Свяжитесь с нами для консультации и записи на примерку
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-peniword-black hover:bg-gray-800 text-white px-8 py-3"
              onClick={() => window.open('https://wa.me/79002507665', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" />
              WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
              <Icon name="Phone" className="mr-2" />
              +7 (900) 250-76-65
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}