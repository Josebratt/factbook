export interface Countries {
    Introduction?:            Introduction;
    Geography?:               Geography;
    "People and Society"?:    PeopleAndSociety;
    Environment?:             Environment;
    Government?:              Government;
    Economy?:                 Economy;
    Energy?:                  Energy;
    Communications?:          Communications;
    Transportation?:          Transportation;
    "Military and Security"?: MilitaryAndSecurity;
    Terrorism?:               Terrorism;
    "Transnational Issues"?:  TransnationalIssues;
}

export interface Communications {
    "Telephones - fixed lines"?:        Telephones;
    "Telephones - mobile cellular"?:    Telephones;
    "Telecommunication systems"?:       TelecommunicationSystems;
    "Broadcast media"?:                 BroadcastMedia;
    "Internet country code"?:           BroadcastMedia;
    "Internet users"?:                  InternetUsers;
    "Broadband - fixed subscriptions"?: BroadbandFixedSubscriptions;
}

export interface BroadbandFixedSubscriptions {
    total?:                               BroadcastMedia;
    "subscriptions per 100 inhabitants"?: BroadcastMedia;
}

export interface BroadcastMedia {
    text?: string;
}

export interface InternetUsers {
    total?:                   BroadcastMedia;
    "percent of population"?: BroadcastMedia;
}

export interface TelecommunicationSystems {
    "general assessment"?: BroadcastMedia;
    domestic?:             BroadcastMedia;
    international?:        BroadcastMedia;
    note?:                 string;
}

export interface Telephones {
    "total subscriptions"?:               BroadcastMedia;
    "subscriptions per 100 inhabitants"?: BroadcastMedia;
}

export interface Economy {
    "Economic overview"?:                                      BroadcastMedia;
    "Real GDP (purchasing power parity)"?:                     RealGDPPurchasingPowerParity;
    "Real GDP growth rate"?:                                   RealGDPGrowthRate;
    "Real GDP per capita"?:                                    RealGDPPerCapita;
    "GDP (official exchange rate)"?:                           BroadcastMedia;
    "Inflation rate (consumer prices)"?:                       InflationRateConsumerPrices;
    "Credit ratings"?:                                         CreditRatings;
    "GDP - composition, by sector of origin"?:                 GdpCompositionBySectorOfOrigin;
    "GDP - composition, by end use"?:                          GDPCompositionByEndUse;
    "Agricultural products"?:                                  BroadcastMedia;
    Industries?:                                               BroadcastMedia;
    "Industrial production growth rate"?:                      BroadcastMedia;
    "Labor force"?:                                            BroadcastMedia;
    "Labor force - by occupation"?:                            GdpCompositionBySectorOfOrigin;
    "Unemployment rate"?:                                      UnemploymentRate;
    "Population below poverty line"?:                          BroadcastMedia;
    "Gini Index coefficient - distribution of family income"?: GiniIndexCoefficientDistributionOfFamilyIncome;
    "Household income or consumption by percentage share"?:    HouseholdIncomeOrConsumptionByPercentageShare;
    Budget?:                                                   Budget;
    "Budget surplus (+) or deficit (-)"?:                      BroadcastMedia;
    "Public debt"?:                                            PublicDebt;
    "Taxes and other revenues"?:                               BroadcastMedia;
    "Fiscal year"?:                                            BroadcastMedia;
    "Current account balance"?:                                CurrentAccountBalance;
    Exports?:                                                  Exports;
    "Exports - partners"?:                                     BroadcastMedia;
    "Exports - commodities"?:                                  BroadcastMedia;
    Imports?:                                                  Imports;
    "Imports - partners"?:                                     BroadcastMedia;
    "Imports - commodities"?:                                  BroadcastMedia;
    "Reserves of foreign exchange and gold"?:                  ReservesOfForeignExchangeAndGold;
    "Debt - external"?:                                        DebtExternal;
    "Exchange rates"?:                                         ExchangeRates;
}

export interface Budget {
    revenues?:     BroadcastMedia;
    expenditures?: BroadcastMedia;
}

