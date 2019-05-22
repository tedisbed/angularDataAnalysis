import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/models/api-response.module';

/**
 * Describes a generic service which can do all CRUD actions
 * Provide a type T and it will return that type from each endpoint
 */
export class BaseService<T> {

  public allData: Promise<T[]>;
  private specificData: { [key: string]: Promise<T> } = { };
  public resetCallbacks: any[] = [];
  public createErrorCallback: any;
  public deleteErrorCallback: any;
  public updateErrorCallback: any;
  public error = false;


  constructor(private endpoint: string,
              public http: HttpClient) { }

  public getNew(): T {
    return { } as T;
  }

  public reset(): void {
    this.allData = null;
    this.specificData = { };
    this.resetCallbacks.forEach(res => res());
  }

  public getAll(): Promise<T[]> {
    if (!this.allData) {
      this.allData = this.http.get<ApiResponse<T[]>>(`${environment.apiEndpoint}${this.endpoint}/GetAll`)
        .toPromise()
        .then(res => res.data);
    }

    return this.allData;
  }

  public get(key: number): Promise<T> {
    if (!this.specificData[`${environment.apiEndpoint}${this.endpoint}${key}`]) {
      this.specificData[`${environment.apiEndpoint}${this.endpoint}${key}`] =
        this.http.get<ApiResponse<T>>(`${environment.apiEndpoint}${this.endpoint}/Get/${key}`)
        .toPromise()
        .then(res => res.data);
    }

    return this.specificData[`${environment.apiEndpoint}${this.endpoint}${key}`];
  }

  public getBulk(keys: number[]): Promise<T[]> {
    return this.http.post<ApiResponse<T[]>>(`${environment.apiEndpoint}${this.endpoint}/GetBulk`, { keys })
      .toPromise()
      .then(res => res.data);
  }

  public create(obj: T): Promise<T> {
    return this.http.post<ApiResponse<T>>(`${environment.apiEndpoint}${this.endpoint}/Create`, obj)
      .pipe(tap(a => { this.reset(); }))
      .toPromise()
      .then(res => {
        if (!res.isSuccess && this.createErrorCallback) {
          this.createErrorCallback(res);
        }
        return res.data;
      });
  }

  public update(obj: T): Promise<T> {
    return this.http.patch<ApiResponse<T>>(`${environment.apiEndpoint}${this.endpoint}/Update`, obj)
      .pipe(tap(a => { this.reset(); }))
      .toPromise()
      .then(res => {
        if (!res.isSuccess && this.updateErrorCallback) {
          this.updateErrorCallback(res);
        }
        return res.data;
      });
  }

  public delete(key: number): Promise<T> {
    return this.http.delete<ApiResponse<T>>(`${environment.apiEndpoint}${this.endpoint}/Delete?key=${key}`)
      .pipe(tap(a => { this.reset(); }))
      .toPromise()
      .then(res => {
        if (!res.isSuccess && this.deleteErrorCallback) {
          this.deleteErrorCallback(res);
        }
        return res.data;
      });
  }

  public genericErrorHandling(res: ApiResponse<any>) {
    this.error = true;
    // notify(res.errorMessage, 'error', 3000);
  }

}

