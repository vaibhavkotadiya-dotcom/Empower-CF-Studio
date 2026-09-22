# Project memory excerpt (sync-generated)

## Objective and phase

Build a reusable, evidence-based Empower CDS custom-field library from the user's existing fields. The public no-login web app **Empower CF Studio** under [`web/`](web/) packages this library at build time and answers natural-language requests via OpenAI (`gpt-4.1-mini` by default). Public chats do not write back into the library. Deployment is intended on Vercel (Root Directory `web`) with `OPENAI_API_KEY` in environment variables; set an OpenAI project budget of about $20/month and a ~30 chats/IP/day limit. The library remains the maintained source of Empower knowledge; no model fine-tuning has been performed.

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
