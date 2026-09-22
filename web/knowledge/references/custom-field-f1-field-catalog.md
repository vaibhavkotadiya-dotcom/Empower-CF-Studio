# Field catalog and dependency index: Custom_Field_F1.xlsx

## Evidence labels

- Names, settings, and formulas are **user-provided workbook evidence**.
- Direct dependencies are **mechanically matched** against names in the same workbook, including case-only matches that are separately flagged.
- Family, role, and meaning are **assistant interpretations** based on names and formulas. They require user confirmation before becoming site conventions.
- None of these definitions is marked Empower-tested because the workbook does not contain an Empower version, processing settings, inputs, or observed results.

## Summary

- Fields: 201
- Field types: Sample 35, Peak 131, Component 21, Result 14
- Sources: Keyboard 56, Calculated 143, External 2
- Required manual fields: 16
- Intersample or inter-injection formulas detected: 36

## Accuracy and recovery

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 2 | `Added_Amount` | Peak / Calculated | Calculated | `SD1`, `SD2`, `SD3`, `SD4`, `SD5`, `SD6`, `SD7`, `Standard_Potency`, `MW1`, `MW2` | No | Calculated field for Added Amount; purpose is inferred from its name and exact formula. | `Value/SD1*SD2/SD3*SD4/SD5*SD6/SD7*Standard_Potency/100*MW1/MW2*1000` |
| 3 | `Added_Amount_Percentage` | Peak / Calculated | Calculated | `Added_Amount`, `Sample_Concentration_PPM` | No | Calculated field for Added Amount Percentage; purpose is inferred from its name and exact formula. | `Added_Amount/Sample_Concentration_PPM*100` |
| 4 | `Added_Amount_PPM` | Peak / Calculated | Calculated | `SampleWeight`, `TD1`, `TD2`, `TD3`, `TD4`, `TD5`, `TD6`, `TD7`, `Sample_Potency`, `MW1`, `MW2` | No | Calculated field for Added Amount PPM; purpose is inferred from its name and exact formula. | `SampleWeight/TD1*TD2/TD3*TD4/TD5*TD6/TD7*Sample_Potency/100*MW1/MW2 *1000` |
| 16 | `AVE_RECOVERY_ASSAY` | Peak / Calculated | Intersample calculated | `Recovery_UNSP` | Yes | Cross-sample or cross-injection calculation for AVE RECOVERY ASSAY; selector meaning depends on the sample-set labels and processing order. | `SAME.%..AVE(Recovery_UNSP)+EQ(Injection,1)*-1*50000+EQ(Injection,3)*-1*50000` |
| 18 | `AVG_FOUND_AMOUNT` | Peak / Calculated | Intersample calculated | `Found_Amoun_UNSP` | Yes | Cross-sample or cross-injection calculation for AVG FOUND AMOUNT; selector meaning depends on the sample-set labels and processing order. | `SAME.%..AVE(Found_Amoun_UNSP)+EQ(Injection,1)*-1*50000+EQ(Injection,3)*-1*50000` |
| 39 | `Found_Amount` | Peak / Calculated | Intersample calculated | `Standard_Average_Area`, `RRF1`, `RRF2`, `Standard_Weight`, `STD_CON`, `Standard_Potency`, `MW1`, `MW2` | Yes | Cross-sample or cross-injection calculation for Found Amount; selector meaning depends on the sample-set labels and processing order. | `(Area-AS.%.(Area))/Standard_Average_Area*RRF1/RRF2*Standard_Weight*STD_CON*(S1.%.(Standard_Potency))/100*(S1.%.(MW1))/(S1.%.(MW2))*1000` |
| 40 | `Found_Amount_PPM` | Peak / Calculated | Calculated | `Sample_Response_Mean`, `Standard_Average_Area_Cal`, `SD1`, `SD2`, `SD3`, `SD4`, `SD5`, `SD6`, `SD7`, `Standard_Potency`, `MW1`, `MW2`, `RRF1`, `RRF2` | No | Calculated field for Found Amount PPM; purpose is inferred from its name and exact formula. | `Sample_Response_Mean/Standard_Average_Area_Cal*Value/SD1*SD2/SD3*SD4/SD5*SD6/SD7*Standard_Potency/100*MW1/MW2 *RRF1/RRF2*1000` |
| 41 | `Found_Amoun_UNSP` | Peak / Calculated | Intersample calculated | `Standard_Average_Area`, `RRF1`, `RRF2`, `Standard_Weight`, `STD_CON`, `Standard_Potency`, `MW1`, `MW2` | Yes | Cross-sample or cross-injection calculation for Found Amoun UNSP; selector meaning depends on the sample-set labels and processing order. | `Area/Standard_Average_Area*RRF1/RRF2*Standard_Weight*STD_CON*(S1.%.(Standard_Potency))/100*(S1.%.(MW1))/(S1.%.(MW2))*1000` |
| 98 | `Percentage_Recovery` | Peak / Calculated | Calculated | `Found_Amount_PPM`, `Added_Amount_PPM` | No | Calculated field for Percentage Recovery; purpose is inferred from its name and exact formula. | `Found_Amount_PPM/Added_Amount_PPM*100` |
| 110 | `Recovery` | Peak / Calculated | Calculated | `Found_Amount`, `Added_Amount` | No | Calculated field for Recovery; purpose is inferred from its name and exact formula. | `Found_Amount/Added_Amount*100` |
| 111 | `Recovery_UNSP` | Peak / Calculated | Calculated | `Found_Amoun_UNSP`, `Added_Amount` | No | Calculated field for Recovery UNSP; purpose is inferred from its name and exact formula. | `Found_Amoun_UNSP/Added_Amount*100` |
| 126 | `Sample_Concentration_PPM` | Component / Keyboard | Manual input |  | No | Component sample concentration in ppm, default 1. |  |
| 128 | `Sample_Potency` | Sample / Keyboard | Manual input |  | No | Sample potency percentage used in added-amount calculations; default is blank. |  |
| 129 | `Sample_Response_Mean` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Sample Response Mean; selector meaning depends on the sample-set labels and processing order. | `SAME.%..AVE(Area)` |
| 182 | `Test_Target_Conc_PPM` | Sample / Keyboard | Manual input |  | No | Sample test target concentration in ppm; no formula in this workbook references it. |  |

