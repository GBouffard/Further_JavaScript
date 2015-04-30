githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

var searchResource = $resource('https://api.github.com/search/users?access_token=e997731b01ea91372ab412e20f51cfe0bde3bb83');
var self = this;

self.doSearch = function (){
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };
}]);