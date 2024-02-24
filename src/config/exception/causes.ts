import { HttpException, HttpStatus, Body } from '@nestjs/common';
import { JsonException } from './exception.dto';

export class Causes {
    public static INTERNAL_ERROR = new HttpException('Server internal error', HttpStatus.INTERNAL_SERVER_ERROR);

    public static JWT_NOT_FOUND = new HttpException('JWT not found', HttpStatus.UNAUTHORIZED);

    public static CANNOT_BUY_YOUR_NFT = new HttpException('Cannot buy your own NFT', HttpStatus.BAD_REQUEST);

    public static SELLER_NOT_EXISTS = new HttpException('Seller not exists', HttpStatus.BAD_REQUEST);

    public static REFERRAL_NOT_FOUND = new HttpException('Referral not found', HttpStatus.BAD_REQUEST);

    public static PRIZE_POOL_DISTRIBUTION_NOT_EXIST = new HttpException(
        'Prize pool distribution not exist',
        HttpStatus.BAD_REQUEST,
    );

    public static MISSING_REFERRAL_DAILY = new HttpException('Missing referral daily reward', HttpStatus.BAD_REQUEST);

    public static TOTAL_PERCENT_ERROR = new HttpException(
        'The total percent must equal to 100',
        HttpStatus.BAD_REQUEST,
    );

    public static TOTAL_NOT_VALID = new HttpException('The total of probability not valid', HttpStatus.BAD_REQUEST);

    public static PRIZE_POOL_NOT_EXIST = new HttpException('Prize pool not exist', HttpStatus.BAD_REQUEST);

    public static GAME_PROBABILITY_MUST_BE_ONE = new HttpException(
        'Sum of probabilities must be one hundred percent',
        HttpStatus.BAD_REQUEST,
    );

    public static INVALID_TIME = new HttpException('Invalid time', HttpStatus.BAD_REQUEST);

    public static RANK_CONFIG_NOT_FOUND = new HttpException('Rank config not found', HttpStatus.BAD_REQUEST);

    public static TOKEN_CONFIG_NOT_FOUND = new HttpException('Token config not found', HttpStatus.BAD_REQUEST);

    public static GAME_PROBABILITY_NOT_FOUND = new HttpException('Game probability not found', HttpStatus.BAD_REQUEST);

    public static NFT_LEVEL_NOT_EXISTS = new HttpException('NFT level not exists', HttpStatus.BAD_REQUEST);

    public static PURCHASE_LIMIT_EXCEEDED = new HttpException('Purchase limit exceeded', HttpStatus.BAD_REQUEST);

    public static GRADE_TOO_LOW = new HttpException('Your grade is too low', HttpStatus.BAD_REQUEST);

    public static REFERRAL_CONFIG_NOT_FOUND = new HttpException('Referral config not found', HttpStatus.BAD_REQUEST);

    public static PRICE_MUST_LAGER_THAN_SYSTEM = new HttpException(
        'Price must be larger than system price',
        HttpStatus.BAD_REQUEST,
    );

    public static REFERRAL_CODE_NOT_FOUND = new HttpException('Referral code not found', HttpStatus.BAD_REQUEST);

    public static TYPE_COLLECTION_ENUM = new HttpException(
        'Invalid collection, it must be required and in enum: all, nft, wdt, coin, loot, key',
        HttpStatus.BAD_REQUEST,
    );

    public static COLLECTION_NOT_FOUND = new HttpException('Collection not found', HttpStatus.BAD_REQUEST);

    public static LOOT_BOX_KEY_COLLECTION_NOT_FOUND = new HttpException(
        'Loot box key collection not found',
        HttpStatus.BAD_REQUEST,
    );

    public static KYC_PENDING_OR_APPROVED = new HttpException('KYC is pending or approved', HttpStatus.BAD_REQUEST);

    public static INVALID_IDENTITY_LENGTH = new HttpException(
        'Length of identity must be 256 maximum',
        HttpStatus.BAD_REQUEST,
    );

    public static INSUFFICIENT_BALANCE = new HttpException('Insufficient balance', HttpStatus.BAD_REQUEST);

    public static USER_BALANCE_NOT_EXIST = new HttpException('User Balance not exist', HttpStatus.BAD_REQUEST);

