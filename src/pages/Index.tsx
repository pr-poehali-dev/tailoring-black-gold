import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      category: "Мужская одежда",
      items: ["Пошив костюмов на заказ", "Пошив рубашек", "Пошив брюк", "Ремонт дорогой одежды"],
      icon: "User"
    },
    {
      category: "Женская одежда", 
      items: ["Пошив платьев", "Пошив вечерних платьев", "Пошив юбки", "Подгонка одежды по фигуре"],
      icon: "Heart"
    },
    {
      category: "Ремонт и подгонка",
      items: ["Ремонт одежды", "Ремонт джинсов", "Ремонт молнии", "Укоротить брюки"],
      icon: "Wrench"
    },
    {
      category: "Текстиль для дома",
      items: ["Пошив постельного белья", "Пошив простынь", "Пошив наволочек", "Пошив штор"],
      icon: "Home"
    },
    {
      category: "Дополнительные услуги",
      items: ["Кастомизация одежды", "Создание лекал", "Пошив с выездом на дом", "Корпоративная одежда"],
      icon: "Plus"
    }
  ];

  const advantages = [
    {
      title: "Опыт более 40 лет",
      description: "Многолетний опыт и традиции мастерства",
      icon: "Award"
    },
    {
      title: "Работа с топовыми брендами", 
      description: "Сотрудничество с ведущими модными домами",
      icon: "Star"
    },
    {
      title: "Превосходное качество",
      description: "Каждое изделие - произведение искусства",
      icon: "CheckCircle"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79002507665', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Scissors" className="text-primary" size={32} />
            <h1 className="text-2xl font-heading font-bold text-primary">PENIWORD</h1>
          </div>
          <nav className="hidden md:flex space-x-8 font-body">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button onClick={handleWhatsAppClick} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
              Ателье премиум-класса
              <span className="block text-primary">PENIWORD</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body max-w-3xl mx-auto">
              Более 40 лет создаем идеальную одежду в самом сердце Сочи. 
              От эксклюзивных костюмов до ремонта любимых вещей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium"
                onClick={handleWhatsAppClick}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать консультацию
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="ArrowDown" size={20} className="mr-2" />
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Полный спектр швейных услуг для частных и корпоративных клиентов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name={service.icon} size={24} />
                    </div>
                    <CardTitle className="text-xl font-heading">{service.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-body">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Наши преимущества, проверенные временем и клиентами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-6">
                  <Icon name={advantage.icon} size={32} />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground font-body text-lg">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground font-body">
                Готовы обсудить ваш заказ? Мы всегда на связи!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                    <Icon name="MapPin" className="text-primary" size={28} />
                    <span>Наш адрес</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body">
                  <p className="text-lg">
                    <strong>г. Сочи, центральный район</strong><br />
                    ул. Донская 3/3
                  </p>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="text-primary" size={20} />
                    <span>Пн-Пт: 9:00-19:00, Сб: 10:00-16:00</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                    <Icon name="Phone" className="text-primary" size={28} />
                    <span>Контакты</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="text-primary" size={20} />
                    <a href="tel:+79002507665" className="text-lg hover:text-primary transition-colors">
                      +7 (900) 250-76-65
                    </a>
                  </div>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                  >
                    <Icon name="MessageCircle" size={20} className="mr-3" />
                    Написать в WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Icon name="Scissors" className="text-primary" size={24} />
              <span className="text-lg font-heading font-semibold">PENIWORD</span>
            </div>
            <p className="text-muted-foreground font-body">
              © 2025 Ателье PENIWORD. Более 40 лет мастерства в Сочи.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleWhatsAppClick}
                className="hover:text-primary"
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                asChild
                className="hover:text-primary"
              >
                <a href="tel:+79002507665">
                  <Icon name="Phone" size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}