## Assay and content

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 5 | `Amount_Label` | Peak / Calculated | Calculated | `STD_AVG_Area`, `SampleWeight` | No | Calculated field for Amount Label; purpose is inferred from its name and exact formula. | `(Area*Value)/(STD_AVG_Area*SampleWeight)` |
| 7 | `Assay_Average_Area` | Peak / Calculated | Calculated | `mg_Per_Unit_Average_Area`, `Label_Claim` | No | Calculated field for Assay Average Area; purpose is inferred from its name and exact formula. | `mg_Per_Unit_Average_Area/Label_Claim*100` |
| 8 | `Assay_PPM` | Peak / Calculated | Calculated | `Assay_Single_Area` | No | Calculated field for Assay PPM; purpose is inferred from its name and exact formula. | `Assay_Single_Area*10000` |
| 9 | `Assay_Single_Area` | Peak / Calculated | Calculated | `mg_Per_Unit_Single_Area`, `Label_Claim` | No | Calculated field for Assay Single Area; purpose is inferred from its name and exact formula. | `mg_Per_Unit_Single_Area/Label_Claim*100` |
| 10 | `Assay_Single_Area_Amnt_Label` | Peak / Calculated | Calculated | `Amount_Label`, `Dilution_Factor`, `Standard_Potency`, `LOD_Std`, `Water_Std`, `OVI_Std`, `LOD_Spl`, `Water_Spl`, `OVI_Spl`, `Average_Weight`, `Dissolution_Media_Volume`, `No_Of_Units`, `Dose_In_ml`, `Weight_Per_mL`, `MW1`, `MW2`, `Label_Claim` | No | Calculated field for Assay Single Area Amnt Label; purpose is inferred from its name and exact formula. | `(Amount_Label*Dilution_Factor*Standard_Potency/100*(100-LOD_Std-Water_Std-OVI_Std)/(100-LOD_Spl-Water_Spl-OVI_Spl)*Average_Weight*Dissolution_Media_Volume/No_Of_Units*Dose_In_ml*Weight_Per_mL*MW1/MW2)/Label_Claim*100` |
| 11 | `Assay_Single_Area_Label_1st` | Peak / Calculated | Intersample calculated | `Dilution_Factor`, `Standard_Potency`, `LOD_Std`, `Water_Std`, `OVI_Std`, `LOD_Spl`, `Water_Spl`, `OVI_Spl`, `Average_Weight`, `Dissolution_Media_Volume`, `No_Of_Units`, `Dose_In_ml`, `Weight_Per_mL`, `MW1`, `MW2`, `Label_Claim` | Yes | Cross-sample or cross-injection calculation for Assay Single Area Label 1st; selector meaning depends on the sample-set labels and processing order. | `SAME.1..MAX((Amount*Dilution_Factor*Standard_Potency/100*(100-LOD_Std-Water_Std-OVI_Std)/(100-LOD_Spl-Water_Spl-OVI_Spl)*Average_Weight*Dissolution_Media_Volume/No_Of_Units*Dose_In_ml*Weight_Per_mL*MW1/MW2)/Label_Claim*100)` |
| 12 | `Assay_Single_Area_Label_2nd` | Peak / Calculated | Intersample calculated | `Dilution_Factor`, `Standard_Potency`, `LOD_Std`, `Water_Std`, `OVI_Std`, `LOD_Spl`, `Water_Spl`, `OVI_Spl`, `Average_Weight`, `Dissolution_Media_Volume`, `No_Of_Units`, `Dose_In_ml`, `Weight_Per_mL`, `MW1`, `MW2`, `Label_Claim` | Yes | Cross-sample or cross-injection calculation for Assay Single Area Label 2nd; selector meaning depends on the sample-set labels and processing order. | `SAME.2..MAX((Amount*Dilution_Factor*Standard_Potency/100*(100-LOD_Std-Water_Std-OVI_Std)/(100-LOD_Spl-Water_Spl-OVI_Spl)*Average_Weight*Dissolution_Media_Volume/No_Of_Units*Dose_In_ml*Weight_Per_mL*MW1/MW2)/Label_Claim*100)` |
| 17 | `Avg_Assay_PPM` | Peak / Calculated | Intersample calculated | `Assay_PPM` | Yes | Cross-sample or cross-injection calculation for Avg Assay PPM; selector meaning depends on the sample-set labels and processing order. | `SAME.%..AVE(Assay_PPM)` |
| 19 | `AVG_Percentage_Assay_Label` | Peak / Calculated | Calculated | `Assay_Single_Area_Label_1st`, `Assay_Single_Area_Label_2nd` | No | Calculated field for AVG Percentage Assay Label; purpose is inferred from its name and exact formula. | `(Assay_Single_Area_Label_1st+Assay_Single_Area_Label_2nd)/2` |
| 69 | `mg_Per_Unit_Average_Area` | Peak / Calculated | Calculated | `mg_Per_Unit_Single_Area`, `Sample_Average_Area` | No | Calculated field for mg Per Unit Average Area; purpose is inferred from its name and exact formula. | `mg_Per_Unit_Single_Area*Sample_Average_Area/Area` |
| 70 | `mg_Per_Unit_Single_Area` | Peak / Calculated | Calculated | `Dilution_Factor`, `Standard_Potency`, `LOD_Std`, `Water_Std`, `OVI_Std`, `LOD_Spl`, `Water_Spl`, `OVI_Spl`, `Average_Weight`, `Dissolution_Media_Volume`, `No_Of_Units`, `Dose_In_ml`, `Weight_Per_mL`, `MW1`, `MW2` | No | Calculated field for mg Per Unit Single Area; purpose is inferred from its name and exact formula. | `Amount*Dilution_Factor*Standard_Potency/100*(100-LOD_Std-Water_Std-OVI_Std)/(100-LOD_Spl-Water_Spl-OVI_Spl)*Average_Weight*Dissolution_Media_Volume/No_Of_Units*Dose_In_ml*Weight_Per_mL*MW1/MW2` |
| 125 | `Sample_Average_Area` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Sample Average Area; selector meaning depends on the sample-set labels and processing order. | `.%..AVE(Area)+EQ(Injection,1)*-1*50000+EQ(Injection,3)*-1*50000` |
| 173 | `STD_AVG_Area` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for STD AVG Area; selector meaning depends on the sample-set labels and processing order. | `S1.%..AVE(Area)` |

## Blank and response correction

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 6 | `Area_Correction` | Peak / Calculated | Calculated | `Blank_Response` | No | Calculated field for Area Correction; purpose is inferred from its name and exact formula. | `Area-(EQI(Peak Label,"M")*Blank_Response+EQI(Peak Label,"K")*Blank_Response+EQI(Peak Label,"U")*Blank_Response)` |
| 22 | `Blank_Response` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Blank Response; selector meaning depends on the sample-set labels and processing order. | `Blank.%.(Area)` |
| 114 | `Response_Correction` | Peak / Calculated | Calculated | `Area_Correction` | No | Calculated field for Response Correction; purpose is inferred from its name and exact formula. | `(LTE(Area_Correction,0.0)*0.0)+(GT(Area_Correction,0.0)*Area_Correction)` |

## Calibration and display helpers

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 195 | `Value_Amount_Table` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Value Amount Table; selector meaning depends on the sample-set labels and processing order. | `.%.(Value)` |
| 201 | `X_Axis_ppm` | Peak / Calculated | Calculated | `SD1`, `SD2`, `SD3`, `SD4`, `SD5`, `SD6`, `SD7`, `Standard_Potency`, `MW1`, `MW2` | No | Calculated field for X Axis ppm; purpose is inferred from its name and exact formula. | `Value/SD1*SD2/SD3*SD4/SD5*SD6/SD7*Standard_Potency/100*MW1/MW2 *1000` |

