import { MouseEvent } from 'react';

type ButtonTypes = 'button' | 'submit' | 'reset';

type ButtonProps = {
    type?: ButtonTypes;
    text: string;
    onClick: (e: MouseEvent) => void;
}

export type { ButtonProps };