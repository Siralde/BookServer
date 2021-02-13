Para crear la base de datos utilizar:

> db.createCollection("books")
> use books

Posteriormente crea otra collecion dentro de esta

> db.books

Luego Inserta un ejemplo: 

> db.books.insertOne( { name: "Book Example", description: "Book Description Example" } )

Comprueba el nuevo ejemplo

> db.books.find( {} )