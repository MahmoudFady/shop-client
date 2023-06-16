import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';
@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly secretKey = 'iti_project';
  encrypt(data: string): string {
    return AES.encrypt(data, this.secretKey).toString();
  }

  decrypt(encryptedData: string): string {
    return AES.decrypt(encryptedData, this.secretKey).toString(enc.Utf8);
  }

  storeSecureData(key: string, data: string): void {
    data = this.encrypt(data);
    localStorage.setItem(key, data);
  }

  retrieveSecureData(key: string): string {
    const encryptedData = localStorage.getItem(key);
    console.log('key', key);
    if (encryptedData) {
      return this.decrypt(encryptedData);
    }
    return '';
  }

  removeSecureData(key: string): void {
    localStorage.removeItem(key);
  }
}
