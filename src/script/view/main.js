import "../component/club-list.js";
import "../component/app-bar.js";
import DataSource from "../data/data-source.js";

const main = async () => {
  const searchElement = document.querySelector("app-bar");
  const clubListElement = document.querySelector("club-list");
  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  const popularFilm = await DataSource.popularFilm();
  renderResult(popularFilm);

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchFilm(searchElement.value);
      console.log(result);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
