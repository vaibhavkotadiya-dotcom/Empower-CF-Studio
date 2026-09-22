# Guide reference: functions, operators, and formula behavior

Evidence status throughout: **Waters training-guide evidence**, December 2018 Empower 3 training deck. These rules and examples have not been tested in the user’s Empower installation. Preserve exact field names from the real project when generating a specification.

## Arithmetic operators and functions

The deck’s formula tables show these arithmetic operators: (slides 52-53)

| Token | Meaning shown or implied by the guide |
|---|---|
| `+` | Addition |
| `-` | Subtraction or negative value |
| `*` | Multiplication |
| `/` | Division |
| `**` | Exponentiation |
| `(` `)` | Grouping and function arguments |

The guide states precedence as exponent, multiplication, division, addition, then subtraction. Use parentheses when the intended grouping is not obvious. Parentheses must be balanced; the guide recommends no more than eight nested levels. (Slide 52)

The deck lists these math functions: `ABS`, `COS`, `LN`, `LOG`, `SIN`, `SQRT`. It lists these ordinary summary functions: `AVE`, `MAX`, `MIN`, `SUM`. The intersample section separately adds `%RSD` and `PROD` to the intersample-summary function list. (Slides 53, 208-210)

## Boolean comparison functions

| Function | Guide meaning | Example |
|---|---|---|
| `EQ(a,b)` | Equal | `EQ(Field,10)` |
| `EQI(a,b)` | Equal, case-insensitive text comparison | Source table only |
| `NEQ(a,b)` | Not equal | `NEQ(Field,10)` |
| `NEQI(a,b)` | Not equal, case-insensitive text comparison | Source table only |
| `GT(a,b)` | Greater than | `GT(%Area,15)` |
| `GTE(a,b)` | Greater than or equal | `GTE(Area%,98)` |
| `LT(a,b)` | Less than | `LT(Amount,150)` |
| `LTE(a,b)` | Less than or equal | `LTE(Detector Noise,0.000010)` |
| `RANGE(value,low,high)` | Demonstrated as `value > low` and `value <= high` | `RANGE(%Area,15,20)` |

(Slides 34-35, 86-87, 131-132)

The deck demonstrates `&` as Boolean AND and `|` as Boolean OR. A comma separates function arguments or `ENUM` alternatives. Examples: (Slides 133-140)

```text
GT(ThBr[Area],20000)&GT(Caf[Area],400000)
GT(ThBr[Area],20000)|GT(Caf[Area],400000)
```

The examples imply ordinary 0/1 Boolean results. A translation table can display those positions as False/True, Pass/Fail, or another pair. If `Use As = Position`, later formulas receive the numeric position even though the user sees the translated label. (Slides 34-35, 137-140, 155-164)

## `ENUM`

General form demonstrated by the deck:

```text
ENUM(BooleanExpression0,BooleanExpression1,...)
```

The returned position is translated using rows beginning at `0`. The deck says:

- `ENUM` must start a calculated Enumerated formula.
- A formula may contain only one `ENUM`.
- The first-level arguments must be Boolean expressions/operators.
- Expressions should be mutually exclusive.
- Evaluation proceeds left to right and stops at the first true expression.

(Slides 40-43, 142-146)

Example with three outcomes:

```text
ENUM(LT(CCompRef1[Area],CConst1),RANGE(CCompRef1[Area],CConst1,CConst2),GT(CCompRef1[Area],CConst2))
```

Translation table: `0 = Low`, `1 = Good`, `2 = High`. Because the guide defines `RANGE(x,a,b)` as `x > a` and `x <= b`, the three branches cover values below `CConst1`, above `CConst1` through `CConst2`, and above `CConst2`; the exact value `CConst1` is not covered by any branch. That gap is an arithmetic reading of the source syntax, not an Empower execution. (Slides 143-145)

The deck suggests copying a long formula to Word or WordPad to locate missing parentheses, then pasting it back. That is historical source advice; future tooling should instead validate the expression structure directly. (Slide 146)

## Specific and generic references

### Named component/peak

```text
PeakName[Field]
acetone[Area]
Area/acetone[Area]
```

The named component must match the Component table’s spelling and capitalization. A named reference is specific to methods containing that component name. (Slides 20-22, 108-111)

### `CCompRef1` through `CCompRef3`

The guide describes `CCompRef` as a component reference assigned in the Processing Method Component table. It lists three available references. These are used for calculations tied to selected components, including interpeak ratios. Example: (Slides 112-114, 137-140, 150-153)

```text
(CCompRef1[Area]*CConst1)+CCompRef2[Area]
```

Processing-method assignments in the example are `CCompRef1 = preCalci`, `CCompRef2 = Calci`, `CConst1 = 1.92`.

The area-threshold example shows a behavior distinction: a Peak formula using `CCompRef1[Area]` calculated only for the referenced Caffeine peak and did not populate unknown peaks. The guide changes the reference to `CCalRef1[Area]` to make the formula calculate across peaks. Treat that behavior as version/context-specific guide evidence until reproduced. (Slides 150-154)

### `CCalRef1`

The guide describes `CCalRef` as a calibration reference selected in the processing method and applied to all components. Examples: (Slides 115-120, 150-154)

```text
Retention Time/CCalRef1[Retention Time]
GT(Area,CCalRef1[Area]*0.005)
```

