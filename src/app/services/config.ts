import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class Config {
    constructor(
        public readonly url: string,
        public readonly appName: string,
        public readonly clientId: string,
        public readonly clientSecret: string
    ) {
    }

    public buildUrl(url: string) {
        if (url.length > 0 && url.startsWith('/')) {
            url = url.substr(1);
        }

        const result = `${this.url}/${url}`.replace('{app}', this.appName);

        return result;
    }
}

export const DefaultConfig = new Config(
    `${environment.squidex.apiUrl}`,
    `${environment.squidex.appName}`,
    `${environment.squidex.clientId}`,
    `${environment.squidex.clientSecret}`
);
