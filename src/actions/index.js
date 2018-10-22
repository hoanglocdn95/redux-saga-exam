import * as types from "../contants/ActionTypes";

export const requestApiListToDo = () => (
    {
        type: types.REQUEST_API_LIST_TO_DO
    }
)

export const requestAddItem = (value) => (
    {
        type: types.REQUEST_ADD_ITEM,
        value
    }
)

export const requestDeleteItem = (id) => (
    {
        type: types.REQUEST_DELETE_ITEM,
        id
    }
)

export const requestEditItem = (id, value) => (
    {
        type: types.REQUEST_EDIT_ITEM,
        id,
        value
    }
)