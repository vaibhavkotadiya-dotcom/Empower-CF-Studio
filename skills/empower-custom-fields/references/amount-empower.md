# Lesson: How Empower Amount is calculated (site convention)

Lesson ID: amount-empower  
Revision: 1, dated 2026-09-23  
Sources: user training in project chat (2026-09-23)  
Status: user-provided / user-confirmed site convention. **Not Empower-tested** in this project (no version/build, numerical inputs, or observed Amount output recorded).

Related records: [assay-single-area.md](assay-single-area.md), [percentage-known-impurity.md](percentage-known-impurity.md).

## Purpose

Explain how built-in Peak **Amount** is formed in Empower, how this site enters weights and dilutions, and why custom fields such as `Dilution_Factor` and `Standard_Potency` sit **on top of** Amount rather than replacing it.

## Example natural-language requests

- How does Empower calculate Amount?
- Why do we multiply Assay by Dilution_Factor and Standard_Potency?
- Should I rebuild Area/std average area × std weight/sample weight, or use Amount?

## User-taught Amount equation

Exact user statement (preserve as taught):

```text
Amount = (Area / Standard_Average_Area)
       × (Standard's weight / Standard's Dilution)
       × (Sample's Dilution / Sample's weight)
       × (Potency / 100)
```

Where:

| Term | Site meaning (user-confirmed 2026-09-23) |
|---|---|
| Area | Peak area of the current component in the current chromatogram |
| Standard_Average_Area | Average (or calibrated) standard response Empower uses for that component |
| Standard's weight | Entered in Empower **Value** on the standard line |
| Sample's weight | **Sample** type, **Keyboard** field: weight entered in the sample set table |
| Standard's Dilution / Sample's Dilution | Built-in **Dilution** fields — left at **default** on this site |
| Potency / Purity(%) | Empower built-in purity/potency path — left at **default** intentionally |

### Site practice that changes how Amount is used downstream

1. **Built-in Dilution** (standard and sample) is left default. Real preparation dilutions are **not** driven through that built-in field.
2. **Value** holds the **standard weight**. Dilution of standard and sample is **not** entered or calculated from Value.
3. **Sample weight** is a Sample/Keyboard entry in the sample set (not taken from Value).
4. Built-in **Purity(%)** (user’s “P”) is kept at default on purpose.
5. Real standard potency for custom calculations is **`Standard_Potency`**: Component type, Keyboard, entered in the **Amount table** of the sample set (workbook default often 1).

Therefore Amount on this site is mainly the chromatogram + weight relationship under default Dilution and default Purity(%). Preparation dilution and real potency are applied later in custom fields.

## SD / TD preparation inputs (not inside Amount)

| Fields | Entered where | Field type | Role |
|---|---|---|---|
| SD1, SD2, … | Amount / component table | **Component** | Standard preparation dilution steps (volumes such as 50 mL, 100 mL) |
| TD1, TD2, … | Sample set table | **Sample** | Sample preparation dilution steps |
| Sample weight | Sample set table | **Sample** / Keyboard | Sample weight used with Amount path |

**Count is not fixed:** examples such as SD1–SD5 or TD1–TD3 are references only. Methods may use more steps (workbook has SD1–SD7 and TD1–TD7). Unused steps typically stay at default **1** so they do not change the product.

These SD/TD values feed custom **`Dilution_Factor`** (see [assay-single-area.md](assay-single-area.md)), not the built-in Dilution inside Amount.

## Design rule for CF Studio and future formulas (user-confirmed)

When a requirement looks like:

```text
Area / Standard_Average_Area × Standard_Weight / Sample_Weight …
```

**Prefer Peak `Amount`**, then multiply or adjust with custom fields (`Dilution_Factor`, `Standard_Potency`, label claim, RRF, etc.). Do **not** rebuild the full Amount path from Area and weights unless the method truly needs a different external-standard area ratio (for example impurity reference standard Area on `S1` when Amount is not calibrated that way).

Reasons:

- Amount is a **Peak** field: one value per peak from that peak’s Area and that component’s calibration.
- Amount already embeds Area vs standard average area and the weight/default-dilution relationship Empower applies.
- This site’s assay and amount-based impurity customs are written as **Amount × Dilution_Factor × …**.

## Relationship chain (Amount → assay)

```text
Empower Amount
  (Area/StdAvgArea × StdWeight/StdDil × SplDil/SplWeight × Purity%/100;
   Dilution & Purity% left default; StdWeight via Value; SplWeight via Sample field)
        │
        ▼  × Dilution_Factor     ← real SD/TD preparation
        ▼  × Standard_Potency/100  ← real potency (not built-in Purity%)
        ▼  × other method factors (LOD/Water/OVI, MW, Label_Claim, …)
  Assay_Single_Area (and similar amount-based fields)
```

Full assay and Dilution_Factor formulas: [assay-single-area.md](assay-single-area.md).  
Known impurity (amount-based vs external impurity std): [percentage-known-impurity.md](percentage-known-impurity.md).

## Evidence status

| Claim | Status |
|---|---|
| Amount equation as written by the user | user-provided |
| Dilution left default; Value = std weight; Sample weight Sample/Keyboard | user-confirmed |
| Purity(%) left default; use Component `Standard_Potency` instead | user-confirmed |
| SD Component / TD Sample; counts not fixed | user-confirmed |
| Prefer Amount then modify for Area/std-area × weight style needs | user-confirmed |
| Exact Empower version behavior of Standard_Average_Area / built-in Dilution math | unknown / not Empower-tested here |
| Numerical Amount worked example | open |

## Open questions

1. Exact built-in field name and default for Sample weight vs any custom Sample weight field spelling at the site.
2. Whether unused SD/TD defaults are always 1 in every project method.
3. One numerical Amount example (inputs + observed Amount) for Empower-tested status.

## Revision history

- 2026-09-23, revision 1: Initial lesson from user Amount training and follow-up clarifications. No Empower execution recorded.