## Chromatography performance

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 107 | `Plate_Count_USP` | Peak / Calculated | Calculated |  | No | Calculated field for Plate Count USP; purpose is inferred from its name and exact formula. | `5.54*(Retention Time/Width @ 50%)**2` |
| 112 | `Relative_Resolution_HH` | Peak / Calculated | Calculated |  | No | Calculated field for Relative Resolution HH; purpose is inferred from its name and exact formula. | `1.18*((Retention Time)-CCompRef1[Retention Time])/(Width @ 50%+CCompRef1[Width @ 50%])` |

## Content uniformity and acceptance value

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 13 | `AV` | Peak / Calculated | Calculated | `M_Value`, `Average_Percentage_Assay`, `KS` | No | Calculated field for AV; purpose is inferred from its name and exact formula. | `ABS(M_Value-Average_Percentage_Assay)+KS` |
| 14 | `Average_Percentage_Assay` | Peak / Calculated | Intersample calculated | `Assay_Single_Area` | Yes | Cross-sample or cross-injection calculation for Average Percentage Assay; selector meaning depends on the sample-set labels and processing order. | `SAME.%..AVE(Assay_Single_Area)` |
| 20 | `AV_30` | Peak / Calculated | Calculated | `M_Value`, `Average_Percentage_Assay`, `K_30` | No | Calculated field for AV 30; purpose is inferred from its name and exact formula. | `ABS(M_Value-Average_Percentage_Assay)+K_30` |
| 42 | `Higher_Limit_Individual_Unit` | Peak / Calculated | Calculated | `L2`, `M_Value` | No | Calculated field for Higher Limit Individual Unit; purpose is inferred from its name and exact formula. | `(1+(0.01*L2))*M_Value` |
| 44 | `K` | Sample / Keyboard | Manual input |  | No | Sample acceptance-value coefficient, default 2.4. |  |
| 45 | `KS` | Peak / Calculated | Calculated | `K`, `Standard_Deviation_Perc_Assay` | No | Calculated field for KS; purpose is inferred from its name and exact formula. | `K*Standard_Deviation_Perc_Assay` |
| 46 | `KS_30` | Peak / Calculated | Calculated | `K_30`, `Standard_Deviation_Perc_Assay` | No | Calculated field for KS 30; purpose is inferred from its name and exact formula. | `K_30*Standard_Deviation_Perc_Assay` |
| 47 | `K_30` | Sample / Keyboard | Manual input |  | No | Second acceptance-value input used by the 30-unit branch; exact meaning is not supplied. |  |
| 48 | `L1` | Component / Keyboard | Manual input |  | No | Component acceptance limit, default 15. |  |
| 50 | `L2` | Component / Keyboard | Manual input |  | No | Component individual-unit percentage limit, default 25. |  |
| 67 | `Lower_Limit_Individual_Unit` | Peak / Calculated | Calculated | `L2`, `M_Value` | No | Calculated field for Lower Limit Individual Unit; purpose is inferred from its name and exact formula. | `(1-(0.01*L2))*M_Value` |
| 68 | `MAX_ASSAY_SINGLE_AREA` | Peak / Calculated | Intersample calculated | `Assay_Single_Area` | Yes | Cross-sample or cross-injection calculation for MAX ASSAY SINGLE AREA; selector meaning depends on the sample-set labels and processing order. | `SAME.%..MAX(Assay_Single_Area)` |
| 71 | `MIN_ASSAY_SINGLE_AREA` | Peak / Calculated | Intersample calculated | `Assay_Single_Area` | Yes | Cross-sample or cross-injection calculation for MIN ASSAY SINGLE AREA; selector meaning depends on the sample-set labels and processing order. | `SAME.%..MIN(Assay_Single_Area)` |
| 76 | `M_Value` | Peak / Calculated | Calculated | `Average_Percentage_Assay` | No | Calculated field for M Value; purpose is inferred from its name and exact formula. | `LT(Average_Percentage_Assay,98.5)*98.5+LTE(Average_Percentage_Assay,101.5)&GTE(Average_Percentage_Assay,98.5)*Average_Percentage_Assay+GT(Average_Percentage_Assay,101.5)*101.5` |
| 121 | `RSD_Percentage_Assay` | Peak / Calculated | Intersample calculated | `Assay_Single_Area` | Yes | Cross-sample or cross-injection calculation for RSD Percentage Assay; selector meaning depends on the sample-set labels and processing order. | `SAME.%..%RSD(Assay_Single_Area)` |
| 167 | `Standard_Deviation_Perc_Assay` | Peak / Calculated | Calculated | `RSD_Percentage_Assay`, `Average_Percentage_Assay` | No | Calculated field for Standard Deviation Perc Assay; purpose is inferred from its name and exact formula. | `(RSD_Percentage_Assay*Average_Percentage_Assay)/100` |

## Dissolution

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 82 | `Percentage_Drug_Released` | Peak / Calculated | Calculated | `Standard_Potency`, `Dilution_Factor`, `MW1`, `MW2`, `Label_Claim` | No | Calculated field for Percentage Drug Released; purpose is inferred from its name and exact formula. | `ROUND((Dissolved Amount*Standard_Potency*Dilution_Factor*MW1)/(MW2*Label_Claim) ,0)` |

## Impurity AMV

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 84 | `Percentage_Impurity_AMV` | Peak / Calculated | Intersample calculated | `STD_CON`, `TD1`, `TD3`, `TD2`, `TD5`, `TD4`, `TD6`, `TD7`, `Average_Weight`, `Label_Claim`, `MW1`, `MW2`, `Standard_Potency`, `RRF1`, `RRF2` | Yes | Cross-sample or cross-injection calculation for Percentage Impurity AMV; selector meaning depends on the sample-set labels and processing order. | `(EQI(Peak Label,"K")+EQI(Peak Label,"U"))*Amount*STD_CON*TD1/1*TD3/TD2*TD5/TD4*TD6/TD7*Average_Weight/Label_Claim*(S1.%.(MW1/MW2*Standard_Potency/100))*100*RRF1/RRF2` |
| 100 | `Percentage_Unknown_Imp_AMV` | Peak / Calculated | Intersample calculated | `STD_CON`, `TD1`, `TD3`, `TD2`, `TD5`, `TD4`, `TD6`, `TD7`, `Average_Weight`, `Label_Claim`, `MW1`, `MW2`, `Standard_Potency`, `RRF1`, `RRF2` | Yes | Cross-sample or cross-injection calculation for Percentage Unknown Imp AMV; selector meaning depends on the sample-set labels and processing order. | `EQI(Peak Label,"U")*Amount*STD_CON*TD1/1*TD3/TD2*TD5/TD4*TD6/TD7*Average_Weight/Label_Claim*(S1.%.(MW1/MW2*Standard_Potency/100))*100*RRF1/RRF2` |
| 155 | `Single_Max_Unknown_Imp_AMV` | Result / Calculated | Result aggregate | `Percentage_Unknown_Imp_AMV` | No | Result-level aggregate for Single Max Unknown Imp AMV. | `MAX(Percentage_Unknown_Imp_AMV)` |
| 171 | `Standard_Potency_AMV` | Peak / Calculated | Intersample calculated | `Standard_Potency` | Yes | Cross-sample or cross-injection calculation for Standard Potency AMV; selector meaning depends on the sample-set labels and processing order. | `S1.%.(Standard_Potency)` |

