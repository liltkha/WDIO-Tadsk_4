
const SearchComponent = require('./../components/product/searchProduct.component');


class CloudGooglePage {

constructor () {
    this.searchIcon = new SearchComponent();
}

  async open() {
    await browser.url("https://cloud.google.com");
  }

}
module.exports = CloudGooglePage;
