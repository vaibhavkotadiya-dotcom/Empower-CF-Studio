# Guide reference: worked custom-field examples

Each record below is reconstructed from the December 2018 Waters Empower 3 training deck. Evidence status is **Waters training-guide evidence** unless a line explicitly says it is an arithmetic observation. None of these fields is yet Empower-tested in the user’s system.

## 1. `Lot_Number`

**Intent:** store a lot number for each sample. (Slides 59-64)

| Setting | Guide value |
|---|---|
| Field type | Sample |
| Data type | Text |
| Data source | Keyboard |
| Name | `Lot_Number` |
| Character width | Set large enough for the site’s lot numbers; the guide recommends limiting it for ease of use but gives no final number |
| Entry locations | Run Samples sample table; Alter Sample |

The guide says a custom-field name begins with a letter. It also says, verbatim, “No characters are allowed in custom field names,” which is ambiguous because its own names use underscores. Preserve that as source wording rather than interpreting it as a confirmed syntax rule. It recommends creating and checking the field in one project before copying it. A slide warns that an already-open project may need to be closed and Empower restarted before the new field appears. This restart behavior is historical guide evidence. (Slides 60-64)

## 2. `USP_Column_Type`

**Intent:** choose one USP column type for an entire sample set from a controlled list. (Slides 65-70)

| Setting | Guide value |
|---|---|
| Field type | Sample Set |
| Data type | Enumerated |
| Data source | Keyboard |
| Data entry required | Enabled |
| Default | None shown |
| Use As | Position |
| Name | `USP_Column_Type` |
| Translation entries | `L1`, `L3`, `L4`, `L7`, `L11` |
| Entry locations | Sample Set Information; Alter Samples |

The field is a dropdown and one selected value applies to the sample set. The deck does not define what each L-code means or give validation evidence.

## 3. `Label_Claim`

**Intent:** let the analyst enter label claim for each component/vial. (Slides 71-76)

| Setting | Guide value |
|---|---|
| Field type | Component |
| Data type | Real; the deck says Real is the only choice for Component fields |
| Data source | Keyboard |
| Data entry required | Unavailable in the shown wizard |
| Default | `1.000` on slide 73 |
| Maximum characters | `7` on slide 74 |
| Precision | `3` on slide 74 |
| Minimum | `1.000` on slide 74 |
| Maximum | `100.000` on slide 74 |
| Name | `Label_Claim` |
| Entry location | Component Editor |

**Source conflict:** slide 76 displays `150.00` for Label_Claim across the samples, and its notes say “Since we added default 150,” contradicting the default `1.000` and maximum `100.000` shown earlier. Do not choose a default or limit from this example without the user’s intended units, range, and configuration.

## 4. `Percent_Label_Claim`

**Intent:** express calculated Amount as a percentage of Label_Claim. (Slides 77-84)

```text
Amount/Label_Claim*100
```

| Setting | Guide value |
|---|---|
| Field type | Peak |
| Data type | Real |
| Data source | Calculated |
| Peak Type | Founds Only |
| Maximum characters | `12` |
| Precision | `3` |
| Name | `Percent_Label_Claim` |
| Calculation prerequisite | Peak must be integrated and quantitated so Amount is available |

**Source conflict:** slide 79 shows Sample Type `All`; slide 84 says and visually demonstrates `Unknowns Only`, with no value for a standard. Treat Sample Type as unresolved. The deck does not establish Amount or Label_Claim units. A future field can reuse the mathematics only if those units are compatible and Label_Claim is nonzero.

## 5. Potency Boolean and Enumerated variants

**Intent:** classify Percent_Label_Claim against lower and upper acceptance limits. (Slides 85-98)

### Original Boolean example

```text
RANGE(Percent_Label_Claim,95,103)
```

| Setting | Guide value |
|---|---|
| Field type | Peak |
| Data type | Boolean |
| Data source | Calculated |
| Use As | Position |
| Sample Type | All |
| Peak Type | Founds Only |
| Translation | Slide narrative: `0 = Below Potency`, `1 = Acceptable Potency`; slide 95 screenshot: `0 = Outside Potency Limits`, `1 = Acceptable Potency` |

The guide says `RANGE(value,low,high)` means above the lower bound and at or below the upper bound. Therefore this formula accepts `>95` and `<=103`, not an inclusive `95` lower limit. It also cannot distinguish a low failure from a high failure. Those are logical observations, not reproduced Empower results.

### Inclusive “within limits” Boolean

```text
GTE(Percent_Label_Claim,95)&LTE(Percent_Label_Claim,103)
```

Suggested translations shown by the guide: `0 = Outside Potency Limits`, `1 = Acceptable Potency`. (Slide 96)

### “Outside limits” Boolean

