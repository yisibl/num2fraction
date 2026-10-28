# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Release dates use the UTC publication dates from the [npm registry](https://registry.npmjs.org/num2fraction).

## Unreleased

## [1.3.0] - 2026-10-28

### Added

- Automated npm publishing via GitHub Actions with npm trusted publishing (OIDC), staged publishing and provenance.
- Add `.editorconfig` to `.npmignore` so it is no longer included in the npm package.

### Changed

- `num2fraction(Infinity)` now returns `Infinity` instead of `'0'`. (by @arshadkazmi42)
- Migrate tests from Travis CI to GitHub Actions.

## [1.2.2] - 2015-09-14

### Changed

- Clean up the code and improve the documentation.

### Removed

- Debug log message.

## [1.2.1] - 2015-09-13

### Fixed

- Convert 0 to a string.

## [1.2.0] - 2015-09-13

### Fixed

- Accommodate rounding errors. (by @jamestalmage)
- Place the negative sign on the numerator. (by @jamestalmage)

## [1.1.0] - 2015-04-19

### Changed

- Use a more precise (not fixed) precision factor for the calculation.

## [1.0.1] - 2015-01-28

### Removed

- ci.testling.com.

## [1.0.0] - 2015-01-27

### Added

- First release.

[1.3.0]: https://www.npmjs.com/package/num2fraction/v/1.3.0
[1.2.2]: https://www.npmjs.com/package/num2fraction/v/1.2.2
[1.2.1]: https://www.npmjs.com/package/num2fraction/v/1.2.1
[1.2.0]: https://www.npmjs.com/package/num2fraction/v/1.2.0
[1.1.0]: https://www.npmjs.com/package/num2fraction/v/1.1.0
[1.0.1]: https://www.npmjs.com/package/num2fraction/v/1.0.1
[1.0.0]: https://www.npmjs.com/package/num2fraction/v/1.0.0
