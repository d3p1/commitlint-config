<div align=center>

# [CONVENTIONAL COMMITS PARSER]

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Release](https://github.com/d3p1/commitlint-config/actions/workflows/release.yml/badge.svg)](https://github.com/d3p1/commitlint-config/actions/workflows/release.yml)
[![CodeQL](https://github.com/d3p1/commitlint-config/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/d3p1/commitlint-config/actions/workflows/github-code-scanning/codeql)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

</div>

## Introduction

Just a little [shareable configuration](https://commitlint.js.org/#/reference-configuration) for [`commitlint`](https://commitlint.js.org/) to be able to validate the addition of an issue number to the end of a commit message that follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

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

Install [`commitlint`](https://commitlint.js.org/#/guides-local-setup) and this configuration:

```
npm install --save-dev @commitlint/cli @d3p1/commitlint-config
```

Then, extend this configuration from your [`commitlint` configuration object](https://commitlint.js.org/#/reference-configuration?id=configuration-object-example) using the `extends` option. For example, create in the root of your project a `commitlint.config.js` file with the following content:

```js
module.exports = {
    extends: ['@d3p1/commitlint-config']
};
```

Also, to be able to validate your commit messages in your environment, install and configure [`husky`](https://typicode.github.io/husky/):

```
npm install --save-dev husky
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'
```

> **Note**
>
> Starting from `husky@v9`, the initialization and installation command needs to be modified. Instead of `npx husky install` and `npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'`, use `npx husky init` and `echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg`.

> **Note**
>
> The `npx husky init` command could create a `pre-commit` hook (`.husky/commit-msg`) that may not be needed and could cause errors. It could be removed manually. Also, instead of executing `npx husky init` and `echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg`, it is possible to execute `npx husky` and `echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg` to avoid the creation of the `pre-commit` hook.  

And you are ready to go! From now on, all messages from your commits will be validated to ensure they adhere to the format:

```
<type>(<scope>): <description> [<issue-number>]
```

## Changelog

Detailed changes for each release are documented in [`CHANGELOG.md`](./CHANGELOG.md).

## License

This work is published under [MIT License](./LICENSE).

## Author

Always happy to receive a greeting on:

- [LinkedIn](https://www.linkedin.com/in/cristian-marcelo-de-picciotto/) 
- [Web](https://d3p1.dev/)
