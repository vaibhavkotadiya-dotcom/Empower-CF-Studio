# Lesson 002: Five-point bracketing-standard %RSD

Revision: 1, recorded 2026-09-15.

Source: requirement and successful Empower test reported by the user in this project conversation. The formula was initially drafted by the assistant from the requirement and the December 2018 guide syntax; on 2026-09-15, the user reported: "Your formula has worked for the RSD calculation, I tested and it is workin so effecitvely."

Evidence status: **assistant-authored formula with user-reported successful Empower execution**. This establishes that the formula worked in the user's environment for the tested RSD calculation, including the dynamic `REPLACE` expression. The Empower version/build, exported custom-field settings, numerical inputs, displayed outputs, component/channel details, and test evidence were not supplied. It is therefore not a formal site validation or proof that the same setup works in every Empower installation.

## Requirement

Use one custom field for all of these results:

- At the fifth initial standard injection, calculate sample %RSD using initial standard injections 1 through 5.
- At the first bracketing standard, calculate sample %RSD using initial standard injections 1 through 4 plus the first bracket.
- At the second bracket, use initial standard injections 1 through 4 plus the second bracket, excluding the first bracket.
- Continue the same rule for any later bracket without creating a separate formula for each bracket.

The calculation always contains five area values. The first four are fixed; the fifth value changes with the current result.

## Sample-set design used by the formula

| Sample-set position | Label | Injection setup | Role |
|---|---|---|---|
| Initial standard | `S1` | One sample line with 5 injections | `S1.1` through `S1.4` are the permanent reference results; `S1.5` completes the initial five-standard RSD |
| First bracket | `BRK01` | 1 injection | Replaces `S1.5` in the five-point group at this result |
| Second bracket | `BRK02` | 1 injection | Replaces the previous bracket; the first bracket is not included |
| Later brackets | `BRK03`, `BRK04`, etc. | 1 injection each | The current matching bracket supplies the fifth value |

The common `BRK` prefix is required by the wildcard selector `BRK%`. The suffix can continue for an unknown number of brackets. Exact label capitalization must match the sample set.

The initial standards must be five injections of one `S1` sample line. Five separate sample lines that each have Injection 1 would not satisfy the explicit selectors `S1.1` through `S1.5`.

## Exact tested formula

```text
SQRT(((S1.1.(Area)**2+S1.2.(Area)**2+S1.3.(Area)**2+S1.4.(Area)**2+REPLACE(BRK%.%.(Area),S1.5.(Area))**2)-((S1.1.(Area)+S1.2.(Area)+S1.3.(Area)+S1.4.(Area)+REPLACE(BRK%.%.(Area),S1.5.(Area)))**2/5))/4)/((S1.1.(Area)+S1.2.(Area)+S1.3.(Area)+S1.4.(Area)+REPLACE(BRK%.%.(Area),S1.5.(Area)))/5)*100
```

Preserve the periods, parentheses, `**`, wildcard, and capitalization when reusing the formula. Replace `Area` only when the intended measured field is different and that change has been checked in Empower.

## How the selector works

The changing fifth value is:

```text
REPLACE(BRK%.%.(Area),S1.5.(Area))
```

- At the initial `S1` sequence, no earlier/current `BRK%` result is available. `REPLACE` supplies `S1.5.(Area)`, so Injection 5 reports the RSD for `S1.1` through `S1.5`.
- At a `BRK01`, `BRK02`, or later matching result, the non-summary wildcard reference matches the current bracket. Empower uses that bracket Area as the fifth value.
- Each bracket result therefore combines the same `S1.1` through `S1.4` values with its own Area. Earlier brackets are not part of the five-value arithmetic.

The user-reported test resolves the earlier uncertainty about whether the user's Empower environment accepts the intersample reference `S1.5.(Area)` as the second argument of `REPLACE`: it did for this formula and tested workflow. General behavior in other versions or configurations remains unestablished.

## Arithmetic represented by the formula

Let the five included areas be `x1` through `x5`, with:

```text
S = x1+x2+x3+x4+x5
Q = x1**2+x2**2+x3**2+x4**2+x5**2
```

The formula calculates:

```text
Mean = S/5
Sample variance = (Q-S**2/5)/4
%RSD = SQRT(Sample variance)/Mean*100
```

The divisor `4` is `n-1` for a five-result sample standard deviation. This is an arithmetic check of the expression. The calculation is undefined when the five-area mean is zero.

## Custom-field settings and processing

The assistant originally proposed the following settings with the formula:

- Field scope/type: Peak
- Data type/source: Real / Calculated
- Search Order: Result Set Only
- All or Nothing: Enabled
- Sample Type: Standards Only
- Peak Type: Founds Only
- Process the initial standards and brackets in the same result set
- Use direct non-summary references; no `Summarize Custom Fields` row was proposed
- Specify the channel explicitly if the method has multiple relevant channels

These remain **assistant-proposed settings** because the user confirmed that the formula worked but did not supply the actual wizard configuration or sample-set export used in the test. Do not relabel them as site-confirmed until those settings are provided.

With `All or Nothing` enabled, a valid result is expected only after all five referenced values are available. For the initial sequence, the meaningful initial output is therefore at `S1` Injection 5. This processing expectation comes from the guide plus the formula structure; the user's test report did not document output behavior on Injections 1 through 4.

## Reuse limits and generation rules

- Reuse this exact formula only for a five-point group made from four fixed initial injections plus one changing fifth value.
- Use `S1` and the `BRK` prefix unless the formula is updated to match different actual labels.
- This is a direct Area-based RSD. Confirm the intended component/peak and channel before production use.
- Do not replace this expression with `BRK%.%..%RSD(Area)`: that summary would aggregate matching brackets rather than calculate each bracket with the fixed first four standards.
- If the number of fixed standards or total RSD members changes, recalculate the constants `/5` and `/4` and re-test the resulting formula.

## Natural-language retrieval examples

- Calculate the initial five-standard RSD and then each bracketing-standard RSD with one field.
- Use the first four S1 injections plus the current BRK standard for %RSD.
- Exclude earlier brackets when calculating the RSD for the current bracketing standard.

## Open evidence gaps

1. Empower version and build used for the successful test.
2. Actual field name, width, precision, units, component/peak, channel, and wizard settings.
3. Exact Search Order, All or Nothing, Sample Type, Peak Type, and Missing Peak selections used in the test.
4. One numerical set containing the five initial Areas, at least two bracket Areas, and the displayed Empower %RSD at each required row.
5. Behavior observed on `S1` Injections 1 through 4 and on any unrelated standard rows.

## Revision history

- 2026-09-15, revision 1: Recorded the requirement, exact assistant-authored single formula, sample-set label design, arithmetic interpretation, proposed settings, and the user's report that the formula worked effectively in Empower. Marked the dynamic `REPLACE` pattern as successful for the user's tested workflow while retaining the missing environment and numerical evidence as open gaps.
