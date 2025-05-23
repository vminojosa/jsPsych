# @jspsych/plugin-survey

## 2.1.0

### Minor Changes

- [#3385](https://github.com/jspsych/jsPsych/pull/3385) [`3948fdc0ac176584fe4b8fe0b9cca5ed6e8b3afc`](https://github.com/jspsych/jsPsych/commit/3948fdc0ac176584fe4b8fe0b9cca5ed6e8b3afc) Thanks [@cherriechang](https://github.com/cherriechang)! - Added citations property to info field of all plugins/extensions in two citation formats (apa, bibtex); added getCitations() as function in jsPsych package allowing user to generate citations by passing an array of plugins/extensions by name as first input and citation format as string as second input; changed template of plugins/extensions to contain citations field by default; citations for each plugin/extension are automatically generated from .cff file (if any) at its folder's root during build process; getCitations() prints out citations in the form of a string separating each citation with newline character, and always prints the jsPsych library citation first.

## 2.0.1

### Patch Changes

- [#3451](https://github.com/jspsych/jsPsych/pull/3451) [`7ffc644d`](https://github.com/jspsych/jsPsych/commit/7ffc644d0469cb5625efc5f1bb043d3aee22c501) Thanks [@jadeddelta](https://github.com/jadeddelta)! - fix `response` data type to be just `ParameterType.OBJECT`

## 2.0.0

### Major Changes

- [#3339](https://github.com/jspsych/jsPsych/pull/3339) [`74b4adc7`](https://github.com/jspsych/jsPsych/commit/74b4adc702747a62a201575a6aa95770eeddb1bb) Thanks [@jodeleeuw](https://github.com/jodeleeuw)! - `finishTrial()` now clears the display and any timeouts set with `pluginApi.setTimeout()`

### Minor Changes

- [#3326](https://github.com/jspsych/jsPsych/pull/3326) [`c5a0dbb1`](https://github.com/jspsych/jsPsych/commit/c5a0dbb17ead8e2b860c76fce7fea834f3b0ad09) Thanks [@vzhang03](https://github.com/vzhang03)! - Updated all plugins to implement new pluginInfo standard that contains version, data generated and new documentation style to match migration of docs to be integrated with the code and packages themselves"

## 1.0.1

### Patch Changes

- [#3287](https://github.com/jspsych/jsPsych/pull/3287) [`54e04dc9`](https://github.com/jspsych/jsPsych/commit/54e04dc93f54a7a019db1fee4961dcc5e02b6fc0) Thanks [@becky-gilbert](https://github.com/becky-gilbert)! - This fixes the incorrect width for dropdown question options (#3286) and cleans up code/comments.

## 1.0.0

### Major Changes

- [#3204](https://github.com/jspsych/jsPsych/pull/3204) [`6d99a71f`](https://github.com/jspsych/jsPsych/commit/6d99a71fb19365ba4a968aaa5025a6b7dbb23135) Thanks [@becky-gilbert](https://github.com/becky-gilbert)! - To take advantage of all of the SurveyJS features, we have re-written the survey plugin so that it now takes a SurveyJS-compatible JavaScript/JSON object ('survey_json') and/or a SurveyJS-compatible function ('survey_function') that manipulates a SurveyJS model. This is a breaking change. See the jsPsych Survey Plugin page for documentation and examples: https://www.jspsych.org/latest/plugins/survey/. More details about creating the SurveyJS JSON configuration and functions can be found on their website: https://surveyjs.io/form-library/documentation/design-survey/create-a-simple-survey#create-a-survey-model.

## 0.2.2

### Patch Changes

- [#3184](https://github.com/jspsych/jsPsych/pull/3184) [`9acfa29c`](https://github.com/jspsych/jsPsych/commit/9acfa29c8db1d7a8816c53ac49651f15493f2cf4) Thanks [@bjoluc](https://github.com/bjoluc)! - Point to source maps via canonical unpkg URLs in NPM-published browser builds. This prevents 404 errors when using redirecting CDN URLs (as described in #3043).

## 0.2.1

### Patch Changes

- [#2781](https://github.com/jspsych/jsPsych/pull/2781) [`12956b3c`](https://github.com/jspsych/jsPsych/commit/12956b3cc130676a81e4a4536d68800a4d34e8a8) Thanks [@jadeddelta](https://github.com/jadeddelta)! - added readme for visibility on npmjs.com

## 0.2.0

### Minor Changes

- [#2622](https://github.com/jspsych/jsPsych/pull/2622) [`9cfefe38`](https://github.com/jspsych/jsPsych/commit/9cfefe388a216c55c8363d7b3810e5e648d9ed69) Thanks [@jsato8094](https://github.com/jsato8094)! - Add `input_type` parameter for questions of type `text`

### Patch Changes

- [#2632](https://github.com/jspsych/jsPsych/pull/2632) [`a17f423f`](https://github.com/jspsych/jsPsych/commit/a17f423f18df24c73baeb06d4079f9f2f9211386) Thanks [@bjoluc](https://github.com/bjoluc)! - Improve browser compatibility when loading via `unpkg.com`, i.e. when using the `dist/index.browser.min.js` build artifact.

* [#2625](https://github.com/jspsych/jsPsych/pull/2625) [`0f6c0be7`](https://github.com/jspsych/jsPsych/commit/0f6c0be78a1c613e0f244f8995a5a15b83dd3256) Thanks [@jsato8094](https://github.com/jsato8094)! - Export css files in `package.json`

## 0.1.1

### Patch Changes

- [#2370](https://github.com/jspsych/jsPsych/pull/2370) [`04f362af`](https://github.com/jspsych/jsPsych/commit/04f362afe82428888e9dbe64bb131d3bf07dd947) Thanks [@jodeleeuw](https://github.com/jodeleeuw)! - Added the CSS folder to package.json so that it will be included.

## 0.1.0

### Minor Changes

- [#2265](https://github.com/jspsych/jsPsych/pull/2265) [`d9dc2507`](https://github.com/jspsych/jsPsych/commit/d9dc25077136da98d04a4167d0d565011129d389) Thanks [@becky-gilbert](https://github.com/becky-gilbert)! - A plugin for presenting one or more pages with survey-type questions, such as multiple choice, multiple selection, free text responses, drop-down selection, and likert scale matrices.
  Provides options for response validation and question/option randomization.
  Uses the SurveyJS library: https://surveyjs.io/.
