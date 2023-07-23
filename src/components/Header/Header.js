import welbex from "../../assets/logo_welbex.svg"
import telegram from "../../assets/telegram.svg"
import viber from "../../assets/viber.svg"
import whatsapp from "../../assets/whatsapp.svg"
import "./Header.css"

export default function Header () {
	return (
		<div className='header'>
			<div className="logo">
				<img src = {welbex} alt = "welbex"/>
				<div className="logo__text">
					крупный интегратор CRM <br/> в Росcии и ещё 8 странах
				</div>
			</div>
			<div>Услуги</div>
			<div>Виджеты</div>
			<div>Интеграции</div>
			<div>Кейсы</div>
			<div className="hide-on-small-screen">Сертификаты</div>
			<div className="header__contacts">
				<div className="header__contacts__phone-number">+7 555 555-55-55</div>
				<div className="header__contacts__src-image">
					<img src={telegram} alt = "telegram" />
					<img src={viber} alt = "viber"/>
					<img src={whatsapp} alt = "whatsapp"/>
				</div>
			</div>
		</div>
	)
}
