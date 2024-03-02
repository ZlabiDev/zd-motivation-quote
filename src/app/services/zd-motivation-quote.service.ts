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
        return this.httpClient.get<RandomQuote[]>('https://api.quotable.io/quotes/random?tags=technology,famous-quotes').pipe(
            map(quoteList => {
                const quote: RandomQuote = {
                    content: quoteList[0].content,
                    author: quoteList[0].author,
                    tags: quoteList[0].tags,
                }
                return quote;
            })
        );
    }
}