### `CConst1` through `CConst7`

The guide says seven constants are available through the Processing Method Component table. They let one generic formula receive method-specific limits or factors. Examples use `CConst1`, `CConst2`, and `CConst3`. (Slides 112-114, 137-145)

## Translation-table `Use As` modes

The guide distinguishes four behaviors for Boolean/Enumerated translations. (Slides 155-175)

| Mode | Behavior stated or demonstrated |
|---|---|
| Position | Later calculations use the zero-based translation row position while displays show the translated label. Example: false/true remain `0`/`1` for multiplication. |
| Text | Later comparisons use the translated text. The deck illustrates a comparison such as `EQ(ThisCustom,"too small")` inside another formula. |
| Value | The translation is interpreted as a numeric value for later formulas. |
| Field | A translation entry containing `FieldName (fc)` returns that field’s value; other entries remain text. The deck explicitly shows a space before `(fc)`. |

`Use As = Position` is central to the area-threshold workflow:

```text
Area_Limit = GT(Area,CCalRef1[Area]*0.005)
Area_GT_05 = Area*Area_Limit
```

The first field can display `<0.5%` or `>0.5%`, while the second receives `0` or `1`. (Slides 147-169)

`Use As = Field` examples:

```text
LODAcceptance = GTE([s/n],10)
```

Translation `0 = Below LOD`; translation `1 = [s/n] (fc)`. The result displays text when below the limit and the actual built-in suitability S/N value when accepted. (Slides 170-172)

```text
ReactionMonitor = ENUM(LT(Amount,150),RANGE(Amount,150,152),GT(Amount,152))
```

The deck’s outcomes are text below the range, `Amount (fc)` in range, and text above it. Given the deck’s own `RANGE` definition, an Amount exactly equal to `150` is uncovered; confirm the intended boundary before reuse. (Slides 173-175)

## `ROUND`

Syntax in the deck:

```text
ROUND(field,#)
```

Visible examples: (Slides 176-179)

```text
ROUND(25.678,0)       = 26
ROUND(256575.36,3)    = 257000
ROUND(25.657536,-3)   = 25.658
```

The examples demonstrate that `0` rounds to a whole number, a positive value rounds positions to the left of the decimal, and a negative value rounds decimal places to the right. The speaker notes conflict with the second visible result by giving `267000`; the visible result `257000` matches ordinary rounding. The notes also give `ROUND(123.456789,-3) = 123.457`, which is compatible with the demonstrated negative-precision behavior but uses a different input.

Field example:

```text
Plate_Count = ROUND(EP Plate Count,2)
```

The deck describes `EP Plate Count` as a built-in system-suitability field and says this rounds to whole hundreds. (Slides 177-178)

Boolean/summary example from slide 179:

```text
SUM(GTE(%Area,16)*%Area)
SUM(GTE(ROUND(%Area,0),16)*%Area)
```

For the displayed data, those formulas produce `73.13` and `88.875` respectively because `%Area = 15.74` fails the unrounded comparison but rounds to `16` and passes the second one. This is a guide screenshot result, not a result reproduced in this project.

## `REPLACE`

The deck presents `REPLACE` as a way to substitute a value for an invalid or blank result, especially to replace a missing value with zero before a nested calculation or LIMS export. Example: (Slides 180-183)

```text
REPLACE(Amount,0)
```

The sequence names the target both `Amount_Final` and `Final_Amount`; use the configured name rather than copying either spelling blindly. The wizard example selects Missing Peak and Unknowns Only. The deck says the replacement turns an invalid value into a valid calculated value.

## Special numeric codes

The deck lists these numeric codes and display meanings: (Slides 184-186)

| Code | Display meaning in guide |
|---:|---|
| `-50000` | blank/null |
| `-60000` | ND |
| `-60001` | N.D. |
| `-60002` | Not Detected |
| `-60003` | N/D |
| `-60004` | NA |
| `-60005` | Not Found |
| `-60006` | Below Detection Limit |
| `-60007` | BDL |
| `-60008` | Below Peak Quantitation Limit |
| `-60009` | BPQL |

Guide example for LOD `0.2` and LOQ `0.6`:

```text
GT(Amount,0.6)*Amount + LT(Amount,0.2)*-60006 + RANGE(Amount,0.2,0.6)*-60008
```

The guide says no translation table is required. Its prose describes Amount above LOQ as numeric, below LOD as Below Detection Limit, and between LOD and LOQ as Below Peak Quantitation Limit. Under the deck’s demonstrated comparison semantics, `Amount = 0.2` makes all three terms false and returns zero, while `Amount = 0.6` falls in `RANGE`. This boundary issue is an arithmetic check of the source formula and must be resolved before reuse.

## Reuse checks

Before generating a formula from this reference:

1. Confirm exact field/component names and capitalization.
2. Confirm the target field type and Sample/Peak applicability.
3. Check every interval boundary explicitly, especially because `RANGE` is shown as lower-exclusive and upper-inclusive.
4. Confirm translation `Use As` behavior when a later formula references a Boolean/Enumerated field.
5. Confirm Processing Method assignments for every `CCompRef`, `CCalRef`, and `CConst`.
6. Separate a guide screenshot result from an actual test in the user’s Empower version.