## Impurity LOQ filtering and reporting

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 88 | `Percentage_Imp_AN_LOQ_Dis` | Peak / Calculated | Calculated | `Percentage_Impurity_AN`, `LOQ_Percentage` | No | Calculated field for Percentage Imp AN LOQ Dis; purpose is inferred from its name and exact formula. | `GTE(Percentage_Impurity_AN,LOQ_Percentage)*Percentage_Impurity_AN` |
| 89 | `Percentage_Imp_AN_LOQ_Report` | Peak / Calculated | Calculated | `Percentage_Impurity_AN`, `LOQ_Percentage` | No | Calculated field for Percentage Imp AN LOQ Report; purpose is inferred from its name and exact formula. | `GTE(Percentage_Impurity_AN,LOQ_Percentage)*Percentage_Impurity_AN+LT(Percentage_Impurity_AN,LOQ_Percentage)*-1*60009` |
| 90 | `Percentage_Imp_LOQ_Dis` | Peak / Calculated | Calculated | `Percentage_Impurity`, `LOQ_Percentage` | No | Calculated field for Percentage Imp LOQ Dis; purpose is inferred from its name and exact formula. | `GTE(Percentage_Impurity,LOQ_Percentage)*Percentage_Impurity` |
| 91 | `Percentage_Imp_LOQ_Dis_AMV` | Peak / Calculated | Calculated | `Percentage_Impurity_AMV`, `LOQ_Percentage` | No | Calculated field for Percentage Imp LOQ Dis AMV; purpose is inferred from its name and exact formula. | `GTE(Percentage_Impurity_AMV,LOQ_Percentage)*Percentage_Impurity_AMV` |
| 92 | `Percentage_Imp_LOQ_Report` | Peak / Calculated | Calculated | `Percentage_Impurity`, `LOQ_Percentage` | No | Calculated field for Percentage Imp LOQ Report; purpose is inferred from its name and exact formula. | `GTE(Percentage_Impurity,LOQ_Percentage)*Percentage_Impurity+LT(Percentage_Impurity,LOQ_Percentage)*-1*60009` |
| 187 | `Total_Impurities_LOQ_Dis` | Result / Calculated | Result aggregate | `Percentage_Impurity`, `LOQ_Percentage` | No | Result-level aggregate for Total Impurities LOQ Dis. | `SUM(GTE(Percentage_Impurity,LOQ_Percentage)*Percentage_Impurity)` |
| 188 | `Total_Impurities_LOQ_Dis_AMV` | Result / Calculated | Result aggregate | `Percentage_Impurity_AMV`, `LOQ_Percentage` | No | Result-level aggregate for Total Impurities LOQ Dis AMV. | `SUM(GTE(Percentage_Impurity_AMV,LOQ_Percentage)*Percentage_Impurity_AMV)` |
| 190 | `Total_Imp_AN_LOQ_Dis` | Result / Calculated | Result aggregate | `Percentage_Imp_AN_LOQ_Dis` | No | Result-level aggregate for Total Imp AN LOQ Dis. | `SUM(Percentage_Imp_AN_LOQ_Dis)` |

## Impurity amount based

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 83 | `Percentage_Impurity` | Peak / Calculated | Calculated | `Dilution_Factor`, `Average_Weight`, `Label_Claim`, `MW1`, `MW2`, `Standard_Potency`, `RRF1`, `RRF2` | No | Calculated field for Percentage Impurity; purpose is inferred from its name and exact formula. | `(EQI(Peak Label,"K")+EQI(Peak Label,"U"))*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2` |
| 85 | `Percentage_Impurity_AN` | Peak / Calculated | Calculated | `Percentage_Area_Corrected_AN`, `RRF1`, `RRF2` | No | Calculated field for Percentage Impurity AN; purpose is inferred from its name and exact formula. | `Percentage_Area_Corrected_AN*RRF1/RRF2` |
| 86 | `Percentage_Impurity_AN_Label` | Peak / Calculated | Calculated | `Percnt_Area_Corrected_AN_Labl`, `RRF1`, `RRF2` | No | Calculated field for Percentage Impurity AN Label; purpose is inferred from its name and exact formula. | `Percnt_Area_Corrected_AN_Labl*RRF1/RRF2` |
| 87 | `Percentage_Impurity_Label` | Peak / Calculated | Intersample calculated | `Dilution_Factor`, `Average_Weight`, `Label_Claim`, `MW1`, `MW2`, `Standard_Potency`, `RRF1`, `RRF2` | Yes | Cross-sample or cross-injection calculation for Percentage Impurity Label; selector meaning depends on the sample-set labels and processing order. | `SAME.1..MAX((EQI(Peak Label,"K")+EQI(Peak Label,"U"))*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2)` |
| 93 | `Percentage_Known_Impurity` | Peak / Calculated | Calculated | `Dilution_Factor`, `Average_Weight`, `Label_Claim`, `MW1`, `MW2`, `Standard_Potency`, `RRF1`, `RRF2` | No | Calculated field for Percentage Known Impurity; purpose is inferred from its name and exact formula. | `EQI(Peak Label,"K")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2` |
| 97 | `Percentage_Known_IMP_Label` | Peak / Calculated | Intersample calculated | `Dilution_Factor`, `Average_Weight`, `Label_Claim`, `MW1`, `MW2`, `Standard_Potency`, `RRF1`, `RRF2` | Yes | Cross-sample or cross-injection calculation for Percentage Known IMP Label; selector meaning depends on the sample-set labels and processing order. | `SAME.1..MAX(EQI(Peak Label,"K")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2)` |
| 99 | `Percentage_Unknown_Impurity` | Peak / Calculated | Calculated | `Dilution_Factor`, `Average_Weight`, `Label_Claim`, `MW1`, `MW2`, `Standard_Potency`, `RRF1`, `RRF2` | No | Calculated field for Percentage Unknown Impurity; purpose is inferred from its name and exact formula. | `EQI(Peak Label,"U")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2` |
| 104 | `Percentage_UNK_IMP_Label` | Peak / Calculated | Intersample calculated | `Dilution_Factor`, `Average_Weight`, `Label_Claim`, `MW1`, `MW2`, `Standard_Potency`, `RRF1`, `RRF2` | Yes | Cross-sample or cross-injection calculation for Percentage UNK IMP Label; selector meaning depends on the sample-set labels and processing order. | `SAME.1..MAX(EQI(Peak Label,"U")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2)` |
| 154 | `Single_Max_Unknown_Impurity` | Result / Calculated | Result aggregate | `Percentage_Unknown_Impurity` | No | Result-level aggregate for Single Max Unknown Impurity. | `MAX(Percentage_Unknown_Impurity)` |
| 185 | `Total_Impurities` | Peak / Calculated | Calculated | `Total_Known_Impurity`, `Total_Unknown_Impurity` | No | Calculated field for Total Impurities; purpose is inferred from its name and exact formula. | `Total_Known_Impurity+Total_Unknown_Impurity` |
| 189 | `Total_Impurity_Label` | Result / Calculated | Result aggregate | `Total_Kown_IMP_Label`, `Total_Unknow_IMP_Label` | No | Calculated field for Total Impurity Label; purpose is inferred from its name and exact formula. | `Total_Kown_IMP_Label+Total_Unknow_IMP_Label` |
| 191 | `Total_Known_Impurity` | Result / Calculated | Result aggregate | `Percentage_Known_Impurity` | No | Result-level aggregate for Total Known Impurity. | `SUM(Percentage_Known_Impurity)` |
| 192 | `Total_Kown_IMP_Label` | Result / Calculated | Result aggregate | `Percentage_Known_Imp_AN_Label`; case-only: `Percentage_Known_IMP_AN_Label`→`Percentage_Known_Imp_AN_Label` | No | Result-level aggregate for Total Kown IMP Label. | `SUM(Percentage_Known_IMP_AN_Label)` |
| 193 | `Total_Unknown_Impurity` | Result / Calculated | Result aggregate | `Percentage_Unknown_Impurity` | No | Result-level aggregate for Total Unknown Impurity. | `SUM(Percentage_Unknown_Impurity)` |
| 194 | `Total_Unknow_IMP_Label` | Result / Calculated | Result aggregate | `Percentage_UNK_IMP_Label` | No | Result-level aggregate for Total Unknow IMP Label. | `SUM(Percentage_UNK_IMP_Label)` |

