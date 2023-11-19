export class EndPointRepository {
  private static readonly PROD = `https://azure.microsoft:7298/api/v1`;
  private static readonly TEST = ``;
  private static readonly DEVELOP = ``;
  private static readonly LOCAL = `https://localhost:7147/api/v1`;
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = EndPointRepository.LOCAL;
  }

  public getAll = (): string => `${this._baseUrl}/Account/users/getAll`;
  public authenticate = (): string => `${this._baseUrl}/Account/authenticate`;
  public damageReport = (): string => `${this._baseUrl}/DamageReport`;
  public ActivityLogsForm = (): string => `${this._baseUrl}/ActivityLogsForm`;
  public JarFormatForm = (): string => `${this._baseUrl}/JarFormatForm`;
}
