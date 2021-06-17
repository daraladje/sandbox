const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

// Host Name - No port
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add Param
console.log(myUrl.searchParams.append('abc', '123'));
