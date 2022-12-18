/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useActions, useGetData } from '../../hooks';
import { DocumentHeader } from './ui/DocumentHeader/DocumentHeader';
import { DocumentList } from './ui/DocumentList/DocumentList';
import cls from './DocumentTable.module.css';
import { Loader } from '../ui';

export const DocumentTable = () => {
    const {
        renderOptions,
        headers,
        getError,
        getLoading,
    } = useGetData();
    const { getDocumentsAction } = useActions();

    useEffect(() => {
        getDocumentsAction();
    }, []);

    if (getLoading) {
        return <Loader />;
    }

    if (getError) {
        return <h1>{getError}</h1>;
    }

    return (
        <div className={cls.container}>
            <table
                style={{ gridTemplateColumns: `repeat(${headers.length + 1}, auto)` }}
            >
                <DocumentHeader headers={headers} />
                <DocumentList documentList={renderOptions} />
            </table>
        </div>
    );
};
