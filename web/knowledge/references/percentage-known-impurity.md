# Lesson: Percentage known impurity (workbook vs external impurity standard)

Lesson ID: percentage-known-impurity  
Revision: 1, dated 2026-09-23  
Sources: `Custom_Field_F1.xlsx` / [source-custom-field-f1.md](source-custom-field-f1.md); user natural-language formula and labels in project chat (2026-09-23); Amount convention in [amount-empower.md](amount-empower.md).  
Status: workbook formulas = user-provided definition evidence; user’s external-standard equation = user-provided requirement; Path 1/Path 2 Empower drafts = **assistant draft**, **not Empower-tested**.

Related: [amount-empower.md](amount-empower.md), [assay-single-area.md](assay-single-area.md), [custom-field-f1-analysis.md](custom-field-f1-analysis.md).

## Purpose

1. Decode the workbook **amount-based** known-impurity field.  
2. Decode the user’s **external impurity reference standard** percentage equation.  
3. Compare them and state the **minimal** changes to implement the user’s equation in Empower.  
4. Fix preferred sample-set labels for this design: standard **`S1`**, sample **`U1`**.  
5. Use Processing Method **Peak Label** values (`K`, `U`, `M`, or others) to gate which peaks calculate.

## Preferred labels (user-specified 2026-09-23)

| Role | Sample Set label |
|---|---|
| Impurity / standard line | `S1` |
| Sample / unknown line | `U1` |

Peak classification comes from the Processing Method Peak Label (examples: **`K`** known impurity, **`U`** unknown impurity, **`M`** main). Exact meaning of each letter remains site/method-specific; expansions Main/Known/Unknown are assistant-inferred until confirmed. Known-impurity % formulas gate with `EQI(Peak Label,"K")`.

---

## Part 1 — User formula (external impurity standard)

Exact user equation:

```text
Known_Impurity_Percent =
(Impurity_Peak_Area_in_Sample / Impurity_Peak_Area_in_Standard)
× (Impurity_Standard_Concentration / Sample_Concentration)
× (Impurity_Standard_Potency / 100)
× (1 / RRF)
× 100
```

### Term map

| User term | Meaning |
|---|---|
| Impurity_Peak_Area_in_Sample | Area of the known impurity peak in the **sample** chromatogram (`U1`) |
| Impurity_Peak_Area_in_Standard | Area of the **same** impurity component in the **impurity reference standard** chromatogram (`S1`) |
| Impurity_Standard_Concentration | Final concentration of the impurity standard after all dilutions |
| Sample_Concentration | Final concentration of the sample after all dilutions |
| Impurity_Standard_Potency | Potency as percent (e.g. 98.5) — site uses Component `Standard_Potency`, not built-in Purity(%) |
| RRF | Relative response factor of the known impurity |

### Decode (step by step)

1. **Area ratio** compares the impurity peak in the sample to the same peak in the impurity standard (`U1` vs `S1`).  
2. **Concentration ratio** scales that response to final prepared concentrations.  
3. **Potency/100** applies impurity-standard purity as a fraction.  
4. **1/RRF** corrects detector response relative to the reference.  
5. **×100** reports a percentage.  
6. Apply only to Peak Label **`K`** when implementing as a known-impurity field.

This path does **not** include Label Claim, Average Weight, or MW in the user’s equation.

---

## Part 2 — Workbook `Percentage_Known_Impurity` (amount-based)

Exact workbook formula ([source-custom-field-f1.md](source-custom-field-f1.md) row 93):

```text
EQI(Peak Label,"K")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2
```

### Decode (step by step)

| Piece | Role |
|---|---|
| `EQI(Peak Label,"K")` | Zero unless Peak Label is known impurity `K` |
| `Amount` | Built-in Peak Amount for that component (see [amount-empower.md](amount-empower.md)) |
| `Dilution_Factor` | Custom SD/TD preparation factor (built-in Dilution left default) |
| `Average_Weight/Label_Claim` | Dosage / % of label-claim scaling |
| `MW1/MW2` | Molecular-weight correction (often 1 if unused) |
| `Standard_Potency/100` | Component potency (not built-in Purity%) |
| `RRF1/RRF2` | Relative response; with `RRF1=1` this is `1/RRF2` |
| `*100` | Percent |

### Same family (workbook)

- `Percentage_Impurity` — `K` or `U` peaks, same Amount × Dilution_Factor × … × RRF pattern.  
- `Percentage_Unknown_Impurity` — Peak Label `U` only.  
- `Percentage_Known_IMP_Label` — `SAME.1..MAX(...)` projects injection-1 known impurity.  
- Area-normalization, disregard, LOQ, and AMV variants are **different families** — see [custom-field-f1-analysis.md](custom-field-f1-analysis.md). Do not substitute them for this external-standard requirement without checking.

---

## Part 3 — Comparison