## Impurity area normalization

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 26 | `Corrected_Area_AN` | Peak / Calculated | Calculated | `RRF2` | No | Calculated field for Corrected Area AN; purpose is inferred from its name and exact formula. | `EQI(Peak Label,"K")*Area/RRF2+EQI(Peak Label,"U")*Area/RRF2+EQI(Peak Label,"M")*Area` |
| 27 | `Corrected_Area_AN_Label` | Peak / Calculated | Intersample calculated | `RRF2` | Yes | Cross-sample or cross-injection calculation for Corrected Area AN Label; selector meaning depends on the sample-set labels and processing order. | `SAME.1..MAX(EQI(Peak Label,"K")*Area/RRF2+EQI(Peak Label,"U")*Area/RRF2+EQI(Peak Label,"M")*Area)` |
| 81 | `Percentage_Area_Corrected_AN` | Peak / Calculated | Calculated | `Corrected_Area_AN`, `Total_Corrected_Area_AN` | No | Calculated field for Percentage Area Corrected AN; purpose is inferred from its name and exact formula. | `Corrected_Area_AN/Total_Corrected_Area_AN*100` |
| 94 | `Percentage_Known_Imp_AN` | Peak / Calculated | Calculated | `Percentage_Area_Corrected_AN`, `RRF1`, `RRF2` | No | Calculated field for Percentage Known Imp AN; purpose is inferred from its name and exact formula. | `EQI(Peak Label,"K")*Percentage_Area_Corrected_AN*RRF1/RRF2` |
| 95 | `Percentage_Known_Imp_AN_Label` | Peak / Calculated | Intersample calculated | `Percentage_Area_Corrected_AN`, `RRF1`, `RRF2` | Yes | Cross-sample or cross-injection calculation for Percentage Known Imp AN Label; selector meaning depends on the sample-set labels and processing order. | `SAME.1..MAX(EQI(Peak Label,"K")*Percentage_Area_Corrected_AN*RRF1/RRF2)` |
| 101 | `Percentage_Unknown_Imp_AN` | Peak / Calculated | Calculated | `Percentage_Area_Corrected_AN`, `RRF1`, `RRF2` | No | Calculated field for Percentage Unknown Imp AN; purpose is inferred from its name and exact formula. | `EQI(Peak Label,"U")*Percentage_Area_Corrected_AN*RRF1/RRF2` |
| 102 | `Percentage_UNK_IMP_AN_Label` | Peak / Calculated | Intersample calculated | `Percentage_Area_Corrected_AN`, `RRF1`, `RRF2` | Yes | Cross-sample or cross-injection calculation for Percentage UNK IMP AN Label; selector meaning depends on the sample-set labels and processing order. | `SAME.1..MAX(EQI(Peak Label,"U")*Percentage_Area_Corrected_AN*RRF1/RRF2)` |
| 106 | `Percnt_Area_Corrected_AN_Labl` | Peak / Calculated | Calculated | `Corrected_Area_AN_Label`, `Total_Corrected_Area_AN_Label` | No | Calculated field for Percnt Area Corrected AN Labl; purpose is inferred from its name and exact formula. | `Corrected_Area_AN_Label/Total_Corrected_Area_AN_Label*100` |
| 183 | `Total_Corrected_Area_AN` | Result / Calculated | Result aggregate | `Corrected_Area_AN` | No | Result-level aggregate for Total Corrected Area AN. | `SUM(Corrected_Area_AN)` |
| 184 | `Total_Corrected_Area_AN_Label` | Result / Calculated | Result aggregate | `Corrected_Area_AN_Label` | No | Result-level aggregate for Total Corrected Area AN Label. | `SUM(Corrected_Area_AN_Label)` |

