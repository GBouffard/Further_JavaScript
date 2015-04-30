githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users?access_token=e997731b01ea91372ab412e20f51cfe0bde3bb83';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
        }
      }); 
    }
  }
}]);