# Lesson 001: Assay_Single_Area and Dilution_Factor

Revision: 5, updated 2026-09-23 after Amount / Dilution_Factor / assay relationship training.
Sources: [supplied conversation](source-conversation.txt), user formula dated Aug 19 and subsequent user answers labeled Today; [workbook transcript](source-custom-field-f1.md), supplied 2026-09-14; Amount site convention chat 2026-09-23 ([amount-empower.md](amount-empower.md)). The conversation transcript does not establish the calendar date of Today.
Status: user-provided formulas and partially confirmed conventions. The workbook adds configuration evidence and related fields, but no Empower execution result, version/build, or complete calculation settings. The previous assistant's word "validated" is not validation evidence. Amount relationship section is user-confirmed site convention, not Empower-tested.

## Assay_Single_Area

Exact user-provided formula:

```text
Amount*Dilution_Factor*Standard_Potency/100*(100-LOD_Std-Water_Std-OVI_Std)/(100-LOD_Spl-Water_Spl-OVI_Spl)*MW1/MW2/Label_Claim*100
```

Intended use: assay with potency, preparation dilution, standard/sample corrections, molecular-weight ratio and label claim, inferred from name and formula. Confirm applicability per method before reuse.

Field scope, data type, precision, configured units, calculation settings, sample/peak selections, Empower version/build and processing sequence: unknown. The earlier assistant's Peak/Real/Intersample settings described a different formula and must not be transferred to this one.

| Dependency | Recorded meaning/convention | Evidence and unresolved detail |
|---|---|---|
| Amount | Built-in Peak quantitation used as input | Site convention taught 2026-09-23: see [amount-empower.md](amount-empower.md). Built-in Dilution and Purity(%) left default; Value = standard weight; Sample weight = Sample/Keyboard. Not Empower-tested here. |
| Dilution_Factor | Separate preparation factor; SD is standard, TD is sample/test | Formula user-confirmed in follow-up; SD = Component (Amount table), TD = Sample (sample set); step counts not fixed. Detailed flask-vs-aliquot mapping still open. |
| Standard_Potency | Percent, e.g. 99.8; Component/Keyboard in Amount table | User-confirmed; used instead of built-in Purity(%). Workbook default often 1. |
| LOD_Std, Water_Std, OVI_Std | Percentage values; 0 when not applicable | User-confirmed convention; user also wrote waters_std, so verify actual field spelling |
| LOD_Spl, Water_Spl, OVI_Spl | Percentage values | User-confirmed percentage convention; zero defaults were only an unanswered assistant assumption |
| MW1, MW2 | Molecular weights; 1 when correction not applicable | User-confirmed; which material belongs in numerator versus denominator and units remain unknown |
| Label_Claim | Divisor; 1 when not applicable | User-confirmed local default; physical meaning and unit basis need confirmation |

Dependency order: establish input fields and built-in Amount conditions, calculate Dilution_Factor using its confirmed preparation inputs, then calculate Assay_Single_Area. Actual Empower evaluation settings remain unknown.

Mathematical interpretation: multiply Amount by the dilution factor, potency fraction, standard-to-sample correction ratio and MW1/MW2, divide by Label_Claim, and multiply by 100. This describes the expression, not proof of its suitability for a method.

### Relationship to Empower Amount (added 2026-09-23)

Decode chain for CF Studio:

```text
Amount  ≈  (Area / Standard_Average_Area)
        × (Standard_Weight / Standard_Dilution)
        × (Sample_Dilution / Sample_Weight)
        × (Purity(%) / 100)
```

On this site: built-in Dilution and Purity(%) stay **default**; standard weight is **Value**; sample weight is Sample/Keyboard. Real prep dilution is **`Dilution_Factor`** from SD/TD. Real potency is **`Standard_Potency`**, not built-in Purity(%).

So `Assay_Single_Area` means: **start from Amount, then apply Dilution_Factor and Standard_Potency (and moisture/MW/label claim)**. Do not rebuild Area/std-area × weights inside the assay field when Amount already supplies that path. Full Amount lesson: [amount-empower.md](amount-empower.md).

Grouped reading of the conversation assay formula:

```text
Amount
× Dilution_Factor
× Standard_Potency/100
× (100−LOD_Std−Water_Std−OVI_Std)/(100−LOD_Spl−Water_Spl−OVI_Spl)
× MW1/MW2
/ Label_Claim
× 100
```

Mathematical checks to establish: MW2 and Label_Claim must not be zero; the sample correction denominator must not be zero. Confirm acceptable correction ranges and whether supplied potency already incorporates any listed standard corrections. Actual blank and invalid-input behavior in Empower remains unknown. Do not silently replace blanks with defaults.

### Workbook assay path added 2026-09-14

The workbook defines `Assay_Single_Area` as a Peak/Real calculated field with width 12, precision 3, minimum -100,000,000, maximum 100,000,000, and Required disabled:

```text
mg_Per_Unit_Single_Area/Label_Claim*100
```

Its dependency is another Peak/Real calculated field:

```text
mg_Per_Unit_Single_Area = Amount*Dilution_Factor*Standard_Potency/100*(100-LOD_Std-Water_Std-OVI_Std)/(100-LOD_Spl-Water_Spl-OVI_Spl)*Average_Weight*Dissolution_Media_Volume/No_Of_Units*Dose_In_ml*Weight_Per_mL*MW1/MW2
```

Together, this workbook path includes `Average_Weight`, `Dissolution_Media_Volume`, `No_Of_Units`, `Dose_In_ml`, and `Weight_Per_mL`, which are absent from the earlier conversation formula. Do not silently treat the two paths as equivalent. The workbook may represent a more specific dosage-form calculation; applicability and units require user confirmation.

