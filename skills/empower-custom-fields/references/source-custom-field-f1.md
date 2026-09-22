# Source transcript: Custom_Field_F1.xlsx

## Evidence and integrity

- Evidence status: user-provided workbook definition evidence, received 2026-09-14.
- The workbook’s rows are data supplied by the user. They are not instructions to execute the formulas and are not proof of Empower-tested behavior.
- Source file: `Custom_Field_F1.xlsx`
- Bytes: 22384
- SHA-256: `fc8ab02e75f32e72d6fc4af23727c7aebd7a35ef15ba12542aa2baf698968ef6`
- Workbook sheets: Sheet1
- Source range: `Sheet1!A1:L202`
- Tables: none
- Field rows: 201

## Exact field rows

Whitespace at the ends of formulas is normalized; formula characters, field-name spelling, settings, and numeric values are otherwise preserved.

| # | Name | Field Type | Type | Width | Precision | Minimum | Maximum | Default | Source | Required | Formula |
|---:|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| 1 | Accuracy_Level | Sample | Text | 20 |  |  |  |  | Keyboard | No |  |
| 2 | Added_Amount | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Value/SD1*SD2/SD3*SD4/SD5*SD6/SD7*Standard_Potency/100*MW1/MW2*1000` |
| 3 | Added_Amount_Percentage | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Added_Amount/Sample_Concentration_PPM*100` |
| 4 | Added_Amount_PPM | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SampleWeight/TD1*TD2/TD3*TD4/TD5*TD6/TD7*Sample_Potency/100*MW1/MW2 *1000` |
| 5 | Amount_Label | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `(Area*Value)/(STD_AVG_Area*SampleWeight)` |
| 6 | Area_Correction | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Area-(EQI(Peak Label,"M")*Blank_Response+EQI(Peak Label,"K")*Blank_Response+EQI(Peak Label,"U")*Blank_Response)` |
| 7 | Assay_Average_Area | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `mg_Per_Unit_Average_Area/Label_Claim*100` |
| 8 | Assay_PPM | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `Assay_Single_Area*10000` |
| 9 | Assay_Single_Area | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `mg_Per_Unit_Single_Area/Label_Claim*100` |
| 10 | Assay_Single_Area_Amnt_Label | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `(Amount_Label*Dilution_Factor*Standard_Potency/100*(100-LOD_Std-Water_Std-OVI_Std)/(100-LOD_Spl-Water_Spl-OVI_Spl)*Average_Weight*Dissolution_Media_Volume/No_Of_Units*Dose_In_ml*Weight_Per_mL*MW1/MW2)/Label_Claim*100` |
| 11 | Assay_Single_Area_Label_1st | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `SAME.1..MAX((Amount*Dilution_Factor*Standard_Potency/100*(100-LOD_Std-Water_Std-OVI_Std)/(100-LOD_Spl-Water_Spl-OVI_Spl)*Average_Weight*Dissolution_Media_Volume/No_Of_Units*Dose_In_ml*Weight_Per_mL*MW1/MW2)/Label_Claim*100)` |
| 12 | Assay_Single_Area_Label_2nd | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `SAME.2..MAX((Amount*Dilution_Factor*Standard_Potency/100*(100-LOD_Std-Water_Std-OVI_Std)/(100-LOD_Spl-Water_Spl-OVI_Spl)*Average_Weight*Dissolution_Media_Volume/No_Of_Units*Dose_In_ml*Weight_Per_mL*MW1/MW2)/Label_Claim*100)` |
| 13 | AV | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `ABS(M_Value-Average_Percentage_Assay)+KS` |
| 14 | Average_Percentage_Assay | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SAME.%..AVE(Assay_Single_Area)` |
| 15 | Average_Weight | Sample | Real (0.0) | 12 | 3 | -100000000 | 100000000 | 1 | Keyboard | Yes |  |
| 16 | AVE_RECOVERY_ASSAY | Peak | Real (0.0) | 12 | 1 | -10000000000 | 10000000000 |  | Calculated | No | `SAME.%..AVE(Recovery_UNSP)+EQ(Injection,1)*-1*50000+EQ(Injection,3)*-1*50000` |
| 17 | Avg_Assay_PPM | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `SAME.%..AVE(Assay_PPM)` |
| 18 | AVG_FOUND_AMOUNT | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SAME.%..AVE(Found_Amoun_UNSP)+EQ(Injection,1)*-1*50000+EQ(Injection,3)*-1*50000` |
| 19 | AVG_Percentage_Assay_Label | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `(Assay_Single_Area_Label_1st+Assay_Single_Area_Label_2nd)/2` |
| 20 | AV_30 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `ABS(M_Value-Average_Percentage_Assay)+K_30` |
| 21 | Batch_No | Sample | Text | 45 |  |  |  |  | Keyboard | No |  |
| 22 | Blank_Response | Peak | Real (0.0) | 12 | 6 | -100000 | 100000 |  | Calculated | No | `Blank.%.(Area)` |
| 23 | Column Name | Sample | Text | 32 | 0 | 0 | 0 |  | Keyboard | No |  |
| 24 | Column Serial Number | Sample | Text | 32 | 0 | 0 | 0 |  | Keyboard | No |  |
| 25 | Column_No | Sample | Text | 20 |  |  |  |  | Keyboard | No |  |
| 26 | Corrected_Area_AN | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `EQI(Peak Label,"K")*Area/RRF2+EQI(Peak Label,"U")*Area/RRF2+EQI(Peak Label,"M")*Area` |
| 27 | Corrected_Area_AN_Label | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `SAME.1..MAX(EQI(Peak Label,"K")*Area/RRF2+EQI(Peak Label,"U")*Area/RRF2+EQI(Peak Label,"M")*Area)` |
| 28 | Corrected_Area_Area_Dis | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `GTE(Area,Disregard_Value)*Area` |
| 29 | CUMMULATIVE_PERCENT_RSD | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `S1%.%..%RSD(Area)` |
| 30 | Dilution | Sample | Real (0.0) | 11 | 4 | 0 | 1000000 | 1 | Keyboard | No |  |
| 31 | Dilution_Factor | Peak | Real (0.0) | 12 | 5 | -1000000 | 1000000 |  | Calculated | No | `1/SD1*SD2/SD3*SD4/SD5*SD6/SD7*TD1/1*TD3/TD2*TD5/TD4*TD7/TD6` |
| 32 | Disregard_Factor | Component | Real (0.0) | 12 | 3 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 33 | Disregard_Factor1 | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `Disregard_Factor` |
| 34 | Disregard_Reference | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `CCompRef1[Standard_Average_Area]` |
| 35 | Disregard_Value | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `Disregard_Factor*Disregard_Reference` |
| 36 | Dissolution_Media_Volume | Sample | Real (0.0) | 12 | 0 | -99999999 | 100000000 | 1 | Keyboard | Yes |  |
| 37 | Dose_In_ml | Sample | Real (0.0) | 12 | 1 | -100000000 | 100000000 | 1 | Keyboard | Yes |  |
| 38 | Flow_Rate | Sample | Text | 25 |  |  |  |  | Keyboard | No |  |
| 39 | Found_Amount | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `(Area-AS.%.(Area))/Standard_Average_Area*RRF1/RRF2*Standard_Weight*STD_CON*(S1.%.(Standard_Potency))/100*(S1.%.(MW1))/(S1.%.(MW2))*1000` |
| 40 | Found_Amount_PPM | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Sample_Response_Mean/Standard_Average_Area_Cal*Value/SD1*SD2/SD3*SD4/SD5*SD6/SD7*Standard_Potency/100*MW1/MW2 *RRF1/RRF2*1000` |
| 41 | Found_Amoun_UNSP | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Area/Standard_Average_Area*RRF1/RRF2*Standard_Weight*STD_CON*(S1.%.(Standard_Potency))/100*(S1.%.(MW1))/(S1.%.(MW2))*1000` |
| 42 | Higher_Limit_Individual_Unit | Peak | Real (0.0) | 12 | 1 | -10000000000 | 10000000000 |  | Calculated | No | `(1+(0.01*L2))*M_Value` |
| 43 | Instrument_ID | Sample | Text | 32 |  |  |  |  | Keyboard | No |  |
| 44 | K | Sample | Real (0.0) | 12 | 1 | -100000000 | 100000000 | 2.4 | Keyboard | Yes |  |
| 45 | KS | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `K*Standard_Deviation_Perc_Assay` |
| 46 | KS_30 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `K_30*Standard_Deviation_Perc_Assay` |
| 47 | K_30 | Sample | Real (0.0) | 12 | 1 | -100000000 | 100000000 |  | Keyboard | No |  |
| 48 | L1 | Component | Real (0.0) | 12 | 0 | -99999999 | 100000000 | 15 | Keyboard | No |  |
| 49 | L1_1 | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `L1` |
| 50 | L2 | Component | Real (0.0) | 12 | 0 | -99999999 | 100000000 | 25 | Keyboard | No |  |
| 51 | L2_1 | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `L2` |
| 52 | Label_Claim | Component | Real (0.0) | 12 | 4 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 53 | Label_Claim1 | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Label_Claim` |
| 54 | Label_Claim_1 | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Label_Claim` |
| 55 | Level Values | Sample | Enum | 32 | 0 | 0 | 0 |  | Keyboard | No |  |
| 56 | LimsSampleId | Sample | Text | 20 |  |  |  |  | Keyboard | No |  |
| 57 | LimsTestId | Sample | Text | 20 |  |  |  |  | Keyboard | No |  |
| 58 | LOD_Determination_percentage | Peak | Real (0.0) | 14 | 4 | -1000000000 | 1000000000 |  | Calculated | No | `LOD_DETERMIN_PPM/Sample_Concentration_PPM*100` |
| 59 | LOD_DETERMIN_PPM | Peak | Real (0.0) | 14 | 4 | -1000000000 | 1000000000 |  | Calculated | No | `(3.3*Standard Error)/B` |
| 60 | LOD_Spl | Sample | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 0 | Keyboard | Yes |  |
| 61 | LOD_Std | Component | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 0 | Keyboard | No |  |
| 62 | LOD_Std_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `LOD_Std` |
| 63 | LOQ_Determination_Percentage | Peak | Real (0.0) | 14 | 4 | -1000000000 | 1000000000 |  | Calculated | No | `LOQ_DETERMIN_PPM/Sample_Concentration_PPM*100` |
| 64 | LOQ_DETERMIN_PPM | Peak | Real (0.0) | 14 | 4 | -1000000000 | 1000000000 |  | Calculated | No | `(10*Standard Error)/B` |
| 65 | LOQ_Percentage | Component | Real (0.0) | 12 | 5 | -100000000 | 100000000 | 0 | Keyboard | No |  |
| 66 | LOQ_Percentage1 | Peak | Real (0.0) | 12 | 5 | -1000000 | 1000000 |  | Calculated | No | `LOQ_Percentage` |
| 67 | Lower_Limit_Individual_Unit | Peak | Real (0.0) | 12 | 1 | -10000000000 | 10000000000 |  | Calculated | No | `(1-(0.01*L2))*M_Value` |
| 68 | MAX_ASSAY_SINGLE_AREA | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `SAME.%..MAX(Assay_Single_Area)` |
| 69 | mg_Per_Unit_Average_Area | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `mg_Per_Unit_Single_Area*Sample_Average_Area/Area` |
| 70 | mg_Per_Unit_Single_Area | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Amount*Dilution_Factor*Standard_Potency/100*(100-LOD_Std-Water_Std-OVI_Std)/(100-LOD_Spl-Water_Spl-OVI_Spl)*Average_Weight*Dissolution_Media_Volume/No_Of_Units*Dose_In_ml*Weight_Per_mL*MW1/MW2` |
| 71 | MIN_ASSAY_SINGLE_AREA | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `SAME.%..MIN(Assay_Single_Area)` |
| 72 | MW1 | Component | Real (0.0) | 12 | 3 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 73 | MW1_1 | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `MW1` |
| 74 | MW2 | Component | Real (0.0) | 12 | 3 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 75 | MW2_1 | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `MW2` |
| 76 | M_Value | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `LT(Average_Percentage_Assay,98.5)*98.5+LTE(Average_Percentage_Assay,101.5)&GTE(Average_Percentage_Assay,98.5)*Average_Percentage_Assay+GT(Average_Percentage_Assay,101.5)*101.5` |
| 77 | No_Of_Units | Sample | Real (0.0) | 12 | 0 | -99999999 | 100000000 | 1 | Keyboard | Yes |  |
| 78 | OVI_Spl | Sample | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 0 | Keyboard | Yes |  |
| 79 | OVI_Std | Component | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 0 | Keyboard | No |  |
| 80 | OVI_Std_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `OVI_Std` |
| 81 | Percentage_Area_Corrected_AN | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Corrected_Area_AN/Total_Corrected_Area_AN*100` |
| 82 | Percentage_Drug_Released | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `ROUND((Dissolved Amount*Standard_Potency*Dilution_Factor*MW1)/(MW2*Label_Claim) ,0)` |
| 83 | Percentage_Impurity | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `(EQI(Peak Label,"K")+EQI(Peak Label,"U"))*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2` |
| 84 | Percentage_Impurity_AMV | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `(EQI(Peak Label,"K")+EQI(Peak Label,"U"))*Amount*STD_CON*TD1/1*TD3/TD2*TD5/TD4*TD6/TD7*Average_Weight/Label_Claim*(S1.%.(MW1/MW2*Standard_Potency/100))*100*RRF1/RRF2` |
| 85 | Percentage_Impurity_AN | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Percentage_Area_Corrected_AN*RRF1/RRF2` |
| 86 | Percentage_Impurity_AN_Label | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Percnt_Area_Corrected_AN_Labl*RRF1/RRF2` |
| 87 | Percentage_Impurity_Label | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SAME.1..MAX((EQI(Peak Label,"K")+EQI(Peak Label,"U"))*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2)` |
| 88 | Percentage_Imp_AN_LOQ_Dis | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `GTE(Percentage_Impurity_AN,LOQ_Percentage)*Percentage_Impurity_AN` |
| 89 | Percentage_Imp_AN_LOQ_Report | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `GTE(Percentage_Impurity_AN,LOQ_Percentage)*Percentage_Impurity_AN+LT(Percentage_Impurity_AN,LOQ_Percentage)*-1*60009` |
| 90 | Percentage_Imp_LOQ_Dis | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `GTE(Percentage_Impurity,LOQ_Percentage)*Percentage_Impurity` |
| 91 | Percentage_Imp_LOQ_Dis_AMV | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `GTE(Percentage_Impurity_AMV,LOQ_Percentage)*Percentage_Impurity_AMV` |
| 92 | Percentage_Imp_LOQ_Report | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `GTE(Percentage_Impurity,LOQ_Percentage)*Percentage_Impurity+LT(Percentage_Impurity,LOQ_Percentage)*-1*60009` |
| 93 | Percentage_Known_Impurity | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `EQI(Peak Label,"K")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2` |
| 94 | Percentage_Known_Imp_AN | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `EQI(Peak Label,"K")*Percentage_Area_Corrected_AN*RRF1/RRF2` |
| 95 | Percentage_Known_Imp_AN_Label | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SAME.1..MAX(EQI(Peak Label,"K")*Percentage_Area_Corrected_AN*RRF1/RRF2)` |
| 96 | Percentage_Known_Imp_Area_Dis | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `EQI(Peak Label,"K")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2*Corrected_Area_Area_Dis/Area` |
| 97 | Percentage_Known_IMP_Label | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SAME.1..MAX(EQI(Peak Label,"K")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2)` |
| 98 | Percentage_Recovery | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Found_Amount_PPM/Added_Amount_PPM*100` |
| 99 | Percentage_Unknown_Impurity | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `EQI(Peak Label,"U")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2` |
| 100 | Percentage_Unknown_Imp_AMV | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `EQI(Peak Label,"U")*Amount*STD_CON*TD1/1*TD3/TD2*TD5/TD4*TD6/TD7*Average_Weight/Label_Claim*(S1.%.(MW1/MW2*Standard_Potency/100))*100*RRF1/RRF2` |
| 101 | Percentage_Unknown_Imp_AN | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `EQI(Peak Label,"U")*Percentage_Area_Corrected_AN*RRF1/RRF2` |
| 102 | Percentage_UNK_IMP_AN_Label | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SAME.1..MAX(EQI(Peak Label,"U")*Percentage_Area_Corrected_AN*RRF1/RRF2)` |
| 103 | Percentage_Unk_Imp_Area_Dis | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `EQI(Peak Label,"U")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2*Corrected_Area_Area_Dis/Area` |
| 104 | Percentage_UNK_IMP_Label | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SAME.1..MAX(EQI(Peak Label,"U")*Amount*Dilution_Factor*Average_Weight/Label_Claim*MW1/MW2*Standard_Potency/100*100*RRF1/RRF2)` |
| 105 | PERCENT_STANDARD_RSD | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `S1.%..%RSD(Area)` |
| 106 | Percnt_Area_Corrected_AN_Labl | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Corrected_Area_AN_Label/Total_Corrected_Area_AN_Label*100` |
| 107 | Plate_Count_USP | Peak | Real (0.0) | 12 | 6 | -100000 | 100000 |  | Calculated | No | `5.54*(Retention Time/Width @ 50%)**2` |
| 108 | PostedToLIMS | Result | Text | 5 |  |  |  |  | External | No |  |
| 109 | Product_Name | Sample | Text | 40 |  |  |  |  | Keyboard | No |  |
| 110 | Recovery | Peak | Real (0.0) | 12 | 1 | -10000000000 | 10000000000 |  | Calculated | No | `Found_Amount/Added_Amount*100` |
| 111 | Recovery_UNSP | Peak | Real (0.0) | 12 | 1 | -10000000000 | 10000000000 |  | Calculated | No | `Found_Amoun_UNSP/Added_Amount*100` |
| 112 | Relative_Resolution_HH | Peak | Real (0.0) | 12 | 6 | -100000 | 100000 |  | Calculated | No | `1.18*((Retention Time)-CCompRef1[Retention Time])/(Width @ 50%+CCompRef1[Width @ 50%])` |
| 113 | Residual_Solvent | Peak | Real (0.0) | 12 | 1 | -10000000000 | 10000000000 |  | Calculated | No | `Amount*Dilution_Factor*Standard_Potency/100*1000000` |
| 114 | Response_Correction | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `(LTE(Area_Correction,0.0)*0.0)+(GT(Area_Correction,0.0)*Area_Correction)` |
| 115 | RESPONSE_RATIO | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `Similarity_factor*100` |
| 116 | ReviewedInLIMS | Result | Text | 20 |  |  |  |  | External | No |  |
| 117 | RRF1 | Component | Real (0.0) | 12 | 3 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 118 | RRF1_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `RRF1` |
| 119 | RRF2 | Component | Real (0.0) | 12 | 3 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 120 | RRF2_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `RRF2` |
| 121 | RSD_Percentage_Assay | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `SAME.%..%RSD(Assay_Single_Area)` |
| 122 | Sample Matrix | Sample | Enum | 32 | 0 | 0 | 0 |  | Keyboard | No |  |
| 123 | SampleName | Sample | Text | 60 | 0 | 0 | 0 |  | Keyboard | No |  |
| 124 | SampleWeight | Sample | Real (0.0) | 11 | 4 | 0 | 1000000 | 1 | Keyboard | No |  |
| 125 | Sample_Average_Area | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `.%..AVE(Area)+EQ(Injection,1)*-1*50000+EQ(Injection,3)*-1*50000` |
| 126 | Sample_Concentration_PPM | Component | Real (0.0) | 12 | 4 | -10000000 | 10000000 | 1 | Keyboard | No |  |
| 127 | Sample_Concentration_PPM_1 | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Sample_Concentration_PPM` |
| 128 | Sample_Potency | Sample | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Keyboard | No |  |
| 129 | Sample_Response_Mean | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `SAME.%..AVE(Area)` |
| 130 | SD1 | Component | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 131 | SD1_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD1` |
| 132 | SD2 | Component | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 133 | SD2_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD2` |
| 134 | SD3 | Component | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 135 | SD3_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD3` |
| 136 | SD4 | Component | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 137 | SD4_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD4` |
| 138 | SD5 | Component | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 139 | SD5_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD5` |
| 140 | SD6 | Component | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 141 | SD6_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD6` |
| 142 | SD7 | Component | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 143 | SD7_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD7` |
| 144 | SD_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD1` |
| 145 | SD_2 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD2` |
| 146 | SD_3 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD3` |
| 147 | SD_4 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD4` |
| 148 | SD_5 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD5` |
| 149 | SD_6 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD6` |
| 150 | SD_7 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `SD7` |
| 151 | Similarity_factor | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `Standard1_Average_Area/Standard2_Average_Area*Standard2_Weight/Standard1_Weight` |
| 152 | Similarity_Factor_Online | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Control Value/Amount` |
| 153 | Similarity_Factor_RS | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `Standard1_Area_SF/Standard2_Area_SF*Standard2_Weight_SF/Standard1_Weight_SF` |
| 154 | Single_Max_Unknown_Impurity | Result | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `MAX(Percentage_Unknown_Impurity)` |
| 155 | Single_Max_Unknown_Imp_AMV | Result | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `MAX(Percentage_Unknown_Imp_AMV)` |
| 156 | Stage | Sample | Text | 35 |  |  |  |  | Keyboard | No |  |
| 157 | Standard1_Area_SF | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `S1.%.(Area)` |
| 158 | Standard1_Average_Area | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `S1.%..AVE(Area)` |
| 159 | Standard1_Weight | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `S1.%.(Value)` |
| 160 | Standard1_Weight_SF | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `S1.1.(Value)` |
| 161 | Standard2_Area_SF | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `S2.%.(Area)` |
| 162 | Standard2_Average_Area | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `S2.%..AVE(Area)` |
| 163 | Standard2_Weight | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `S2.%.(Value)` |
| 164 | Standard2_Weight_SF | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `S2.1.(Value)` |
| 165 | Standard_Average_Area | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `B*vt` |
| 166 | Standard_Average_Area_Cal | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `B*vt` |
| 167 | Standard_Deviation_Perc_Assay | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `(RSD_Percentage_Assay*Average_Percentage_Assay)/100` |
| 168 | Standard_Potency | Component | Real (0.0) | 12 | 3 | -100000000 | 100000000 | 1 | Keyboard | No |  |
| 169 | Standard_Potency1 | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `Standard_Potency` |
| 170 | Standard_Potency_1 | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `Standard_Potency` |
| 171 | Standard_Potency_AMV | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `S1.%.(Standard_Potency)` |
| 172 | Standard_Weight | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `vt` |
| 173 | STD_AVG_Area | Peak | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `S1.%..AVE(Area)` |
| 174 | STD_CON | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `S1.%.(1/SD1*SD2/SD3*SD4/SD5*SD6/SD7)` |
| 175 | TD1 | Sample | Real (0.0) | 12 | 1 | -100000000 | 100000000 | 1 | Keyboard | Yes |  |
| 176 | TD2 | Sample | Real (0.0) | 12 | 1 | -100000000 | 100000000 | 1 | Keyboard | Yes |  |
| 177 | TD3 | Sample | Real (0.0) | 12 | 1 | -100000000 | 100000000 | 1 | Keyboard | Yes |  |
| 178 | TD4 | Sample | Real (0.0) | 12 | 1 | -100000000 | 100000000 | 1 | Keyboard | Yes |  |
| 179 | TD5 | Sample | Real (0.0) | 12 | 1 | -100000000 | 100000000 | 1 | Keyboard | Yes |  |
| 180 | TD6 | Sample | Real (0.0) | 12 | 1 | -100000000 | 100000000 | 1 | Keyboard | Yes |  |
| 181 | TD7 | Sample | Real (0.0) | 12 | 1 | -100000000 | 100000000 | 1 | Keyboard | Yes |  |
| 182 | Test_Target_Conc_PPM | Sample | Real (0.0) | 12 | 5 | -1000000 | 1000000 |  | Keyboard | No |  |
| 183 | Total_Corrected_Area_AN | Result | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `SUM(Corrected_Area_AN)` |
| 184 | Total_Corrected_Area_AN_Label | Result | Real (0.0) | 12 | 0 | -99999999999 | 100000000000 |  | Calculated | No | `SUM(Corrected_Area_AN_Label)` |
| 185 | Total_Impurities | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Total_Known_Impurity+Total_Unknown_Impurity` |
| 186 | Total_Impurities_Area_Dis | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Percentage_Known_Imp_Area_Dis+Percentage_Unk_Imp_Area_Dis` |
| 187 | Total_Impurities_LOQ_Dis | Result | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SUM(GTE(Percentage_Impurity,LOQ_Percentage)*Percentage_Impurity)` |
| 188 | Total_Impurities_LOQ_Dis_AMV | Result | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SUM(GTE(Percentage_Impurity_AMV,LOQ_Percentage)*Percentage_Impurity_AMV)` |
| 189 | Total_Impurity_Label | Result | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Total_Kown_IMP_Label+Total_Unknow_IMP_Label` |
| 190 | Total_Imp_AN_LOQ_Dis | Result | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SUM(Percentage_Imp_AN_LOQ_Dis)` |
| 191 | Total_Known_Impurity | Result | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SUM(Percentage_Known_Impurity)` |
| 192 | Total_Kown_IMP_Label | Result | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SUM(Percentage_Known_IMP_AN_Label)` |
| 193 | Total_Unknown_Impurity | Result | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SUM(Percentage_Unknown_Impurity)` |
| 194 | Total_Unknow_IMP_Label | Result | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `SUM(Percentage_UNK_IMP_Label)` |
| 195 | Value_Amount_Table | Peak | Real (0.0) | 12 | 3 | -100000000 | 100000000 |  | Calculated | No | `.%.(Value)` |
| 196 | Water_Spl | Sample | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 0 | Keyboard | Yes |  |
| 197 | Water_Std | Component | Real (0.0) | 12 | 2 | -100000000 | 100000000 | 0 | Keyboard | No |  |
| 198 | Water_Std_1 | Peak | Real (0.0) | 12 | 2 | -1000000000 | 1000000000 |  | Calculated | No | `Water_Std` |
| 199 | Weight | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Value` |
| 200 | Weight_Per_mL | Sample | Real (0.0) | 12 | 3 | -100000000 | 100000000 | 1 | Keyboard | Yes |  |
| 201 | X_Axis_ppm | Peak | Real (0.0) | 12 | 4 | -10000000 | 10000000 |  | Calculated | No | `Value/SD1*SD2/SD3*SD4/SD5*SD6/SD7*Standard_Potency/100*MW1/MW2 *1000` |
