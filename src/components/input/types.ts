type InputTypes = 'text' | 'email' | 'password' | 'number';

type InputProps = {
    type: InputTypes;
    name: string;
    placaholderText?: string;
    required?: boolean;
}

export type { InputProps };