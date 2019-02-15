import 'zone.js';
import 'core-js/es7/reflect';
import { Component }        from '@angular/core';

import { Post }             from '../models/post';
import { SampleService }    from '../services/sample.service';

@Component({        
    selector: 'posts',    
    template: `
    <table>
        <tr>
            <th *ngFor="let col of columns">
            {{col}}
            </th>
        </tr>
        <tr *ngFor="let post of posts | async">
            <td *ngFor="let col of columns">
            {{post[col]}}
            </td>
        </tr>
    </table>
    `
})

export class PostsComponent {
    columns: string[];
    posts: Post[];

    constructor(sampleService: SampleService) {
        this.columns = ['id', 'title', 'author'];
        
        sampleService.getPosts()
                     .subscribe(p => this.posts = p);
    }
}