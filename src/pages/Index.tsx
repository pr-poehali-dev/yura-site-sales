import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-playfair font-bold text-black">
                PREMIUM STORE
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#catalog"
                className="text-gray-700 hover:text-black font-inter"
              >
                Каталог
              </a>
              <a
                href="#delivery"
                className="text-gray-700 hover:text-black font-inter"
              >
                Доставка
              </a>
              <a
                href="#payment"
                className="text-gray-700 hover:text-black font-inter"
              >
                Оплата
              </a>
              <a
                href="#support"
                className="text-gray-700 hover:text-black font-inter"
              >
                Поддержка
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Icon name="Search" size={20} className="text-gray-700" />
              <Icon name="ShoppingBag" size={20} className="text-gray-700" />
              <Icon name="User" size={20} className="text-gray-700" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight">
                Премиальные товары и услуги
              </h1>
              <p className="text-xl text-gray-300 font-inter">
                Откройте для себя мир роскоши и качества. Эксклюзивные товары и
                персональный сервис высочайшего уровня.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-black font-inter px-8 py-3 text-lg">
                  Посмотреть каталог
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black font-inter px-8 py-3 text-lg"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/8601f3f1-a4d0-4fc8-84f8-0baa39fc69b7.jpg"
                alt="Premium Products"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-black mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Качество, которое говорит само за себя
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" size={32} className="text-black" />
                </div>
                <CardTitle className="text-xl font-playfair">
                  Премиальное качество
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-inter">
                  Только лучшие товары от проверенных брендов с гарантией
                  качества
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-black" />
                </div>
                <CardTitle className="text-xl font-playfair">
                  Быстрая доставка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-inter">
                  Доставка по всей стране от 1 дня с возможностью отслеживания
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" size={32} className="text-black" />
                </div>
                <CardTitle className="text-xl font-playfair">
                  24/7 поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-inter">
                  Круглосуточная поддержка клиентов для решения любых вопросов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-black mb-4">
              Наш каталог
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Эксклюзивные коллекции для взыскательных покупателей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Ювелирные изделия", "Часы", "Аксессуары", "Парфюмерия"].map(
              (category, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="p-0">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
                      <Icon
                        name="Package"
                        size={48}
                        className="text-gray-400 group-hover:text-accent transition-colors"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg font-playfair text-center mb-2">
                      {category}
                    </CardTitle>
                    <CardDescription className="text-center font-inter">
                      Премиальные товары высочайшего качества
                    </CardDescription>
                    <Button className="w-full mt-4 bg-black hover:bg-gray-800 text-white font-inter">
                      Посмотреть
                    </Button>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-playfair font-bold">Наши услуги</h2>
              <p className="text-xl text-gray-300 font-inter">
                Персональный подход к каждому клиенту. Консультации,
                индивидуальный подбор и эксклюзивные предложения.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" size={20} className="text-accent" />
                    <span className="font-inter">
                      Персональные консультации
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Gift" size={20} className="text-accent" />
                    <span className="font-inter">Подарочная упаковка</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" size={20} className="text-accent" />
                    <span className="font-inter">Гарантия качества</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="RotateCcw" size={20} className="text-accent" />
                    <span className="font-inter">Обмен и возврат</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/508c7bc6-54cf-4e9a-b111-d9464af2f005.jpg"
                alt="Premium Service"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div id="delivery" className="space-y-6">
              <h3 className="text-2xl font-playfair font-bold text-black">
                Доставка
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Truck" size={20} className="text-accent mt-1" />
                  <div>
                    <p className="font-inter font-medium">Экспресс-доставка</p>
                    <p className="text-sm text-gray-600 font-inter">
                      От 1 дня по Москве
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-accent mt-1" />
                  <div>
                    <p className="font-inter font-medium">По всей России</p>
                    <p className="text-sm text-gray-600 font-inter">
                      2-5 дней в регионы
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Package" size={20} className="text-accent mt-1" />
                  <div>
                    <p className="font-inter font-medium">
                      Бесплатная доставка
                    </p>
                    <p className="text-sm text-gray-600 font-inter">
                      При покупке от 50 000 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="payment" className="space-y-6">
              <h3 className="text-2xl font-playfair font-bold text-black">
                Оплата
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="CreditCard"
                    size={20}
                    className="text-accent mt-1"
                  />
                  <div>
                    <p className="font-inter font-medium">Банковские карты</p>
                    <p className="text-sm text-gray-600 font-inter">
                      Visa, MasterCard, МИР
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Smartphone"
                    size={20}
                    className="text-accent mt-1"
                  />
                  <div>
                    <p className="font-inter font-medium">
                      Электронные кошельки
                    </p>
                    <p className="text-sm text-gray-600 font-inter">
                      Apple Pay, Google Pay
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Banknote"
                    size={20}
                    className="text-accent mt-1"
                  />
                  <div>
                    <p className="font-inter font-medium">Рассрочка</p>
                    <p className="text-sm text-gray-600 font-inter">
                      До 12 месяцев без %
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="support" className="space-y-6">
              <h3 className="text-2xl font-playfair font-bold text-black">
                Поддержка
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={20} className="text-accent mt-1" />
                  <div>
                    <p className="font-inter font-medium">Телефон</p>
                    <p className="text-sm text-gray-600 font-inter">
                      +7 (800) 123-45-67
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" size={20} className="text-accent mt-1" />
                  <div>
                    <p className="font-inter font-medium">Email</p>
                    <p className="text-sm text-gray-600 font-inter">
                      support@premium.store
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-accent mt-1"
                  />
                  <div>
                    <p className="font-inter font-medium">Онлайн-чат</p>
                    <p className="text-sm text-gray-600 font-inter">
                      Круглосуточно
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Получайте эксклюзивные предложения
          </h2>
          <p className="text-xl text-gray-300 font-inter mb-8">
            Подпишитесь на рассылку и узнавайте о новинках первыми
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-white text-black border-0 font-inter"
            />
            <Button className="bg-accent hover:bg-accent/90 text-black font-inter px-8">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                PREMIUM STORE
              </h3>
              <p className="text-gray-400 font-inter">
                Ваш надежный партнер в мире премиальных товаров и услуг
              </p>
            </div>
            <div>
              <h4 className="font-inter font-medium mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400 font-inter">
                <li>
                  <a href="#" className="hover:text-white">
                    Ювелирные изделия
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Часы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Аксессуары
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Парфюмерия
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-medium mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400 font-inter">
                <li>
                  <a href="#" className="hover:text-white">
                    О компании
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Гарантии
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400 font-inter">
                <p>+7 (800) 123-45-67</p>
                <p>support@premium.store</p>
                <div className="flex space-x-4 mt-4">
                  <Icon
                    name="Instagram"
                    size={20}
                    className="hover:text-white cursor-pointer"
                  />
                  <Icon
                    name="Facebook"
                    size={20}
                    className="hover:text-white cursor-pointer"
                  />
                  <Icon
                    name="Twitter"
                    size={20}
                    className="hover:text-white cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-inter">
            <p>&copy; 2024 Premium Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
