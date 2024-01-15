export * from './appsApi';
import { AppsApi } from './appsApi';
export * from './machinesApi';
import { MachinesApi } from './machinesApi';
export * from './volumesApi';
import { VolumesApi } from './volumesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AppsApi, MachinesApi, VolumesApi];
