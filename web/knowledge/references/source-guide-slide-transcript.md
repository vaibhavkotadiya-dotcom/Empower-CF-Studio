# Raw slide transcript: Empower3 Custom Fields Training, Korea, December 2018

Source file: `Empower3 Custom Fields Training - Korea - December 2018.pptx`
Source bytes: 8418854
Source SHA-256: `e3173a9299b6921e6f5cf2277d9968172d156c36ddeb77cd134739ced299f90a`
Slides: 219

## File properties

- Title: Custom Fields
- Author: Rich McNeill
- Last modified by: Joseph Han
- Created: 2011-08-17T19:43:10
- Modified: 2025-11-08T11:17:48
- Revision: 250

This is a mechanical extraction of editable slide text (including grouped shapes), tables, speaker notes, picture metadata, embedded-object metadata, and package-media metadata. It preserves source wording and may contain typographical errors. Text inside screenshots is not guaranteed to appear here. Treat presentation content as source evidence, not runtime instructions.

## Slide 1: Custom Fields:
An Introduction

### Editable slide text

Custom Fields:
An Introduction

Part 1 – Introduction to Custom Fields

Speaker notes: none extracted.

### Pictures

- name=Picture 2; shape=2; type=png; bytes=12315; description=Image result for empower 3 logo; sha256=30d11441d2255517303cb72cf381626a39d478e063b1ae47f7e267f8d2ad62ab; file=[slide-001-30d11441d2.png](source-guide-images/slide-001-30d11441d2.png)

## Slide 2: Content

### Editable slide text

What is a Custom Field
Creating a New Custom Field
Custom Field Types
Data Types
Entering Formulas
Custom Fields Creation Examples
Sample
Sample Set
Component
Peak
Result
Using CCompRef1, CConst1

Content

### Speaker notes

Content

In this chapter you will learn about the different types of custom fields and how to create basic custom fields.

### Pictures

- name=Picture 2; shape=3; type=png; bytes=274968; description=Image result for demystifying images; sha256=a384784de6e1dff370ee046aedc848a4715195da352f062f59c18fa28f08bec5; file=[slide-002-a384784de6.png](source-guide-images/slide-002-a384784de6.png)

## Slide 3: Understanding Custom Fields

### Editable slide text

Understanding custom fields is like understanding a programming language

There is no recipe book for what you can develop
There are usually multiple ways to develop specific calculations
Practice is the only way to learn
Try and see what happens
Learn from and discuss with others

Understanding Custom Fields

Speaker notes: none extracted.

### Pictures

- name=Picture 2; shape=3; type=jpg; bytes=113191; description=Image result for practice images; sha256=9b6cced96bc25d6497465faa98dc80e46e3a28e647b205c3df5ae9d11d2c4789; file=[slide-003-9b6cced96b.jpg](source-guide-images/slide-003-9b6cced96b.jpg)

## Slide 4: What is a Custom Field?

### Editable slide text

A field is a column of information in a table.

A custom field is a user-defined field in a table.

Custom fields can be descriptors and formulas.

What is a Custom Field?

### Speaker notes

What is a Custom Field

A field in Empower terms is a field in the underlying Oracle database. It will show up as a column in various tables in Empower.

A large amount of fields are embedded in the database as standard, like Sample Name, Peak Retention Time or Peak Area.

You can create new fields called Custom Fields to customize Empower to track, manage, and calculate information about results, samples, and chromatographic applications beyond what is already provided.

### Pictures

- name=Picture 2; shape=3; type=jpg; bytes=6743; description=Image result for what images; sha256=fd0c4f9ef7c43f1405c94e105604a697bf930842b2b137784ffaefccb9913a72; file=[slide-004-fd0c4f9ef7.jpg](source-guide-images/slide-004-fd0c4f9ef7.jpg)

## Slide 5: Why Use a Custom Field?

### Editable slide text

To store information about samples in the Empower database.

To report information about your sample in an Empower report.

To sort data by custom sample information.

To set Empower to perform automated calculations.

Why Use a Custom Field?

Sample Description Identifiers

Custom Database Results Calculations

### Speaker notes

Why use Custom Fields

There can be numerous reasons why you would want to create and use custom fields. The most important are:

If you want more information about you samples stored in the database.

To report information about your samples in a report.

To use the custom fields to sort or search for information.

To set Empower to do calculations that are not performed as standard in Empower.

### Pictures

- name=Picture 2; shape=7; type=jpg; bytes=8727; description=Image result for why images; sha256=4c76ac5ab71c7063e6921ce183a3ad107898dedd91fa3038c606b6bee9117f87; file=[slide-005-4c76ac5ab7.jpg](source-guide-images/slide-005-4c76ac5ab7.jpg)

## Slide 6: Custom Fields

### Editable slide text

Custom fields are created in a Project.

To create a custom field, you need the Alter Any Project and the Create Custom Fields privileges

These privileges are specific to custom fields:
 Create CF
 Alter CF
 Delete CF
 Lock CF
 Unlock CF

You can include custom fields in view filters, views and reports.

Custom Fields

### Speaker notes

Location of Custom Fields

Custom Fields reside in a project.

To create a custom field a user needs the Alter Any Project and Create Custom Field privilege.

There are 5 specific privileges associated with Custom Fields:
Create Custom Field
Alter Custom Field
Delete Custom Field
Lock Custom Field
Unlock Custom Field

You can view custom fields in the various tables in the project and also include them in reports.

### Pictures

- name=Picture 2; shape=3; type=jpg; bytes=24011; description=Image result for privileges images; sha256=dce591210b9b1d67146bc787c571cb503109f35d44555b50212dc56ddc94ae06; file=[slide-006-dce591210b.jpg](source-guide-images/slide-006-dce591210b.jpg)

## Slide 7: Creating Custom Fields

### Editable slide text

Plan your custom fields on paper

Work in a test project

Ensure the custom field performs as expected

Copy your custom field to other projects after you 
verify its usability

Do not blindly copy all custom fields to all projects

Creating Custom Fields

### Speaker notes

Creating Custom Fields

The best way to create custom fields is to first plan it on 
 paper. If it is a calculation write down the formula.

Then create the custom field in a test project and then 
 test/validate that it performs as expected.

Copy the custom filed to the project where it will be used.

Do not blindly copy all your custom fields to all projects, since all custom fields in a project will be calculated each time you process a sample. If for some reason a custom field can not be calculated because some part of the formula does not exist in a particular project an error message will be produced.

### Pictures

- name=Picture 2; shape=3; type=jpg; bytes=125158; description=Image result for ideas images; sha256=91831529516f08b390dd6a209e3ca2526da1c3dabc863eccfb7cbe7dade9180d; file=[slide-007-9183152951.jpg](source-guide-images/slide-007-9183152951.jpg)

## Slide 8: Default Custom Fields

### Editable slide text

There are 7 Default Custom Fields in Empower 3

Found in the Default Project

All are Sample Field Type:
Column Name
Column Serial Number
Dilution
Level Values
Sample Matrix
Sample Name
Sample Weight

Default Custom Fields

### Speaker notes

Default Custom Fields

The reason that these 7 are created as Default Custom Fields is that they can then be edited. You can change the width of these fields if you for example want more than 32 characters for the Sample Name. 

For the Enumerated types you can add, edit or delete the default entries in the translation table.

### Pictures

- name=Picture 6; shape=3; type=png; bytes=24586; description=Project properties default CF.PNG; sha256=17dc111c86c41343773d938671546157cc2f2a003841869fd46e97aec343a7bf; file=[slide-008-17dc111c86.png](source-guide-images/slide-008-17dc111c86.png)

## Slide 9: [untitled]

### Editable slide text

Creating a New Custom Field

Speaker notes: none extracted.

## Slide 10: [untitled]

### Editable slide text

Creating a New Custom Field
What Type of Field to Create?

Speaker notes: none extracted.

## Slide 11: What Type of Field to Create?

### Editable slide text

What Type of Field to Create?

### Speaker notes

Field Type

The screen shown above is the first part of the New Custom Field wizard. The first thing you need to consider is what type of field you want to create.

### Pictures

- name=Picture 6; shape=2; type=png; bytes=35747; sha256=839f0ecc1da0fdcf719f8a1251e4a5be233b69a6f908609582137540d86b50bc; file=[slide-011-839f0ecc1d.png](source-guide-images/slide-011-839f0ecc1d.png)

## Slide 12: Types of Custom Fields

### Editable slide text

Types of Custom Fields

Sample: Descriptive, if numerical. Can be used in calculations

Sample Set: Descriptive, relates to a complete sample set

Component: Relates to each component in the component editor

Peak: Relates to each peak in the chromatogram

Result: Relates to a result for an entire sample

Distribution: For GPC option only

### Speaker notes

Types of Custom Fields 

There are six types of custom fields in Empower:

Sample – Identifier of a sample, used where information is different for each sample.

Sample Set – Identifier of an entire sample set and not specific parameters.

Component – Identifier that pertains to a particular component in the sample as identified in the component table of the processing method.

Peak – Custom calculation of a peak-level parameter, including an interpeak calculation capability (for example, Area[Ratio] = Area/Peak1[Area]).

