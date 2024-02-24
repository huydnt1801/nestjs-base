import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ApiCauses } from 'src/config/exception/api-causes';
import Web3 from 'web3';
import axios from 'axios';
import { BigNumber } from 'bignumber.js';
import { ChainName, Network } from 'src/shared/enums';
import { ValidationOptions, registerDecorator } from 'class-validator';
import { float } from 'aws-sdk/clients/cloudfront';
import moment from 'moment';

import * as NodeCache from 'node-cache';
const nodeCache = new NodeCache({ stdTTL: 2, checkperiod: 2 });
import CryptoJS from 'crypto-js';
const keccak256 = require('js-sha3').keccak256;
import bitcoinjs from 'bitcoinjs-lib';
import web3 from '@solana/web3.js';
import { CurrencyConfig } from 'src/database/entities';

export function nowInMillis(): number {
  return Date.now();
}

// Alias for nowInMillis
export function now(): number {
  return nowInMillis();
}

export function nowInSeconds(): number {
  return (nowInMillis() / 1000) | 0;
}

export function compareDate(dateSecond1: number, dateSecond2: number): number {
  const dateTime1 = new Date(dateSecond1 * 1000);
  const dateTime2 = new Date(dateSecond2 * 1000);
  const dateCompare1 = Date.parse(
    `${dateTime1.getFullYear()}-${dateTime1.getMonth()}-${dateTime1.getDate()}`,
  );
  const dateCompare2 = Date.parse(
    `${dateTime2.getFullYear()}-${dateTime2.getMonth()}-${dateTime2.getDate()}`,
  );
  if (dateCompare1 == dateCompare2) {
    return 0;
  } else if (dateCompare1 > dateCompare2) {
    return 1;
  } else {
    return -1;
  }
}

export function addHttps(url: string) {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
    url = 'https://' + url;
  }
  return url;
}

export function checkIPaginationOptions(options: IPaginationOptions): boolean {
  if (options.limit == 0 || options.page == 0) {
    return false;
  }
  return true;
}

export function encrypt(data: string) {
  return CryptoJS.MD5(data).toString();
}

