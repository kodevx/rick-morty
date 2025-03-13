'use client'

const Button = (props) => {

    const { 
        label,
        styles, 
        handleClick
    } = props;

    return (
        <button
            className={styles}
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default Button;
