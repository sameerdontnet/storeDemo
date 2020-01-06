import * as fromWorkarea from '../actions/workarea.action';
import { Action, createReducer, on } from '@ngrx/store';
import { HesServiceStatus } from '../../models/workarea-hesinfo.model';

export interface WorkareaState {
    hesServiceStatus: HesServiceStatus;
}

export const initialState: WorkareaState = {
       hesServiceStatus: {
        databaseKeyExists: false,
        message: undefined,
        skmState: false,
        skmType: undefined,
        status: 1 // 1 -false
    }
};

const workAreaReducer = createReducer(
    initialState,
    on(fromWorkarea.PingHesServiceSuccess, (state, hesSrvStatus) => ({
        ...state,
        hesServiceStatus: hesSrvStatus
    }))
);

export function reducer(state: WorkareaState = initialState, action: Action): WorkareaState {
    return workAreaReducer(state, action);
}

export const gethesServiceStatus = (state: WorkareaState) => state.hesServiceStatus;
