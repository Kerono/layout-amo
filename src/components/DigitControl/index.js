import classNames from 'classnames';
import UpArrow from './up-arrow.png';
import styles from './index.module.css';

function DigitControl ({
    value,
    min = -1,
    max = Infinity,
    isControlsDisabled = false,
    onChange
}) {
	return (
        <div className={classNames(styles.wrapper)}>
            <img
                src={UpArrow}
                className={classNames(
                    styles.control,
                    styles.control__increment,
                    {
                        [styles['control--disabled']]: value === max || isControlsDisabled,
                    }
                )}
                alt='Increment'
                onClick={() => {
                    const newValue = value + 1;

                    if (newValue <= max && !isControlsDisabled) {
                        onChange(newValue)
                    }
                }}
            />
            {value}
            <img
                src={UpArrow}
                className={classNames(
                    styles.control,
                    styles.control__decrement,
                    {
                        [styles['control--disabled']]: value === min || isControlsDisabled,
                    }
                )}
                alt='Decrement'
                onClick={() => {
                    const newValue = value - 1;

                    if (newValue >= min && !isControlsDisabled) {
                        onChange(newValue)
                    }
                }}
            />
        </div>
	);
}

export { DigitControl };
