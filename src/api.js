import axios from 'axios'

export default {
  /**
   * Begin the API request cycles
   */
  api_key: 'e51e94ef217b474b6fc7aeab8516a6f8',
  language: 'en-GB',
  include_adult: false,

  discoverCache: null,
  discover (page) {
    if (this.discoverCache) return this.discoverCache
    this.discoverCache = axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: this.api_key,
        language: this.language,
        include_adult: this.include_adult,
        include_video: this.include_video,

        sort_by: 'popularity.desc',
        page: page || 1
      }
    })
    return this.discoverCache
  },

  searchCache: {},
  search (query, page) {
    if (this.searchCache[query]) return this.searchCache[query]
    this.searchCache[query] = axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: this.api_key,
        query: query,
        page: page || 1
      }
    })
    return this.searchCache[query]
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
  },

  onTodayCache: null,
  onTodayCinemaID: null,
  onToday (venueID) {
    if (this.onTodayCache && this.onTodayCinemaID === venueID) return this.onTodayCache
    this.onTodayCache = axios.get('https://crossorigin.me/http://moviesapi.herokuapp.com/cinemas/' + venueID + '/showings')
    this.onTodayCinemaID = venueID
    return this.onTodayCache.then(r => {
      var promises = []
      r.data.forEach(m => {
        promises.push(this.search(m.title).then(r2 => {
          m.tmdb = r2.data.results[0]
        }))
      })
      return Promise.all(promises).then(v => {
        return r
      })
    })
  }
}