    public static SOCIAL_SHARE_CONFIG_NOT_FOUND = new HttpException(
        'Social share config not found',
        HttpStatus.BAD_REQUEST,
    );

    public static WORD_NOT_FOUND = new HttpException('Word not found', HttpStatus.BAD_REQUEST);

    public static EXIST_AT_LEAST_ONE_DICTIONARY_WORD_NOT_FOUND = new HttpException(
        'Exist at least one dictionary word not found',
        HttpStatus.BAD_REQUEST,
    );

    public static WORD_EXISTED = new HttpException('Word existed', HttpStatus.BAD_REQUEST);

    public static EXIST_AT_LEAST_ONE_DICTIONARY_ID_NOT_FOUND = new HttpException(
        'Exist at least one dictionary id not found',
        HttpStatus.BAD_REQUEST,
    );

    public static INVALID_IDENTITY_TYPE = new HttpException('identity must be a string', HttpStatus.BAD_REQUEST);

    public static EMAIL_OR_PASSWORD_INVALID = new HttpException('Email or Password is invalid', HttpStatus.BAD_REQUEST);
    public static OLD_PASSWOD_SIMILAR_TO_NEW_PASSWORD = new HttpException(
        'New password must different from old password',
        HttpStatus.PRECONDITION_FAILED,
    );
    public static OLD_PASSWOD_NOT_CORRECT = new HttpException('Old password is not correct', HttpStatus.BAD_REQUEST);
    public static TFA_TOO_LONG = new HttpException(
        '2FA code is too long, it must be 256 character maximum in length',
        HttpStatus.BAD_REQUEST,
    );
    public static TWOFA_INVALID = new HttpException('TwoFactorAuthentication code is invalid', HttpStatus.BAD_REQUEST);
    public static TWOFA_REQUIRED = new JsonException(
        'TwoFactorAuthentication code is required',
        HttpStatus.BAD_REQUEST,
        'TWOFA_REQUIRED',
    );

    public static PHONE_INVALID = new HttpException('phone number or phone prefix is invalid', HttpStatus.BAD_REQUEST);

    public static CANDY_MACHINE_NOT_FOUND = new HttpException(
        'The candy machine is not exists in system',
        HttpStatus.BAD_REQUEST,
    );

    // Order
    public static ORDER_ALREADY_EXISTS = new HttpException(
        'The NFT order already exists in system',
        HttpStatus.BAD_REQUEST,
    );
    public static NOT_ENOUGH_BALANCE_ORDER = new HttpException(
        'Not enough balance for this sell order',
        HttpStatus.BAD_REQUEST,
    );
    public static FIAT_ORDER_NOT_CORRECT = new HttpException("order's fiat not correct", HttpStatus.BAD_REQUEST);
    // NFT

    public static INVALID_ACTION = new HttpException(
        'Action is invalid, must be stake or unstake',
        HttpStatus.BAD_REQUEST,
    );

    public static NFT_NOT_OWNER = new HttpException('You is not the owner of this NFT', HttpStatus.BAD_REQUEST);

    public static NFT_IS_STAKED = new HttpException('This NFT is staked', HttpStatus.BAD_REQUEST);

    public static NFT_NOT_EXISTS = new HttpException('The NFT is not exists in system', HttpStatus.BAD_REQUEST);

    public static NFT_NOT_AVAILABLE = new HttpException('The NFT is not available for order', HttpStatus.BAD_REQUEST);

    public static METADATA_NOT_FOUND = new HttpException(
        'The metadata is not exists in system',
        HttpStatus.BAD_REQUEST,
    );

    public static IMAGE_NOT_FOUND = new HttpException('The image is required', HttpStatus.BAD_REQUEST);

    public static SENDER_NOT_EXIST = new HttpException('There is no id of NFT owner', HttpStatus.BAD_REQUEST);

    public static NFT_NOT_FOUND = new HttpException(
        'Nft not found or you do not have permission to view',
        HttpStatus.BAD_REQUEST,
    );

    public static NFT_DUPLICATED = new HttpException('The NFT is duplicated in system', HttpStatus.BAD_REQUEST);

