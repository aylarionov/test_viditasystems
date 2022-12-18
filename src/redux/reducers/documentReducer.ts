import {
    DocumentAction,
    DocumentActionTypes,
    DocumentState,
} from '../../types/document.type';

const initialState: DocumentState = {
    documents: [],
    getLoading: false,
    getError: null,
    postLoading: false,
    postError: null,
    findItem: '',
    selectedItems: [],
};

export const documentReducer = (state = initialState, action: DocumentAction): DocumentState => {
    switch (action.type) {
    case DocumentActionTypes.GET_DOCUMENTS:
        return { ...state, getLoading: true };
    case DocumentActionTypes.GET_DOCUMENTS_SUCCESS:
        return { ...state, getLoading: false, documents: action.payload };
    case DocumentActionTypes.GET_DOCUMENTS_ERROR:
        return { ...state, getLoading: false, getError: action.payload };
    case DocumentActionTypes.CANCEL_DOCUMENTS:
        return { ...state, postLoading: true };
    case DocumentActionTypes.CANCEL_DOCUMENTS_SUCCESS:
        return { ...state, postLoading: false };
    case DocumentActionTypes.CANCEL_DOCUMENTS_ERROR:
        return { ...state, postLoading: false, postError: action.payload };
    case DocumentActionTypes.CANCEL_DOCUMENTS_RESET:
        return { ...state, postLoading: false, postError: ''};
    case DocumentActionTypes.SEARCH_ITEM:
        return { ...state, getLoading: false, findItem: action.payload };
    case DocumentActionTypes.SELECT_ITEM:
        return { ...state, getLoading: false, selectedItems: action.payload };
    default:
        return state;
    }
};
