# Project memory excerpt (sync-generated)

## Objective and phase

Build a reusable, evidence-based Empower CDS custom-field library from the user's existing fields. The public no-login web app **Empower CF Studio** under [`web/`](web/) packages this library at build time and answers natural-language requests via OpenAI (`gpt-4.1-mini` by default). Public chats do not write back into the library. Deployment is intended on Vercel (Root Directory `web`) with `OPENAI_API_KEY` in environment variables; set an OpenAI project budget of about $20/month and a ~30 chats/IP/day limit. The library remains the maintained source of Empower knowledge; no model fine-tuning has been performed.

## Confirmed from the user's lessons

- Dilution_Factor formula confirmed in the follow-up on 2026-09-12: `1/SD1*SD2/SD3*SD4/SD5*SD6/SD7*TD1/1*TD3/TD2`. The missing-operator question is resolved; Empower execution remains untested here.
- SD1-SD7 are standard dilution volumes (user examples: 50 mL, 100 mL); TD1-TD7 are sample dilution fields. The same volume-unit convention for TD is inferred from context. The confirmed formula references only TD1-TD3; applicability of TD4-TD7 is not yet explained.
- On 2026-09-23: SD fields are **Component** (entered in the Amount table); TD fields are **Sample** (entered in the sample set). Example step counts (e.g. SD1–SD5, TD1–TD3) are **reference only**, not a fixed maximum.

- Standard_Potency uses percent values such as 99.8. It is a **Component** Keyboard field entered in the Amount table. Built-in **Purity(%)** is left at default on purpose; custom fields use `Standard_Potency`, not built-in P.
- LOD, Water and OVI use percentage values such as 0.50.
- On 2026-09-23 Amount convention (user-taught, not Empower-tested):  
  `Amount = (Area/Standard_Average_Area)×(Std_Weight/Std_Dilution)×(Sample_Dilution/Sample_Weight)×(Purity%/100)`.  
  Built-in Dilution (std and sample) left **default**. **Value** = standard weight. Sample weight = **Sample**/Keyboard in the sample set. Preparation dilution is applied later via `Dilution_Factor`. Design rule: for Area/std-average-area × std-weight/sample-weight style needs, prefer Peak **Amount** then modify with customs.
- The user's workflow generally uses a separate Dilution_Factor rather than entering the preparation dilution in the built-in Dilution field. Actual numeric defaults of built-in Dilution/Purity(%) remain unrecorded; treatment of Sample weight vs any alternate spelling remains to confirm against the live project.
- Non-applicable standard LOD, Water and OVI corrections use 0. The user's informal spelling `waters_std` needs comparison with the actual field name `Water_Std` in the formula.
- Non-applicable MW1, MW2 and Label_Claim use 1 in this local convention. MW direction and units are not yet established.
- On 2026-09-23: user supplied external known-impurity equation Area_sample/Area_imp_std × Conc_std/Conc_sample × Potency/100 × (1/RRF) × 100; preferred labels **S1** (std) and **U1** (sample); Peak Labels from Processing Method (`K`/`U`/`M`/…). Workbook `Percentage_Known_Impurity` is amount-based and includes Avg Wt/Label Claim/MW. Path 1 (Amount×Dilution_Factor×Standard_Potency×RRF×100, drop dosage/MW) vs Path 2 (explicit S1 Area) recorded in `percentage-known-impurity.md` as assistant drafts. Calibration source for impurity Amount still open.
- On 2026-09-15, the user reported successful Empower execution of the single five-point bracketing-standard %RSD formula recorded in `bracketing-rsd.md`. It uses fixed `S1.1`-`S1.4` Areas and `REPLACE(BRK%.%.(Area),S1.5.(Area))` as the changing fifth value. This confirms the dynamic `REPLACE` expression worked in the user's tested workflow: `S1.5` completes the initial group, while the current `BRK%` Area replaces it at every bracket. The version/build, numerical inputs/results, and exported field settings remain unrecorded.
- On 2026-09-16, the user reported that all three 2489 UV maximum-Height wavelength formulas worked perfectly. The working ranges are 202-208, 242-248, and 270-276 nm. Because every wavelength result has Channel Name `W2489 ChA`, the formulas use wavelength labels (`W202` through `W208`, `W242` through `W248`, and `W270` through `W276`) and label-family `MAX(Height)` selectors. Exact formulas and translations are in `uv-wavelength-maximum-2489.md`. The version/build, numerical results, and exported wizard settings remain unrecorded.

## Open questions, in priority order

1. For known impurity Path 1 vs Path 2 (2026-09-23): is Peak Amount for known impurities calibrated against the impurity reference on label `S1`, or against the main standard? Exact Imp_Std_Conc / Sample_Conc field names; single vs averaged `S1` Area; whether Avg Wt/Label Claim/MW are still required on any known-impurity method.
2. For the 2026-09-22 five-level Response mean + Pearson r draft: labels `S800`…`S4000` and peak field `Response` are user-confirmed. Still need channel/component/settings, Empower version, and spreadsheet vs Empower five-mean + r check. Formula remains assistant-drafted and not Empower-tested.
3. Which SD/TD fields hold final flask volumes versus transferred aliquot volumes; unused-input defaults; whether TD4-TD7 are used in another formula. Confirm TD volume units when recording a worked example.
4. Empower version/build and actual configuration for Assay_Single_Area and its dependencies; one complete Amount → Dilution_Factor → Assay numerical example.
5. Units of Amount and Label_Claim; MW1/MW2 numerator/denominator convention.
6. Whether non-applicable sample corrections are 0; actual blank handling; exact built-in Dilution and Purity(%) default values observed in the project.
7. Which guide examples match the user’s real project and which are training-only examples.
8. Site behavior for the guide’s conflicting settings: Label_Claim default/range, Percent_Label_Claim Sample Type, Noise field name/settings, and corrected-area field name.
9. Actual version behavior for `RANGE` boundaries, special numeric codes, translation `Use As`, `CCompRef` versus `CCalRef`, and general intersample search/summary rules. The specific dynamic `REPLACE(BRK%.%.(Area),S1.5.(Area))` pattern worked in the user's reported bracketing-RSD test, but its version and full configuration are not recorded.
10. Whether the extended workbook Dilution_Factor supersedes the shorter formula; physical roles of every SD/TD field; why AMV uses `TD6/TD7` while Dilution_Factor uses `TD7/TD6`.
11. Meanings and units of `B`, `vt`, `Value`, `Control Value`, `Dissolved Amount`, OVI, AMV, UNSP, SF, RS, HH, and confirmation of K/U/M Peak Label meanings.
12. Missing intersample settings for the workbook fields: Search Order, All or Nothing, Sample/Peak Type, Missing Peak, channel, processing sequence, and summary-function placement.
13. Whether `AV_30` should use `KS_30`; whether repeated `RRF2` use in the AN chain is intended; whether `Total_Impurity_Label` intentionally mixes calculation paths; and the correct case for `Percentage_Known_Imp_AN_Label`.
14. Intended behavior of the `-50000` additions on injections 1 and 3, plus real result-set examples for the main calculation families.
15. For the working bracketing-RSD field: actual field name and wizard settings, Empower version/build, channel/component selection, and one numerical input/output example including at least two brackets.
16. For the working 2489 UV wavelength fields: actual saved names and wizard settings, Empower version/build, one numerical Height/output example for each range, and tie behavior.
17. The single-injection PDA wavelength design remains pending the user's Empower test and must not be presented as confirmed.
