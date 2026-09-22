# Project memory

Last updated: 2026-09-22

## Objective and phase

Build a reusable, evidence-based Empower CDS custom-field library from the user's existing fields. The public no-login web app **Empower CF Studio** under [`web/`](web/) packages this library at build time and answers natural-language requests via OpenAI (`gpt-4.1-mini` by default). Public chats do not write back into the library. Deployment is intended on Vercel (Root Directory `web`) with `OPENAI_API_KEY` in environment variables; set an OpenAI project budget of about $20/month and a ~30 chats/IP/day limit. The library remains the maintained source of Empower knowledge; no model fine-tuning has been performed.

## Knowledge index

- Skill: [skills/empower-custom-fields/SKILL.md](skills/empower-custom-fields/SKILL.md)
- First lesson: [Assay and dilution records](skills/empower-custom-fields/references/assay-single-area.md)
- Bracketing-standard lesson: [Five-point bracketing %RSD](skills/empower-custom-fields/references/bracketing-rsd.md)
- 2489 UV wavelength lesson: [Maximum-Height wavelength fields](skills/empower-custom-fields/references/uv-wavelength-maximum-2489.md)
- Five-level mean Response and Pearson r draft: [Standard-level means and correlation](skills/empower-custom-fields/references/std-level-mean-correlation-r.md)
- New lesson template: [Training template](skills/empower-custom-fields/references/training-template.md)
- Preserved source: [Imported conversation](skills/empower-custom-fields/references/source-conversation.txt)
- Guide source map and evidence limits: [December 2018 training guide](skills/empower-custom-fields/references/guide-source-map.md)
- Field types, data types, entry, and creation workflow: [Field design](skills/empower-custom-fields/references/guide-field-design.md)
- Operators, Boolean/Enum logic, references, translations, ROUND, REPLACE, and special values: [Functions and operators](skills/empower-custom-fields/references/guide-functions-and-operators.md)
- Guide field examples and configurations: [Worked examples](skills/empower-custom-fields/references/guide-worked-examples.md)
- Cross-sample syntax, search, processing, and summaries: [Intersample calculations](skills/empower-custom-fields/references/guide-intersample-calculations.md)
- Complete guide evidence: [219-slide transcript](skills/empower-custom-fields/references/source-guide-slide-transcript.md), [machine inventory](skills/empower-custom-fields/references/source-guide-inventory.json), [shape-linked images](skills/empower-custom-fields/references/source-guide-images/), [all package media](skills/empower-custom-fields/references/source-guide-package-media/), and [embedded objects](skills/empower-custom-fields/references/source-guide-embeddings/)
- Workbook source transcript: [Custom_Field_F1 exact rows](skills/empower-custom-fields/references/source-custom-field-f1.md)
- Workbook field-by-field catalog: [201 fields and dependencies](skills/empower-custom-fields/references/custom-field-f1-field-catalog.md)
- Workbook calculation-family analysis: [Custom_Field_F1 analysis](skills/empower-custom-fields/references/custom-field-f1-analysis.md)
- Workbook machine reference: [Custom_Field_F1 inventory](skills/empower-custom-fields/references/custom-field-f1-inventory.json)
- User guide: [TRAINING.md](TRAINING.md)
- Public chatbot app: [web/README.md](web/README.md)

## Confirmed from the user's lessons

- Dilution_Factor formula confirmed in the follow-up on 2026-09-12: `1/SD1*SD2/SD3*SD4/SD5*SD6/SD7*TD1/1*TD3/TD2`. The missing-operator question is resolved; Empower execution remains untested here.
- SD1-SD7 are standard dilution volumes (user examples: 50 mL, 100 mL); TD1-TD7 are sample dilution fields. The same volume-unit convention for TD is inferred from context. The confirmed formula references only TD1-TD3; applicability of TD4-TD7 is not yet explained.

- Standard_Potency uses percent values such as 99.8.
- LOD, Water and OVI use percentage values such as 0.50.
- The user's workflow generally uses a separate Dilution_Factor rather than entering the preparation dilution in the built-in Dilution field. Actual built-in values and SampleWeight treatment remain unknown.
- Non-applicable standard LOD, Water and OVI corrections use 0. The user's informal spelling `waters_std` needs comparison with the actual field name `Water_Std` in the formula.
- Non-applicable MW1, MW2 and Label_Claim use 1 in this local convention. MW direction and units are not yet established.
- On 2026-09-15, the user reported successful Empower execution of the single five-point bracketing-standard %RSD formula recorded in `bracketing-rsd.md`. It uses fixed `S1.1`-`S1.4` Areas and `REPLACE(BRK%.%.(Area),S1.5.(Area))` as the changing fifth value. This confirms the dynamic `REPLACE` expression worked in the user's tested workflow: `S1.5` completes the initial group, while the current `BRK%` Area replaces it at every bracket. The version/build, numerical inputs/results, and exported field settings remain unrecorded.
- On 2026-09-16, the user reported that all three 2489 UV maximum-Height wavelength formulas worked perfectly. The working ranges are 202-208, 242-248, and 270-276 nm. Because every wavelength result has Channel Name `W2489 ChA`, the formulas use wavelength labels (`W202` through `W208`, `W242` through `W248`, and `W270` through `W276`) and label-family `MAX(Height)` selectors. Exact formulas and translations are in `uv-wavelength-maximum-2489.md`. The version/build, numerical results, and exported wizard settings remain unrecorded.

