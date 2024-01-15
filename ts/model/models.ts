import localVarRequest from 'request';

export * from './apiDNSConfig';
export * from './apiFile';
export * from './apiHTTPOptions';
export * from './apiHTTPResponseOptions';
export * from './apiMachineCheck';
export * from './apiMachineConfig';
export * from './apiMachineGuest';
export * from './apiMachineHTTPHeader';
export * from './apiMachineInit';
export * from './apiMachineMetrics';
export * from './apiMachineMount';
export * from './apiMachinePort';
export * from './apiMachineProcess';
export * from './apiMachineRestart';
export * from './apiMachineService';
export * from './apiMachineServiceConcurrency';
export * from './apiProxyProtoOptions';
export * from './apiStatic';
export * from './apiStopConfig';
export * from './apiTLSOptions';
export * from './app';
export * from './checkStatus';
export * from './createAppRequest';
export * from './createLeaseRequest';
export * from './createMachineRequest';
export * from './createVolumeRequest';
export * from './errorResponse';
export * from './extendVolumeRequest';
export * from './extendVolumeResponse';
export * from './imageRef';
export * from './lease';
export * from './listApp';
export * from './listAppsResponse';
export * from './listenSocket';
export * from './machine';
export * from './machineEvent';
export * from './machineExecRequest';
export * from './machineVersion';
export * from './mainStatusCode';
export * from './organization';
export * from './processStat';
export * from './signalRequest';
export * from './stopRequest';
export * from './updateMachineRequest';
export * from './updateVolumeRequest';
export * from './volume';
export * from './volumeSnapshot';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ApiDNSConfig } from './apiDNSConfig';
import { ApiFile } from './apiFile';
import { ApiHTTPOptions } from './apiHTTPOptions';
import { ApiHTTPResponseOptions } from './apiHTTPResponseOptions';
import { ApiMachineCheck } from './apiMachineCheck';
import { ApiMachineConfig } from './apiMachineConfig';
import { ApiMachineGuest } from './apiMachineGuest';
import { ApiMachineHTTPHeader } from './apiMachineHTTPHeader';
import { ApiMachineInit } from './apiMachineInit';
import { ApiMachineMetrics } from './apiMachineMetrics';
import { ApiMachineMount } from './apiMachineMount';
import { ApiMachinePort } from './apiMachinePort';
import { ApiMachineProcess } from './apiMachineProcess';
import { ApiMachineRestart } from './apiMachineRestart';
import { ApiMachineService } from './apiMachineService';
import { ApiMachineServiceConcurrency } from './apiMachineServiceConcurrency';
import { ApiProxyProtoOptions } from './apiProxyProtoOptions';
import { ApiStatic } from './apiStatic';
import { ApiStopConfig } from './apiStopConfig';
import { ApiTLSOptions } from './apiTLSOptions';
import { App } from './app';
import { CheckStatus } from './checkStatus';
import { CreateAppRequest } from './createAppRequest';
import { CreateLeaseRequest } from './createLeaseRequest';
import { CreateMachineRequest } from './createMachineRequest';
import { CreateVolumeRequest } from './createVolumeRequest';
import { ErrorResponse } from './errorResponse';
import { ExtendVolumeRequest } from './extendVolumeRequest';
import { ExtendVolumeResponse } from './extendVolumeResponse';
import { ImageRef } from './imageRef';
import { Lease } from './lease';
import { ListApp } from './listApp';
import { ListAppsResponse } from './listAppsResponse';
import { ListenSocket } from './listenSocket';
import { Machine } from './machine';
import { MachineEvent } from './machineEvent';
import { MachineExecRequest } from './machineExecRequest';
import { MachineVersion } from './machineVersion';
import { MainStatusCode } from './mainStatusCode';
import { Organization } from './organization';
import { ProcessStat } from './processStat';
import { SignalRequest } from './signalRequest';
import { StopRequest } from './stopRequest';
import { UpdateMachineRequest } from './updateMachineRequest';
import { UpdateVolumeRequest } from './updateVolumeRequest';
import { Volume } from './volume';
import { VolumeSnapshot } from './volumeSnapshot';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ApiMachineRestart.PolicyEnum": ApiMachineRestart.PolicyEnum,
        "MainStatusCode": MainStatusCode,
        "SignalRequest.SignalEnum": SignalRequest.SignalEnum,
}

let typeMap: {[index: string]: any} = {
    "ApiDNSConfig": ApiDNSConfig,
    "ApiFile": ApiFile,
    "ApiHTTPOptions": ApiHTTPOptions,
    "ApiHTTPResponseOptions": ApiHTTPResponseOptions,
    "ApiMachineCheck": ApiMachineCheck,
    "ApiMachineConfig": ApiMachineConfig,
    "ApiMachineGuest": ApiMachineGuest,
    "ApiMachineHTTPHeader": ApiMachineHTTPHeader,
    "ApiMachineInit": ApiMachineInit,
    "ApiMachineMetrics": ApiMachineMetrics,
    "ApiMachineMount": ApiMachineMount,
    "ApiMachinePort": ApiMachinePort,
    "ApiMachineProcess": ApiMachineProcess,
    "ApiMachineRestart": ApiMachineRestart,
    "ApiMachineService": ApiMachineService,
    "ApiMachineServiceConcurrency": ApiMachineServiceConcurrency,
    "ApiProxyProtoOptions": ApiProxyProtoOptions,
    "ApiStatic": ApiStatic,
    "ApiStopConfig": ApiStopConfig,
    "ApiTLSOptions": ApiTLSOptions,
    "App": App,
    "CheckStatus": CheckStatus,
    "CreateAppRequest": CreateAppRequest,
    "CreateLeaseRequest": CreateLeaseRequest,
    "CreateMachineRequest": CreateMachineRequest,
    "CreateVolumeRequest": CreateVolumeRequest,
    "ErrorResponse": ErrorResponse,
    "ExtendVolumeRequest": ExtendVolumeRequest,
    "ExtendVolumeResponse": ExtendVolumeResponse,
    "ImageRef": ImageRef,
    "Lease": Lease,
    "ListApp": ListApp,
    "ListAppsResponse": ListAppsResponse,
    "ListenSocket": ListenSocket,
    "Machine": Machine,
    "MachineEvent": MachineEvent,
    "MachineExecRequest": MachineExecRequest,
    "MachineVersion": MachineVersion,
    "Organization": Organization,
    "ProcessStat": ProcessStat,
    "SignalRequest": SignalRequest,
    "StopRequest": StopRequest,
    "UpdateMachineRequest": UpdateMachineRequest,
    "UpdateVolumeRequest": UpdateVolumeRequest,
    "Volume": Volume,
    "VolumeSnapshot": VolumeSnapshot,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
