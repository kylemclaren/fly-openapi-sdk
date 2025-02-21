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
import { ListApp } from './listApp';

export class ListAppsResponse {
    'apps'?: Array<ListApp>;
    'totalApps'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apps",
            "baseName": "apps",
            "type": "Array<ListApp>"
        },
        {
            "name": "totalApps",
            "baseName": "total_apps",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ListAppsResponse.attributeTypeMap;
    }
}