export interface CreditRatings {
    "Fitch rating"?:            BroadcastMedia;
    "Moody's rating"?:          BroadcastMedia;
    "Standard & Poors rating"?: BroadcastMedia;
}

export interface CurrentAccountBalance {
    "Current account balance 2019"?: BroadcastMedia;
    "Current account balance 2018"?: BroadcastMedia;
}

export interface DebtExternal {
    "Debt - external 2019"?: BroadcastMedia;
    "Debt - external 2018"?: BroadcastMedia;
}

export interface ExchangeRates {
    currency?:              BroadcastMedia;
    "Exchange rates 2020"?: BroadcastMedia;
    "Exchange rates 2019"?: BroadcastMedia;
    "Exchange rates 2018"?: BroadcastMedia;
    "Exchange rates 2014"?: BroadcastMedia;
    "Exchange rates 2013"?: BroadcastMedia;
}

export interface Exports {
    "Exports 2019"?: BroadcastMedia;
    "Exports 2018"?: BroadcastMedia;
    "Exports 2017"?: BroadcastMedia;
}

export interface GDPCompositionByEndUse {
    "household consumption"?:         BroadcastMedia;
    "government consumption"?:        BroadcastMedia;
    "investment in fixed capital"?:   BroadcastMedia;
    "investment in inventories"?:     BroadcastMedia;
    "exports of goods and services"?: BroadcastMedia;
    "imports of goods and services"?: BroadcastMedia;
}

export interface GdpCompositionBySectorOfOrigin {
    agriculture?: BroadcastMedia;
    industry?:    BroadcastMedia;
    services?:    BroadcastMedia;
}

export interface GiniIndexCoefficientDistributionOfFamilyIncome {
    "Gini Index coefficient - distribution of family income 2018"?: BroadcastMedia;
    "Gini Index coefficient - distribution of family income 2014"?: BroadcastMedia;
}

export interface HouseholdIncomeOrConsumptionByPercentageShare {
    "lowest 10%"?:  BroadcastMedia;
    "highest 10%"?: BroadcastMedia;
}

export interface Imports {
    "Imports 2019"?: BroadcastMedia;
    "Imports 2018"?: BroadcastMedia;
    "Imports 2017"?: BroadcastMedia;
}

export interface InflationRateConsumerPrices {
    "Inflation rate (consumer prices) 2019"?: BroadcastMedia;
    "Inflation rate (consumer prices) 2018"?: BroadcastMedia;
    "Inflation rate (consumer prices) 2017"?: BroadcastMedia;
}

export interface PublicDebt {
    "Public debt 2017"?: BroadcastMedia;
    "Public debt 2016"?: BroadcastMedia;
    note?:               string;
}

export interface RealGDPPurchasingPowerParity {
    "Real GDP (purchasing power parity) 2019"?: BroadcastMedia;
    "Real GDP (purchasing power parity) 2018"?: BroadcastMedia;
    "Real GDP (purchasing power parity) 2017"?: BroadcastMedia;
    note?:                                      string;
}

export interface RealGDPGrowthRate {
    "Real GDP growth rate 2019"?: BroadcastMedia;
    "Real GDP growth rate 2018"?: BroadcastMedia;
    "Real GDP growth rate 2017"?: BroadcastMedia;
}

export interface RealGDPPerCapita {
    "Real GDP per capita 2019"?: BroadcastMedia;
    "Real GDP per capita 2018"?: BroadcastMedia;
    "Real GDP per capita 2017"?: BroadcastMedia;
    note?:                       string;
}

export interface ReservesOfForeignExchangeAndGold {
    "Reserves of foreign exchange and gold 31 December 2017"?: BroadcastMedia;
    "Reserves of foreign exchange and gold 31 December 2016"?: BroadcastMedia;
}

export interface UnemploymentRate {
    "Unemployment rate 2019"?: BroadcastMedia;
    "Unemployment rate 2018"?: BroadcastMedia;
}

