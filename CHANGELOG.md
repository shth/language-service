# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [0.12.1] - 2022-02-04
### Fixed
- Add wasm files to npm module

## [0.12.0] - 2022-02-04
### Added
- Add tree-sitter functionality (`ExpressionBuilder`)

## [0.11.0] - 2022-01-10
### Changed
- Upgrade to `@cucumber/cucumber-expressions` version `15.0.1`

## [0.10.1] - 2021-11-08
### Fixed
- Generate semantic tokens that are supported by the Monaco / Visual Studio Code `vs` theme. ([#12](https://github.com/cucumber/language-service/pull/12), [#6](https://github.com/cucumber/language-service/issues/6)).

## [0.10.0] - 2021-11-08
### Removed
- Move `tree-sitter` functionality to `@cucumber/language-server`

## [0.9.0] - 2021-11-04
### Added
- Add optional error handler to `MessageBuilder#processMessage`

## [0.8.0] - 2021-10-21
### Added
- Expose gherkin functions

## [0.7.1] - 2021-10-21
### Fixed
- Include wasm files in npm module

## [0.7.0] - 2021-10-21
### Added
- Set language in buildExpressions
- Add ExpressionBuilder

## [0.6.0] - 2021-10-20
### Added
- TypeScript support

### Changed
- Misc API changes

## [0.5.0] - 2021-10-13
### Added
- Expose service API

## [0.4.0] - 2021-10-13
### Added
- Add code from `@cucumber/suggest` into this module

### Changed
- Completely changed the API

## [0.3.0] - 2021-10-12
### Changed
- Upgrade to `@cucumber/cucumber-expressions 14.0.0`
- Upgrade to `@cucumber/suggest 0.0.6`

## [0.2.0] - 2021-09-15
### Changed
- Upgrade to `@cucumber/cucumber-expressions 13.0.1`

## [0.1.1] - 2021-09-08
### Fixed
- Fix insertion of completion items so it always replaces the full line rather than appending to the end.
([#1737](https://github.com/cucumber/common/pull/1737)
[aslakhellesoy](https://github.com/aslakhellesoy))

## [0.1.0] - 2021-09-07
### Added
- First release
- Add `CucumberInfoBuilder` and `CucumberInfo`
([#1734](https://github.com/cucumber/common/pull/1734)
[aslakhellesoy](https://github.com/aslakhellesoy))
- Document Formatting
([#1732](https://github.com/cucumber/common/pull/1732)
[aslakhellesoy](https://github.com/aslakhellesoy))

[Unreleased]: https://github.com/cucumber/language-service/compare/v0.12.1...HEAD
[0.12.1]: https://github.com/cucumber/language-service/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/cucumber/language-service/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/cucumber/language-service/compare/v0.10.1...v0.11.0
[0.10.1]: https://github.com/cucumber/language-service/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/cucumber/language-service/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/cucumber/language-service/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/cucumber/language-service/compare/v0.7.1...v0.8.0
[0.7.1]: https://github.com/cucumber/language-service/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/cucumber/language-service/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/cucumber/language-service/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/cucumber/language-service/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/cucumber/language-service/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/cucumber/language-service/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/cucumber/language-service/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/cucumber/language-service/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/cucumber/language-service/tree/v0.1.0
