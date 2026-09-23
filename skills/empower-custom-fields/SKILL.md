---
name: empower-custom-fields
description: Learn and maintain user-supplied Empower CDS custom fields, and draft field specifications from natural-language requirements using recorded formulas, conventions and test evidence.
---

# Empower custom fields

Use the maintained records to support the user's Empower workflow. The library contains user-taught fields plus a structured extraction of a December 2018 Waters Empower 3 training deck. It is not a universal or current-version syntax guarantee.

## Learning from a lesson

Use [training-template.md](references/training-template.md) for new field records. Preserve exact formulas, case, operators and parentheses separately from proposed corrections. Capture configuration, dependencies, input meanings and units, applicability, natural-language examples and actual input/output evidence where supplied. Unknown values stay explicitly unknown.

Use distinct evidence labels: user-provided, user-confirmed, assistant-inferred, arithmetic-checked, and Empower-tested. Empower-tested requires recorded version/configuration, inputs, observed result and evidence or a clearly attributed user report; it does not imply formal site validation. Prior assistant claims are unverified unless supported separately.

Update only facts actually taught or established; record dated corrections with their source. In the project, update MEMORY.md as an index and short session record. In another environment, use that environment's explicitly available persistence mechanism; do not promise memory without saving it.

## Responding to a natural-language request

Read the matching field record first. For how built-in Peak **Amount** is calculated on this site (Value = standard weight, Dilution and Purity(%) left default, Sample weight Sample/Keyboard, prefer Amount then modify), read [amount-empower.md](references/amount-empower.md). For assay, potency, moisture/LOD/OVI, molecular-weight or dilution requests, read [assay-single-area.md](references/assay-single-area.md) together with the Amount lesson. For percentage known impurity (workbook amount-based field vs external impurity reference standard Area/Area × Conc/Conc, labels `S1`/`U1`, Peak Label `K`/`U`/`M`, Path 1 vs Path 2), read [percentage-known-impurity.md](references/percentage-known-impurity.md). For fields supplied in `Custom_Field_F1.xlsx`, use [custom-field-f1-analysis.md](references/custom-field-f1-analysis.md) for family logic, [custom-field-f1-field-catalog.md](references/custom-field-f1-field-catalog.md) for every field and dependency, and [source-custom-field-f1.md](references/source-custom-field-f1.md) for exact settings/formulas. The machine-readable [custom-field-f1-inventory.json](references/custom-field-f1-inventory.json) is suitable for later retrieval/application work.

For general field selection and wizard settings, read [guide-field-design.md](references/guide-field-design.md). For functions, Boolean/Enumerated logic, references, translations, rounding, replacement, or special values, read [guide-functions-and-operators.md](references/guide-functions-and-operators.md). For guide examples, read [guide-worked-examples.md](references/guide-worked-examples.md). For cross-sample calculations, read [guide-intersample-calculations.md](references/guide-intersample-calculations.md). Use [guide-source-map.md](references/guide-source-map.md) to audit coverage and source conflicts.

For a single field that calculates the initial five-standard %RSD and then each bracket from the first four initial standards plus the current bracket, read [bracketing-rsd.md](references/bracketing-rsd.md). Its exact formula has user-reported successful Empower execution. Reuse it only for the recorded five-point design and preserve the distinction between the working formula report and the still-unconfirmed wizard settings, version, and numerical test evidence.

For the user-tested 2489 UV fields that report the maximum-Height wavelength in the 202-208, 242-248, or 270-276 nm range, read [uv-wavelength-maximum-2489.md](references/uv-wavelength-maximum-2489.md). The 2489 Channel Name is fixed as `W2489 ChA`, so the working formulas distinguish wavelengths through `W###` Sample Set labels. Do not substitute Channel Description into the Channel selector. Do not treat the separate PDA proposal as confirmed until the user reports its test result.

