'use client'

const Button = (props) => {

    const { 
        label,
        styles, 
        handleClick,
        isDisabled,
        children
    } = props;

    return (
        <button
            disabled={isDisabled}
            className={styles}
            onClick={handleClick}
        >
            {children ? children : label}
        </button>
    )
}

Button.defaultProps = {
    isDisabled: false
}

export default Button;
