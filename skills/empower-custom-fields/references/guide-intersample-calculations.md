# Guide reference: intersample and intersample-summary calculations

Evidence status throughout: **Waters training-guide evidence** from slides 187-219 of the December 2018 Empower 3 deck. These examples depend heavily on result-set processing order, labels, injections, channels, component references, and field settings. They have not been reproduced in the user’s Empower installation.

## Two formula families

### Non-summary intersample calculation

General syntax:

```text
Label.Injection.Channel(Field)
```

Example shown by the guide:

```text
S0101.1.ACQUITY TUV ChA(Area)
```

This selects one matching value. The three selectors are the sample label, injection number, and channel; the field is inside parentheses. (Slides 188-190)

### Intersample-summary calculation

General syntax:

```text
Label.Injection.Channel.Function(Field)
```

Example:

```text
S0101.1.ACQUITY TUV ChA.AVE(Area)
```

This searches multiple matching results and applies a summary. Functions listed by the guide are `AVE`, `MAX`, `MIN`, `SUM`, `%RSD`, and `PROD`. (Slides 208-210)

## Selectors, omissions, and wildcards

The periods remain when a selector is omitted. Examples: (Slides 189-190)

```text
Label.Injection.(Field)
Label..Channel(Field)
Label..(Field)
.Injection.(Field)
..(Field)
```

Wildcards:

- `%` matches any number of characters.
- `?` matches one character.
- `SAME` means the same label, injection, or channel as the current result, depending on position.

Examples supplied by the guide:

```text
SAME.1.ACQUITY TUV ChA(Area)
SAME.1.486(Area)
Std.1.SAME(Area)
```

The transcript sometimes omits the final `(Area)` where the slide is explaining selectors rather than presenting a full formula. A generated formula must include the field expression required by the actual calculation. (Slides 189-190)

The guide says labels are assigned in the sample set or Alter Sample and that exact spelling/capitalization matters. (Slides 188-193)

## Search Order

The wizard exposes four Search Order values. (Slides 194-198)

| Search Order | Guide behavior |
|---|---|
| Result Set First | Search the current result set first, then results outside it. A label or `%` is required to search outside. |
| Result Set Only | Search only the current result set. No value is produced for an individually processed result that has no result set. |
| Outside First | Search outside the current result set first, then the current result set. A label or `%` is required. |
| Outside Only | Search only outside the current result set. A label or `%` is required. |

The deck abbreviates Result Set as `RSet` in screenshots and notes.

## Non-summary search behavior

The guide describes the following rules: (Slides 197-203)

- When a sample set is processed, results are considered in acquired order.
- A later result is not available to an earlier result during ordinary per-result calculation.
- The search stops at the matching target with the highest available Result ID.
- If the current result itself matches the target, the current result supplies the value and no further search is needed.
- With no label, the calculation refers to the current sample line of the current result set, so Search Order has no effect.
- With no channel, the current channel is used.
- With no label, an individually processed channel does not produce a value.
- `Result Set Only` does not produce a value for an individually processed result.
- A specified label with omitted injection selects the most recent preceding matching result in a non-summary calculation.
- With both label and injection omitted, the formula uses the current injection.

These rules are source claims; exact behavior should be checked for the user’s processing workflow.

## Blank subtraction example

The narrative introduces: (Slides 191-198)

```text
Area_Subtr = Area-(BL..(Area))
```

The wizard screenshot instead names the field `Corr_Area` and uses the same formula. Settings shown or stated include Search Order `Result Set Only`, blank sample label `BL`, and processing as a sample/result set with the blank first. The guide then assigns the corrected field as the Processing Method Y-value.

Consequences shown:

- The blank subtracts its own area and becomes zero.
- A Theobromine peak that is absent from the blank is not corrected by a blank peak.
- Result order matters because future results are not considered in an ordinary non-summary calculation.

The name conflict (`Area_Subtr` versus `Corr_Area`) must be resolved against the actual project.

## Injection-selector examples

The guide demonstrates these current-label formulas: (Slide 199)

```text
..(Amount)
.1.(Amount)
.2.(Amount)
.%.(Amount)
```

The examples illustrate current-injection Amount, injection 1, injection 2, and any-injection matching behavior. Exact displayed results are preserved in the slide screenshot linked from the raw transcript.

With a label wildcard: (Slide 200)

```text
U%..(Amount)
U%.%.(Amount)
```

The deck explains that `U%..(Amount)` selects a previous matching U-labelled result when the injection is omitted, while the wildcard-injection form can return the current matching injection.

## Duplicate-injection calculations

Non-summary average of two specific injections: (Slides 201, 204-205)

```text
(.1.(Amount)+.2.(Amount))/2
```

