import React from 'react';
import cls from './Checkbox.module.css';

interface CheckboxProps {
  label?: string
  isChecked: boolean
  onChange: () => void
}

export const Checkbox = (props: CheckboxProps) => {
    const { label, isChecked, onChange } = props;

    return (
        <label>
            <input
                type="checkbox"
                className={cls.checkbox}
                checked={isChecked}
                onChange={onChange}
            />
            {label}
        </label>
    );
};