export interface Energy {
    "Electricity access"?:                          ElectricityAccess;
    "Electricity - production"?:                    BroadcastMedia;
    "Electricity - consumption"?:                   BroadcastMedia;
    "Electricity - exports"?:                       BroadcastMedia;
    "Electricity - imports"?:                       BroadcastMedia;
    "Electricity - installed generating capacity"?: BroadcastMedia;
    "Electricity - from fossil fuels"?:             BroadcastMedia;
    "Electricity - from nuclear fuels"?:            BroadcastMedia;
    "Electricity - from hydroelectric plants"?:     BroadcastMedia;
    "Electricity - from other renewable sources"?:  BroadcastMedia;
    "Crude oil - production"?:                      BroadcastMedia;
    "Crude oil - exports"?:                         BroadcastMedia;
    "Crude oil - imports"?:                         BroadcastMedia;
    "Crude oil - proved reserves"?:                 BroadcastMedia;
    "Refined petroleum products - production"?:     BroadcastMedia;
    "Refined petroleum products - consumption"?:    BroadcastMedia;
    "Refined petroleum products - exports"?:        BroadcastMedia;
    "Refined petroleum products - imports"?:        BroadcastMedia;
    "Natural gas - production"?:                    BroadcastMedia;
    "Natural gas - consumption"?:                   BroadcastMedia;
    "Natural gas - exports"?:                       BroadcastMedia;
    "Natural gas - imports"?:                       BroadcastMedia;
    "Natural gas - proved reserves"?:               BroadcastMedia;
}

export interface ElectricityAccess {
    "electrification - total population"?: BroadcastMedia;
    "electrification - urban areas"?:      BroadcastMedia;
    "electrification - rural areas"?:      BroadcastMedia;
}

export interface Environment {
    "Environment - current issues"?:           BroadcastMedia;
    "Environment - international agreements"?: EnvironmentInternationalAgreements;
    "Air pollutants"?:                         AirPollutants;
    "Total water withdrawal"?:                 TotalWaterWithdrawal;
    "Total renewable water resources"?:        BroadcastMedia;
    Climate?:                                  BroadcastMedia;
    "Land use"?:                               LandUse;
    "Revenue from forest resources"?:          RevenueFromForestResources;
    "Revenue from coal"?:                      RevenueFromCoal;
    Urbanization?:                             Urbanization;
    "Major infectious diseases"?:              MajorInfectiousDiseases;
    "Waste and recycling"?:                    WasteAndRecycling;
}

export interface AirPollutants {
    "particulate matter emissions"?: BroadcastMedia;
    "carbon dioxide emissions"?:     BroadcastMedia;
    "methane emissions"?:            BroadcastMedia;
}

export interface EnvironmentInternationalAgreements {
    "party to"?:                 BroadcastMedia;
    "signed, but not ratified"?: BroadcastMedia;
}

export interface LandUse {
    "agricultural land"?:                    BroadcastMedia;
    "agricultural land: arable land"?:       BroadcastMedia;
    "agricultural land: permanent crops"?:   BroadcastMedia;
    "agricultural land: permanent pasture"?: BroadcastMedia;
    forest?:                                 BroadcastMedia;
    other?:                                  BroadcastMedia;
}

export interface MajorInfectiousDiseases {
    "degree of risk"?:              BroadcastMedia;
    "food or waterborne diseases"?: BroadcastMedia;
    "vectorborne diseases"?:        BroadcastMedia;
    note?:                          string;
}

export interface RevenueFromCoal {
    "coal revenues"?: BroadcastMedia;
}

export interface RevenueFromForestResources {
    "forest revenues"?: BroadcastMedia;
}

export interface TotalWaterWithdrawal {
    municipal?:    BroadcastMedia;
    industrial?:   BroadcastMedia;
    agricultural?: BroadcastMedia;
}

export interface Urbanization {
    "urban population"?:     BroadcastMedia;
    "rate of urbanization"?: BroadcastMedia;
}

export interface WasteAndRecycling {
    "municipal solid waste generated annually"?:  BroadcastMedia;
    "municipal solid waste recycled annually"?:   BroadcastMedia;
    "percent of municipal solid waste recycled"?: BroadcastMedia;
}

