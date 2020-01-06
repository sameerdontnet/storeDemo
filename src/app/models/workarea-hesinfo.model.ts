export interface HesServiceStatus {
    databaseKeyExists: boolean;
    message?: string;
    skmState: boolean;
    skmType?: string;
    status: number;
}
