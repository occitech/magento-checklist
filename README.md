magento-checklist
=================

Acceptance tests to ensure a Magento instance matches our quality criteria

**/!\ This project is still in an ALPHA state. Use it with care, and be aware that the API may change. /!\**

## Usage

You can run all tests by executing the following command where `./your.app.js` is the path
 to your custom app declaration.

```
npm test --app-path=./your.app.js
```

## Custom app

You can duplicate the `app.default.js` file as a base to extend the default
magento application with your own configurations.

It is convenient to use your own Page Objects for instance.

## Any suggestions?

Use [issues](https://github.com/occitech/magento-checklist/issues) or [pull requests](https://github.com/occitech/magento-checklist/pulls).

For anything else, you can contact us at contact@occitech.fr