export function randomString(length: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function randomNumberCode(length: number) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function convertToSlug(Text: string) {
  return Text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export function convertToString(value: any) {
  return typeof value === 'string' ? value : '';
}

export function isNumber(value: any) {
  if (value.match(/^\d+$/)) {
    ///^[+-]?\d+(\.\d+)?$/
    return true;
  } else {
    return false;
  }
}

export function isFloat(value: any) {
  if (value.match(/^[+-]?\d+(\.\d+)?$/)) {
    return true;
  } else {
    return false;
  }
}

export function isPhoneNumber(inputtxt) {
  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (inputtxt.match(phoneno)) {
    return true;
  } else {
    return false;
  }
}

export function checkCsv(file) {
  const type = 'csv';

  const csvType = file.mimetype.split('/')[1].toUpperCase();
  const csvSize = file.size;

  if (csvSize > 100 * 1000 * 1000) throw ApiCauses.FILE_SIZE_OVER;

  if (csvType.toLowerCase() !== type) throw ApiCauses.FILE_TYPE_INVALID;

  return true;
}

export async function checkImage(file) {
  const listType = [
    'JPG',
    'JPEG',
    'PNG',
    'GIF',
    'SVG',
    'MP4',
    'WEBM',
    'MP3',
    'MPEG',
    'WAV',
    'OGG',
    'GLB',
    'GLTF',
    'SVG+XML',
    'OCTET-STREAM',
    'STL',
    '3MF',
    '3DS',
    'MAX',
    'OBJ',
    'COLLADA',
    'VRML',
    'X3D',
    'STP',
    'FBX',
    'GLTF-BINARY',
  ];

  const imgType = file.mimetype.split('/')[1].toUpperCase();
  const imgSize = file.size;
  if (imgSize > 100 * 1000 * 1000) throw ApiCauses.FILE_SIZE_OVER;
  if (!Buffer.isBuffer(file.buffer)) throw ApiCauses.FILE_TYPE_INVALID;

  //TODO: check by magic number
  if (!listType.includes(imgType)) throw ApiCauses.FILE_TYPE_INVALID;
  return true;
}

export function convertToObject(value: any) {
  return typeof value === 'object' ? value : {};
}

export function getArrayPagination<T>(
  totalItems: any[],
  options: any,
): Pagination<T> {
  const { limit, page } = options;

  const selectedItems = totalItems.slice((page - 1) * limit, page * limit);
  const pagination = {
    totalItems: totalItems.length,
    itemCount: selectedItems.length,
    itemsPerPage: limit,
    totalPages: Math.ceil(totalItems.length / limit),
    currentPage: page,
  };

  return new Pagination(selectedItems, pagination, null);
}

export function getArrayPaginationBuildTotal<T>(
  totalItems: any[],
  total: number,
  options: any,
): Pagination<T> {
  const { limit, page } = options;
  const selectedItems = totalItems;

  const pagination = {
    totalItems: Number(total),
    itemCount: Number(totalItems.length),
    itemsPerPage: Number(limit),
    totalPages: Math.ceil(Number(total) / limit),
    currentPage: Number(page),
  };

  return new Pagination(selectedItems, pagination, null);
}

export function existValueInEnum(type: any, value: any): boolean {
  return (
    Object.keys(type)
      .filter((k) => isNaN(Number(k)))
      .filter((k) => type[k] === value).length > 0
  );
}

export function getOffset(paginationOptions: IPaginationOptions) {
  let offset = 0;
  if (paginationOptions.page && paginationOptions.limit) {
    const page = Number(paginationOptions.page);
    const limit = Number(paginationOptions.limit);
    if (page > 0) {
      offset = (page - 1) * limit;
    }
  }
  return offset;
}

export async function checkTypeERC(
  rpcEndpoint: string,
  contractAddress: string,
  type: string,
) {
  const web3 = new Web3(rpcEndpoint);

  const ERC165Abi: any = [
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ];
  const ERC1155InterfaceId = '0xd9b67a26';
  const ERC721InterfaceId = '0x80ac58cd';

  const contract = new web3.eth.Contract(ERC165Abi, contractAddress);

  if (type == 'ERC1155') {
    return contract.methods.supportsInterface(ERC1155InterfaceId).call();
  }

  if (type == 'ERC721') {
    return contract.methods.supportsInterface(ERC721InterfaceId).call();
  }
}

async function web3Cache(key, func) {
  let value = nodeCache.get(key);
  if (value == undefined) {
    // handle miss!
    value = await func;
    nodeCache.set(key, value);
    return value;
  }
  return value;
}

export async function getBlockNumber(chainId, web3) {
  return web3Cache(`${chainId}: getBlockNumber`, web3.eth.getBlockNumber());
}

export function convertBigNumberToDecimal(bigNum: string, decimal: number) {
  // currency * 10^18
  const preZero = [];

  if (bigNum.length > decimal) {
    bigNum =
      bigNum.slice(0, bigNum.length - decimal) +
      '.' +
      bigNum.slice(bigNum.length - decimal, bigNum.length);
  } else if (bigNum.length == decimal) {
    bigNum = '0.' + bigNum;
  } else {
    for (let i = 0; i < decimal - bigNum.length; i++) {
      preZero[i] = '0';
    }
    bigNum = '0.' + preZero.join('') + bigNum;
  }

  return bigNum;
}

//NOTE: objectArray must be sorted by key property by asc
export function binarySearch(
  objectArray,
  objectFind,
  objectKeyFind,
  objectKeyArray,
) {
  let start = 0,
    end = objectArray.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (objectArray[mid][objectKeyArray] == objectFind[objectKeyFind]) {
      return objectArray[mid];
    } else if (objectArray[mid][objectKeyArray] < objectFind[objectKeyFind]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}

export function getContentTypeByURL(link: string) {
  return axios.get(link).then(async function (response) {
    return response.headers['content-type'];
  });
}

export function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function convertTokenBalance(balance: BigNumber, decimals: number) {
  return balance.div(new BigNumber(10).pow(decimals));
}

export function aesEncrypt(data, key) {
  return CryptoJS.AES.encrypt(data, key).toString();
}

export function aesDecrypt(cipherText, key) {
  return CryptoJS.AES.decrypt(cipherText, key).toString(CryptoJS.enc.Utf8);
}

export async function aesEncryptFixed(cipherText: string) {
  const iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
  const encrypted = CryptoJS.AES.encrypt(
    cipherText,
    CryptoJS.enc.Utf8.parse(process.env.AES_KEY),
    { iv: iv },
  );
  return encrypted.toString();
}

export async function generateCodePair(): Promise<{
  code: string;
  codeEncrypted: string;
}> {
  const key = randomString(32);
  return { code: key, codeEncrypted: await aesEncryptFixed(key) };
}

export const bytesToString = (bytes) => {
  return Buffer.from(bytes, 'hex').toString('hex');
};

export function formatDataCryptounits(data: any) {
  const mainData = [];
  const lines = data.split('\n').filter(Boolean);
  interface ServiceInstance {
    id: string;
    cryptoUnits: Array<{
      cryptoUnitNum: number;
      selected: boolean;
      location: string;
    }>;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('SERVICE INSTANCE:')) {
      const instanceId = line.split('SERVICE INSTANCE: ')[1];
      const serviceInstance: ServiceInstance = {
        id: '',
        cryptoUnits: [],
      };
      serviceInstance.id = instanceId;

      // Skip the header line
      i++;

      while (i < lines.length && !lines[i].startsWith('SERVICE INSTANCE:')) {
        const [cryptoUnitNum, selected, location] = lines[i]
          .trim()
          .split(/\s+/);
        if (cryptoUnitNum && parseInt(cryptoUnitNum)) {
          serviceInstance.cryptoUnits.push({
            cryptoUnitNum: parseInt(cryptoUnitNum),
            selected: selected === 'true',
            location,
          });
        }
        i++;
      }

      mainData.push(serviceInstance);

      // Decrement i to account for the next iteration's increment
      i--;
    }
  }

  return mainData;
}

export function formatDataMasterkeys(data: any) {
  const mainData = [];
  const lines = data.split('\n').filter(Boolean);
  interface ServiceInstance {
    id: string;
    cryptoUnits: Array<{
      cryptoUnitNum: number;
      status: string;
      verificationPattern: string;
    }>;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('SERVICE INSTANCE:')) {
      const instanceId = line.split('SERVICE INSTANCE: ')[1];
      const serviceInstance: ServiceInstance = {
        id: '',
        cryptoUnits: [],
      };
      serviceInstance.id = instanceId;

      // Skip the header line
      i++;

      while (i < lines.length && !lines[i].startsWith('SERVICE INSTANCE:')) {
        const [cryptoUnitNum, status, verificationPattern] = lines[i]
          .trim()
          .split(/\s+/);
        if (cryptoUnitNum && parseInt(cryptoUnitNum) && verificationPattern) {
          const [verificationPatternPart] = lines[i + 1].trim().split(/\s+/);
          serviceInstance.cryptoUnits.push({
            cryptoUnitNum: parseInt(cryptoUnitNum),
            status: status,
            verificationPattern: verificationPattern + verificationPatternPart,
          });
        }
        i++;
      }
      mainData.push(serviceInstance);

      // Decrement i to account for the next iteration's increment
      i--;
    }
  }

  return mainData;
}

export async function getWalletByPublicKey(
  currencyConfig: CurrencyConfig,
  publicKey: any,
  chainName: string,
) {
  let addressStr;
  switch (currencyConfig.network) {
    case Network.ETHEREUM:
      addressStr = await getAddressFromPublicKey(publicKey);
      break;
    case Network.POLYGON:
      addressStr =
        '0x' + keccak256(Buffer.from(publicKey.slice(2), 'hex')).slice(-40);
      break;
    case Network.BITCOIN:
      const address = publicKeyToBTCAddress(publicKey, chainName);
      addressStr = address;
      break;
    case Network.SOLANA:
      const publicKeyBuffer = Buffer.from(publicKey, 'hex');
      const publicKeyObj = new web3.PublicKey(publicKeyBuffer);
      addressStr = publicKeyObj.toBase58();
      break;
    default:
      throw ApiCauses.CURRENCY_NOT_FOUND;
  }

  return addressStr;
}

export async function getAddressFromPublicKey(publicKeyBuffer) {
  const url =
    process.env.WALLET_API_URL + 'v1/grep11/key/get_wallet_by_public_key';
  const publicKeyStr = toString(publicKeyBuffer);
  const data = {
    public_key: publicKeyStr,
  };

  try {
    const response = await callAPIToGolang(url, data);
    return response.address;
  } catch (error) {
    throw error;
  }
}

export function IsTimestamp(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsTimestamp',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: any) {
          try {
            const date = new Date(value);
            return !isNaN(date.getTime());
          } catch (error) {
            return false;
          }
        },
        defaultMessage(args: any) {
          return 'Invalid timestamp format';
        },
      },
    });
  };
}