## Impurity disregard threshold

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 28 | `Corrected_Area_Area_Dis` | Peak / Calculated | Calculated | `Disregard_Value` | No | Calculated field for Corrected Area Area Dis; purpose is inferred from its name and exact formula. | `GTE(Area,Disregard_Value)*Area` |
| 32 | `Disregard_Factor` | Component / Keyboard | Manual input |  | No | Component-specific multiplier used to derive an impurity disregard threshold. |  |
| 34 | `Disregard_Reference` | Peak / Calculated | Calculated | `Standard_Average_Area` | No | Calculated field for Disregard Reference; purpose is inferred from its name and exact formula. | `CCompRef1[Standard_Average_Area]` |
| 35 | `Disregard_Value` | Peak / Calculated | Calculated | `Disregard_Factor`, `Disregard_Reference` | No | Calculated field for Disregard Value; purpose is inferred from its name and exact formula. | `Disregard_Factor*Disregard_Reference` |
| 96 | `Percentage_Known_Imp_Area_Dis` | Peak / Calculated | Calculated | `Dilution_Factor`, `Average_Weight`, `Label_Claim`, `MW1`, `MW2`, `Standard_Potency`, `RRF1`, `RRF2`, `Corrected_Area_Area_Dis` | No | Calculated field for Percentage Known Imp Area Dis; purpose is inferred from its name and exact formula. | `EQI(Peak Label,"K")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2*Corrected_Area_Area_Dis/Area` |
| 103 | `Percentage_Unk_Imp_Area_Dis` | Peak / Calculated | Calculated | `Dilution_Factor`, `Average_Weight`, `Label_Claim`, `MW1`, `MW2`, `Standard_Potency`, `RRF1`, `RRF2`, `Corrected_Area_Area_Dis` | No | Calculated field for Percentage Unk Imp Area Dis; purpose is inferred from its name and exact formula. | `EQI(Peak Label,"U")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2*Corrected_Area_Area_Dis/Area` |
| 186 | `Total_Impurities_Area_Dis` | Peak / Calculated | Calculated | `Percentage_Known_Imp_Area_Dis`, `Percentage_Unk_Imp_Area_Dis` | No | Calculated field for Total Impurities Area Dis; purpose is inferred from its name and exact formula. | `Percentage_Known_Imp_Area_Dis+Percentage_Unk_Imp_Area_Dis` |

