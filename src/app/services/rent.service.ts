import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {GET_ACTIVE_RENTALS, INSERT_RENT} from "../graphql/graphql.queries";
import {map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private apollo: Apollo) { }

  rentMovie(movieTitle: string, storeId: number, formattedDate: string){
    return this.apollo
      .mutate({
        mutation: INSERT_RENT,
        variables: {
          filmTitle: movieTitle,
          customer_id: null,        // il customer_id viene preso dal contextValue sul server
          storeId: storeId,
          rentalDate: formattedDate
        }
      })
      .pipe(
        map(({ data }: any) => data.insertRent),
        tap(outputInsertRent => console.log(`Righe affette dal noleggio del film ${movieTitle}: `, outputInsertRent))
      )

  }


  getActiveRentals(customer_id: number){
    return this.apollo.watchQuery({
      query: GET_ACTIVE_RENTALS,
      fetchPolicy: 'network-only',
      variables: { customer_id: customer_id }
    }).valueChanges
      .pipe(
        map((outputQueryActiveRentals: any) => outputQueryActiveRentals.data.activeRentals),
        tap((mappedOutput) => console.log("Elenco dei noleggi passati: ", mappedOutput))
      )

  }




}