export function IsDateNotInTheFuture(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsDateNotInTheFuture',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: any) {
          // Convert value to Date (it's a timestamp in seconds)
          const date = new Date(value * 1000);

          // Get the current date
          const now = new Date();

          // Check if the date is in the future
          return date <= now;
        },
      },
    });
  };
}

export function IsDateInTheFuture(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsDateInTheFuture',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: any) {
          // Convert value to Date (it's a timestamp in seconds)
          const date = new Date(value * 1000);

          // Get the current date
          const now = new Date();

          // Check if the date is in the future
          return date > now;
        },
      },
    });
  };
}

export function publicKeyToBTCAddress(bytes, network) {
  const publicKeyHash160 = bitcoinjs.crypto.hash160(bytes);
  if (network === ChainName.MAINNET) {
    // change to list test net include
    return bitcoinjs.address.toBase58Check(publicKeyHash160, 0x00);
  }
  const address = bitcoinjs.address.toBase58Check(publicKeyHash160, 0x6f); // test: 0x6F main: 0x00
  return address;
}

export async function getMYRRate(currency: string) {
  return axios
    .get(
      `${process.env.COIN_BASE_API || 'https://api.coinbase.com/v2/exchange-rates'}?currency=${currency}`,
    )
    .then((response) => {
      return response.data.data.rates.MYR;
    })
    .catch((error) => {
      console.error(error);
    });
}

export function formatDateFrom(date, format = 'DD MM yyyy') {
  const currentDate = moment(date);
  const formattedDate = currentDate.format(format);
  return formattedDate;
}

export async function callSignTransactionAPI(
  publicKey: string,
  privateKey: string,
  toAddress: string,
  value: float,
  count = 1,
) {
  const url = process.env.WALLET_API_URL + 'v1/grep11/key/sign_transaction';
  const data = {
    public_key: publicKey,
    private_key: privateKey,
    to_address: toAddress,
    value: value,
  };
  console.log('count', count);

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (count > 5) throw error;

    await callSignTransactionAPI(
      publicKey,
      privateKey,
      toAddress,
      value,
      count++,
    );
  }
}

export async function callAPIToGolang(url: string, data: any, count = 1) {
  console.log('count', count);

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (count > 5) throw error;

    await callAPIToGolang(url, data, count++);
  }
}

export function toString(src) {
  return Buffer.from(src).toString('base64');
}

export function toByte(src) {
  return Buffer.from(src, 'base64');
}

export async function delay(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

export function convertTime(time: Date) {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}
