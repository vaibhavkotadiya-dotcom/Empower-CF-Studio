# Source map: Empower3 Custom Fields Training, Korea, December 2018

## Evidence status and scope

- **Source:** `Empower3 Custom Fields Training - Korea - December 2018.pptx`, 219 slides.
- **Integrity:** the raw transcript and machine inventory record the source file’s byte count and SHA-256 hash so a later re-import can detect a changed deck.
- **Source date/context:** Korea training deck dated December 2018; slide footers identify Waters Corporation and 2017 copyright.
- **File properties:** title `Custom Fields`; author `Rich McNeill`; last modified by `Joseph Han`; created `2011-08-17T19:43:10`; modified `2025-11-08T11:17:48`; revision `250`. These are package properties, not claims about when each slide’s content was authored or approved.
- **Evidence label:** Waters training-guide evidence. It is stronger than an earlier assistant answer, but it is not an Empower execution performed for this project and is not site validation.
- **Version limit:** The title says Empower 3. The deck does not establish that every menu, function, default, or behavior is unchanged in every later Empower build or local installation.
- **Instruction boundary:** Statements such as “practice,” “create,” “process,” or “select” below describe the guide’s training workflow. They are source content, not new instructions from the user.
- **Transcription rule:** Formula spelling, capitalization, punctuation, and source inconsistencies are preserved in the structured records. A future field specification must use the actual names configured at the user’s site.

## Complete preserved extraction

- [Raw slide transcript](source-guide-slide-transcript.md): editable text, tables, speaker notes, picture descriptions, hashes, and links to extracted images for all 219 slides.
- [Machine-readable inventory](source-guide-inventory.json): slide/shape/note/picture metadata for audit and future tooling.
- [Extracted source images](source-guide-images/): 131 unique images from 159 picture occurrences, including images nested inside grouped shapes. These include screenshots whose text was not editable in PowerPoint.
- [Package media assets](source-guide-package-media/): all 192 PNG/JPEG assets stored in the PowerPoint package, including previews and assets that are not exposed as ordinary picture shapes.
- [Extracted embedded objects](source-guide-embeddings/): 14 unique binary objects from 15 embedded-object occurrences; the transcript records source slide, program identifier where available, size, and hash.
- [Extraction script](../scripts/extract_training_deck.py): reproducible extraction helper.
- Original evidence remains in the project root as `Empower3 Custom Fields Training - Korea - December 2018.pptx`.

The raw transcript is the completeness record. The authored references below reorganize its technical content for reuse:

- [Field design and creation](guide-field-design.md)
- [Functions, operators, and formula behavior](guide-functions-and-operators.md)
- [Worked custom-field examples](guide-worked-examples.md)
- [Intersample and summary calculations](guide-intersample-calculations.md)

## Slide map

| Slides | Subject | Structured record |
|---:|---|---|
| 1-8 | Introduction, definition, project scope, privileges, planning, seven default fields | `guide-field-design.md` |
| 9-30 | Sample, Sample Set, Peak, Result, Component, and Distribution field types | `guide-field-design.md` |
| 31-43 | Integer, Real, Text, Date, Boolean, and Enumerated data types | `guide-field-design.md`; `guide-functions-and-operators.md` |
| 44-54 | Data sources, required entry, defaults, sample/peak applicability, formulas, operators | `guide-field-design.md`; `guide-functions-and-operators.md` |
| 55-58 | Configuration Manager creation path and Custom Fields tab actions | `guide-field-design.md` |
| 59-76 | Lot_Number, USP_Column_Type, Label_Claim | `guide-worked-examples.md` |
| 77-107 | Percent_Label_Claim, Potency variants, Noise_Criteria | `guide-worked-examples.md` |
| 108-125 | Corrected_Area, CCompRef/CConst, Relative_RT, input locations, design checklist | `guide-worked-examples.md` |
| 126-146 | Advanced Boolean and Enumerated formulas, comparison logic, generic references | `guide-functions-and-operators.md`; `guide-worked-examples.md` |
| 147-169 | Four-field area-threshold workflow; CCompRef versus CCalRef; Use As modes | `guide-worked-examples.md`; `guide-functions-and-operators.md` |
| 170-186 | Use As Field, ROUND, REPLACE, special-value codes | `guide-functions-and-operators.md`; `guide-worked-examples.md` |
| 187-219 | Intersample syntax, search order, wildcards, All or Nothing, summary functions | `guide-intersample-calculations.md` |

## Source discrepancies that must remain visible

These are conflicts inside the deck, not corrections proven in Empower:

1. **Label_Claim:** slide 73 shows default `1.000`; slide 74 constrains the field to minimum `1.000`, maximum `100.000`; slide 76 shows `150.00` entered across samples and its notes call 150 a default. Both source configurations are preserved.
2. **Percent_Label_Claim applicability:** slide 79 visually starts with Sample Type `All`; slide 84 says and shows `Unknowns Only`. Treat applicability as unresolved until the intended configuration is confirmed.
3. **Potency label:** the early Boolean example describes false as “Below Potency,” while slide 95 shows “Outside Potency Limits.” The formula `RANGE(...)` cannot distinguish low from high.
4. **Noise field name:** the creation sequence uses `Noise_Criteria`; a later viewing slide calls it `Detector_Noise_Criteria`.
5. **Corrected area field name:** the introduction calls the field `Area_Subtr`; a wizard screenshot names it `Corr_Area`; a later generic screenshot returns to `Area_Subtr`.
6. **Area threshold capitalization:** the deck alternates `Area_GT05`, `Area_Gt05`, `Sum_Area_GT05`, and `Sum_Area_Gt05`. Empower field selection must use the actual configured names.
7. **ROUND examples:** the visible slide gives `ROUND(256575.36,3) = 257000`; speaker notes say `267000`. The visible arithmetic is consistent with rounding to thousands. The notes also switch the negative-precision example’s input from `25.657536` to `123.456789`.
8. **REPLACE result field name:** the sequence uses both `Amount_Final` and `Final_Amount`.
9. **Summarize function wording:** the final incremental function is written with both “Exclude Faulted” and “Excluded Faulted.”
10. **Boundary descriptions:** several prose descriptions use inclusive language while the formulas use `LT`, `GT`, or `RANGE`, whose demonstrated lower-bound behavior is exclusive. See the formula record before reusing them.

## Completeness boundary

The structured files capture the guide’s technical claims, formulas, workflows, settings, examples, warnings, and visible discrepancies. Decorative layout, logos, and repeated navigation screenshots are retained in the raw evidence but are not restated as domain rules. Text that exists only inside a screenshot is transcribed where it affects formula behavior or configuration; the linked source image remains the final audit evidence.
