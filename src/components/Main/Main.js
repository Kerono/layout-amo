import "./Main.css"

export default function Main () {
	return (
		<div className='main'>
			<div>
				<div className="important">
					<div>Зарабатывайте <br/>больше</div>
					<span className="gradient">c WELBEX</span>
				</div>
				<div 
				className="subtitle">
					Развиваем и контролируем 
					<br/>продажи за вас
				</div>
			</div>
			<div className="gift">
				<div className="gift__title">Вместе c <span className="gradientNintyDeg">бесплатной 
				<br/> консультацией</span>  мы дарим:
				</div>
				<div className="special-offer-desktop">
					<div className="offer">
						<div className="offer__title">Виджеты</div>
						<div className="special-offer__item">30 готовых <br/> решений</div>
					</div>
					<div className="offer">
						<div className="offer__title">Dashboard</div>
						<div 
						className="special-offer__item">
							с показателями <br/> вашего бизнеса
						</div>
					</div>
					<div className="offer">
						<div className="offer__title">Skype Аудит</div>
						<div className="special-offer__item">
							отдела продаж <br/> и CRM системы 
						</div>
					</div>
					<div className="offer">
						<div className="offer__title">35 дней</div>
						<div className="special-offer__item">использования <br/> CRM</div>
					</div>
				</div>
				<div className="special-offer-mobile">
					<div className="special-offer__item">Skype аудит</div>
					<div className="special-offer__item">30 виджетов</div>
					<div className="special-offer__item">Dashboard </div>
					<div className="special-offer__item">Месяц amoCRM</div>
				</div>
				<div className="desktop-button">Получить консультацию</div>
			</div>
		</div>
	)
}
