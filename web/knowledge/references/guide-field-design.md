# Guide reference: field design and creation

All statements in this file are **Waters training-guide evidence** from the December 2018 Empower 3 deck. They have not been run in the user’s Empower system. Slide numbers refer to the original deck and the [raw transcript](source-guide-slide-transcript.md).

## What a custom field is

The guide defines a field as a column of information in a table and a custom field as a user-defined field or column in an Empower project’s underlying database. A custom field may hold a descriptor or a calculation. The stated purposes are to store, report, sort, and filter information important to the laboratory, and to automate calculations that might otherwise be done externally. The guide compares learning custom fields to learning a programming language: there can be multiple solutions, and testing is part of development. (Slides 3-5, 219)

Custom fields are created for a project. The guide names `Alter Any Project` and `Create Custom Fields` as relevant privileges and lists specific privileges for Create, Alter, Delete, Lock, and Unlock Custom Fields. Fields can be added to project views, view filters, and reports. (Slide 6)

The guide’s development workflow is:

1. Plan the field on paper.
2. Create it in a test project.
3. verify or validate it for the laboratory’s intended use.
4. Copy the verified field to a production project.

It cautions against copying every custom field into every project: all applicable custom fields calculate, and a field may raise errors when a formula dependency was not copied. This is source advice, not evidence that a particular field has been validated. (Slide 7)

## Default-project fields

The deck lists seven default custom fields, all of Sample type:

1. Column Name
2. Column Serial Number
3. Dilution
4. Level Values
5. Sample Matrix
6. Sample Name
7. Sample Weight

The guide calls these default custom fields and says they can be edited. It specifically mentions changing field width and editing the defaults of an Enumerated field. (Slide 8)

## Field types

### Sample

A Sample field describes a sample or vial and can vary from sample to sample. The guide lists Integer, Real, Text, Date, Boolean, and Enumerated data types. Example uses include lot number, analyst, patient ID, dissolution medium, storage interval and condition, plant number, manufacture date, and other sample descriptors. Entry locations shown are the Run Samples sample table and Alter Sample. Display locations include sample-set editor tables/tabs, Review, project views, and reports. (Slides 12-15)

### Sample Set

A Sample Set field has one value for the entire sample set. It supports Integer, Real, Text, Date, Boolean, and Enumerated data. Examples include protocol or SOP number, batch number, mobile-phase identifier, and other shared run information. Entry locations shown are Sample Set Information in Run Samples, Alter Sample, and the Sample Set Method. Display locations include project views and reports. (Slides 16-18)

### Peak

A Peak field is associated with individual peaks. The guide describes both calculations within the current peak, such as using `Area` or `Amount`, and calculations between named peaks, such as `Peak Name A[Area]/Peak Name B[Area]`. It lists Integer, Real, Text, Date, Boolean, and Enumerated data types. A named reference uses square brackets, for example `acetone[Area]`; the example `Area/acetone[Area]` divides each current peak’s area by acetone’s area. Component-name spelling and capitalization must match the component table. Results appear in the Peaks table and reports. (Slides 19-22)

### Result

A Result field produces one value for a chromatogram/result. The guide uses summing selected impurity areas as an example and lists Integer, Real, Text, Date, Boolean, and Enumerated data. Result fields can appear in chromatogram results, project Results/Peaks/sign-off views, and reports. (Slides 23-25)

### Component

A Component field holds analyte-specific information entered in the Component Editor through Run Samples, Alter Sample, or a Sample Set Method. The guide says Component custom fields support Real data only. Examples include label claim and molecular weight. They appear in the Component Editor and reports. (Slides 26-28)

### Distribution

A Distribution field is a GPC/V slice-level calculation. The guide lists Real, Boolean, and Enumerated data and gives slice area, log molecular weight, adjusted retention time, and replacement of standard area/MW inputs in distribution moments as uses. It says this field type is available when the GPC option is installed. Display locations include the Distribution tab, Curves/MW Distribution views, and reports. The deck does not develop this type further. (Slides 29-30)

## Data types

| Type | Guide description or use |
|---|---|
| Integer | Whole-number numeric value. |
| Real | Floating-point or fractional numeric value. |
| Text | Alphanumeric value. |
| Date | Date supplied by a user or external source. |
| Boolean | Formula result translated from numeric false/true values, demonstrated as `0` and `1`. |
| Enumerated | A controlled list for entry, or a calculated set of Boolean conditions translated to labels. |

