type ButtonTypes = 'button' | 'submit' | 'reset';

type ButtonProps = {
    type?: ButtonTypes;
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}

export type { ButtonProps };