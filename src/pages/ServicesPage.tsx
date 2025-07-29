import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const allServices = [
  {
    category: 'Пошив мужской одежды',
    services: [
      { name: 'Костюмы на заказ', price: 'от 15 000 ₽', description: 'Классические и современные костюмы по индивидуальным меркам' },
      { name: 'Рубашки', price: 'от 3 500 ₽', description: 'Деловые и повседневные рубашки из качественных тканей' },
      { name: 'Брюки', price: 'от 4 000 ₽', description: 'Классические, зауженные и широкие брюки' }
    ]
  },
  {
    category: 'Пошив женской одежды',
    services: [
      { name: 'Платья', price: 'от 5 000 ₽', description: 'Повседневные, деловые и коктейльные платья' },
      { name: 'Юбки', price: 'от 2 500 ₽', description: 'Все виды юбок: прямые, А-силуэт, плиссированные' },
      { name: 'Блузы', price: 'от 3 000 ₽', description: 'Элегантные блузы для офиса и особых случаев' }
    ]
  },
  {
    category: 'Эксклюзивные услуги',
    services: [
      { name: 'Вечерние платья', price: 'от 12 000 ₽', description: 'Роскошные платья для торжественных мероприятий' },
      { name: 'Свадебные платья', price: 'от 20 000 ₽', description: 'Уникальные свадебные наряды по индивидуальному дизайну' },
      { name: 'Костюмы на заказ', price: 'от 18 000 ₽', description: 'Премиальные костюмы из элитных тканей' }
    ]
  },
  {
    category: 'Ремонт и подгонка',
    services: [
      { name: 'Ремонт дорогой одежды', price: 'от 1 500 ₽', description: 'Профессиональная реставрация люксовых брендов' },
      { name: 'Подгонка по фигуре', price: 'от 800 ₽', description: 'Корректировка размера и посадки одежды' },
      { name: 'Укоротить брюки', price: 'от 500 ₽', description: 'Профессиональная подгонка длины брюк' },
      { name: 'Ремонт молнии', price: 'от 300 ₽', description: 'Замена и ремонт молний любой сложности' },
      { name: 'Ремонт джинсов', price: 'от 400 ₽', description: 'Восстановление и подгонка джинсовой одежды' }
    ]
  },
  {
    category: 'Домашний текстиль',
    services: [
      { name: 'Постельное белье', price: 'от 2 000 ₽', description: 'Комплекты постельного белья из натуральных тканей' },
      { name: 'Простыни', price: 'от 800 ₽', description: 'Простыни любых размеров и тканей' },
      { name: 'Наволочки', price: 'от 300 ₽', description: 'Декоративные и спальные наволочки' },
      { name: 'Шторы', price: 'от 1 500 ₽', description: 'Пошив штор любой сложности и дизайна' }
    ]
  },
  {
    category: 'Специальные услуги',
    services: [
      { name: 'Кастомизация одежды', price: 'от 1 000 ₽', description: 'Индивидуальная доработка и украшение одежды' },
      { name: 'Создание лекал', price: 'от 2 500 ₽', description: 'Разработка выкроек для массового производства' },
      { name: 'Выезд на дом', price: '+500 ₽', description: 'Услуги пошива с выездом к клиенту' },
      { name: 'Униформа', price: 'от 3 000 ₽', description: 'Корпоративная одежда для офисов, отелей, ресторанов' }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-br from-peniword-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold font-heading mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-peniword-gold to-gold-300 bg-clip-text text-transparent">
              Наши услуги
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Полный спектр швейных услуг высочайшего качества с 40-летним опытом работы
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {allServices.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-heading text-peniword-black mb-4">
                  {category.category}
                </h2>
                <Separator className="w-32 mx-auto bg-peniword-gold h-1" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-peniword-gold">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg font-heading text-peniword-black group-hover:text-peniword-gold transition-colors">
                          {service.name}
                        </CardTitle>
                        <span className="text-lg font-bold text-peniword-gold">
                          {service.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {service.description}
                      </CardDescription>
                      <Button 
                        className="w-full bg-peniword-gold hover:bg-gold-400 text-black"
                        onClick={() => window.open('https://wa.me/79002507665', '_blank')}
                      >
                        <Icon name="MessageCircle" className="mr-2" size={16} />
                        Заказать услугу
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-peniword-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-6">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Наш проверенный процесс гарантирует идеальный результат
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Консультация', description: 'Обсуждаем ваши пожелания и подбираем ткани' },
              { step: '02', title: 'Снятие мерок', description: 'Точные измерения для идеальной посадки' },
              { step: '03', title: 'Создание изделия', description: 'Профессиональный пошив с контролем качества' },
              { step: '04', title: 'Примерка и доставка', description: 'Финальная подгонка и получение готового изделия' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-peniword-gold to-gold-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">{item.step}</span>
                </div>
                <h3 className="text-xl font-heading text-peniword-gold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-peniword-gold to-gold-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading text-black mb-6">
            Начните создание вашего идеального изделия
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Свяжитесь с нами для бесплатной консультации и записи на примерку
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-peniword-black hover:bg-gray-800 text-white px-8 py-3"
              onClick={() => window.open('https://wa.me/79002507665', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" />
              Написать в WhatsApp
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