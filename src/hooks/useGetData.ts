/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { Document } from '../types/document.type';
import { useTypedSelector } from './useTypedSelector';

export const useGetData = () => {
    const {
        documents, findItem, getError, getLoading,
    } = useTypedSelector((state) => state.document);
    const [renderOptions, setRenderOptions] = useState<Document[]>([]);
    const [headers, setHeaders] = useState<string[]>([]);

    const options = useMemo(
        () => documents
            .map((doc) => ({ ...doc, total: `${doc.qty + doc.sum} ${doc.currency}` }))
            .sort((a, b) => Date.parse(b.delivery_date) - Date.parse(a.delivery_date)),
        [documents],
    );

    useEffect(() => {
        setRenderOptions(options);
        const headers = new Set(...documents.map((doc) => Object.keys(doc)));
        headers.delete('id');
        headers.add('total');
        setHeaders([...headers]);
    }, [options, documents]);

    useEffect(() => {
        const newOptions = options
            .filter((option) => Object.entries(option)
                .find(([key, value]) => (key !== 'id' ? String(value).toLowerCase().includes(findItem) : null)));
        setRenderOptions(newOptions);
    }, [findItem]);

    return {
        renderOptions,
        headers,
        findItem,
        getError,
        getLoading,
    }

}