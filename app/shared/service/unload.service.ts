import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs/Rx";

@Injectable()
export class UploadService {
    private progress:number;
    private progressObserver:Observer<number>;

    constructor() {
        let observer:any;
        this.progress = Observable.create((observer: Observer<number>)  => {
            this.progressObserver = observer
        }).share();
    }

    public makeFileRequest(url:string, params:string[], files:File[]):Observable<number> {
        return Observable.create((observer: Observer<number>) => {
            let formData:FormData = new FormData(),
                xhr:XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };

            xhr.upload.onprogress = (event) => {
                this.progress = Math.round(event.loaded / event.total * 100);
                this.progressObserver.next(this.progress);
            };

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}