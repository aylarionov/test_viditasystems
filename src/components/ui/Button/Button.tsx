import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import cls from './Button.module.css';

export enum ButtonSize {
    M = 'size-m',
    L = 'size-l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    isDisabled?: boolean;
    size?:ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        isDisabled = false,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.disabled]: isDisabled,
    }

    return (
        <button
            type="button"
            className={cn(cls.Button, {...mods}, [className, cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