export interface Geography {
    Location?:                  BroadcastMedia;
    "Geographic coordinates"?:  BroadcastMedia;
    "Map references"?:          BroadcastMedia;
    Area?:                      Area;
    "Area - comparative"?:      BroadcastMedia;
    "Land boundaries"?:         LandBoundaries;
    Coastline?:                 BroadcastMedia;
    "Maritime claims"?:         MaritimeClaims;
    Climate?:                   BroadcastMedia;
    Terrain?:                   BroadcastMedia;
    Elevation?:                 Elevation;
    "Natural resources"?:       BroadcastMedia;
    "Land use"?:                LandUse;
    "Irrigated land"?:          BroadcastMedia;
    "Population distribution"?: BroadcastMedia;
    "Natural hazards"?:         BroadcastMedia;
    "Geography - note"?:        BroadcastMedia;
}

export interface Area {
    total?: BroadcastMedia;
    land?:  BroadcastMedia;
    water?: BroadcastMedia;
    note?:  string;
}

export interface Elevation {
    "highest point"?:  BroadcastMedia;
    "lowest point"?:   BroadcastMedia;
    "mean elevation"?: BroadcastMedia;
}

export interface LandBoundaries {
    total?:              BroadcastMedia;
    "border countries"?: BroadcastMedia;
}

export interface MaritimeClaims {
    "territorial sea"?:         BroadcastMedia;
    "exclusive economic zone"?: BroadcastMedia;
    "continental shelf"?:       BroadcastMedia;
}

export interface Government {
    "Country name"?:                                 CountryName;
    "Government type"?:                              BroadcastMedia;
    Capital?:                                        Capital;
    "Administrative divisions"?:                     BroadcastMedia;
    Independence?:                                   BroadcastMedia;
    "National holiday"?:                             BroadcastMedia;
    Constitution?:                                   Constitution;
    "Legal system"?:                                 BroadcastMedia;
    "International law organization participation"?: BroadcastMedia;
    Citizenship?:                                    Citizenship;
    Suffrage?:                                       BroadcastMedia;
    "Executive branch"?:                             ExecutiveBranch;
    "Legislative branch"?:                           LegislativeBranch;
    "Judicial branch"?:                              JudicialBranch;
    "Political parties and leaders"?:                FlagDescription;
    "International organization participation"?:     BroadcastMedia;
    "Diplomatic representation in the US"?:          DiplomaticRepresentationInTheUS;
    "Diplomatic representation from the US"?:        DiplomaticRepresentationFromTheUS;
    "Flag description"?:                             FlagDescription;
    "National symbol(s)"?:                           BroadcastMedia;
    "National anthem"?:                              NationalAnthem;
}

export interface Capital {
    name?:                     BroadcastMedia;
    "geographic coordinates"?: BroadcastMedia;
    "time difference"?:        BroadcastMedia;
    etymology?:                BroadcastMedia;
}

export interface Citizenship {
    "citizenship by birth"?:                     BroadcastMedia;
    "citizenship by descent only"?:              BroadcastMedia;
    "dual citizenship recognized"?:              BroadcastMedia;
    "residency requirement for naturalization"?: BroadcastMedia;
}

export interface Constitution {
    history?:    BroadcastMedia;
    amendments?: BroadcastMedia;
}

export interface CountryName {
    "conventional long form"?:  BroadcastMedia;
    "conventional short form"?: BroadcastMedia;
    "local long form"?:         BroadcastMedia;
    "local short form"?:        BroadcastMedia;
    etymology?:                 BroadcastMedia;
}

export interface DiplomaticRepresentationFromTheUS {
    "chief of mission"?:          BroadcastMedia;
    embassy?:                     BroadcastMedia;
    "mailing address"?:           BroadcastMedia;
    telephone?:                   BroadcastMedia;
    FAX?:                         BroadcastMedia;
    "email address and website"?: BroadcastMedia;
}

export interface DiplomaticRepresentationInTheUS {
    "chief of mission"?:          BroadcastMedia;
    chancery?:                    BroadcastMedia;
    telephone?:                   BroadcastMedia;
    FAX?:                         BroadcastMedia;
    "email address and website"?: BroadcastMedia;
    "consulate(s) general"?:      BroadcastMedia;
    "consulate(s)"?:              BroadcastMedia;
}

