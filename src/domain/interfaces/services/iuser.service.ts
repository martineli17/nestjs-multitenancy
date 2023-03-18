export interface IUserService {
    setTenancyId(id: string): void;
    getTenancyId() : string;
}