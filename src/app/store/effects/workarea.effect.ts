import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as workareaActions from '../actions/workarea.action';
import { WorkareaService } from '../../services/workarea.service';

@Injectable()
export class WorkareaEffects {
    constructor(private actions$: Actions, private workareaService: WorkareaService) {}


        pingHesService$ = createEffect(() =>
        this.actions$.pipe(
            ofType(workareaActions.PingHesService),

            switchMap(() => {
                return this.workareaService.pingHesService().pipe(
                    map(response => workareaActions.PingHesServiceSuccess(response)),
                    catchError(error => {
                        return of(workareaActions.PingHesServiceFail(error));
                    })
                );
            })
        )
        );
    }