## Inputs and bridge fields

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 15 | `Average_Weight` | Sample / Keyboard | Manual input |  | No | Average unit or sample weight used by assay and impurity formulas; units are not supplied. |  |
| 30 | `Dilution` | Sample / Keyboard | Manual input |  | No | Default Sample dilution field, default 1; the listed calculations use Dilution_Factor instead. |  |
| 31 | `Dilution_Factor` | Peak / Calculated | Calculated | `SD1`, `SD2`, `SD3`, `SD4`, `SD5`, `SD6`, `SD7`, `TD1`, `TD3`, `TD2`, `TD5`, `TD4`, `TD7`, `TD6` | No | Calculated field for Dilution Factor; purpose is inferred from its name and exact formula. | `1/SD1*SD2/SD3*SD4/SD5*SD6/SD7*TD1/1*TD3/TD2*TD5/TD4*TD7/TD6` |
| 33 | `Disregard_Factor1` | Peak / Calculated | Bridge/copy | `Disregard_Factor` | No | Peak-level copy of `Disregard_Factor`, likely used for display, reporting, or downstream Peak formulas. | `Disregard_Factor` |
| 36 | `Dissolution_Media_Volume` | Sample / Keyboard | Manual input |  | No | Sample dissolution-media volume used in assay calculations; units are not supplied. |  |
| 37 | `Dose_In_ml` | Sample / Keyboard | Manual input |  | No | Sample dose-volume factor used in assay calculations; units are not supplied. |  |
| 49 | `L1_1` | Peak / Calculated | Bridge/copy | `L1` | No | Peak-level copy of `L1`, likely used for display, reporting, or downstream Peak formulas. | `L1` |
| 51 | `L2_1` | Peak / Calculated | Bridge/copy | `L2` | No | Peak-level copy of `L2`, likely used for display, reporting, or downstream Peak formulas. | `L2` |
| 52 | `Label_Claim` | Component / Keyboard | Manual input |  | No | Component label claim, default 1; units are not supplied. |  |
| 53 | `Label_Claim1` | Peak / Calculated | Bridge/copy | `Label_Claim` | No | Peak-level copy of `Label_Claim`, likely used for display, reporting, or downstream Peak formulas. | `Label_Claim` |
| 54 | `Label_Claim_1` | Peak / Calculated | Bridge/copy | `Label_Claim` | No | Peak-level copy of `Label_Claim`, likely used for display, reporting, or downstream Peak formulas. | `Label_Claim` |
| 60 | `LOD_Spl` | Sample / Keyboard | Manual input |  | No | Sample LOD correction percentage, default 0; the expansion of LOD is not supplied for this assay field. |  |
| 61 | `LOD_Std` | Component / Keyboard | Manual input |  | No | Standard/component LOD correction percentage, default 0; the expansion of LOD is not supplied for this assay field. |  |
| 62 | `LOD_Std_1` | Peak / Calculated | Bridge/copy | `LOD_Std` | No | Peak-level copy of `LOD_Std`, likely used for display, reporting, or downstream Peak formulas. | `LOD_Std` |
| 65 | `LOQ_Percentage` | Component / Keyboard | Manual input |  | No | Component impurity reporting/quantitation threshold percentage, default 0. |  |
| 66 | `LOQ_Percentage1` | Peak / Calculated | Bridge/copy | `LOQ_Percentage` | No | Peak-level copy of `LOQ_Percentage`, likely used for display, reporting, or downstream Peak formulas. | `LOQ_Percentage` |
| 72 | `MW1` | Component / Keyboard | Manual input |  | No | Component molecular-weight numerator factor, default 1; chemical direction and units remain unconfirmed. |  |
| 73 | `MW1_1` | Peak / Calculated | Bridge/copy | `MW1` | No | Peak-level copy of `MW1`, likely used for display, reporting, or downstream Peak formulas. | `MW1` |
| 74 | `MW2` | Component / Keyboard | Manual input |  | No | Component molecular-weight denominator factor, default 1; chemical direction and units remain unconfirmed. |  |
| 75 | `MW2_1` | Peak / Calculated | Bridge/copy | `MW2` | No | Peak-level copy of `MW2`, likely used for display, reporting, or downstream Peak formulas. | `MW2` |
| 77 | `No_Of_Units` | Sample / Keyboard | Manual input |  | No | Number of dosage units represented by the sample, default 1. |  |
| 78 | `OVI_Spl` | Sample / Keyboard | Manual input |  | No | Sample OVI correction percentage, default 0; the expansion of OVI is not supplied. |  |
| 79 | `OVI_Std` | Component / Keyboard | Manual input |  | No | Standard/component OVI correction percentage, default 0; the expansion of OVI is not supplied. |  |
| 80 | `OVI_Std_1` | Peak / Calculated | Bridge/copy | `OVI_Std` | No | Peak-level copy of `OVI_Std`, likely used for display, reporting, or downstream Peak formulas. | `OVI_Std` |
| 117 | `RRF1` | Component / Keyboard | Manual input |  | No | Component relative-response factor used as the numerator, default 1. |  |
| 118 | `RRF1_1` | Peak / Calculated | Bridge/copy | `RRF1` | No | Peak-level copy of `RRF1`, likely used for display, reporting, or downstream Peak formulas. | `RRF1` |
| 119 | `RRF2` | Component / Keyboard | Manual input |  | No | Component relative-response factor used as the denominator, default 1. |  |
| 120 | `RRF2_1` | Peak / Calculated | Bridge/copy | `RRF2` | No | Peak-level copy of `RRF2`, likely used for display, reporting, or downstream Peak formulas. | `RRF2` |
| 124 | `SampleWeight` | Sample / Keyboard | Manual input |  | No | Calculated field for SampleWeight; purpose is inferred from its name and exact formula. |  |
| 127 | `Sample_Concentration_PPM_1` | Peak / Calculated | Bridge/copy | `Sample_Concentration_PPM` | No | Peak-level copy of `Sample_Concentration_PPM`, likely used for display, reporting, or downstream Peak formulas. | `Sample_Concentration_PPM` |
| 130 | `SD1` | Component / Keyboard | Manual input |  | No | First Component standard-dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 131 | `SD1_1` | Peak / Calculated | Bridge/copy | `SD1` | No | Peak-level copy of `SD1`, likely used for display, reporting, or downstream Peak formulas. | `SD1` |
| 132 | `SD2` | Component / Keyboard | Manual input |  | No | Second Component standard-dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 133 | `SD2_1` | Peak / Calculated | Bridge/copy | `SD2` | No | Peak-level copy of `SD2`, likely used for display, reporting, or downstream Peak formulas. | `SD2` |
| 134 | `SD3` | Component / Keyboard | Manual input |  | No | Third Component standard-dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 135 | `SD3_1` | Peak / Calculated | Bridge/copy | `SD3` | No | Peak-level copy of `SD3`, likely used for display, reporting, or downstream Peak formulas. | `SD3` |
| 136 | `SD4` | Component / Keyboard | Manual input |  | No | Fourth Component standard-dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 137 | `SD4_1` | Peak / Calculated | Bridge/copy | `SD4` | No | Peak-level copy of `SD4`, likely used for display, reporting, or downstream Peak formulas. | `SD4` |
| 138 | `SD5` | Component / Keyboard | Manual input |  | No | Fifth Component standard-dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 139 | `SD5_1` | Peak / Calculated | Bridge/copy | `SD5` | No | Peak-level copy of `SD5`, likely used for display, reporting, or downstream Peak formulas. | `SD5` |
| 140 | `SD6` | Component / Keyboard | Manual input |  | No | Sixth Component standard-dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 141 | `SD6_1` | Peak / Calculated | Bridge/copy | `SD6` | No | Peak-level copy of `SD6`, likely used for display, reporting, or downstream Peak formulas. | `SD6` |
| 142 | `SD7` | Component / Keyboard | Manual input |  | No | Seventh Component standard-dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 143 | `SD7_1` | Peak / Calculated | Bridge/copy | `SD7` | No | Peak-level copy of `SD7`, likely used for display, reporting, or downstream Peak formulas. | `SD7` |
| 144 | `SD_1` | Peak / Calculated | Bridge/copy | `SD1` | No | Peak-level copy of `SD1`, likely used for display, reporting, or downstream Peak formulas. | `SD1` |
| 145 | `SD_2` | Peak / Calculated | Bridge/copy | `SD2` | No | Peak-level copy of `SD2`, likely used for display, reporting, or downstream Peak formulas. | `SD2` |
| 146 | `SD_3` | Peak / Calculated | Bridge/copy | `SD3` | No | Peak-level copy of `SD3`, likely used for display, reporting, or downstream Peak formulas. | `SD3` |
| 147 | `SD_4` | Peak / Calculated | Bridge/copy | `SD4` | No | Peak-level copy of `SD4`, likely used for display, reporting, or downstream Peak formulas. | `SD4` |
| 148 | `SD_5` | Peak / Calculated | Bridge/copy | `SD5` | No | Peak-level copy of `SD5`, likely used for display, reporting, or downstream Peak formulas. | `SD5` |
| 149 | `SD_6` | Peak / Calculated | Bridge/copy | `SD6` | No | Peak-level copy of `SD6`, likely used for display, reporting, or downstream Peak formulas. | `SD6` |
| 150 | `SD_7` | Peak / Calculated | Bridge/copy | `SD7` | No | Peak-level copy of `SD7`, likely used for display, reporting, or downstream Peak formulas. | `SD7` |
| 168 | `Standard_Potency` | Component / Keyboard | Manual input |  | No | Component standard potency percentage, default 1 in this workbook. |  |
| 169 | `Standard_Potency1` | Peak / Calculated | Bridge/copy | `Standard_Potency` | No | Peak-level copy of `Standard_Potency`, likely used for display, reporting, or downstream Peak formulas. | `Standard_Potency` |
| 170 | `Standard_Potency_1` | Peak / Calculated | Bridge/copy | `Standard_Potency` | No | Peak-level copy of `Standard_Potency`, likely used for display, reporting, or downstream Peak formulas. | `Standard_Potency` |
| 175 | `TD1` | Sample / Keyboard | Manual input |  | No | First required Sample dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 176 | `TD2` | Sample / Keyboard | Manual input |  | No | Second required Sample dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 177 | `TD3` | Sample / Keyboard | Manual input |  | No | Third required Sample dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 178 | `TD4` | Sample / Keyboard | Manual input |  | No | Fourth required Sample dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 179 | `TD5` | Sample / Keyboard | Manual input |  | No | Fifth required Sample dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 180 | `TD6` | Sample / Keyboard | Manual input |  | No | Sixth required Sample dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 181 | `TD7` | Sample / Keyboard | Manual input |  | No | Seventh required Sample dilution input, default 1; flask/aliquot role is unconfirmed. |  |
| 196 | `Water_Spl` | Sample / Keyboard | Manual input |  | No | Sample water correction percentage, default 0. |  |
| 197 | `Water_Std` | Component / Keyboard | Manual input |  | No | Standard/component water correction percentage, default 0. |  |
| 198 | `Water_Std_1` | Peak / Calculated | Bridge/copy | `Water_Std` | No | Peak-level copy of `Water_Std`, likely used for display, reporting, or downstream Peak formulas. | `Water_Std` |
| 199 | `Weight` | Peak / Calculated | Bridge/copy |  | No | Calculated field for Weight; purpose is inferred from its name and exact formula. | `Value` |
| 200 | `Weight_Per_mL` | Sample / Keyboard | Manual input |  | No | Sample weight-per-mL factor used in assay calculations, default 1; units are not supplied. |  |

## LOD and LOQ determination

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 58 | `LOD_Determination_percentage` | Peak / Calculated | Calculated | `LOD_DETERMIN_PPM`, `Sample_Concentration_PPM` | No | Calculated field for LOD Determination percentage; purpose is inferred from its name and exact formula. | `LOD_DETERMIN_PPM/Sample_Concentration_PPM*100` |
| 59 | `LOD_DETERMIN_PPM` | Peak / Calculated | Calculated |  | No | Calculated field for LOD DETERMIN PPM; purpose is inferred from its name and exact formula. | `(3.3*Standard Error)/B` |
| 63 | `LOQ_Determination_Percentage` | Peak / Calculated | Calculated | `LOQ_DETERMIN_PPM`, `Sample_Concentration_PPM` | No | Calculated field for LOQ Determination Percentage; purpose is inferred from its name and exact formula. | `LOQ_DETERMIN_PPM/Sample_Concentration_PPM*100` |
| 64 | `LOQ_DETERMIN_PPM` | Peak / Calculated | Calculated |  | No | Calculated field for LOQ DETERMIN PPM; purpose is inferred from its name and exact formula. | `(10*Standard Error)/B` |

