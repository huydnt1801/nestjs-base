export type JwtPayloadType = {
    userId: number;
};

export enum EnterpriseStatus {
    SAVED_DRAFT = 'saved_draft',
    SUBMITTED = 'submitted',
}

export enum HotWalletType {
    NORMAL = 'normal',
    SEED = 'seed',
}

export enum SortBy {
    UPDATED_AT = 'updatedAt',
    AMOUNT = 'amount',
}

export enum SortType {
    SortTypeASC = 'asc',
    SortTypeDESC = 'desc',
}

export enum TokenName {
    ETH = 'ETH',
    SOL = 'SOL',
    MATIC = 'MATIC',
    BTC = 'BTC',
}

export enum Network {
    ETHEREUM = 'Ethereum',
    BITCOIN = 'Bitcoin',
    POLYGON = 'Polygon',
    SOLANA = 'Solana',
}

export enum checkValidWallet {
    UNCHECKED = 'unchecked',
    VALID = 'valid',
    INVALID = 'invalid',
}

export enum PortfolioStatus {
    ACTIVE = 'active',
    DELETED = 'deleted',
}

export enum MessageVerifyKeyPair {
    INVALID_WALLET = 'Generate wallet invalid',
    VERIFY_ERROR = 'Key seed verify invalid',
    VERIFY_SUCCESS = 'Key seed verify success',
}

export enum AdminAccountRole {
    SUPER_ADMIN = 'super admin',
    ADMIN = 'admin',
}

export enum GasStationAccountRole {
    INITIATOR = 'initiator',
    APPROVER = 'approver',
}

export enum RebalancingAccountRole {
    INITIATOR = 'initiator',
    APPROVER_GROUP_1 = 'approver group 1',
    APPROVER_GROUP_2 = 'approver group 2',
}

export enum AccountingRole {
    BILLING_DETAIL = 'Billing details',
    TRANSACTION_MONITOR = 'Transaction monitoring',
}

export enum AdminStatus {
    ACTIVE = 'active',
    DEACTIVATED = 'deactivated',
    REQUEST = 'request',
    RESET_PASSWORD = 'reset_password',
    PENDING_ACCEPTANCE = 'pending_acceptance',
    EXPIRED = 'expired',
    DELETED = 'deleted',
}

export enum WalletConfigType {
    BLOCK_CONFIRMATION = 'block_confirmation',
    GAS_LIMIT = 'gas_limit',
    MONTHLY_PAYMENT = 'monthly_payment',
    PORTFOLIO_TRANSFER = 'portfolio_transfer',
    INTERNAL_TRANSACTION = 'internal_transaction',
    EXTERNAL_WITHDRAWAL = 'external_withdrawal',
    COLD_AND_WARM_WALLET = 'cold_and_warm_wallet',
    MINIMUM_WITHDRAWAL = 'minimum_withdrawal',
}
export enum TimeIntervalType {
    MINUTE = 'minute',
    HOURLY = 'hourly',
    DAILY = 'daily',
    WEEKLY = 'weekly',
}
export enum TransactionTag {
    IN_SYSTEM = 'in_system',
    OUT_SYSTEM = 'out_system',
}

export enum ConfigKey {
    LIMIT_PORTFOLIO_DEFAULT = 'limit_portfolio_default',
    KEK_KEY = 'kek_key',
    KEK_KEY_USER = 'aesKey',
}

export enum StatusApprove {
    APPROVE = 'approve',
    PENDING = 'pending',
}

export enum TypeWallet {
    ENTERPRISE_DEPOSIT_WALLET = 'enterprise_deposit_wallet',
    GAMBIT_WARM_WALLET = 'gambit_warm_wallet',
    GAMBIT_WARM_WALLET_FEE = 'gambit_warm_wallet_fee',
    GAMBIT_WITHDRAW_WALLET = 'gambit_withdraw_wallet',
    GAMBIT_COLD_WALLET = 'gambit_cold_wallet',
}

export enum ChainName {
    MAINNET = 'mainnet',
    TESTNET = 'testnet',
}

export enum GasStationQuorumApprovalStatus {
    EITHER = 'either',
    BOTH = 'both',
}

export enum InternalTransferRequestStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
    COMPLETED = 'completed',
}

export enum TransactionStatus {
    CONFIRMED = 'confirmed',
    PENDING = 'pending',
    REJECTED = 'rejected',
    FAILED = 'failed',
}