```text
LT(Percent_Label_Claim,95)|GT(Percent_Label_Claim,103)
```

Translations shown: `0 = Acceptable Potency`, `1 = Outside Potency Limits`. (Slide 97)

### Three-outcome Enumerated variant

```text
ENUM(LT(Percent_Label_Claim,95),GT(Percent_Label_Claim,103),GTE(Percent_Label_Claim,95)&LTE(Percent_Label_Claim,103))
```

Translations: `0 = Low`, `1 = High`, `2 = Acceptable`. (Slide 98)

This variant explicitly covers below 95, above 103, and inclusive 95 through 103. The intended field name is not clearly established on these slides.

## 6. `Noise_Criteria`

**Intent:** translate detector-noise acceptance into a readable result. (Slides 99-107)

```text
LTE(Detector Noise,0.000010)
```

| Setting | Guide value |
|---|---|
| Field type | Result |
| Data type | Boolean |
| Data source | Calculated |
| Use As | Position |
| Sample Type | All |
| Peak Type | Notes for slide 101 say Unknowns Only, although this is a Result field |
| Translation | `0 = Check Noise`; `1 = Acceptable Noise` |
| Name | `Noise_Criteria` during creation |

A later slide calls it `Detector_Noise_Criteria`. This naming conflict and the Peak Type note must be checked against the actual wizard configuration before reuse. The deck does not define the detector-noise units.

## 7. Specific and generic corrected-area fields

**Intent:** combine preCalci and Calci peak areas using an extinction-coefficient factor because the two forms are reversible. (Slides 108-114)

### Specific formula

```text
(preCalci[Area]*1.92)+Calci[Area]
```

The named components must match the Component table. The deck says this result is displayed for all peaks. When assigned as the Y-value in the Processing Method Component table, the corrected area becomes the calibration Y input and produces Amount for Calci. This formula is tied to the named components and factor. (Slides 108-111)

### Generic formula

```text
(CCompRef1[Area]*CConst1)+CCompRef2[Area]
```

Processing Method assignments shown:

- `CCompRef1 = preCalci`
- `CCompRef2 = Calci`
- `CConst1 = 1.92`

The deck lists three CCompRef slots and seven CConst slots. It says the generic result appears only for the peak of interest. This difference from the specific formula should be verified in the user’s Empower build and method. (Slides 112-114)

## 8. `Relative_RT`

**Intent:** calculate relative retention time against a processing-method calibration reference. (Slides 115-120)

```text
Retention Time/CCalRef1[Retention Time]
```

| Setting | Guide value |
|---|---|
| Field type | Peak |
| Data type | Real |
| Data source | Calculated |
| Sample Type | All |
| Peak Type | Unknowns Only |
| Maximum characters | `12` |
| Precision | `3` |
| Name | `Relative_RT` |
| Dependency | Analyst assigns the reference component to `CCalRef1` in the Processing Method |

The deck does not define behavior when the reference is absent, has zero retention time, or is not applicable.

## 9. Generic Boolean area checks

The advanced examples use Theobromine (`ThBr`) and Caffeine (`Caf`) from a tea analysis. (Slides 126-140)

### Current peak

```text
GT(Area,20000)
```

### Named component

```text
GT(ThBr[Area],20000)
```

### Two named components, both required

```text
GT(ThBr[Area],20000)&GT(Caf[Area],400000)
```

### Either named component may pass

```text
GT(ThBr[Area],20000)|GT(Caf[Area],400000)
```

### Generic component and constant

```text
GT(CCompRef1[Area],CConst1)
```

### Two generic component checks

```text
GT(CCompRef1[Area],CConst1)&GT(CCompRef2[Area],CConst2)
```

The example Processing Method maps `CCompRef1` to ThBr, `CConst1` to 20000, `CCompRef2` to Caf, and `CConst2` to 400000. Displayed values are ThBr area `25800` and Caf area `399190`, so the AND expression gives Fail because the second condition is false. This is guide-provided example evidence. The notes mention that a method could instead evaluate one `CCompRef1` per component, depending on the intended design.

## 10. Generic three-level area classification

**Intent:** label the referenced component area Low, Good, or High using method constants. (Slides 142-146)

```text
ENUM(LT(CCompRef1[Area],CConst1),RANGE(CCompRef1[Area],CConst1,CConst2),GT(CCompRef1[Area],CConst2))
```

Translations: `0 = Low`, `1 = Good`, `2 = High`.

The source uses `CConst1` as the lower threshold and `CConst2` as the upper threshold. Its three expressions leave a gap at exactly `CConst1` under the deck’s own lower-exclusive `RANGE` definition. Confirm whether the lower boundary should be included before adopting the formula.

## 11. Peaks above 0.5% of the main component