    public static NFT_NOT_BY_YOU = new HttpException('The NFT is not belong to your wallet', HttpStatus.BAD_REQUEST);

    public static NFT_NOT_BY_SYSTEM = new HttpException(
        'The NFT is not belong to system wallet',
        HttpStatus.BAD_REQUEST,
    );

    public static NFT_ORDER_NOT_LISTING = new HttpException(
        'The NFT order is not currently listing',
        HttpStatus.BAD_REQUEST,
    );

    public static ORDER_NOT_HAVE_PAYMENT_METHOD = new HttpException(
        'Order must have payment method',
        HttpStatus.BAD_REQUEST,
    );

    //Twitter
    public static TWEEET_ID_NOT_EXIST = new HttpException(
        'Can get information of this tweet id',
        HttpStatus.BAD_REQUEST,
    );

    //Avatar

    public static AVATAR_NOT_EXIST = new HttpException('Avatar not exist', HttpStatus.BAD_REQUEST);

    public static USER_ALREADY_HAVE_AVATAR = new HttpException('User already have this avatar', HttpStatus.BAD_REQUEST);

    public static CAN_NOT_DELETE_AVATAR = new HttpException('Can not delete avatar', HttpStatus.BAD_REQUEST);

    public static AVATAR_USED_BY_USER = new HttpException('Avatar is already used by user', HttpStatus.BAD_REQUEST);

    //WDT

    public static WDT_BALANCE_NEEDED = new HttpException('WDT balance to mint is missing', HttpStatus.BAD_REQUEST);

    public static REFERRAL_CODE_INVALID = new HttpException('Referral code is invalid', HttpStatus.BAD_REQUEST);

    public static TFA_NOT_ENABLED = new HttpException(
        'Two factor authentication is not enabled on your account',
        HttpStatus.BAD_REQUEST,
    );

    public static TFA_ENABLED = new HttpException(
        'Two factor authentication is already enabled on your account',
        HttpStatus.BAD_REQUEST,
    );

    public static JWT_EXPIRED = new HttpException('JWT token has expired', HttpStatus.UNAUTHORIZED);

    public static TOKEN_INVALID = new HttpException('JWT token is invalid', HttpStatus.UNAUTHORIZED);

    public static USER_ID_MUST_PROVIDED = new HttpException('Email or username was registered', HttpStatus.CONFLICT);
    public static NOT_ACCESS_CREATE_USER = new HttpException('You cant access create new user', HttpStatus.CONFLICT);
    public static USER_NOT_ACCESS = new HttpException('You can not access', HttpStatus.UNAUTHORIZED);
    public static IPAGINATION_OPTIONS_INVALID = new HttpException(
        'Page and limit have to greater than 0.',
        HttpStatus.BAD_REQUEST,
    );
    public static QUERY_OPTIONS_INVALID = new HttpException('Query options is not valid', HttpStatus.BAD_REQUEST);

    public static CURRENCY_INVALID = new HttpException('Currency is not valid in system', HttpStatus.BAD_REQUEST);

    public static CURRENCY_TOKEN_DIFFERENT = new HttpException(
        'The toke of your payment method must be the same with the token of the order',
        HttpStatus.BAD_REQUEST,
    );

    public static DATA_INVALID = new HttpException('Data is not valid in system', HttpStatus.BAD_REQUEST);

    public static MUST_PROVIDE_BOTH_PASSPORT_ID_AND_PASSPORT_IMAGE = new HttpException(
        'Must provide both passport id and passport image',
        HttpStatus.BAD_REQUEST,
    );

    public static MUST_PROVIDE_BOTH_IDENTITY_CARD_ID_AND_IDENTITY_CARD_IMAGE = new HttpException(
        'Must provide both identity card id and identity card image',
        HttpStatus.BAD_REQUEST,
    );

    public static MUST_PROVIDE_FACE_IMAGE = new HttpException('Must provide face image', HttpStatus.BAD_REQUEST);

    public static MUST_PROVIDE_BANK_CARD_IMAGE = new HttpException(
        'Must provide bank card image',
        HttpStatus.BAD_REQUEST,
    );

    public static FACE_IMAGE_MUST_PROVIDED = new HttpException('Face image must be provided', HttpStatus.BAD_REQUEST);