export enum TransactionGasType {
    REFUEL = 'refuel',
    FUNDING = 'funding',
}

export enum TransactionActivitiesType {
    DEPOSIT = 'deposit',
    WITHDRAWAL = 'with_drawal',
    DEPOSIT_REBALANCE = 'deposit_rebalance',
    WITHDRAWAL_REBALANCE = 'withdrawal_rebalance',
}

export enum SystemRequestStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
    COMPLETED = 'completed',
}

export enum SystemRequestType {
    REFUEL = 'refuel',
    REBALANCING_REQUEST = 'rebalancing_request',
    FUNDING = 'funding',
}

export enum ApproveRequestStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
    COMPLETED = 'completed',
}

export enum NotificationType {
    REBALANCING_REQUEST = 'rebalancing_request',
    NEW_REQUEST = 'new_request',
}

export enum WorkerName {
    Start_Rebalancing_At = 'Start Rebalancing At',
    Alert_Rebalancing = 'Alert Rebalancing',
}

export enum StatusPackage {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

export enum StatementStatus {
    GENERATING = 'generating',
    COMPLETED = 'completed',
}

export enum AccountingStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
}

export enum RequestType {
    INTERNAL_TRANSFER = 'internal_transfer',
    EXTERNAL_WITHDRAWAL = 'external_withdrawal',
    EXTERNAL_TRANSFER = 'external_transfer',
}

export enum StatementType {
    ACCOUNT_STATEMENT = 'account_statement',
    STATEMENT = 'statement',
}

export enum S3_BUCKET {
    DOCUMENT = '/dac/enterprise-document/',
    ADMINISTRATION = '/dac/administration-document/',
}

export enum UserComplianceOperationsRole {
    DIRECTOR = 'director',
    OFFICER = 'officer',
}

export enum VerifyStatus {
    VERIFIED = 'verified',
    MORE_INFORMATION = 'more_information',
}

export enum IReviewStatus {
    APPROVED = 'Approved',
    REJECTED = 'Rejected',
    IN_PROGRESS = 'In-progress',
    REQUESTED_MORE_INFO = 'Requested more information',
    PENDING_APPROVAL = 'Pending approval',
}

export enum VerifyPart {
    LEGAL_ENTITY_INFORMATION = 'legal_entity_information',
    AUTHORIZED_PERSON = 'authorizedPerson',
    AUTHORIZED_DOCUMENT = 'authorizedDocument',
    BENEFICIAL_OWNERS = 'beneficialOwners',
    DIRECTORS_OFFICE = 'directorsOffice',
    STATUTORY = 'statutory',
}

export enum ApplicationRisk {
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low',
}

export enum BorrowStatus {
    BORROWED = 'borrowed',
    REPAID = 'repaid',
    LIQUIDATED = 'liquidated',
}

export enum OnchainStatus {
    CONFIRMING = 'confirming',
    CONFIRMED = 'confirmed',
}

export enum EarningEventName {
    RUN_OUT_OF_ENERGY = 'run_out_of_energy',
    REFERRAL_BOOST_START = 'referral_boost_start',
    REFERRAL_BOOST_END = 'referral_boost_end',
}

export enum BuyAction {
    BUY_FARM = 'buy_farm',
    UPGRADE_ROBOT = 'upgrade_robot',
    UPGRADE_FARM = 'upgrade_farm',
    BUY_BATTERY = 'buy_battery',
    BUY_WEAPON = 'buy_weapon',
    BUY_BLIND_BOX = 'buy_blind_box',
}

export enum TokenType {
    XRB = 'xrb',
    ERB = 'erb',
}

export enum QuestCategory {
    FIXED = 'fixed',
    DAILY = 'daily',
}

export enum QuestType {
    FOLLOW = 'follow',
    NOTIFY = 'notify',
    INTERACT = 'interact',
}

export enum LuckyChoice {
    HEAD = 'head',
    TAIL = 'tail',
}

export enum TransactionType {
    DEPOSIT = 'deposit',
    MINT = 'mint',
    BUY = 'buy',
    CLAIM = 'claim',
}

export enum GameStatus {
    PENDING = 'pending',
    REQUESTING = 'requesting',
    PLAYING = 'playing',
    FINISHED = 'finished',
}

export enum GameType {
    AUTO = 'auto',
    COMBAT = 'combat',
}

export enum GameBetType {
    BOOST = 'boost',
    BLIND_BOX = 'blind_box',
}
