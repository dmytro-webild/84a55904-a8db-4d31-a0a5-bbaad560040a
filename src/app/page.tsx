"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Car, Crown, Droplet, Gauge, Sparkles, Star, Users, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Главная",          id: "#hero"},
        {
          name: "О нас",          id: "#about"},
        {
          name: "Услуги",          id: "#features"},
        {
          name: "Цены",          id: "#pricing"},
        {
          name: "Контакты",          id: "#contact"},
        {
          name: "Telegram",          id: "https://t.me/SbQkYDjJ"}
      ]}
      brandName="АвтоСервис Эксперт"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated"}}
      title="Ваш Автомобиль Достоин Лучшего Ухода"
      description="Надежный автосервис с гарантией качества и профессиональным подходом к каждому клиенту. Доверьте нам свой автомобиль!"
      buttons={[
        {
          text: "Записаться на сервис",          href: "#contact"},
        {
          text: "Наши услуги",          href: "#features"},
      ]}
      carouselItems={[
        {
          id: "carousel-1",          imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-using-lamp-while-repairing-engine-workshop_637285-4295.jpg?_wi=1",          imageAlt: "Механик ремонтирует двигатель автомобиля"},
        {
          id: "carousel-2",          imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-mechanic-examining-vehicle-hood-while-working-auto-repair-shop_637285-7664.jpg?_wi=1",          imageAlt: "Профессиональная полировка автомобиля"},
        {
          id: "carousel-3",          imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-adjusting-tire-pressure-while-working-auto-repair-shop_637285-7612.jpg?_wi=1",          imageAlt: "Замена шин в автосервисе"},
        {
          id: "carousel-4",          imageSrc: "http://img.b2bpic.net/free-photo/focused-manly-woman-is-doing-car-diagnostic-with-computer-help-auto-service_613910-17106.jpg?_wi=1",          imageAlt: "Диагностика автомобиля компьютером"},
        {
          id: "carousel-5",          imageSrc: "http://img.b2bpic.net/free-photo/hands-craftswoman-working-machine_107420-65305.jpg?_wi=1",          imageAlt: "Ремонт тормозной системы автомобиля"},
        {
          id: "carousel-6",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-wrapping-car-work_23-2149385696.jpg?_wi=1",          imageAlt: "Кузовной ремонт и покраска автомобиля"},
      ]}
      autoPlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Нам Доверяют Тысячи Водителей"
      description="С 2005 года АвтоСервис Эксперт предоставляет высококачественные услуги по ремонту и обслуживанию автомобилей в [Ваш Город]. Мы используем только современное оборудование и оригинальные запчасти, чтобы гарантировать долговечность и безопасность вашего автомобиля."
      bulletPoints={[
        {
          title: "Опытные Мастера",          description: "Наша команда состоит из сертифицированных специалистов с многолетним опытом."},
        {
          title: "Современное Оборудование",          description: "Используем передовые технологии для точной диагностики и эффективного ремонта."},
        {
          title: "Гарантия Качества",          description: "Предоставляем гарантию на все выполненные работы и установленные запчасти."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/set-mechanical-tools-professional-car-mechanic-using-different-tools-working_146671-19067.jpg"
      imageAlt="Механик с довольным клиентом"
      mediaAnimation="opacity"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Wrench,
          title: "Профессиональный Ремонт",          description: "Быстрый и качественный ремонт любой сложности, от двигателя до подвески."},
        {
          icon: Car,
          title: "Плановое ТО",          description: "Регулярное техническое обслуживание по регламенту производителя для долгой службы автомобиля."},
        {
          icon: Gauge,
          title: "Компьютерная Диагностика",          description: "Выявление скрытых неисправностей с помощью современного диагностического оборудования."},
        {
          icon: Droplet,
          title: "Кузовной Ремонт и Покраска",          description: "Восстановление геометрии кузова, устранение вмятин и царапин, покраска."},
      ]}
      title="Комплексные Услуги для Вашего Автомобиля"
      description="От диагностики до капитального ремонта – мы предлагаем полный спектр услуг, чтобы ваш автомобиль всегда был в идеальном состоянии."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Диагностика Двигателя",          price: "от 1500 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/doctor-getting-ct-scan-machine-ready-use_23-2149367408.jpg",          imageAlt: "Компьютерная диагностика двигателя"},
        {
          id: "p2",          name: "Замена Масла",          price: "от 800 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-uniform-with-protective-glasses_23-2148773467.jpg",          imageAlt: "Замена моторного масла"},
        {
          id: "p3",          name: "Шиномонтаж",          price: "от 1200 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-fixing-car-tyre_1170-1653.jpg",          imageAlt: "Услуги шиномонтажа"},
        {
          id: "p4",          name: "Ремонт Тормозной Системы",          price: "от 2500 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-examining-car-wheel-disc-brake_1170-1212.jpg",          imageAlt: "Ремонт тормозов автомобиля"},
        {
          id: "p5",          name: "Ремонт Подвески",          price: "от 3000 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3934.jpg",          imageAlt: "Ремонт подвески автомобиля"},
        {
          id: "p6",          name: "Покраска Детали",          price: "от 6000 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/car-being-taking-care-workshop_23-2149580570.jpg",          imageAlt: "Покраска кузовной детали"},
      ]}
      title="Наши Популярные Услуги"
      description="Мы предлагаем широкий спектр услуг, чтобы ваш автомобиль всегда оставался надежным и безопасным. Выберите то, что нужно именно вам."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          icon: Users,
          title: "Довольных Клиентов",          value: "10 000+"},
        {
          id: "m2",          icon: Award,
          title: "Лет на Рынке",          value: "15+"},
        {
          id: "m3",          icon: Car,
          title: "Отремонтированных Автомобилей",          value: "25 000+"},
      ]}
      title="Наши Достижения и Гарантии"
      description="Цифры говорят сами за себя – мы гордимся тем, что делаем, и постоянно стремимся к совершенству."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Анна Петрова",          date: "10.03.2024",          title: "Отличный Сервис!",          quote: "Очень довольна работой АвтоСервис Эксперт. Всегда качественно, быстро и по разумным ценам. Теперь только к ним!",          tag: "Ремонт двигателя",          avatarSrc: "http://img.b2bpic.net/free-photo/salesman-car-showroom_1303-14591.jpg",          avatarAlt: "Анна Петрова",          imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-using-lamp-while-repairing-engine-workshop_637285-4295.jpg?_wi=2",          imageAlt: "professional man smiling car owner"},
        {
          id: "t2",          name: "Иван Смирнов",          date: "05.03.2024",          title: "Профессионалы своего дела",          quote: "Не в первый раз обращаюсь, всегда остаюсь очень доволен. Мастера грамотные, всегда все объяснят и покажут. Рекомендую!",          tag: "Плановое ТО",          avatarSrc: "http://img.b2bpic.net/free-photo/helpdesk-support-information-support-concept_53876-121537.jpg",          avatarAlt: "Иван Смирнов",          imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-mechanic-examining-vehicle-hood-while-working-auto-repair-shop_637285-7664.jpg?_wi=2",          imageAlt: "professional man smiling car owner"},
        {
          id: "t3",          name: "Елена Кузнецова",          date: "28.02.2024",          title: "Быстро и Качественно",          quote: "Срочно нужен был ремонт, приняли без очереди, сделали все за несколько часов. Машина как новая! Спасибо огромное!",          tag: "Кузовной ремонт",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-caucasian-man_641386-12.jpg",          avatarAlt: "Елена Кузнецова",          imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-adjusting-tire-pressure-while-working-auto-repair-shop_637285-7612.jpg?_wi=2",          imageAlt: "professional man smiling car owner"},
        {
          id: "t4",          name: "Сергей Иванов",          date: "20.02.2024",          title: "Полное доверие",          quote: "Доверяю свой автомобиль только этому сервису. Всегда честно, без навязывания лишних услуг. Молодцы!",          tag: "Замена масла",          avatarSrc: "http://img.b2bpic.net/free-photo/business-men-work-with-laptops-side-car_1359-1185.jpg",          avatarAlt: "Сергей Иванов",          imageSrc: "http://img.b2bpic.net/free-photo/focused-manly-woman-is-doing-car-diagnostic-with-computer-help-auto-service_613910-17106.jpg?_wi=2",          imageAlt: "professional man smiling car owner"},
        {
          id: "t5",          name: "Ольга Васильева",          date: "15.02.2024",          title: "Лучший автосервис в городе",          quote: "Приезжаю сюда уже несколько лет. Всегда вежливый персонал и высокое качество работ. Рекомендую всем друзьям и знакомым.",          tag: "Диагностика",          avatarSrc: "http://img.b2bpic.net/free-photo/even-while-pitching-tent-we-have-fun_329181-10578.jpg",          avatarAlt: "Ольга Васильева",          imageSrc: "http://img.b2bpic.net/free-photo/hands-craftswoman-working-machine_107420-65305.jpg?_wi=2",          imageAlt: "professional man smiling car owner"},
        {
          id: "t6",          name: "Дмитрий Морозов",          date: "08.02.2024",          title: "Оптимальное соотношение цена/качество",          quote: "Доступные цены и отличный уровень сервиса. Ребята знают свое дело, всегда помогут и подскажут. Очень рад, что нашел вас!",          tag: "Ремонт подвески",          avatarSrc: "http://img.b2bpic.net/free-photo/business-men-work-with-laptops-side-car_1359-1185.jpg",          avatarAlt: "Дмитрий Морозов",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-wrapping-car-work_23-2149385696.jpg?_wi=2",          imageAlt: "professional man smiling car owner"},
      ]}
      title="Что Говорят Наши Клиенты"
      description="Ваше мнение для нас очень важно. Прочтите отзывы тех, кто уже доверил нам свои автомобили."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",          badge: "Стандарт",          badgeIcon: Star,
          price: "4900 ₽",          subtitle: "Базовое обслуживание",          features: [
            "Комплексная диагностика",            "Замена масла и фильтров",            "Проверка жидкостей",            "Осмотр подвески"],
        },
        {
          id: "pro",          badge: "Оптимальный",          badgeIcon: Sparkles,
          price: "8900 ₽",          subtitle: "Расширенный пакет",          features: [
            "Все из пакета 'Стандарт'",            "Диагностика тормозной системы",            "Проверка развал-схождения",            "Компьютерная диагностика"],
        },
        {
          id: "premium",          badge: "Премиум",          badgeIcon: Crown,
          price: "14900 ₽",          subtitle: "Максимальный уход",          features: [
            "Все из пакета 'Оптимальный'",            "Чистка инжектора",            "Диагностика АКПП/МКПП",            "Сезонная замена шин"],
        },
      ]}
      title="Прозрачные Цены на Все Услуги"
      description="Выбирайте подходящий пакет услуг или свяжитесь с нами для индивидуального расчета."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Какие марки автомобилей вы обслуживаете?",          content: "Мы обслуживаем большинство популярных марок автомобилей, как отечественных, так и импортных. Для уточнения по вашей конкретной модели, пожалуйста, свяжитесь с нами."},
        {
          id: "q2",          title: "Как долго длится ремонт?",          content: "Время ремонта зависит от сложности поломки и наличия запчастей. Мы всегда стараемся выполнить работы максимально оперативно, предварительно согласовав сроки с клиентом."},
        {
          id: "q3",          title: "Вы даете гарантию на работы?",          content: "Да, мы предоставляем гарантию на все выполненные работы и установленные запчасти. Срок гарантии оговаривается индивидуально."},
        {
          id: "q4",          title: "Можно ли привезти свои запчасти?",          content: "Да, вы можете привезти свои запчасти. Однако, мы не несем ответственности за качество и совместимость ваших запчастей."},
      ]}
      sideTitle="Часто Задаваемые Вопросы"
      sideDescription="Найдите ответы на самые популярные вопросы о наших услугах и работе автосервиса."
      faqsAnimation="slide-up"
      textPosition="left"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-static"}}
      tag="Свяжитесь с Нами"
      title="Запишитесь на Обслуживание"
      description="Заполните форму ниже, и наш менеджер свяжется с вами в ближайшее время для уточнения деталей и записи."
      inputPlaceholder="Ваш email"
      buttonText="Отправить Заявку"
      termsText="Нажимая кнопку, вы соглашаетесь с нашей Политикой конфиденциальности."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Услуги",          items: [
            {
              label: "Диагностика",              href: "#products"},
            {
              label: "Ремонт двигателя",              href: "#products"},
            {
              label: "ТО",              href: "#products"},
            {
              label: "Кузовной ремонт",              href: "#products"},
          ],
        },
        {
          title: "Компания",          items: [
            {
              label: "О нас",              href: "#about"},
            {
              label: "Цены",              href: "#pricing"},
            {
              label: "Отзывы",              href: "#testimonials"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
        {
          title: "Контакты",          items: [
            {
              label: "+992008081512",              href: "tel:+992008081512"},
            {
              label: "info@autoservice.ru",              href: "mailto:info@autoservice.ru"},
            {
              label: "ул. Примерная, 10, г. [Ваш Город]",              href: "https://maps.google.com/?q=ул.+Примерная,+10,+г.+Ваш+Город"},
          ],
        },
      ]}
      bottomLeftText="© 2024 АвтоСервис Эксперт. Все права защищены."
      bottomRightText="Сделано с ❤️ для автомобилистов."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}