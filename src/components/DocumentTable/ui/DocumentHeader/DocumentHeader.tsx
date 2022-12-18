import React, { useEffect, useState } from 'react';
import { useActions } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { Checkbox } from '../../../ui/';
import cls from './DocumentHeader.module.css';

interface DocumentHeaderProps {
  headers: string[]
}

export const DocumentHeader = (props: DocumentHeaderProps) => {
    const { headers } = props;
    const [checkedAll, setCheckedAll] = useState(false);
    const { selectItemsAction } = useActions();
    const { documents, selectedItems } = useTypedSelector((state) => state.document);

    useEffect(() => {
        if (selectedItems.length === documents.length) {
            setCheckedAll(true);
        }
    }, [documents.length, selectedItems.length]);

    const handleChecked = () => {
        if (checkedAll) {
            setCheckedAll(false);
            selectItemsAction([]);
        } else {
            setCheckedAll(true);
            selectItemsAction(documents.map((doc) => doc.id));
        }
    };

    return (
        <thead className={cls.header}>
            <tr>
                {headers.map((head) => (
                    <th key={head} className={cls.box}>{head}</th>
                ))}
                <th className={cls.box}>
                    <Checkbox isChecked={checkedAll} onChange={handleChecked} />
                </th>
            </tr>
        </thead>
    );
};
