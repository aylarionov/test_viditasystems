/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import cls from './Search.module.css';

export const Search = () => {
    const { searchItemAction } = useActions();
    const [value, setValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        searchItemAction(value.toLowerCase());
    }, [value]);

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => setValue(e.target.value);

    const onBlur = (): void => setIsFocus(false);
    const onFocus = (): void => setIsFocus(true);
    const onClick = (): void => setValue('');

    return (
        <div className={cls.wrapper}>
            <div className={cls.container}>
                <input
                    type="text"
                    className={cls.input}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    value={value}
                    placeholder="Search..."
                />
                <div
                    className={isFocus ? `${cls.closeBtn} ${cls.active}` : cls.closeBtn}
                    onClick={onClick}
                >
                    &times;
                </div>
            </div>
        </div>
    );
};
