import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Document } from '../../types/document.type';
import { Button, Loader, Modal } from '../ui';
import cls from './Popup.module.css';

interface PopupProps {
    exemptionDocuments?: Document[];
    onClose: () => void;
    isOpen: boolean;
}

export const Popup = (props: PopupProps) => {
    const {
        selectedItems,
        postLoading,
        postError,
    } = useTypedSelector((state) => state.document);
    const { cancelDocumentsAction } = useActions();
    const [isClosing, setIsClosing] = useState(false);
    const {
        isOpen,
        onClose,
        exemptionDocuments = [],
    } = props;

    useEffect(() => {
        if (!isOpen) {
            setIsClosing(false)
        }
    }, [isOpen])

    const clickHandler = () => cancelDocumentsAction(selectedItems);

    return (
        <Modal
            isOpen={isOpen}
            isClose={isClosing}
            onClose={onClose}
            lazy
        >
            <div className={cls.content}>
                <span>
                    Вы уверены что хотите аннулировать товар(ы):
                </span>
                {
                    postLoading
                        ? <Loader />
                        : (
                            <ul className={cls.list}>
                                {exemptionDocuments.map(({id, name}) => (
                                    <li key={id}>{name}</li>)
                                )}
                            </ul>
                        )
                }
                {postError && <span className={cls.error}>{postError}</span>}
                <div className={cls.btnWrapper}>
                    <Button
                        className={cls.acceptBtn}
                        onClick={clickHandler}
                        isDisabled={postLoading || Boolean(postError)}
                    >
                        {'Применить'}
                    </Button>
                    <Button
                        className={cls.rejectBtn}
                        onClick={() => setIsClosing(true)}
                        isDisabled={postLoading || Boolean(postError)}
                    >
                        {'Отклонить'}
                    </Button>
                </div>
            </div>
        </Modal>
        
    )
}