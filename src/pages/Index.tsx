import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      category: 'Закуски',
      dishes: [
        { name: 'Брускетта с томатами', price: '450₽', description: 'Хрустящий хлеб с сочными томатами и базиликом' },
        { name: 'Тартар из лосося', price: '890₽', description: 'Свежий лосось с авокадо и лимонным соусом' },
      ]
    },
    {
      category: 'Основные блюда',
      dishes: [
        { name: 'Стейк Рибай', price: '2100₽', description: 'Мраморная говядина средней прожарки' },
        { name: 'Паста Карбонара', price: '780₽', description: 'Классический рецепт с беконом гуанчиале' },
      ]
    },
    {
      category: 'Десерты',
      dishes: [
        { name: 'Тирамису', price: '520₽', description: 'Нежный итальянский десерт с маскарпоне' },
        { name: 'Панна-котта', price: '480₽', description: 'Сливочный десерт с ягодным соусом' },
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="UtensilsCrossed" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">La Cuisine</h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('menu')} className="hover:text-primary transition-colors">Меню</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Phone" size={16} className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span>Москва, ул. Тверская, 12</span>
              </div>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('menu')} className="block w-full text-left py-2 hover:text-primary transition-colors">Меню</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-primary transition-colors">Контакты</button>
              <div className="pt-3 border-t space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span>Москва, ул. Тверская, 12</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Добро пожаловать в<br />
                <span className="text-primary">La Cuisine</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Изысканная кухня, теплая атмосфера и незабываемые впечатления в самом сердце Москвы
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('reservation')}>
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать столик
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('menu')}>
                  Посмотреть меню
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/961beb8f-ef6e-4d3c-9f27-5bb5e9d296e4/files/9382973d-2579-4977-99fa-136d2a6c0a72.jpg" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наше меню</h2>
            <p className="text-muted-foreground text-lg">Изысканные блюда от шеф-повара</p>
          </div>

          <div className="space-y-12">
            {menuItems.map((section, idx) => (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="text-3xl font-bold mb-6 text-primary">{section.category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.dishes.map((dish, dishIdx) => (
                    <Card key={dishIdx} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold">{dish.name}</h4>
                          <span className="text-secondary font-bold text-xl">{dish.price}</span>
                        </div>
                        <p className="text-muted-foreground">{dish.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-muted-foreground text-lg">Наши блюда и интерьер</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer animate-scale-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img 
                  src="https://cdn.poehali.dev/projects/961beb8f-ef6e-4d3c-9f27-5bb5e9d296e4/files/1eaaf694-3b91-442c-9af1-f8e4151efb3a.jpg" 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reservation" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Бронирование столика</h2>
            <p className="text-muted-foreground text-lg">Забронируйте столик на удобное время</p>
          </div>

          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Время</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Количество гостей</Label>
                  <Input id="guests" type="number" min="1" max="20" placeholder="2" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea id="comment" placeholder="Особые пожелания или диетические требования" />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">О нас</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  La Cuisine — это место, где традиции встречаются с инновациями. С 2010 года мы радуем наших гостей изысканными блюдами европейской кухни.
                </p>
                <p>
                  Наш шеф-повар, получивший образование в лучших кулинарных школах Европы, создает уникальные блюда из свежих локальных продуктов.
                </p>
                <p>
                  Мы верим, что еда — это не просто насыщение, а целое искусство, которое объединяет людей и создает незабываемые моменты.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Блюд в меню</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Довольных гостей</div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/961beb8f-ef6e-4d3c-9f27-5bb5e9d296e4/files/371cdf4f-d2c4-4c3b-9b8a-fe52a0345139.jpg" 
                alt="Chef" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Мы всегда рады вашему визиту</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">Москва, ул. Тверская, 12</p>
                  <p className="text-muted-foreground">Метро Пушкинская</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">Ежедневно с 12:00 до 23:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@lacuisine.ru</p>
                  <p className="text-muted-foreground">booking@lacuisine.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Truck" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Доставка и самовывоз</h3>
                  <p className="text-muted-foreground">Бесплатная доставка от 2000₽</p>
                  <p className="text-muted-foreground">Самовывоз со скидкой 15%</p>
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg animate-scale-in">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e8c85197f4f6a5f5d1f2e0c8e2a8c2a&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                className="grayscale"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Icon name="UtensilsCrossed" size={24} />
              <span className="font-bold text-xl">La Cuisine</span>
            </div>
            <div className="text-sm text-center md:text-left">
              © 2024 La Cuisine. Все права защищены.
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;