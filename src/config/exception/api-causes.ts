import { HttpStatus } from '@nestjs/common';
import { JsonException } from './exception.dto';

export class ApiCauses {
    public static INTERNAL_ERROR = new JsonException(
        'Server internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        'INTERNAL_ERROR',
    );

    TOO_MANY_REQUESTS;
    public static TOO_MANY_REQUESTS = new JsonException(
        'Too many requests',
        HttpStatus.BAD_REQUEST,
        'TOO_MANY_REQUESTS',
    );

    public static NO_CHANGE_PASS = new JsonException(
        'New password cannot be the same as the old password',
        HttpStatus.BAD_REQUEST,
        'NO_CHANGE_PASS',
    );

    public static NO_USER_BY_WALLET = new JsonException(
        'No user by wallet',
        HttpStatus.BAD_REQUEST,
        'NO_USER_BY_WALLET',
    );

    public static USER_IS_BLACKLIST = new JsonException(
        'User is blacklist',
        HttpStatus.BAD_REQUEST,
        'USER_IS_BLACKLIST',
    );

    public static USER_NOT_ACCESS = new JsonException('User not access', HttpStatus.FORBIDDEN, 'USER_NOT_ACCESS');

    public static USER_ERROR = new JsonException('User error', HttpStatus.BAD_REQUEST, 'USER_ERROR');

    public static EMAIL_OR_PASSWORD_INVALID = new JsonException(
        'Invalid email or password.',
        HttpStatus.BAD_REQUEST,
        'EMAIL_OR_PASSWORD_INVALID',
    );

    public static PHONE_INVALID = new JsonException('Phone invalid', HttpStatus.BAD_REQUEST, 'PHONE_INVALID');

    public static CODE_INVALID = new JsonException(
        'Your link is invalid. Please check again!',
        HttpStatus.BAD_REQUEST,
        'CODE_INVALID',
    );

    public static CODE_EXPIRED = new JsonException(
        'Verification link has expired. Please contact the person who sent the invitation to invite you again!',
        HttpStatus.BAD_REQUEST,
        'CODE_EXPIRED',
    );

    public static USER_IN_BLACKLIST = new JsonException(
        'User in blacklist',
        HttpStatus.BAD_REQUEST,
        'USER_IN_BLACKLIST',
    );

    public static INVALID_SIGNATURE_WALLET = new JsonException(
        'Invalid signature wallet',
        HttpStatus.BAD_REQUEST,
        'INVALID_SIGNATURE_WALLET',
    );

    public static TWOFA_INVALID = new JsonException(
        'Two factor authentication invalid',
        HttpStatus.BAD_REQUEST,
        'TWOFA_INVALID',
    );

    public static BLOCKCHAIN_IS_NOT_STARTED = new JsonException(
        `blockchain service is not started yet...`,
        HttpStatus.INTERNAL_SERVER_ERROR,
        'BLOCKCHAIN_IS_NOT_STARTED',
    );

    public static JWT_NOT_FOUND = new JsonException('JWT not found', HttpStatus.UNAUTHORIZED, 'JWT_NOT_FOUND');

    public static JWT_EXPIRED = new JsonException('JWT token has expired', HttpStatus.UNAUTHORIZED, 'JWT_EXPIRED');

    public static JWT_INVALID = new JsonException('JWT token is invalid', HttpStatus.UNAUTHORIZED, 'JWT_INVALID');

    public static FILE_SIZE_OVER = new JsonException('File size over', HttpStatus.BAD_REQUEST, 'FILE_SIZE_OVER');

    public static FILE_TYPE_INVALID = new JsonException(
        'File type invalid',
        HttpStatus.BAD_REQUEST,
        'FILE_TYPE_INVALID',
    );

    public static NON_RECORDED_USERNAME = new JsonException(
        'This user is not recorded.',
        HttpStatus.UNAUTHORIZED,
        'NON_RECORDED_USERNAME',
    );

    public static PASSWORD_IS_FALSE = new JsonException(
        "The password you entered didn't match our record",
        HttpStatus.BAD_REQUEST,
        'PASSWORD_IS_FALSE',
    );

    public static USER_DONT_HAVE_PERMISSION = new JsonException(
        "You don't have permission to access",
        HttpStatus.FORBIDDEN,
        'USER_DONT_HAVE_PERMISSION',
    );

