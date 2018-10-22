import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "./contants/ActionTypes";
import * as api from "./api";

function* getApiListToDo(){
    try{
        const listToDo = yield call(api.fetchListToDo);
        yield put({
            type: types.RECEIVE_API_LIST_TO_DO,
            listToDo: listToDo
        });
    } catch (error) {
        console.log(error);
    }
}

function* addItem(action){
    try{
        const listToDo = yield call(api.postItem, action.value);
        yield put({
            type: types.RECEIVE_API_LIST_TO_DO,
            listToDo: listToDo
        })
    } catch (error) {
        console.log(error);
    }
}

function* deleteItem(action){
    try{
        const listToDo = yield call(api.deleteItem, action.id);
        yield put({
            type: types.RECEIVE_API_LIST_TO_DO,
            listToDo: listToDo
        })
    } catch (error) {
        console.log(error);
    }
}

function* editItem(action){
    try{
        const listToDo = yield call(api.putItem, action.id, action.value);
        yield put({
            type: types.RECEIVE_API_LIST_TO_DO,
            listToDo: listToDo
        })
    } catch (error) {
        console.log(error);
    }
}

export default function* mySaga(){
    yield takeEvery(types.REQUEST_API_LIST_TO_DO, getApiListToDo);
    yield takeEvery(types.REQUEST_ADD_ITEM, addItem);
    yield takeEvery(types.REQUEST_DELETE_ITEM, deleteItem);
    yield takeEvery(types.REQUEST_EDIT_ITEM, editItem);
}