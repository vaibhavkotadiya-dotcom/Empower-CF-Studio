# Lesson 004: Five-level standard mean Response and correlation (r)

Revision: 1, recorded 2026-09-22.

Source: user requirement in this project conversation. The user injects three injections at each of 800, 1600, 2400, 3200, and 4000 PPM, uses peak-table `Response`, wants five level means and the Pearson correlation coefficient (r) of those means versus the PPM levels.

Evidence status: **assistant-drafted specification with user-confirmed labels and Response field**. Formulas use December 2018 guide intersample-summary syntax (`AVE`, `SQRT`, `**`) and the standard Pearson formula. Labels `S800`, `S1600`, `S2400`, `S3200`, `S4000` and peak field `Response` are **user-confirmed** (2026-09-22). No Empower execution has been reported. Waters Knowledge Center evidence used only for summary-function processing rules and for the built-in calibration alternative. The user intends a spreadsheet check of the five means and r.

## Requirement

1. For each of five PPM levels, calculate the mean of `Response` across three injections.
2. Calculate Pearson correlation **r** of the five mean Response values against the five PPM concentrations (x = PPM, y = mean Response).

## Sample-set design required by this draft

| Level (PPM) | Label | Injections | Role |
|---|---|---|---|
| 800 | `S800` | 3 | Level 1 standard |
| 1600 | `S1600` | 3 | Level 2 standard |
| 2400 | `S2400` | 3 | Level 3 standard |
| 3200 | `S3200` | 3 | Level 4 standard |
| 4000 | `S4000` | 3 | Level 5 standard |

Labels are **user-confirmed** (2026-09-22). Exact spelling and capitalization must match the sample set.

Enter the matching PPM as the component Amount/Value on each standard line so the x-axis matches the hardcoded constants in the r formula (800, 1600, 2400, 3200, 4000).

End the sample set with a **Summarize Custom Fields** line. Waters documents that `AVE` (and related summary functions) require this row: [WKB17677](https://support.waters.com/KB_Inf/Empower_Breeze/WKB17677_When_does_one_need_to_use_the_function_Summarize_Custom_Fields_in_Empower), [Tip94](https://support.waters.com/KB_Inf/Empower_Tips_of_the_Week/WKB68836_How_to_Create_Intersample_Custom_Fields_with_a_Summary_Function).

## Field 1 — five level means (one field)

**Proposed name:** `Mean_Response`  
**Purpose:** On each standard line, show the mean `Response` of all injections that share that line’s label. With the five labels above, the result set shows five distinct mean values.

```text
SAME.%..AVE(Response)
```

Evidence: guide intersample-summary syntax; workbook precedent `SAME.%..AVE(Area)` / `SAME.%..AVE(...)` patterns. Field name `Response` is **user-confirmed** (2026-09-22).

### Assistant-proposed settings for `Mean_Response`

- Field scope/type: Peak
- Data type/source: Real / Calculated
- Search Order: Result Set Only
- All or Nothing: Enabled
- Sample Type: Standards Only (confirm if unknowns are also present)
- Peak Type: Founds Only
- Channel: omit only if a single relevant channel; otherwise specify Channel Name
- Sample-set processing: include **Summarize Custom Fields** after all standards

## Field 2 — correlation coefficient r

**Proposed name:** `Corr_Response_r`  
**Purpose:** Pearson r for the five (PPM, mean Response) pairs.

### Exact draft formula

```text
(5*(800*S800.%..AVE(Response)+1600*S1600.%..AVE(Response)+2400*S2400.%..AVE(Response)+3200*S3200.%..AVE(Response)+4000*S4000.%..AVE(Response))-12000*(S800.%..AVE(Response)+S1600.%..AVE(Response)+S2400.%..AVE(Response)+S3200.%..AVE(Response)+S4000.%..AVE(Response)))/SQRT(32000000*(5*(S800.%..AVE(Response)**2+S1600.%..AVE(Response)**2+S2400.%..AVE(Response)**2+S3200.%..AVE(Response)**2+S4000.%..AVE(Response)**2)-(S800.%..AVE(Response)+S1600.%..AVE(Response)+S2400.%..AVE(Response)+S3200.%..AVE(Response)+S4000.%..AVE(Response))**2))
```

Preserve every period, parenthesis, `AVE`, and `**`. Change labels or the field `Response` only when the sample set / peak table actually differ.

### Arithmetic represented (arithmetic-checked)

With fixed x-values `800, 1600, 2400, 3200, 4000`:

- `n = 5`
- `Σx = 12000`
- `Σx² = 35200000`
- `n·Σx² − (Σx)² = 32000000`

Let `y1…y5` be the five level means `S800.%..AVE(Response)` … `S4000.%..AVE(Response)`.

```text
Σy  = y1+y2+y3+y4+y5
Σy² = y1**2+y2**2+y3**2+y4**2+y5**2
Σxy = 800*y1+1600*y2+2400*y3+3200*y4+4000*y5

r = (n*Σxy − Σx*Σy) / SQRT( (n*Σx² − (Σx)**2) * (n*Σy² − (Σy)**2) )
```

The formula is undefined if all five means are equal (denominator zero) or if any required level mean is missing under All or Nothing.

### Assistant-proposed settings for `Corr_Response_r`

- Field scope/type: Peak
- Data type/source: Real / Calculated
- Precision: enough decimals for r (for example 0.0001 display); confirm site preference
- Search Order: Result Set Only
- All or Nothing: Enabled
- Sample Type: Standards Only
- Peak Type: Founds Only
- Same **Summarize Custom Fields** requirement as Field 1
- Meaningful output is expected after summarization when all five labels are present in the result set

## Built-in Empower alternative (not a custom field)

Waters Tip269 documents that Processing Method **Average By = Amount** averages replicate standard responses at each amount and builds the calibration from those averages; Review then shows the calibration equation and related correlation fields. Source: [Tip269](https://support.waters.com/KB_Inf/Empower_Tips_of_the_Week/WKB229352_Exploring_calibration_curve_parameters_within_the_processing_method_that_can_affect_the_calculation_of_amount_or_concentration).

Use that path when a stored custom-field r is not required and the Y-value / Amount setup already matches this experiment. This draft custom-field path is for when r must be stored as a custom-field result.

## Evidence limits and open questions

1. Labels `S800`…`S4000` and peak field `Response`: **user-confirmed** 2026-09-22.
2. Confirm channel, component, Sample Type / Peak Type, All or Nothing, and Search Order used in the test.
3. Spreadsheet check planned by the user: record five means + observed Empower r versus spreadsheet r when available.
4. Confirm Empower version/build with that numerical example.
5. No `CORREL` function appears in the December 2018 guide or in the Waters pages consulted for this draft; the Pearson expression is therefore assistant-constructed from listed math operators and is **not Empower-tested**.
6. If PPM levels change, recompute `Σx`, `Σx²`, and the hardcoded x coefficients before reuse.

## Natural-language retrieval examples

- mean Response of three injections at each standard level
- correlation coefficient r of five standard means versus PPM
- linearity r for 800 1600 2400 3200 4000 PPM standards
