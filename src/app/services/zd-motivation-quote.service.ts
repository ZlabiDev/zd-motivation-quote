import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {RandomQuote} from "../models/random-quote";

@Injectable({
    providedIn: 'root'
})
export class ZdMotivationQuoteService {

    constructor(private httpClient: HttpClient) {
    }

    public getRandomQuote(): Observable<RandomQuote> {
        return this.httpClient.get<RandomQuote[]>('/api/random').pipe(
            map(quoteList => {
                const quote: RandomQuote = {
                    q: quoteList[0].q, a: quoteList[0].a
                }
                return quote;
            })
        );
    }
}
