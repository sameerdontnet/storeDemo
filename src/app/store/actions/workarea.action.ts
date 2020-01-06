import { Action, createAction, props } from '@ngrx/store';
import { HesServiceStatus } from '../../models/workarea-hesinfo.model';

export const PingHesService = createAction('[Workarea] Ping HES Service');

export const PingHesServiceFail = createAction('[Workarea] Ping HES Service Fail', props<{ payload: any }>());

export const PingHesServiceSuccess = createAction('[Workarea] Ping HES Service Success', props<HesServiceStatus>());
