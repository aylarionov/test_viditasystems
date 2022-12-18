import React, { useCallback, useMemo, useState } from 'react';
import { useTypedSelector } from '../../hooks';
import { Popup } from '../Popup/Popup';
import { Button, Title, ButtonSize } from '../ui';
import cls from './Footer.module.css';


export const Footer = () => {
    const {
        documents, selectedItems,
    } = useTypedSelector((state) => state.document);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
    }, []);

    const totalVolume: number = useMemo(() =>
        documents.reduce((total, doc) => total + doc.volume, 0),
    [documents]);

    const totalNumber: number = useMemo(() =>
        documents.reduce((total, doc) => total + doc.qty, 0),
    [documents]);

    const options = useMemo(() => 
        documents.filter((document) => selectedItems.some((item) => document.id === item))
    , [documents, selectedItems])
        
    return (
        <div className={cls.container}>
            <div className={cls.wrapper}>
                <div className={cls.titleWrapper}>
                    <Title
                        title={`Общий обьем: ${totalVolume}`}
                    />
                    <Title
                        title={`Общее количество: ${totalNumber}`}
                    />
                </div>
                <Button
                    className={cls.btn}
                    size={ButtonSize.L}
                    onClick={onShowModal}
                    isDisabled={selectedItems.length === 0}
                >
                    {'Аннулировать'}
                </Button>
            </div>
            <Popup 
                exemptionDocuments={options}
                isOpen={isOpenModal}
                onClose={onCloseModal}
            />
        </div>
    )
};
