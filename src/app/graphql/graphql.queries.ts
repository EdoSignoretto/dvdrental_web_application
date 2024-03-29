import {gql} from 'apollo-angular'

const GET_ACTORS = gql`
  query {
    actors{
    first_name
    }
  }
`

const GET_FILMS = gql`
  query{
    films{
      title,
      release_year,
      rating,
      genre,
      language,
      cost,
      duration,
      length,
      address,
      store_id,
      inventory_id,
      description
    }
  }

`;

const GET_CATEGORIES = gql`
  query{
    categories {
      category_name
    }
  }`;

const GET_PAGINATED_FILMS = gql`
  query getPaginatedFilms($pageNumber: Int!, $pageSize: Int!, $filmTitle: String, $category: String, $orderByAttribute: String){
    paginatedFilms(pageNumber: $pageNumber, pageSize: $pageSize, filmTitle: $filmTitle, category: $category, orderByAttribute: $orderByAttribute){
      filmList {
        title,
        release_year,
        rating,
        genre,
        language,
        rental_rate,
        duration,
        length,
        address,
        inventory_id,
        description
      }
      totalResults
    }
  }
`;


const GET_ACTORS_BY_FILM = gql`
  query getActorsByFilm($filmName: String!){
    actorsFromFilm (filmName: $filmName){
    first_name
    last_name
  }
 }
`;

const GET_PAST_RENTALS = gql`
  query getPastRentals($customer_id: Int!, $category: String){
    pastRentals(customer_id: $customer_id, category: $category){
      title
      rental_date
      return_date
      rental_rate
      amount
      duration
      length
      description
    }
  }
`;


const GET_ACTIVE_RENTALS = gql`
  query ActiveRentals($customerId: Int!, $orderByAttribute: String) {
  activeRentals(customer_id: $customerId, orderByAttribute: $orderByAttribute) {
    title
    rental_date
    return_date
    amount
    category
    rental_rate
    length
    duration
    description
  }
}
`;


const GET_STORES_WITH_SPECIFIED_FILM_AND_NUMCOPIES = gql`
  query getStoresWithSpecifiedFilm($film_title: String!){
    storesWithSelectedFilmAndNumCopies(film_title: $film_title) {
      address
      store_id
      numero_copie
    }
  }
`;


const INSERT_RENT = gql`
  mutation insertRent($filmTitle: String!, $storeId: Int!, $rentalDate: String!) {
  insertRent(film_title: $filmTitle, store_id: $storeId, rental_date: $rentalDate)
}
`;

export {
  GET_CATEGORIES,
  GET_ACTORS,
  GET_FILMS,
  GET_ACTORS_BY_FILM,
  GET_PAST_RENTALS,
  GET_ACTIVE_RENTALS,
  GET_STORES_WITH_SPECIFIED_FILM_AND_NUMCOPIES,
  GET_PAGINATED_FILMS,
  INSERT_RENT
}