## Dilution_Factor

Original imported user text, preserved exactly as historical evidence; superseded by the confirmed formula below:

```text
1/SD1SD2/SD3SD4/SD5SD6/SD7TD1/1*TD3/TD2
```

Current formula, user-confirmed in the 2026-09-12 follow-up:

```text
1/SD1*SD2/SD3*SD4/SD5*SD6/SD7*TD1/1*TD3/TD2
```

This matches the previous assistant's interpretation, which had been unconfirmed at import. The user's follow-up now establishes the operators; do not ask for confirmation of those operators again. Markdown escapes before underscores and the final multiplication sign in the follow-up were removed as formatting escapes, not formula edits. This is user confirmation, not an observed Empower execution test.

Grouped mathematical reading of the confirmed expression (explanation only; retain the exact formula above):

```text
(1/SD1)*(SD2/SD3)*(SD4/SD5)*(SD6/SD7)*(TD1/1)*(TD3/TD2)
```

Denominator inputs SD1, SD3, SD5, SD7 and TD2 must be nonzero for the arithmetic to be defined. Actual Empower handling of missing or zero values remains unknown.

The user's next lesson stated: "SD1 - SD7 is the Stdandrd dilution like 50 ml, 100ml like that..and the TD1-TD7 is the sample dilution".

- User-confirmed: SD1-SD7 represent standard preparation dilution volumes, with examples of 50 mL and 100 mL.
- User-confirmed: TD1-TD7 represent sample preparation dilution fields. Using mL for these too is inferred from context, pending a worked example or explicit confirmation.
- Formula coverage in the 2026-09-12 confirmed expression: SD1-SD7 and TD1-TD3 only. TD4-TD7 were not referenced in that lesson.
- User-confirmed 2026-09-23: SD fields are **Component** (Amount table); TD fields are **Sample** (sample set). Example counts (SD1–SD5, TD1–TD3) are **not** a fixed limit; more steps may be used.
- Still unknown: the exact mapping of each field to a final flask volume or transferred aliquot, unused-input defaults beyond workbook default 1, and numeric entry format details. The operator positions alone are not confirmation of the physical preparation steps.

### Extended workbook variant added 2026-09-14

`Custom_Field_F1.xlsx` supplies this Peak/Real calculated configuration for `Dilution_Factor`: width 12, precision 5, minimum -1,000,000, maximum 1,000,000, Required disabled.

```text
1/SD1*SD2/SD3*SD4/SD5*SD6/SD7*TD1/1*TD3/TD2*TD5/TD4*TD7/TD6
```

This is the earlier confirmed expression extended with `*TD5/TD4*TD7/TD6`. It is user-provided workbook evidence, but the user has not yet explicitly said that it supersedes the shorter formula. Preserve both versions until that is confirmed.

The workbook establishes these settings as source evidence:

- `SD1`-`SD7`: Component/Real/Keyboard, precision 2, default 1, Required disabled.
- `TD1`-`TD7`: Sample/Real/Keyboard, precision 1, default 1, Required enabled.
- Denominators in the extended formula are SD1, SD3, SD5, SD7, TD2, TD4, and TD6.

The physical meaning of each alternating numerator/denominator remains unresolved.

## Verification and retrieval examples

No complete numerical example for this exact field has been supplied. The earlier 97.80% example belongs to a different assistant-generated formula and is not test evidence for this field.

Suggested natural-language retrieval phrases, authored during library setup:

- Calculate assay using Amount, potency, LOD/water/OVI and molecular-weight corrections.
- Explain our Assay_Single_Area field.
- Calculate the standard and sample dilution factor using SD and TD inputs.

Expected response to the third request: retrieve the current user-confirmed formula, explain its groups, and request missing input meanings or settings when needed for the requested calculation. Do not represent the expression as Empower-tested or reuse it for a different preparation scheme without establishing applicability.

## Earlier assistant material excluded from confirmed knowledge

The built-in Amount equations, STD.1.SAME example, field settings, Amount/Label_Claim alternative and claimed Waters citations in the transcript remain unverified historical assistant content. They can be researched later when needed; they are not established rules for this library.

## Revision history

- 2026-09-12: Initial transcription, source attribution and unresolved questions recorded. No formula repair or Empower execution performed.
- 2026-09-12, revision 2: User supplied `1/SD1*SD2/SD3*SD4/SD5*SD6/SD7*TD1/1*TD3/TD2` in a direct follow-up. Promoted the previously proposed expression to user-confirmed; retained the original ambiguous text as superseded evidence. Added grouped arithmetic explanation and denominator checks. No Empower execution performed.
- 2026-09-12, revision 3: Recorded the user's SD1-SD7 standard-volume examples and TD1-TD7 sample-field definition. Distinguished confirmed SD units from inferred TD units and noted that TD4-TD7 are absent from the current formula. Formula unchanged.
- 2026-09-14, revision 4: Imported the workbook configuration. Added the workbook’s helper-based Assay_Single_Area path and extended Dilution_Factor variant through TD7. Preserved both earlier and workbook formulas because the workbook does not explicitly state that the new variants supersede the prior lesson. No Empower execution was performed.
- 2026-09-23, revision 5: Linked Amount site convention (Dilution/Purity% default, Value = std weight, Sample weight Sample/Keyboard, Standard_Potency Component). Documented assay as Amount × Dilution_Factor × Standard_Potency × …. Confirmed SD Component / TD Sample and non-fixed step counts. No Empower execution was performed.
