import {Component, OnInit} from '@angular/core';
import {ZdMotivationQuoteService} from "./services/zd-motivation-quote.service";
import {Observable} from "rxjs";
import {RandomQuote} from "./models/random-quote";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    protected currentYear = new Date().getFullYear();

    protected randomQuote$: Observable<RandomQuote>;

    constructor(private zdMotivationQuoteService: ZdMotivationQuoteService) {
    }

    ngOnInit(): void {
        this.randomQuote$ = this.zdMotivationQuoteService.getRandomQuote();
    }

    openGithub() {
        window.open('https://github.com/ZlabiDev', '_blank');
    }
}
