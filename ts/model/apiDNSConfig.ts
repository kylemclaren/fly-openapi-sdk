/**
 * Fly Machines API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ApiDNSConfig {
    'skipRegistration'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "skipRegistration",
            "baseName": "skip_registration",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ApiDNSConfig.attributeTypeMap;
    }
}