export interface ExecutiveBranch {
    "chief of state"?:         BroadcastMedia;
    "head of government"?:     BroadcastMedia;
    cabinet?:                  BroadcastMedia;
    "elections/appointments"?: BroadcastMedia;
    "election results"?:       BroadcastMedia;
}

export interface FlagDescription {
    text?: string;
    note?: string;
}

export interface JudicialBranch {
    "highest courts"?:                     BroadcastMedia;
    "judge selection and term of office"?: BroadcastMedia;
    "subordinate courts"?:                 BroadcastMedia;
}

export interface LegislativeBranch {
    description?:        BroadcastMedia;
    elections?:          BroadcastMedia;
    "election results"?: BroadcastMedia;
}

export interface NationalAnthem {
    name?:           BroadcastMedia;
    "lyrics/music"?: BroadcastMedia;
    note?:           string;
}

export interface Introduction {
    Background?: BroadcastMedia;
}

export interface MilitaryAndSecurity {
    "Military and security forces"?:                      BroadcastMedia;
    "Military expenditures"?:                             MilitaryExpenditures;
    "Military and security service personnel strengths"?: BroadcastMedia;
    "Military equipment inventories and acquisitions"?:   BroadcastMedia;
    "Military deployments"?:                              BroadcastMedia;
    "Military - note"?:                                   BroadcastMedia;
    "Military service age and obligation"?:               BroadcastMedia;
}

export interface MilitaryExpenditures {
    "Military Expenditures 2020"?: BroadcastMedia;
    "Military Expenditures 2019"?: BroadcastMedia;
    "Military Expenditures 2018"?: BroadcastMedia;
    "Military Expenditures 2017"?: BroadcastMedia;
    "Military Expenditures 2016"?: BroadcastMedia;
}

export interface PeopleAndSociety {
    Population?:                                               BroadcastMedia;
    Nationality?:                                              Nationality;
    "Ethnic groups"?:                                          BroadcastMedia;
    Languages?:                                                Languages;
    Religions?:                                                BroadcastMedia;
    "Demographic profile"?:                                    BroadcastMedia;
    "Age structure"?:                                          AgeStructure;
    "Dependency ratios"?:                                      DependencyRatios;
    "Median age"?:                                             InfantMortalityRate;
    "Population growth rate"?:                                 BroadcastMedia;
    "Birth rate"?:                                             BroadcastMedia;
    "Death rate"?:                                             BroadcastMedia;
    "Net migration rate"?:                                     BroadcastMedia;
    "Population distribution"?:                                BroadcastMedia;
    Urbanization?:                                             Urbanization;
    "Major urban areas - population"?:                         BroadcastMedia;
    "Sex ratio"?:                                              { [key: string]: BroadcastMedia };
    "Mother's mean age at first birth"?:                       FlagDescription;
    "Maternal mortality ratio"?:                               BroadcastMedia;
    "Infant mortality rate"?:                                  InfantMortalityRate;
    "Life expectancy at birth"?:                               LifeExpectancyAtBirth;
    "Total fertility rate"?:                                   BroadcastMedia;
    "Contraceptive prevalence rate"?:                          BroadcastMedia;
    "Drinking water source"?:                                  DrinkingWaterSource;
    "Current Health Expenditure"?:                             BroadcastMedia;
    "Physicians density"?:                                     BroadcastMedia;
    "Hospital bed density"?:                                   BroadcastMedia;
    "Sanitation facility access"?:                             DrinkingWaterSource;
    "HIV/AIDS - adult prevalence rate"?:                       BroadcastMedia;
    "HIV/AIDS - people living with HIV/AIDS"?:                 BroadcastMedia;
    "HIV/AIDS - deaths"?:                                      BroadcastMedia;
    "Major infectious diseases"?:                              MajorInfectiousDiseases;
    "Obesity - adult prevalence rate"?:                        BroadcastMedia;
    "Children under the age of 5 years underweight"?:          BroadcastMedia;
    "Education expenditures"?:                                 BroadcastMedia;
    Literacy?:                                                 LifeExpectancyAtBirth;
    "School life expectancy (primary to tertiary education)"?: InfantMortalityRate;
    "Unemployment, youth ages 15-24"?:                         InfantMortalityRate;
}

