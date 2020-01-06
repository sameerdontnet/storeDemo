import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export function getHttpOptions(): {
    headers?:
        | HttpHeaders
        | {
              [header: string]: string | string[];
          };
    responseType: 'text';
    withCredentials: boolean;
} {
    if (environment.production) {
        return {
            headers: {
                'Content-Type': 'text/xml; charset=utf-8'
            },
            responseType: 'text',
            withCredentials: false
        };
    } else {
        return {
            responseType: 'text',
            withCredentials: false
        };
    }
}
