# Lesson 003: 2489 UV maximum-Height wavelength fields

Revision: 1, recorded 2026-09-16.

Source: requirement, detector behavior, formulas, and successful Empower test reported by the user in this project conversation. The formulas were drafted by the assistant and then tested by the user, who reported on 2026-09-16: "For the UV it works perfectly."

Evidence status: **assistant-authored formulas with user-reported successful Empower execution**. This confirms the three formulas worked for the user's tested 2489 UV workflow. The exact Empower version/build, exported wizard settings, numerical Heights, displayed wavelength results, screenshots, and formal validation evidence were not supplied.

This record covers only the 2489 UV implementation. The proposed PDA implementation remains unconfirmed and is intentionally not recorded here as working knowledge.

## Requirement

For one identified peak, report the wavelength whose peak `Height` is greatest within each range:

- 202 through 208 nm
- 242 through 248 nm
- 270 through 276 nm

Each range requires its own output because the three maxima are independent results.

## 2489 channel limitation and label solution

User-confirmed detector behavior:

- The 2489 result Channel Name is fixed as `W2489 ChA` for the wavelength results.
- The wavelength is visible in a separate description value, for example `W2489 ChA 276nm`.
- The description is not used in the intersample Channel selector in this working solution.

The successful design encodes wavelength in the Sample Set label. Each wavelength is acquired or represented by its own sample-set line with Injection 1:

| Range | Labels | Channel Name |
|---|---|---|
| 202-208 nm | `W202`, `W203`, `W204`, `W205`, `W206`, `W207`, `W208` | `W2489 ChA` |
| 242-248 nm | `W242`, `W243`, `W244`, `W245`, `W246`, `W247`, `W248` | `W2489 ChA` |
| 270-276 nm | `W270`, `W271`, `W272`, `W273`, `W274`, `W275`, `W276` | `W2489 ChA` |

This changes the distinguishing selector from Channel to Label. Exact label and channel capitalization must be preserved.

## Field 1: maximum wavelength from 202 through 208 nm

Suggested name: `UV_Max_WL_202_208`.

Exact user-tested formula:

```text
ENUM(EQ(W202.1.W2489 ChA(Height),W20%.1.W2489 ChA.MAX(Height)),EQ(W203.1.W2489 ChA(Height),W20%.1.W2489 ChA.MAX(Height)),EQ(W204.1.W2489 ChA(Height),W20%.1.W2489 ChA.MAX(Height)),EQ(W205.1.W2489 ChA(Height),W20%.1.W2489 ChA.MAX(Height)),EQ(W206.1.W2489 ChA(Height),W20%.1.W2489 ChA.MAX(Height)),EQ(W207.1.W2489 ChA(Height),W20%.1.W2489 ChA.MAX(Height)),EQ(W208.1.W2489 ChA(Height),W20%.1.W2489 ChA.MAX(Height)))
```

Translation table:

| Position | Translation |
|---:|---|
| 0 | `202 nm` |
| 1 | `203 nm` |
| 2 | `204 nm` |
| 3 | `205 nm` |
| 4 | `206 nm` |
| 5 | `207 nm` |
| 6 | `208 nm` |

`W20%.1.W2489 ChA.MAX(Height)` returns the maximum Height among matching `W20%` labels in Injection 1 and channel `W2489 ChA`. Each `EQ` identifies which exact wavelength label supplied that maximum.

## Field 2: maximum wavelength from 242 through 248 nm

Suggested name: `UV_Max_WL_242_248`.

Exact user-tested formula:

```text
ENUM(EQ(W242.1.W2489 ChA(Height),W24%.1.W2489 ChA.MAX(Height)),EQ(W243.1.W2489 ChA(Height),W24%.1.W2489 ChA.MAX(Height)),EQ(W244.1.W2489 ChA(Height),W24%.1.W2489 ChA.MAX(Height)),EQ(W245.1.W2489 ChA(Height),W24%.1.W2489 ChA.MAX(Height)),EQ(W246.1.W2489 ChA(Height),W24%.1.W2489 ChA.MAX(Height)),EQ(W247.1.W2489 ChA(Height),W24%.1.W2489 ChA.MAX(Height)),EQ(W248.1.W2489 ChA(Height),W24%.1.W2489 ChA.MAX(Height)))
```

Translation table:

| Position | Translation |
|---:|---|
| 0 | `242 nm` |
| 1 | `243 nm` |
| 2 | `244 nm` |
| 3 | `245 nm` |
| 4 | `246 nm` |
| 5 | `247 nm` |
| 6 | `248 nm` |

`W24%.1.W2489 ChA.MAX(Height)` returns the maximum Height among matching `W24%` labels.

## Field 3: maximum wavelength from 270 through 276 nm

Suggested name: `UV_Max_WL_270_276`.

Exact user-tested formula:

