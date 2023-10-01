import API from "./api";
import './styles/style.css';

document.addEventListener("DOMContentLoaded", async () => {
  const dataContainer = document.getElementById("data-container");
  API.get("discover/movie")
    .then(function (response) {
      response.data.results.forEach((e) => {
        const content = document.createElement("div");
        content.textContent = `API Data: ${e.original_title}`;
        dataContainer.appendChild(content);
      });
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

  const searchButtonElement = document.getElementById("searchButtonElement");

  const searchInputElement = document.querySelector("#searchElement");

  searchButtonElement.addEventListener("click", async () => {
    // Get the value of the input element when the button is clicked
    const inputValue = searchInputElement.value;

    // Check if the input value is not empty
    if (inputValue.trim() !== "") {
      // Clear the previous search results
      dataContainer.innerHTML = "";

      // Make your API request using axios with the inputValue
      try {
        const response = await API.get("search/movie", {
          params: {
            query: inputValue,
          },
        });

        // Process and display the API data
        response.data.results.forEach((e) => {
          const content = document.createElement("div");
          content.textContent = `API Data: ${e.original_title}`;
          dataContainer.appendChild(content);
        });
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    } else {
      // Handle the case where the input is empty
      alert("Please enter a search query.");
    }
  });
});