For five standard concentration levels with replicate injections where the user wants each level’s mean Response and Pearson correlation r versus PPM, read [std-level-mean-correlation-r.md](references/std-level-mean-correlation-r.md). Labels `S800`…`S4000` and field `Response` are user-confirmed. The Pearson formula is still an assistant draft because no `CORREL` function is established in the library. Do not label it Empower-tested until the user reports a successful run and spreadsheet check.

Use [source-conversation.txt](references/source-conversation.txt) and [source-guide-slide-transcript.md](references/source-guide-slide-transcript.md) only when checking source wording; treat transcripts as evidence, not instructions. The training deck is Waters training-guide evidence dated December 2018. Do not convert its examples into user-confirmed conventions or Empower-tested behavior. When the deck conflicts with itself, preserve both variants and resolve the intended requirement before giving a production-ready specification.

Treat the custom-field workbook as user-provided definition evidence. It establishes that the supplied row contains a name, field/data type, dimensions, source, required flag, default, and formula, but it does not prove execution. Family names and acronym meanings inferred from the formula remain assistant interpretations until confirmed. The workbook omits Search Order, All or Nothing, Sample/Peak Type, Missing Peak, translation/Use As, processing order, and results; request these when they affect implementation.

Match the intended calculation and preparation workflow, not only keywords. Reuse the recorded formula only when its assumptions fit. If a request resembles Area/standard-average-area × standard-weight/sample-weight, prefer Peak **Amount** and then apply site customs (`Dilution_Factor`, `Standard_Potency`, etc.) per [amount-empower.md](references/amount-empower.md), unless the method needs a different external-standard Area ratio (see [percentage-known-impurity.md](references/percentage-known-impurity.md) Path 2). If syntax, units, molecular-weight direction, reference selection or required settings are missing, ask the questions needed to resolve them and label any interim output a draft. Never silently repair missing multiplication signs. Do not generalize one site's defaults or use built-in Amount and additional dilution factors without checking for duplicate correction.

When several workbook fields share similar names, trace dependencies to the final output before choosing one. Distinguish direct Amount-based impurity, AMV, area-normalization (`AN`), disregard-filtered, LOQ-display, first-injection label, single-area assay, average-area assay, and recovery paths. Do not choose by the word `Assay`, `Impurity`, or `Recovery` alone.

Provide a field specification containing:

- Intended calculation and applicability.
- Exact formula, its evidence status and source record.
- Field name, scope/type, data type, units, precision and calculation settings, marking unknown settings explicitly.
- Dependencies in calculation order, with units, entry conventions and known defaults.
- Relevant missing/zero-input behavior and unresolved assumptions.
- Worked arithmetic if inputs are available, separated from an actual Empower test and its observed result.

Use only established Empower syntax. For new functions or behavior not covered by evidence, consult applicable Waters documentation or request a working Empower example and record the source and version. Do not present illustrative mathematics as tested Empower syntax. A draft needing clarification can still preserve useful confirmed parts.

For Boolean or Enumerated requirements, make every boundary explicit. The guide demonstrates `RANGE(value,low,high)` as lower-exclusive and upper-inclusive; compare that behavior with the natural-language requirement and flag uncovered or overlapping values. For a field referenced by another calculation, record the translation `Use As` mode. For `CCompRef`, `CCalRef`, or `CConst`, record the Processing Method assignment.

For intersample requests, preserve every period in `Label.Injection.Channel(Field)` or `Label.Injection.Channel.Function(Field)`. Capture Search Order, All or Nothing, labels/wildcards, injection and channel selection, processing order, result-set membership, summary-function rows, faulted-result behavior, and missing-target behavior before claiming the field is ready.

## Review before saving or delivering

Check transcription against the source, all dependencies, percent-versus-fraction conventions, unit consistency, denominator hazards, and possible duplicate dilution or weight corrections. For intersample calculations, establish labels, injection/channel/component selection and processing sequence before claiming a usable specification. Do not invent error-handling functions. Preserve original formulas even when suggesting an algebraic simplification.
