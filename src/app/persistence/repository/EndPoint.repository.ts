export class EndPointRepository {
  private static readonly PROD = `https://azure.microsoft:7298/api/v1`;
  private static readonly TEST = ``;
  private static readonly DEVELOP = ``;
  private static readonly LOCAL = `https://localhost:7147/api/v1`;
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = EndPointRepository.LOCAL;
  }

  public User = (): string => `${this._baseUrl}/User`;
  public DamageReport = (): string => `${this._baseUrl}/DamageReport`;
  public register = (): string => `${this._baseUrl}/Account/register`;
  public getAll = (): string => `${this._baseUrl}/Account/users/getAll`;
  public ResetPassword = (): string => `${this._baseUrl}/Account/reset-password`;
  public JarFormatForm = (): string => `${this._baseUrl}/JarFormatForm`;
  public FormatPTAPForm = (): string => `${this._baseUrl}/FormatPTAPForm`;
  public WaterControlForm = (): string => `${this._baseUrl}/WaterControlForm`;
  public authenticate = (): string => `${this._baseUrl}/Account/authenticate`;
  public ActivityLogsForm = (): string => `${this._baseUrl}/ActivityLogsForm`;
}
