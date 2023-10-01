class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }
  render() {
    this.shadowDOM.innerHTML = `
<style>
.search-container {
    display: flex;
    flex-wrap: row;
}

header {
    position: fixed;
    top: 0;
  left: 0;
  right: 0;
    background-color: #100b21;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    margin: 0;
    padding: 15px 30px;
    color: #fff;
}
input {
    background-color: transparent;
    border: 2px solid #393053;
    padding:0.5rem 1rem;
    border-radius: 50px 0 0 50px;
    font-size: 1rem;
    color:#fff;
    font-family: inherit;
}

button {
    width: 23%;
    cursor: pointer;
    margin-left: 0;
    padding: 16px 12px;
    background-color: #393053;
    border-radius: 0 50px 50px 0;
    font-family: Poppins;
    color: white;
    border: 0;
}
</style>
        <header>
      <h2>SyaiflixPro</h2>
      <div id="search-container" class="search-container">
        <input
          placeholder="Search a movie..."
          id="searchElement"
          type="search"
          value=""
        />
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    </header>`;
    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("app-bar", AppBar);
