import { ChangeEvent } from "react";

type InputTypes = 'text' | 'email' | 'password' | 'number';

type InputProps = {
    type: InputTypes;
    name: string;
    placaholderText?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    required?: boolean;
}

export type { InputProps };