## Added from the Waters training guide

- Imported all 219 slides, editable tables and grouped text, 194 speaker-note parts (174 with extracted text), all 192 package-media assets, 159 picture occurrences (131 unique shape-linked images), and 15 embedded-object occurrences (14 unique binaries) from `Empower3 Custom Fields Training - Korea - December 2018.pptx`.
- Structured the guide’s field types, data types, wizard workflow, operators, Boolean/Enumerated logic, Processing Method references, translation modes, worked examples, and intersample calculations into topic references.
- Evidence status is Waters training-guide evidence dated December 2018, not user-confirmed site convention and not Empower-tested in this project.
- The guide demonstrates `RANGE(value,low,high)` as `value > low` and `value <= high`. This must be checked against any natural-language boundary requirement.
- The guide distinguishes `CCompRef` component references from `CCalRef` calibration references and shows method-specific constants through `CConst`.
- Intersample fields require the selector syntax, Search Order, All or Nothing, labels, injections, channels, result-set and processing sequence, and summary row behavior to be specified together.
- Known internal guide conflicts are indexed in `guide-source-map.md`; future work must preserve them until a requirement or observed Empower result resolves them.

## Added from Custom_Field_F1.xlsx

- Imported 201 field definitions from `Sheet1!A1:L202`: 35 Sample, 131 Peak, 21 Component, and 14 Result fields.
- Sources are 56 Keyboard, 143 Calculated, and 2 External fields. Sixteen manual fields are marked Required.
- Detected 36 intersample/inter-injection fields: 22 summary and 14 non-summary. Labels/selectors include `SAME`, `S1`, `S1%`, `S2`, `AS`, `Blank`, exact injections, and wildcard injections.
- Built a direct dependency graph with no custom-field dependency cycles. The graph and all exact formulas are saved in the catalog/JSON inventory.
- Identified related families for assay/content, content uniformity/acceptance value, accuracy/recovery, blank correction, amount-based impurity, AMV, area normalization, disregard thresholds, LOQ reporting, standards/similarity, dissolution, residual solvent, chromatography performance, calibration/display helpers, metadata, and LIMS.
- Workbook evidence extends `Dilution_Factor` through TD7: `1/SD1*SD2/SD3*SD4/SD5*SD6/SD7*TD1/1*TD3/TD2*TD5/TD4*TD7/TD6`. It is not yet confirmed as a replacement for the shorter user-confirmed formula.
- The workbook’s `Assay_Single_Area` path uses `mg_Per_Unit_Single_Area` and includes Average_Weight, Dissolution_Media_Volume, No_Of_Units, Dose_In_ml, and Weight_Per_mL. This differs from the earlier conversation formula.
- Exact names/settings/formulas are user-provided workbook evidence. Calculation-family names, acronym expansions, and intended purposes remain assistant interpretations until confirmed. No formula is Empower-tested from this workbook.

## Open questions, in priority order

1. For the 2026-09-22 five-level Response mean + Pearson r draft: labels `S800`…`S4000` and peak field `Response` are user-confirmed. Still need channel/component/settings, Empower version, and spreadsheet vs Empower five-mean + r check. Formula remains assistant-drafted and not Empower-tested.
2. Which SD/TD fields hold final flask volumes versus transferred aliquot volumes; unused-input defaults; whether TD4-TD7 are used in another formula. Confirm TD volume units when recording a worked example.
3. Empower version/build and actual configuration for Assay_Single_Area and its dependencies.
4. One complete input example and the observed Empower result.
5. Units of Amount and Label_Claim; MW1/MW2 numerator/denominator convention.
6. Whether non-applicable sample corrections are 0; actual blank handling; actual built-in Dilution and SampleWeight values.
7. Which guide examples match the user’s real project and which are training-only examples.
8. Site behavior for the guide’s conflicting settings: Label_Claim default/range, Percent_Label_Claim Sample Type, Noise field name/settings, and corrected-area field name.
9. Actual version behavior for `RANGE` boundaries, special numeric codes, translation `Use As`, `CCompRef` versus `CCalRef`, and general intersample search/summary rules. The specific dynamic `REPLACE(BRK%.%.(Area),S1.5.(Area))` pattern worked in the user's reported bracketing-RSD test, but its version and full configuration are not recorded.
10. Whether the extended workbook Dilution_Factor supersedes the shorter formula; physical roles of every SD/TD field; why AMV uses `TD6/TD7` while Dilution_Factor uses `TD7/TD6`.
11. Meanings and units of `B`, `vt`, `Value`, `Control Value`, `Dissolved Amount`, OVI, AMV, UNSP, SF, RS, HH, and the K/U/M Peak Labels.
12. Missing intersample settings for the workbook fields: Search Order, All or Nothing, Sample/Peak Type, Missing Peak, channel, processing sequence, and summary-function placement.
13. Whether `AV_30` should use `KS_30`; whether repeated `RRF2` use in the AN chain is intended; whether `Total_Impurity_Label` intentionally mixes calculation paths; and the correct case for `Percentage_Known_Imp_AN_Label`.
14. Intended behavior of the `-50000` additions on injections 1 and 3, plus real result-set examples for the main calculation families.
15. For the working bracketing-RSD field: actual field name and wizard settings, Empower version/build, channel/component selection, and one numerical input/output example including at least two brackets.
16. For the working 2489 UV wavelength fields: actual saved names and wizard settings, Empower version/build, one numerical Height/output example for each range, and tie behavior.
17. The single-injection PDA wavelength design remains pending the user's Empower test and must not be presented as confirmed.

