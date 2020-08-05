import {Observable} from "rxjs";
import {allBooks} from "./data";

let allBooksObservable$ = new Observable(subscriber => {
    if(document.title !== 'RxBookTracker'){
        subscriber.error('Incorrect Page Title');
    }

    for(let book of allBooks){
        subscriber.next(book)
    }

    setTimeout(() => {
        subscriber.complete();
    }, 2000);

    return () => console.log('Executing teardown code.')

});

// @ts-ignore
allBooksObservable$.subscribe(book => console.log(book.title));
