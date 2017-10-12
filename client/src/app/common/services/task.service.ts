// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService {
    // Resolve HTTP using the constructor
    constructor(private http: Http) { }
    // private instance variable to hold base url
    private savesUrl = 'http://localhost:8080/task/save';

    // Add a new comment
    saveTask(body: Object) {
       // let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
        headers.append('Access-Control-Allow-Credentials', 'true');
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.savesUrl, body).toPromise()
            .then(function (res: Response) { return res; })
            .catch(this.handleErrorPromise);
    }

    getTask() {
        return this.http.get('http://localhost:8080/task/fetch').toPromise()
            .then(function (res: Response) {
                console.log(res.json());
                /* let list :Task[];
               for(let i =0; i< res.length; ){
                let task:Task;
                list.push();
            }*/
                return res.json()|| [];
            })
            .catch(this.handleErrorPromise);

    }

    private handleErrorPromise(error: Response | any) {
        return Promise.reject(error._body || error);
    }
}