```text
ENUM(EQ(W270.1.W2489 ChA(Height),W27%.1.W2489 ChA.MAX(Height)),EQ(W271.1.W2489 ChA(Height),W27%.1.W2489 ChA.MAX(Height)),EQ(W272.1.W2489 ChA(Height),W27%.1.W2489 ChA.MAX(Height)),EQ(W273.1.W2489 ChA(Height),W27%.1.W2489 ChA.MAX(Height)),EQ(W274.1.W2489 ChA(Height),W27%.1.W2489 ChA.MAX(Height)),EQ(W275.1.W2489 ChA(Height),W27%.1.W2489 ChA.MAX(Height)),EQ(W276.1.W2489 ChA(Height),W27%.1.W2489 ChA.MAX(Height)))
```

Translation table:

| Position | Translation |
|---:|---|
| 0 | `270 nm` |
| 1 | `271 nm` |
| 2 | `272 nm` |
| 3 | `273 nm` |
| 4 | `274 nm` |
| 5 | `275 nm` |
| 6 | `276 nm` |

`W27%.1.W2489 ChA.MAX(Height)` returns the maximum Height among matching `W27%` labels.

## Calculation behavior

Each formula follows the same pattern:

1. The intersample-summary `MAX(Height)` selector finds the largest Height within the label family.
2. Seven exact-label `EQ` expressions compare each wavelength Height with that maximum.
3. `ENUM` returns the position of the first true comparison.
4. The translation table displays that position as the wavelength.

If two wavelengths have exactly equal maximum Heights, more than one `EQ` is true. Because `ENUM` evaluates left to right, the lower wavelength is returned. This tie rule is an arithmetic interpretation of the formula; the user has not reported a tie test.

## Settings and processing status

The assistant proposed these settings with the working formulas:

- Field Type: Peak
- Data Type: Enumerated
- Source: Calculated
- Search Order: Result Set Only
- All or Nothing: Enabled
- Peak Type: Founds Only
- Use As: Text
- Process all required wavelength results in the same result set
- Place `Summarize Custom Fields` after the applicable wavelength rows
- Use the same identified component/peak across all wavelength results

The user confirmed that the UV implementation worked but did not supply an exported wizard configuration. Therefore, the formulas and label-based selection are user-reported successful, while the precise wizard selections remain **assistant-proposed pending configuration evidence**.

## Reuse limits

- Use these formulas only when wavelength is represented by the exact `W###` labels and the result Channel Name is `W2489 ChA`.
- The wildcard families must contain only the intended seven labels. For example, unrelated `W209`, `W249`, or `W279` labels could be included by `W20%`, `W24%`, or `W27%` and change the maximum.
- Each wavelength line must use Injection 1. Change the selector only if the actual acquisition design uses a different injection number, then test the changed formula.
- `Height` is the absorbance response chosen by the user for this wavelength-accuracy calculation.
- These fields identify the maximum wavelength for the current corresponding peak. Confirm component identification and processing consistency when more than one peak is present.
- Do not substitute the Channel Description into the intersample Channel position.

## Natural-language retrieval examples

- Find the wavelength with the highest 2489 peak Height between 202 and 208 nm.
- Report lambda maximum for the 242-248 nm range using the `W242` through `W248` labels.
- Find the maximum-absorbance wavelength from `W270` through `W276` on `W2489 ChA`.

## Open evidence gaps

1. Empower version and build used for the successful test.
2. Actual saved field names and exported wizard settings.
3. One full numerical Height set and observed output for each range.
4. Sample Type and Missing Peak selections.
5. Output behavior before and after the `Summarize Custom Fields` row.
6. Observed behavior when two wavelengths have equal maximum Heights.

## External Waters evidence used during design

- Waters' intersample guidance describes selectors based on Label, Injection, and Channel and recommends `Result Set Only` when the calculation should remain in the current result set: [How to create an Intersample Custom Field](https://support.waters.com/KB_Inf/Empower_Tips_of_the_Week/WKB68884_How_to_create_an_Intersample_Custom_Field).
- Waters documents that an omitted or matching intersample Channel condition works from the Channel Name, supporting the need to distinguish these 2489 results through Label: [Why does my intersample custom field not include the expected channels?](https://support.waters.com/KB_Inf/Empower_Breeze/WKB271675_Why_does_my_intersample_custom_field_not_include_the_expected_channels).
- Waters shows Channel Description as a separate reporting/filtering property: [How to print detector data on separate chromatograms](https://support.waters.com/KB_Inf/Empower_Breeze/WKB91426_How_to_print_Empower_3_system_pressure_and_detector_data_on_separate_chromatograms).

These links are Waters Knowledge Center design evidence. The user's successful execution report is the evidence that the three formulas worked in the user's environment.

## Revision history

- 2026-09-16, revision 1: Recorded the corrected ranges, fixed 2489 Channel Name behavior, wavelength-label sample-set design, exact three formulas and translations, user-reported successful UV execution, proposed settings, reuse limits, and remaining evidence gaps. PDA formulas were excluded pending the user's test.