## Residual solvent

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 113 | `Residual_Solvent` | Peak / Calculated | Calculated | `Dilution_Factor`, `Standard_Potency` | No | Calculated field for Residual Solvent; purpose is inferred from its name and exact formula. | `Amount*Dilution_Factor*Standard_Potency/100*1000000` |

## Sample metadata and LIMS

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 1 | `Accuracy_Level` | Sample / Keyboard | Manual input |  | No | Sample-level accuracy or recovery level identifier; exact convention is not supplied. |  |
| 21 | `Batch_No` | Sample / Keyboard | Manual input |  | No | Sample batch number. |  |
| 23 | `Column Name` | Sample / Keyboard | Manual input |  | No | Default Sample field for chromatographic column name. |  |
| 24 | `Column Serial Number` | Sample / Keyboard | Manual input |  | No | Default Sample field for chromatographic column serial number. |  |
| 25 | `Column_No` | Sample / Keyboard | Manual input |  | No | Additional sample column identifier; relationship to the two default column fields is not supplied. |  |
| 38 | `Flow_Rate` | Sample / Keyboard | Manual input |  | No | Sample-level flow-rate descriptor stored as text; units and format are not supplied. |  |
| 43 | `Instrument_ID` | Sample / Keyboard | Manual input |  | No | Sample instrument identifier. |  |
| 55 | `Level Values` | Sample / Keyboard | Manual input |  | No | Default Sample enumerated level field. |  |
| 56 | `LimsSampleId` | Sample / Keyboard | Manual input |  | No | Sample identifier for LIMS integration. |  |
| 57 | `LimsTestId` | Sample / Keyboard | Manual input |  | No | Test identifier for LIMS integration. |  |
| 108 | `PostedToLIMS` | Result / External | External input |  | No | Result-level status supplied by an external LIMS integration. |  |
| 109 | `Product_Name` | Sample / Keyboard | Manual input |  | No | Sample product name. |  |
| 116 | `ReviewedInLIMS` | Result / External | External input |  | No | Result-level status supplied by an external LIMS integration. |  |
| 122 | `Sample Matrix` | Sample / Keyboard | Manual input |  | No | Default Sample enumerated matrix field. |  |
| 123 | `SampleName` | Sample / Keyboard | Manual input |  | No | Default-style sample name field stored under the workbook spelling `SampleName`. |  |
| 156 | `Stage` | Sample / Keyboard | Manual input |  | No | Sample stage descriptor; likely a calculation or testing stage, but the convention is not supplied. |  |

## Standards, response, and similarity

| # | Field | Type/source | Role | Direct custom-field dependencies | Intersample | Inferred meaning | Formula |
|---:|---|---|---|---|---|---|---|
| 29 | `CUMMULATIVE_PERCENT_RSD` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for CUMMULATIVE PERCENT RSD; selector meaning depends on the sample-set labels and processing order. | `S1%.%..%RSD(Area)` |
| 105 | `PERCENT_STANDARD_RSD` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for PERCENT STANDARD RSD; selector meaning depends on the sample-set labels and processing order. | `S1.%..%RSD(Area)` |
| 115 | `RESPONSE_RATIO` | Peak / Calculated | Calculated | `Similarity_factor` | No | Calculated field for RESPONSE RATIO; purpose is inferred from its name and exact formula. | `Similarity_factor*100` |
| 151 | `Similarity_factor` | Peak / Calculated | Calculated | `Standard1_Average_Area`, `Standard2_Average_Area`, `Standard2_Weight`, `Standard1_Weight` | No | Calculated field for Similarity factor; purpose is inferred from its name and exact formula. | `Standard1_Average_Area/Standard2_Average_Area*Standard2_Weight/Standard1_Weight` |
| 152 | `Similarity_Factor_Online` | Peak / Calculated | Calculated |  | No | Calculated field for Similarity Factor Online; purpose is inferred from its name and exact formula. | `Control Value/Amount` |
| 153 | `Similarity_Factor_RS` | Peak / Calculated | Calculated | `Standard1_Area_SF`, `Standard2_Area_SF`, `Standard2_Weight_SF`, `Standard1_Weight_SF` | No | Calculated field for Similarity Factor RS; purpose is inferred from its name and exact formula. | `Standard1_Area_SF/Standard2_Area_SF*Standard2_Weight_SF/Standard1_Weight_SF` |
| 157 | `Standard1_Area_SF` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Standard1 Area SF; selector meaning depends on the sample-set labels and processing order. | `S1.%.(Area)` |
| 158 | `Standard1_Average_Area` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Standard1 Average Area; selector meaning depends on the sample-set labels and processing order. | `S1.%..AVE(Area)` |
| 159 | `Standard1_Weight` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Standard1 Weight; selector meaning depends on the sample-set labels and processing order. | `S1.%.(Value)` |
| 160 | `Standard1_Weight_SF` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Standard1 Weight SF; selector meaning depends on the sample-set labels and processing order. | `S1.1.(Value)` |
| 161 | `Standard2_Area_SF` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Standard2 Area SF; selector meaning depends on the sample-set labels and processing order. | `S2.%.(Area)` |
| 162 | `Standard2_Average_Area` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Standard2 Average Area; selector meaning depends on the sample-set labels and processing order. | `S2.%..AVE(Area)` |
| 163 | `Standard2_Weight` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Standard2 Weight; selector meaning depends on the sample-set labels and processing order. | `S2.%.(Value)` |
| 164 | `Standard2_Weight_SF` | Peak / Calculated | Intersample calculated |  | Yes | Cross-sample or cross-injection calculation for Standard2 Weight SF; selector meaning depends on the sample-set labels and processing order. | `S2.1.(Value)` |
| 165 | `Standard_Average_Area` | Peak / Calculated | Calculated |  | No | Calculated field for Standard Average Area; purpose is inferred from its name and exact formula. | `B*vt` |
| 166 | `Standard_Average_Area_Cal` | Peak / Calculated | Calculated |  | No | Calculated field for Standard Average Area Cal; purpose is inferred from its name and exact formula. | `B*vt` |
| 172 | `Standard_Weight` | Peak / Calculated | Calculated |  | No | Calculated field for Standard Weight; purpose is inferred from its name and exact formula. | `vt` |
| 174 | `STD_CON` | Peak / Calculated | Intersample calculated | `SD1`, `SD2`, `SD3`, `SD4`, `SD5`, `SD6`, `SD7` | Yes | Cross-sample or cross-injection calculation for STD CON; selector meaning depends on the sample-set labels and processing order. | `S1.%.(1/SD1*SD2/SD3*SD4/SD5*SD6/SD7)` |