Result – Custom calculation of a result-level parameter (for example, the total area of all peaks with a %Area less than 2% = Sum(Area*LTE(%Area,2.0)).

Distribution – Custom calculation of a distribution slice-level parameter for GPC/V data.

## Slide 13: Field Type: Sample

### Editable slide text

Describes samples, vials, and sample parameters.

Used when the information is different for each sample
Entered in:
Samples table of the Run Samples window
Alter Sample window
Supported Data Types:
Integer
Real
Text

Field Type: Sample

Date
Boolean
Enumerated

Speaker notes: none extracted.

## Slide 14: Sample: Custom Field Type

### Editable slide text

Sample: Custom Field Type

What it does | What it can contain (Examples) | Where it appears
Describes samples, vials, custom samples, and sample parameters | Lot number / Analyst's name / Patient ID / Dissolution medium / Storage interval / Storage conditions / Plant number / Manufacture date | Samples table of the Run Samples window / Alter Sample window / Sample Set Method Editor / Review's Chromatogram Result table and Channels tab / New Custom Field editor / Report Publisher / These tabs of the Project window: / Injections / Channels / Results / Peaks / Sign Offs / Custom Fields

?

### Speaker notes

Sample Type CF

Examples of Sample Type custom fields are shown above.

Custom fields such as these could all be tracked as a Sample Type custom field and, like SampleName, the field would appear in the Run Sample’s Sample tab, allowing the user to enter appropriate information. After data is acquired, this information is displayed in the Alter Sample window where it can be modified, if necessary. The field can also be added to the project window’s Injections, Channesl, Results, Peaks, sign Offs and Custom Fields views and can be printed in a customized report.

## Slide 15: Sample: Custom Field Type

### Editable slide text

Sample: Custom Field Type

What it does | What it can contain (Examples) | Where it appears
Describes samples, vials, custom samples, and sample parameters | Lot number / Analyst's name / Patient ID / Dissolution medium / Storage interval / Storage conditions / Plant number / Manufacture date | Samples table of the Run Samples window / Alter Sample window / Sample Set Method Editor / Review's Chromatogram Result table and Channels tab / New Custom Field editor / Report Publisher / These tabs of the Project window: / Injections / Channels / Results / Peaks / Sign Offs / Custom Fields

### Speaker notes

Sample Type CF

Examples of Sample Type custom fields are shown above.

Custom fields such as these could all be tracked as a Sample Type custom field and, like SampleName, the field would appear in the Run Sample’s Sample tab, allowing the user to enter appropriate information. After data is acquired, this information is displayed in the Alter Sample window where it can be modified, if necessary. The field can also be added to the project window’s Injections, Channesl, Results, Peaks, sign Offs and Custom Fields views and can be printed in a customized report.

## Slide 16: Field Type: Sample Set

### Editable slide text

Identifies a Sample Set. Used when the information is the same for the entire set of data.

Entered in Sample Set Information:
Run Samples window
Alter Sample window
Supported Data Types:
Integer
Real
Text

Field Type: Sample Set

Date
Boolean
Enumerated

Speaker notes: none extracted.

## Slide 17: Sample Set: Custom Field Type

### Editable slide text

Sample Set: Custom Field Type

What it does | What it can contain (Examples) | Where it appears
Identifies a sample set | To identify a protocol run's SOP /  Batch number /  Mobile phase | Sample Set Information dialog in Run Samples window / Sample Set Information dialog in Alter Sample window / Sample Set Information dialog in Sample Set Method editor / These tabs of the Project window: / Sample Set / Injections / Channels / Result Sets / Results / Peaks / Sign Offs / Custom Fields

?

### Speaker notes

Sample Set Type CF

Examples of Sample Set Type custom fields are shown above.

Custom fields such as these are entered in the Sample Set Information dialog, in the Run Samples window allowing the user to enter appropriate information. After data is acquired, this information is displayed in the Alter Sample window where it can be modified, if necessary. The field can also be added to the project window’s Sample Set, Injections, Channels, Result Sets, Results, Peaks, Sign Offs and Custom Fields views and can be printed in a customized report.

## Slide 18: Sample Set: Custom Field Type

### Editable slide text

Sample Set: Custom Field Type

What it does | What it can contain (Examples) | Where it appears
Identifies a sample set | To identify a protocol run's SOP /  Batch number /  Mobile phase | Sample Set Information dialog in Run Samples window / Sample Set Information dialog in Alter Sample window / Sample Set Information dialog in Sample Set Method editor / These tabs of the Project window: / Sample Set / Injections / Channels / Result Sets / Results / Peaks / Sign Offs / Custom Fields

### Speaker notes

Sample Set Type CF

Examples of Sample Set Type custom fields are shown above.

Custom fields such as these are entered in the Sample Set Information dialog, in the Run Samples window allowing the user to enter appropriate information. After data is acquired, this information is displayed in the Alter Sample window where it can be modified, if necessary. The field can also be added to the project window’s Sample Set, Injections, Channels, Result Sets, Results, Peaks, Sign Offs and Custom Fields views and can be printed in a customized report.

## Slide 19: Field Type: Peak

### Editable slide text

User-defined mathematical calculation pertaining to a peak.

Fields within a peak:
 Area/Amount

Fields between peaks:
 Peak Name A[Area]/Peak Name B[Area]

Found in any Peaks table. Supported Data Types:
Integer
Real
Text

Field Type: Peak

Date
Boolean
Enumerated

Speaker notes: none extracted.

## Slide 20: Field Type: Peak Syntax

### Editable slide text

How to reference and use a specific peak:
In a chromatogram
PeakName[Field]
Example 1: acetone[Area] – Returns the area of the acetone

Example 2: Area / acetone[Area] – Divide each peak area by the acetone area

The name should match with the name indicated in the component table. It is case-sensitive

Field Type: Peak Syntax

### Speaker notes

Peak Type CF Syntax

The syntax needed to reference a specific named peak is

Peak Name[Field]

Remember that the spelling of the peak name in the custom field must match the spelling in the component table of the processing method.

## Slide 21: Peak: Custom Field Type

### Editable slide text

Peak: Custom Field Type

What it does | What it can contain (Examples) | Where it appears
Performs peak-level calculations based on a specified formula | To convert a calculated component amount to different units (ng to nmol) / To multiply the corrected area of a component by its response factor | Review's Peaks tab / New Custom Field editor / Report Publisher / These tabs of the Project window: / Peaks / Custom Fields

?

### Speaker notes

Peak Type CF 

Examples of Peak Type custom fields are shown above.

This information is then located in the Peaks tab of the Result window of Review and can be placed in the project window’s Peak View or on a customized report.

## Slide 22: Peak: Custom Field Type

### Editable slide text

Peak: Custom Field Type

What it does | What it can contain (Examples) | Where it appears
Performs peak-level calculations based on a specified formula | To convert a calculated component amount to different units (ng to nmol) / To multiply the corrected area of a component by its response factor | Review's Peaks tab / New Custom Field editor / Report Publisher / These tabs of the Project window: / Peaks / Custom Fields

### Speaker notes

Peak Type CF 

Examples of Peak Type custom fields are shown above.

This information is then located in the Peaks tab of the Result window of Review and can be placed in the project window’s Peak View or on a customized report.

## Slide 23: Field Type: Result

### Editable slide text

User-defined mathematical calculation pertaining to a result-level parameter.

One answer per chromatogram / result.
Found in any Results Table.
Supported Data Types:
Integer
Real
Text

Field Type: Result

Date
Boolean
Enumerated

Speaker notes: none extracted.

## Slide 24: Result: Custom Field Type

### Editable slide text

Result: Custom Field Type

What it does | What it can contain (Examples) | Where it appears
Performs result-level calculations based on a specified formula | To calculate summaries of total impurities within specified areas | Chromatogram result table in Review / New Custom Field editor  / Report Publisher / These tabs of the Project window: / Results / Peaks / Sign Offs / Custom Fields

?

### Speaker notes

Result Type CF

Examples of Result Type custom fields are shown above.

Fields such as these are displayed in the Chromatogram Result table of the Result window of Review and can be placed in the project window’s Results, Peaks, Sign Offs and Custom Fields views and can also be included in custom reports.

## Slide 25: Result: Custom Field Type

### Editable slide text

Result: Custom Field Type

What it does | What it can contain (Examples) | Where it appears
Performs result-level calculations based on a specified formula | To calculate summaries of total impurities within specified areas | Chromatogram result table in Review / New Custom Field editor  / Report Publisher / These tabs of the Project window: / Results / Peaks / Sign Offs / Custom Fields

### Speaker notes

Result Type CF

Examples of Result Type custom fields are shown above.

Fields such as these are displayed in the Chromatogram Result table of the Result window of Review and can be placed in the project window’s Results, Peaks, Sign Offs and Custom Fields views and can also be included in custom reports.

## Slide 26: Field Type: Component

### Editable slide text

Identifies an analyte.

Entered in Component Editor:
Run Samples window
Alter Sample window

Supported Data Types:
Real

Field Type: Component

Speaker notes: none extracted.

## Slide 27: Component: Custom Field Type

### Editable slide text

Component: Custom Field Type

What it does | What it can contain (Examples) | Where it appears
Identifies an analyte/component | To enter a samples label claim to calculate % label claim / To enter a components Mw to convert a calculated components amount to different units (ng to nmol) | Component Editor in the Run Samples window / Component Editor in the Alter Sample window / Component Editor in the Sample Set Method Editor / Custom Field View in project window / Report Publisher

?

### Speaker notes

Component Type CF

Examples of Result Type custom fields are shown above.

Component Type Custom Fields can be entered an viewed in the Component Editor in Run Samples, Alter Samples and method Set Editor. It can also be viewed in the Custom Fields view in the project window and included in Reports.

## Slide 28: Component: Custom Field Type

### Editable slide text

Component: Custom Field Type

What it does | What it can contain (Examples) | Where it appears
Identifies an analyte/component | To enter a samples label claim to calculate % label claim / To enter a components Mw to convert a calculated components amount to different units (ng to nmol) | Component Editor in the Run Samples window / Component Editor in the Alter Sample window / Component Editor in the Sample Set Method Editor / Custom Field View in project window / Report Publisher

### Speaker notes

Component Type CF

Examples of Result Type custom fields are shown above.

Component Type Custom Fields can be entered an viewed in the Component Editor in Run Samples, Alter Samples and method Set Editor. It can also be viewed in the Custom Fields view in the project window and included in Reports.

## Slide 29: Field Type: Distribution

### Editable slide text

Serves as slice-level parameter for GPC/V data
calculated according to a specified formula.

Supported Data Types:
Real
Boolean
Enumerated

Field Type: Distribution

### Speaker notes

Distribution Type CF

The Distribution type field is a user-defined mathematical calculation pertaining to a distribution slice-level parameter for GPC/V data. Distribution type fields, include fields such as Slice Area, Slice Log MW and Slice Adj. RT. 

This type of CF is only available if the GPC option for Empower is installed.

## Slide 30: Distribution: Custom Field Type

### Editable slide text

Distribution: Custom Field Type

What it does | What it can contain (Examples) | Where it appears
Serves as slice-level parameter for GPC/V data; calculated according to a specified formula | You can use distribution custom field values in place of standard area and molecular weight values to calculate molecular weight averages (moments) for the distribution. | Distribution tab of the Result window in Review / Curves, Molecular Weight Distributions view in Project window / Report Publisher

Not discussed further in this training

### Speaker notes

Distribution Type CF

Example of Distribution type Custom Field is shown above.

These fields are displayed in the Distribution tab of the Result window of Review and can also be included in the project window’s Molecular Weight Distributions view and in custom reports.

## Slide 31: [untitled]

### Editable slide text

Creating a New Custom Field
What Data Type is your Field?

Speaker notes: none extracted.

## Slide 32: What Data Type is your Field?

### Editable slide text

What Data Type is your Field?

Speaker notes: none extracted.

### Pictures

- name=Picture 6; shape=3; type=png; bytes=35747; sha256=839f0ecc1da0fdcf719f8a1251e4a5be233b69a6f908609582137540d86b50bc; file=[slide-011-839f0ecc1d.png](source-guide-images/slide-011-839f0ecc1d.png)

## Slide 33: Data Types

### Editable slide text

Integer (0): Whole number (without fractional parts).
Real (0.0): Floating-point number entry (can contain a fraction).
Text: Alphanumeric entry.
Date: Date entry by the user or from an external source (for example a LIMS system)
Bool: Boolean
Enum Enumerated

Data Types

### Speaker notes

Data Type

Different choices for Data Type are available depending on the Field Type (Sample, Sample Set, Component, Peak, Result or Distribution) chosen. 

Most Data Type choices are self-explanatory with the exception of Bool (Boolean) and Enum (Enumerated).

### Pictures

- name=Picture 2; shape=3; type=png; bytes=720; sha256=e6fcfb67cd873073410869ad0f9e67aa288120dd9141c3b020b173f66225d81f; file=[slide-033-e6fcfb67cd.png](source-guide-images/slide-033-e6fcfb67cd.png)

## Slide 34: Data Types

### Editable slide text

Boolean: Boolean fields allow you to translate a mathematical formula into a specific value, or answer upon processing.
 Operator(Field,Value)

Two possible answers.
1 or 0
Yes or No
Pass or Fail
User defined choice.
example 0 – out of range, 1 – within range
May translate into a field.

Data Types

Speaker notes: none extracted.

## Slide 35: Boolean Custom Fields Example

### Editable slide text

Syntax: 
Function(Field,#)

Pct_Area_Criteria = GTE(Area%,98)

Translation: 
Any value greater than 98% returns True
You can change the “True” expression in the translation definition table to “Good”.

Boolean Custom Fields Example

Speaker notes: none extracted.

### Pictures

- name=Picture 2; shape=3; type=png; bytes=3871; sha256=b7f50464004074ed27c5b600a28bac4cf20532538d13370cc018fc00c6c76a61; file=[slide-035-b7f5046400.png](source-guide-images/slide-035-b7f5046400.png)
- name=Picture 4; shape=4; type=png; bytes=6744; description=\\Woodserver\tsv\Custom Fields Presentation\transdef.tif; sha256=f96969af79c423c571069481a06b054b858b97214b75279980c05019f10f770a; file=[slide-035-f96969af79.png](source-guide-images/slide-035-f96969af79.png)

## Slide 36: Boolean Custom Fields Example

### Editable slide text

Boolean Custom Fields Example

Speaker notes: none extracted.

### Embedded objects

- name=Object 0; shape=1; program=PBrush; show_as_icon=False; bytes=845824; sha256=37652e2d770ee00957e39a68bb8e412625978c7dfa693a2c881c15b7de134002; file=[slide-036-37652e2d77.bin](source-guide-embeddings/slide-036-37652e2d77.bin)

## Slide 37: Data Types

### Editable slide text

Enumerated: Enumerated fields have two possible uses:
Provide a user with a list of possible answers.
Translate multiple Boolean expressions into a value or answer

Two types of Enumerator Custom Fields:
Sample 
Calculated (Peak or Result)

ENUM(Operator(Field,Value),Operator(Field,Value),Operator(Field,Value))

Data Types

### Speaker notes

Enumerated lists offer these advantages over Text Data Type fields:
They are easier to select from a list rather than type in a field.
The information for each field is in a consistent and in an expected format.
Spelling and naming inconsistencies errors are reduced.
If the proper choice is not available, the analyst may specify a value, if allowed.
Note: The translation may be a value, text, or field. The USE AS selection determines the output from the field. USE AS also translates your position into a text field. 
Enumerated considerations
ENUM can be used when the data type is ENUM or in a Real type formula.
ENUM must appear at the beginning of a formula if it is created for an ENUM type custom field.
There cannot be more than one ENUM function in any formula.
Only Boolean functions, or Boolean operators, are allowed in the first-level parentheses.

## Slide 38: Enumerated - Sample Custom Fields EX

### Editable slide text

Field type = Sample
 Field name = Column_Type
 Will show up in Run Sample as a convenient drop-down list

Enumerated - Sample Custom Fields EX

Speaker notes: none extracted.

### Pictures

- name=Picture 4; shape=3; type=png; bytes=6892; sha256=056a2086c7f11239c9316bc239e190b16b5c812c914bf5411c49aa747ff32e9d; file=[slide-038-056a2086c7.png](source-guide-images/slide-038-056a2086c7.png)

## Slide 39: Enumerated - Sample Custom Fields EX

### Editable slide text

Enumerated - Sample Custom Fields EX

Speaker notes: none extracted.

### Embedded objects

- name=Object 3; shape=2; program=[unspecified]; show_as_icon=False; bytes=1797120; sha256=6e9a9be97fb8bf14c394756cce02bbbb2fd46d3b438b6447c13bdac3844f3807; file=[slide-039-6e9a9be97f.bin](source-guide-embeddings/slide-039-6e9a9be97f.bin)

## Slide 40: Enumerated - Sample Custom Fields EX

### Editable slide text

Useful examples:
Column details 
Method conditions / mobile phase / pH
Allowed product codes
Sample descriptions, sample matrix
Storage Conditions
Packing Material

Enumerated - Sample Custom Fields EX

Speaker notes: none extracted.

## Slide 41: Enumerated - Calculated Custom Fields EX

### Editable slide text

ENUM(LTE(% Deviation,1),RANGE(% Deviation,1,3),GT(% Deviation,3))

Translation:
If the % Deviation is less than or equal to 1, then “0” = “Excellent”
If the % Deviation is between 1 and 3 (or equal to 3), then “1” = “Acceptable”
If the % Deviation is greater than 3, then “2” = “Not Acceptable”

Enumerated - Calculated Custom Fields EX

Speaker notes: none extracted.

### Embedded objects

- name=Object 5; shape=3; program=[unspecified]; show_as_icon=False; bytes=109056; sha256=22e95401d92c8cd23d4c5fb2d9f3388ba45deb15f7066a0318096c5346448f19; file=[slide-041-22e95401d9.bin](source-guide-embeddings/slide-041-22e95401d9.bin)
- name=Object 6; shape=4; program=[unspecified]; show_as_icon=False; bytes=90112; sha256=4edd87d0b46486a00cf3f0cdace703107fc51f11315236935d1fe11cc0477980; file=[slide-041-4edd87d0b4.bin](source-guide-embeddings/slide-041-4edd87d0b4.bin)

## Slide 42: Enumerated - Calculated Custom Fields EX

### Editable slide text

Translation:
If the % Deviation is less than or equal to 1, then “0” = “Excellent”
If the % Deviation is between 1 and 3 (or equal to 3), then “1” = “Acceptable”
If the % Deviation is greater than 3, then “2” = “Not Acceptable”

Enumerated - Calculated Custom Fields EX

Speaker notes: none extracted.

### Pictures

- name=Picture 3; shape=3; type=png; bytes=7008; sha256=24e5aa03c1274520d7eaac247518d19f17497ac8c0c586377021dee3609351f1; file=[slide-042-24e5aa03c1.png](source-guide-images/slide-042-24e5aa03c1.png)

### Embedded objects

- name=Object 5; shape=4; program=[unspecified]; show_as_icon=False; bytes=109056; sha256=ff42316243098d9fe6bd21083b0b8186626da22c8d91546a4c37b2a676e6881a; file=[slide-042-ff42316243.bin](source-guide-embeddings/slide-042-ff42316243.bin)
- name=Object 6; shape=5; program=[unspecified]; show_as_icon=False; bytes=90112; sha256=4edd87d0b46486a00cf3f0cdace703107fc51f11315236935d1fe11cc0477980; file=[slide-041-4edd87d0b4.bin](source-guide-embeddings/slide-041-4edd87d0b4.bin)

## Slide 43: Enumerated - Calculated Custom Fields EX

### Editable slide text

Enumerated - Calculated Custom Fields EX

Speaker notes: none extracted.

### Embedded objects

- name=Object 3; shape=3; program=[unspecified]; show_as_icon=False; bytes=1664000; sha256=ff4f9d7e0f6b259478ece4ac7cc241c44126e0dc172818e7c6d1303fc9e294bc; file=[slide-043-ff4f9d7e0f.bin](source-guide-embeddings/slide-043-ff4f9d7e0f.bin)

## Slide 44: [untitled]

### Editable slide text

Creating a New Custom Field
Other Fields to Fill

Speaker notes: none extracted.

## Slide 45: New Custom Field: Data Source Selection

### Editable slide text

New Custom Field: Data Source Selection

### Speaker notes

Data Source Selection

The 3rd step in the wizard is shown here.

### Pictures

- name=Picture 4; shape=2; type=png; bytes=41078; sha256=30d87e4ecb6fb3b38f05d9b4e72e928f1d25ee8c56b2f58d580afeadfb782033; file=[slide-045-30d87e4ecb.png](source-guide-images/slide-045-30d87e4ecb.png)

## Slide 46: New Custom Field: Data Source Selection

### Editable slide text

The Data source defines where the field value should come from.
There are several choices:
Keyboard
Specifies that the field value will be entered through the keyboard.
External
Specifies that the field value will be provided from outside the Empower database (for example, the Empower Toolkit).
Calculated
Specifies that the field value will be calculated by Empower software using a formula that you define.

New Custom Field: Data Source Selection

### Speaker notes

Data Source 

The Data Source is set to Keyboard if the CF Type is Sample, Sample Set or Component, meaning that the user will enter the appropriate information into the field using the computer’s keyboard. 

Calculated is chosen for all CF requiring calculations like Peak and Result type CF. 

A value of External should only be selected if this field will be filled in from an application other than Empower software, if you were using the Empower Toolkit option to import information from for example a LIMS system.

## Slide 47: New Custom Field: Data Entry / Default Value

### Editable slide text

New Custom Field: Data Entry / Default Value

### Speaker notes

Data entry is required /Default Value

The next thing to consider is if data entry is required and if you want to enter a default value.

### Pictures

- name=Picture 6; shape=3; type=png; bytes=36019; sha256=e95aacbd0cac00c9a1cbabd30db5f314e540589bd9b802b55abf9ba98390e36c; file=[slide-047-e95aacbd0c.png](source-guide-images/slide-047-e95aacbd0c.png)

## Slide 48: New Custom Field: Data Entry / Default Value

### Editable slide text

Data entry is required
Specifies that an entry is required in the custom field during sample loading (in Run Samples, the Sample Set Method Editor, or the Alter Sample window) or when you import data. 
If an entry is required, you cannot proceed with sample loading until you enter a value for the field.

Default value
Specifies a default value for a custom field. 
This default value appears in the custom field if a user entry is not required. 
If the data type is Bool or Enum, the default value appears at the top of the Translation column in the Translation Definition table.

New Custom Field: Data Entry / Default Value

### Speaker notes

Data entry is required /Default Value 

Data entry is required specifies that an entry is required in the custom field during sample loading. If this box is selected, the user cannot proceed with acquisition until a value for the field is entered.

The Default Value allows you to specify a value that will automatically appear in this field.

## Slide 49: New Custom Field: Sample Type / Peak Type

### Editable slide text

New Custom Field: Sample Type / Peak Type

### Speaker notes

Sample Type/Peak Type

You can restrict custom fields to be calculated only for specific types of samples and or specific types of peaks.

### Pictures

- name=Picture 5; shape=2; type=png; bytes=41078; sha256=30d87e4ecb6fb3b38f05d9b4e72e928f1d25ee8c56b2f58d580afeadfb782033; file=[slide-045-30d87e4ecb.png](source-guide-images/slide-045-30d87e4ecb.png)

## Slide 50: New Custom Field: Sample Type

### Editable slide text

Choose the Sample Type that you want to calculate the CF for. If a formula references a field from another result, the sample from which the result is generated must match this type for the field value to be used.
All
Standards Only
Unknowns Only
Controls Only
Standards & Unknowns
Standards & Controls
Controls & Unknowns
Sample Type is available only if the Data Source is set to Calculated.

New Custom Field: Sample Type

### Speaker notes

Sample Type

You can restrict the calculation to only Standards, Samples or Controls or combination of these sample types.

## Slide 51: New Custom Field: Peak Type

### Editable slide text

Choose the Peak Type that you want to calculate the CF for. If a formula references a field from another peak, its type must match this type for the field value to be used. 
All
Founds Only
Unknowns Only
Groups Only
Founds and Groups
Founds and Unknowns
Unknowns and Groups
Peak Type is available only if the Data Source is set to Calculated.

New Custom Field: Peak Type

51

### Speaker notes

Peak Type

You can restrict the calculation to only Founds, Unknowns or Groups or combination of these peak types.

## Slide 52: Calculations, Formula Entry

### Editable slide text

Calculations, Formula Entry

Available Fields

Formula Entry Area

### Speaker notes

Calculation, Formula Entry

If the custom fields is calculated the next step of the wizard is to enter the formula.

Create the formula by selecting the fields from the fields list, and the mathematical functions from the operations list. You can type in the formula but you must spell exactly as spelled in the fields/operations list, so it is best to avoid typing in.

Calculation Guidelines:
Evaluation is done left to right.
Sequence precedence for basic mathematical operators is exponent, multiply, divide, add, subtract (**, *, /, +, –).
Sub expressions are specified in an expression with parentheses ( ), which must be matched. Any depth of nested sub-expressions is allowed. For ease of use and simplicity, Waters recommends that you avoid specifying more than eight levels of sub-expressions.
The Precision limit parameter must be of a sufficient value to display the calculated result.
All functions require field name variables be in parentheses (), not brackets [].  
Use brackets [] when referencing a specific peak or component field directly or with the CCalRef1 and CCompRef1, CCompRef2, and CCompRef3 peak fields. For example, in CCalRef1[Area], the field name must be enclosed in square brackets.

### Pictures

- name=Picture 5; shape=3; type=png; bytes=46682; sha256=11690eafcd9085db4cdadd43e896b0ac0ffecbb2ca1b8fcdb85644309216d7cb; file=[slide-052-11690eafcd.png](source-guide-images/slide-052-11690eafcd.png)

## Slide 53: Custom Fields Operators

### Editable slide text

Custom Fields Operators

Mathematical Operators

-

Subtraction

(

Left parenthesis

)

Right parenthesis

*

Multiplication

**

Exponent

/

Division

+

Addition

Mathematical Functions

ABS

Absolute value

COS

Cosine

LN

Natural log

LOG

Regular log

SIN

Sine

SQRT

Square root

Summary Functions

AVE

Average

MAX

Maximum value

MIN

Minimum value

SUM

Summation

Speaker notes: none extracted.

## Slide 54: [untitled]

### Editable slide text

Custom Fields Examples

Speaker notes: none extracted.

## Slide 55: Creating Custom Fields

### Editable slide text

Creating Custom Fields

Speaker notes: none extracted.

### Pictures

- name=Picture 2; shape=3.1; type=png; bytes=81958; sha256=2442e4cac1954d3748fdc071ebc03484f16167c970f5fff09bda270da8562ba5; file=[slide-055-2442e4cac1.png](source-guide-images/slide-055-2442e4cac1.png)

## Slide 56: Creating Custom Fields

### Editable slide text

Creating Custom Fields

### Speaker notes

Creating Custom Fields

 Select Projects on the Configuration Manager tree.
 Highlight the Project Name of interest.
 Right-click.
 Select Properties.

## Slide 57: Creating Custom Fields

### Editable slide text

Creating Custom Fields

### Speaker notes

Select the Custom Fields tab of the Project properties.

## Slide 58: [untitled]

### Editable slide text

Select NEW to create a new custom field

Select EDIT to modify a custom field

Select DELETE to delete a custom field

Select LOCK/UNLOCK to prevent a custom field from being modified or allow for modification

Select SAVE TO PROJECT to save a custom field to other Projects

Select OK to accept changes and exit Project properties

Select CANCEL exit the Project properties without accepting changes

Select HELP for help with Project properties

### Speaker notes

There are several options for Custom Fields in the Project properties.

### Embedded objects

- name=Object 1024; shape=1; program=PBrush; show_as_icon=False; bytes=9728; sha256=fc352db1cfbc5233f799a1caa94e7c51725c746007bd248e57cd8aa67e9f02f5; file=[slide-058-fc352db1cf.bin](source-guide-embeddings/slide-058-fc352db1cf.bin)
- name=Object 1025; shape=2; program=PBrush; show_as_icon=False; bytes=7680; sha256=91d4c14c626c1cf246d0cfe56595fa2197f51ce2121df4727859e200ecaaee96; file=[slide-058-91d4c14c62.bin](source-guide-embeddings/slide-058-91d4c14c62.bin)
- name=Object 1026; shape=3; program=PBrush; show_as_icon=False; bytes=7680; sha256=3570b6c8eea5e67023bc29935c128f06098482442112c14b5a4abbdcb9c2f19b; file=[slide-058-3570b6c8ee.bin](source-guide-embeddings/slide-058-3570b6c8ee.bin)
- name=Object 1027; shape=4; program=PBrush; show_as_icon=False; bytes=7680; sha256=3d7e84c67bb559a0bca95e8939fb17a7472fca3fa27f5f79ade5fcfe778a9240; file=[slide-058-3d7e84c67b.bin](source-guide-embeddings/slide-058-3d7e84c67b.bin)
- name=Object 1028; shape=5; program=PBrush; show_as_icon=False; bytes=8704; sha256=85ad08c280869689661dec9985bfc89366094404f76112c46a19e057b4681425; file=[slide-058-85ad08c280.bin](source-guide-embeddings/slide-058-85ad08c280.bin)
- name=Object 1029; shape=11; program=PBrush; show_as_icon=False; bytes=8704; sha256=f47a35e5d8a0e23857d89cfcc706b44db5f1702bdae5b132095051e5f9b203c5; file=[slide-058-f47a35e5d8.bin](source-guide-embeddings/slide-058-f47a35e5d8.bin)
- name=Object 1030; shape=12; program=PBrush; show_as_icon=False; bytes=8704; sha256=ecdd481a1330843191ede9f42d34ddb1803e6e643d9cef851355b0e4def73df8; file=[slide-058-ecdd481a13.bin](source-guide-embeddings/slide-058-ecdd481a13.bin)
- name=Object 1031; shape=13; program=PBrush; show_as_icon=False; bytes=8704; sha256=f749235be984770b5834556bcaaa26ca29d226d4880c2f9eca716611010cce5c; file=[slide-058-f749235be9.bin](source-guide-embeddings/slide-058-f749235be9.bin)

## Slide 59: Create New Sample Type Field

### Editable slide text

Goal: Enable the analyst to enter a Lot Number for each sample

Create New Sample Type Field

### Speaker notes

Create a new Sample Type custom field for Lot_Number.
Why Sample Type? The information could be different for each sample.
What is the Data Type?

## Slide 60: Create New Sample Type Field

### Editable slide text

Create New Sample Type Field

### Speaker notes

Create a new Sample Type custom field for LOT_NUMBER.
Field Type: Sample
Data Type: Text
Click Next.

## Slide 61: Create New Sample Type Field

### Editable slide text

Create New Sample Type Field

### Speaker notes

Data Source: Keyboard
Keyboard: Analyst enters information.
External: Value comes from another data source (ex. LIMS).
Calculated: Value is calculated by the software.
Data Entry Required: Analyst cannot acquire data without entering value.
Default Value: A value can be entered here and is automatically placed in the field.
Click Next.

## Slide 62: Create New Sample Type Field

### Editable slide text

Create New Sample Type Field

### Speaker notes

Select the character width for the new field.
Make sure you have allowed enough space for the field.
Limit the number of characters in order to help with the ease of data entry.
Click Next.

## Slide 63: Create New Sample Type Field

### Editable slide text

Create New Sample Type Field

### Speaker notes

Name the new field: Lot_Number
Names must begin with a letter.
No characters are allowed in custom field names.
Create this field in only one Project.
It is possible to copy the field to other Projects after you have verified that it operates correctly.
Click Finish.

Tip: You will get a warning message indicating that if the Project is open, it will need to be closed and Empower will need to be restarted in order for the new field to be available.

Click OK.

### Pictures

- name=Picture 5; shape=3; type=png; bytes=32862; sha256=bd6f642359adad66071b22c4b41819323006343587e6d41fcb48b4358b7215b7; file=[slide-063-bd6f642359.png](source-guide-images/slide-063-bd6f642359.png)

## Slide 64: Entering: Sample Type Custom Field Info

### Editable slide text

Entering: Sample Type Custom Field Info

### Speaker notes

Entering Sample Type Custom Field Information, Lot_Number

Sample Type CF information is entered in run samples or alter samples as shown above.

### Pictures

- name=Picture 2; shape=3; type=jpg; bytes=53211; description=H:\Empower CF screen captures\ScreenHunter_02 Mar. 07 10.13.jpg; sha256=d601dd8e4436cbaf07ca5eb5a9e6ad7d0f1cd76c0e7579ba7c2b67373c9dcfb5; file=[slide-064-d601dd8e44.jpg](source-guide-images/slide-064-d601dd8e44.jpg)

## Slide 65: Create New Sample Set Type Field

### Editable slide text

Goal: Create a list of USP columns for an analyst to select from when running a sequence of samples

You want to allow the analyst to select from types L1, L3, L4, L7 or L11

Create New Sample Set Type Field

### Speaker notes

Create a new Sample Set Type custom field for HPLC_Column_Type.
Why Sample Set Type? The information is the same for each sample.
What is the Data Type?

## Slide 66: Create New Sample Set Type Field

### Editable slide text

Create New Sample Set Type Field

### Speaker notes

Create a new Sample Set Type custom field for HPLC_Column_Type
Field Type: Sample Set
Data Type: Enum
Click Next.

## Slide 67: Create New Sample Set Type Field

### Editable slide text

Create New Sample Set Type Field

### Speaker notes

Data Source: Keyboard.
Data Entry Required: ENABLE.
Default Value: None. 
Use As: Position.

## Slide 68: Create New Sample Set Type Field

### Editable slide text

Create New Sample Set Type Field

### Speaker notes

Translation Definition: Type in the choices you wish the analyst to have when using this field.
Enter:
L1
L3
L4
L7
L11

## Slide 69: Create New Sample Set Type Field

### Editable slide text

Create New Sample Set Type Field

### Speaker notes

Name the new field: USP_Column_Type
Create this field in only one Project.
Click Finish.

Click OK

## Slide 70: Entering: Sample Set Type Custom Field Info

### Editable slide text

Entering: Sample Set Type Custom Field Info

### Speaker notes

Entering Sample Set Type Custom Field Information, USP_Column_Type

Sample Set Type CF information is entered in run samples via the Sample Set Information function or via alter samples.

### Pictures

- name=Picture 2; shape=2; type=jpg; bytes=54968; description=H:\Empower CF screen captures\ScreenHunter_03 Mar. 07 10.17.jpg; sha256=f28f5a6154797cb5177936a237d259df7a19b55af85ed67fdb11151fa4c4baa0; file=[slide-070-f28f5a6154.jpg](source-guide-images/slide-070-f28f5a6154.jpg)
- name=Picture 3; shape=3; type=jpg; bytes=33293; description=H:\Empower CF screen captures\ScreenHunter_04 Mar. 07 10.17.jpg; sha256=ddfd1bfd9c4a3926e9db44d4922b21b82aa117a1bd5cfc617b3a5b0cade6c917; file=[slide-070-ddfd1bfd9c.jpg](source-guide-images/slide-070-ddfd1bfd9c.jpg)
- name=Picture 4; shape=4; type=jpg; bytes=29255; description=H:\Empower CF screen captures\ScreenHunter_05 Mar. 07 10.17.jpg; sha256=135549b5a7065f8b59640c4bdc421de87f48d6ca3c01251d1b3fb7537a1f81a9; file=[slide-070-135549b5a7.jpg](source-guide-images/slide-070-135549b5a7.jpg)

## Slide 71: Create New Component Type Field

### Editable slide text

Goal: Have the analyst enter Label Claim in preparation to having Percent Label Claim calculated

Create New Component Type Field

### Speaker notes

Create a new Component Type custom field for Label_Claim.
Why Component Type? The information could be different per component and per vial.
What is the Data Type?

## Slide 72: Create New Component Type Field

### Editable slide text

Create New Component Type Field

### Speaker notes

Create a new Component Type custom field for Label_Claim.

Field Type: Component
Data Type: Real (Notice Real is the only option.)
Click Next.

## Slide 73: Create New Component Type Field

### Editable slide text

Create New Component Type Field

### Speaker notes

Data Source: Keyboard.
Data Entry Required: Not Available.
Why is Data Entry Required unavailable?
Default Value: 1.000 
Click Next

## Slide 74: Create New Component Type Field

### Editable slide text

Create New Component Type Field

### Speaker notes

Numeric Parameters
Maximum number of characters: 7

NOTE: Remember to count the decimal point and/ or sign characters.

Precision: 3
Minimum Value: 1.000
Maximum Value: 100.000
Click Next.

## Slide 75: Create New Component Type Field

### Editable slide text

Create New Component Type Field

### Speaker notes

Name the new field: Label_Claim
Create this field in only one Project.
Click Finish.

Click OK

## Slide 76: Entering: Component Type Custom Fields Info

### Editable slide text

Entering: Component Type Custom Fields Info

### Speaker notes

Entering Component Type Custom Field Information, Label_Claim

A new tab will appear with the name of the Component Custom Field, here Label_Claim.

Since we added the value 150 as a default value for this CF it is automatically filled.

### Pictures

- name=Picture 4; shape=3; type=jpg; bytes=87645; description=H:\Empower CF screen captures\ScreenHunter_19 Mar. 07 10.30.jpg; sha256=b320b713f6d9e17bb72cf1d13a6ff0c18a064e65f8548cb79ab6d016b80873fc; file=[slide-076-b320b713f6.jpg](source-guide-images/slide-076-b320b713f6.jpg)

## Slide 77: Create New Peak Type Field

### Editable slide text

Goal: Have Empower calculate Percent Label Claim

Create New Peak Type Field

### Speaker notes

Create a new Peak Type custom field for Percent_Label_Claim.
Why Peak Type? This field is calculated by Empower.

What is the Data Type?

What is the Formula?

## Slide 78: Create New Peak Type Field

### Editable slide text

Create New Peak Type Field

### Speaker notes

Create a new Peak Type custom field for Percent_Label_Claim.

Field Type: Peak
Data Type: Real
Click Next.

## Slide 79: Create New Peak Type Field

### Editable slide text

Create New Peak Type Field

### Speaker notes

Data Source: Calculated
Sample Type: All
Peak Type: Founds Only
Click OK
Click Next

## Slide 80: Create New Peak Type Field

### Editable slide text

Create New Peak Type Field

### Speaker notes

Create the formula by selecting from the available fields list and operations. 
 
Note: Do Not type Field Names or Mathematical Operators.

The Formula:

Field= Amount/Label_Claim*100
 
Double click Amount.
Double click /.
Double click Label_Claim.
Double click *.
Type 100 from your keyboard.
Click Next

## Slide 81: Create New Peak Type Field

### Editable slide text

Create New Peak Type Field

### Speaker notes

Maximum number of characters: 12
Tip: Remember to count the decimal point and/ or sign characters.

Precision: 3
Click Next

## Slide 82: Create New Peak Type Field

### Editable slide text

Create New Peak Type Field

### Speaker notes

Name the new field: Percent_Label_Claim
Create this field in only one Project.
Click Finish.

## Slide 83: Viewing: Result of Peak Type CF Calculation

### Editable slide text

Viewing: Result of Peak Type CF Calculation

### Speaker notes

Viewing the result of a Peak Type Custom Field calculation, Percent_Label_Claim

Since Percent_Label_Claim is a Peak type custom field it will appear in the peak table in review when the chromatogram has been integrated and quantitated.

### Pictures

- name=Picture 2; shape=3; type=jpg; bytes=97243; description=H:\Empower CF screen captures\ScreenHunter_22 Mar. 07 10.35.jpg; sha256=26f43a009abf358dee5205890e7a3d8b6da8be11f9ff0caa8cb64ef551d269dc; file=[slide-083-26f43a009a.jpg](source-guide-images/slide-083-26f43a009a.jpg)
- name=Picture 2; shape=4; type=jpg; bytes=97243; description=H:\Empower CF screen captures\ScreenHunter_22 Mar. 07 10.35.jpg; sha256=26f43a009abf358dee5205890e7a3d8b6da8be11f9ff0caa8cb64ef551d269dc; file=[slide-083-26f43a009a.jpg](source-guide-images/slide-083-26f43a009a.jpg)

## Slide 84: Viewing: Result of Peak Type CF Calculation

### Editable slide text

Viewing: Result of Peak Type CF Calculation

Not calculated for Standard

### Speaker notes

Viewing the result of a Peak Type Custom Field calculation, Percent_Label_Claim

Since we asked for this CF to only be calculated for unknowns results will not appear for a standard as shown above.

### Pictures

- name=Picture 3; shape=2; type=jpg; bytes=83499; description=H:\Empower CF screen captures\ScreenHunter_21 Mar. 07 10.35.jpg; sha256=512fd500ed60765f1272975ba37b473f4d6fd90238d56499b6b70e537c8350ab; file=[slide-084-512fd500ed.jpg](source-guide-images/slide-084-512fd500ed.jpg)
- name=Picture 2; shape=6; type=jpg; bytes=52351; description=H:\Empower CF screen captures\ScreenHunter_10 Mar. 07 10.22.jpg; sha256=30a5409ba6a73c4c309fd0812e57e82e328b36238391f474b1b6f32e2a3b2226; file=[slide-084-30a5409ba6.jpg](source-guide-images/slide-084-30a5409ba6.jpg)

## Slide 85: Create New Peak Type Field (Bool)

### Editable slide text

Goal: Have Empower notify an analyst if a sample is Outside Potency Limits or at Acceptable Potency

Create New Peak Type Field (Bool)

### Speaker notes

Create a new Peak Type custom field for Potency.
Why Peak Type? This field is calculated by Empower.

What is the Data Type?

What is the Formula?

## Slide 86: Custom Fields Operators

### Editable slide text

Custom Fields Operators

Mathematical Operators

-

Subtraction

(

Left parenthesis

)

Right parenthesis

*

Multiplication

**

Exponent

/

Division

+

Addition

Mathematical Functions

ABS

Absolute value

COS

Cosine

LN

Natural log

LOG

Regular log

SIN

Sine

SQRT

Square root

Summary Functions

AVE

Average

MAX

Maximum value

MIN

Minimum value

SUM

Summation

Speaker notes: none extracted.

## Slide 87: Boolean Operators

### Editable slide text

Boolean Operators

Boolean Functions

Special Functions

ROUND

Round

REPLACE

Replace value

&

AND

|

OR

,

Comma separator

ENUM

Enumeration

EQ

Equal

GTE

Greater than or equal

LT

Less than

LTE

Less than or equal

NEQ

Not equal

RANGE

Range

Speaker notes: none extracted.

## Slide 88: Create New Peak Type Field (Bool)

### Editable slide text

Create New Peak Type Field (Bool)

### Speaker notes

Create a new Peak Type custom field for Potency.

Field Type: Peak
Data Type: Bool
Click Next.

## Slide 89: Create New Peak Type Field (Bool)

### Editable slide text

Create New Peak Type Field (Bool)

### Speaker notes

Data Source: Calculated
Use As: Position
Sample Type: All
Peak Type: Founds Only
Click OK to dialog box message
Click Next

## Slide 90: Create New Peak Type Field (Bool)

### Editable slide text

Create New Peak Type Field (Bool)

### Speaker notes

Create the formula by selecting from the available fields list and operations. Do not type Field Type Names or Mathematical Operators. 

The Formula:
Field= RANGE(Percent_Label_Claim,95,103)
 
Double click RANGE.
Double click Percent_Label_Claim.
Type , from your keyboard.
Type 95 from your keyboard.
Type , from your keyboard.
Type 103 from your keyboard.
Double click ).
Click Next

## Slide 91: Create New Peak Type Field (Bool)

### Editable slide text

Create New Peak Type Field (Bool)

### Speaker notes

Translation Definition:
0: Below Potency.
1: Acceptable Potency.
Click Next

## Slide 92: Create New Peak Type Field (Bool)

### Editable slide text

Create New Peak Type Field (Bool)

### Speaker notes

Name the new field: Potency
Create this field in only one Project.
Click Finish.
Click OK

## Slide 93: Viewing: Results for a Peak (Bool) CF

### Editable slide text

Viewing: Results for a Peak (Bool) CF

### Speaker notes

Viewing results for a Peak Type Boolean Custom Field, Potency.

The result of the boolean calculation for the Potency can be viewed in the peak tabel in review.

### Pictures

- name=Picture 2; shape=2.1; type=jpg; bytes=133400; description=H:\Empower CF screen captures\ScreenHunter_34 Mar. 07 10.57.jpg; sha256=507acf2e9d1bec9d5d5d46d36eb9a220a2d70aac0ceaa814be1e8dfb906c50c0; file=[slide-093-507acf2e9d.jpg](source-guide-images/slide-093-507acf2e9d.jpg)

## Slide 94: Possible Issues

### Editable slide text

What are the possible issues with this calculation?

Does not differentiate ‘low’ versus ‘high’ potency
RANGE may be difficult to control because of the way it calculates > for the lower number, and <= for the higher number

How else could you do this calculation? Can it be improved?

Possible Issues

Speaker notes: none extracted.

### Pictures

- name=Picture 2; shape=3; type=jpg; bytes=155238; description=Image result for ideas images; sha256=d0eb9e61e80a2fb4c378dbbd7bb78cbeabaa563bc1c708c2a7dcac40f14d7231; file=[slide-094-d0eb9e61e8.jpg](source-guide-images/slide-094-d0eb9e61e8.jpg)

## Slide 95: Possible Issues – Unclear Wording

### Editable slide text

Possible Issues – Unclear Wording

The Words Used are Critical to Understanding

Speaker notes: none extracted.

### Pictures

- name=Picture 3; shape=2; type=png; bytes=36816; sha256=177226184c4d50c9585dbb6e4552e41354ad56200e357182982fac6f9b4d0086; file=[slide-095-177226184c.png](source-guide-images/slide-095-177226184c.png)

## Slide 96: Possible Issues – Removing Use of RANGE

### Editable slide text

Possible Issues – Removing Use of RANGE

Note the use of the ‘&’ (AND) operator between the two parts

Speaker notes: none extracted.

### Pictures

- name=Picture 3; shape=1; type=png; bytes=43316; sha256=8ecf710fca72239dc4e6d461f512b926453ceb36003bd9d1cd4f31bb9966afaf; file=[slide-096-8ecf710fca.png](source-guide-images/slide-096-8ecf710fca.png)

## Slide 97: Possible Issues – Removing Use of RANGE

### Editable slide text

Possible Issues – Removing Use of RANGE

Note the use of the ‘I’ (OR) operator between the two parts

Speaker notes: none extracted.

### Pictures

- name=Picture 2; shape=2; type=png; bytes=43611; sha256=ef10025b4470d786b4a16fc768bd3dd9919cdb0a2c647d9d1a878135d8fcb14b; file=[slide-097-ef10025b44.png](source-guide-images/slide-097-ef10025b44.png)
- name=Picture 2; shape=5; type=png; bytes=2778; sha256=7f1f36c723d799d4b70cffc123329d23e6bfc18411c99ed0532c5d7f8c79ae75; file=[slide-097-7f1f36c723.png](source-guide-images/slide-097-7f1f36c723.png)

## Slide 98: Possible Issues – Greater Clarity

### Editable slide text

Possible Issues – Greater Clarity

ENUM(
 LT(Percent_Label_Claim,95),
 GT(Percent_Label_Claim,103),
 GTE(Percent_Label_Claim,95)&LTE(Percent_Label_Claim,103)
)

Many ways to do the same thing!

Speaker notes: none extracted.

### Pictures

- name=Picture 2; shape=3; type=png; bytes=2989; sha256=76f0e00d0364fe42d4fcdb269dcf3285d3504e9fe1b229f81c4585c87b82301c; file=[slide-098-76f0e00d03.png](source-guide-images/slide-098-76f0e00d03.png)

## Slide 99: Create New Result Type Field

### Editable slide text

Goal: Have Empower notify an analyst if Detector Noise is acceptable

Create New Result Type Field

### Speaker notes

Create a new Result Type custom field for Noise_Criteria.

Why Result Type? This field is calculated by and provides ONE answer for the entire chromatogram.

What is the Data Type?

What is the Formula?

## Slide 100: Create New Result Type Field

### Editable slide text

Create New Result Type Field

### Speaker notes

Create a new Result Type custom field for Noise_Criteria.

Field Type: Result
Data Type: Bool
Click Next.

## Slide 101: Create New Result Type Field

### Editable slide text

Create New Result Type Field

### Speaker notes

Data Source: Calculated
Use As: Position
Sample Type: All
Peak Type: Unknowns Only
Click OK to dialog box message
Click Next

## Slide 102: Create New Result Type Field

### Editable slide text

Create New Result Type Field

### Speaker notes

Create the formula by selecting from the available fields list and operations. Do not type Field Names or Mathematical Operators. 

The Formula:
Field= LTE(Detector Noise,0.000010)
 
Double click LTE.
Double click Detector Noise.
Type ,0.000010 from your keyboard.
Double click ).
Click Next

