gitbook-plugin-xapi
===================

Integration of xAPI with http://gitbook.io

Currently in development.

~~You can use install it via **NPM**:~~

~~$ npm install gitbook-plugin-gxapi~~


And use it for your book with:

```
$ gitbook build ./ --plugins=xapi
```

You can set the lrs credentials using the plugins configuration in the book.json:

```
{
    plugins: ["xapi"],
    pluginsConfig: {
        "xapi": {
            "lrs": {
			  "endpoint" : "https://lrs.adlnet.gov/xapi/",
			  "user" : "gitbook",
			  "password" : "xapilovesgitbook"
			}
        }
    }
}
```