    public static DUPLICATED_EMAIL_OR_USERNAME = new HttpException(
        'Email or username or Wallet was registered',
        HttpStatus.CONFLICT,
    );

    public static DUPLICATED_EMAIL_OR_PHONE = new HttpException(
        'Email or phone or Wallet was registered',
        HttpStatus.CONFLICT,
    );

    public static CURRENCY_INIT_FAIL = new HttpException('Currency init process was failed', HttpStatus.BAD_REQUEST);
    public static INVALID_SIGNATURE_WALLET = new HttpException(['Signature is not valid'], HttpStatus.CONFLICT);
    public static USER_ERROR = new HttpException(
        ["User does not exist or User has been't activated"],
        HttpStatus.BAD_REQUEST,
    );

    public static KYC_NOT_FOUND = new HttpException('KYC not found', HttpStatus.BAD_REQUEST);

    // S3
    public static CAN_NOT_UPLOAD_IMAGE = new HttpException('Can not upload image', HttpStatus.BAD_REQUEST);

    public static AMOUNT_VALIDATE = new HttpException(
        'Minimum amount must be less than max amount',
        HttpStatus.BAD_REQUEST,
    );

    public static AMOUNT_TRANSACTION_EXCEED = new HttpException('Current order amount lower', HttpStatus.BAD_REQUEST);

    public static AMOUNT_TRANSACTION_TOO_LOW = new HttpException('Transaction amount too low', HttpStatus.BAD_REQUEST);

    public static CAN_NOT_REPORT_TRANSACTION = new HttpException(
        'Transaction is still active, can not report',
        HttpStatus.BAD_REQUEST,
    );

    public static EXIST_REPORT = new HttpException('Transaction Report already exist', HttpStatus.BAD_REQUEST);

    public static TRANSACTION_CONFIRMED = new HttpException('Transaction already confirmed', HttpStatus.BAD_REQUEST);

    public static MISSING_TRANSACTION_ROLE = new HttpException(
        'Missing current user role in transaction',
        HttpStatus.BAD_REQUEST,
    );

    public static NOT_EXIST_ORDER = new HttpException('Order not exist or cancelled', HttpStatus.BAD_REQUEST);

    public static ORDER_ACTIVE = new HttpException('Order already activated', HttpStatus.BAD_REQUEST);

    public static NOT_EXIST_TRANSACTION = new HttpException('Transaction not exist', HttpStatus.BAD_REQUEST);

    public static CAN_NOT_CANCEL_TRANSACTION = new HttpException('Can not cancel transaction', HttpStatus.BAD_REQUEST);

    public static EXIST_TRANSACTION = new HttpException('Transaction already exist', HttpStatus.BAD_REQUEST);

    public static TRANSACTION_CONFIRM_ERROR = new HttpException(
        'Can not confirm this transaction',
        HttpStatus.BAD_REQUEST,
    );

    public static CONFIRMTIME_EXCEEDED = new HttpException('transaction confirm time is over', HttpStatus.BAD_REQUEST);

    public static UNAUTHORIZED_ORDER = new HttpException(
        'Do not have permission to update or delete this order',
        HttpStatus.UNAUTHORIZED,
    );

    public static CAN_NOT_DELETE_ORDER = new HttpException('Can not delete order', HttpStatus.BAD_REQUEST);

    public static NOTIFICATION_NOT_EXIST = new HttpException('Notification not exist', HttpStatus.BAD_REQUEST);

    public static PROCESSING_ORDER = new HttpException(
        'Order is processing, please finish the transaction first',
        HttpStatus.BAD_REQUEST,
    );

    public static PROCESSED_ORDER = new HttpException('Order is processed', HttpStatus.BAD_REQUEST);

    public static UPDATED_AMOUNT_VALIDATE = new HttpException('User amount can not afford', HttpStatus.BAD_REQUEST);

    public static FUNCTION_ERROR = new HttpException('Can not execute this function', HttpStatus.BAD_REQUEST);

