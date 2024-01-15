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

/**
* The Machine restart policy defines whether and how flyd restarts a Machine after its main process exits. See https://fly.io/docs/machines/guides-examples/machine-restart-policy/.
*/
export class ApiMachineRestart {
    /**
    * When policy is on-failure, the maximum number of times to attempt to restart the Machine before letting it stop.
    */
    'maxRetries'?: number;
    /**
    * * no - Never try to restart a Machine automatically when its main process exits, whether that’s on purpose or on a crash. * always - Always restart a Machine automatically and never let it enter a stopped state, even when the main process exits cleanly. * on-failure - Try up to MaxRetries times to automatically restart the Machine if it exits with a non-zero exit code. Default when no explicit policy is set, and for Machines with schedules.
    */
    'policy'?: ApiMachineRestart.PolicyEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maxRetries",
            "baseName": "max_retries",
            "type": "number"
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "ApiMachineRestart.PolicyEnum"
        }    ];

    static getAttributeTypeMap() {
        return ApiMachineRestart.attributeTypeMap;
    }
}

export namespace ApiMachineRestart {
    export enum PolicyEnum {
        No = <any> 'no',
        Always = <any> 'always',
        OnFailure = <any> 'on-failure'
    }
}
