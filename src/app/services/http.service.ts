import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { NotFoundError, BadInputError, AppError } from "../models/errors";

export abstract class HttpService{

    constructor(protected url: string, protected endpoint: string, protected http: HttpClient){        
    }

    public create(obj: any): Observable<any> {
        return this.http
            .post(`${this.url}/${this.endpoint}`, obj);            
    }

    public update(obj: any): Observable<any> {
        return this.http
            .put(`${this.url}/${this.endpoint}/${obj.id}`, obj);
    }

    read(id: number): Observable<any> {
        return this.http
            .get(`${this.url}/${this.endpoint}/${id}`);
    }

    list(): Observable<any[]> {
        return this.http
            .get<[any]>(`${this.url}/${this.endpoint}`);
    }

    delete(id: number) {
        return this.http
            .delete(`${this.url}/${this.endpoint}/${id}`);
    }

    protected handleError(error: Response) {
        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        } else if (error.status === 400) {
            return Observable.throw(new BadInputError(error.json()));
        } else {
            return Observable.throw(new AppError(error.json()));
        }
    }
}