| User external-std formula | Workbook `Percentage_Known_Impurity` |
|---|---|
| Explicit `Area(U1) / Area(S1)` for the impurity | Uses `Amount` (Area/std-average embedded **only if** that peak’s calibration is the impurity std) |
| `Conc_std / Conc_sample` written out | Prep partly via Amount weights + `Dilution_Factor`; not written as conc/conc |
| Impurity std potency/100 | `Standard_Potency/100` (aligned with site convention) |
| `1/RRF` | `RRF1/RRF2` (aligned if `RRF1=1` and RRF = `RRF2`) |
| ×100 | ×100 |
| Gate known peaks | `EQI(Peak Label,"K")` |
| No Avg Wt / Label Claim / MW | **Includes** `Average_Weight/Label_Claim*MW1/MW2` |

**Critical fork:** If Amount for the known impurity is calibrated against the **impurity reference on `S1`**, Path 1 (modify Amount) can match the user’s intent with few edits. If Amount comes from the **main API** calibration (or another curve), Amount is **not** `Area_imp_sample / Area_imp_std` — use Path 2 (explicit intersample Area).

---

## Part 4 — Minimal implementation paths (assistant drafts)

### Path 1 — Prefer Amount (smallest change from workbook)

**When:** Known impurity component is quantitated so Peak Amount already reflects Area vs **impurity** standard average area (and site weight defaults as in [amount-empower.md](amount-empower.md)).

Start from workbook known impurity; **remove** dosage/MW scaling:

```text
EQI(Peak Label,"K")*Amount*Dilution_Factor*Standard_Potency/100*RRF1/RRF2*100
```

Minimal edits vs workbook `Percentage_Known_Impurity`:

1. Drop `Average_Weight/Label_Claim*MW1/MW2` (or leave those inputs at 1).  
2. Keep Peak Label `K` gate, Amount, Dilution_Factor, Standard_Potency/100, RRF1/RRF2, ×100.  
3. Confirm `Dilution_Factor` (or SD/TD on `S1` vs `U1`) matches intended **Conc_std / Conc_sample**.  
4. Confirm calibration is the impurity std on **`S1`**, not the main assay std.

Optional potency pull from standard line if Component values must come from `S1`:

```text
EQI(Peak Label,"K")*Amount*Dilution_Factor*(S1.%.(Standard_Potency))/100*RRF1/RRF2*100
```

(Intersample settings required; not Empower-tested here.)

### Path 2 — Explicit external standard (literal match)

**When:** Amount is not from the impurity reference, or the method must show Area/Area × Conc/Conc explicitly.

Draft (labels `S1` / current sample as `U1`):

```text
EQI(Peak Label,"K")*Area/S1.%.(Area)*(Imp_Std_Conc)/Sample_Conc*(S1.%.(Standard_Potency))/100/RRF2*100
```

Or with averaged standard injections:

```text
EQI(Peak Label,"K")*Area/S1.%..AVE(Area)*(Imp_Std_Conc)/Sample_Conc*(S1.%.(Standard_Potency))/100/RRF2*100
```

Minimal **new** pieces beyond Path 1:

1. Intersample `S1.%.(Area)` or `S1.%..AVE(Area)`.  
2. Defined **Imp_Std_Conc** and **Sample_Conc** (keyboard fields, or computed from Value + SD/TD).  
3. Search Order / result-set processing so `U1` can see `S1`.  
4. Still gate with `EQI(Peak Label,"K")`.

`Area` on the current `U1` line is the sample impurity area; `U1` need not appear in the selector unless a cross-label pull is required.

Evidence: **assistant draft** — not Empower-tested; field names for concentrations remain to be fixed per method.

---

## Part 5 — How this relates to Amount and Assay teaching

From [amount-empower.md](amount-empower.md):

- For “Area / std average area × std weight / sample weight” style needs, **prefer Amount then modify**.  
- Path 1 follows that rule for known impurity when calibration is the impurity std.  
- Path 2 is the exception when the ratio must be against a **different** chromatogram/label than Amount’s calibration.

Assay (`Assay_Single_Area`) uses the same Amount × Dilution_Factor × Standard_Potency pattern for the **main** peak path; known impurity Path 1 is the impurity analogue without Label Claim/Avg Wt/MW unless the method needs them.

---

## Suggested field specification checklist (when implementing)

- Field name (e.g. `Percentage_Known_Impurity` reuse vs new name).  
- Peak / Real / Calculated; Sample Type (often Unknowns Only).  
- Path 1 vs Path 2 decision (calibration source).  
- Peak Label gate `K`.  
- Labels `S1` / `U1`.  
- RRF field spelling (`RRF2` vs single `RRF` vs `RRF1/RRF2`).  
- Concentration field names and units.  
- Search Order, All or Nothing (Path 2).  
- Empower test: inputs + observed % vs spreadsheet of the user equation.

## Open questions

1. For known impurities, is Amount calibrated to the impurity std on `S1`? (locks Path 1 vs Path 2)  
2. Exact Imp_Std_Conc / Sample_Conc field names and units.  
3. Single `S1` injection vs average of replicates.  
4. Whether any method still needs Average_Weight / Label_Claim / MW on known impurity %.  
5. Empower version/build and one numerical pass/fail of the chosen path.

## Revision history

- 2026-09-23, revision 1: Decoded workbook known impurity vs user external-std formula; recorded S1/U1 labels, Peak Label gating, Path 1/Path 2 drafts. No Empower execution recorded.
