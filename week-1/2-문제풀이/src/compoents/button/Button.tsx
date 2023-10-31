import {PropsWithChildren} from "react";

type ButtonType = {
    variant: 'primary',
    size: 'small',
    onClick: () => void
}

const Button = ({variant, size, children, ...rest}: PropsWithChildren<Partial<ButtonType>>) => {
    return (
        <button
            style={{
                backgroundColor: variant === "primary" ? "blue" : "red",
                fontSize: size === "small" ? "10px" : "20px",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
            }}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
