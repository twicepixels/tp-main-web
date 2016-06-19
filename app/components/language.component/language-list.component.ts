
import {Component} from "@angular/core";
import {LanguageService} from "../../services/language.service/language.service";
import {LanguageComponent} from "./language.component";
import {Language} from "./language";


@Component({
    selector: "my-app-lan",
    templateUrl: "app/components/language.component/language-list.component.html",
    directives: [LanguageComponent],
    providers:[LanguageService], 
    styles:[`
                body{
                    padding:0;
                    margin:0;
                    font-family:Roboto,Arial,sans-serif;
                    font-size:16px
                }
                .title {
                    color:#018EFA;
                }
                .clicked{
                    background-color: #9C00FE;
                    color:white;
                }
                .labels{
                    background-color: black;
                    color: white;
                }
    `]
})
export class LanguageListComponent{
    public languages : Language[];

    public selectedLanguage = {};

    public onNameClick(language:any){
        this.selectedLanguage = language;
    }
    constructor(private _languageService: LanguageService){
        this.getLanguages();
    }

    // make a call to our language service
    getLanguages(){  //4
        this._languageService.getLanguages().then((languages:Language[])=>this.languages = languages);
    }

}