    public static DATA_INVALID = new JsonException('Data invalid', HttpStatus.BAD_REQUEST, 'DATA_INVALID');

    public static DATA_NOT_FOUND = new JsonException('Data not found', HttpStatus.BAD_REQUEST, 'DATA_NOT_FOUND');

    public static DATA_EXIST = new JsonException('Data exist', HttpStatus.BAD_REQUEST, 'DATA_EXIST');

    public static EMPTY_WALLET = new JsonException(
        "Sorry, we couldn't find a wallet address linked to your account.",
        HttpStatus.BAD_REQUEST,
        'EMPTY_WALLET',
    );

    public static DUPLICATE_PASSWORD = new JsonException(
        'The new password cannot be the same as the old password',
        HttpStatus.BAD_REQUEST,
        'DUPLICATE_PASSWORD',
    );

    public static SCHEDULE_FILE_NOT_FOUND = new JsonException(
        'Schedule file not found',
        HttpStatus.BAD_REQUEST,
        'SCHEDULE_FILE_NOT_FOUND',
    );

    public static SCHEDULE_NOT_FOUND = new JsonException(
        'Schedule not found',
        HttpStatus.BAD_REQUEST,
        'SCHEDULE_NOT_FOUND',
    );

    public static KMS_CMK_INVALID = new JsonException('KMS CMK invalid', HttpStatus.BAD_REQUEST, 'KMS_CMK_INVALID');

    public static ONLY_SUPPORT_STRING = new JsonException(
        'Only support string',
        HttpStatus.BAD_REQUEST,
        'ONLY_SUPPORT_STRING',
    );

    public static KMS_DATA_KEY_NOT_FOUND = new JsonException(
        'msg_kms_data_key_not_found',
        HttpStatus.NOT_FOUND,
        'KMS_DATA_KEY_NOT_FOUND',
    );

    public static WALLET_WITH_CURRENCY_NOT_CREATED = new JsonException(
        'Wallet with currency not created',
        HttpStatus.BAD_REQUEST,
        'WALLET_WITH_CURRENCY_NOT_CREATED',
    );

    public static ENCRYPT_PRIVATE_KEY_ERROR = new JsonException(
        'Encrypt private key error',
        HttpStatus.BAD_REQUEST,
        'ENCRYPT_PRIVATE_KEY_ERROR',
    );

    public static PORTFOLIO_NOT_FOUND = new JsonException(
        'Portfolio not found',
        HttpStatus.BAD_REQUEST,
        'PORTFOLIO_NOT_FOUND',
    );

    public static PORTFOLIO_NAME_IS_EXIST = new JsonException(
        'Portfolio name is exist',
        HttpStatus.BAD_REQUEST,
        'PORTFOLIO_NAME_IS_EXIST',
    );

    public static CURRENCY_IS_EXIST = new JsonException(
        'Currency is exist in portfolio',
        HttpStatus.BAD_REQUEST,
        'CURRENCY_IS_EXIST',
    );

    public static CURRENCY_NOT_FOUND = new JsonException(
        'Currency not found',
        HttpStatus.BAD_REQUEST,
        'CURRENCY_NOT_FOUND',
    );

    public static ONLY_IMG = new JsonException('Only image files are allowed!', HttpStatus.BAD_REQUEST, 'ONLY_IMG');

    public static ONLY_PDF = new JsonException('Only PDF files are allowed!', HttpStatus.BAD_REQUEST, 'ONLY_PDF');

    public static ENTERPRISE_IS_EXIST = new JsonException(
        'Enterprise is exist',
        HttpStatus.BAD_REQUEST,
        'ENTERPRISE_IS_EXIST',
    );

    public static STATE_IS_REQUIRED = new JsonException(
        'State is required',
        HttpStatus.BAD_REQUEST,
        'STATE_IS_REQUIRED',
    );

    public static PERSON_STATE_IS_REQUIRED = new JsonException(
        'Person state is required',
        HttpStatus.BAD_REQUEST,
        'STATE_IS_REQUIRED',
    );

    public static CITY_TOWN_IS_REQUIRED = new JsonException(
        'City or town is required',
        HttpStatus.BAD_REQUEST,
        'CITY_TOWN_IS_REQUIRED',
    );

    public static PERSON_CITY_TOWN_IS_REQUIRED = new JsonException(
        'Person city or town is required',
        HttpStatus.BAD_REQUEST,
        'CITY_TOWN_IS_REQUIRED',
    );

