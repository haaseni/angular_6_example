import { Injectable }       from '@angular/core';
import { HttpClient }       from '@angular/common/http';
import { Observable, of }   from "rxjs";

import { HttpService }  from './http.service';
import { Post }         from '../models/post';
import { PostComment }  from '../models/postcomment';

@Injectable({
    providedIn: 'root',    
})
export class SampleService extends HttpService {
    data: any;
    constructor(http: HttpClient){
        super('http://lab.com/api','sample', http);
    }

    getPosts(): Observable<Post[]>{        
        //return this.http.get<Post[]>(this.apiRoot + "/sample/posts");        
        return of (this.getData().posts);        
    }

    getComments(postId: number): Observable<PostComment[]>{
        //return this.http.get<PostComment[]>(this.apiRoot + "/sample/comments/" + postId);        
        return of (this.getData().comments.filter(c => { return c.id === postId }));
    }

    getData(): any {
        return this.http.get("../../assets/db.json");
    }
}