With `All or Nothing` disabled, an early result may use only the available first-injection value and still divide by two. With `All or Nothing` enabled, the expression does not calculate until both targets exist. When `Summarize Custom Fields` is placed after the samples, the deck shows the calculation being populated for all prior matching results after both injections are available.

The guide contrasts this with:

```text
...AVE(Amount)
```

Without an injection selector, this summary can return only the current Amount rather than a duplicate-injection average in the shown context. For an all-injection summary, the examples use wildcard selectors such as:

```text
%.%..AVE(Amount)
U%.%..AVE(Amount)
SAME.%..AVE(Amount)
```

The deck shows `U%.%..AVE(Amount)` averaging all matching U-labelled injections and gives `50.103` in its example. `SAME.%..AVE(Amount)` averages injections sharing the current label and gives example results `46.960` for U0101 and `53.245` for U0103. (Slides 201-203)

## `All or Nothing`

The guide states: (Slides 204-207, 212-214)

- Enabled: a non-summary formula calculates only when all explicitly targeted values are found.
- Disabled: it calculates with values that are available, which can produce an unintended partial result.
- The setting does not apply to the summary operation itself.
- If a non-summary operation is nested inside a summary formula, `All or Nothing` applies to that nested non-summary part.

Because availability changes with processing order, this setting must be captured in any reusable intersample field specification.

## Multiple channels

When Channel is omitted, the guide says the formula uses the current channel. To target an ELSD channel explicitly, it shows: (Slides 206-207)

```text
(.1.ELSD%(Amount)+.2.ELSD%(Amount))/2
```

The wildcard accepts channels beginning with `ELSD`. The example uses `All or Nothing` so both injection/channel values must be present.

## Summary search examples

The summary-formula slide gives these examples: (Slide 209)

```text
A...AVE(CCompRef1[Area])
Std.%..MIN(Retention Time)
?1...SUM(Amount)
```

They demonstrate a literal label with a component reference, wildcard injections with a retention-time minimum, and a single-character label wildcard with an Amount sum. The precise intended label conventions are not defined by the deck.

## Intersample-summary behavior

The guide states: (Slides 211-214)

- Summary calculations run after individual results are processed and can include later results within the result set.
- A summary search exhausts the selected search areas and can use multiple results.
- A result outside the current result set must already have been processed.
- To search outside, include a label and use Result Set First or Outside First.
- No label, Result Set Only, or Outside Only will not search outside during individual-result processing as described by the deck.
- During ordinary individual-result processing, future results are ignored.
- With label supplied and injection omitted, the search takes the most recent unique matching result for each injection number, using the highest Result ID available at or before the current processing point; the current result is excluded in the guide’s summary description.
- `All or Nothing` does not apply to the summary aggregation itself, but can apply to a nested non-summary expression.

These details make result-set membership and processing history part of the formula’s inputs.

## Sample-set functions that trigger summaries

The guide says a summary custom field normally needs a function row in Run Samples or Alter Sample after the data rows. Individual processing can show a rolling result, but the deck recommends processing result sets and using a summary function row for final population. (Slides 204-218)

Four functions are described:

| Function | Guide behavior |
|---|---|
| Summarize Custom Fields | Summarizes matching samples above the function row and stores results for those samples. Normally placed at the end of a group or result set. |
| Summarize Custom Fields (Exclude Faulted) | Same behavior but excludes faulted individual results outside system-suitability limits. |
| Summarize Custom Fields Incrementally | Summarizes matching results above the current function row and below the previous incremental summary row; prior groups remain unchanged. Can appear more than once. |
| Summarize Custom Fields Incrementally (Exclude/Excluded Faulted) | Incremental version that excludes faulted results; the deck uses both “Exclude” and “Excluded” wording. |

The incremental example inserts a function after a series of standards and another after the last sample, allowing separate blocks to be summarized. (Slides 215-218)

## Minimum reusable specification for an intersample field

Record all of these before presenting the formula as ready to build:

1. Exact field name, type, data type, width, and precision.
2. Complete formula with all periods and parentheses preserved.
3. Sample label rules, including capitalization and wildcard intent.
4. Injection selector and whether duplicate injections are expected.
5. Channel selector and whether a wildcard is safe.
6. Referenced peak/component and any `CCompRef`/`CCalRef` assignments.
7. Search Order.
8. `All or Nothing` setting.
9. Sample Type, Peak Type, and Missing Peak settings.
10. Acquisition and processing order, result-set membership, and summary-function row placement.
11. Behavior for missing targets, faulted results, and individually processed results.
12. One observed input/result set and Empower output from the target version.

Until these are known, an intersample formula is a draft based on guide syntax rather than a verified field.
