export class ApiResponse<T> {
  public data: T;
  public isSuccess: boolean;
  public errorMessage: string;
}
