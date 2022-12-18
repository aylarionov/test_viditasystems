/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { Document } from '../../../../types/document.type';
import { Checkbox } from '../../../ui';
import cls from './DocumentItem.module.css';

interface DocumentItemProps {
  doc: Document
}

export const DocumentItem: FC<DocumentItemProps> = ({ doc }) => {
    const [checked, setChecked] = useState(false);
    const { selectItemsAction } = useActions();
    const { selectedItems } = useTypedSelector((state) => state.document);

    useEffect(() => {
        if (selectedItems.includes(doc.id)) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [doc.id, selectedItems.length]);

    const handleChecked = () => {
        if (checked) {
            setChecked(false);
            selectItemsAction(selectedItems.filter((item) => item !== doc.id));
        } else {
            setChecked(true);
            selectItemsAction([...selectedItems, doc.id]);
        }
    };

    return (
        <tr className={cls.row}>
            {Object.entries(doc).map(([key, value]) => (
                key !== 'id' ? <td key={key} className={cls.box}>{value}</td> : null
            ))}
            <td className={cls.box}>
                <Checkbox isChecked={checked} onChange={handleChecked} />
            </td>
        </tr>
    );
};