    public static TERMS_AND_PRIVACY_NOT_AGREED = new JsonException(
        'Terms and privacy not agreed',
        HttpStatus.BAD_REQUEST,
        'TERMS_AND_PRIVACY_NOT_AGREED',
    );

    public static ENTERPRISE_NOT_FOUND = new JsonException(
        'Enterprise not found',
        HttpStatus.BAD_REQUEST,
        'ENTERPRISE_NOT_FOUND',
    );

    public static MUST_BE_CREATE_ENTERPRISE_FIRST = new JsonException(
        'You must be Enterprise Account registered first before add new portfolio',
        HttpStatus.BAD_REQUEST,
        'MUST_BE_CREATE_ENTERPRISE_FIRST',
    );

    public static ENTERPRISE_ID_MISMATCHED = new JsonException(
        'Enterprise ID Mismatched!',
        HttpStatus.BAD_REQUEST,
        'ENTERPRISE_ID_MISMATCHED',
    );

    public static IBM_LOGIN_ERROR = new JsonException('IBM login error', HttpStatus.BAD_REQUEST, 'IBM_LOGIN_ERROR');

    public static SIGNATURE_INVALID = new JsonException(
        'Signature Invalid!',
        HttpStatus.BAD_REQUEST,
        'SIGNATURE_INVALID',
    );

    public static duplicateEmailError = (email: string) =>
        new JsonException(
            `An invitation has already been previously sent to ${email}. Please remove the email from the list`,
            HttpStatus.BAD_REQUEST,
            'DUPLICATE_EMAIL_ERROR',
            email,
        );

    public static KEY_PAIR_GENERATION_ERROR = new JsonException(
        'Key pair generation error',
        HttpStatus.BAD_REQUEST,
        'KEY_PAIR_GENERATION_ERROR',
    );

    public static MAXIMUM_NUMBER_OF_REQUESTER = new JsonException(
        'Maximum number of requesters is capped at 2',
        HttpStatus.BAD_REQUEST,
        'MAXIMUM_NUMBER_OF_REQUESTER',
    );

    public static MAXIMUM_NUMBER_OF_APPROVER = new JsonException(
        'Maximum number of approvers is capped at 2',
        HttpStatus.BAD_REQUEST,
        'MAXIMUM_NUMBER_OF_REQUESTER',
    );

    public static USER_CANNOT_BE_EMPTY = new JsonException(
        'List user can not be empty!',
        HttpStatus.BAD_REQUEST,
        'USER_CANNOT_BE_EMPTY',
    );

    public static ADMIN_NOT_FOUND = new JsonException('Admin not found!', HttpStatus.BAD_REQUEST, 'ADMIN_NOT_FOUND');

    public static GAS_STATION_NOT_FOUND = new JsonException(
        'Gas station not found!',
        HttpStatus.BAD_REQUEST,
        'GAS_STATION_NOT_FOUND',
    );

    public static APPROVERS_NUMBER_NOT_ENOUGH = new JsonException(
        'The number of approvers must be 2 people.',
        HttpStatus.BAD_REQUEST,
        'APPROVERS_NUMBER_NOT_ENOUGH',
    );

    public static COMING_SOON_FEATURE = new JsonException(
        'Coming soon feature!',
        HttpStatus.BAD_REQUEST,
        'COMING_SOON_FEATURE',
    );

    public static TRANSACTION_NOT_FOUND = new JsonException(
        'Transaction not found!',
        HttpStatus.BAD_REQUEST,
        'TRANSACTION_NOT_FOUND',
    );

    public static USER_GAS_STATION_NOT_FOUND = new JsonException(
        'User Gas Station Not Found!',
        HttpStatus.BAD_REQUEST,
        'USER_GAS_STATION_NOT_FOUND',
    );

    public static duplicateUser = (id) =>
        new JsonException('User already exist!', HttpStatus.BAD_REQUEST, 'DUPLICATE_USER', id);

    public static userIsApprover = (email) =>
        new JsonException(
            'User selected is already an approver in another group. Please select a different user',
            HttpStatus.BAD_REQUEST,
            'USER_IS_APPROVER',
            email,
        );

    public static userHaveRole = (email, role) =>
        new JsonException(
            `User selected is already an ${role}. Please select a different user`,
            HttpStatus.BAD_REQUEST,
            'USER_HAVE_ROLE',
            email,
        );