## Slide 103: Create New Result Type Field

### Editable slide text

Create New Result Type Field

### Speaker notes

Translation Definition:

0: Check Noise
1: Acceptable Noise
Click Next

## Slide 104: Create New Result Type Field

### Editable slide text

Create New Result Type Field

### Speaker notes

Name the new field: Noise_Criteria
Create this field in only one Project.
Click Finish.

Click OK

## Slide 105: Viewing: Results for a Result Type CF

### Editable slide text

Viewing: Results for a Result Type CF

### Speaker notes

Viewing the result of a Result Type Custom Field calculation, Detector_Noise_Criteria

Result type CF can be viewed in the results view in the review window.

### Pictures

- name=Picture 2; shape=3; type=jpg; bytes=133400; description=H:\Empower CF screen captures\ScreenHunter_34 Mar. 07 10.57.jpg; sha256=507acf2e9d1bec9d5d5d46d36eb9a220a2d70aac0ceaa814be1e8dfb906c50c0; file=[slide-093-507acf2e9d.jpg](source-guide-images/slide-093-507acf2e9d.jpg)

## Slide 106: Viewing: Results for a Result Type CF

### Editable slide text

Viewing: Results for a Result Type CF

### Speaker notes

Viewing the result of a Result Type Custom Field calculation, Detector_Noise_Criteria

It is found in the Chromatogram Result table.

### Pictures

- name=Picture 2; shape=2; type=jpg; bytes=34684; description=H:\Empower CF screen captures\ScreenHunter_35 Mar. 07 10.58.jpg; sha256=19f35b23b9b50dbff3323549355b743a8c848566ce9d092a21ce24db9b17acd2; file=[slide-106-19f35b23b9.jpg](source-guide-images/slide-106-19f35b23b9.jpg)
- name=Picture 3; shape=3; type=jpg; bytes=28775; description=H:\Empower CF screen captures\ScreenHunter_36 Mar. 07 10.58.jpg; sha256=2e38651794f20c01e37585fc553fb463f12d7a9bae9862e7fd052f1945efdaf6; file=[slide-106-2e38651794.jpg](source-guide-images/slide-106-2e38651794.jpg)
- name=Picture 2; shape=4; type=jpg; bytes=34684; description=H:\Empower CF screen captures\ScreenHunter_35 Mar. 07 10.58.jpg; sha256=19f35b23b9b50dbff3323549355b743a8c848566ce9d092a21ce24db9b17acd2; file=[slide-106-19f35b23b9.jpg](source-guide-images/slide-106-19f35b23b9.jpg)
- name=Picture 3; shape=5; type=jpg; bytes=28775; description=H:\Empower CF screen captures\ScreenHunter_36 Mar. 07 10.58.jpg; sha256=2e38651794f20c01e37585fc553fb463f12d7a9bae9862e7fd052f1945efdaf6; file=[slide-106-2e38651794.jpg](source-guide-images/slide-106-2e38651794.jpg)

## Slide 107: [untitled]

### Editable slide text

Advanced Custom Fields Creation

Speaker notes: none extracted.

## Slide 108: Peak Type Field with Reference to Peak Name

### Editable slide text

Syntax for referencing a specific peak: Peak Name[Field]

Peak Custom Field to correct the area of the preCalci peak by a factor of 1.92 and add this to the area of the Calci peak:
(preCalci[Area]*1.92)+Calci[Area]

Note: Spelling of peak names has to match the spelling in the component table of the processing method.

Peak Type Field with Reference to Peak Name

preCalci

Calci

### Speaker notes

Peak Type field with Reference to Peak Name

Problem: : The Calci peak has to reversible equilibrium forms that separate into two peaks, preCalci and Calci. The UV extinction coefficient for the preCalci from is lower than the one for the Calci form. This needs to be taken into account when creating the calibration curve. We need to multiply the area of the preCalci peak with 1.92 and then add this to the area of the Calci peak and create the calibration curve from this Corrected Area.

### Pictures

- name=Picture 3; shape=3.1; type=png; bytes=23414; sha256=27434a5f8d78183e5fecc7275d7c757b8fdd7615891a724221c3162511a1a326; file=[slide-108-27434a5f8d.png](source-guide-images/slide-108-27434a5f8d.png)

## Slide 109: Peak Type Field with Reference to Peak Name

### Editable slide text

Custom Field: Corrected_Area = (preCalci[Area]*1.92)+Calci[Area]

Peak Type Field with Reference to Peak Name

### Speaker notes

Peak Type field with Reference to Peak Name

This is the CF we need to do the calculation of the corrected area.

### Pictures

- name=Picture 2; shape=3; type=png; bytes=29670; sha256=cb8242e30dbf19455d89c59d49e34bb51f1d6ba2feedaa02faef86d3e0cb7580; file=[slide-109-cb8242e30d.png](source-guide-images/slide-109-cb8242e30d.png)

## Slide 110: Viewing: Results of Peak Type CF

### Editable slide text

Viewing: Results of Peak Type CF

CF result is shown for all peaks, but it is the same = 
1.92 x 8466 + 1516466

preCalci

Calci

Why is CF result shown for all peaks?

### Speaker notes

Viewing the result of the CF

The result of the CF calculation will be shown for all peaks in the peak table.

### Pictures

- name=Picture 2; shape=2; type=png; bytes=13926; sha256=b5eb42544483bd04f65066bf4286d191f8301d69911e33167faacfec9429a575; file=[slide-110-b5eb425444.png](source-guide-images/slide-110-b5eb425444.png)
- name=Picture 3; shape=7.1; type=png; bytes=23414; sha256=27434a5f8d78183e5fecc7275d7c757b8fdd7615891a724221c3162511a1a326; file=[slide-108-27434a5f8d.png](source-guide-images/slide-108-27434a5f8d.png)

## Slide 111: Using Corrected Area as Y-Value in Calibration

### Editable slide text

Using Corrected Area as Y-Value in Calibration

### Speaker notes

Using the Corrected Area as Y-Value in the Calibration Curve

We will also need to use the corrected area as the basis for the calibration curve Y-value (response).

This is done by choosing the CF under Y Value in the component table of the processing method.

The Corrected_Area (name of the CF) will then also appear on the calibration curve plot.

### Pictures

- name=Picture 5; shape=1; type=png; bytes=20213; sha256=999e5d3421ee9fc9e33bc057b423e48bc64b45d411f3953234af526e7a492196; file=[slide-111-999e5d3421.png](source-guide-images/slide-111-999e5d3421.png)
- name=Picture 2; shape=3; type=png; bytes=6992; sha256=eb2a37486795f599757e99b158fa003f44cbae46ac86e5f885ab0577175b15bd; file=[slide-111-eb2a374867.png](source-guide-images/slide-111-eb2a374867.png)
- name=Picture 10; shape=7; type=png; bytes=8302; description=revie icons 5.png; sha256=19bfee52399972d954c8d35576bbfe64376eba6762d9cade581f7869307f2c22; file=[slide-111-19bfee5239.png](source-guide-images/slide-111-19bfee5239.png)

## Slide 112: Using Corrected Area as Y-Value in Calibration

### Editable slide text

Using Corrected Area as Y-Value in Calibration

Corrected Area used to calculate Amount

preCalci

Calci

### Speaker notes

Calculating an Unknown Sample

The corrected area will then also be used to calculate the amount for the Calci peak.

There are two problems with this approach :
The result of the CF appears for all peaks.
The calculation is very specific for the specific method since we refer to specific peak names.

### Pictures

- name=Picture 4; shape=2; type=png; bytes=9347; sha256=f0f7c86879d49dd4b87cbafa23f7a9051cd29c1977a551cf135e45dc85f31f26; file=[slide-112-f0f7c86879.png](source-guide-images/slide-112-f0f7c86879.png)
- name=Picture 3; shape=6.1; type=png; bytes=23414; sha256=27434a5f8d78183e5fecc7275d7c757b8fdd7615891a724221c3162511a1a326; file=[slide-108-27434a5f8d.png](source-guide-images/slide-108-27434a5f8d.png)

## Slide 113: Creating Generic CF referring to Specific Peaks

### Editable slide text

In the Formula Entry window of the CF wizard we can choose the CCompRef1 and CCompRef2 as the ”peak names” and use the CConst1 as the multiplier.
Formula is now: (CCompRef1[Area]*CConst1)+CCompRef2[Area]

Creating Generic CF referring to Specific Peaks

### Speaker notes

Creating a more generic CF referring to specific peaks

Instead of referring to specific peak names we can use the CCompRef (Custom Component Reference).

Insted of a specific value (in this case 1.92) we can use the Cconst (Custom Constant) value.

There are 3 different CCompRef names and 7 CConst values to choose from.

In this case we will use CCompRef1 instead of preCalci and CCompRef2 instead of Calci and use CConst1 instead of the value 1.92

### Pictures

- name=Picture 2; shape=3; type=png; bytes=41554; sha256=e6e3581e3c578ab3f6a0906eedbb99565f6d741aac4a97ccd2c606b11759fe12; file=[slide-113-e6e3581e3c.png](source-guide-images/slide-113-e6e3581e3c.png)

## Slide 114: Creating Generic CF referring to Specific Peaks

### Editable slide text

Creating Generic CF referring to Specific Peaks

Corrected Area only shown for the Calci peak

### Speaker notes

Selecting the CCompRef 1 and 2 and CConst 1 in the Processing Method.

We have now created a CF that can be used with any method since the processing method defines which peaks to use and what value to multiply with. The result of the CF will also only be shown for the peak of interest.

### Pictures

- name=Picture 3; shape=1; type=png; bytes=9079; sha256=1c8168b96110370c9218524d9083292b4bf9154d8d2e2d692b64bcecae2a287c; file=[slide-114-1c8168b961.png](source-guide-images/slide-114-1c8168b961.png)
- name=Picture 3; shape=2; type=png; bytes=9079; sha256=1c8168b96110370c9218524d9083292b4bf9154d8d2e2d692b64bcecae2a287c; file=[slide-114-1c8168b961.png](source-guide-images/slide-114-1c8168b961.png)
- name=Picture 3; shape=4; type=png; bytes=9079; sha256=1c8168b96110370c9218524d9083292b4bf9154d8d2e2d692b64bcecae2a287c; file=[slide-114-1c8168b961.png](source-guide-images/slide-114-1c8168b961.png)
- name=Picture 4; shape=6; type=png; bytes=13308; sha256=d26e36c2de6170213c8e333996ff7b88976d9b660b8a7296aa59c9015fb5f5bd; file=[slide-114-d26e36c2de.png](source-guide-images/slide-114-d26e36c2de.png)
- name=Picture 10; shape=10; type=png; bytes=8302; description=revie icons 5.png; sha256=19bfee52399972d954c8d35576bbfe64376eba6762d9cade581f7869307f2c22; file=[slide-111-19bfee5239.png](source-guide-images/slide-111-19bfee5239.png)

## Slide 115: Create New Peak Type Field

### Editable slide text

Goal: Have Empower calculate Relative Retention Time for unknowns based on one selectable reference peak

Create New Peak Type Field

### Speaker notes

Create a new Peak Type custom field for Relative_RT.

Why Peak Type? This field is calculated by Empower.

What is the Data Type?

What is the Formula? 

How can the reference peak be selectable by an analyst?

## Slide 116: Create New Peak Type Field

### Editable slide text

Create New Peak Type Field

### Speaker notes

Create a new Peak Type custom field for Relative_RT.

Field Type: Peak
Data Type: Real
Click Next.

## Slide 117: Create New Peak Type Field

### Editable slide text

Create New Peak Type Field

### Speaker notes

Data Source: Calculated
Sample Type: All
Peak Type: Unknowns Only
Click OK to dialog box message
Click Next

## Slide 118: Create New Peak Type Field

### Editable slide text

Create New Peak Type Field

### Speaker notes

Create the formula by selecting from the available fields list and operations. Do not type Field Type Names or Mathematical Operators. 

The Formula:
Field= Retention Time/CCalRef1[Retention Time]
 
Double click Retention Time.
Double click /.
Double click CCalRef1.
Double click Retention Time.
Type ] from your keyboard.
Click Next

## Slide 119: Create New Peak Type Field

### Editable slide text

Create New Peak Type Field

### Speaker notes

Numeric Parameters

Maximum number of characters: 12
Tip: Remember to count the decimal point and/ or sign characters.

Precision: 3
Click Next

## Slide 120: Create New Peak Type Field

### Editable slide text

Create New Peak Type Field

### Speaker notes

Name the new field: Relative_RT
Create this field in only one Project.
Click Finish.
Click OK

## Slide 121: Where do We Input Data for…

### Editable slide text

Sample Information?
Sample Set Information?
Component Information?

Where do We Input Data for…

### Speaker notes

Summary

This gives an overview of where you enter values for Sample, Sample Set and Component Type custom fields.

### Pictures

- name=Picture 1; shape=1; type=jpg; bytes=92833; description=H:\Empower CF screen captures\ScreenHunter_01 Mar. 12 14.05.jpg; sha256=d4ef51be9a759634d618e3e08749d4a91d19e9a5ef1e53c5afbf7ee110f269a9; file=[slide-121-d4ef51be9a.jpg](source-guide-images/slide-121-d4ef51be9a.jpg)

## Slide 122: Where do We Input Data for…

### Editable slide text

Sample Information?
Sample Set Information?
Component Information?

Where do We Input Data for…

### Speaker notes

Summary

This gives an overview of where you enter values for Sample, Sample Set and Component Type custom fields.

### Pictures

- name=Picture 1; shape=1; type=jpg; bytes=92833; description=H:\Empower CF screen captures\ScreenHunter_01 Mar. 12 14.05.jpg; sha256=d4ef51be9a759634d618e3e08749d4a91d19e9a5ef1e53c5afbf7ee110f269a9; file=[slide-121-d4ef51be9a.jpg](source-guide-images/slide-121-d4ef51be9a.jpg)

## Slide 123: Input Data in Run Samples or Alter Data

### Editable slide text

Input Data in Run Samples or Alter Data

Sample Set Information

Sample Information

Component Information

### Speaker notes

Summary

This gives an overview of where you enter values for Sample, Sample Set and Component Type custom fields.

### Pictures

- name=Picture 1; shape=1; type=jpg; bytes=92833; description=H:\Empower CF screen captures\ScreenHunter_01 Mar. 12 14.05.jpg; sha256=d4ef51be9a759634d618e3e08749d4a91d19e9a5ef1e53c5afbf7ee110f269a9; file=[slide-121-d4ef51be9a.jpg](source-guide-images/slide-121-d4ef51be9a.jpg)
- name=Picture 6; shape=3; type=png; bytes=489; sha256=e55d144becce1f28923ae712c27fe541c70788b667cc32b6ffcbed6a4e58532e; file=[slide-123-e55d144bec.png](source-guide-images/slide-123-e55d144bec.png)
- name=Picture 15; shape=8; type=png; bytes=455; sha256=613ca1fbc532364b4fd6dd5de10951aad144d1b153ce256d514171f34d1c18a7; file=[slide-123-613ca1fbc5.png](source-guide-images/slide-123-613ca1fbc5.png)
- name=Picture 2; shape=12; type=jpg; bytes=45139; description=H:\Empower CF screen captures\ScreenHunter_02 Mar. 12 14.06.jpg; sha256=a082680866b41943be9b24d19d3efea66b3af0624d0510bf98c491172178a30d; file=[slide-123-a082680866.jpg](source-guide-images/slide-123-a082680866.jpg)
- name=Picture 3; shape=13; type=jpg; bytes=27354; description=H:\Empower CF screen captures\ScreenHunter_03 Mar. 12 14.06.jpg; sha256=d7fe9c1d3c2d5fa15f9acb73613600dce4a16e3d64afd680385b96889696d3a2; file=[slide-123-d7fe9c1d3c.jpg](source-guide-images/slide-123-d7fe9c1d3c.jpg)

## Slide 124: Important Info when Figuring out a CF?

### Editable slide text

What is the mathematical formula?
What fields are required?
Does Empower generate the fields by default or do they need to be created?
Are your peaks named?
Is the calculation on samples, standards? All of them?
Is this a field/ calculation needed for several products?
What type of field is it?
What type of data will be reported out from the field?

Important Info when Figuring out a CF?

### Speaker notes

Important considerations when creating custom fields

When creating custom fields it is important to figure out the details of the field before beginning in Empower. Below are some suggestions of things you might consider.

What is the mathematical formula?
What fields are required?
Does Empower generate the fields by default or do they need to be created?
Are your peaks named?
Is the calculation on samples, standards? All of them?
Is this a field/ calculation needed for several products?
What type of field is it?
What type of data will be reported out from the field?

