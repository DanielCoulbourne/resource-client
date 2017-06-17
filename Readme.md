# Resource Client ( es6-resource-client )

## An ES6 HTTP client wrapper with methods built to mirror [Laravel's resource controller methods](https://laravel.com/docs/5.4/controllers#resource-controllers).

I find that in many of my Laravel apps I am only making Ajax calls to API routes which eventually resolve to controller methods with one of the following five names (from Laravel's resource controller docs).

 - `index`  : Fetch an array of all existing records
 - `store`  : Store a new record in the database
 - `show`   : Fetch a single record
 - `update` : Make changes to a single existing record
 - `destroy`: Remove a single existing record

To lighen the cognitive load of switching between Laravel and Javascript I decided to extend the names of these server-side controller methods into a client-side Resource client designed format resource requests in a way that will make Laravel happy.

## Installation & Usage

First run:

`npm install --save es6-resource-client`

Then:

1) Import the client at the top of your file
2) Store your API Bearer token in the global `App.api_key` (I'll be making this configurable soon)
3) Use one of the supported methods (outlined in the next section) to make some calls.
4) Each method returns a Promise which resolves with the server data, so you'll want to catch it in a `then()`

Example:

```
import Resource from 'es6-resource-client';

Resource.index('users').then(users => {
	console.log(users);
});
```

## Parameters

All methods take a string as their first parameter – the name of the resource as it appears in the route.

### Index – index(resource)

Index does not take any additional parameters. Ex. - 

`Resource.index('users')`

### Store – store(resource, record)

Store takes a second parameter, an object with the record to be stored. Ex. - 

`Resource.store('users', { email: 'daniel@tighten.co' })`

### Show – show(resource, recordId)

Show takes a second parameter, the ID of the associated record. Ex. - 

`Resource.show('users', 1)`

### Update – update(resource, record)

Update takes a second parameter, an object with the record to be updated. This object must, at a minimum, include the ID of the record in the database. Ex. - 

`Resource.update('users', { id: 1, email: 'coulbourne@tighten.co' })`

### Destroy - destroy(resource, id)

Destroy takes a second parameter, the id of the record to be destroyed.

## Tighten Love

This package is the result of the awesome culture and conversation that happens at [TightenCo](http://tighten.co). Special thanks to the homies [Caleb Porzio](http://twitter.com/calebporzio) and [Samantha Geitz](http://twitter.com/SamanthaGeitz).

This is far from over.