## Session history

- 2026-09-12: Imported the supplied ChatGPT conversation. Created project instructions, portable skill, initial field records and lesson template. Assay formula preserved verbatim; dilution interpretation kept unconfirmed. No Empower execution or verification performed.
- 2026-09-12, follow-up: User confirmed the complete Dilution_Factor expression with explicit multiplication signs. Updated lesson revision 2 and resolved the syntax question; retained the original transcript unchanged.
- 2026-09-12, next lesson: User identified SD1-SD7 as standard dilution volumes (50 mL, 100 mL examples) and TD1-TD7 as sample dilution fields. Recorded lesson revision 3 without extending the confirmed formula.
- 2026-09-14: Imported the 219-slide Waters `Empower3 Custom Fields Training - Korea - December 2018.pptx`. Preserved a complete raw transcript, notes, shape/image inventory, and extracted source images; created structured design, function, example, and intersample references; recorded internal contradictions and version limits. No formula from the deck was labeled user-confirmed or Empower-tested.
- 2026-09-14: Imported and analyzed `Custom_Field_F1.xlsx`. Preserved all 201 rows, created field-by-field and machine-readable dependency catalogs, detected 36 intersample formulas, documented calculation families and formula concerns, and updated the assay/dilution record. No workbook formula was labeled Empower-tested.
- 2026-09-15: Recorded the user's successful Empower test of the single five-point bracketing-standard %RSD formula. Added a dedicated field record with the exact expression, `S1`/`BRK%` sample-set design, mathematical derivation, assistant-proposed settings, reuse limits, and remaining test-evidence gaps.
- 2026-09-16: Recorded the user's successful Empower test of three 2489 UV maximum-Height wavelength fields for 202-208, 242-248, and 270-276 nm. Added a dedicated record with the fixed `W2489 ChA` constraint, wavelength-label design, exact formulas and translations, settings status, Waters Knowledge Center design sources, and evidence gaps. PDA remains unconfirmed.
- 2026-09-21: Implemented the owner-only Empower Field Studio in `web/` at the user's request. The site packages the skill and references privately, retrieves relevant excerpts, previews the exact recorded bracketing/2489 UV examples, and includes an OpenAI recipe path, Supabase email-code login, reviewed-lesson workflow, and usage limits. No OpenAI key, live API answer, Supabase account, or online deployment has been configured; see `web/README.md`. This app work adds no new Empower-tested formulas.
- 2026-09-21, provider settings: Added an owner-only Model settings screen for OpenAI, Gemini, and OpenRouter keys and model selection. Keys are encrypted in the Supabase settings table with a server encryption secret; only approved owner sessions can save them. Gemini and OpenRouter use the local library without live Waters search. No key was supplied to the workspace and no live model answer has been tested. This changes the app, not the Empower field evidence.
- 2026-09-22, local testing: Enabled Model settings and new-recipe model calls in the loopback-only development server without Supabase. The selected key stays in server memory and is cleared when the server stops or the user removes it; local request/spend limits are in-memory and reset on restart. Local tests use only the maintained library, with live Waters search off. A placeholder key verified the settings/model-selection endpoints without making a provider call, and was removed. No real key or live model answer was supplied or tested. This changes the app, not the Empower field evidence.
- 2026-09-22: Drafted five-level standard mean Response and Pearson correlation (r) fields from the user's 800/1600/2400/3200/4000 PPM × 3-injection requirement. Proposed labels `S800`…`S4000`, `Mean_Response = SAME.%..AVE(Response)`, and a single Pearson-r formula using nested `AVE(Response)`. No `CORREL` function found in the local guide or consulted Waters pages. Recorded in `std-level-mean-correlation-r.md`. Not Empower-tested.
- 2026-09-22, follow-up: User confirmed peak field `Response` and labels `S800`, `S1600`, `S2400`, `S3200`, `S4000` (same as the draft). Spreadsheet check still planned. Formulas unchanged; still not Empower-tested.
- 2026-09-22, Empower CF Studio: Built the public no-login Next.js chatbot under `web/` (Waters-inspired UI, knowledge sync from `skills/empower-custom-fields`, topic router, streaming OpenAI `/api/chat`, ~30 chats/IP/day). Default model `gpt-4.1-mini`. Intended Vercel Root Directory `web`. Public chats do not write library lessons. See `web/README.md`. No new Empower-tested formulas.
