import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HesServiceStatus } from '../models/workarea-hesinfo.model';

import { getHttpOptions } from './http-options';
import { XMLToJSONService } from './xml-to-json.service';

@Injectable({
    providedIn: 'root'
})
export class WorkareaService {
    CLIENT_APP = 'DeviceManagerAngular';

    constructor(private http: HttpClient, private xmlToJSONService: XMLToJSONService) {}

    pingHesService(): Observable<HesServiceStatus> {
        return this.http
            .post(
                `${environment.backend_api_prefix}/WorkareaWSSoapHttpPort`,
                `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <SOAP-ENV:Body>
                  <tns:pingHesService xmlns:tns="http://webservice.workarea.aim.enermet/">
                  <pingSKM>true</pingSKM>
                  </tns:pingHesService>
                </SOAP-ENV:Body>
              </SOAP-ENV:Envelope>`,
                getHttpOptions()
            )
            .pipe(
                map((response: string) => this.xmlToJSONService.convertToJSON(response)),
                map((response: any) => response.envelope.body.pingHesServiceResponse.return),
                map((response: any) => {
                    return {
                        databaseKeyExists: response.databaseKeyExists === 'true',
                        message: response.message,
                        skmState: response.skmState === 'true',
                        skmType: response.skmType,
                        status: Number(response.status)
                    };
                })
            );
    }
}