(Slides 32-43)

For a Boolean calculated field, the guide uses the general form `Function(Field,#)`. Example: `Pct_Area_Criteria = GTE(Area%,98)`. It translates `0` and `1` into labels such as No/Yes, Pass/Fail, or custom labels. The slide text says “greater than 98,” although the chosen function is `GTE`, which the same deck defines as greater than or equal to. (Slides 34-35, 132)

For an Enumerated entry field, the guide demonstrates a dropdown such as `Column_Type` or `USP_Column_Type`. Suggested uses include columns, method conditions, mobile phase, pH, product codes, sample descriptions, matrix, storage, and packing. (Slides 37-39)

For a calculated Enumerated field, the guide uses Boolean expressions inside `ENUM(...)`, with translation positions beginning at zero. Example:

```text
ENUM(LTE(% Deviation,1),RANGE(% Deviation,1,3),GT(% Deviation,3))
```

The translations are `0 = Excellent`, `1 = Acceptable`, `2 = Not Acceptable`. The deck says `ENUM` must begin an Enumerated formula, only one `ENUM` may occur in the formula, and only Boolean functions/operators may occur in its first-level parentheses. It also says the expressions should be mutually exclusive because evaluation stops at the first true expression. (Slides 40-43, 142-146)

## Data source and entry behavior

The wizard offers these sources:

- **Keyboard:** manual entry.
- **External:** entry through Toolkit/LIMS or another external integration.
- **Calculated:** Empower computes a formula.

The training narrative generally associates Keyboard with Sample, Sample Set, and Component descriptors, and Calculated with Peak and Result formulas. This is the guide’s pattern, not a universal prohibition on other combinations unless the Empower UI disables them. (Slides 45-46)

`Data entry is required` blocks acquisition, loading, or import until a value is supplied. When entry is not required, a Default Value can be supplied. For Boolean and Enumerated fields, the default is presented through the translation table. (Slides 47-48)

### Calculated Sample Type choices

- All
- Standards Only
- Unknowns Only
- Controls Only
- Standards & Unknowns
- Standards & Controls
- Controls & Unknowns

The guide says a referenced result’s sample must match the selected type. (Slides 49-50)

### Calculated Peak Type choices

- All
- Founds Only
- Unknowns Only
- Groups Only
- Founds and Groups
- Founds and Unknowns
- Unknowns and Groups

The guide says a referenced peak must match the selected type. (Slides 49, 51)

## Formula-entry rules described by the guide

- Select fields and operators from the provided lists where possible; the deck discourages typing names because exact spelling matters.
- Evaluation follows mathematical precedence: exponent, multiplication, division, addition, subtraction. Parentheses can change grouping.
- Parentheses must match. The deck says arbitrary nesting is possible but recommends no more than eight levels.
- Functions use parentheses, for example `ABS(...)` or `GTE(...)`.
- Named peaks/components and processing-method reference fields use square brackets, for example `acetone[Area]`, `CCompRef1[Area]`, or `CCalRef1[Area]`.
- Display width and precision must be sufficient for the result.

(Slides 20, 52-53)

## Creation path shown in the guide

1. Open Configuration Manager.
2. Open Projects.
3. Select the project.
4. Open Project Properties.
5. Open the Custom Fields tab.
6. Use New to launch the Custom Field Wizard.

The Custom Fields tab also shows Edit, Delete, Lock/Unlock, Save to Project, OK, Cancel, and Help. The screenshots are historical Empower 3 UI evidence and may not match another build. (Slides 55-58)

## Design checklist extracted from the guide

Before creating a field, determine:

- What must the formula calculate?
- Which fields are required?
- Are the dependencies built in or separately created custom fields?
- Does the calculation use named peaks/components?
- Which sample types and products use it?
- Which field type should store the result?
- Which output data type is required?
- Where will users enter any manual inputs?
- Where should the calculated result appear?
- What display width and precision are needed?

(Slides 121-125)

For this project, add the evidence questions required by `SKILL.md`: actual Empower version/build, exact field names, units, missing-value behavior, processing sequence, and at least one observed input/output result before assigning Empower-tested status.
