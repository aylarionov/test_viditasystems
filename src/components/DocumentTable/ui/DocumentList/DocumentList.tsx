import React from 'react';
import { Document } from '../../../../types/document.type';
import { DocumentItem } from '../DocumentItem/DocumentItem';
import cls from './DocumentList.module.css';

interface DocumentListProps {
  documentList: Document[]
}

export const DocumentList = (props: DocumentListProps) => {
    const { documentList } = props;

    return (
        <tbody className={cls.content}>
            {documentList.map((option) => <DocumentItem key={option.id} doc={option} />)}
        </tbody>
    );
};
