# TODO
  * Assuming the list of names are fetched from an actual api, how would you implement authentication, rate limiting handling, error handling, api unavailability? - What kind of retry strategies you’d imagine implementing?
    * Simple authentication could be handled via a token that we receive from the authentication API which we can then turn to make requests to other API endpoints.
    * Rate limiting would be part of some service that retrieves data from the API, it could check the response header and the rate limit should be communicated to the user via a Toast-like message.
    * Errors should be communicated to the user via some message that has to be acknowledged (maybe el-dialog).
    * Same for API unavailability, if nothing works the user should be redirected to some error page.

  * How can we protect the app from being abused?
    * User authentication, if that is not desirable we could try browser-fingerprinting for applying rate limits on the client side before hitting the API.
    
  * How can we deploy the app into a cloud environment?
    * We build the JS bundle and copy it into a cloud VM/Container. It should have a webserver for SSL termination and returning the JS bundle and assets.

  * How can we be sure the app is running with the latest version of code?
    * We build a Docker image on push/release of the repository and deploy it into staging/production.

  * What techniques you can employ to ensure users are not disrupted when you make significant changes to code?
    * On a basic level we can employ a reverse proxy webserver that we switch to the new Container/VM backend when deployment has finished.
    * If we sync state to the client, e.g., localStorage, Cookies, the app needs a way to reset those if we change the structure.
    * If links change we should provide redirect, e.g., via the webserver.

  * What kind of accessibility best practices should we keep in mind?
    * At the very least colors/font-sizes. If required or desired we could add screen reader help but that also depends on the UI library.

  * How would you structure the css so that we have the most reusability but also the least leakage between components?
    * Tailwind for verbose CSS and reusability, other than that CSS class hierarchies with a description for the team when to use what.

  * Any other improvements that you feel like could be added.
    * Update from Options API ;-)
