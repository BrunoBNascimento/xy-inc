# xy-inc

### Description of the used architecture

I used mongodb + express + nodejs with babel js to use es6 syntax, this solution was thinked because mongodb and document oriented databases are easy to create new schemas of data, i am using mongoose ODM too.

I am using a array of routes and schemas to create mongodb documents.

First of all: **Dependencies**

 * Javascript dependencies are listed on package.json
 * node.js v6+
 * npm
 * mongodb
 * if you want to see the data stored install robomongo 3t too
 * docker (next version)
 
 
**How to run this application?**

``npm install && npm start``

**How to run tests of this application?**

``npm test``

**How to run this application in docker?**

``next version``

**How use this application?**

 * Postman or other
 * dependencies installed
 * Please send all data as json in the request body 
 
**Create a crud from a domain**

``Content-Type: application/json``

SEND ``POST`` request to ``http://localhost:8080`` with request body in json like this:

```json
{
    "domain":"customer", //REQUIRED
    "properties":{
        "firstName": {
                "type": "String", //REQUIRED,
                "required": "Entre com o primeiro nome" //OPTIONAL
            },
            "lastName": {
                "type": "String", //REQUIRED,
                "required": "Entre com o ultimo nome" //OPTIONAL
            },
            "email": {
                "type": "String"
            },
            "company": {
                "type": "String"
            },
            "phone": {
                "type": "String"
            }
    }
    
}
```
This example will create this endpoints

``GET`` /customer - List all customer

``GET`` /customer/{id} - Search customer by id

``POST`` /customer - Create a new customer

``PUT`` /customer/{id} - Edit a customer

``DELETE`` /customer/{id} - Delete a customer by id

### Supported types of data
 * string, decimal, float, date and integer

## ATTENTION

 * Content-type must be application/json