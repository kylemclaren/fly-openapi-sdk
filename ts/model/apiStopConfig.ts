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

export class ApiStopConfig {
    'signal'?: string;
    'timeout'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "signal",
            "baseName": "signal",
            "type": "string"
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApiStopConfig.attributeTypeMap;
    }
}

