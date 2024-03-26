import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class StorageProvider {

    /**
     * Function for storing data against key locally
     * @param key string
     * @param data object
     */
    setSessionStorageData(key: any, data: any) {
        let strData = typeof data == 'string' ? data : JSON.stringify(data)
        sessionStorage.setItem(key, strData);
    }

    /**
     * * Function to fetch data against key locally
     * @param key string
     */
    getSessionStorageData(key: any) {
        return JSON.parse(sessionStorage.getItem(key) || '');
    }

    /**
     * * Function to remove key locally
     * @param keyName string
     * @param storageType string
     */
    removeKeys(keyName: any) {
        sessionStorage.removeItem(keyName);
    }
}
