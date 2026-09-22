# Your Empower training library

This folder is the saved knowledge for the project. We will add your existing custom fields and corrections here as you teach them. The first lesson from your previous conversation is recorded. The December 2018 Waters Empower 3 custom-field training guide is also fully extracted and indexed.

## What the files do

- `AGENTS.md`: tells the assistant how to work in this project and update the library.
- `MEMORY.md`: saves progress, confirmed conventions and outstanding questions.
- `skills/empower-custom-fields/SKILL.md`: reusable instructions for learning and drafting fields.
- `skills/empower-custom-fields/references/`: formulas, evidence, examples and the preserved source conversation.

The guide extraction includes a complete slide transcript and separate reusable references for field design, functions/operators, worked examples, and intersample calculations. Start at `skills/empower-custom-fields/references/guide-source-map.md`.

The tested five-point bracketing-standard RSD lesson is saved at `skills/empower-custom-fields/references/bracketing-rsd.md`. It records the exact single formula, `S1` and `BRK%` label pattern, calculation logic, your successful Empower test report, and the configuration details still needed for a complete validation record.

The tested 2489 UV maximum-wavelength lesson is saved at `skills/empower-custom-fields/references/uv-wavelength-maximum-2489.md`. It records the working 202-208, 242-248, and 270-276 nm formulas, the fixed `W2489 ChA` Channel Name, the wavelength-label solution, translations, Waters Knowledge Center design sources, and the remaining configuration evidence. The PDA proposal is awaiting your test and is not recorded as confirmed.

`Custom_Field_F1.xlsx` is also preserved as an exact Markdown transcript, a field-by-field dependency catalog, a calculation-family analysis, and a machine-readable JSON inventory. Start at `skills/empower-custom-fields/references/custom-field-f1-analysis.md` for this workbook.

The standard names here are AGENTS.md and MEMORY.md (rather than Agent.md and Memory.ms). The skill is project-local and used through AGENTS.md; it has not been installed globally.

## How to teach the next lesson

Send the field name, exact formula, what it should calculate and, ideally, its Empower configuration plus one set of inputs and the result Empower displays. Explain any special field names in your own words. You do not need to be technical or complete every item at once.

The assistant will save your lesson, distinguish confirmed details from assumptions, and ask focused questions where missing information changes the result. Corrections are recorded with dates. Return to this project for future lessons so these files are available; another chat will need access to the library.

When you teach a field that resembles an example in the guide, say whether it is the same field used at your site. The guide is reference evidence from 2018; your actual Empower configuration and observed result decide which settings are correct for your project.

## First information still needed

The shorter Dilution_Factor formula was confirmed in your follow-up on 2026-09-12. The workbook now supplies an extended variant through TD7; both are saved until you confirm which one is current.

1. Confirm whether the extended Dilution_Factor replaces the shorter one and show which SD/TD field holds each flask or aliquot volume.
2. Explain the sample labels S1, S2, AS and Blank, plus the normal injection order.
3. Provide the missing intersample settings: Search Order, All or Nothing and summary-function placement.
4. Provide the Empower version and one real input/output example for Assay_Single_Area or another important calculation family.

Later, we will fill in units, molecular-weight direction, acronym meanings and the built-in Amount/Value/dilution/weight settings.

The imported guide contains a few contradictory examples. The most useful next confirmations are your Empower version, the settings for the real fields you use, and one input/output example for each important field. These will let us move a formula from guide evidence to site-specific, Empower-observed evidence.

## When training is ready for the application

Agree on the field families the first app should support. For each supported family, collect confirmed syntax/settings, representative input/output examples and important failure cases. Try new natural-language requests that were not used to write the examples; check formula choice, missing-information questions and results against Empower. You decide when this coverage is sufficient to begin the app; completion is not based simply on the number of lessons.

The future application will need to provide the relevant instructions and records to the model and save approved updates. An API key alone does not load these local files. Maintaining this library does not change model weights; model fine-tuning is a separate process, and is not part of this phase. See the official [API quickstart](https://platform.openai.com/docs/quickstart/make-your-first-api-request) and [fine-tuning reference](https://platform.openai.com/docs/api-reference/fine-tuning).

No API key, web application, background daily training or Empower connection is configured at this stage.
