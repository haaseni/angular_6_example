import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }         from './components/app.component';
import { ExclamatoryComponent } from './components/exclamatory.component';
import { PostsComponent }       from './components/posts.component';
import { GreenTextDirective }   from './directives/green-text.directive';

@NgModule({    
    declarations: [
        AppComponent, 
        ExclamatoryComponent, 
        PostsComponent, 
        GreenTextDirective        
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],    
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }