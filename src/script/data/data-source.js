import API from "../../api";

class DataSource {
  static searchFilm(keyword) {
    return API.get("search/movie", { params: { query: keyword } }).then(
      (responseJson) => {
        if (responseJson.data.results.length > 0) {
          return Promise.resolve(responseJson.data.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      }
    );
  }
  static popularFilm() {
    return API.get(
      "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    ).then((responseJson) => {
      if (responseJson.data.results) {
        return Promise.resolve(responseJson.data.results);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;
