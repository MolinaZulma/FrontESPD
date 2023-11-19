export class EndPointRepository {
  private static readonly PROD = `https://azure.microsoft:7298/api/v1`;
  private static readonly TEST = ``;
  private static readonly DEVELOP = ``;
  private static readonly LOCAL = `https://localhost:7147/api/v1`;
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = EndPointRepository.LOCAL;
  }

  public ActivityLogsForm = (): string => `${this._baseUrl}/ActivityLogsForm`;
  public damageReport = (): string => `${this._baseUrl}/DamageReport`;
  public JarFormatForm = (): string => `${this._baseUrl}/JarFormatForm`;
  public FormatPTAPForm = (): string => `${this._baseUrl}/FormatPTAPForm`;
  public WaterControlForm = (): string => `${this._baseUrl}/WaterControlForm`;
  
  public authenticate = (): string => `${this._baseUrl}/Account/authenticate`;
  public getAll = (): string => `${this._baseUrl}/Account/users/getAll`;
}
