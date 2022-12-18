import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
import {
    Document,
    DocumentAction,
    DocumentActionTypes,
} from '../../types/document.type';

export const getDocumentsAction = () => async (dispatch: Dispatch<DocumentAction>) => {
    try {
        dispatch({ type: DocumentActionTypes.GET_DOCUMENTS });
        const urls = process.env.REACT_APP_DOCUMENTS_HOSTS?.split(' ') ?? [];
        const requests: Promise<AxiosResponse<Document[], any>>[] = urls.map(url => axios.get(url));
        const response = await Promise.all(requests);

        const documents = response.map(({ data }) => data).flat();
        setTimeout(() => {
            dispatch({ type: DocumentActionTypes.GET_DOCUMENTS_SUCCESS, payload: documents });
        }, 500);
    } catch (e) {
        dispatch({
            type: DocumentActionTypes.GET_DOCUMENTS_ERROR,
            payload: 'Произошла ошибка при загрузке списка документов',
        });
    }
};

export const cancelDocumentsAction = (selectedItems: string[]) => async (dispatch: Dispatch<DocumentAction>) => {
    try {
        dispatch({ type: DocumentActionTypes.CANCEL_DOCUMENTS });
        const url = process.env.REACT_APP_CANCEL_HOSTS ?? '';
        await axios.post(
            url, 
            { data: JSON.stringify(selectedItems) },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );

        setTimeout(() => {
            dispatch({ type: DocumentActionTypes.CANCEL_DOCUMENTS_SUCCESS });
        }, 500);
    } catch (e) {
        dispatch({
            type: DocumentActionTypes.CANCEL_DOCUMENTS_ERROR,
            payload: 'Произошла ошибка при аннулировании списка документов',
        });
    } finally {
        setTimeout(() => {
            dispatch({ type: DocumentActionTypes.CANCEL_DOCUMENTS_RESET });
        }, 1500);
    }
};

export const searchItemAction = (item: string): DocumentAction => ({
    type: DocumentActionTypes.SEARCH_ITEM, payload: item,
});

export const selectItemsAction = (items: string[]): DocumentAction => ({
    type: DocumentActionTypes.SELECT_ITEM, payload: items,
});