    public static USER_NOT_FOUND = new JsonException('User not found!', HttpStatus.BAD_REQUEST, 'USER_NOT_FOUND');

    public static REQUEST_REFUEL_MYR_RATE_NOT_MATCH = new JsonException(
        'Request refuel myr rate not match.',
        HttpStatus.BAD_REQUEST,
        'REQUEST_REFUEL_MYR_RATE_NOT_MATCH',
    );

    public static maxAmount = (amount: number) =>
        new JsonException(
            `The amount exceeds the set gas station settings ${amount}.`,
            HttpStatus.BAD_REQUEST,
            'MAX_AMOUNT',
        );

    public static NO_APPROVERS = new JsonException(
        'No approvers have been set up yet.',
        HttpStatus.BAD_REQUEST,
        'NO_APPROVERS',
    );

    public static SYSTEM_REQUEST_NOT_FOUND = new JsonException(
        'System request not found!',
        HttpStatus.BAD_REQUEST,
        'SYSTEM_REQUEST_NOT_FOUND',
    );

    public static YOU_ARE_APPROVED_THIS_REQUEST = new JsonException(
        'You are approved this request!',
        HttpStatus.BAD_REQUEST,
        'YOU_ARE_APPROVED_THIS_REQUEST',
    );

    public static YOU_ARE_REJECTED_THIS_REQUEST = new JsonException(
        'You are rejected this request!',
        HttpStatus.BAD_REQUEST,
        'YOU_ARE_REJECTED_THIS_REQUEST',
    );

    public static GAS_STATION_BALANCE_NOT_FOUND = new JsonException(
        'Gas station balance not found!',
        HttpStatus.BAD_REQUEST,
        'GAS_STATION_BALANCE_NOT_FOUND',
    );

    public static INSUFFICIENT_FUNDS = new JsonException(
        'Insufficient funds!',
        HttpStatus.BAD_REQUEST,
        'INSUFFICIENT_FUNDS',
    );

    public static APPROVER_NOT_FOUND = new JsonException(
        'Approver not found!',
        HttpStatus.BAD_REQUEST,
        'APPROVER_NOT_FOUND',
    );

    public static NOTIFICATION_NOT_FOUND = new JsonException(
        'Notification not found!',
        HttpStatus.BAD_REQUEST,
        'NOTIFICATION_NOT_FOUND',
    );

    public static MAXIMUM_VALUE_ERROR = new JsonException(
        'Maximum value must greater than or equal current value!',
        HttpStatus.BAD_REQUEST,
        'MAXIMUM_VALUE_ERROR',
    );

    public static gasLimitMinValue = (minGasLimit, tokenName) =>
        new JsonException(
            `Gas limit for ${tokenName} must be greater than or equal to ${minGasLimit}!`,
            HttpStatus.BAD_REQUEST,
            'GAS_LIMIT_MIN_VALID',
        );

    public static PACKAGE_NOT_FOUND = new JsonException(
        'Package not found!',
        HttpStatus.BAD_REQUEST,
        'PACKAGE_NOT_FOUND',
    );

    public static userGasStationIsApprover = (email) =>
        new JsonException(
            'User selected is already an Approvers and cannot hold the role of the Requester',
            HttpStatus.BAD_REQUEST,
            'USER_IS_APPROVER',
            email,
        );

    public static userGasStationIsRequester = (email) =>
        new JsonException(
            'User selected is already an Requester and cannot hold the role of the Approvers',
            HttpStatus.BAD_REQUEST,
            'USER_IS_REQUESTER',
            email,
        );

    public static userComplianceOperationsIsOfficer = (email) =>
        new JsonException(
            `${email} selected is already an Officer and cannot hold the role of the Director`,
            HttpStatus.BAD_REQUEST,
            'USER_IS_OFFICER',
            email,
        );

    public static userComplianceOperationsIsDirector = (email) =>
        new JsonException(
            `${email} selected is already an Director and cannot hold the role of the Officer`,
            HttpStatus.BAD_REQUEST,
            'USER_IS_DIRECTOR',
            email,
        );

    public static VERIFY_ALL = new JsonException(
        'Must verify all fields before approval!',
        HttpStatus.BAD_REQUEST,
        'VERIFY_ALL',
    );
}
