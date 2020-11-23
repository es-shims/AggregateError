# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.5](https://github.com/es-shims/AggregateError/compare/v1.0.4...v1.0.5) - 2020-11-22

### Commits

- [Tests] migrate tests to Github Actions [`1b83d28`](https://github.com/es-shims/AggregateError/commit/1b83d2853482d8aaa7529c663c34e476ed052bcd)
- [Tests] add `implementation` test; run `es-shim-api` in postlint; use `tape` runner [`952f9a2`](https://github.com/es-shims/AggregateError/commit/952f9a25698df829c356b8586c934f65d7afb19d)
- [Tests] run `nyc` on all tests [`ce5728a`](https://github.com/es-shims/AggregateError/commit/ce5728a4842374fb6349e3dcb11e56991d19fcb3)
- [Deps] update `es-abstract`; use `get-intrinsic` where applicable [`b4999f9`](https://github.com/es-shims/AggregateError/commit/b4999f935e98e3292c582d6ae538c7e5d326021a)
- [actions] add "Allow Edits" workflow [`493b21d`](https://github.com/es-shims/AggregateError/commit/493b21d1d103d38e2f017dcc86870373c60635ac)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `auto-changelog`, `es6-shim` [`43cc5ca`](https://github.com/es-shims/AggregateError/commit/43cc5cae65010f5699cd650174f01550ea43fe28)
- [actions] switch Automatic Rebase workflow to `pull_request_target` event [`95c0a09`](https://github.com/es-shims/AggregateError/commit/95c0a09d1100eb5bd3a1d49c381df0e6ea052ab3)

## [v1.0.4](https://github.com/es-shims/AggregateError/compare/v1.0.3...v1.0.4) - 2020-08-08

### Fixed

- [Fix] use `Object.defineProperty` instead of assignment to set the entry point `.prototype` [`#12`](https://github.com/es-shims/AggregateError/issues/12)

### Commits

- [Dev Deps] update `auto-changelog`, `eslint`, `object-inspect` [`a87fbed`](https://github.com/es-shims/AggregateError/commit/a87fbede91105713a43f583f335d50888b2ac5e9)
- [meta] update `auto-changelog` settings [`5cb7179`](https://github.com/es-shims/AggregateError/commit/5cb7179de5eb8cecc750d6172838a05b4938a642)
- [Deps] update `es-abstract` [`252bc1a`](https://github.com/es-shims/AggregateError/commit/252bc1a75f273b03df953499fcfae0ff84371b4f)
- [Tests] remove confusing comment [`ee9ea50`](https://github.com/es-shims/AggregateError/commit/ee9ea50d8174240853ad092d7390e90aae55285c)
- [Tests] add missing `covert` dep [`f848aa2`](https://github.com/es-shims/AggregateError/commit/f848aa290ef98d907443e5d9e32dd9207ccf77a6)

## [v1.0.3](https://github.com/es-shims/AggregateError/compare/v1.0.2...v1.0.3) - 2020-06-04

### Commits

- [patch] spec change; `errors` is now an own data instead of a prototype accessor [`9d8750c`](https://github.com/es-shims/AggregateError/commit/9d8750c6c3028bfd8aa11efb130448d3fc7b22a5)
- [patch] spec change; `errors` is validated/processed *after* stringifying and setting `message` [`890d344`](https://github.com/es-shims/AggregateError/commit/890d3445748f94b184522467b2285295bb9c2292)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `tape` [`488dfd3`](https://github.com/es-shims/AggregateError/commit/488dfd381d93ccea6c06fe08db1d1b5a65d2f6f6)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape` [`83bc687`](https://github.com/es-shims/AggregateError/commit/83bc6872f10755a88bbb2b0761f38e9f0354f46e)
- [Deps] update `es-abstract`, `functions-have-names`, `globalthis`, `internal-slot` [`4a86017`](https://github.com/es-shims/AggregateError/commit/4a8601721996b24f3ab41fdac691b5d77ce1343b)
- [Docs] fix Travis CI link in README.md [`aa712e3`](https://github.com/es-shims/AggregateError/commit/aa712e3d18f12ec7b9f6b5f5dd087d13fd8158bd)
- [Dev Deps] update `auto-changelog`, `tape` [`27d054d`](https://github.com/es-shims/AggregateError/commit/27d054d2f585dff8f41bc104295ba104d3d6cdef)
- [Dev Deps] update `auto-changelog`; add `aud` [`08edc48`](https://github.com/es-shims/AggregateError/commit/08edc48a4445701c974df5e8ed7d33dcd538c8d0)
- [Deps] update `es-abstract` [`8e33737`](https://github.com/es-shims/AggregateError/commit/8e3373707b3f30e9847ca8d96623cdba170c67d3)
- [Tests] only audit prod deps [`56599f2`](https://github.com/es-shims/AggregateError/commit/56599f226b062fb6e0df1ccf96ade0b03060423e)

## [v1.0.2](https://github.com/es-shims/AggregateError/compare/v1.0.1...v1.0.2) - 2019-12-13

### Commits

- [Refactor] use split-up `es-abstract` (67% bundle size decrease) [`fcca181`](https://github.com/es-shims/AggregateError/commit/fcca18198dc96c7a9bff4350a059aef1abd75455)
- [meta] switch to `keepachangelog` template [`61c9af8`](https://github.com/es-shims/AggregateError/commit/61c9af83bc6520df306ed84fcb3030ba8c95ae25)
- [actions] add automatic rebasing / merge commit blocking [`d9840cd`](https://github.com/es-shims/AggregateError/commit/d9840cda4e863c64fe0419449f6c78200fd8d0e0)
- [Deps] update `es-abstract`, `internal-slot` [`71aaa2e`](https://github.com/es-shims/AggregateError/commit/71aaa2e139c92f2d61c13c40322140c9b792f29d)
- [Tests] use `evalmd` in `postlint` [`5081797`](https://github.com/es-shims/AggregateError/commit/5081797a51e3f4206abe00e28c7238623cd07aec)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config` [`7a8486c`](https://github.com/es-shims/AggregateError/commit/7a8486ccdb5fcfff866206bf5125fd21bbbb113a)
- [meta] fix missing version npmrc settings [`10c271e`](https://github.com/es-shims/AggregateError/commit/10c271e739e58b39725c46100ef03930d8c28140)

## [v1.0.1](https://github.com/es-shims/AggregateError/compare/v1.0.0...v1.0.1) - 2019-11-11

### Commits

- [Tests] use shared travis-ci configs [`4acd21b`](https://github.com/es-shims/AggregateError/commit/4acd21bd73c36b1d88b5fc4b01597917765ba0a0)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `safe-publish-latest`, `object-inspect`, `auto-changelog` [`668dd27`](https://github.com/es-shims/AggregateError/commit/668dd27d0c21ba635dadc6209c927add75e391f6)
- [Fix] remove own `AggregateError.prototype.toString` [`86da74a`](https://github.com/es-shims/AggregateError/commit/86da74aaa38d003bbb04ffb52305cf8093229dcf)
- [meta] add `funding` field [`3673ad9`](https://github.com/es-shims/AggregateError/commit/3673ad97a2d5edf12a980f958cb1d292dc9c3b3c)

## v1.0.0 - 2019-10-21

### Commits

- [Tests] add `travis.yml` [`71ad01b`](https://github.com/es-shims/AggregateError/commit/71ad01b0ff6b7fa43ae0b8bc8dd3215761ae4eee)
- Implementation [`f67c101`](https://github.com/es-shims/AggregateError/commit/f67c101ae888925375d421ffabff856e333f322d)
- Tests [`5cda887`](https://github.com/es-shims/AggregateError/commit/5cda88785e6676f7bf7e152da4ae1ccf3d3a717e)
- Initial commit [`370054f`](https://github.com/es-shims/AggregateError/commit/370054f028af45fb43c763993772ebe270a49f80)
- [Refactor] use `internal-slot` [`972cb6b`](https://github.com/es-shims/AggregateError/commit/972cb6b558ad0246ac6ba837cfd6f407c4b1138d)
- readme [`562715e`](https://github.com/es-shims/AggregateError/commit/562715e80a2af2a35d8768149d699e752f123224)
- npm init [`cf3b5b3`](https://github.com/es-shims/AggregateError/commit/cf3b5b3aedaa1c3eaa530c4e81895df2344369cd)
- [tests] add `npm run lint` [`bc6cca9`](https://github.com/es-shims/AggregateError/commit/bc6cca9d43507fa4da7b44680e27924dd2798eec)
- [meta] add `safe-publish-latest`, `auto-changelog` [`b415df1`](https://github.com/es-shims/AggregateError/commit/b415df102b94d59f46b2131ce20a95d2ec8e6355)
- [Tests] skip name test when bound functions do not have names [`693e161`](https://github.com/es-shims/AggregateError/commit/693e161fd7d9f6667dee3ab32933910c21126b83)
- Only apps should have lockfiles [`315a27e`](https://github.com/es-shims/AggregateError/commit/315a27e68bbbfdb4dd0435305f3e772f185f22d7)
- [Refactor] use `functions-have-names` [`c42a982`](https://github.com/es-shims/AggregateError/commit/c42a982cb873dd4bb796aee9337e7cb8986e2f69)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config` [`a7afeea`](https://github.com/es-shims/AggregateError/commit/a7afeead419514b9c6f9fd816a09d95c22b5a502)
