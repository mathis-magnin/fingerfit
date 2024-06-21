import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

export const httpOptionsBase = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

//will be changed if the server is running with docker
export const serverUrl = environment.serverUrl;