export interface AgeStructure {
    "0-14 years"?:        BroadcastMedia;
    "15-24 years"?:       BroadcastMedia;
    "25-54 years"?:       BroadcastMedia;
    "55-64 years"?:       BroadcastMedia;
    "65 years and over"?: BroadcastMedia;
}

export interface DependencyRatios {
    "total dependency ratio"?:   BroadcastMedia;
    "youth dependency ratio"?:   BroadcastMedia;
    "elderly dependency ratio"?: BroadcastMedia;
    "potential support ratio"?:  BroadcastMedia;
}

export interface DrinkingWaterSource {
    "improved: urban"?:   BroadcastMedia;
    "improved: rural"?:   BroadcastMedia;
    "improved: total"?:   BroadcastMedia;
    "unimproved: urban"?: BroadcastMedia;
    "unimproved: rural"?: BroadcastMedia;
    "unimproved: total"?: BroadcastMedia;
}

export interface InfantMortalityRate {
    total?:  BroadcastMedia;
    male?:   BroadcastMedia;
    female?: BroadcastMedia;
}

export interface Languages {
    Languages?:                  BroadcastMedia;
    "major-language sample(s)"?: BroadcastMedia;
}

export interface LifeExpectancyAtBirth {
    "total population"?: BroadcastMedia;
    male?:               BroadcastMedia;
    female?:             BroadcastMedia;
    definition?:         BroadcastMedia;
}

export interface Nationality {
    noun?:      BroadcastMedia;
    adjective?: BroadcastMedia;
}

export interface Terrorism {
    "Terrorist group(s)"?: FlagDescription;
}

export interface TransnationalIssues {
    "Disputes - international"?:                  BroadcastMedia;
    "Refugees and internally displaced persons"?: RefugeesAndInternallyDisplacedPersons;
    "Illicit drugs"?:                             BroadcastMedia;
}

export interface RefugeesAndInternallyDisplacedPersons {
    "refugees (country of origin)"?: BroadcastMedia;
    IDPs?:                           BroadcastMedia;
    "stateless persons"?:            BroadcastMedia;
}

export interface Transportation {
    "National air transport system"?:                   NationalAirTransportSystem;
    "Civil aircraft registration country code prefix"?: BroadcastMedia;
    Airports?:                                          Airports;
    "Airports - with paved runways"?:                   { [key: string]: BroadcastMedia };
    "Airports - with unpaved runways"?:                 { [key: string]: BroadcastMedia };
    Heliports?:                                         BroadcastMedia;
    Pipelines?:                                         BroadcastMedia;
    Railways?:                                          Railways;
    Roadways?:                                          Airports;
    Waterways?:                                         BroadcastMedia;
    "Merchant marine"?:                                 MerchantMarine;
    "Ports and terminals"?:                             PortsAndTerminals;
}

export interface Airports {
    total?: BroadcastMedia;
}

export interface MerchantMarine {
    total?:     BroadcastMedia;
    "by type"?: BroadcastMedia;
}

export interface NationalAirTransportSystem {
    "number of registered air carriers"?:                         BroadcastMedia;
    "inventory of registered aircraft operated by air carriers"?: BroadcastMedia;
    "annual passenger traffic on registered air carriers"?:       BroadcastMedia;
    "annual freight traffic on registered air carriers"?:         BroadcastMedia;
}

export interface PortsAndTerminals {
    "major seaport(s)"?:         BroadcastMedia;
    "oil terminal(s)"?:          BroadcastMedia;
    "container port(s) (TEUs)"?: BroadcastMedia;
    "river port(s)"?:            BroadcastMedia;
    "dry bulk cargo port(s)"?:   BroadcastMedia;
    note?:                       string;
}

export interface Railways {
    total?:            BroadcastMedia;
    "standard gauge"?: BroadcastMedia;
    "narrow gauge"?:   BroadcastMedia;
}