    public static FUNCTION_UNAUTHORIZED = new HttpException(
        'This method does not exist on your account',
        HttpStatus.BAD_REQUEST,
    );
    /**
     * address
     */
    public static ADDRESS_NOT_FOUND = new HttpException('Address not found', HttpStatus.NOT_FOUND);
    public static ADDRESS_NOT_BELONG_TO_WALLET = new HttpException(
        'Address does not belong to wallet',
        HttpStatus.BAD_REQUEST,
    );
    public static CREATE_ADDRESS_FAILED = new HttpException('Create address failed', HttpStatus.INTERNAL_SERVER_ERROR);
    public static ENCRYPT_PRIVATE_KEY_ERROR = new HttpException(
        'Encrypted private key invalid',
        HttpStatus.INTERNAL_SERVER_ERROR,
    );
    public static ADDRESS_INSIDE_SYSTEM = new HttpException('Address is inside the system', HttpStatus.BAD_REQUEST);
    public static ADDRESS_INVALID = new HttpException('Address invalid', HttpStatus.BAD_REQUEST);
    public static ADDRESS_NEED_MEMO = new HttpException('Memo is required for the address', HttpStatus.BAD_REQUEST);

    public static USER_ADDRESS_NOT_FOUND = new HttpException(
        'User address not found, please create new wallet address',
        HttpStatus.NOT_FOUND,
    );

    public static ADMIN_ALREADY_EXISTS = new HttpException(
        'admin email or username already exists',
        HttpStatus.BAD_REQUEST,
    );

    public static USER_NOT_EXISTS = new HttpException('User does not exist', HttpStatus.BAD_REQUEST);

    /**
     * wallet
     */
    public static WALLET_NOT_FOUND = new HttpException('Wallet not found', HttpStatus.NOT_FOUND);
    public static MISMATCH_WALLET_COIN_TYPE = new HttpException('msg_coin_type_incorrect', HttpStatus.BAD_REQUEST);
    public static WALLET_EXISTED = new HttpException('Wallet existed', HttpStatus.BAD_REQUEST);
    public static WALLET_WITH_CURRENCY_NOT_CREATED = new HttpException(
        'Wallet with currency was not created',
        HttpStatus.BAD_REQUEST,
    );
    /**
     * hot wallet
     */
    public static HOT_WALLET_NOT_FOUND = new HttpException('Hot wallet not found', HttpStatus.NOT_FOUND);
    public static HOT_WALLET_EXISTED = new HttpException('Hot wallet of user existed', HttpStatus.BAD_REQUEST);
    public static HOT_WALLET_TYPE_INVALID = new HttpException('Hot wallet type is not invalid', HttpStatus.BAD_REQUEST);
    public static LOWER_THRESHOLD_MUST_BE_GREATER_THAN_0 = new HttpException(
        'Lower threshold must be greater than 0',
        HttpStatus.BAD_REQUEST,
    );
    public static LOWER_THRESHOLD_MUST_BE_LESS_THAN_UPPER_MIDDLE = new HttpException(
        'Lower threshold must be less than upper threshold and middle threshold',
        HttpStatus.BAD_REQUEST,
    );
    public static MIDDLE_THRESHOLD_MUST_BE_LESS_THAN_UPPER = new HttpException(
        'Middle threshold must be less than upper threshold',
        HttpStatus.BAD_REQUEST,
    );
    /**
     * kms
     **/
    public static KMS_DATA_KEY_NOT_FOUND = new HttpException('msg_kms_data_key_not_found', HttpStatus.NOT_FOUND);
    public static KMS_CMK_NOT_FOUND = new HttpException('msg_kms_cmk_not_found', HttpStatus.NOT_FOUND);
    public static KMS_CMK_INVALID = new HttpException('msg_kms_cmk_invalid', HttpStatus.INTERNAL_SERVER_ERROR);
    public static ONLY_SUPPORT_STRING = new HttpException('msg_only_support_encrypt_string', HttpStatus.BAD_REQUEST);

    /**
     * blockchain
     */
    public static GET_BALANCE_FAIL = new HttpException('Get balance fail', HttpStatus.INTERNAL_SERVER_ERROR);

    /**
     * deposit
     */
    public static DEPOSIT_AMOUNT_GREATER_THAN_BALANCE = new HttpException(
        'Deposit amount is greater than address balance',
        HttpStatus.BAD_REQUEST,
    );
    public static DEPOSIT_NOT_FOUND = new HttpException('Deposit not found', HttpStatus.NOT_FOUND);
    public static LOCAL_TX_NOT_INSERTED_AFTER_COLLECTING = new HttpException(
        'Local tx not inserted after collecting',
        HttpStatus.INTERNAL_SERVER_ERROR,
    );

