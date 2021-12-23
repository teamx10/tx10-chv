import CryptoJS from 'crypto-js';

export const encrypt = (message: string, password = '') =>
  CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(message));

export const decrypt = (hash: string, password = '') => CryptoJS.enc.Base64.parse(hash).toString(CryptoJS.enc.Utf8);
