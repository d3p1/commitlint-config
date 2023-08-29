<div align=center>

# [CONVENTIONAL COMMITS PARSER]

</div>

## Introduction

Just a little [shareable configuration](https://commitlint.js.org/#/reference-configuration) for [commitlint](https://commitlint.js.org/) to be able to validate the addition of an issue number to the end of a commit message that follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

The commit message structure must be:

```
<type>(<scope>): <description> [<issue-number>]
```

Where:

- `<type>` is mandatory
- `<scope>` is optional
- `<description>` is mandatory
- `<issue-number>` is mandatory 

## Usage

Just extend this configuration from your [commitlint configuration object](https://commitlint.js.org/#/reference-configuration?id=configuration-object-example) using the `extends` option. For example, create a `commitlint.config.js` file with the following content:

```js
module.exports = {
    extends: ['@d3p1/commitlint-config-conventional']
};
```

## Author

Always happy to receive a greeting on:

- [LinkedIn](https://www.linkedin.com/in/cristian-marcelo-de-picciotto/) 
- [Twitter](https://twitter.com/___d3p1)


## License

This work is published under [MIT License](license).
