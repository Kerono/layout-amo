import whatsapp from "../../assets/whatsapp.svg"
import viber from "../../assets/viber.svg"
import telegram from "../../assets/telegram.svg"
import "./Footer.css"

export default function Footer () {
	return (
		<div className="footer">
			<div className="company-container">
				<div className="footer__title">O компании</div>
				<div className="company">
					<div className="partner-program">Партнёрская программа</div>
					<div>Вакансии</div>
				</div>
			</div>
			<div className="menu-container">
				<div className="footer__title">Меню</div>
				<div className="menu">
					<div className="menu__item">Расчёт стоимости</div>
					<div className="menu__item desktop">Кейсы</div>
					<div className="menu__item mobile">Благодарность клиентов</div>
					<div className="menu__item">Услуги</div>
					<div className="menu__item desktop">Благодарственные письма</div>
					<div className="menu__item mobile">Кейсы</div>
					<div className="menu__item">Виджеты</div>
					<div className="menu__item">Сертификаты</div>
					<div className="menu__item">Интеграции</div>
					<div className="menu__item">Блог на Youtube</div>
					<div className="menu__item">Наши клиенты</div>
					<div className="menu__item">Вопрос / Ответ</div>
				</div>
			</div>
			<div className="footer-container">
				<div className="footer__title">Контакты</div>
				<div className="contacts">
					<div>+7 555 555-55-55</div>
					<div className="contacts__src-image">
						<img src={telegram} alt = "telegram" />
						<img src={viber} alt = "viber"/>
						<img src={whatsapp} alt = "whatsapp"/>
					</div>
					<div className="contact-address">Москва, Путевой проезд 3с1, к 902</div>
				</div>
				<div className="footer__rights">©WELBEX 2022.  Все права защищены. 
					<br/><span>Политика конфиденциальности</span>
				</div>
			</div>
		</div>
	)
}