    /**
     * withdrawals
     */
    public static WITHDRAW_FROM_INTERNAL_ADDRESS = new HttpException(
        'Cannot withdraw to an address inside the system',
        HttpStatus.BAD_REQUEST,
    );
    public static WALLET_BALANCE_NOT_FOUND_COIN = new HttpException(
        'Wallet balance not found, hot wallet need platform coin to send token.',
        HttpStatus.NOT_FOUND,
    );
    public static WITHDRAWAL_AMOUNT_MUST_GREATER_THAN_ZERO = new HttpException(
        'Withdrawal amount must greater than 0',
        HttpStatus.BAD_REQUEST,
    );

    /**
     * Game
     */

    public static GAME_TYPE_INVALID = new HttpException('Game type is invalid', HttpStatus.BAD_REQUEST);

    public static USER_ALREADY_IN_GAME = new HttpException('User already in match', HttpStatus.BAD_REQUEST);

    public static TEAM_MUST_BE_SPECIFIED = new HttpException('Team must be specified', HttpStatus.BAD_REQUEST);

    public static GAME_FULL_PLAYER = new HttpException('Game full player', HttpStatus.BAD_REQUEST);

    public static TEAM_FULL_PLAYER = new HttpException('Team full player', HttpStatus.BAD_REQUEST);

    public static CREATE_GAME_FAILED = new HttpException('Create match failed', HttpStatus.INTERNAL_SERVER_ERROR);

    public static OWN_AT_LEAST_ONE_IRON_NFT = new HttpException(
        'You need to own at least one iron NFT',
        HttpStatus.BAD_REQUEST,
    );

    public static NOT_IN_ANY_GAME = new HttpException('Not in any match', HttpStatus.NOT_FOUND);

    public static GAME_NOT_FOUND = new HttpException('Game not found', HttpStatus.NOT_FOUND);

    public static GAME_TYPE_NOT_SUPPORTED = new HttpException('Game type not supported', HttpStatus.BAD_REQUEST);

    public static GAME_BET_CONFIG_NOT_FOUND = new HttpException('Game bet config not found', HttpStatus.NOT_FOUND);

    public static GAME_NOT_PENDING = new HttpException('Game not pending', HttpStatus.BAD_REQUEST);

    public static USER_NOT_OWNER = new HttpException('User not owner', HttpStatus.BAD_REQUEST);

    public static USER_IS_OWNER = new HttpException('User is owner', HttpStatus.BAD_REQUEST);

    public static GAME_NOT_FINISHED = new HttpException('Game not finished', HttpStatus.BAD_REQUEST);

    public static USER_NOT_IN_GAME = new HttpException('User not in match', HttpStatus.NOT_FOUND);

    public static USER_NOT_ENOUGH_BOOST = new HttpException('User not enough boost', HttpStatus.BAD_REQUEST);

    public static CAN_NOT_RECEIVE_REWARD = new HttpException(
        'Can not receive reward, you just received Solo reward at today',
        HttpStatus.BAD_REQUEST,
    );

    public static GAME_ALREADY_FINISHED = new HttpException('Game already finished', HttpStatus.BAD_REQUEST);

    public static GAME_RANK_LEVEL_NOT_GAME = new HttpException(
        'Game rank level not match with user rank level',
        HttpStatus.BAD_REQUEST,
    );
    /**
     * webhook
     **/
    public static WEBHOOK_NOT_FOUND = new HttpException('Webhook not found.', HttpStatus.NOT_FOUND);
    public static WEBHOOK_ALREADY_EXIST = new HttpException('Webhook already exist.', HttpStatus.BAD_REQUEST);

    public static FILE_SIZE_OVER = new HttpException(
        'Upload file size exceeds the allowed limit',
        HttpStatus.BAD_REQUEST,
    );

    public static FILE_TYPE_INVALID = new HttpException('File type upload invalid', HttpStatus.BAD_REQUEST);

    public static MISSING_WALLET_ADDRESS = new HttpException('Missing wallet address', HttpStatus.BAD_REQUEST);

