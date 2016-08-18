# tenable-test
Test app from Tenable, includes raw JS, jQuery and AngularJs branches

Answer to question #5

Depending on the time it took to download the entire JSON response I would either download all 10,000 objects at once and use a loading animation while that was happening. Once the objects had been loaded I would use pagination to divide them into groups of 50 - 100 similar to many ecommerce websites.

Alternatively if the response took longer than say 10 seconds to load I would create a function to make a request for the first 100 objects and then have that function request for another 100 objects after the user had scrolled to the bottom of the page. Similar to something like Tumblr.
