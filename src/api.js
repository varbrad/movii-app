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
  }
}