    public static MISSING_BANK_INFORMATION = new HttpException('Missing bank information', HttpStatus.BAD_REQUEST);

    public static PAYMENT_METHOD_NOT_EXIST = new HttpException(
        'Payment method not exist or unauthorized',
        HttpStatus.BAD_REQUEST,
    );

    public static PAYMENT_METHOD_EXIST = new HttpException('Payment method exist', HttpStatus.BAD_REQUEST);

    public static INCORRECT_METHOD_TYPE = new HttpException('Incorrect payment method type', HttpStatus.BAD_REQUEST);

    public static DELETE_PAYMENT_METHOD_ERROR = new HttpException(
        'Can not delete payment method',
        HttpStatus.BAD_REQUEST,
    );

    public static RANK_NOT_FOUND = new HttpException('Rank not found', HttpStatus.NOT_FOUND);

    public static GAME_CODE_GENERATE_FAILED = new HttpException(
        'Game code generate failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
    );

    public static STAKE_NOT_FOUND = new HttpException('Stake not found', HttpStatus.NOT_FOUND);

    public static LOOT_BOX_CONFIG_NOT_FOUND = new HttpException('Loot box config not found', HttpStatus.NOT_FOUND);

    public static NFT_LOOT_BOX_CONFIG_NOT_FOUND = new HttpException(
        'NFT loot box config not found',
        HttpStatus.NOT_FOUND,
    );

    public static INVALID_AMOUNT = new HttpException('Invalid amount', HttpStatus.BAD_REQUEST);

    public static LOOT_BOX_NOT_FOUND = new HttpException('Loot box not found', HttpStatus.NOT_FOUND);

    public static NOT_ENOUGH_LOOT_BOX = new HttpException('Not enough loot box', HttpStatus.BAD_REQUEST);

    public static LOOT_BOX_KEY_NOT_FOUND = new HttpException('Loot box key not found', HttpStatus.NOT_FOUND);

    public static CANNOT_GENERATE_LOOT_BOX_KEY = new HttpException(
        'Cannot generate loot box key',
        HttpStatus.BAD_REQUEST,
    );

    public static LOOT_BOX_NOT_BELONG_TO_USER = new HttpException(
        'Loot box not belong to user',
        HttpStatus.BAD_REQUEST,
    );

    public static LOOT_BOX_KEY_NOT_BELONG_TO_USER = new HttpException(
        'Loot box key not belong to user',
        HttpStatus.BAD_REQUEST,
    );

    public static LOOT_BOX_KEY_NOT_MATCH_RANK_LEVEL = new HttpException(
        'Loot box key not match rank level',
        HttpStatus.BAD_REQUEST,
    );

    public static LOOT_BOX_IS_OPENED = new HttpException('Loot box is opened', HttpStatus.BAD_REQUEST);

    public static LOOT_BOX_KEY_IS_OPENED = new HttpException('Loot box key is opened', HttpStatus.BAD_REQUEST);

    public static LOOT_BOX_REWARD_TYPE_NOT_FOUND = new HttpException(
        'Loot box reward type not found',
        HttpStatus.NOT_FOUND,
    );

    public static MASTER_WALLET_NOT_FOUND = new HttpException('Master wallet not found', HttpStatus.NOT_FOUND);

    public static LOOT_BOX_SYSTEM_NFT_NOT_FOUND = new HttpException(
        'Loot box system nft not found',
        HttpStatus.NOT_FOUND,
    );

    public static PRIZE_POOL_CURRENTLY_NOT_AVAILABLE = new HttpException(
        'Prize pool currently not available, please retry later',
        HttpStatus.BAD_REQUEST,
    );

    public static NO_AVATAR_FOUND = new HttpException('No avatar found', HttpStatus.NOT_FOUND);

    public static EMAIL_INVALID = {
        message: 'Please enter valid email address!',
        error_code: 'EMAIL_INVALID',
    };

    public static EMAIL_STRING = {
        message: 'Email type must be string',
        error_code: 'EMAIL_STRING',
    };

    public static EMAIL_EMPTY = {
        message: 'Email must not be empty',
        error_code: 'EMAIL_EMPTY',
    };
}
