import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { DigitControl } from '../../components/DigitControl';
import styles from './index.module.css';

function convertToTwoDigitString(num) {
	return String(num).padStart(2, '0');
}

function FirstTask () {
	const [hours, setHours] = useState([0, 0]);
	const [minutes, setMinutes] = useState([0, 1]);
	const [seconds, setSeconds] = useState([0, 0]);
	const [state, setState] = useState('idle');
	const intervalId = useRef(null);
	const date = useRef(null);
	const [result, setResult] = useState('');
	
	const updateResult = () => setResult(
		[
			hours.join(''),
			minutes.join(''),
			seconds.join(''),
		].join(':'),
	);

	const start = () => {
		updateResult();

		date.current = new Date(`1995-12-25T${[
			hours.join(''),
			minutes.join(''),
			seconds.join(''),
		].join(':')}`)

		intervalId.current = setInterval(() => {
			const newDate = new Date(date.current - 1000);
			const currentHours = newDate.getHours();
			const currentMinutes = newDate.getMinutes();
			const currentSeconds = newDate.getSeconds();

			date.current = newDate.valueOf();

			setResult([
				convertToTwoDigitString(currentHours),
				convertToTwoDigitString(currentMinutes),
				convertToTwoDigitString(currentSeconds),
			].join(':'))

			if (currentHours === 0 && currentMinutes === 0 && currentSeconds === 0) {
				clearInterval(intervalId.current);
			}
		}, 1000);

		setState('running');
	}

	const clear = () => {
		updateResult();
		clearInterval(intervalId.current);
		setState('idle');
	}

	useEffect(() => {
		return () => clearInterval(intervalId.current);
	}, []);

	useEffect(() => {
		updateResult();
	}, [hours, minutes, seconds]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.digit_picker__wrapper}>
				<div className={styles.digit_group__wrapper}>
					<div className={styles.digit_group__title}>
						Часы
					</div>
					<div className={styles.digit_group}>
						<div className={styles.digit_group__item}>
							<DigitControl
								value={hours[0]}
								min={0}
								max={9}
								isControlsDisabled={state === 'running'}
								onChange={v => setHours(h => [v, h[1]])}
							/>
						</div>
						<div className={styles.digit_group__item}>
							<DigitControl
								value={hours[1]}
								min={0}
								max={9}
								isControlsDisabled={state === 'running'}
								onChange={v => setHours(h => [h[0], v])}
							/>
						</div>
					</div>
				</div>
				<div className={styles.digit_group__wrapper}>
					<div className={styles.digit_group__title}>
						Минуты
					</div>
					<div className={styles.digit_group}>
						<div className={styles.digit_group__item}>
							<DigitControl
								value={minutes[0]}
								min={0}
								max={5}
								isControlsDisabled={state === 'running'}
								onChange={v => setMinutes(m => [v, m[1]])}
							/>
						</div>
						<div className={styles.digit_group__item}>
							<DigitControl
								value={minutes[1]}
								min={0}
								max={9}
								isControlsDisabled={state === 'running'}
								onChange={v => setMinutes(m => [m[0], v])}
							/>
						</div>
					</div>
				</div>
				<div className={styles.digit_group__wrapper}>
					<div className={styles.digit_group__title}>
						Секунды
					</div>
					<div className={styles.digit_group}>
						<div className={styles.digit_group__item}>
							<DigitControl
								value={seconds[0]}
								min={0}
								max={5}
								isControlsDisabled={state === 'running'}
								onChange={v => setSeconds(s => [v, s[1]])}
							/>
						</div>
						<div className={styles.digit_group__item}>
							<DigitControl
								value={seconds[1]}
								min={0}
								max={9}
								isControlsDisabled={state === 'running'}
								onChange={v => setSeconds(s => [s[0], v])}
							/>
						</div>
					</div>
				</div>
			</div>
			{state === 'running' ? (
				<button
					className={classNames(styles.button, styles.button__active)}
					onClick={clear}
				>
					Сбросить
				</button>
			) : (
				<button
					className={classNames(styles.button)}
					onClick={start}
				>
					Старт
				</button>
			) }
			<div className={styles.result}>
				{result}
			</div>
		</div>
	);
}

export { FirstTask };
