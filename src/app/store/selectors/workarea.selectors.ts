import { createSelector } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as fromWorkarea from '../reducers/workarea.reducer';

export const getPingServiceStatus = createSelector(
    fromRoot.getWorkareaState,
    fromWorkarea.gethesServiceStatus
);