## Slide 125: Summary

### Editable slide text

Empower allows you the flexibility to create fields not already existing in the software.
Fields can be simple user entered information.
Fields can be customized calculations.
Fields created by you can be used in customized calculations.

Summary

Speaker notes: none extracted.

## Slide 126: Custom Fields:
Advanced

### Editable slide text

Custom Fields:
Advanced

Part 2 – Advanced Custom Fields

Speaker notes: none extracted.

### Pictures

- name=Picture 2; shape=3; type=png; bytes=12315; description=Image result for empower 3 logo; sha256=30d11441d2255517303cb72cf381626a39d478e063b1ae47f7e267f8d2ad62ab; file=[slide-001-30d11441d2.png](source-guide-images/slide-001-30d11441d2.png)

## Slide 127: Content

### Editable slide text

Boolean Custom Fields
Using CCompRef and CConst 
Enumerated Custom Fields
Using CCalRef1
Using the “Use As” function
The Round and Replace functions
Custom Fields Calculations Special Values
Intersample and Intersample Summary Calculations
Syntax and rules
The “Search Order” function
The “All or Nothing” function

Content

### Speaker notes

Content

In this chapter we will look at the more advanced custom fields.

These includes are more in depth look at Boolean and 
 Enumerated Custom Fields

We will also look at InterSample and InterSample Summary 
 calculations

## Slide 128: Custom Field (Examples)

### Editable slide text

Determination of Theobromine (ThBr) and Caffeine (Caf) in tea is used in the Custom Field examples

Custom Field (Examples)

### Speaker notes

Custom Field Examples

In some of the exaples we use this separation to illustrate the 
 various custom calculations.

It is a simple separation of only two components, Theobromine 
 and Caffeine.

### Pictures

- name=Picture 6; shape=3; type=png; bytes=8433; sha256=6b0187be0b89aa3c30fff81ec222f68c1797ad8ce7fa6ae97e87c35a0d018bf6; file=[slide-128-6b0187be0b.png](source-guide-images/slide-128-6b0187be0b.png)

## Slide 129: [untitled]

### Editable slide text

Boolean Custom Field

Speaker notes: none extracted.

## Slide 130: Boolean Custom Fields

### Editable slide text

Boolean: Boolean fields allow you to translate a mathematical formula into a specific value, or answer upon processing.
 Operator(Field,Value)

Two possible answers.
1 or 0
Yes or No
Pass or Fail
User defined choice.
example 0 – out of range, 1 – within range
May translate into a field.

Boolean Custom Fields

### Speaker notes

Boolean Custom Fields

Boolean and Enumerated custom fields allow you to create very flexible and useful custom fields. Boolean and Enumerated Sample Type custom fields allow you to define a specific list of choices for the field. Boolean and Enumerated Peak and Result Type custom fields allow you to translate a mathematical formula into a specific value, or answer. Boolean fields always have two possible answers and are typically a yes/no or a true/false type situation. Enumerated fields have multiple possible answers, for example Good, Better, Best. The number of possible answers is defined by the user when creating this type of custom field.

If a Boolean expression is true (in the example above if the %Area is greater than 5) the outcome will be a 1 if not it will be a 0. The 0 and 1 value can then be translated into a text or another value.

## Slide 131: Boolean Custom Fields

### Editable slide text

