import BigNumber from 'bignumber.js';

export const vaultAddressKey = 'vault_address';
export const tpetAddressKey = 'tpet_address';
export const epetAddressKey = 'epet_address';
export const tpetUsd = 'tpet_usd';
export const epetUsd = 'epet_usd';
export const ethUsd = 'eth_usd';
export const borrowRate = 'borrow_rate';
export const listing = 'listing';
export const liquidate = 'liquidate';
export const VALUE_RATIO = 'value_ratio';
export const farmAddress = 'farm_address';
export const ETH_LAST_FETCH = 'eth_last_fetch';

export const ETH_USD_TICKER = 'ETH/USDT';
export const BSC_RPC = 'bsc_rpc';
export const VERIFIER_PK = 'verifier_pk';

export const DOMAIN_NAME = 'XRobot';
export const DOMAIN_NAME_XRB = 'XRobot Token';
export const DOMAIN_NAME_ERB = 'TRobot Token';
export const SIGNATURE_VERSION = '1';
export const CHAIN_ID = 97;

export const TIME_PER_BATTERY_BLOCK = 6 * 60 * 60 * 1000; // 6 hours per block battery
export const MAX_BLOCK_PER_BATTERY = 3; // maximum 3 blocks per battery

export const BORROW_TYPE = {
    BorrowRequest: [
        { name: 'borrowId', type: 'string' },
        { name: 'amountIn', type: 'uint256' },
        { name: 'amountOut', type: 'uint256' },
        { name: 'borrower', type: 'address' },
        { name: 'signatureExpTime', type: 'uint256' },
    ],
};

export const REPAY_TYPE = {
    RepayRequest: [
        { name: 'borrowId', type: 'string' },
        { name: 'user', type: 'address' },
        { name: 'signatureExpTime', type: 'uint256' },
    ],
};

export const CONVERT_TYPE = {
    ConvertRequest: [
        { name: 'convertId', type: 'string' },
        { name: 'user', type: 'address' },
        { name: 'trbAmount', type: 'uint256' },
        { name: 'xrbAmount', type: 'uint256' },
        { name: 'signatureExpTime', type: 'uint256' },
    ],
};

// ClaimTRBRequest(string claimId,address user,uint256 amount,uint256 signatureExpTime)
export const CLAIM_TYPE = {
    ClaimTRBRequest: [
        { name: 'claimId', type: 'string' },
        { name: 'user', type: 'address' },
        { name: 'amount', type: 'uint256' },
        { name: 'signatureExpTime', type: 'uint256' },
    ],
};

export const RELEASE_TYPE = {
    ReleaseRequest: [
        { name: 'convertId', type: 'string' },
        { name: 'user', type: 'address' },
        { name: 'signatureExpTime', type: 'uint256' },
    ],
};

export const BUY_TYPE = {
    BuyRequest: [
        { name: 'action', type: 'string' },
        { name: 'user', type: 'address' },
        { name: 'amount', type: 'uint256' },
        { name: 'isXRB', type: 'bool' },
        { name: 'signatureExpTime', type: 'uint256' },
    ],
};

export const PERMIT_TYPE = {
    Permit: [
        {
            name: 'owner',
            type: 'address',
        },
        {
            name: 'spender',
            type: 'address',
        },
        {
            name: 'value',
            type: 'uint256',
        },
        {
            name: 'nonce',
            type: 'uint256',
        },
        {
            name: 'deadline',
            type: 'uint256',
        },
    ],
};

//  "DepositRequest(address user,string robotId,uint256 price,uint256 depositTime,uint256 signatureExpTime)"
export const DEPOSIT_TYPE = {
    DepositRequest: [
        { name: 'user', type: 'address' },
        { name: 'robotId', type: 'string' },
        { name: 'price', type: 'uint256' },
        { name: 'depositTime', type: 'uint256' },
        { name: 'signatureExpTime', type: 'uint256' },
    ],
};

//  "MintRequest(bytes32 mintId,uint256 price,bool isFree,string tokenURI,address owner,uint256 signatureExpTime)"
export const MINT_TYPE = {
    MintRequest: [
        { name: 'mintId', type: 'bytes32' },
        { name: 'price', type: 'uint256' },
        { name: 'isFree', type: 'bool' },
        { name: 'tokenURI', type: 'string' },
        { name: 'owner', type: 'address' },
        { name: 'signatureExpTime', type: 'uint256' },
    ],
};

export enum TYPE {
    PET,
    SPENT,
    ENDBOOST,
}

export type Event = {
    timeStamp: number;
    value: BigNumber;
    type: TYPE;
};

export enum GameEvents {
    REQUEST_GAME = 'request_game',
    START_GAME = 'start_game',
    PLAY_GAME = 'play_game',
    GAME_REQUEST = 'game_request',
    GAME_RESPONSE = 'game_response',
    GAME_STARTED = 'game_started',
    GAME_TURN = 'game_turn',
    GAME_ROUND = 'game_round',
    GAME_RESULT = 'game_result',
}