**Intent:** retain and total only peaks whose Area exceeds 0.5% of the Caffeine reference area, then calculate each retained peak’s percentage of the retained-area total. (Slides 147-169)

The guide builds four fields in calculation order.

### Step 1 — `Area_Limit`

First specific version:

```text
GT(Area,(Caf[Area]*0.005))
```

The deck notes the extra parentheses are unnecessary:

```text
GT(Area,Caf[Area]*0.005)
```

A generic `CCompRef1[Area]` version is shown but calculates only for the referenced Caffeine peak in the example. The guide changes it to:

```text
GT(Area,CCalRef1[Area]*0.005)
```

Configure `Use As = Position`, with display translations such as `0 = <0.5%` and `1 = >0.5%`. The selected `CCalRef1` must identify the main component. The strict `GT` excludes an area exactly equal to 0.5% of the reference. (Slides 147-157)

### Step 2 — `Area_GT_05`

```text
Area*Area_Limit
```

Because `Area_Limit` supplies position `0` or `1`, excluded peaks become zero and included peaks retain Area. (Slides 158-165)

### Step 3 — `Sum_Area_GT05`

```text
SUM(Area_GT_05)
```

This is a Result field returning one total per chromatogram/result. (Slide 166)

### Step 4 — `Pct_Area_GT05`

```text
Area_GT_05/Sum_Area_GT05*100
```

This is a Peak field returning each included peak’s percentage of the retained-area sum. The source alternates capitalization in the field names (`GT`/`Gt`); the actual configured spelling must be used. The guide does not define behavior when the sum is zero. (Slides 167-169)

## 12. `LODAcceptance` with `Use As = Field`

**Intent:** show explanatory text when signal-to-noise is below 10 and the actual signal-to-noise value otherwise. (Slides 170-172)

```text
GTE([s/n],10)
```

Translations:

- `0 = Below LOD`
- `1 = [s/n] (fc)`

The deck identifies `[s/n]` as a built-in system-suitability signal-to-noise field. `Use As = Field` is required for the true row to return that field value. Confirm the exact built-in field name and available suitability calculation in the user’s method.

## 13. `ReactionMonitor` with `Use As = Field`

**Intent:** display an instruction below the target interval, actual Amount within it, and an over-limit instruction above it. (Slides 173-175)

```text
ENUM(LT(Amount,150),RANGE(Amount,150,152),GT(Amount,152))
```

The screenshot/narrative uses labels corresponding to “Keep Mixing,” `Amount (fc)`, and “Over cooked.” The formula leaves exactly `150` unmatched because `LT` is false and `RANGE` is lower-exclusive according to the same deck. Confirm wording, units, and intended boundaries before reuse.

## 14. `Plate_Count`

**Intent:** round a built-in system-suitability plate-count result to whole hundreds. (Slides 176-178)

```text
ROUND(EP Plate Count,2)
```

The deck does not give the remaining wizard settings or an observed Empower input/output pair for this exact field.

## 15. `ROUND` inside a criterion and summary

The deck contrasts these formulas: (Slide 179)

```text
SUM(GTE(%Area,16)*%Area)
SUM(GTE(ROUND(%Area,0),16)*%Area)
```

For the displayed values, the first total is `73.13` and the second is `88.875`; `%Area = 15.74` is excluded before rounding but included after rounding to `16`.

## 16. Final Amount after a missing peak

**Intent:** replace a blank or invalid Amount with zero. (Slides 180-183)

```text
REPLACE(Amount,0)
```

The guide shows a calculated Peak field with Missing Peak enabled and Sample Type `Unknowns Only`. It uses both `Amount_Final` and `Final_Amount` as names. Other settings and the exact invalid-value behavior must be confirmed in the target version.

## 17. LOD/LOQ display using special codes

**Intent:** retain Amount above LOQ, display Below Detection Limit below LOD, and display Below Peak Quantitation Limit between them. Example limits: LOD `0.2`, LOQ `0.6`. (Slides 184-186)

```text
GT(Amount,0.6)*Amount + LT(Amount,0.2)*-60006 + RANGE(Amount,0.2,0.6)*-60008
```

The guide maps `-60006` to Below Detection Limit and `-60008` to Below Peak Quantitation Limit. It says no translation table is needed. Its formula returns zero at exactly `0.2` under the function meanings supplied elsewhere in the same deck; confirm and repair that boundary only after the requirement is known. At exactly `0.6`, the `RANGE` branch applies.

## Reuse status

These examples enlarge the training library’s syntax and design knowledge. They are templates, not approved site fields. Before producing a “proper Empower custom field” from any example, the future agent must check exact names, units, applicability, boundaries, precision, search behavior, dependencies, and a representative observed result.