Boolean Operators / Functions | 
GT( | Greater than
GTE( | Greater than or equal
LT( | Less than
LTE( | Less than or equal
EQ( | Equal
NEQ( | Not equal
EQI ( | Equal, case insensitive
NEQI( | Not equal, case insensitive
RANGE( | Range
ENUM( | Enumerated
Boolean Operators | 
& | AND
| | OR
, | Comma separator

Boolean Custom Fields

### Speaker notes

Boolean Operators/Functions

This is list of the different Boolean Operators you can use.

The AND (&) and OR (|) function are used to combine 2 or more Boolean expressions.

## Slide 132: Boolean Custom Fields – Examples

### Editable slide text

Boolean Operators / Functions | 
GT(%Area,15) | If %Area is > 15 returns a 1, if not returns a 0
GTE(%Area,15) | If %Area is ≥ 15 returns a 1, if not returns a 0
LT(%Area,15) | If %Area is < 15 returns a 1, if not returns a 0
LTE(%Area,15) | If %Area is ≤ 15 returns a 1, if not returns a 0
EQ(Name,”Acetone”) | If Name = Acetone (spelled with capital A) returns a 1, if not returns a 0
NEQ(Name,”Acetone”) | If Name ≠ Acetone (spelled with capital A) returns a 1, if not returns a 0
EQI(Name,”acetone”) | If Name = Acetone (spelling case does not matter)  /  returns a 1, if not returns a 0
NEQI (Name,”acetone”) | If Name ≠ Acetone (spelling case does not matter)  /  returns a 1, if not returns a 0
RANGE(%Area,15,20) | If %Area is > 15 and ≤ 20 (15 is not included but 20 is included) returns a 1, if not return a 0

Boolean Custom Fields – Examples

### Speaker notes

Boolean Operators/Functions, Examples

This is list shows examples of the different Boolean Operators you can use.

## Slide 133: Example 1 Boolean CF

### Editable slide text

GT(Area,20000) 
Any Area above 20000 is true
GT(ThBr[Area],20000)
The Area of ThBr above 20000 is true
GT(ThBr[Area],20000)&GT(Caf[Area],400000)
The Area of ThBr above 20000 and the Area of Caf above 400000 is true
GT(ThBr[Area],20000)|GT(Caf[Area],400000)
The Area of ThBr above 20000 or the Area of Caf above 400000 is true

Example 1 Boolean CF

### Speaker notes

Boolean Examples

Above you will find some examples of Boolean Custom Fields.

They are all testing is the Area is Greater Than some specific 
values. If the expression are true the outcome will be a 1 and this is then translated into True. If the expression is not true, the outcome is a 0, which is translated into False.

In some of the examples we are referring to specific peak names (ThBr and Caf), but in the last example we have replaced the names with CCompRef1 and the value with CConst1, to make the calculation more generic. In this case we will have to specify in the processing method what CCompRef1 and CConst1 are.

### Pictures

- name=Picture 4; shape=3; type=png; bytes=2587; sha256=101e6c6aac619b2c5443d8dd08c4564a6a75b485219a582bfe793beec5605188; file=[slide-133-101e6c6aac.png](source-guide-images/slide-133-101e6c6aac.png)

## Slide 134: Example 1 Boolean CF

### Editable slide text

GT(CCompRef1[Area],CConst1)
CCompRef1 and CConst1 are specified in the Processing Method

Example 1 Boolean CF

20000

400000

### Speaker notes

Boolean Examples

Above you will find some examples of Boolean Custom Fields.

They are all testing is the Area is Greater Than some specific 
values. If the expression are true the outcome will be a 1 and this is then translated into True. If the expression is not true, the outcome is a 0, which is translated into False.

In some of the examples we are referring to specific peak names (ThBr and Caf), but in the last example we have replaced the names with CCompRef1 and the value with CConst1, to make the calculation more generic. In this case we will have to specify in the processing method what CCompRef1 and CConst1 are.

### Pictures

- name=Picture 6; shape=3; type=png; bytes=19263; sha256=482f770fbe37ab5c3779198d6e87193ffbd1381c8f27b78f0fdb770e9fce247a; file=[slide-134-482f770fbe.png](source-guide-images/slide-134-482f770fbe.png)

## Slide 135: Example 1 Boolean CF

### Editable slide text

Example 1 Boolean CF

GT(CCompRef1[Area],CConst1)

### Speaker notes

Example 1

Here we see how the last example is created.

Since we want to calculate on peaks we use the Field Type = Peak.

The Data Type is Boolean.

In the Translation definition table we type in what the translation 
 of 0 and 1 should be, in this case False and True

### Pictures

- name=Snagit_PPTF9E; shape=2.1.1; type=png; bytes=17879; description=PPTF9E.png; sha256=150a613d56d9f13b7aa4165c548474b8f7d88bb7cbe6a7b8b196228fae79d7fb; file=[slide-135-150a613d56.png](source-guide-images/slide-135-150a613d56.png)

## Slide 136: Example 1 Boolean CF

### Editable slide text

GT(CCompRef1[Area],CConst1)

Example 1 Boolean CF

### Speaker notes

Example 1

When we process a sample the Custom Field is calculated. By using CCompRef1 and CConst1 we can have different criteria for each peak.

### Pictures

- name=Snagit_PPT181E; shape=1; type=png; bytes=74171; description=PPT181E.png; sha256=fef64f86f84333f726b579e77ab09cf5dd4cb43db634fdfc01946f5bdac45438; file=[slide-136-fef64f86f8.png](source-guide-images/slide-136-fef64f86f8.png)
- name=Snagit_PPT181E; shape=2; type=png; bytes=74171; description=PPT181E.png; sha256=fef64f86f84333f726b579e77ab09cf5dd4cb43db634fdfc01946f5bdac45438; file=[slide-136-fef64f86f8.png](source-guide-images/slide-136-fef64f86f8.png)

## Slide 137: Example 1 Boolean CF

### Editable slide text

Change CF existing to meet criteria: ThBr > 20000 and Caf > 400000

Example 1 Boolean CF

### Speaker notes

Example 1

We now want to change the criteria so both of the criterias are 
 fulfilled at the same time.

We can edit the existing custom field.

### Pictures

- name=Snagit_PPTF2CE; shape=2; type=png; bytes=107397; description=PPTF2CE.png; sha256=28ff9c2ae1dd4d9dc6316cc7c4fde135a6caf7a10e53c54507ad68312e78f68e; file=[slide-137-28ff9c2ae1.png](source-guide-images/slide-137-28ff9c2ae1.png)

## Slide 138: Example 1 Boolean CF

### Editable slide text

GT(CCompRef1[Area],CConst1)&GT(CCompRef2[Area],CConst2)

Example 1 Boolean CF

### Speaker notes

Example 1

When you open the Custom Field editor you can from here edit the formula.

By using the “&” function between the two Boolean expressions BOTH have to be fulfilled at the same time to get a 1, and a pass in this case.

### Pictures

- name=Snagit_PPT2B71; shape=1; type=png; bytes=41390; description=PPT2B71.png; sha256=7ded853a87c4c2448bf2778d74b32b2595641aafa2f4fcb768377ab5344ee1f2; file=[slide-138-7ded853a87.png](source-guide-images/slide-138-7ded853a87.png)
- name=Snagit_PPTF287; shape=3; type=png; bytes=66647; description=PPTF287.png; sha256=5a37c256cb736e92a17bdb75bffcacb4ec1d1df20771d8c425955413b25818a8; file=[slide-138-5a37c256cb.png](source-guide-images/slide-138-5a37c256cb.png)

## Slide 139: Example 1 Boolean CF

### Editable slide text

Example 1 Boolean CF

### Speaker notes

Example 1

This is how the edited Custom Field now looks.

### Pictures

- name=Snagit_PPTAB0; shape=1; type=png; bytes=42068; description=PPTAB0.png; sha256=e7a2f6f72686f491bae29eab153306e45fdf8debb6780240f9884bbcc3cfc795; file=[slide-139-e7a2f6f726.png](source-guide-images/slide-139-e7a2f6f726.png)

## Slide 140: Example 1 Boolean CF

### Editable slide text

GT(CCompRef1[Area],CConst1)&GT(CCompRef2[Area],CConst2)

Component Table

Example 1 Boolean CF

### Speaker notes

Example 1

The ThBr peaks passes the test (Area = 25800 > 20000), but 
 since the Caf Peak does not (Area = 399190 < 400000), the 
 overall outcome of the Custom Filed is a Fail.

In the example above we did not need to use both CCompRef1 and 2, but could have just used CCompRef1, since we can specify a CCompRef for each component in the component table of the processing method.

### Pictures

- name=Snagit_PPT8B0B; shape=1; type=png; bytes=77645; description=PPT8B0B.png; sha256=7946d53e07de3ba842770b67916286a757bc149e2f8a3ed63a4df37aaee6bf9a; file=[slide-140-7946d53e07.png](source-guide-images/slide-140-7946d53e07.png)
- name=Snagit_PPT8B0B; shape=2; type=png; bytes=77645; description=PPT8B0B.png; sha256=7946d53e07de3ba842770b67916286a757bc149e2f8a3ed63a4df37aaee6bf9a; file=[slide-140-7946d53e07.png](source-guide-images/slide-140-7946d53e07.png)

## Slide 141: [untitled]

### Editable slide text

Enumerated Custom Fields

Speaker notes: none extracted.

## Slide 142: Example 2: Enumerated Custom Field

### Editable slide text

Enumerated Custom field with is a data type with one or more Boolean expressions

Boolean: Only two possible outcomes/answers

Fail/Pass
GT(CCompRef1[Area],CConst1)

Enumerated: More than two possible answers: Low/Good/High

ENUM(LT(CCompRef1[Area],CConst1),
RANGE(CCompRef1[Area],CConst1,CConst2),
GT(CCompRef1[Area],CConst2))

The same functions and operators apply as in Boolean
An Enumerated CF always starts with: ENUM

Example 2: Enumerated Custom Field

### Speaker notes

Example 2, Enumerated Custom Field

A Boolean Custom Field can only have two different outcomes or 
 answers, 0 or 1 or Fail/Pass.

An Enumerated Custom Field can have more than two possible 
 outcomes or answers.

An Enumerated CF alwasy starts with ENUM, and the same 
 functions and operators as in Boolean fields apply.

In the example above we have combined 3 Boolean expressions and therefore we can have 3 possible outcomes, 0,1 and 2 which we can translate to f.ex Low/Good/High

Note: The Boolean expressions in an Enumerated field must be mutually exclusive. The field is evaluated from left to right, so when a statement is fulfilled the evaluation stops.

## Slide 143: Example 2: Enumerated Custom Field

### Editable slide text

Example 2: Enumerated Custom Field

Sometimes a Field is too big and does not fit the window.
When you get an error message:
Copy the Field to Word or Wordpad where it is easier to troubleshoot.

### Speaker notes

Example 2, Enumerated Custom Field

If a formula is incorrect you will get an error message, when you click Next in the CF wizard. 

In the case above the formula is to big to fit into the formula entry area, so you cannot view the entire formula. In this case you can copy the formula into a word editor like Word or Wordpad, to better view the whole formula.

### Pictures

- name=Snagit_PPTC917; shape=3; type=png; bytes=5851; description=PPTC917.png; sha256=7267db09739506f85ea35cba269ec5e951eb2181f4143b76b3ef7e97b5a48b52; file=[slide-143-7267db0973.png](source-guide-images/slide-143-7267db0973.png)

## Slide 144: Example 2: Enumerated Custom Field

### Editable slide text

ENUM(LT(CCompRef1[Area],CConst1),RANGE(CCompRef1[Area],CConst1,CConst2),GT(CCompRef1[Area],CConst2))

Copy to word

Copy this back to Formula field

Example 2: Enumerated Custom Field

) was missing

### Speaker notes

Example 2, Enumerated Custom Field

After copying we can see the we have missed a parenthesis at the 
 end of the formula.

We can type this in in the Word document, and then copy and 
 paste the formula back into the CF wizard.

### Pictures

- name=Picture 3; shape=1; type=png; bytes=72596; sha256=19f38950e78dbec49ad9273eb5cd1917974646b7f49b1b73795462358145279b; file=[slide-144-19f38950e7.png](source-guide-images/slide-144-19f38950e7.png)
- name=Picture 2; shape=3; type=png; bytes=2864; sha256=cc42eda9c79e42bd5951119fa0cab209d4d9403bb5c119d55101e964da42df80; file=[slide-144-cc42eda9c7.png](source-guide-images/slide-144-cc42eda9c7.png)

## Slide 145: Example 2: Enumerated Custom Field

### Editable slide text

ENUM(LT(CCompRef1[Area],CConst1),RANGE(CCompRef1[Area],CConst1,CConst2),GT(CCompRef1[Area],CConst2))

Example 2: Enumerated Custom Field

Low

High

Good

### Speaker notes

Example 2, Enumerated Custom Field

In the Translation definition Table we will have to enter 3 
 translations, since we have 3 Boolean expressions.

### Pictures

- name=Snagit_PPT10F0; shape=1; type=png; bytes=19104; description=PPT10F0.png; sha256=4a768aa0ca5de895b7a9b945cd8563fa7e0aa638157e9148a0a62192dbb6fa81; file=[slide-145-4a768aa0ca.png](source-guide-images/slide-145-4a768aa0ca.png)
- name=Picture 6; shape=4; type=png; bytes=2589; sha256=e453663ec098b78f5ff33aa923e3dfb332f6e88b199a03ac82218b86687808b6; file=[slide-145-e453663ec0.png](source-guide-images/slide-145-e453663ec0.png)

## Slide 146: Example 2: Enumerated Custom Field

### Editable slide text

ENUM(LT(CCompRef1[Area],CConst1),RANGE(CCompRef1[Area],CConst1,CConst2),GT(CCompRef1[Area],CConst2))

Example 2: Enumerated Custom Field

### Speaker notes

Example 2, Enumerated Custom Field

Since the Area of the ThBr peak is within the range 20000 to 40000 we get a Good for this peak, but the Area of the Caf peak is lower than 400000 so we get a Low for this peak.

### Pictures

- name=Snagit_PPTC60F; shape=3; type=png; bytes=57819; description=PPTC60F.png; sha256=e2889e96fcc216792530ccd393eb09830f7052653a38ab26e305ed7fce787e61; file=[slide-146-e2889e96fc.png](source-guide-images/slide-146-e2889e96fc.png)
- name=Snagit_PPTC60F; shape=5; type=png; bytes=57819; description=PPTC60F.png; sha256=e2889e96fcc216792530ccd393eb09830f7052653a38ab26e305ed7fce787e61; file=[slide-146-e2889e96fc.png](source-guide-images/slide-146-e2889e96fc.png)

## Slide 147: Example 3 Boolean CF Area_Limit/Area_GT05
(Explanation of Use As)

### Editable slide text

Example 3:
 Calculate the % Area above 0.5% of the Main Component Caf.
 First Custom Field: Area_Limit=GT(Area,(Caf[Area]*0.005))

Example 3 Boolean CF Area_Limit/Area_GT05
(Explanation of Use As)

### Speaker notes

Example 3

In this example the challenge is to calculate the %Area as a percentage of the main peak (Caf) but only for the peaks that have an Area% that is above 0.5% of the Caf peak.

First we need to create a CF that can pinpoint the peaks that have an area the is greater than 0.5% of the Caf peak.

The formula is : GT(Area,(Caf[Area]*0.005)). If the Area of a peak is greater then 0.5% of the Caf peak we will get a 1, if not we will get a 0.

### Pictures

- name=Snagit_PPT4F59; shape=5; type=png; bytes=6904; description=PPT4F59.png; sha256=cc4a158e1dba5efa63feee4db7fcdf1b9b9c096229239940bb9b1e3d60e70366; file=[slide-147-cc4a158e1d.png](source-guide-images/slide-147-cc4a158e1d.png)

## Slide 148: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

GT(Area,(Caf[Area]*0.005))

GT(Area,Caf[Area]*0.005)

Example 3 Boolean CF Area_Limit/Area_GT05

Speaker notes: none extracted.

### Pictures

- name=Snagit_PPTB1AB; shape=3; type=png; bytes=17230; description=PPTB1AB.png; sha256=36ee61ee212e0a2d83bfe9ac2b8be1f82558a4ff4e221ad018955566a36c310f; file=[slide-148-36ee61ee21.png](source-guide-images/slide-148-36ee61ee21.png)

## Slide 149: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

Example 3 Boolean CF Area_Limit/Area_GT05

### Speaker notes

Example 3

Here we see the result of the Custom Field calculation. All peaks with an area % greater than 0.5% of the main peak (Caf) gets a 1 the others get a 0.

### Pictures

- name=Snagit_PPTFEF; shape=1; type=png; bytes=84943; description=PPTFEF.png; sha256=6959ee716d926590677936a29e3b602da2eefdeb87495d84af0d96cbb9470008; file=[slide-149-6959ee716d.png](source-guide-images/slide-149-6959ee716d.png)

## Slide 150: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

Example 3 Boolean CF Area_Limit/Area_GT05

Change the Caf to CCompRef1 to make it more general

GT(Area,CCompRef1[Area]*0.005)

### Speaker notes

Example 3

If we want to make the CF more generic we can use CCompRef1 
 instead of the peak name Caf.

### Pictures

- name=Snagit_PPTACCD; shape=2; type=png; bytes=16952; description=PPTACCD.png; sha256=bdf61f7c966945a9ebf0d0251e56b1b7c0f6c027e681aca39920d2f8cd65e55f; file=[slide-150-bdf61f7c96.png](source-guide-images/slide-150-bdf61f7c96.png)

## Slide 151: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

GT(Area,(CCompRef1[Area]*0.005))

Example 3 Boolean CF Area_Limit/Area_GT05

Problem : CF only calculated for the Caf peak. Unknown peaks cannot be included !!

### Speaker notes

Example 3

The problem with this is that then the CF is only calculated for the Caf peak, since we cannot specify CCompRef for alle the unknown peaks that are not part of the component table.

### Pictures

- name=Snagit_PPT4ED7; shape=1; type=png; bytes=79800; description=PPT4ED7.png; sha256=2242ea7805952871344f589e3cc34a806d9d774c24c0b213a28795190a07ac8e; file=[slide-151-2242ea7805.png](source-guide-images/slide-151-2242ea7805.png)
- name=Snagit_PPT4ED7; shape=7; type=png; bytes=79800; description=PPT4ED7.png; sha256=2242ea7805952871344f589e3cc34a806d9d774c24c0b213a28795190a07ac8e; file=[slide-151-2242ea7805.png](source-guide-images/slide-151-2242ea7805.png)

## Slide 152: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

CCompRef
Custom Component Reference, the field in the Components table that identifies one or more peaks to be referenced when custom results are to be calculated based on the specified peaks. Use CCompRef1 to CCompRef3 where average ratios and other interpeak calculations are needed for calculation.
The field in the Processing Method window that specifies a peak to be used in a custom calculation formula applied to all components in a result.

CCalRef
Custom Calculation Reference, the field in the Processing Method window that specifies a reference peak to be used in a custom calculation that is applied to all components in a result. 
CCalRef is used for calculating interpeak custom results for all peaks in the Components table (in the Processing Method window).

So, We will Change CCompRef1 to CCalRef1

Example 3 Boolean CF Area_Limit/Area_GT05

### Speaker notes

Example 3

Above you see the explanation for how CCompRef, Cconst and 
 CCalRef are used.

So in our example we can change to CCalRef1 instead of using 
 CCompRef1.

## Slide 153: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

GT(Area,CCalRef1[Area]*0.005)

Example 3 Boolean CF Area_Limit/Area_GT05

### Speaker notes

Example 3

Here we see the changed formula.

### Pictures

- name=Snagit_PPT9CBA; shape=1; type=png; bytes=17083; description=PPT9CBA.png; sha256=2bc7330477d0948d143b9196b1d449e36c12f2eeee08628417f8f8c96c5778a1; file=[slide-153-2bc7330477.png](source-guide-images/slide-153-2bc7330477.png)

## Slide 154: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

Example 3 Boolean CF Area_Limit/Area_GT05

### Speaker notes

Example 3

In this case the CF will be calculated for all peaks.

### Pictures

- name=Snagit_PPT6F2F; shape=1; type=png; bytes=84636; description=PPT6F2F.png; sha256=41bf8261389b269ba87c23fa1a4106d3af3b3698295dcc04372b75764026a5c1; file=[slide-154-41bf826138.png](source-guide-images/slide-154-41bf826138.png)
- name=Snagit_PPT6F2F; shape=4; type=png; bytes=84636; description=PPT6F2F.png; sha256=41bf8261389b269ba87c23fa1a4106d3af3b3698295dcc04372b75764026a5c1; file=[slide-154-41bf826138.png](source-guide-images/slide-154-41bf826138.png)

## Slide 155: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

Example 3 Boolean CF Area_Limit/Area_GT05

Area*Area_Limit

Next step is to multiply the Area with Area_Limit.

Second Custom Field: Area_GT_05=Area*Area_Limit

### Speaker notes

Example 3

The next step is then to create a custom field that will only show the are of the peaks with an Area% greater than 0.5% of the main peak.

This is easy we just create a field where we multiply the Area with the Area_Limit CF we just created. This will multiply the Area with 1 if the area% is greater than 0.5% and with 0 if it is not.

### Pictures

- name=Snagit_PPT7052; shape=3; type=png; bytes=16861; description=PPT7052.png; sha256=7340b8d1fa3176a3a311bff368e526fd90541f2f93aecc5efd46af26619de89e; file=[slide-155-7340b8d1fa.png](source-guide-images/slide-155-7340b8d1fa.png)

## Slide 156: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

Example 3 Boolean CF Area_Limit/Area_GT05

Will only show areas that
are > 0.5% of the Caf area

Area_GT_05=Area*Area_Limit

### Speaker notes

Example 3

Here we see the result of this CF, called Area_GT_05.

### Pictures

- name=Snagit_PPT262F; shape=1; type=png; bytes=84735; description=PPT262F.png; sha256=531a85c4e4307d7f001c6a3856bcee72955bb1a30455b667833ede3209547354; file=[slide-156-531a85c4e4.png](source-guide-images/slide-156-531a85c4e4.png)

## Slide 157: Example 3 Boolean CF Area_Limit/Area_GT05
Use As Position

### Editable slide text

Use as: Position. Calculates with the value column then you can enter text in the translation column.
With this CF it is possible to use it in further calculations

Example 3 Boolean CF Area_Limit/Area_GT05
Use As Position

### Speaker notes

Example 3

Lets go back to the first CF we created, Area_Limit. Instead of using 0 and 1 in the translation table we would like the outcome to to be < 0.5% and > 0.5%. But we need the 0 and 1 for our further calculation in the CF “Area_GT_05”.

This can be accomplished by using the “Use As” function in the CF wizard, which is directly related to Boolean and Enumerated CF.

By setting the Use As to Position, the 0 and 1 in the value column will be used in any further calculation where this CF is used, but the translation column will be the outcome of the CF itself.

### Pictures

- name=Picture 2; shape=2.1; type=png; bytes=42385; sha256=9b623787d473c6289b4bb6dd5bf1b6c379b13bc602188325770177fc4ff502c3; file=[slide-157-9b623787d4.png](source-guide-images/slide-157-9b623787d4.png)
- name=Snagit_PPT114; shape=4; type=png; bytes=3374; description=PPT114.png; sha256=bfe35f744d2b8e27d789b7165660cb004e89146894c771e6b3b19ba9916f1781; file=[slide-157-bfe35f744d.png](source-guide-images/slide-157-bfe35f744d.png)

## Slide 158: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

GT(Area,CCalRef1[Area]*0.005)

In this case the result of the CF Area_Limit will be <0.5% or >0.5%, but in any subsequent CF calculations the value 0 or 1 will be used.

Since we use Area_Limit in the CF Area_GT_05, 0 and 1 will be used in this CF.

Example 3 Boolean CF Area_Limit/Area_GT05

### Speaker notes

Example 3

This is how the changes we make to the Area_Limit CF looks like.

### Pictures

- name=Snagit_PPT3B3A; shape=1; type=png; bytes=18172; description=PPT3B3A.png; sha256=8d5e3181dd41508fb49c1d7f907067dbea32737ce6e630c532ea7ba9c69265cc; file=[slide-158-8d5e3181dd.png](source-guide-images/slide-158-8d5e3181dd.png)

## Slide 159: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

Example 3 Boolean CF Area_Limit/Area_GT05

### Speaker notes

Example 3

Here we see the result of the new calculation. Area-Limit now shows < 0.5% or > 0.5% whereas the Area_GT_05 is the same as before.

### Pictures

- name=Snagit_PPTE706; shape=1; type=png; bytes=88957; description=PPTE706.png; sha256=496a029b675ee7bd68d6a89e0c97240e69d302bfa67a5d4b13dad9978f4229cb; file=[slide-159-496a029b67.png](source-guide-images/slide-159-496a029b67.png)

## Slide 160: Use as function

### Editable slide text

If you specified a data type as either Enum or Bool in the Data and Type Selection page, select how you want to interpret or use the item you select or selected by a formula.

Use as function

Speaker notes: none extracted.

## Slide 161: Use as Function

### Editable slide text

Position
Uses the position (index) of the selected item in the Translation definition table. It starts at 0. The first item of the translation definition table is at position 0. The second one is at position 1 and etc. When Use As of a custom field is set to Position, the selected item gets translated to a position. Specifying this kind of custom field in a subsequent formula enables the use of position based calculations.

Use as Function

### Speaker notes

The “Use As” function

There are 4 possible choices for the “Use As” function.

Position : This will use the number in the value column of the translation definition table, 0,1,2….

### Pictures

- name=Picture 3; shape=1; type=png; bytes=2418; sha256=f2469f69019ca33f88b253fd15eb9f1c008d9f2f39aef1f42bb1cffe01ae7ae9; file=[slide-161-f2469f6901.png](source-guide-images/slide-161-f2469f6901.png)
- name=Picture 2; shape=5; type=png; bytes=271825; sha256=ef097890b086b7adc4f762ca304ae1465addc8f7c4ea027eb3c87d170246a99d; file=[slide-161-ef097890b0.png](source-guide-images/slide-161-ef097890b0.png)

## Slide 162: Use as Function

### Editable slide text

Text 
Uses the selected item as a text string. This choice is useful when you need a comparison based on the selected item. The item selected is treated as text. For example, a Peak type custom field’s formula, SUM(Area*EQ(ThisCustom, “too small”)), would give you the summation of Area values of those peaks each of which ThisCustom value is translated to “too small”. ThisCustom may be an ENUM type custom field, one of which translation is “too small”.

Use as Function

### Speaker notes

The “Use As” function

There are 4 possible choices for the “Use As” function.

Text : This will use whatever there is in the translation column of the translation definition table as a text.

Value : This will use whatever there is in the translation column of the translation definition table as a value, in this case the translation must be a number.

Field : This will use the field value of the field entered in the translation column of the translation definition table , but requires that the field name is followed by a space and (fc). All the other entries in the translation definition table will be treated as text.

### Pictures

- name=Picture 3; shape=1; type=png; bytes=2418; sha256=f2469f69019ca33f88b253fd15eb9f1c008d9f2f39aef1f42bb1cffe01ae7ae9; file=[slide-161-f2469f6901.png](source-guide-images/slide-161-f2469f6901.png)

## Slide 163: Use as Function

### Editable slide text

Value
Interprets the selected item as a value. Items entered to the translation definition table must be a number. The field values generated by a custom field of this type can be used in a subsequent formula.

Field
Will use the value of a field if the field name is entered in the translation table followed by a space and (fc)

Use as Function

### Speaker notes

The “Use As” function

There are 4 possible choices for the “Use As” function.

Text : This will use whatever there is in the translation column of the translation definition table as a text.

Value : This will use whatever there is in the translation column of the translation definition table as a value, in this case the translation must be a number.

Field : This will use the field value of the field entered in the translation column of the translation definition table , but requires that the field name is followed by a space and (fc). All the other entries in the translation definition table will be treated as text.

### Pictures

- name=Picture 2; shape=3; type=png; bytes=2387; sha256=7a65a1d5a33d3d6d09803cb360019967d7540a902d724fb4f9594cf9684ca95c; file=[slide-163-7a65a1d5a3.png](source-guide-images/slide-163-7a65a1d5a3.png)
- name=Picture 3; shape=5; type=png; bytes=3809; sha256=0b501a6c0ec052c155b6d40dca972e26dd1615ebdf158f5bed554fb8bc6bcfb0; file=[slide-163-0b501a6c0e.png](source-guide-images/slide-163-0b501a6c0e.png)

## Slide 164: Use as Function Summary

### Editable slide text

Use as
Position: Custom field result shows the things you put in translation. If this custom field is used later in another custom field calculation, it will use the value number in the calculation.
Value: Custom field result shows the things you put in translation. If this custom field is used later in another custom field calculation, it will use the translation value in the calculation.

Use as Function Summary

Speaker notes: none extracted.

### Pictures

- name=Picture 2; shape=3; type=png; bytes=13252; sha256=1536cfd78a8264bd21c26fd1f5137e65b188cba9ef52b1a2c128dfbb25a7a6b0; file=[slide-164-1536cfd78a.png](source-guide-images/slide-164-1536cfd78a.png)

## Slide 165: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

Next we create a Custom Field to summarize the Area above 0.5%

Third Custom Field Sum_Area_GT05=SUM(Area_GT_05)

Example 3 Boolean CF Area_Limit/Area_GT05

SUM(Area_GT_05)

### Speaker notes

Example 3

Lets return to our example.

The next step in the process is to create a custom filed that can sum up all the area of the peaks with an area% greater than 0.5%. We already have afiled that only shows area for peaks with an area% above 0,5%, so we simply use the SUM operator on ths field. We name this field Sum_Area_GT05

Since we only have 1 result for the entire chromatogram this is a result type CF.

### Pictures

- name=Snagit_PPTD424; shape=3; type=png; bytes=17053; description=PPTD424.png; sha256=9ac28ad2d2bfdcea5bace41f64a4b762eca1e1e66251b7009f8bd392671e94ae; file=[slide-165-9ac28ad2d2.png](source-guide-images/slide-165-9ac28ad2d2.png)

## Slide 166: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

Example 3 Boolean CF Area_Limit/Area_GT05

The result of the CF is
found in the Result window
in review

### Speaker notes

Example 3

To view the result of this CF we need to go to the result window of 
 Review.

### Pictures

- name=Picture 2; shape=2; type=png; bytes=49724; sha256=b12294a5ade4056858fe847239196de111a479bb2c99b0bf44e77066269a570c; file=[slide-166-b12294a5ad.png](source-guide-images/slide-166-b12294a5ad.png)
- name=Picture 3; shape=3; type=png; bytes=9385; sha256=00fa2d685d278b28515774a206f98ee39e76eab2cc19c611640211e21761218b; file=[slide-166-00fa2d685d.png](source-guide-images/slide-166-00fa2d685d.png)

## Slide 167: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

Finally we need to create the custom filed that calculates the Area of the peaks over 0.5% of the Caf peak as a percentage of the total area of the peaks > 0.5%.

Fourth Custom Field: 
Custom Field Pct_Area_Gt05=Area_GT_05/Sum_Area_Gt05*100

Example 3 Boolean CF Area_Limit/Area_GT05

### Speaker notes

Example 3

Finally we need the CF that will calculate the area of the peaks with an Area% above 0.5% as a percentage of the total area of these peaks.

## Slide 168: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

Area_GT_05/Sum_Area_GT05*100

Area_GT_05/Sum_Area_Gt05*100

Example 3 Boolean CF Area_Limit/Area_GT05

### Speaker notes

Example 3

This is what the final CF, Pct_Area_GT05, looks like.

### Pictures

- name=Snagit_PPTB02C; shape=2; type=png; bytes=17576; description=PPTB02C.png; sha256=50c580e31466e04f270dc3c794a5dcbb94e98ee0cc62bdc34abd3b56fe06178a; file=[slide-168-50c580e314.png](source-guide-images/slide-168-50c580e314.png)

## Slide 169: Example 3 Boolean CF Area_Limit/Area_GT05

### Editable slide text

Example 3 Boolean CF Area_Limit/Area_GT05

### Speaker notes

Example 3

Here we se the results for the 3 peak fields we have created.

### Pictures

- name=Picture 2; shape=2; type=png; bytes=68399; sha256=b38642c6c5cd3a83999afedd93342d2275e2aae6ae352f661a8da3e5d5350134; file=[slide-169-b38642c6c5.png](source-guide-images/slide-169-b38642c6c5.png)
- name=Picture 3; shape=3; type=png; bytes=11493; sha256=6d9f71af23fba3ff49f77ec85602b5675ae73f77d0f58df4754ca3b0a200c9a1; file=[slide-169-6d9f71af23.png](source-guide-images/slide-169-6d9f71af23.png)

## Slide 170: (fc) in Boolean/Enumerator Expressions
Use As Field

### Editable slide text

Ways of replacing Values with Text for one criteria but present the actual value for another.
i.e. LOD (Limit Of Detection)
If signal to noise is less than 10, show “Below LOD”
If signal to noise is Greater than or equal to 10 show the signal to noise value
i.e. Reaction monitoring
If Amount is too Low, show “Keep Mixing”
If Amount is too High, show “over cooked”
If Amount is just right then show the Concentration

(fc) in Boolean/Enumerator Expressions
Use As Field

### Speaker notes

The Use As Field function

Lets return to the function “Use As”, when we use Field.

In the first example above we use the signal to noise (s/n) calculation to show if the peak is below the LOD. If the s/n is lower then 10 we want the text “Below LOD”, but if the s/n is greater than or equal to 10 we want the CF to show the actual s/n value.

In the second example we are monitoring a reaction. If amount is to low we want the text “Keep Mixing” and if the Amount is to high we want the text “Over cooked”, but if the amount is just right we want the vale of the amount.

## Slide 171: Example 4 (fc) in Boolean Expressions
Use As Field

### Editable slide text

Custom Field LODAcceptance
GTE([s/n],10)
“[s/n]” is the default Empower calculation for signal to noise as defined in the Suitability tab of the processing method.
This will return the phrase “Below LOD” if s/n is less than 10 and the actual s/n if s/n is greater than or equal to 10

Example 4 (fc) in Boolean Expressions
Use As Field

### Speaker notes

Example 4

The first example is simple. We just create the CF LODAcceptance with the formula GTE([s/n],10).

In the translation definition table we enter Below LOD for the 0 value, and [s/n] (fc) for the 1 value.

Remember that we need to put “Field” in the Use As drop down 
list.

### Pictures

- name=Picture 2; shape=4; type=png; bytes=27872; sha256=13d78abd28b4d5473d1e5e152955a7e12f39fcd46fe357da41125d20b7f34527; file=[slide-171-13d78abd28.png](source-guide-images/slide-171-13d78abd28.png)
- name=Picture 7; shape=7; type=png; bytes=27872; sha256=13d78abd28b4d5473d1e5e152955a7e12f39fcd46fe357da41125d20b7f34527; file=[slide-171-13d78abd28.png](source-guide-images/slide-171-13d78abd28.png)

## Slide 172: Example 4 (fc) in Boolean Expressions
Use As Field

### Editable slide text

Viewing Results in Peaks Table (Review)

Example 4 (fc) in Boolean Expressions
Use As Field

### Speaker notes

Example 4

Here we see the result of the CF calculation.

### Pictures

- name=Picture 2; shape=1; type=png; bytes=88420; sha256=8e29b1724b31cf578ee65fef4bcedd26a928ed165e345da858d0f272584f2cdc; file=[slide-172-8e29b1724b.png](source-guide-images/slide-172-8e29b1724b.png)
- name=Picture 3; shape=7; type=png; bytes=2539; sha256=a822b6e8349fca19b13817c64ee9ce92a2e889cdc85570f5518b76e310f4b01c; file=[slide-172-a822b6e834.png](source-guide-images/slide-172-a822b6e834.png)

## Slide 173: Example 5 (fc) in Enumerated Expressions
Use As Field

### Editable slide text

Custom Field ReactionMonitor
ENUM(LT(Amount,150),RANGE(Amount,150,152),GT(Amount,152))
You must use the ENUM Operator at the start of Enumerator custom fields
Observe that there is a space between the field and (fc)

Example 5 (fc) in Enumerated Expressions
Use As Field

### Speaker notes

Example 5

In the second example we need to use an Enumerated CF, 
 because we ant 3 options/answers.

In this case we want the Amount to be between 150 and 152.

In the translation table we enter Amount (fc) and remember to 
 use Field in the Use As function.

### Pictures

- name=Picture 2; shape=1; type=png; bytes=31313; sha256=a7e70bb0015764132f97e05e066023288e9e8408dd25191e7671b9a00f0baa26; file=[slide-173-a7e70bb001.png](source-guide-images/slide-173-a7e70bb001.png)
- name=Picture 3; shape=6; type=png; bytes=3809; sha256=0b501a6c0ec052c155b6d40dca972e26dd1615ebdf158f5bed554fb8bc6bcfb0; file=[slide-163-0b501a6c0e.png](source-guide-images/slide-163-0b501a6c0e.png)

## Slide 174: Example 5 (fc) in Enumerated Expressions
Use As Field

### Editable slide text

Example 5 (fc) in Enumerated Expressions
Use As Field

### Speaker notes

Example 5

On this and the next page we see the 3 different outcomes of this 
 CF.

### Pictures

- name=Picture 2; shape=2; type=png; bytes=21136; sha256=ce0fe574fdc2a3b29b396bbc329bc1d6db849281d52ae546f8f98f2da9eb9057; file=[slide-174-ce0fe574fd.png](source-guide-images/slide-174-ce0fe574fd.png)

## Slide 175: Example 5 (fc) in Enumerated Expressions
Use As Field

### Editable slide text

Example 5 (fc) in Enumerated Expressions
Use As Field

### Speaker notes

Example 5

### Pictures

- name=Picture 2; shape=2; type=png; bytes=22699; sha256=1b04820e107a336eaf594bf04c95eb4868a430740469914c04fc24530e7b58c2; file=[slide-175-1b04820e10.png](source-guide-images/slide-175-1b04820e10.png)
- name=Picture 3; shape=3; type=png; bytes=21523; sha256=f8421480ae50b99526c5134ff71174841ce60576a8c2f9ea0bdfdc14af1a0e77; file=[slide-175-f8421480ae.png](source-guide-images/slide-175-f8421480ae.png)

## Slide 176: Round Function

### Editable slide text

The rounding function allows you to round large numbers in calculations. You can use the round function in the New Custom Field Wizard – Formula Entry page.

Syntax: ROUND(field,#) 

For example: 
ROUND(25.678,0) will be rounded to 26
ROUND(256575.36,3) will be rounded to 257000
ROUND(25.657536,-3) will be rounded to 25.658

Round Function

176

### Speaker notes

The ROUND Function

The ROUND function ROUND (field,#) allows you to round large numbers in calculations. You can use this function in the New Custom Field Wizard – Formula Entry page. For example, ROUND(25.678,0) is rounded to 26; ROUND(256575.36,3) is rounded to 267000. The # symbol can represent a negative number. For example, ROUND(123.456789,-3) gives a result of 123.457.

## Slide 177: Round Example: Plate_Count

### Editable slide text

Round Example: Plate_Count

Round Custom Field: Plate_Count=ROUND(EP Plate Count,2)

### Speaker notes

ROUND, Example 6

We create a CF to round of the Plate count calculation to whole hundreds.

Formula is ROUND(EP Plate Count,2). EP Plate Count is a standard system suitability calculation in Empower.

### Pictures

- name=Picture 4; shape=2; type=png; bytes=40733; sha256=0ac527760eac13471c8a6d97cedd209acc051409d612c639da41572810401d0d; file=[slide-177-0ac527760e.png](source-guide-images/slide-177-0ac527760e.png)
- name=Picture 5; shape=3; type=png; bytes=41202; sha256=6d804ab0b7b1017cc0aa8188dbc06da5dc60785ae0580188ec6a0c10135a1d1b; file=[slide-177-6d804ab0b7.png](source-guide-images/slide-177-6d804ab0b7.png)

## Slide 178: Round Example: Plate_Count

### Editable slide text

Round Example: Plate_Count

### Speaker notes

ROUND, Example 6

Here we see the results of the CF calculation.

### Pictures

- name=Picture 3; shape=2; type=png; bytes=47034; sha256=e63e0d036398558e7ec7738ce4841a6800d26eee73da5b4c17e4ab6845f6e1e5; file=[slide-178-e63e0d0363.png](source-guide-images/slide-178-e63e0d0363.png)
- name=Picture 4; shape=3; type=png; bytes=975; sha256=c7d543750700506df66849bc24d36bfee6fa4cc33c0ecc48ad1bdbbb1b616f53; file=[slide-178-c7d5437507.png](source-guide-images/slide-178-c7d5437507.png)

## Slide 179: Example 7: Round Used with Boolean

### Editable slide text

Example 7: Round Used with Boolean

This is rounded to 0 decimals = 16

Speaker notes: none extracted.

### Pictures

- name=Picture 2; shape=2; type=png; bytes=6812; sha256=ceb47c4cfa14457da74d2dca31056d26c93232c34816c394dc7e202731b7adb0; file=[slide-179-ceb47c4cfa.png](source-guide-images/slide-179-ceb47c4cfa.png)
- name=Picture 3; shape=3; type=png; bytes=2673; sha256=d1ac7f61a1840aaf1197020afc082374d80df2953cdb8339df11fe7d86dfbe37; file=[slide-179-d1ac7f61a1.png](source-guide-images/slide-179-d1ac7f61a1.png)

## Slide 180: Replace Function

### Editable slide text

This function replaces an invalid / null result with another value. 
Syntax :
REPLACE(Field,Value)

Example : REPLACE(Amount,0)

Replace Function

### Speaker notes

The REPLACE Function

This function is designed specifically to replace a null value with zero. This may be required when nesting custom fields (incorporating a custom field in another custom field) because if a null value occurs, subsequent fields can not be calculated. If the null value is replaced with zero, subsequent fields can be calculated. Also, when using a LIMS, it may be necessary to replace null values. 

For example, REPLACE (Amount,0) replaces the value of an 
Amount field with 0 when Amount is invalid/null. An invalid value will be converted to a valid value.

## Slide 181: Example 8 Replace

### Editable slide text

Amount is not calculated for missing peaks 
We want an Amount value of 0 for the missing peaks

Example 8 Replace

### Speaker notes

REPLACE, Example 7

In this example Amount is not calculated for the two missing peaks, Benzoic Acid and Sorbic Acid, so we get a blank field for Amount for these.

We can convert the blank (invalid) field to a 0.

### Pictures

- name=Picture 2; shape=3; type=png; bytes=23303; sha256=9e96edfed6a7a5282a5784c396a985fa5929a5713b98f7f9d1325dd44287405f; file=[slide-181-9e96edfed6.png](source-guide-images/slide-181-9e96edfed6.png)

## Slide 182: Example 8 Replace

### Editable slide text

Custom Field: Amount_Final = REPLACE(Amount,0)

Example 8 Replace

### Speaker notes

REPLACE, Example 7

This is how the CF calculation looks.

The formula is just REPLACE(Amount,0).

To calculate this for the missing peaks we need to put a tick mark 
 in the “Missing Peak” box.

Since this CF is only relevant for Unknown samples we select 
 “Unknowns Only” in the Sample Type drop down list.

The name of the field is Final_Amount

### Pictures

- name=Picture 2; shape=3; type=png; bytes=29328; sha256=a4a45ffe7c6298ab174ae8c0515ca6532540d9ab39f0cccc291863ddf80eaca7; file=[slide-182-a4a45ffe7c.png](source-guide-images/slide-182-a4a45ffe7c.png)

## Slide 183: Example 8 Replace

### Editable slide text

Example 8 Replace

Invalid Amount value replaced by 0

### Speaker notes

REPLACE, Example 7

Here we see that we now get a 0 for the Amount for the two 
 missing peaks.

### Pictures

- name=Picture 2; shape=2; type=png; bytes=25543; sha256=6f84545251f3f6488840dda12666f9aafb48450316d9920c422e4aecc07d580b; file=[slide-183-6f84545251.png](source-guide-images/slide-183-6f84545251.png)

## Slide 184: Custom Field Calculations Special Values

### Editable slide text

Special Values

Custom Field Calculations Special Values

Value | Translation
-50000 | Blank (Null)
-60000 | ND
-60001 | N.D.
-60002 | Not Detected
-60003 | N/D
-60004 | NA
-60005 | Not Found
-60006 | Below Detection Limit
-60007 | BDL
-60008 | Below Peak Quantitation Limit
-60009 | BPQL

### Speaker notes

Special Values

In this slide You can see some special values you are allowed to use in Empower custom fields. This means that if you for instance get a calculation to give the result -60002 then Empower returns the answer ”Not Detected”. In this way you can get both calculated results together with text results.

The negative values will never appear in any regular calculation in Empower.

## Slide 185: Example 9 Custom Fields – Special Values

### Editable slide text

Example: Special Value Calculation
LOD = 0.2, LOQ = 0.6
If Amount > LOQ, then return Amount
If Amount < LOD, then return “Below Detection Limit””
If LOD ≤ Amount ≤ LOQ, then return “Below Peak Quantitation Limit”

Formula: 
GT(Amount, 0.6)*Amount + LT(Amount, 0.2)*-60006 + RANGE(Amount, 0.2, 0.6)*-60008

Example 9 Custom Fields – Special Values

Value | Translation
-60006 | Below Detection Limit
-60008 | Below Peak Quantitation Limit

### Speaker notes

Special Values, Example 8

This example shows how to use some of these special values in pracsis. We want to check whether our amount are above the LOQ or below the LOQ. Depending on this we would like Empower to return either the amount or ”Not Detected”. The third possibility is that the amount is above limit of detection but below limit of quantitation, then we want the answer ”Below Peak Quantification Limit”.

In the formula we can see the first part of the formula shows that the amount will be compared to the value of 0.6 which was the LOQ then the amount is compared to the value of 0.2 which is the LOD and finally the amount is compared to the range of 0.2 to 0.6 to determine if the amount is below peak quantitation limit.

In this way we do not have to sit and check all our result and compare them to some values. Empower will do the job.

## Slide 186: Example 9 Custom Fields – Special Values

### Editable slide text

Example 9 Custom Fields – Special Values

Do not need to use Translation Table!

### Speaker notes

Special Values, Example 8

Here we see the CF named Final_Amount. We calculate for 
 Uknown samples only.

Below we see the outcome for 5 different samples. For the first two we get the Amount since it is above 0.6 which was the quantitation limit. For sample C and E we get ”Below Detection Limit” and for sample D we get Below Peak Quantitation Limit”.

### Pictures

- name=Picture 3; shape=2; type=png; bytes=30068; sha256=ec727ba9e240b490098ee1831aa21462f6277def57dba32b50fb57fdae587fa1; file=[slide-186-ec727ba9e2.png](source-guide-images/slide-186-ec727ba9e2.png)
- name=Picture 2; shape=5; type=png; bytes=65661; sha256=877875c9e7c3f8bffd99faf4384e9e23c5374575f6bc94831e8ad21f4d6819b3; file=[slide-186-877875c9e7.png](source-guide-images/slide-186-877875c9e7.png)

## Slide 187: [untitled]

### Editable slide text

Intersample Calculations

Speaker notes: none extracted.

## Slide 188: Outline

### Editable slide text

Intersample Custom Fields Calculations
Syntax and Rules
Examples
Summary Intersample Custom Fields Calculations
Syntax and Rules
Examples

Outline

Speaker notes: none extracted.

## Slide 189: Intersample Calculations – Syntax & Rules

### Editable slide text

Syntax:
Label.Injection.Channel(Field)

S0101.1.ACQUITY TUV ChA(Area)

Example:
S0101.1.ACQUITY TUV ChA(Area)
This would take the area of this TUV channel of the first injection of the sample labeled “S0101” and plug it into the calculation.

Intersample Calculations – Syntax & Rules

### Speaker notes

Intersample Calculations, Syntax

There are three components to the syntax:
Label: Defined within the sample set method before acquiring data, you can also add sample labels after data acquisition using Alter Sample.
Injection: Within the same row or sample label, you can have multiple injections. You can select among these by specifying the injection(s) of interest.
Channel: Within the same sample label and injection, you can have multiple channels. You can select among these by specifying the channel(s) of interest.

Case and spelling must match.

## Slide 190: Intersample Calculations – Syntax & Rules

### Editable slide text

Syntax:
Label.Injection.Channel(Field)

S0101.1.ACQUITY TUV ChA(Area)

Comments:
You can omit parts of the syntax but don’t omit the periods
Label.Inj.(Field) = No Specific Channel
Label..Channel(Field) = No Specific Injection
Label..(Field) = No Specific Injection or Channel
.Inj.(Field) = No Specific Label or Channel
..(Field) = No Specific Label or Injection or Channel

Intersample Calculations – Syntax & Rules

### Speaker notes

Intersample Calculations, Syntax

There are three components to the syntax:
Label: Defined within the sample set method before acquiring data, you can also add sample labels after data acquisition using Alter Sample.
Injection: Within the same row or sample label, you can have multiple injections. You can select among these by specifying the injection(s) of interest.
Channel: Within the same sample label and injection, you can have multiple channels. You can select among these by specifying the channel(s) of interest.

Case and spelling must match.

## Slide 191: Intersample Calculations – Syntax & Rules

### Editable slide text

Wildcard: % 
used to replace all characters (* in DOS)
Wildcard: ? 
used to replace one character (like in DOS)
SAME 
used to create one result with the same label and/or 
injection and/or channel

Example : SAME.1.ACQUITY TUV ChA(Area)

Intersample Calculations – Syntax & Rules

### Speaker notes

Intersample Calculations, Syntax

Wildcards – The “%” wildcard specified all labels, injections or channels when used in the appropriate position of the inter-sample syntax. The “?” wildcard replaces one character and can also be used in any of the three positions of the inter-sample syntax.

SAME functionality – When using inter-sample calculations, SAME can be specified for the label, injection or channel descriptor in the inter-sample syntax. For example, SAME.1.486 requests the software to use a result containing the same label (and injection 1, channel 486) as the current result. Std.1.SAME requests the software to use a result of the same channel (and label Std and injection 1) as the current result.

## Slide 192: Intersample Calculation
Example 1 Blank Area Subtraction

### Editable slide text

In the Blank we have a peak that interferes with caffeine. To correct this we subtract the Blank area from the Standard and Sample areas

Intersample Calculation
Example 1 Blank Area Subtraction

We create CF:
Area_Subtr=Area-(BL..(Area))

And use this in the Comp. Table as the Y-value for the Calibration Curve

### Speaker notes

Intersample Calculation, Example 1

In this example we have a peak in the blank injection that elutes at the same time as the Caffeine peak in the standards and samples.

We need to subtract the area of the peak in the blank injection from all standards and samples.

Formula Area-(BL..(Area)).

We also need to use this corrected area as the basis for our calibration curve (Y-value).

### Pictures

- name=Picture 3; shape=3; type=png; bytes=40751; sha256=ea2a6b3bc28cca466a82d0deb6fdbb1642f071ae8b8300c69e92caf2c539d798; file=[slide-192-ea2a6b3bc2.png](source-guide-images/slide-192-ea2a6b3bc2.png)
- name=Picture 5; shape=4; type=png; bytes=40751; sha256=ea2a6b3bc28cca466a82d0deb6fdbb1642f071ae8b8300c69e92caf2c539d798; file=[slide-192-ea2a6b3bc2.png](source-guide-images/slide-192-ea2a6b3bc2.png)

## Slide 193: Intersample Calculation
Example 1 Blank Area Subtraction

### Editable slide text

Intersample Calculation
Example 1 Blank Area Subtraction

Area-(BL..(Area))

Use Result Set Only to be sure that the Blank injection comes from the same Sample Set.
Must process the Sample/Result Set

### Speaker notes

Intersample Calculation, Example 1

Here is the CF we need to create. In this case we do not 
 need to specify the injection and channel.

Search Order Functionality – When using inter-sample calculations, the Search Order drop-down list allows you to specify where, and the order in which the software looks to find the sample that is referenced with the Label.Inj.Channel

Here we specify “Result Set Only” to make sure we use the blank injection from the current sample set/result set.

We also need to remember to label the blank injection BL in the sample set.

### Pictures

- name=Picture 2; shape=3; type=png; bytes=28805; sha256=36a3aed0dd095b61166cf8aead2a8dbc8cea46678cd6ea1d1dc3da1b098441d3; file=[slide-193-36a3aed0dd.png](source-guide-images/slide-193-36a3aed0dd.png)
- name=Picture 2; shape=5; type=png; bytes=287492; sha256=152d7dbb9a604f4dbf8faf37e9cd112b92387800992c680b8f6edd52aa203314; file=[slide-193-152d7dbb9a.png](source-guide-images/slide-193-152d7dbb9a.png)
- name=Picture 5; shape=9.1.1; type=png; bytes=17705; sha256=a3e3da4ce88e771f827c27b4d9405f004c4b734c2f32e75c81136cba7bcfd2bb; file=[slide-193-a3e3da4ce8.png](source-guide-images/slide-193-a3e3da4ce8.png)

## Slide 194: Intersample Calculation
Example 1 Blank Area Subtraction

### Editable slide text

Intersample Calculation
Example 1 Blank Area Subtraction

### Speaker notes

Intersample Calculation, Example 1

In the component table we need to specify the CF Corr_Area as 
 the Y-Value for the calibration curve. 

We also need to process the Blank injection first.

Here we see the result of the calculation. The Corr_Area for the blank injection for the caffeine peaks is 0, because we subtract the area from itself.

For the we see the Corr_Area for the Caffeine peak. Also notice that the area for the Theobromine peak has not been corrected since we have no peak at the retention time for this peak in the blank injection.

### Pictures

- name=Snagit_PPT31BE; shape=1; type=png; bytes=36991; description=PPT31BE.png; sha256=e31726dfad3da94aa3b2f279deb2f950277948304bc84dfcfe5f739bef19db24; file=[slide-194-e31726dfad.png](source-guide-images/slide-194-e31726dfad.png)
- name=Snagit_PPT3823; shape=3; type=png; bytes=48527; description=PPT3823.png; sha256=5366714ab9c98cb0b7ffcf10dc843acb2bc9607944e3ddb738da6dcf41599237; file=[slide-194-5366714ab9.png](source-guide-images/slide-194-5366714ab9.png)

## Slide 195: Intersample Calculation
Example 1 Blank Area Subtraction

### Editable slide text

Intersample Calculation
Example 1 Blank Area Subtraction

### Speaker notes

Intersample Calculation, Example 1

Looking at the calibration curve we see that the value of the Y-axis is Corr_Area.

### Pictures

- name=Picture 2; shape=1; type=png; bytes=33758; sha256=6f2888029f88db351fb8e94865c14015ba64ada61cb8b66df05266945054bb2b; file=[slide-195-6f2888029f.png](source-guide-images/slide-195-6f2888029f.png)
- name=Picture 5; shape=6; type=png; bytes=536; sha256=af051ca59e5448d1916bd303a9ff4eb4c8ad961712d61c4948794f71257cc646; file=[slide-195-af051ca59e.png](source-guide-images/slide-195-af051ca59e.png)

## Slide 196: Intersample Custom Calculation – Search Order

### Editable slide text

Result Set First 
Search current result set first, if target not found, then search outside 
Must contain the label descriptor (or a ‘%’ in place of the label)
Result Set Only 
Only search within the current result set
Cannot do individual processing
Outside First 
Search outside of the result set first, if target not found, then search inside
Must contain the label descriptor (or a ‘%’ in place of the label)
Outside Only
Use outside results - results that are not part of the current result set
Must contain the label descriptor (or a ‘%’ in place of the label)

Intersample Custom Calculation – Search Order

### Speaker notes

Search Order Functionality 
Available choices are the following:

Result Set First – Inter-sample calculations are performed on the current result set first. If no targeted result is found in the current result set, the software looks outside of the result set to find a targeted result. When using this selection, the intersample syntax must contain the label descriptor (or a ‘%’ in place of the label when performing an inter-sample summary calculation) in order to search outside of the current result set..
Result Set Only – Inter-sample calculations are performed only within the current result set. If the result being processed is not part of a result set, this choice is not valid and the custom field will not be calculated.
Outside First – Inter-sample calculations are performed outside of the result set first. If no targeted result if found outside of the result set, the software looks inside the current result set to find a targeted result. When using this selection, the inter-sample syntax must contain the label descriptor (or a ‘%’ in place of the label when performing an inter-sample summary calculation) in order to search outside of the current result set.
Outside Only – Inter-sample calculations are performed using results that are not part of the current result set. When using this selection, the inter-sample syntax must contain the label descriptor (or a ‘%’ in place of the label when performing an inter-sample summary calculation) in order to search outside of the current result set.

## Slide 197: Intersample Calculation – Rules of Syntax

### Editable slide text

A sample set is processed in the order the samples were run. 
If no Summary function is used, results that come after the current result are never considered.
If no Summary function is used, searching stops when the targeted result with the highest Result ID is found. If the current result matches the inter-sample syntax no search will be conducted and the current result will be used. 
No label assumes the current sample line of the current result set. 
The search order has no effect if a label is not specified.
No channel name always refers to the current channel name.
An intersample calculation with no label portion of the syntax never produces a result for an individually processed channel.

Intersample Calculation – Rules of Syntax

### Speaker notes

Intersample Calculation, Rules of Syntax

There are several rules of syntax when performing Intersample 
 calculations.

Note : These rules also applies to Intersample Summary calculations.

## Slide 198: Intersample Calculation – Rules of Syntax

### Editable slide text

A Search order set to Result Set Only never produces a result for an 
individually processed channel.
A search order set to Result Set First, Outside First or Outside Only never produces a value for an inter-sample calculation if the label portion of the syntax is not present.
When the injection and label portions of the inter-sample syntax are not specified, the current injection is used as the targeted result.
When the label portion is specified, and the injection is not specified, in a non-summary function, the software uses the most recent result before the current result that matches the syntax.

Intersample Calculation – Rules of Syntax

### Speaker notes

Intersample Calculation, Rules of Syntax

In the following pages we will try and illustrate the rules with 
 examples.

## Slide 199: Rules of Syntax – Examples

### Editable slide text

Rule 2: If no Summary function is used, searching stops when the targeted result with the highest Result ID is found. If the current result matches the inter-sample syntax no search will be conducted and the current result will be used. 
Rule 8: When the injection and label portions of the inter-sample syntax are not specified, the current injection is used as the targeted result.

Rules of Syntax – Examples

### Speaker notes

Rules of Syntax, examples

Here we have created 4 different intersample calculation CF. For simplicity it is not actually calculation as we have just specified Amount as the filed we want to use.

In the first field ..(Amount) we have not specified a label or and injection. In this case rule 8 applies, which tells us that the current injection is used as the targeted result. 

In the second and third field we have specified injection 1 and 2 respectively. So for the inj. 1 field we get the amount for injection 1 for both injection 1 and 2 results. For the inj. 2 field we get the amount for inj. 2 and nothing for inj. 1 since inj.2 has not yet been calculated.

In the last field we have specified the injection, though as the wildcard %. In this case rule 2 applies which says : If the current result matches the inter-sample syntax no search will be conducted and the current result will be used.

### Pictures

- name=Picture 2; shape=1; type=png; bytes=78141; sha256=1f2819c37727ba3a43c7ae076fd5b519831e58dbc8374937acb3d6f36c1caf32; file=[slide-199-1f2819c377.png](source-guide-images/slide-199-1f2819c377.png)

## Slide 200: Rules of Syntax – Examples

### Editable slide text

Rule 9: When the label portion is specified, and the injection is not specified, in a non-summary function, the software uses the most recent result before the current result that matches the syntax.

Rules of Syntax – Examples

### Speaker notes

Rules of Syntax, examples

Here we have two different syntaxes.

In the first we have specified the label (U%) but not the injection, so rule 9 applies, saying that the most recent result before the curretn result will be used. So for line/sample 2 in the results table we get the result (Amount) for line/sample 1, and so on. For line/sample 1 we do not get any result.

In the second CF we have specified both the label (U%) and the injection (%), so we get the result (Amount) for each line/sample.

### Pictures

- name=Picture 2; shape=3.1.1; type=png; bytes=78141; sha256=1f2819c37727ba3a43c7ae076fd5b519831e58dbc8374937acb3d6f36c1caf32; file=[slide-199-1f2819c377.png](source-guide-images/slide-199-1f2819c377.png)
- name=Picture 3; shape=3.1.2; type=png; bytes=78141; sha256=1f2819c37727ba3a43c7ae076fd5b519831e58dbc8374937acb3d6f36c1caf32; file=[slide-199-1f2819c377.png](source-guide-images/slide-199-1f2819c377.png)
- name=Picture 20; shape=3.10; type=png; bytes=78141; sha256=1f2819c37727ba3a43c7ae076fd5b519831e58dbc8374937acb3d6f36c1caf32; file=[slide-199-1f2819c377.png](source-guide-images/slide-199-1f2819c377.png)

## Slide 201: Rules of Syntax – Examples

### Editable slide text

Rules of Syntax – Examples

Rule 8: When the injection and label portions of the inter-sample syntax are not specified, the current injection is used as the targeted result.

### Speaker notes

Rules of Syntax, Examples

Here we have created 2 different CF with the Average function, to calculate the average amount for two injections from the same vial. We are comparing these results with the one we created previously that was not a summary calculation. Note that since we have a summarize custom field function in the sample set we get results for all the “standard” intersample calculation, even though all or nothing has been enabled.

The first CF has no label or injection specified and according to rule 8 of the intersample calculations, the current injection is used as the targeted result, so in this case we do not get the average but only the amount for the current injection.

If we specify the injection we get the rigth results.

### Pictures

- name=Picture 4; shape=2; type=png; bytes=65496; sha256=0aed5e979bf4ae378c7d6205552bf59557859d6f572858f4d52a3931b089d3be; file=[slide-201-0aed5e979b.png](source-guide-images/slide-201-0aed5e979b.png)

## Slide 202: Rules of Syntax – Examples

### Editable slide text

Rules of Syntax – Examples

Rule 2: When a SUMMARY function is specified, searching for targeted results continues until all search areas (inside the current result set and outside of the current result set) are exhausted.

### Speaker notes

Rules of Syntax, Examples

When we use a label that covers all the samples (U%) we get an 
 average of all the injections.

### Pictures

- name=Picture 2; shape=2.1; type=png; bytes=52996; sha256=8329c715fb2466b3d4070493fc72da5e375dd629ef41444ce1e44a215ce2c2d8; file=[slide-202-8329c715fb.png](source-guide-images/slide-202-8329c715fb.png)
- name=Picture 3; shape=2.2; type=png; bytes=18613; sha256=780c7fddc609f43712385f21cee2d88fdab34d0ec3ef33ed39c798359e90eafd; file=[slide-202-780c7fddc6.png](source-guide-images/slide-202-780c7fddc6.png)

## Slide 203: Rules of Syntax – Examples

### Editable slide text

Rules of Syntax – Examples

If SAME is used for the label part of the calculation, the software looks for a result with a label that matches the label of the current result.

### Speaker notes

Rules of Syntax, Examples

Here we see the use of the SAME function which in this case will give us an average of all injectons from samples A and B, and from Samples C and D.

### Pictures

- name=Picture 2; shape=2.1; type=png; bytes=52996; sha256=8329c715fb2466b3d4070493fc72da5e375dd629ef41444ce1e44a215ce2c2d8; file=[slide-202-8329c715fb.png](source-guide-images/slide-202-8329c715fb.png)
- name=Picture 2; shape=2.2; type=png; bytes=6874; sha256=3e1357dcaae3821722105dbd4577df38516f5b2cffcf244f24522b64440fdf6e; file=[slide-203-3e1357dcaa.png](source-guide-images/slide-203-3e1357dcaa.png)

## Slide 204: Intersample Custom Calculation – All or Nothing

### Editable slide text

When enabled, the software only calculates the custom field when the software can locate all targeted results. 
When disabled, calculation is performed regardless of all targeted results are found. 
Not applicable to a summary formula. 
If there is another inter-sample operation inside of a summary function, All or Nothing does apply to the inside portion.

Intersample Custom Calculation – All or Nothing

### Speaker notes

The All or Nothing Function

When using intersample calculations, and this function is enabled, the software only calculates the custom field if it is able to locate all targeted results. If the field is disabled, the calculation is performed regardless of whether all targeted results are found. (All or Nothing functionality is not applied to a summary formula. If you use another type of mathematical operation inside of a summary function, the All or Nothing functionality does apply to that portion of the calculation.)

### Pictures

- name=Picture 2; shape=3; type=png; bytes=28658; sha256=bcedb443afb5fc0aaba76127ce8f61de10ec35af75bb335f4f5504bcd3bfbb00; file=[slide-204-bcedb443af.png](source-guide-images/slide-204-bcedb443af.png)
- name=Picture 2; shape=4; type=png; bytes=1868; sha256=3ea5f4470fd15ac874c7ebd6fb08b72a897da27dd734d052e52a8edd3c815ee0; file=[slide-204-3ea5f4470f.png](source-guide-images/slide-204-3ea5f4470f.png)

## Slide 205: Intersample Custom Calculation – All or Nothing Ex

### Editable slide text

Example Scenario: 
 Sample Injection 
 A 1, 2 
 B 1, 2 
 C 1, 2 
 D 1, 2

Calculate the average amount of duplicate injections for each sample.
Formula: (.1.(Amount) + .2.(Amount))/2

Intersample Custom Calculation – All or Nothing Ex

### Speaker notes

All or Nothing, Example 2

Here we have a situation were we have injected twice from each sample. We want to calculate the average amount for the 2 injections from each sample.

We create a custom field that adds the amounts from the two injection and divide by 2.

## Slide 206: Intersample Custom Calculation – All or Nothing Ex

### Editable slide text

Intersample Custom Calculation – All or Nothing Ex

(Amount of inj 1)/2

Same calculation but with “Summarize Custom Fields” in Sample set

Rule 3: No label assumes the current sample line of the current result set. The search order has no effect if a label is not specified.

### Speaker notes

All or Nothing, Example 2

If we do not enable the All or Nothing function, we get half the amount of injection 1 for all the first injections, since the amount for injection 2 has not yet been calculated when we calculate the CF. Remember that a sample set is calculated in the order it was acquired.

If we enable the All or Nothing function we only get results for all the second injections.

If we insert the function “Summarize Custom Fields” ad the end of the sample set, we get all samples calculated correctly since we wait with the calculations until all the standard Empower calculations have been performed. We will discuss this function later in more detail.

### Pictures

- name=Picture 2; shape=2.1; type=png; bytes=70885; sha256=256c1d04f8ba8b0898974beca50fd6e8da0eac5ff6768111cf9656a92e8fdb64; file=[slide-206-256c1d04f8.png](source-guide-images/slide-206-256c1d04f8.png)
- name=Picture 3; shape=2.2; type=png; bytes=70885; sha256=256c1d04f8ba8b0898974beca50fd6e8da0eac5ff6768111cf9656a92e8fdb64; file=[slide-206-256c1d04f8.png](source-guide-images/slide-206-256c1d04f8.png)
- name=Picture 2; shape=6; type=png; bytes=11716; sha256=5b81fd540695a9066ede3bd317f7c20bacb6dd57098415f321a06a8748933965; file=[slide-206-5b81fd5406.png](source-guide-images/slide-206-5b81fd5406.png)

## Slide 207: Intersample Custom Calculation – All or Nothing Ex

### Editable slide text

Intersample Custom Calculation – All or Nothing Ex

Rule 4: No channel name always refers to the current channel name.

### Speaker notes

Rules of Syntax, examples

In this example we are using the same average calculating of 2 injections from the same vial as in the previous example, but here we are calculation a sample set with two data channels, one from a PDA detector set at 273nm and one from an ELSD detector.

In the first CF we have not specified a channel, so rule 4 applies which states that we always then refer to the current channel. This will ensure that results from different channels will not get mixed.

In the second CF we have specified the channel as the ELSD (ELSD%), where we are using the wildcard % to specify any character after ELSD. In this case we only get results for the ELSD channels.

In both cases we have enabled the All or Nothing function so we only get results for the second injections from each vial.

### Pictures

- name=Picture 2; shape=2; type=png; bytes=103509; sha256=741e98d9c8da7b613a68968222c1ed31f02c29ec958017da60c964ac61f40a23; file=[slide-207-741e98d9c8.png](source-guide-images/slide-207-741e98d9c8.png)

## Slide 208: [untitled]

### Editable slide text

Intersample Summary Calculations

Speaker notes: none extracted.

## Slide 209: Intersample Summary Custom - Calculation

### Editable slide text

Syntax:
Label.Injection.Channel.Function(Field) 

S0101.1.ACQUITY TUV ChA.AVE(Area)

Example syntaxes:
A…AVE(CCompRef1[Area])
Std.%..MIN(Retention Time) 
?1…SUM(Amount)

Note: Summary functions include SUM, AVE, MIN, MAX, %RSD, PROD

Intersample Summary Custom - Calculation

### Speaker notes

Intersample Summary 

This functionality allows you to generate a result that is a summary of a certain peak parameter for peaks over multiple results, i.e. average amount. 

Inter-Sample summary custom field also applies to Peak type only.

The syntax is the same as for Intersample calculations but we 
 need to add an extra period and the summary function.

## Slide 210: Intersample Summary Functions

### Editable slide text

Intersample Summary Functions

Operator or function | Meaning
AVE( | Average
MAX( | Maximum value
MIN( | Minimum value
SUM( | Summation
%RSD( | Percent Relative Standard Deviation
PROD( | Multiplication

### Speaker notes

Intersample Summary Functions

This is the available summery functions.

## Slide 211: Intersample Summary Calculation – Rules of Syntax

### Editable slide text

The software calculates inter-sample summary fields after the individual result within the sample set have been processed. You can therefore target results that are processed after the current result, but within the result set.
When a SUMMARY function is specified, searching for targeted results continues until all search areas (inside the current result set and outside of the current result set) are exhausted. The search area is defined by the Search Order drop down list. More than one result can be targeted when using the summary functionality.
A result that is outside of the result set (and has been previously processed) can be referenced only if the Label portion of the syntax is included and the Search Order field is set to Result Set First or Outside First. If no label is specified, or if Result Set Only or Outside Only is used, the software will not look outside of the result set when performing this type of calculation.

Intersample Summary Calculation – Rules of Syntax

### Speaker notes

Intersample Summary Calculations, Rules of Syntax

There are also several rules of syntax when performing 
 Intersample summary calculations.

## Slide 212: Intersample Summary Calculation – Rules of Syntax

### Editable slide text

When processing individual results and using an inter-sample summary, the Label portion of the syntax must be used and the Search Order must be set to either Result Set First or Outside First. If no label is specified, or if Result Set Only or Outside Only is used, the software will not produce any results for this field.
When processing individual results and using an inter-sample summary, results that are processed after the current result are not considered as a targeted result.
If a label but no injection is specified, the software uses the most recent unique matching result(s) as the targeted result(s) i.e. the most recent injection 1, injection 2, and injection 3, etc. (the ones that have the highest Result ID that is not higher than the current result’s Result ID) matching the label and channel are used. The current result is excluded as a targeted result.

Intersample Summary Calculation – Rules of Syntax

### Speaker notes

Intersample Summary Calculations, Rules of Syntax

In the following pages we will try and illustrate the rules with 
 examples.

## Slide 213: Intersample Summary Calculation – Rules of Syntax

### Editable slide text

All or Nothing functionality is not applied to a summary formula. If you use another type of mathematical operation inside of a summary function, the All or Nothing functionality does apply to that portion of the calculation.
A new function called Summarize Custom Fields is required at the end of the sample set in order to process a summary custom field in a result set. 
Found in the Function column in Run Samples or Alter Sample. 
When processing individual samples, this function is not required, however a rolling summary is calculated rather than an overall summary. It is therefore generally recommended to process sample sets (and therefore create result sets) when using inter-sample summary calculations.

Intersample Summary Calculation – Rules of Syntax

Speaker notes: none extracted.

## Slide 214: Summarize Custom Fields Function

### Editable slide text

Summarize Custom Fields Function

### Speaker notes

Summarize Custom Fields Function

To calculate summary-type custom fields, such as average or %RSD, you must include one of the following four Summarize Custom Fields functions in the sample set:
Summarize Custom Fields – add this function at the end of a sample set to calculate summary results using all samples above this table row in the sample set. This function stores its summary value for all samples above its table row in the sample set. 
Summarize Custom Fields (Exclude Faulted) – add this function at the end of a sample set to calculate summary results for all samples above this table row (that match the custom field syntax). The results are determined excluding injections that are faulted due to individual results falling outside of system suitability limits. 
Summarize Custom Fields Incrementally – add one or more of these functions to a sample set to calculate summary results using all samples above this table row (that match the custom field syntax). 
Summarize Custom Fields Incrementally (Excluded Faulted) – add one or more of these functions to a sample set to calculate summary results using all samples above this table row (that match the custom field syntax) and store them in the results listed above this table row and below any previous Summarize Custom Fields function rows. The results are determined excluding injections that are faulted due to individual results falling outside of system suitability limits. 
Tip: If you did not include one of the four Summarize Custom Fields 
 functions to the sample set, you can do so using the Alter Sample 
 window.

### Pictures

- name=Picture 2; shape=2.1; type=jpg; bytes=136597; description=ScreenHunter_02 Jul. 23 09.04.jpg; sha256=468bd97bad465d2297b4fd17a22a6b134700bde061df3cb84e85509fd32a3159; file=[slide-214-468bd97bad.jpg](source-guide-images/slide-214-468bd97bad.jpg)
- name=Picture 4; shape=2.2; type=jpg; bytes=136597; description=ScreenHunter_02 Jul. 23 09.04.jpg; sha256=468bd97bad465d2297b4fd17a22a6b134700bde061df3cb84e85509fd32a3159; file=[slide-214-468bd97bad.jpg](source-guide-images/slide-214-468bd97bad.jpg)

## Slide 215: Summarize Custom Fields Functions

### Editable slide text

Summarize Custom Fields 
Add this function at the end of a sample set to calculate summary results using all samples above this table row in the sample set. 
This function stores its summary value for all samples above its table row in the sample set.

Summarize Custom Fields (Exclude Faulted) 
Add this function at the end of a sample set to calculate summary results using all samples above its row that match the custom field syntax, excluding from its calculation those injections whose individual faulted results fell outside of system suitability limits.

Summarize Custom Fields Functions

### Speaker notes

Summarize Custom Fields Function

Summarize Custom Fields functions in the sample set:
Summarize Custom Fields – add this function at the end of a sample set to calculate summary results using all samples above this table row in the sample set. This function stores its summary value for all samples above its table row in the sample set. 
Summarize Custom Fields (Exclude Faulted) – add this function at the end of a sample set to calculate summary results for all samples above this table row (that match the custom field syntax). The results are determined excluding injections that are faulted due to individual results falling outside of system suitability limits.

## Slide 216: Summarize Custom Fields Functions

### Editable slide text

Summarize Custom Fields Incrementally 
Add one or more functions in a sample set to calculate incremental summary results using all samples above its function row that match the custom field syntax. 
However, the result of this field is only stored in the results listed above this table row and below any previous Summarize Custom Fields function rows.  
Previous results determined using previous Summarize Custom Fields function rows remain unchanged.

Summarize Custom Fields Incrementally (Excluded Faulted) 
Add one or more functions in a sample set to calculate incremental summary results using all samples above its function row, excluding from its calculation those injections whose individual results fell outside of system suitability limits.

Summarize Custom Fields Functions

### Speaker notes

Summarize Custom Fields Function

Summarize Custom Fields functions in the sample set:
Summarize Custom Fields Incrementally – add one or more of these functions to a sample set to calculate summary results using all samples above this table row (that match the custom field syntax). 
Summarize Custom Fields Incrementally (Excluded Faulted) – add one or more of these functions to a sample set to calculate summary results using all samples above this table row (that match the custom field syntax) and store them in the results listed above this table row and below any previous Summarize Custom Fields function rows. The results are determined excluding injections that are faulted due to individual results falling outside of system suitability limits.

## Slide 217: Summarize Custom Fields Incrementally

### Editable slide text

Summarize Custom Fields Incrementally

### Speaker notes

Summarize Custom Fields Incrementally Function

Next we will look at how to use the Summarize CF incrementally function.

In the sample set we have inserted the function after the series of standards, and then again after the last sample.

### Pictures

- name=Picture 2; shape=2; type=jpg; bytes=134654; description=ScreenHunter_01 Jul. 23 09.03.jpg; sha256=7045be50796749163eea3f15760f920dab456a36e2fcc77fe1e610b8ad5ca476; file=[slide-217-7045be5079.jpg](source-guide-images/slide-217-7045be5079.jpg)

## Slide 218: Summarize Custom Fields Incrementally Example

### Editable slide text

Summarize Custom Fields Incrementally Example

AVE of 2 injections

AVE Std´s

AVE Unk´s

### Speaker notes

Summarize Custom Fields Incrementally Function

Here we see the result of the calculation.

### Pictures

- name=Picture 2; shape=2; type=png; bytes=115861; sha256=7963d3e12e4945f321cfdd2716531b407b0384e1e0343c8fe33fe79f143d1d9c; file=[slide-218-7963d3e12e.png](source-guide-images/slide-218-7963d3e12e.png)

## Slide 219: Summary

### Editable slide text

A custom field is a user-defined type of sample data, as opposed to a predefined field established by Waters. Thus, these custom fields contain information that is important to you and may be specific to a particular application.
Custom Calculations can be used to replace external calculations in for example Excel.
By using Boolean and Enumerated function, a value can be translated into a pass/fail answer.
Calculations between samples can be done with intersample and intersample summary calculations.

Summary

Speaker notes: none extracted.

## Package media assets

- package=ppt/media/image1.png; bytes=8277; sha256=b9c2d5728ef5baaf1604691a8291a42e9065fde5105953dca98a2efdf422a562; file=[image1.png](source-guide-package-media/image1.png)
- package=ppt/media/image10.jpeg; bytes=8727; sha256=4c76ac5ab71c7063e6921ce183a3ad107898dedd91fa3038c606b6bee9117f87; file=[image10.jpeg](source-guide-package-media/image10.jpeg)
- package=ppt/media/image100.png; bytes=13308; sha256=d26e36c2de6170213c8e333996ff7b88976d9b660b8a7296aa59c9015fb5f5bd; file=[image100.png](source-guide-package-media/image100.png)
- package=ppt/media/image101.png; bytes=44034; sha256=a952955ab35a2c151d75b923a04e026ade9d1766bc9704e35bb1934b64d48de3; file=[image101.png](source-guide-package-media/image101.png)
- package=ppt/media/image102.png; bytes=45782; sha256=2fbe9051d498e4cf63728c0468de50dab164bc843c8b11d140dedabf3d939262; file=[image102.png](source-guide-package-media/image102.png)
- package=ppt/media/image103.png; bytes=7301; sha256=ee2cff4fa3ad491466efa7355af55fb40004fc0ba226789599deaf0174895509; file=[image103.png](source-guide-package-media/image103.png)
- package=ppt/media/image104.png; bytes=44102; sha256=c3a85f4ce76d9827bffbb3dc0b1a256c7540e12a913cef5fd21f997ab9d41e51; file=[image104.png](source-guide-package-media/image104.png)
- package=ppt/media/image105.png; bytes=44187; sha256=f0d7fcca4891fcf8a8b9cea8861e33fb3ce5fc9fb0639bd80241ce2b5d2901b3; file=[image105.png](source-guide-package-media/image105.png)
- package=ppt/media/image106.png; bytes=37314; sha256=57617c46d4f8fccb848f21c5c65f1221e292eb982636e23ef3e1a5bfefdb465d; file=[image106.png](source-guide-package-media/image106.png)
- package=ppt/media/image107.png; bytes=7824; sha256=badd8f924828677da8f60945b9bace53bc47f6a9518d0f459be6b267375cfc64; file=[image107.png](source-guide-package-media/image107.png)
- package=ppt/media/image108.jpeg; bytes=92833; sha256=d4ef51be9a759634d618e3e08749d4a91d19e9a5ef1e53c5afbf7ee110f269a9; file=[image108.jpeg](source-guide-package-media/image108.jpeg)
- package=ppt/media/image109.png; bytes=489; sha256=e55d144becce1f28923ae712c27fe541c70788b667cc32b6ffcbed6a4e58532e; file=[image109.png](source-guide-package-media/image109.png)
- package=ppt/media/image11.jpeg; bytes=24011; sha256=dce591210b9b1d67146bc787c571cb503109f35d44555b50212dc56ddc94ae06; file=[image11.jpeg](source-guide-package-media/image11.jpeg)
- package=ppt/media/image110.png; bytes=455; sha256=613ca1fbc532364b4fd6dd5de10951aad144d1b153ce256d514171f34d1c18a7; file=[image110.png](source-guide-package-media/image110.png)
- package=ppt/media/image111.jpeg; bytes=45139; sha256=a082680866b41943be9b24d19d3efea66b3af0624d0510bf98c491172178a30d; file=[image111.jpeg](source-guide-package-media/image111.jpeg)
- package=ppt/media/image112.jpeg; bytes=27354; sha256=d7fe9c1d3c2d5fa15f9acb73613600dce4a16e3d64afd680385b96889696d3a2; file=[image112.jpeg](source-guide-package-media/image112.jpeg)
- package=ppt/media/image113.png; bytes=8433; sha256=6b0187be0b89aa3c30fff81ec222f68c1797ad8ce7fa6ae97e87c35a0d018bf6; file=[image113.png](source-guide-package-media/image113.png)
- package=ppt/media/image114.png; bytes=2587; sha256=101e6c6aac619b2c5443d8dd08c4564a6a75b485219a582bfe793beec5605188; file=[image114.png](source-guide-package-media/image114.png)
- package=ppt/media/image115.png; bytes=19263; sha256=482f770fbe37ab5c3779198d6e87193ffbd1381c8f27b78f0fdb770e9fce247a; file=[image115.png](source-guide-package-media/image115.png)
- package=ppt/media/image116.png; bytes=17879; sha256=150a613d56d9f13b7aa4165c548474b8f7d88bb7cbe6a7b8b196228fae79d7fb; file=[image116.png](source-guide-package-media/image116.png)
- package=ppt/media/image117.png; bytes=74171; sha256=fef64f86f84333f726b579e77ab09cf5dd4cb43db634fdfc01946f5bdac45438; file=[image117.png](source-guide-package-media/image117.png)
- package=ppt/media/image118.png; bytes=107397; sha256=28ff9c2ae1dd4d9dc6316cc7c4fde135a6caf7a10e53c54507ad68312e78f68e; file=[image118.png](source-guide-package-media/image118.png)
- package=ppt/media/image119.png; bytes=41390; sha256=7ded853a87c4c2448bf2778d74b32b2595641aafa2f4fcb768377ab5344ee1f2; file=[image119.png](source-guide-package-media/image119.png)
- package=ppt/media/image12.jpeg; bytes=125158; sha256=91831529516f08b390dd6a209e3ca2526da1c3dabc863eccfb7cbe7dade9180d; file=[image12.jpeg](source-guide-package-media/image12.jpeg)
- package=ppt/media/image120.png; bytes=66647; sha256=5a37c256cb736e92a17bdb75bffcacb4ec1d1df20771d8c425955413b25818a8; file=[image120.png](source-guide-package-media/image120.png)
- package=ppt/media/image121.png; bytes=42068; sha256=e7a2f6f72686f491bae29eab153306e45fdf8debb6780240f9884bbcc3cfc795; file=[image121.png](source-guide-package-media/image121.png)
- package=ppt/media/image122.png; bytes=77645; sha256=7946d53e07de3ba842770b67916286a757bc149e2f8a3ed63a4df37aaee6bf9a; file=[image122.png](source-guide-package-media/image122.png)
- package=ppt/media/image123.png; bytes=43237; sha256=fb64bed78fbd2e1e081dc1668024c9635f484c8301e920b1fa5d42b8c35bbb70; file=[image123.png](source-guide-package-media/image123.png)
- package=ppt/media/image124.png; bytes=5851; sha256=7267db09739506f85ea35cba269ec5e951eb2181f4143b76b3ef7e97b5a48b52; file=[image124.png](source-guide-package-media/image124.png)
- package=ppt/media/image125.png; bytes=72596; sha256=19f38950e78dbec49ad9273eb5cd1917974646b7f49b1b73795462358145279b; file=[image125.png](source-guide-package-media/image125.png)
- package=ppt/media/image126.png; bytes=2864; sha256=cc42eda9c79e42bd5951119fa0cab209d4d9403bb5c119d55101e964da42df80; file=[image126.png](source-guide-package-media/image126.png)
- package=ppt/media/image127.png; bytes=19104; sha256=4a768aa0ca5de895b7a9b945cd8563fa7e0aa638157e9148a0a62192dbb6fa81; file=[image127.png](source-guide-package-media/image127.png)
- package=ppt/media/image128.png; bytes=2589; sha256=e453663ec098b78f5ff33aa923e3dfb332f6e88b199a03ac82218b86687808b6; file=[image128.png](source-guide-package-media/image128.png)
- package=ppt/media/image129.png; bytes=57819; sha256=e2889e96fcc216792530ccd393eb09830f7052653a38ab26e305ed7fce787e61; file=[image129.png](source-guide-package-media/image129.png)
- package=ppt/media/image13.png; bytes=24586; sha256=17dc111c86c41343773d938671546157cc2f2a003841869fd46e97aec343a7bf; file=[image13.png](source-guide-package-media/image13.png)
- package=ppt/media/image130.png; bytes=6904; sha256=cc4a158e1dba5efa63feee4db7fcdf1b9b9c096229239940bb9b1e3d60e70366; file=[image130.png](source-guide-package-media/image130.png)
- package=ppt/media/image131.png; bytes=17230; sha256=36ee61ee212e0a2d83bfe9ac2b8be1f82558a4ff4e221ad018955566a36c310f; file=[image131.png](source-guide-package-media/image131.png)
- package=ppt/media/image132.png; bytes=84943; sha256=6959ee716d926590677936a29e3b602da2eefdeb87495d84af0d96cbb9470008; file=[image132.png](source-guide-package-media/image132.png)
- package=ppt/media/image133.png; bytes=16952; sha256=bdf61f7c966945a9ebf0d0251e56b1b7c0f6c027e681aca39920d2f8cd65e55f; file=[image133.png](source-guide-package-media/image133.png)
- package=ppt/media/image134.png; bytes=79800; sha256=2242ea7805952871344f589e3cc34a806d9d774c24c0b213a28795190a07ac8e; file=[image134.png](source-guide-package-media/image134.png)
- package=ppt/media/image135.png; bytes=17083; sha256=2bc7330477d0948d143b9196b1d449e36c12f2eeee08628417f8f8c96c5778a1; file=[image135.png](source-guide-package-media/image135.png)
- package=ppt/media/image136.png; bytes=84636; sha256=41bf8261389b269ba87c23fa1a4106d3af3b3698295dcc04372b75764026a5c1; file=[image136.png](source-guide-package-media/image136.png)
- package=ppt/media/image137.png; bytes=16861; sha256=7340b8d1fa3176a3a311bff368e526fd90541f2f93aecc5efd46af26619de89e; file=[image137.png](source-guide-package-media/image137.png)
- package=ppt/media/image138.png; bytes=84735; sha256=531a85c4e4307d7f001c6a3856bcee72955bb1a30455b667833ede3209547354; file=[image138.png](source-guide-package-media/image138.png)
- package=ppt/media/image139.png; bytes=42385; sha256=9b623787d473c6289b4bb6dd5bf1b6c379b13bc602188325770177fc4ff502c3; file=[image139.png](source-guide-package-media/image139.png)
- package=ppt/media/image14.png; bytes=35747; sha256=839f0ecc1da0fdcf719f8a1251e4a5be233b69a6f908609582137540d86b50bc; file=[image14.png](source-guide-package-media/image14.png)
- package=ppt/media/image140.png; bytes=3374; sha256=bfe35f744d2b8e27d789b7165660cb004e89146894c771e6b3b19ba9916f1781; file=[image140.png](source-guide-package-media/image140.png)
- package=ppt/media/image141.png; bytes=18172; sha256=8d5e3181dd41508fb49c1d7f907067dbea32737ce6e630c532ea7ba9c69265cc; file=[image141.png](source-guide-package-media/image141.png)
- package=ppt/media/image142.png; bytes=88957; sha256=496a029b675ee7bd68d6a89e0c97240e69d302bfa67a5d4b13dad9978f4229cb; file=[image142.png](source-guide-package-media/image142.png)
- package=ppt/media/image143.png; bytes=2418; sha256=f2469f69019ca33f88b253fd15eb9f1c008d9f2f39aef1f42bb1cffe01ae7ae9; file=[image143.png](source-guide-package-media/image143.png)
- package=ppt/media/image144.png; bytes=271825; sha256=ef097890b086b7adc4f762ca304ae1465addc8f7c4ea027eb3c87d170246a99d; file=[image144.png](source-guide-package-media/image144.png)
- package=ppt/media/image145.png; bytes=2387; sha256=7a65a1d5a33d3d6d09803cb360019967d7540a902d724fb4f9594cf9684ca95c; file=[image145.png](source-guide-package-media/image145.png)
- package=ppt/media/image146.png; bytes=3809; sha256=0b501a6c0ec052c155b6d40dca972e26dd1615ebdf158f5bed554fb8bc6bcfb0; file=[image146.png](source-guide-package-media/image146.png)
- package=ppt/media/image147.png; bytes=13252; sha256=1536cfd78a8264bd21c26fd1f5137e65b188cba9ef52b1a2c128dfbb25a7a6b0; file=[image147.png](source-guide-package-media/image147.png)
- package=ppt/media/image148.png; bytes=17053; sha256=9ac28ad2d2bfdcea5bace41f64a4b762eca1e1e66251b7009f8bd392671e94ae; file=[image148.png](source-guide-package-media/image148.png)
- package=ppt/media/image149.png; bytes=49724; sha256=b12294a5ade4056858fe847239196de111a479bb2c99b0bf44e77066269a570c; file=[image149.png](source-guide-package-media/image149.png)
- package=ppt/media/image15.png; bytes=720; sha256=e6fcfb67cd873073410869ad0f9e67aa288120dd9141c3b020b173f66225d81f; file=[image15.png](source-guide-package-media/image15.png)
- package=ppt/media/image150.png; bytes=9385; sha256=00fa2d685d278b28515774a206f98ee39e76eab2cc19c611640211e21761218b; file=[image150.png](source-guide-package-media/image150.png)
- package=ppt/media/image151.png; bytes=17576; sha256=50c580e31466e04f270dc3c794a5dcbb94e98ee0cc62bdc34abd3b56fe06178a; file=[image151.png](source-guide-package-media/image151.png)
- package=ppt/media/image152.png; bytes=68399; sha256=b38642c6c5cd3a83999afedd93342d2275e2aae6ae352f661a8da3e5d5350134; file=[image152.png](source-guide-package-media/image152.png)
- package=ppt/media/image153.png; bytes=11493; sha256=6d9f71af23fba3ff49f77ec85602b5675ae73f77d0f58df4754ca3b0a200c9a1; file=[image153.png](source-guide-package-media/image153.png)
- package=ppt/media/image154.png; bytes=27872; sha256=13d78abd28b4d5473d1e5e152955a7e12f39fcd46fe357da41125d20b7f34527; file=[image154.png](source-guide-package-media/image154.png)
- package=ppt/media/image155.png; bytes=88420; sha256=8e29b1724b31cf578ee65fef4bcedd26a928ed165e345da858d0f272584f2cdc; file=[image155.png](source-guide-package-media/image155.png)
- package=ppt/media/image156.png; bytes=2539; sha256=a822b6e8349fca19b13817c64ee9ce92a2e889cdc85570f5518b76e310f4b01c; file=[image156.png](source-guide-package-media/image156.png)
- package=ppt/media/image157.png; bytes=31313; sha256=a7e70bb0015764132f97e05e066023288e9e8408dd25191e7671b9a00f0baa26; file=[image157.png](source-guide-package-media/image157.png)
- package=ppt/media/image158.png; bytes=21136; sha256=ce0fe574fdc2a3b29b396bbc329bc1d6db849281d52ae546f8f98f2da9eb9057; file=[image158.png](source-guide-package-media/image158.png)
- package=ppt/media/image159.png; bytes=22699; sha256=1b04820e107a336eaf594bf04c95eb4868a430740469914c04fc24530e7b58c2; file=[image159.png](source-guide-package-media/image159.png)
- package=ppt/media/image16.png; bytes=3871; sha256=b7f50464004074ed27c5b600a28bac4cf20532538d13370cc018fc00c6c76a61; file=[image16.png](source-guide-package-media/image16.png)
- package=ppt/media/image160.png; bytes=21523; sha256=f8421480ae50b99526c5134ff71174841ce60576a8c2f9ea0bdfdc14af1a0e77; file=[image160.png](source-guide-package-media/image160.png)
- package=ppt/media/image161.png; bytes=40733; sha256=0ac527760eac13471c8a6d97cedd209acc051409d612c639da41572810401d0d; file=[image161.png](source-guide-package-media/image161.png)
- package=ppt/media/image162.png; bytes=41202; sha256=6d804ab0b7b1017cc0aa8188dbc06da5dc60785ae0580188ec6a0c10135a1d1b; file=[image162.png](source-guide-package-media/image162.png)
- package=ppt/media/image163.png; bytes=47034; sha256=e63e0d036398558e7ec7738ce4841a6800d26eee73da5b4c17e4ab6845f6e1e5; file=[image163.png](source-guide-package-media/image163.png)
- package=ppt/media/image164.png; bytes=975; sha256=c7d543750700506df66849bc24d36bfee6fa4cc33c0ecc48ad1bdbbb1b616f53; file=[image164.png](source-guide-package-media/image164.png)
- package=ppt/media/image165.png; bytes=6812; sha256=ceb47c4cfa14457da74d2dca31056d26c93232c34816c394dc7e202731b7adb0; file=[image165.png](source-guide-package-media/image165.png)
- package=ppt/media/image166.png; bytes=2673; sha256=d1ac7f61a1840aaf1197020afc082374d80df2953cdb8339df11fe7d86dfbe37; file=[image166.png](source-guide-package-media/image166.png)
- package=ppt/media/image167.png; bytes=23303; sha256=9e96edfed6a7a5282a5784c396a985fa5929a5713b98f7f9d1325dd44287405f; file=[image167.png](source-guide-package-media/image167.png)
- package=ppt/media/image168.png; bytes=29328; sha256=a4a45ffe7c6298ab174ae8c0515ca6532540d9ab39f0cccc291863ddf80eaca7; file=[image168.png](source-guide-package-media/image168.png)
- package=ppt/media/image169.png; bytes=25543; sha256=6f84545251f3f6488840dda12666f9aafb48450316d9920c422e4aecc07d580b; file=[image169.png](source-guide-package-media/image169.png)
- package=ppt/media/image17.png; bytes=6744; sha256=f96969af79c423c571069481a06b054b858b97214b75279980c05019f10f770a; file=[image17.png](source-guide-package-media/image17.png)
- package=ppt/media/image170.png; bytes=30068; sha256=ec727ba9e240b490098ee1831aa21462f6277def57dba32b50fb57fdae587fa1; file=[image170.png](source-guide-package-media/image170.png)
- package=ppt/media/image171.png; bytes=65661; sha256=877875c9e7c3f8bffd99faf4384e9e23c5374575f6bc94831e8ad21f4d6819b3; file=[image171.png](source-guide-package-media/image171.png)
- package=ppt/media/image172.png; bytes=40751; sha256=ea2a6b3bc28cca466a82d0deb6fdbb1642f071ae8b8300c69e92caf2c539d798; file=[image172.png](source-guide-package-media/image172.png)
- package=ppt/media/image173.png; bytes=28805; sha256=36a3aed0dd095b61166cf8aead2a8dbc8cea46678cd6ea1d1dc3da1b098441d3; file=[image173.png](source-guide-package-media/image173.png)
- package=ppt/media/image174.png; bytes=287492; sha256=152d7dbb9a604f4dbf8faf37e9cd112b92387800992c680b8f6edd52aa203314; file=[image174.png](source-guide-package-media/image174.png)
- package=ppt/media/image175.png; bytes=17705; sha256=a3e3da4ce88e771f827c27b4d9405f004c4b734c2f32e75c81136cba7bcfd2bb; file=[image175.png](source-guide-package-media/image175.png)
- package=ppt/media/image176.png; bytes=36991; sha256=e31726dfad3da94aa3b2f279deb2f950277948304bc84dfcfe5f739bef19db24; file=[image176.png](source-guide-package-media/image176.png)
- package=ppt/media/image177.png; bytes=48527; sha256=5366714ab9c98cb0b7ffcf10dc843acb2bc9607944e3ddb738da6dcf41599237; file=[image177.png](source-guide-package-media/image177.png)
- package=ppt/media/image178.png; bytes=33758; sha256=6f2888029f88db351fb8e94865c14015ba64ada61cb8b66df05266945054bb2b; file=[image178.png](source-guide-package-media/image178.png)
- package=ppt/media/image179.png; bytes=536; sha256=af051ca59e5448d1916bd303a9ff4eb4c8ad961712d61c4948794f71257cc646; file=[image179.png](source-guide-package-media/image179.png)
- package=ppt/media/image18.png; bytes=16890; sha256=d6ae87b51b2b6a1fb69fcb977c61cb47fdd738f0f0e674d6e2fdf4b9c2fb00ef; file=[image18.png](source-guide-package-media/image18.png)
- package=ppt/media/image180.png; bytes=78141; sha256=1f2819c37727ba3a43c7ae076fd5b519831e58dbc8374937acb3d6f36c1caf32; file=[image180.png](source-guide-package-media/image180.png)
- package=ppt/media/image181.png; bytes=65496; sha256=0aed5e979bf4ae378c7d6205552bf59557859d6f572858f4d52a3931b089d3be; file=[image181.png](source-guide-package-media/image181.png)
- package=ppt/media/image182.png; bytes=52996; sha256=8329c715fb2466b3d4070493fc72da5e375dd629ef41444ce1e44a215ce2c2d8; file=[image182.png](source-guide-package-media/image182.png)
- package=ppt/media/image183.png; bytes=18613; sha256=780c7fddc609f43712385f21cee2d88fdab34d0ec3ef33ed39c798359e90eafd; file=[image183.png](source-guide-package-media/image183.png)
- package=ppt/media/image184.png; bytes=6874; sha256=3e1357dcaae3821722105dbd4577df38516f5b2cffcf244f24522b64440fdf6e; file=[image184.png](source-guide-package-media/image184.png)
- package=ppt/media/image185.png; bytes=28658; sha256=bcedb443afb5fc0aaba76127ce8f61de10ec35af75bb335f4f5504bcd3bfbb00; file=[image185.png](source-guide-package-media/image185.png)
- package=ppt/media/image186.png; bytes=1868; sha256=3ea5f4470fd15ac874c7ebd6fb08b72a897da27dd734d052e52a8edd3c815ee0; file=[image186.png](source-guide-package-media/image186.png)
- package=ppt/media/image187.png; bytes=70885; sha256=256c1d04f8ba8b0898974beca50fd6e8da0eac5ff6768111cf9656a92e8fdb64; file=[image187.png](source-guide-package-media/image187.png)
- package=ppt/media/image188.png; bytes=11716; sha256=5b81fd540695a9066ede3bd317f7c20bacb6dd57098415f321a06a8748933965; file=[image188.png](source-guide-package-media/image188.png)
- package=ppt/media/image189.png; bytes=103509; sha256=741e98d9c8da7b613a68968222c1ed31f02c29ec958017da60c964ac61f40a23; file=[image189.png](source-guide-package-media/image189.png)
- package=ppt/media/image19.png; bytes=6892; sha256=056a2086c7f11239c9316bc239e190b16b5c812c914bf5411c49aa747ff32e9d; file=[image19.png](source-guide-package-media/image19.png)
- package=ppt/media/image190.jpeg; bytes=136597; sha256=468bd97bad465d2297b4fd17a22a6b134700bde061df3cb84e85509fd32a3159; file=[image190.jpeg](source-guide-package-media/image190.jpeg)
- package=ppt/media/image191.jpeg; bytes=134654; sha256=7045be50796749163eea3f15760f920dab456a36e2fcc77fe1e610b8ad5ca476; file=[image191.jpeg](source-guide-package-media/image191.jpeg)
- package=ppt/media/image192.png; bytes=115861; sha256=7963d3e12e4945f321cfdd2716531b407b0384e1e0343c8fe33fe79f143d1d9c; file=[image192.png](source-guide-package-media/image192.png)
- package=ppt/media/image2.png; bytes=36498; sha256=c7e7c2cca66db8953c80942061ffa7d7dacb900ad51c4e6b6bb3d3c4d257a57d; file=[image2.png](source-guide-package-media/image2.png)
- package=ppt/media/image20.png; bytes=11432; sha256=4cd72de8c4cceee31455c95edfa912f3d065877460713d30443673ca2b8551b0; file=[image20.png](source-guide-package-media/image20.png)
- package=ppt/media/image21.png; bytes=1007; sha256=2020eac55290d5557c2c18900826f667852d6d9dddc8b96bf5c9765e90959078; file=[image21.png](source-guide-package-media/image21.png)
- package=ppt/media/image22.png; bytes=821; sha256=ddd4a12e123c3bdf03ef7139419432caf48b0fc583bf7ed397a8f646623688b4; file=[image22.png](source-guide-package-media/image22.png)
- package=ppt/media/image23.png; bytes=7008; sha256=24e5aa03c1274520d7eaac247518d19f17497ac8c0c586377021dee3609351f1; file=[image23.png](source-guide-package-media/image23.png)
- package=ppt/media/image24.png; bytes=11904; sha256=1a8b1ea94f3c9d5d36ecc3a0aeda0c8b48818bf6f08c72075c5d84c905ae475a; file=[image24.png](source-guide-package-media/image24.png)
- package=ppt/media/image25.png; bytes=41078; sha256=30d87e4ecb6fb3b38f05d9b4e72e928f1d25ee8c56b2f58d580afeadfb782033; file=[image25.png](source-guide-package-media/image25.png)
- package=ppt/media/image26.png; bytes=36019; sha256=e95aacbd0cac00c9a1cbabd30db5f314e540589bd9b802b55abf9ba98390e36c; file=[image26.png](source-guide-package-media/image26.png)
- package=ppt/media/image27.png; bytes=46682; sha256=11690eafcd9085db4cdadd43e896b0ac0ffecbb2ca1b8fcdb85644309216d7cb; file=[image27.png](source-guide-package-media/image27.png)
- package=ppt/media/image28.png; bytes=81958; sha256=2442e4cac1954d3748fdc071ebc03484f16167c970f5fff09bda270da8562ba5; file=[image28.png](source-guide-package-media/image28.png)
- package=ppt/media/image29.png; bytes=78180; sha256=b9ff1e278405cbc229b8ab133a4e8546778652c1fe8427422c53708fdeb6abd7; file=[image29.png](source-guide-package-media/image29.png)
- package=ppt/media/image3.jpeg; bytes=73954; sha256=63755a143b27884931e0189a9042dbaecabc774c59656460cb427f1a754cbf4e; file=[image3.jpeg](source-guide-package-media/image3.jpeg)
- package=ppt/media/image30.png; bytes=20161; sha256=3f8196dd0fd4cf5492b6c0d92a2be5a9223de67b23fc57ea6fee26ad211d8898; file=[image30.png](source-guide-package-media/image30.png)
- package=ppt/media/image31.png; bytes=437; sha256=8104c19fadbf7da994cdaf8e237701e6fcc80f5514849d80a9faa10454f88c8f; file=[image31.png](source-guide-package-media/image31.png)
- package=ppt/media/image32.png; bytes=304; sha256=1c1c5aaebbea8dc16b583e9f87d8cfb23d6bf13e23be45a190acc8063c505c45; file=[image32.png](source-guide-package-media/image32.png)
- package=ppt/media/image33.png; bytes=337; sha256=fd43cf83560e9b4096e108d009baf1f8f05b723088f8bed5241036ac7447b285; file=[image33.png](source-guide-package-media/image33.png)
- package=ppt/media/image34.png; bytes=296; sha256=c3109fa1c76fef2708404f4d121850f96601abbec9e5b1acd767cc8839011209; file=[image34.png](source-guide-package-media/image34.png)
- package=ppt/media/image35.png; bytes=349; sha256=e2bbf1b2937c2902f06cda7dc022940f39c310a06e37edfa814d4a0e6bad0e25; file=[image35.png](source-guide-package-media/image35.png)
- package=ppt/media/image36.png; bytes=314; sha256=e74013a7b4b5acc287e96572d41d5b06d5520430d1c7f9d6df8225495251ea17; file=[image36.png](source-guide-package-media/image36.png)
- package=ppt/media/image37.png; bytes=290; sha256=bde07e059c8b37a9129d45b150ab2616cb4039b36b9530fd86928241ca120255; file=[image37.png](source-guide-package-media/image37.png)
- package=ppt/media/image38.png; bytes=348; sha256=4330d94ba6a0363c2b4fb100c77f19bfeffd355ef4f32421b4befa11d02ea614; file=[image38.png](source-guide-package-media/image38.png)
- package=ppt/media/image39.png; bytes=44035; sha256=c919dccd6ff6b194d35b5adac6a6f38ba4aa9955cb124a1a7b9b4190a17a0b49; file=[image39.png](source-guide-package-media/image39.png)
- package=ppt/media/image4.png; bytes=19905; sha256=1498a41b5586296fe35bdca22e853c976fc5df17bd3af99c6dd4aa7024f3d25a; file=[image4.png](source-guide-package-media/image4.png)
- package=ppt/media/image40.png; bytes=40083; sha256=eab5b86420ea16ece9fb626aa5795d34819357334255738010d16811e82a70bb; file=[image40.png](source-guide-package-media/image40.png)
- package=ppt/media/image41.png; bytes=35042; sha256=d3c8a3d304fae7a370022f6dc181af4275ba8675ff3ed910014fbad17ceda0c3; file=[image41.png](source-guide-package-media/image41.png)
- package=ppt/media/image42.png; bytes=32862; sha256=bd6f642359adad66071b22c4b41819323006343587e6d41fcb48b4358b7215b7; file=[image42.png](source-guide-package-media/image42.png)
- package=ppt/media/image43.png; bytes=4898; sha256=1fb4583f375ce098a317510882ea6baf4cf18b3b50b710aa98840b9f5e8ffd0b; file=[image43.png](source-guide-package-media/image43.png)
- package=ppt/media/image44.jpeg; bytes=53211; sha256=d601dd8e4436cbaf07ca5eb5a9e6ad7d0f1cd76c0e7579ba7c2b67373c9dcfb5; file=[image44.jpeg](source-guide-package-media/image44.jpeg)
- package=ppt/media/image45.png; bytes=44041; sha256=b002e206be5d6db51b9457c9c20391d5084aa14bc73b699884dde783a9e96295; file=[image45.png](source-guide-package-media/image45.png)
- package=ppt/media/image46.png; bytes=41007; sha256=09866d2fece195a33c1b8dea59c0df4cb3c2c652c0c7f47336d9e0dee0af3f9e; file=[image46.png](source-guide-package-media/image46.png)
- package=ppt/media/image47.png; bytes=36501; sha256=571cc4e9612d1e385871ccf97e06dd80f4b297de2ea0d02e5bfce4809ac0ef3f; file=[image47.png](source-guide-package-media/image47.png)
- package=ppt/media/image48.png; bytes=37669; sha256=afd852e7fc92b3f0050b26fa4da7b32795aa6f6fcd2830c9d97585e7e2bd8572; file=[image48.png](source-guide-package-media/image48.png)
- package=ppt/media/image49.png; bytes=7824; sha256=418d932d9770a0e0785c1aeee8c7e92e1c5f7382101daf87cfcc8ddb6f8360b6; file=[image49.png](source-guide-package-media/image49.png)
- package=ppt/media/image5.jpeg; bytes=4950; sha256=60c01ee1818622a0e030ecb14221c8cae7fdb26214cbc0ba97632953af435e0d; file=[image5.jpeg](source-guide-package-media/image5.jpeg)
- package=ppt/media/image50.jpeg; bytes=54968; sha256=f28f5a6154797cb5177936a237d259df7a19b55af85ed67fdb11151fa4c4baa0; file=[image50.jpeg](source-guide-package-media/image50.jpeg)
- package=ppt/media/image51.jpeg; bytes=33293; sha256=ddfd1bfd9c4a3926e9db44d4922b21b82aa117a1bd5cfc617b3a5b0cade6c917; file=[image51.jpeg](source-guide-package-media/image51.jpeg)
- package=ppt/media/image52.jpeg; bytes=29255; sha256=135549b5a7065f8b59640c4bdc421de87f48d6ca3c01251d1b3fb7537a1f81a9; file=[image52.jpeg](source-guide-package-media/image52.jpeg)
- package=ppt/media/image53.png; bytes=43533; sha256=a56ceb1086660958d2cb1a96e48915a3800d17014e4e75719a84247548b969ac; file=[image53.png](source-guide-package-media/image53.png)
- package=ppt/media/image54.png; bytes=40059; sha256=802b44690af2d56c324d29abfed5897b9af8205a74a43fa4de5725c7668da4f7; file=[image54.png](source-guide-package-media/image54.png)
- package=ppt/media/image55.png; bytes=44103; sha256=63fd84afa0ea7e0b53b1a4d3b6d8cbbdfb61b1596723512accc4979bf017afc9; file=[image55.png](source-guide-package-media/image55.png)
- package=ppt/media/image56.png; bytes=37254; sha256=9a07b7441309133f29dd4bd34faa50ff29c73fc79ca76294502bbc01be2d41ba; file=[image56.png](source-guide-package-media/image56.png)
- package=ppt/media/image57.png; bytes=7824; sha256=b78d1cc4a402a60fa4df10c4035206a00d7586656073feda63a4552ec9729717; file=[image57.png](source-guide-package-media/image57.png)
- package=ppt/media/image58.jpeg; bytes=87645; sha256=b320b713f6d9e17bb72cf1d13a6ff0c18a064e65f8548cb79ab6d016b80873fc; file=[image58.jpeg](source-guide-package-media/image58.jpeg)
- package=ppt/media/image59.png; bytes=44034; sha256=bcfdc2c22d4f30667d79f46ee33055fffcf1a412a08839c2e9230c84fb7271df; file=[image59.png](source-guide-package-media/image59.png)
- package=ppt/media/image6.png; bytes=12315; sha256=30d11441d2255517303cb72cf381626a39d478e063b1ae47f7e267f8d2ad62ab; file=[image6.png](source-guide-package-media/image6.png)
- package=ppt/media/image60.png; bytes=46223; sha256=4f325c6fde1fa2f3da8fe853a4543ad312c538d1660a46cb8cd23d1811b97eb0; file=[image60.png](source-guide-package-media/image60.png)
- package=ppt/media/image61.png; bytes=7301; sha256=47bdf45662e389b48f4ccdaa6413d887f6794bbec633a291fc6cd9da06be25a6; file=[image61.png](source-guide-package-media/image61.png)
- package=ppt/media/image62.png; bytes=43753; sha256=e00c878f05ad6e3f0aef6cde839300c0901e83f217afae4a50475a4a5974c6cb; file=[image62.png](source-guide-package-media/image62.png)
- package=ppt/media/image63.png; bytes=44187; sha256=1446348f203eb168d06f3ad7fd4bd7b96f6383feb0315d697d85103005fdb98d; file=[image63.png](source-guide-package-media/image63.png)
- package=ppt/media/image64.png; bytes=37520; sha256=b59b840c99655ece2b489a119b59fc15380ac6d33f0c9ca0520e98360ab1b43e; file=[image64.png](source-guide-package-media/image64.png)
- package=ppt/media/image65.jpeg; bytes=97243; sha256=26f43a009abf358dee5205890e7a3d8b6da8be11f9ff0caa8cb64ef551d269dc; file=[image65.jpeg](source-guide-package-media/image65.jpeg)
- package=ppt/media/image66.jpeg; bytes=83499; sha256=512fd500ed60765f1272975ba37b473f4d6fd90238d56499b6b70e537c8350ab; file=[image66.jpeg](source-guide-package-media/image66.jpeg)
- package=ppt/media/image67.jpeg; bytes=52351; sha256=30a5409ba6a73c4c309fd0812e57e82e328b36238391f474b1b6f32e2a3b2226; file=[image67.jpeg](source-guide-package-media/image67.jpeg)
- package=ppt/media/image68.png; bytes=44037; sha256=c77101fa6c890214658ce83f0f3ea2549a24cd16f90a2220a1dec51163258f55; file=[image68.png](source-guide-package-media/image68.png)
- package=ppt/media/image69.png; bytes=46626; sha256=af665a196bcb9ea19893db419f5ced4fae6d2d50f26d4d49e3694d3396925913; file=[image69.png](source-guide-package-media/image69.png)
- package=ppt/media/image7.png; bytes=274968; sha256=a384784de6e1dff370ee046aedc848a4715195da352f062f59c18fa28f08bec5; file=[image7.png](source-guide-package-media/image7.png)
- package=ppt/media/image70.png; bytes=7301; sha256=dc30e48c65ddb6e6c12c82233352c04cb8be61e95a0bb6d03677349d7d4335a7; file=[image70.png](source-guide-package-media/image70.png)
- package=ppt/media/image71.png; bytes=44502; sha256=161c31712de4595e55aa8d79e27485f8f23ff27c3d100ffc38631e1eaa51af5c; file=[image71.png](source-guide-package-media/image71.png)
- package=ppt/media/image72.png; bytes=36789; sha256=17db0184ff860754eb47b68c67f624d80ac61c2d4be7d803c4ed85a003b47198; file=[image72.png](source-guide-package-media/image72.png)
- package=ppt/media/image73.png; bytes=37170; sha256=b418c15636f26eccd277bd735581ad75541773457bd7dcd935ff111d05a4f00f; file=[image73.png](source-guide-package-media/image73.png)
- package=ppt/media/image74.png; bytes=7824; sha256=61c604829111e07e102a659e99549f12f700dfa1bffa675329224acfe4462567; file=[image74.png](source-guide-package-media/image74.png)
- package=ppt/media/image75.jpeg; bytes=133400; sha256=507acf2e9d1bec9d5d5d46d36eb9a220a2d70aac0ceaa814be1e8dfb906c50c0; file=[image75.jpeg](source-guide-package-media/image75.jpeg)
- package=ppt/media/image76.jpeg; bytes=155238; sha256=d0eb9e61e80a2fb4c378dbbd7bb78cbeabaa563bc1c708c2a7dcac40f14d7231; file=[image76.jpeg](source-guide-package-media/image76.jpeg)
- package=ppt/media/image77.png; bytes=36816; sha256=177226184c4d50c9585dbb6e4552e41354ad56200e357182982fac6f9b4d0086; file=[image77.png](source-guide-package-media/image77.png)
- package=ppt/media/image78.png; bytes=43316; sha256=8ecf710fca72239dc4e6d461f512b926453ceb36003bd9d1cd4f31bb9966afaf; file=[image78.png](source-guide-package-media/image78.png)
- package=ppt/media/image79.png; bytes=43611; sha256=ef10025b4470d786b4a16fc768bd3dd9919cdb0a2c647d9d1a878135d8fcb14b; file=[image79.png](source-guide-package-media/image79.png)
- package=ppt/media/image8.jpeg; bytes=113191; sha256=9b6cced96bc25d6497465faa98dc80e46e3a28e647b205c3df5ae9d11d2c4789; file=[image8.jpeg](source-guide-package-media/image8.jpeg)
- package=ppt/media/image80.png; bytes=2778; sha256=7f1f36c723d799d4b70cffc123329d23e6bfc18411c99ed0532c5d7f8c79ae75; file=[image80.png](source-guide-package-media/image80.png)
- package=ppt/media/image81.png; bytes=2989; sha256=76f0e00d0364fe42d4fcdb269dcf3285d3504e9fe1b229f81c4585c87b82301c; file=[image81.png](source-guide-package-media/image81.png)
- package=ppt/media/image82.png; bytes=44035; sha256=be92f326034e5d224f95782f14ef9a03b65f63ea15566a30d221e9b5881281cb; file=[image82.png](source-guide-package-media/image82.png)
- package=ppt/media/image83.png; bytes=46115; sha256=0f096a778f4de36af7738aa2e2367c8fcd7ff680ac9e6bf287dfbca824f05f29; file=[image83.png](source-guide-package-media/image83.png)
- package=ppt/media/image84.png; bytes=7301; sha256=b6cc43ed58b03fdfe5d24cb55baa327d20e4529dd4be66444dad90093cc3a9a9; file=[image84.png](source-guide-package-media/image84.png)
- package=ppt/media/image85.png; bytes=45510; sha256=efe81801ebd3e9d838aceeb625587d6fbe77af891f539fbdef285bc8b2fdc885; file=[image85.png](source-guide-package-media/image85.png)
- package=ppt/media/image86.png; bytes=36622; sha256=31f1a3e531b42f3638bc2eb740473fa4976bca57aef2c4261b9df8ce0b655c81; file=[image86.png](source-guide-package-media/image86.png)
- package=ppt/media/image87.png; bytes=37452; sha256=d2615e87471b8a87d393f7f9f8b3b9fba81f5bb686f2218d0416393fd8ac174c; file=[image87.png](source-guide-package-media/image87.png)
- package=ppt/media/image88.png; bytes=7833; sha256=9bb48ebbde728e488740e0f1cdeb18899a43d9cb92794deda7102c0f809f134c; file=[image88.png](source-guide-package-media/image88.png)
- package=ppt/media/image89.jpeg; bytes=34684; sha256=19f35b23b9b50dbff3323549355b743a8c848566ce9d092a21ce24db9b17acd2; file=[image89.jpeg](source-guide-package-media/image89.jpeg)
- package=ppt/media/image9.jpeg; bytes=6743; sha256=fd0c4f9ef7c43f1405c94e105604a697bf930842b2b137784ffaefccb9913a72; file=[image9.jpeg](source-guide-package-media/image9.jpeg)
- package=ppt/media/image90.jpeg; bytes=28775; sha256=2e38651794f20c01e37585fc553fb463f12d7a9bae9862e7fd052f1945efdaf6; file=[image90.jpeg](source-guide-package-media/image90.jpeg)
- package=ppt/media/image91.png; bytes=23414; sha256=27434a5f8d78183e5fecc7275d7c757b8fdd7615891a724221c3162511a1a326; file=[image91.png](source-guide-package-media/image91.png)
- package=ppt/media/image92.png; bytes=29670; sha256=cb8242e30dbf19455d89c59d49e34bb51f1d6ba2feedaa02faef86d3e0cb7580; file=[image92.png](source-guide-package-media/image92.png)
- package=ppt/media/image93.png; bytes=13926; sha256=b5eb42544483bd04f65066bf4286d191f8301d69911e33167faacfec9429a575; file=[image93.png](source-guide-package-media/image93.png)
- package=ppt/media/image94.png; bytes=20213; sha256=999e5d3421ee9fc9e33bc057b423e48bc64b45d411f3953234af526e7a492196; file=[image94.png](source-guide-package-media/image94.png)
- package=ppt/media/image95.png; bytes=6992; sha256=eb2a37486795f599757e99b158fa003f44cbae46ac86e5f885ab0577175b15bd; file=[image95.png](source-guide-package-media/image95.png)
- package=ppt/media/image96.png; bytes=8302; sha256=19bfee52399972d954c8d35576bbfe64376eba6762d9cade581f7869307f2c22; file=[image96.png](source-guide-package-media/image96.png)
- package=ppt/media/image97.png; bytes=9347; sha256=f0f7c86879d49dd4b87cbafa23f7a9051cd29c1977a551cf135e45dc85f31f26; file=[image97.png](source-guide-package-media/image97.png)
- package=ppt/media/image98.png; bytes=41554; sha256=e6e3581e3c578ab3f6a0906eedbb99565f6d741aac4a97ccd2c606b11759fe12; file=[image98.png](source-guide-package-media/image98.png)
- package=ppt/media/image99.png; bytes=9079; sha256=1c8168b96110370c9218524d9083292b4bf9154d8d2e2d692b64bcecae2a287c; file=[image99.png](source-guide-package-media/image99.png)
