'use client'

const Button = (props) => {

    const { 
        label,
        styles, 
        handleClick,
        isDisabled
    } = props;

    return (
        <button
            disabled={isDisabled}
            className={styles}
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

Button.defaultProps = {
    isDisabled: false
}

export default Button;
