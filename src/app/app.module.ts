import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PractiseCompComponent } from './practise-comp/practise-comp.component';
import { FormsModule } from '@angular/forms';
import {HighlightDirective} from './custom-directives/highlight.directive'
import {HighlightTwoDirective} from './custom-directives/highlight-two.directive'
import {HighlightThreeDirective} from './custom-directives/highlight-three.directive';
import { CapitalizeDirective } from './custom-directive/capitalize.directive';
import { MobileNumberDirectiveDirective } from './custom-directive/mobile-number-directive.directive';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component'
import { MyLowerCasePipe } from './pipes/myLowerCase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PractiseCompComponent,
    HighlightDirective,
    HighlightTwoDirective,
    HighlightThreeDirective,
    CapitalizeDirective,
    MobileNumberDirectiveDirective,
    ChildComponent,
    ParentComponent,
    MyLowerCasePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
