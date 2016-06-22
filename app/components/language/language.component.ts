
import {Component} from '@angular/core';

@Component({
    selector: "language",
    templateUrl: "app/components/language/language.component.html",
    inputs:["language"]
})
export class LanguageComponent{
    public language = {};
}
