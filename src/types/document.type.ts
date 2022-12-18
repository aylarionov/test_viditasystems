type StatusOfDoc = 'active' | 'archive'

export interface Document {
  id: string
  status: StatusOfDoc
  sum: number
  qty: number
  volume: number
  name: string
  delivery_date: string
  currency: string
}

export interface DocumentState {
  documents: Document[]
  getLoading: boolean
  getError: null | string
  postLoading: boolean
  postError: null | string
  findItem: string
  selectedItems: string[]
}

export enum DocumentActionTypes {
  GET_DOCUMENTS = 'GET_DOCUMENTS',
  GET_DOCUMENTS_SUCCESS = 'GET_DOCUMENTS_SUCCESS',
  GET_DOCUMENTS_ERROR = 'GET_DOCUMENTS_ERROR',
  CANCEL_DOCUMENTS = 'CANCEL_DOCUMENTS',
  CANCEL_DOCUMENTS_SUCCESS = 'CANCEL_DOCUMENTS_SUCCESS',
  CANCEL_DOCUMENTS_ERROR = 'CANCEL_DOCUMENTS_ERROR',
  CANCEL_DOCUMENTS_RESET = 'CANCEL_DOCUMENTS_RESET',
  SEARCH_ITEM = 'SEARCH_ITEM',
  SELECT_ITEM = 'SELECT_ITEM'
}

interface GetDocumentAction {
  type: DocumentActionTypes.GET_DOCUMENTS
}
interface GetDocumentSuccessAction {
  type: DocumentActionTypes.GET_DOCUMENTS_SUCCESS
  payload: Document[]
}
interface GetDocumentErrorAction {
  type: DocumentActionTypes.GET_DOCUMENTS_ERROR
  payload: string
}
interface CancelDocumentAction {
  type: DocumentActionTypes.CANCEL_DOCUMENTS
}
interface CancelDocumentSuccessAction {
  type: DocumentActionTypes.CANCEL_DOCUMENTS_SUCCESS
}
interface CancelDocumentErrorAction {
  type: DocumentActionTypes.CANCEL_DOCUMENTS_ERROR
  payload: string
}
interface CancelDocumentResetAction {
  type: DocumentActionTypes.CANCEL_DOCUMENTS_RESET
}
interface SearchingItemAction {
  type: DocumentActionTypes.SEARCH_ITEM
  payload: string
}
interface SelectingDocumentsAction {
  type: DocumentActionTypes.SELECT_ITEM
  payload: string[]
}

export type DocumentAction =
    GetDocumentAction
    | GetDocumentErrorAction
    | GetDocumentSuccessAction
    | CancelDocumentAction
    | CancelDocumentSuccessAction
    | CancelDocumentErrorAction
    | CancelDocumentResetAction
    | SearchingItemAction
    | SelectingDocumentsAction
