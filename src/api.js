import axios from 'axios'

export default {
  /**
   * Begin the API request cycles
   */
  api_key: 'e51e94ef217b474b6fc7aeab8516a6f8',
  language: 'en-GB',
  include_adult: false,

  discover (page) {
    return axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: this.api_key,
        language: this.language,
        include_adult: this.include_adult,
        include_video: this.include_video,

        sort_by: 'popularity.desc',
        page: page || 1
      }
    })
  },

  search (query, page) {
    return axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: this.api_key,
        query: query,
        page: page || 1
      }
    })
  },

  movie (id) {
    return axios.get('https://api.themoviedb.org/3/movie/' + id, {
      params: {
        api_key: this.api_key,
        language: 'en-GB'
      }
    })
  },

  geoToPostcode (coords) {
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        key: 'AIzaSyCs1bjnlSbyiZQSXs8nq6uafXmWqmY5A28',
        latlng: coords.latitude + ',' + coords.longitude
      }
    })
  },

  localCinemas (postcode) {
    return axios.get('https://crossorigin.me/http://moviesapi.herokuapp.com/cinemas/find/' + postcode)
  }
}
