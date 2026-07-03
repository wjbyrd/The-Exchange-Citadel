// EXCHANGE CITADEL QUESTION BANK — MASTERY/READABILITY REVISION
// Actions: fixed syntax, removed visible authoring prefixes, converted graph prompts to refer to the image above, polished shorthand, strengthened Custodian boss pools, and removed same-pool duplicates.

window.objectiveLabels = {
  "LO6.1": "Identify open-economy accounting identities",
  "LO6.2": "Apply open-economy accounting identities",
  "LO6.3": "Define what makes a small open economy small",
  "LO6.4": "Determine how trade balances and exchange rates are determined",
  "LO6.5": "Evaluate how policies affect trade balances and exchange rates",
  "LO14.1": "Describe the Mundell-Fleming model",
  "LO14.3": "Weigh fixed versus floating exchange rates and apply the impossible trinity",
  "LO14.4": "Derive aggregate demand for a small open economy"
};

window.questionBanks = {
  "easy": [
    {
      "id": 1,
      "q": "Net exports equal...",
      "options": [
        "exports minus imports",
        "imports minus exports",
        "saving plus investment",
        "government spending minus taxes"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "definition",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = exports minus imports."
    },
    {
      "id": 2,
      "q": "A trade surplus means...",
      "options": [
        "exports exceed imports",
        "imports exceed exports",
        "NX is negative",
        "saving is always less than investment"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "definition",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "trade_balance_terms",
      "primarySkill": "trade_balance_terms",
      "repairSkill": "trade_balance_terms",
      "feedback": "A surplus means NX > 0."
    },
    {
      "id": 3,
      "q": "A trade deficit means...",
      "options": [
        "imports exceed exports",
        "exports exceed imports",
        "NX is positive",
        "saving must exceed investment"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "definition",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "trade_balance_terms",
      "primarySkill": "trade_balance_terms",
      "repairSkill": "trade_balance_terms",
      "feedback": "A deficit means NX < 0."
    },
    {
      "id": 4,
      "q": "The open-economy income identity is...",
      "options": [
        "Y = C + I + G + NX",
        "Y = C + I + G",
        "S = C + G + NX",
        "NX = M - X"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "difficulty": "easy",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Open economies include net exports in aggregate spending."
    },
    {
      "id": 5,
      "q": "The open-economy saving identity is...",
      "options": [
        "S = I + NCO",
        "S = C + G",
        "NX = M - X",
        "Y = C + I + G"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "difficulty": "easy",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "National saving finances domestic investment and net capital outflow."
    },
    {
      "id": 6,
      "q": "Which identity connects the trade balance to capital flows?",
      "options": [
        "NX = NCO",
        "NX = C + I",
        "NCO = G - T",
        "NX = M/P"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "difficulty": "easy",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Net exports equal net capital outflow by accounting identity."
    },
    {
      "id": 7,
      "q": "If domestic spending exceeds domestic output, the economy has...",
      "options": [
        "negative net exports",
        "positive net exports",
        "zero imports",
        "no capital inflow"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "interpretation",
      "objective": "LO6.1",
      "difficulty": "easy",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "When C + I + G exceeds Y, NX is negative."
    },
    {
      "id": 8,
      "q": "A small open economy is 'small' because it...",
      "options": [
        "takes the world interest rate as given",
        "has no imports",
        "sets the world interest rate",
        "cannot borrow internationally"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "definition",
      "objective": "LO6.3",
      "difficulty": "easy",
      "conceptCluster": "small_open_assumption",
      "primarySkill": "small_open_assumption",
      "repairSkill": "small_open_assumption",
      "feedback": "Small means the economy cannot affect r*."
    },
    {
      "id": 9,
      "q": "Perfect capital mobility means...",
      "options": [
        "capital can move across borders seeking returns",
        "capital cannot leave the country",
        "exports are banned",
        "the exchange rate must be fixed"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "definition",
      "objective": "LO6.3",
      "difficulty": "easy",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "Perfect capital mobility links domestic and world returns."
    },
    {
      "id": 10,
      "q": "In a small open economy with perfect capital mobility, the domestic interest rate equals...",
      "options": [
        "the world interest rate",
        "the inflation rate",
        "the tax rate",
        "the trade deficit"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "definition",
      "objective": "LO6.3",
      "difficulty": "easy",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "The model pins r at r*."
    },
    {
      "id": 11,
      "q": "The nominal exchange rate is...",
      "options": [
        "the relative price of two currencies",
        "the relative price of goods across countries",
        "exports minus imports",
        "saving minus investment"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "definition",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "nominal_vs_real_exchange_rate",
      "primarySkill": "nominal_vs_real_exchange_rate",
      "repairSkill": "nominal_vs_real_exchange_rate",
      "feedback": "The nominal rate is a currency price."
    },
    {
      "id": 12,
      "q": "The real exchange rate is...",
      "options": [
        "the relative price of goods across countries",
        "exports minus imports",
        "the government budget balance",
        "the reserve ratio"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "definition",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "nominal_vs_real_exchange_rate",
      "primarySkill": "nominal_vs_real_exchange_rate",
      "repairSkill": "nominal_vs_real_exchange_rate",
      "feedback": "The real exchange rate compares goods prices after currency conversion."
    },
    {
      "id": 13,
      "q": "A real appreciation makes domestic goods...",
      "options": [
        "more expensive relative to foreign goods",
        "cheaper relative to foreign goods",
        "unrelated to exports",
        "identical to capital outflow"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "interpretation",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "appreciation_nx",
      "primarySkill": "appreciation_nx",
      "repairSkill": "appreciation_nx",
      "feedback": "Appreciation makes exports less attractive and imports more attractive."
    },
    {
      "id": 14,
      "q": "A real depreciation tends to make net exports...",
      "options": [
        "rise",
        "fall",
        "equal zero",
        "unrelated to exchange rates"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "definition",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "depreciation_nx",
      "primarySkill": "depreciation_nx",
      "repairSkill": "depreciation_nx",
      "feedback": "Depreciation makes domestic goods cheaper to foreign buyers."
    },
    {
      "id": 15,
      "q": "A tariff is a tax on...",
      "options": [
        "imports",
        "exports",
        "saving",
        "domestic investment"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "definition",
      "objective": "LO6.5",
      "difficulty": "easy",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Tariffs directly restrict imports."
    },
    {
      "id": 16,
      "q": "A quota is...",
      "options": [
        "a legal limit on imports",
        "a tax cut",
        "an increase in saving",
        "a monetary policy rule"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "definition",
      "objective": "LO6.5",
      "difficulty": "easy",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Quotas restrict the quantity of imports."
    },
    {
      "id": 17,
      "q": "Capital flight means investors are...",
      "options": [
        "rapidly moving funds out of the country",
        "buying only domestic assets",
        "setting NX to zero",
        "lowering all exchange rates by law"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "definition",
      "objective": "LO6.5",
      "difficulty": "easy",
      "conceptCluster": "capital_flight_exchange_rate",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "Capital flight raises net capital outflow pressure."
    },
    {
      "id": 18,
      "q": "The Mundell-Fleming model is best described as...",
      "options": [
        "IS-LM for a small open economy",
        "closed-economy IS-LM with no exchange-rate channel",
        "a closed-economy labor model",
        "a closed-economy model with no exchange-rate channel"
      ],
      "a": 0,
      "tag": "mundell_fleming_model",
      "type": "definition",
      "objective": "LO14.1",
      "difficulty": "easy",
      "conceptCluster": "mundell_fleming_assumptions",
      "primarySkill": "mundell_fleming_assumptions",
      "repairSkill": "mundell_fleming_assumptions",
      "feedback": "Mundell-Fleming model extends IS-LM to an open economy."
    },
    {
      "id": 19,
      "q": "The IS* curve includes net exports as a function of...",
      "options": [
        "the exchange rate",
        "the reserve ratio",
        "only the wage",
        "the unemployment rate"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "definition",
      "objective": "LO14.1",
      "difficulty": "easy",
      "conceptCluster": "is_star_exchange_rate",
      "primarySkill": "is_star_exchange_rate",
      "repairSkill": "is_star_exchange_rate",
      "feedback": "NX(e) is part of the IS* relationship."
    },
    {
      "id": 20,
      "q": "The LM* curve comes from equilibrium in...",
      "options": [
        "the money market",
        "the labor market",
        "the foreign exchange market only",
        "the market for tariffs"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "definition",
      "objective": "LO14.1",
      "difficulty": "easy",
      "conceptCluster": "lm_star_money_market",
      "primarySkill": "lm_star_money_market",
      "repairSkill": "lm_star_money_market",
      "feedback": "LM* is the money-market equilibrium condition with r = r*."
    },
    {
      "id": 21,
      "q": "A fixed exchange rate is maintained by...",
      "options": [
        "central bank intervention in currency markets",
        "letting the exchange rate float",
        "banning government spending",
        "setting NX equal to zero"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "definition",
      "objective": "LO14.3",
      "difficulty": "easy",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "The central bank must buy or sell currency to defend a peg."
    },
    {
      "id": 22,
      "q": "A floating exchange rate is...",
      "options": [
        "allowed to move with market forces",
        "fixed by the central bank",
        "always equal to one",
        "unrelated to exports"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "definition",
      "objective": "LO14.3",
      "difficulty": "easy",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "Floating rates adjust through market supply and demand."
    },
    {
      "id": 23,
      "q": "The impossible trinity says a country cannot simultaneously have fixed exchange rates, free capital mobility, and...",
      "options": [
        "independent monetary policy",
        "imports",
        "government spending",
        "exports"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "definition",
      "objective": "LO14.3",
      "difficulty": "easy",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Those three cannot all be maintained at once."
    },
    {
      "id": 24,
      "q": "Open-economy aggregate demand in Mundell-Fleming model links the price level to income through...",
      "options": [
        "real balances, the exchange rate, and net exports",
        "only wages",
        "only tariffs",
        "only tax revenue"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "definition",
      "objective": "LO14.4",
      "difficulty": "easy",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "P changes M/P, which shifts LM* and changes NX."
    },
    {
      "id": 25,
      "q": "In a large open economy, unlike a small open economy, domestic policy can affect...",
      "options": [
        "the interest rate",
        "the definition of NX",
        "whether saving exists",
        "whether imports count"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "definition",
      "objective": "LO14.1",
      "difficulty": "easy",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "Large economies can move the interest rate rather than simply taking r* as fixed."
    },
    {
      "id": 26,
      "q": "Exports are 520 and imports are 480. What are net exports?",
      "options": [
        "40",
        "-40",
        "1000",
        "90"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = exports - imports = 520 - 480 = 40, so this is trade surplus.",
      "hint": "NX = X - M."
    },
    {
      "id": 27,
      "q": "Exports are 400 and imports are 515. What are net exports?",
      "options": [
        "-115",
        "115",
        "915",
        "165"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = exports - imports = 400 - 515 = -115, so this is trade deficit.",
      "hint": "NX = X - M."
    },
    {
      "id": 28,
      "q": "Exports are 760 and imports are 760. What are net exports?",
      "options": [
        "0",
        "100",
        "1520",
        "50"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = exports - imports = 760 - 760 = 0, so this is balanced trade.",
      "hint": "NX = X - M."
    },
    {
      "id": 29,
      "q": "Exports are 900 and imports are 650. What are net exports?",
      "options": [
        "250",
        "-250",
        "1550",
        "300"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = exports - imports = 900 - 650 = 250, so this is trade surplus.",
      "hint": "NX = X - M."
    },
    {
      "id": 30,
      "q": "Exports are 350 and imports are 430. What are net exports?",
      "options": [
        "-80",
        "80",
        "780",
        "130"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = exports - imports = 350 - 430 = -80, so this is trade deficit.",
      "hint": "NX = X - M."
    },
    {
      "id": 31,
      "q": "Exports are 1200 and imports are 990. What are net exports?",
      "options": [
        "210",
        "-210",
        "2190",
        "260"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = exports - imports = 1200 - 990 = 210, so this is trade surplus.",
      "hint": "NX = X - M."
    },
    {
      "id": 32,
      "q": "Exports are 610 and imports are 700. What are net exports?",
      "options": [
        "-90",
        "90",
        "1310",
        "140"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = exports - imports = 610 - 700 = -90, so this is trade deficit.",
      "hint": "NX = X - M."
    },
    {
      "id": 33,
      "q": "Exports are 875 and imports are 925. What are net exports?",
      "options": [
        "-50",
        "50",
        "1800",
        "100"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = exports - imports = 875 - 925 = -50, so this is trade deficit.",
      "hint": "NX = X - M."
    },
    {
      "id": 34,
      "q": "Exports are 430 and imports are 275. What are net exports?",
      "options": [
        "155",
        "-155",
        "705",
        "205"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = exports - imports = 430 - 275 = 155, so this is trade surplus.",
      "hint": "NX = X - M."
    },
    {
      "id": 35,
      "q": "Exports are 1000 and imports are 1125. What are net exports?",
      "options": [
        "-125",
        "125",
        "2125",
        "175"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = exports - imports = 1000 - 1125 = -125, so this is trade deficit.",
      "hint": "NX = X - M."
    },
    {
      "id": 36,
      "q": "National saving is 800 and domestic investment is 650. What are net exports?",
      "options": [
        "150",
        "-150",
        "1450",
        "250"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 800 - 650 = 150; that implies trade surplus.",
      "hint": "Use S - I = NX."
    },
    {
      "id": 37,
      "q": "National saving is 550 and domestic investment is 700. What are net exports?",
      "options": [
        "-150",
        "150",
        "1250",
        "250"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 550 - 700 = -150; that implies trade deficit.",
      "hint": "Use S - I = NX."
    },
    {
      "id": 38,
      "q": "National saving is 900 and domestic investment is 900. What are net exports?",
      "options": [
        "0",
        "-100",
        "1800",
        "100"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 900 - 900 = 0; that implies balanced trade.",
      "hint": "Use S - I = NX."
    },
    {
      "id": 39,
      "q": "National saving is 1200 and domestic investment is 950. What are net exports?",
      "options": [
        "250",
        "-250",
        "2150",
        "350"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1200 - 950 = 250; that implies trade surplus.",
      "hint": "Use S - I = NX."
    },
    {
      "id": 40,
      "q": "National saving is 725 and domestic investment is 875. What are net exports?",
      "options": [
        "-150",
        "150",
        "1600",
        "250"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 725 - 875 = -150; that implies trade deficit.",
      "hint": "Use S - I = NX."
    },
    {
      "id": 41,
      "q": "National saving is 640 and domestic investment is 590. What are net exports?",
      "options": [
        "50",
        "-50",
        "1230",
        "150"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 640 - 590 = 50; that implies trade surplus.",
      "hint": "Use S - I = NX."
    },
    {
      "id": 42,
      "q": "National saving is 1000 and domestic investment is 1160. What are net exports?",
      "options": [
        "-160",
        "160",
        "2160",
        "260"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1000 - 1160 = -160; that implies trade deficit.",
      "hint": "Use S - I = NX."
    },
    {
      "id": 43,
      "q": "National saving is 480 and domestic investment is 420. What are net exports?",
      "options": [
        "60",
        "-60",
        "900",
        "160"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 480 - 420 = 60; that implies trade surplus.",
      "hint": "Use S - I = NX."
    },
    {
      "id": 44,
      "q": "National saving is 1500 and domestic investment is 1300. What are net exports?",
      "options": [
        "200",
        "-200",
        "2800",
        "300"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1500 - 1300 = 200; that implies trade surplus.",
      "hint": "Use S - I = NX."
    },
    {
      "id": 45,
      "q": "National saving is 1320 and domestic investment is 1475. What are net exports?",
      "options": [
        "-155",
        "155",
        "2795",
        "255"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1320 - 1475 = -155; that implies trade deficit.",
      "hint": "Use S - I = NX."
    },
    {
      "id": 46,
      "q": "Y = 1000, C = 650, I = 180, and G = 220. What are net exports?",
      "options": [
        "-50",
        "50",
        "350",
        "1050"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -50.",
      "hint": "Rearrange Y = C + I + G + NX."
    },
    {
      "id": 47,
      "q": "Y = 2000, C = 1250, I = 500, and G = 400. What are net exports?",
      "options": [
        "-150",
        "150",
        "750",
        "2150"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -150.",
      "hint": "Rearrange Y = C + I + G + NX."
    },
    {
      "id": 48,
      "q": "Y = 1500, C = 900, I = 350, and G = 200. What are net exports?",
      "options": [
        "50",
        "-50",
        "600",
        "1450"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = 50.",
      "hint": "Rearrange Y = C + I + G + NX."
    },
    {
      "id": 49,
      "q": "Y = 2500, C = 1500, I = 700, and G = 450. What are net exports?",
      "options": [
        "-150",
        "150",
        "1000",
        "2650"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -150.",
      "hint": "Rearrange Y = C + I + G + NX."
    },
    {
      "id": 50,
      "q": "Y = 1800, C = 1100, I = 400, and G = 350. What are net exports?",
      "options": [
        "-50",
        "50",
        "700",
        "1850"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -50.",
      "hint": "Rearrange Y = C + I + G + NX."
    },
    {
      "id": 51,
      "q": "Y = 1200, C = 800, I = 250, and G = 200. What are net exports?",
      "options": [
        "-50",
        "50",
        "400",
        "1250"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -50.",
      "hint": "Rearrange Y = C + I + G + NX."
    },
    {
      "id": 52,
      "q": "Y = 3000, C = 1800, I = 650, and G = 500. What are net exports?",
      "options": [
        "50",
        "-50",
        "1200",
        "2950"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = 50.",
      "hint": "Rearrange Y = C + I + G + NX."
    },
    {
      "id": 53,
      "q": "Y = 2200, C = 1400, I = 500, and G = 450. What are net exports?",
      "options": [
        "-150",
        "150",
        "800",
        "2350"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easy",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -150.",
      "hint": "Rearrange Y = C + I + G + NX."
    },
    {
      "id": 54,
      "q": "Refer to the image above. Which point shows balanced trade at the world interest rate r_w2?",
      "options": [
        "D",
        "B",
        "A",
        "G"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "difficulty": "easy",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "At r_w2, saving equals investment at point D.",
      "image": "loanablefunds.png"
    },
    {
      "id": 55,
      "q": "Refer to the image above. Which point shows domestic investment at the low world interest rate r_w3?",
      "options": [
        "G",
        "A",
        "D",
        "B"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "difficulty": "easy",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "The low interest rate raises investment to the point on I(r), point G.",
      "image": "loanablefunds.png"
    },
    {
      "id": 56,
      "q": "Refer to the image above. When r is r_w1, saving exceeds investment. What trade position follows?",
      "options": [
        "trade surplus",
        "trade deficit",
        "balanced trade",
        "impossible trinity"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "graph",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "trade_balance_terms",
      "primarySkill": "trade_balance_terms",
      "repairSkill": "trade_balance_terms",
      "feedback": "At high r, investment is below saving, so S - I is positive.",
      "image": "loanablefunds.png"
    },
    {
      "id": 57,
      "q": "Refer to the image above. Which point is the equilibrium when S - I is fixed at NX2?",
      "options": [
        "D",
        "A",
        "G",
        "B"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "nominal_vs_real_exchange_rate",
      "primarySkill": "nominal_vs_real_exchange_rate",
      "repairSkill": "nominal_vs_real_exchange_rate",
      "feedback": "The fixed S - I line intersects NX(R) at point D.",
      "image": "realexchangerates.png"
    },
    {
      "id": 58,
      "q": "Refer to the image above. Which point lies on NX(R) at the highest real exchange rate R1?",
      "options": [
        "A",
        "D",
        "G",
        "F"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "nominal_vs_real_exchange_rate",
      "primarySkill": "nominal_vs_real_exchange_rate",
      "repairSkill": "nominal_vs_real_exchange_rate",
      "feedback": "Point A is on NX(R) at R1.",
      "image": "realexchangerates.png"
    },
    {
      "id": 59,
      "q": "Refer to the image above. Moving down along NX(R) from A to G means the real exchange rate...",
      "options": [
        "depreciates and net exports rise",
        "appreciates and net exports fall",
        "stays fixed while net exports fall",
        "becomes unrelated to trade"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "graph",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "depreciation_nx",
      "primarySkill": "depreciation_nx",
      "repairSkill": "depreciation_nx",
      "feedback": "A lower real exchange rate raises NX.",
      "image": "realexchangerates.png"
    },
    {
      "id": 60,
      "q": "Refer to the image above. Using the impossible-trinity triangle, a country that chooses fixed exchange rates and free capital mobility gives up...",
      "options": [
        "independent monetary policy",
        "imports",
        "fiscal policy",
        "exports"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "graph",
      "objective": "LO14.3",
      "difficulty": "easy",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The bottom side combines fixed rates and free capital mobility, leaving monetary independence out.",
      "image": "impossibletrinity.png"
    },
    {
      "id": 61,
      "q": "Refer to the image above. Using the impossible-trinity triangle, a country that wants independent monetary policy and free capital mobility must give up...",
      "options": [
        "a fixed exchange rate",
        "all exports",
        "capital mobility",
        "money"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "graph",
      "objective": "LO14.3",
      "difficulty": "easy",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Those two choices require a floating exchange rate.",
      "image": "impossibletrinity.png"
    },
    {
      "id": 62,
      "q": "Refer to the image above. Lower P is associated with which movement on aggregate demand?",
      "options": [
        "from A toward C as Y rises",
        "from C toward A as Y rises",
        "no movement",
        "from B to zero NX"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "difficulty": "easy",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Lower P raises real balances, shifts LM* right, and raises Y along aggregate demand.",
      "image": "mundell_ad.png"
    },
    {
      "id": 63,
      "q": "Refer to the image above. The right panel shows the aggregate demand curve as...",
      "options": [
        "downward sloping",
        "vertical",
        "horizontal",
        "upward sloping"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "difficulty": "easy",
      "conceptCluster": "open_economy_ad_slope",
      "primarySkill": "open_economy_ad_slope",
      "repairSkill": "open_economy_ad_slope",
      "feedback": "A lower price level is associated with higher income.",
      "image": "mundell_ad.png"
    },
    {
      "id": 64,
      "q": "Refer to the image above. Which point is on IS2 and LM?",
      "options": [
        "B",
        "A",
        "C",
        "Y*"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "easy",
      "conceptCluster": "is_star_exchange_rate",
      "primarySkill": "is_star_exchange_rate",
      "repairSkill": "is_star_exchange_rate",
      "feedback": "Point B is where the middle IS curve meets LM.",
      "image": "islm_exchangerates.png"
    },
    {
      "id": 65,
      "q": "Refer to the image above. Which point is associated with LM3 and the lowest exchange rate e3?",
      "options": [
        "C",
        "A",
        "B",
        "Y1"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "easy",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "LM3 intersects IS at point C and e3.",
      "image": "islm_er_change.png"
    },
    {
      "id": 66,
      "q": "A higher world interest rate usually makes domestic investment...",
      "options": [
        "fall",
        "rise",
        "equal imports",
        "unrelated to r"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "interpretation",
      "objective": "LO6.3",
      "difficulty": "easy",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "Investment demand falls when the interest rate rises."
    },
    {
      "id": 67,
      "q": "A lower world interest rate usually makes domestic investment...",
      "options": [
        "rise",
        "fall",
        "zero",
        "identical to saving"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "interpretation",
      "objective": "LO6.3",
      "difficulty": "easy",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "Investment demand rises when the interest rate falls."
    },
    {
      "id": 68,
      "q": "An appreciation tends to reduce exports because domestic goods become...",
      "options": [
        "relatively expensive",
        "relatively cheap",
        "tax free",
        "capital outflows"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "interpretation",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "appreciation_nx",
      "primarySkill": "appreciation_nx",
      "repairSkill": "appreciation_nx",
      "feedback": "Foreign buyers face a higher relative price."
    },
    {
      "id": 69,
      "q": "A depreciation tends to raise exports because domestic goods become...",
      "options": [
        "relatively cheap",
        "relatively expensive",
        "impossible to buy",
        "fixed by law"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "interpretation",
      "objective": "LO6.4",
      "difficulty": "easy",
      "conceptCluster": "depreciation_nx",
      "primarySkill": "depreciation_nx",
      "repairSkill": "depreciation_nx",
      "feedback": "Foreign buyers face a lower relative price."
    },
    {
      "id": 70,
      "q": "Under floating rates, expansionary monetary policy tends to...",
      "options": [
        "depreciate the currency",
        "appreciate the currency",
        "fix the exchange rate",
        "remove capital mobility"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "easy",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Monetary expansion shifts LM* right and lowers the exchange rate."
    },
    {
      "id": 71,
      "q": "Under floating rates, expansionary fiscal policy tends to...",
      "options": [
        "appreciate the currency",
        "depreciate the currency",
        "shift LM* right",
        "eliminate NX"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "easy",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Fiscal expansion shifts IS* right and appreciates the currency."
    },
    {
      "id": 72,
      "q": "Under fixed rates, independent monetary policy is...",
      "options": [
        "limited by the need to defend the peg",
        "stronger than under floating",
        "unrelated to reserves",
        "the same as tariff policy"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.3",
      "difficulty": "easy",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "The money supply must adjust to maintain the fixed exchange rate."
    },
    {
      "id": 73,
      "q": "When P falls in Mundell-Fleming model, real money balances...",
      "options": [
        "rise",
        "fall",
        "become zero",
        "equal tariffs"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "interpretation",
      "objective": "LO14.4",
      "difficulty": "easy",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "M/P rises when P falls."
    },
    {
      "id": 74,
      "q": "When real money balances rise in Mundell-Fleming model, LM* shifts...",
      "options": [
        "right",
        "left",
        "nowhere",
        "into IS*"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "easy",
      "conceptCluster": "lm_star_money_market",
      "primarySkill": "lm_star_money_market",
      "repairSkill": "lm_star_money_market",
      "feedback": "More real balances shift LM* right."
    },
    {
      "id": 75,
      "q": "In the small-open-economy model, trade policy changes the real exchange rate because...",
      "options": [
        "the exchange rate adjusts to restore NX to S - I",
        "saving disappears",
        "the world interest rate must change",
        "investment becomes illegal"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "interpretation",
      "objective": "LO6.5",
      "difficulty": "easy",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The exchange rate moves so that NX equals S - I."
    },
    {
      "q": "Which equation says output not used at home is sold abroad?",
      "options": [
        "Y - (C + I + G) = NX",
        "S - I = M/P",
        "NX = M - X",
        "r = εP/P*"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "difficulty": "easy",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Rearranging the income identity gives output minus domestic spending equals NX.",
      "id": 76
    },
    {
      "q": "Which equation says net exports equal net capital outflow?",
      "options": [
        "NX = NCO",
        "NX = C + I + G",
        "NCO = M/P",
        "S = T - G"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "difficulty": "easy",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "NX = NCO links goods-market flows and financial flows.",
      "id": 77
    },
    {
      "q": "Which equation says saving is split between domestic investment and net capital outflow?",
      "options": [
        "S = I + NCO",
        "Y = C + I + G",
        "NX = M - X",
        "ε = eP/P*"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "difficulty": "easy",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Saving funds domestic investment plus net purchases of foreign assets.",
      "id": 78
    },
    {
      "q": "If Y = C + I + G + NX, what term is added when moving from closed economy to open economy?",
      "options": [
        "NX",
        "M/P",
        "LRAS",
        "r*"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "difficulty": "easy",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Open economies add net exports to aggregate spending.",
      "id": 79
    },
    {
      "q": "Which identity says output equals domestic spending plus net exports?",
      "options": [
        "Y = C + I + G + NX",
        "S = I + NCO",
        "NX = NCO",
        "M/P = L(r,Y)"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "The open-economy income identity adds net exports to domestic spending.",
      "id": 80,
      "difficulty": "easy"
    },
    {
      "q": "Which identity says national saving finances domestic investment and net capital outflow?",
      "options": [
        "S = I + NCO",
        "Y = C + I + G",
        "NX = M - X",
        "ε = eP/P*"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Saving can fund domestic investment or purchases of foreign assets.",
      "id": 81,
      "difficulty": "easy"
    },
    {
      "q": "Which identity directly links the trade balance and capital flows?",
      "options": [
        "NX = NCO",
        "Y = C + I + G",
        "S = C + I",
        "e = εP/P*"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Net exports and net capital outflow are two sides of the same international transaction ledger.",
      "id": 82,
      "difficulty": "easy"
    },
    {
      "q": "If NX is positive, which plain-English description fits?",
      "options": [
        "the country sells more goods abroad than it buys from abroad",
        "the country imports more than it exports",
        "domestic spending exceeds domestic output",
        "the currency must be fixed"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "definition",
      "objective": "LO6.4",
      "conceptCluster": "trade_balance_terms",
      "primarySkill": "trade_balance_terms",
      "repairSkill": "trade_balance_terms",
      "feedback": "Positive NX means exports exceed imports.",
      "id": 83,
      "difficulty": "easy"
    },
    {
      "q": "If NX is negative, which plain-English description fits?",
      "options": [
        "the country buys more goods from abroad than it sells abroad",
        "the country has a trade surplus",
        "saving must exceed investment",
        "exports exceed imports"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "definition",
      "objective": "LO6.4",
      "conceptCluster": "trade_balance_terms",
      "primarySkill": "trade_balance_terms",
      "repairSkill": "trade_balance_terms",
      "feedback": "Negative NX means imports exceed exports.",
      "id": 84,
      "difficulty": "easy"
    },
    {
      "q": "Which statement is an accounting identity rather than a behavioral theory?",
      "options": [
        "S - I = NX",
        "tariffs always raise welfare",
        "fiscal policy always raises output",
        "monetary policy always fixes trade deficits"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "difficulty": "easy",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "S - I = NX is true by accounting, not by a debatable behavioral assumption.",
      "id": 85
    },
    {
      "q": "Which pair must be equal in the open-economy accounting system?",
      "options": [
        "net exports and net capital outflow",
        "government spending and exports",
        "consumption and imports",
        "taxes and investment"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "difficulty": "easy",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "The international goods balance and financial-flow balance match through NX = NCO.",
      "id": 86
    },
    {
      "q": "Refer to the image above. Which point shows investment equal to saving at r_w2?",
      "options": [
        "D",
        "A",
        "E",
        "G"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "At r_w2, the vertical saving line intersects I(r) at point D.",
      "image": "loanablefunds.png",
      "id": 87,
      "difficulty": "easy"
    },
    {
      "q": "Refer to the image above. Which point is on the NX curve at R2?",
      "options": [
        "D",
        "B",
        "C",
        "F"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "conceptCluster": "exchange_rate_adjustment",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "Point D is where the NX curve meets the R2 line.",
      "image": "realexchangerates.png",
      "id": 88,
      "difficulty": "easy"
    },
    {
      "q": "Refer to the image above. Which two goals are combined on side 1?",
      "options": [
        "fixed exchange rate and independent monetary policy",
        "fixed exchange rate and free capital mobility",
        "free capital mobility and independent monetary policy",
        "all three goals at once"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "graph",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Side 1 connects the fixed-exchange-rate and independent-monetary-policy corners.",
      "image": "impossibletrinity.png",
      "id": 89,
      "difficulty": "easy"
    },
    {
      "q": "Refer to the image above. Which two goals are combined on side 2?",
      "options": [
        "independent monetary policy and free capital mobility",
        "fixed exchange rate and independent monetary policy",
        "fixed exchange rate and free capital mobility",
        "all three goals at once"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "graph",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Side 2 connects independent monetary policy and free capital mobility.",
      "image": "impossibletrinity.png",
      "id": 90,
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": 100,
      "q": "Refer to the image above. If the world interest rate is r_w1, which statement is correct?",
      "options": [
        "saving exceeds investment and the economy has a trade surplus",
        "investment exceeds saving and the economy has a trade deficit",
        "saving equals investment",
        "NX must be zero"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "difficulty": "medium",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "At the high world interest rate, investment is below saving, so NX is positive.",
      "image": "loanablefunds.png"
    },
    {
      "id": 101,
      "q": "Refer to the image above. If the world interest rate falls from r_w1 to r_w3, domestic investment...",
      "options": [
        "rises from I1 to I3",
        "falls from I3 to I1",
        "stays at I2",
        "becomes unrelated to the interest rate"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "difficulty": "medium",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "Lower interest rates raise investment demand.",
      "image": "loanablefunds.png"
    },
    {
      "id": 102,
      "q": "Refer to the image above. A fall in national saving moves the vertical saving line...",
      "options": [
        "left from S2 to S1",
        "right from S2 to S3",
        "down along I(r)",
        "nowhere because saving is fixed"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "medium",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Lower saving means the vertical S line shifts left.",
      "image": "loanablefunds_changes.png"
    },
    {
      "id": 103,
      "q": "Refer to the image above. A rise in investment demand moves the investment curve...",
      "options": [
        "from I(r)1 toward I(r)3",
        "from I(r)3 toward I(r)1",
        "from S to NX",
        "nowhere because investment cannot shift"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "medium",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "Higher investment demand shifts I(r) outward/right.",
      "image": "loanablefunds_changes_investment.png"
    },
    {
      "id": 104,
      "q": "Refer to the image above. A shift from (S - I)2 to (S - I)1 moves equilibrium from E to...",
      "options": [
        "A",
        "I",
        "H",
        "F"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "medium",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "A leftward shift in S - I raises the real exchange rate to R1 and moves to point A.",
      "image": "rer_changes.png"
    },
    {
      "id": 105,
      "q": "Refer to the image above. A shift from (S - I)2 to (S - I)3 moves equilibrium from E to...",
      "options": [
        "I",
        "A",
        "D",
        "B"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "medium",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "A rightward shift in S - I lowers the real exchange rate and raises NX.",
      "image": "rer_changes.png"
    },
    {
      "id": 106,
      "q": "Refer to the image above. A tariff that shifts NX(R) from NX(R)2 to NX(R)1 moves equilibrium from B to...",
      "options": [
        "A",
        "C",
        "NX",
        "R3"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "medium",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "A tariff shifts NX demand right/up and appreciates the real exchange rate, moving to A.",
      "image": "tradepolicies.png"
    },
    {
      "id": 107,
      "q": "Refer to the image above. After the NX curve shifts right, the quantity of NX at equilibrium...",
      "options": [
        "stays at the fixed S - I level",
        "rises permanently",
        "falls permanently",
        "becomes unrelated to S - I"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "medium",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The real exchange rate adjusts so NX still equals S - I.",
      "image": "tradepolicies.png"
    },
    {
      "id": 108,
      "q": "Refer to the image above. A fiscal expansion under floating rates moves the economy from B to...",
      "options": [
        "A",
        "C",
        "Y1",
        "LM3"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "medium",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Fiscal expansion shifts IS* right and appreciates the exchange rate with Y fixed at Y*.",
      "image": "islm_exchangerates.png"
    },
    {
      "id": 109,
      "q": "Refer to the image above. A fall in demand for domestic goods moves IS* from IS2 to IS3 and the economy from B to...",
      "options": [
        "C",
        "A",
        "LM",
        "Y3"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "medium",
      "conceptCluster": "is_star_exchange_rate",
      "primarySkill": "is_star_exchange_rate",
      "repairSkill": "is_star_exchange_rate",
      "feedback": "A leftward IS* shift lowers the exchange rate at Y*.",
      "image": "islm_exchangerates.png"
    },
    {
      "id": 110,
      "q": "Refer to the image above. Monetary expansion moves LM from LM2 to LM3 and the economy from B to...",
      "options": [
        "C",
        "A",
        "Y1",
        "IS1"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "medium",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Monetary expansion shifts LM* right, lowering e and raising Y.",
      "image": "islm_er_change.png"
    },
    {
      "id": 111,
      "q": "Refer to the image above. Monetary contraction moves LM from LM2 to LM1 and the economy from B to...",
      "options": [
        "A",
        "C",
        "Y3",
        "IS3"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "medium",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Contraction shifts LM* left, raising e and lowering Y.",
      "image": "islm_er_change.png"
    },
    {
      "id": 112,
      "q": "If saving is 900 and investment is 760, what is NX and the trade position?",
      "options": [
        "NX = 140; trade surplus",
        "NX = -140; trade deficit",
        "NX = 1660; trade surplus",
        "NX = 0; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "medium",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 900 - 760 = 140.",
      "hint": "Use S - I = NX."
    },
    {
      "id": 113,
      "q": "If Y = 2400, C = 1500, I = 500, and G = 550, what are net exports?",
      "options": [
        "-150",
        "150",
        "350",
        "-550"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "medium",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = 2400 - 1500 - 500 - 550 = -150.",
      "hint": "Rearrange the income identity."
    },
    {
      "id": 114,
      "q": "If the nominal exchange rate is 1.5 foreign currency units per dollar, P = 120, and P* = 90, the real exchange rate is...",
      "options": [
        "2.0",
        "0.5",
        "1.125",
        "180"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "difficulty": "medium",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = eP/P* = 1.5 × 120 / 90 = 2.0.",
      "hint": "ε = eP/P*."
    },
    {
      "id": 115,
      "q": "If ε = 1.25, P* = 80, and P = 100, what nominal exchange rate e is implied?",
      "options": [
        "1.0",
        "1.5625",
        "0.64",
        "2.25"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "difficulty": "medium",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "e = εP*/P = 1.25 × 80 / 100 = 1.0.",
      "hint": "Rearrange ε = eP/P*."
    },
    {
      "id": 116,
      "q": "A domestic tax cut lowers public saving in a small open economy. What happens to the real exchange rate and NX?",
      "options": [
        "the real exchange rate appreciates and net exports fall",
        "the real exchange rate depreciates and net exports rise",
        "net exports rise because saving falls",
        "nothing changes because r* is fixed"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "medium",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Lower saving shifts S - I left, raising the real exchange rate and reducing NX."
    },
    {
      "id": 117,
      "q": "A foreign fiscal expansion raises the world interest rate. In the domestic small open economy, domestic investment...",
      "options": [
        "falls, so S - I and NX rise",
        "rises, so net exports fall",
        "is unaffected because r* is irrelevant",
        "falls, so saving must fall too"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "medium",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Higher r* lowers domestic investment, raising S - I and NX."
    },
    {
      "id": 118,
      "q": "A business tax credit raises investment demand in a small open economy. What is the trade-balance effect?",
      "options": [
        "net exports fall because S - I falls",
        "net exports rise because investment rises",
        "NX is fixed by tariffs",
        "NX becomes zero by definition"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "medium",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "With saving unchanged, higher investment reduces S - I and NX."
    },
    {
      "id": 119,
      "q": "A tariff directly increases demand for domestic goods. In a small-open-economy model, the final effect on the trade balance is...",
      "options": [
        "offset by real appreciation",
        "a guaranteed permanent surplus",
        "a lower real exchange rate",
        "a fall in saving"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "trap",
      "objective": "LO6.5",
      "difficulty": "medium",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Trade restrictions appreciate the real exchange rate, offsetting the direct NX effect.",
      "commonError": "ignoring exchange-rate offset"
    },
    {
      "id": 120,
      "q": "Capital flight raises net capital outflow. What happens to the exchange rate and NX?",
      "options": [
        "the currency depreciates and net exports rise",
        "the currency appreciates and net exports fall",
        "NX must fall because investors leave",
        "nothing can change"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "medium",
      "conceptCluster": "capital_flight_exchange_rate",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "Capital flight raises supply of domestic currency in FX markets, depreciating the currency and raising NX."
    },
    {
      "id": 121,
      "q": "Under floating rates, why is fiscal policy weak in Mundell-Fleming model?",
      "options": [
        "appreciation crowds out net exports",
        "the money supply must defend a peg",
        "investment cannot respond to anything",
        "NX is not in the model"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "medium",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Fiscal expansion shifts IS* right, but appreciation lowers NX."
    },
    {
      "id": 122,
      "q": "Under floating rates, why is monetary policy strong in Mundell-Fleming model?",
      "options": [
        "depreciation raises net exports",
        "appreciation lowers exports",
        "the central bank fixes NX",
        "fiscal policy shifts LM*"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "medium",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Monetary expansion shifts LM* right, depreciates the currency, and raises NX."
    },
    {
      "id": 123,
      "q": "Under fixed rates, why does independent monetary expansion fail?",
      "options": [
        "reserve flows force the money supply back to defend the peg",
        "NX is always zero",
        "the world interest rate becomes domestic saving",
        "the IS curve disappears"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.3",
      "difficulty": "medium",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "A fixed exchange rate makes the money supply endogenous to defending the peg."
    },
    {
      "id": 124,
      "q": "A country wants monetary independence and fixed exchange rates. Under the trilemma, what must it restrict?",
      "options": [
        "free capital mobility",
        "imports",
        "fiscal policy",
        "net exports"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "interpretation",
      "objective": "LO14.3",
      "difficulty": "medium",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Keeping monetary independence and a peg requires capital controls."
    },
    {
      "id": 125,
      "q": "If the price level falls in Mundell-Fleming model, what happens to M/P and LM*?",
      "options": [
        "M/P rises and LM* shifts right",
        "M/P falls and LM* shifts left",
        "M/P is unchanged and IS* shifts left",
        "M/P rises and net exports fall directly"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "difficulty": "medium",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Lower P raises real balances and shifts LM* right."
    },
    {
      "id": 126,
      "q": "In a large open economy, a fiscal expansion raises the domestic interest rate. What follows for investment?",
      "options": [
        "investment falls because r rises",
        "investment rises because G rises",
        "investment is fixed by the trade balance",
        "investment becomes NX"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "medium",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "Large-open-economy policy can move r, causing partial crowding out."
    },
    {
      "q": "Refer to the image above. If the world interest rate is r_w1, domestic investment is closest to...",
      "options": [
        "I3",
        "I2",
        "I1",
        "saving minus investment is zero"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "A lower world interest rate raises investment along I(r).",
      "image": "loanablefunds.png",
      "id": 127,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. If the world interest rate is r_w3, domestic investment is closest to...",
      "options": [
        "I1",
        "I2",
        "I3",
        "saving minus investment is zero"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "A higher world interest rate lowers investment along I(r).",
      "image": "loanablefunds.png",
      "id": 128,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. Which saving line shows the lowest level of national saving?",
      "options": [
        "S1",
        "S2",
        "S3",
        "I(r)"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.2",
      "conceptCluster": "saving_shift_nx",
      "primarySkill": "saving_shift_nx",
      "repairSkill": "saving_shift_nx",
      "feedback": "The left-most vertical saving line is the lowest saving level.",
      "image": "loanablefunds_changes.png",
      "id": 129,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. Which saving line shows the highest level of national saving?",
      "options": [
        "S3",
        "S2",
        "S1",
        "I(r)"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.2",
      "conceptCluster": "saving_shift_nx",
      "primarySkill": "saving_shift_nx",
      "repairSkill": "saving_shift_nx",
      "feedback": "The right-most vertical saving line is the highest saving level.",
      "image": "loanablefunds_changes.png",
      "id": 130,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. Which investment curve represents stronger investment demand?",
      "options": [
        "I(r)3",
        "I(r)2",
        "I(r)1",
        "S1"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "The rightward investment-demand curve represents stronger investment demand.",
      "image": "loanablefunds_changes_investment.png",
      "id": 131,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. Moving from E to A means the real exchange rate...",
      "options": [
        "rises/appreciates",
        "falls/depreciates",
        "stays at R2",
        "becomes unrelated to NX"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "conceptCluster": "exchange_rate_adjustment",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "Point A is at R1, a higher real exchange rate than R2.",
      "image": "rer_changes.png",
      "id": 132,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. Moving from E to I means the real exchange rate...",
      "options": [
        "falls/depreciates",
        "rises/appreciates",
        "stays at R2",
        "forces NX to zero"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "conceptCluster": "exchange_rate_adjustment",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "Point I is at R3, a lower real exchange rate than R2.",
      "image": "rer_changes.png",
      "id": 133,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. A shift from NX(R)2 to NX(R)1 moves equilibrium from B to...",
      "options": [
        "A",
        "C",
        "NX",
        "R3"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "A rightward shift of NX demand raises the real exchange rate at fixed S - I.",
      "image": "tradepolicies.png",
      "id": 134,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. A shift from NX(R)2 to NX(R)3 moves equilibrium from B to...",
      "options": [
        "C",
        "A",
        "NX",
        "R1"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "A leftward shift of NX demand lowers the real exchange rate at fixed S - I.",
      "image": "tradepolicies.png",
      "id": 135,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. A rightward IS* shift under floating rates moves the economy from B to...",
      "options": [
        "A",
        "C",
        "Y3",
        "LM3"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "A rightward IS* shift raises the exchange rate while output remains at Y*.",
      "image": "islm_exchangerates.png",
      "id": 136,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. A rightward LM* shift under floating rates moves the economy from B to...",
      "options": [
        "C",
        "A",
        "IS1",
        "e1"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "A rightward LM* shift lowers the exchange rate and raises income.",
      "image": "islm_er_change.png",
      "id": 137,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. Moving from A to C as P falls shows...",
      "options": [
        "higher real balances, lower exchange rate, and higher income",
        "lower real balances and lower income",
        "a tariff shifting NX right",
        "a fixed exchange rate intervention"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Lower P raises M/P, shifts LM* right, and moves along aggregate demand to higher Y.",
      "image": "mundell_ad.png",
      "id": 138,
      "difficulty": "medium"
    },
    {
      "q": "In a small open economy, domestic fiscal expansion lowers national saving. What happens to the trade balance?",
      "options": [
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "the world interest rate must be set by the domestic central bank",
        "NX cannot move because trade is always balanced"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "interpretation",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Domestic fiscal expansion lowers national saving changes S - I, and S - I equals NX.",
      "id": 139,
      "difficulty": "medium"
    },
    {
      "q": "In a small open economy, domestic fiscal contraction raises national saving. What happens to the trade balance?",
      "options": [
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "the world interest rate must be set by the domestic central bank",
        "NX cannot move because trade is always balanced"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "interpretation",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Domestic fiscal contraction raises national saving changes S - I, and S - I equals NX.",
      "id": 140,
      "difficulty": "medium"
    },
    {
      "q": "In a small open economy, investment demand rises while saving is unchanged. What happens to the trade balance?",
      "options": [
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "the world interest rate must be set by the domestic central bank",
        "NX cannot move because trade is always balanced"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "interpretation",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "Investment demand rises while saving is unchanged changes S - I, and S - I equals NX.",
      "id": 141,
      "difficulty": "medium"
    },
    {
      "q": "In a small open economy, investment demand falls while saving is unchanged. What happens to the trade balance?",
      "options": [
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "the world interest rate must be set by the domestic central bank",
        "NX cannot move because trade is always balanced"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "interpretation",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "Investment demand falls while saving is unchanged changes S - I, and S - I equals NX.",
      "id": 142,
      "difficulty": "medium"
    },
    {
      "q": "In a small open economy, foreign fiscal expansion raises the world interest rate. What happens to the trade balance?",
      "options": [
        "domestic investment falls, S - I rises, and net exports rise",
        "domestic investment rises, S - I falls, and net exports fall",
        "the world interest rate must be set by the domestic central bank",
        "NX cannot move because trade is always balanced"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "interpretation",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Foreign fiscal expansion raises the world interest rate changes S - I, and S - I equals NX.",
      "id": 143,
      "difficulty": "medium"
    },
    {
      "q": "In a small open economy, foreign fiscal contraction lowers the world interest rate. What happens to the trade balance?",
      "options": [
        "domestic investment rises, S - I falls, and net exports fall",
        "domestic investment falls, S - I rises, and net exports rise",
        "the world interest rate must be set by the domestic central bank",
        "NX cannot move because trade is always balanced"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "interpretation",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Foreign fiscal contraction lowers the world interest rate changes S - I, and S - I equals NX.",
      "id": 144,
      "difficulty": "medium"
    },
    {
      "q": "A tariff directly raises demand for domestic net exports. Why does the trade balance not necessarily improve?",
      "options": [
        "the real exchange rate appreciates and offsets the direct effect",
        "saving automatically increases by the tariff amount",
        "investment becomes perfectly elastic",
        "the world interest rate becomes domestic policy"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "trap",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Trade restrictions shift NX demand, but exchange-rate appreciation offsets the quantity effect.",
      "id": 145,
      "difficulty": "medium"
    },
    {
      "q": "Capital flight means investors suddenly want to move funds abroad. What happens to the domestic currency?",
      "options": [
        "it depreciates",
        "it appreciates",
        "it is unaffected because capital flows are separate from exchange rates",
        "it must become fixed"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "interpretation",
      "objective": "LO6.5",
      "conceptCluster": "capital_flight_exchange_rate",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "Capital flight increases supply of the domestic currency on foreign-exchange markets, putting downward pressure on it.",
      "id": 146,
      "difficulty": "medium"
    },
    {
      "q": "Under floating rates, expansionary fiscal policy is weak because...",
      "options": [
        "appreciation crowds out net exports",
        "depreciation raises net exports",
        "the central bank must defend a peg",
        "investment becomes unrelated to interest rates"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "The exchange-rate channel offsets the demand effect of fiscal expansion.",
      "id": 147,
      "difficulty": "medium"
    },
    {
      "q": "Under floating rates, expansionary monetary policy works because...",
      "options": [
        "depreciation raises net exports",
        "appreciation lowers net exports",
        "the central bank loses all control of money",
        "the peg forces reserve sales"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Monetary expansion lowers the exchange rate and raises NX.",
      "id": 148,
      "difficulty": "medium"
    },
    {
      "q": "Under a fixed exchange rate, independent monetary expansion is neutralized because...",
      "options": [
        "the central bank must defend the peg",
        "the IS curve disappears",
        "imports are illegal under pegs",
        "saving always equals zero"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Reserve intervention reverses money-supply pressure if the peg is maintained.",
      "id": 149,
      "difficulty": "medium"
    },
    {
      "q": "A country fixes its exchange rate and allows free capital mobility. What does the impossible trinity say it gives up?",
      "options": [
        "independent monetary policy",
        "fiscal policy",
        "exports",
        "government spending"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "interpretation",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Fixed exchange rates plus free capital mobility remove independent monetary policy.",
      "id": 150,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. A country wants independent monetary policy and free capital mobility. What must it give up?",
      "options": [
        "a fixed exchange rate",
        "exports",
        "domestic investment",
        "fiscal policy"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "interpretation",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Monetary independence plus capital mobility requires a floating exchange rate.",
      "image": "impossibletrinity.png",
      "id": 151,
      "difficulty": "medium"
    },
    {
      "q": "If P rises in the Mundell-Fleming model aggregate demand derivation, what happens to real balances?",
      "options": [
        "M/P falls",
        "M/P rises",
        "NX becomes zero",
        "r* becomes domestic policy"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "interpretation",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Higher P reduces real money balances and shifts LM* left.",
      "id": 152,
      "difficulty": "medium"
    },
    {
      "q": "If P falls in the Mundell-Fleming model aggregate demand derivation, what happens to real balances?",
      "options": [
        "M/P rises",
        "M/P falls",
        "NX becomes fixed",
        "IS* disappears"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "interpretation",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Lower P raises M/P and shifts LM* right.",
      "id": 153,
      "difficulty": "medium"
    },
    {
      "q": "Exports are 420 and imports are 510. What is NX and the trade position?",
      "options": [
        "-90; deficit",
        "90; surplus",
        "930; trade surplus",
        "90; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 420 - 510 = -90.",
      "id": 154,
      "difficulty": "medium"
    },
    {
      "q": "Exports are 860 and imports are 710. What is NX and the trade position?",
      "options": [
        "150; surplus",
        "-150; deficit",
        "1570; trade surplus",
        "150; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 860 - 710 = 150.",
      "id": 155,
      "difficulty": "medium"
    },
    {
      "q": "Exports are 1250 and imports are 1390. What is NX and the trade position?",
      "options": [
        "-140; deficit",
        "140; surplus",
        "2640; trade surplus",
        "140; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 1250 - 1390 = -140.",
      "id": 156,
      "difficulty": "medium"
    },
    {
      "q": "Exports are 980 and imports are 980. What is NX and the trade position?",
      "options": [
        "0; balanced trade",
        "0; balanced trade",
        "1960; trade surplus",
        "0; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 980 - 980 = 0.",
      "id": 157,
      "difficulty": "medium"
    },
    {
      "q": "Exports are 1540 and imports are 1325. What is NX and the trade position?",
      "options": [
        "215; surplus",
        "-215; deficit",
        "2865; trade surplus",
        "215; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 1540 - 1325 = 215.",
      "id": 158,
      "difficulty": "medium"
    },
    {
      "q": "Exports are 675 and imports are 820. What is NX and the trade position?",
      "options": [
        "-145; deficit",
        "145; surplus",
        "1495; trade surplus",
        "145; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 675 - 820 = -145.",
      "id": 159,
      "difficulty": "medium"
    },
    {
      "q": "National saving is 900 and domestic investment is 760. What are net exports?",
      "options": [
        "140; surplus",
        "-140; the opposite sign",
        "1660; surplus",
        "140; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 900 - 760 = 140.",
      "id": 160,
      "difficulty": "medium"
    },
    {
      "q": "National saving is 900 and domestic investment is 1020. What are net exports?",
      "options": [
        "-120; deficit",
        "120; the opposite sign",
        "1920; surplus",
        "120; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 900 - 1020 = -120.",
      "id": 161,
      "difficulty": "medium"
    },
    {
      "q": "National saving is 1450 and domestic investment is 1450. What are net exports?",
      "options": [
        "0; balanced trade",
        "0; the opposite sign",
        "2900; surplus",
        "0; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1450 - 1450 = 0.",
      "id": 162,
      "difficulty": "medium"
    },
    {
      "q": "National saving is 1700 and domestic investment is 1325. What are net exports?",
      "options": [
        "375; surplus",
        "-375; the opposite sign",
        "3025; surplus",
        "375; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1700 - 1325 = 375.",
      "id": 163,
      "difficulty": "medium"
    },
    {
      "q": "National saving is 1325 and domestic investment is 1700. What are net exports?",
      "options": [
        "-375; deficit",
        "375; the opposite sign",
        "3025; surplus",
        "375; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1325 - 1700 = -375.",
      "id": 164,
      "difficulty": "medium"
    },
    {
      "q": "National saving is 2100 and domestic investment is 1850. What are net exports?",
      "options": [
        "250; surplus",
        "-250; the opposite sign",
        "3950; surplus",
        "250; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 2100 - 1850 = 250.",
      "id": 165,
      "difficulty": "medium"
    },
    {
      "q": "Y=3000, C=1800, I=700, and G=650. What are net exports?",
      "options": [
        "-150; deficit",
        "150; wrong sign",
        "1200; missing I and G",
        "3150; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -150.",
      "id": 166,
      "difficulty": "medium"
    },
    {
      "q": "Y=4200, C=2600, I=900, and G=800. What are net exports?",
      "options": [
        "-100; deficit",
        "100; wrong sign",
        "1600; missing I and G",
        "4300; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -100.",
      "id": 167,
      "difficulty": "medium"
    },
    {
      "q": "Y=2500, C=1600, I=500, and G=450. What are net exports?",
      "options": [
        "-50; deficit",
        "50; wrong sign",
        "900; missing I and G",
        "2550; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -50.",
      "id": 168,
      "difficulty": "medium"
    },
    {
      "q": "Y=5200, C=3300, I=1100, and G=900. What are net exports?",
      "options": [
        "-100; deficit",
        "100; wrong sign",
        "1900; missing I and G",
        "5300; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -100.",
      "id": 169,
      "difficulty": "medium"
    },
    {
      "q": "Y=3800, C=2300, I=850, and G=750. What are net exports?",
      "options": [
        "-100; deficit",
        "100; wrong sign",
        "1500; missing I and G",
        "3900; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -100.",
      "id": 170,
      "difficulty": "medium"
    },
    {
      "q": "Using ε = eP/P*, if e=1.2, P=100, and P*=120, what is ε?",
      "options": [
        "1",
        "1.2",
        "0.83",
        "120"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 1.2 × 100 / 120 = 1.",
      "id": 171,
      "difficulty": "medium"
    },
    {
      "q": "Using ε = eP/P*, if e=0.8, P=150, and P*=100, what is ε?",
      "options": [
        "1.2",
        "0.8",
        "1.5",
        "120"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 0.8 × 150 / 100 = 1.2.",
      "id": 172,
      "difficulty": "medium"
    },
    {
      "q": "Using ε = eP/P*, if e=1.5, P=80, and P*=120, what is ε?",
      "options": [
        "1",
        "1.5",
        "0.67",
        "120"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 1.5 × 80 / 120 = 1.",
      "id": 173,
      "difficulty": "medium"
    },
    {
      "q": "Using ε = eP/P*, if e=1.0, P=120, and P*=80, what is ε?",
      "options": [
        "1.5",
        "1.0",
        "1.5",
        "120"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 1.0 × 120 / 80 = 1.5.",
      "id": 174,
      "difficulty": "medium"
    },
    {
      "q": "Using ε = eP/P*, if e=2.0, P=90, and P*=150, what is ε?",
      "options": [
        "1.2",
        "2.0",
        "0.6",
        "180"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 2.0 × 90 / 150 = 1.2.",
      "id": 175,
      "difficulty": "medium"
    },
    {
      "q": "Using ε = eP/P*, if e=0.75, P=160, and P*=120, what is ε?",
      "options": [
        "1",
        "0.75",
        "1.33",
        "120"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 0.75 × 160 / 120 = 1.",
      "id": 176,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. A move from D to C is best described as...",
      "options": [
        "lower saving at the same world interest rate",
        "higher investment demand at the same world interest rate",
        "a tariff shifting NX(R)",
        "a fixed exchange-rate intervention"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.2",
      "conceptCluster": "saving_shift_nx",
      "primarySkill": "saving_shift_nx",
      "repairSkill": "saving_shift_nx",
      "feedback": "D to C moves left from S2 to S1 at the same r_w2.",
      "image": "loanablefunds_changes.png",
      "id": 177,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. A move from D to E is best described as...",
      "options": [
        "higher saving at the same world interest rate",
        "lower investment demand at the same world interest rate",
        "a rightward NX(R) shift",
        "a monetary contraction"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.2",
      "conceptCluster": "saving_shift_nx",
      "primarySkill": "saving_shift_nx",
      "repairSkill": "saving_shift_nx",
      "feedback": "D to E moves right from S2 to S3 at the same r_w2.",
      "image": "loanablefunds_changes.png",
      "id": 178,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. Point B is not equilibrium because...",
      "options": [
        "it lies on S - I but not on NX(R)",
        "it lies on NX(R) but not on S - I",
        "it has no exchange-rate value",
        "it is below R3"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "conceptCluster": "exchange_rate_adjustment",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "Equilibrium requires the vertical S - I line and the NX(R) curve to intersect.",
      "image": "realexchangerates.png",
      "id": 179,
      "difficulty": "medium"
    },
    {
      "q": "Refer to the image above. Point A is on the NX(R) curve at...",
      "options": [
        "R1",
        "R2",
        "R3",
        "NX2"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "conceptCluster": "exchange_rate_adjustment",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "Point A sits on the NX(R) curve at the high real exchange rate R1.",
      "image": "realexchangerates.png",
      "id": 180,
      "difficulty": "medium"
    },
    {
      "q": "If a tax increase raises public saving in a small open economy, what happens to S - I?",
      "options": [
        "it rises",
        "it falls",
        "it must stay fixed",
        "it becomes the money supply"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "interpretation",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Higher public saving raises national saving, so S - I rises.",
      "id": 181,
      "difficulty": "medium"
    },
    {
      "q": "If a tax cut lowers public saving in a small open economy, what happens to S - I?",
      "options": [
        "it falls",
        "it rises",
        "it must stay fixed",
        "it becomes the price level"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "interpretation",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Lower public saving lowers national saving, so S - I falls.",
      "id": 182,
      "difficulty": "medium"
    },
    {
      "q": "A student says NX can change without any corresponding financial-flow entry. What identity corrects them?",
      "options": [
        "NX = NCO",
        "Y = C + I + G",
        "M/P = L(r,Y)",
        "ε = eP/P*"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "interpretation",
      "objective": "LO6.1",
      "difficulty": "medium",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "International trade flows and financial flows are linked by NX = NCO.",
      "id": 183
    },
    {
      "q": "If domestic spending is larger than output, which identity reveals the trade balance?",
      "options": [
        "Y - C - I - G = NX",
        "S = C + I + G",
        "M/P = NX",
        "r = εP/P*"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "interpretation",
      "objective": "LO6.1",
      "difficulty": "medium",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Rearrange Y = C + I + G + NX.",
      "id": 184
    },
    {
      "q": "Which identity is the bridge from goods-market spending to the trade balance?",
      "options": [
        "Y = C + I + G + NX",
        "M/P = L(r,Y)",
        "ε = eP/P*",
        "LRAS = Y*"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "interpretation",
      "objective": "LO6.1",
      "difficulty": "medium",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "The income identity explicitly includes NX.",
      "id": 185
    },
    {
      "q": "Which identity is the bridge from saving/investment to capital flows?",
      "options": [
        "S = I + NCO",
        "NX = M - X only",
        "P = ε/e",
        "LM* = IS*"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "interpretation",
      "objective": "LO6.1",
      "difficulty": "medium",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Saving finances domestic investment plus net capital outflow.",
      "id": 186
    },
    {
      "q": "Why does a trade deficit imply capital inflow in the accounting system?",
      "options": [
        "NX is negative, so NCO is negative",
        "NX is positive, so NCO is positive",
        "saving must equal zero",
        "exports must be illegal"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "interpretation",
      "objective": "LO6.1",
      "difficulty": "medium",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Because NX = NCO, negative NX means negative net capital outflow, or capital inflow.",
      "id": 187
    },
    {
      "q": "Why does a trade surplus imply capital outflow in the accounting system?",
      "options": [
        "NX is positive, so NCO is positive",
        "NX is negative, so NCO is negative",
        "investment must equal zero",
        "the exchange rate must be fixed"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "interpretation",
      "objective": "LO6.1",
      "difficulty": "medium",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Because NX = NCO, positive NX means net capital outflow.",
      "id": 188
    },
    {
      "q": "Which policy pair is consistent with free capital mobility and monetary independence?",
      "options": [
        "floating exchange rate",
        "fixed exchange rate",
        "no exchange-rate market",
        "balanced trade by law"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "interpretation",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "With free capital mobility and monetary independence, the exchange rate must float.",
      "id": 189,
      "difficulty": "medium"
    }
  ],
  "hard": [
    {
      "id": 200,
      "q": "A small open economy begins at balanced trade. A domestic budget deficit opens. Which full chain is correct?",
      "options": [
        "national saving falls → S - I falls → real exchange rate appreciates → net exports fall",
        "national saving rises → S - I rises → depreciation → net exports rise",
        "investment rises because G rises → net exports rise",
        "r* falls because the domestic country borrows"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "hard",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "The deficit lowers saving, reducing net capital outflow and appreciating the real exchange rate."
    },
    {
      "id": 201,
      "q": "A foreign government runs contractionary fiscal policy that lowers the world interest rate. What happens domestically?",
      "options": [
        "investment rises, S - I falls, and net exports fall",
        "investment falls, S - I rises, and net exports rise",
        "saving rises automatically",
        "the domestic interest rate stays above r*"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "hard",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Lower r* raises investment, reducing S - I and NX."
    },
    {
      "id": 202,
      "q": "A technology boom raises investment demand. In the S - I/NX graph, which result is right?",
      "options": [
        "S - I shifts left, the real exchange rate appreciates, and net exports fall",
        "S - I shifts right and net exports rise",
        "NX(R) shifts right because tariffs rise",
        "the real exchange rate depreciates and imports fall"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "hard",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "Higher investment lowers S - I at each real exchange rate."
    },
    {
      "id": 203,
      "q": "A tariff shifts NX(R) right. Why does the trade balance not necessarily improve?",
      "options": [
        "real appreciation offsets the direct rise in demand for NX",
        "saving rises automatically",
        "investment falls because tariffs change r*",
        "the central bank fixes imports"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "trap",
      "objective": "LO6.5",
      "difficulty": "hard",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The real exchange rate moves to keep NX equal to S - I.",
      "commonError": "assuming tariffs mechanically fix deficits"
    },
    {
      "id": 204,
      "q": "Capital flight causes a currency depreciation and higher net exports. Why is 'higher net exports means better economy' a bad conclusion?",
      "options": [
        "the higher net exports reflects financial stress and capital outflow, not a clean productivity gain",
        "higher net exports always means stronger welfare",
        "capital flight causes appreciation",
        "NX is unrelated to capital flows"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "trap",
      "objective": "LO6.5",
      "difficulty": "hard",
      "conceptCluster": "capital_flight_exchange_rate",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "Capital flight can raise NX through depreciation while still signaling a crisis."
    },
    {
      "id": 205,
      "q": "Refer to the image above. A domestic fiscal expansion most likely moves equilibrium from E to...",
      "options": [
        "A",
        "I",
        "H",
        "C"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "hard",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Fiscal expansion lowers saving, shifts S - I left, and raises R to point A.",
      "image": "rer_changes.png"
    },
    {
      "id": 206,
      "q": "Refer to the image above. A rise in national saving most likely moves equilibrium from E to...",
      "options": [
        "I",
        "A",
        "D",
        "B"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "hard",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Higher saving shifts S - I right and lowers R to point I.",
      "image": "rer_changes.png"
    },
    {
      "id": 207,
      "q": "Refer to the image above. Moving from B to A means the real exchange rate...",
      "options": [
        "appreciates while NX stays tied to S - I",
        "depreciates and net exports rise permanently",
        "stays fixed while imports vanish",
        "falls and exports collapse"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "hard",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The rightward NX shift raises R but does not move the vertical S - I line.",
      "image": "tradepolicies.png"
    },
    {
      "id": 208,
      "q": "Refer to the image above. Floating-rate fiscal expansion moves from B to A. What happens to output?",
      "options": [
        "it remains at Y*",
        "it rises to Y3",
        "it falls to Y1",
        "it becomes NX2"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "hard",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "IS* shifts right, but Y is pinned by LM* at Y*.",
      "image": "islm_exchangerates.png"
    },
    {
      "id": 209,
      "q": "Refer to the image above. Floating-rate monetary expansion moves from B to C. What is the exchange-rate channel?",
      "options": [
        "e falls, depreciation raises NX, and Y rises",
        "e rises, appreciation raises NX, and Y falls",
        "e is fixed by the central bank",
        "net exports fall because LM* shifts right"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "hard",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "LM* right lowers e and raises Y through NX.",
      "image": "islm_er_change.png"
    },
    {
      "id": 210,
      "q": "Refer to the image above. Why does the right-panel aggregate demand slope downward?",
      "options": [
        "lower P raises M/P, shifts LM* right, lowers e, raises NX, and raises Y",
        "lower P shifts IS* left",
        "higher P raises NX",
        "lower P raises r* directly"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "difficulty": "hard",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "The open-economy aggregate demand channel runs through real balances and the exchange rate.",
      "image": "mundell_ad.png"
    },
    {
      "id": 211,
      "q": "Under floating rates, expansionary fiscal policy and expansionary monetary policy have opposite exchange-rate effects. Which pairing is correct?",
      "options": [
        "fiscal appreciates; monetary depreciates",
        "fiscal depreciates; monetary appreciates",
        "both appreciate",
        "both depreciate"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "interaction",
      "objective": "LO6.5",
      "difficulty": "hard",
      "conceptCluster": "floating_exchange_policy",
      "primarySkill": "floating_exchange_policy",
      "repairSkill": "floating_exchange_policy",
      "feedback": "Fiscal shifts IS* right; monetary shifts LM* right."
    },
    {
      "id": 212,
      "q": "Under fixed rates, why does fiscal policy become powerful in Mundell-Fleming model?",
      "options": [
        "pressure for appreciation forces monetary expansion to defend the peg",
        "fiscal policy shifts LM* left",
        "the exchange rate floats away",
        "capital mobility vanishes"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.3",
      "difficulty": "hard",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "Fiscal expansion raises income and money demand; defending the peg expands the money supply."
    },
    {
      "id": 213,
      "q": "Under fixed rates, a central bank facing depreciation pressure must...",
      "options": [
        "buy domestic currency and reduce the money supply",
        "sell domestic currency and expand money supply",
        "ignore the peg",
        "raise tariffs to shift LM*"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "policy_memo",
      "objective": "LO14.3",
      "difficulty": "hard",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Depreciation pressure requires buying domestic currency, contracting money."
    },
    {
      "id": 214,
      "q": "A country selects fixed exchange rates and free capital mobility. Which policy becomes subordinate to the exchange-rate target?",
      "options": [
        "monetary policy",
        "fiscal policy",
        "tariff policy",
        "export accounting"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "interpretation",
      "objective": "LO14.3",
      "difficulty": "hard",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The money supply must adjust to maintain the peg."
    },
    {
      "id": 215,
      "q": "Refer to the image above. A country chooses independent monetary policy and a fixed exchange rate. Which side of the impossible trinity is sacrificed?",
      "options": [
        "free capital mobility",
        "fiscal policy",
        "exports",
        "the domestic currency"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "graph",
      "objective": "LO14.3",
      "difficulty": "hard",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "You cannot keep all three corners.",
      "image": "impossibletrinity.png"
    },
    {
      "id": 216,
      "q": "If P rises in the Mundell-Fleming model aggregate demand derivation, what happens to M/P, e, NX, and Y?",
      "options": [
        "M/P falls, e rises, net exports fall, and Y falls",
        "M/P rises, e falls, net exports rise, and Y rises",
        "IS* shifts right and Y rises",
        "r* falls and investment rises"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "difficulty": "hard",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Higher P reduces real balances, shifts LM* left, appreciates the currency, and lowers NX."
    },
    {
      "id": 217,
      "q": "A large open economy runs expansionary fiscal policy. Which result differs from the small-open-economy case?",
      "options": [
        "the domestic interest rate rises rather than staying fixed at r*",
        "NX becomes unrelated to saving",
        "investment is unchanged because r cannot move",
        "net exports stop depending on exchange rates"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "hard",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "Large open economies partly affect the interest rate."
    },
    {
      "id": 218,
      "q": "In a large open economy, why is fiscal crowding out only partial relative to a closed economy?",
      "options": [
        "capital inflows can finance some extra borrowing",
        "NX is always zero",
        "investment is banned",
        "saving stops mattering"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "hard",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "International capital flows reduce but do not eliminate interest-rate pressure."
    },
    {
      "id": 219,
      "q": "Why is it wrong to treat a small open economy like a closed economy when fiscal policy changes?",
      "options": [
        "the exchange-rate/net-export channel can offset spending changes",
        "saving has no role",
        "investment never depends on interest rates",
        "NX is always positive"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "trap",
      "objective": "LO14.1",
      "difficulty": "hard",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "In open economy models, capital flows and exchange rates matter."
    },
    {
      "id": 220,
      "q": "Exports are 1,260 and imports are 1,480. National saving is unchanged. Which statement is consistent with the accounting identity?",
      "options": [
        "net exports are -220, so net capital outflow is -220",
        "net exports are 220, so net capital outflow is 220",
        "net exports are -220, but net capital outflow is 220",
        "net exports cannot be calculated without government spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "hard",
      "conceptCluster": "trade_identity_calculation",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = X - M = -220, and NX = NCO."
    },
    {
      "id": 221,
      "q": "A foreign fiscal expansion raises the world interest rate. In a small open economy, what happens to domestic investment and net exports?",
      "options": [
        "investment falls and net exports rise",
        "investment rises and net exports fall",
        "investment and net exports both rise",
        "investment and net exports both fall"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "multi-step",
      "objective": "LO6.3",
      "difficulty": "hard",
      "conceptCluster": "foreign_interest_rate_shock",
      "primarySkill": "world_interest_rate_changes",
      "repairSkill": "world_interest_rate_changes",
      "feedback": "A higher world interest rate reduces domestic investment. With saving fixed, S - I rises, so net exports rise."
    },
    {
      "id": 222,
      "q": "Refer to the image above. Moving from D to B is best read as...",
      "options": [
        "a higher world interest rate reducing investment while saving stays fixed",
        "a lower world interest rate raising investment while saving stays fixed",
        "a tariff shifting the net-exports curve",
        "a monetary expansion shifting LM* right"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "difficulty": "hard",
      "conceptCluster": "foreign_interest_rate_shock",
      "primarySkill": "world_interest_rate_changes",
      "repairSkill": "world_interest_rate_changes",
      "feedback": "On the loanable-funds graph, D to B moves up the saving line as the world interest rate rises.",
      "image": "loanablefunds.png"
    },
    {
      "id": 223,
      "q": "A policy raises private saving without changing domestic investment demand. What happens to S - I and the trade balance?",
      "options": [
        "S - I rises and the trade balance moves toward surplus",
        "S - I falls and the trade balance moves toward deficit",
        "S - I is unchanged because investment demand did not move",
        "the trade balance changes only if tariffs change"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "hard",
      "conceptCluster": "saving_shift_trade_balance",
      "primarySkill": "trace_saving_shift",
      "repairSkill": "trace_saving_shift",
      "feedback": "Higher saving raises S - I, which raises net exports in the small-open-economy model."
    },
    {
      "id": 224,
      "q": "A country’s currency appreciates after a fiscal expansion. Why do net exports fall?",
      "options": [
        "domestic goods become relatively more expensive to foreign buyers",
        "domestic goods become relatively cheaper to foreign buyers",
        "the national saving identity stops applying",
        "imports are banned by the fiscal expansion"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "interpretation",
      "objective": "LO6.4",
      "difficulty": "hard",
      "conceptCluster": "appreciation_net_exports",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "A real appreciation makes domestic goods relatively more expensive and reduces net exports."
    },
    {
      "id": 225,
      "q": "Refer to the image above. At R1 with the vertical S - I line at NX2, which point represents the S - I position rather than the net-exports curve?",
      "options": [
        "B",
        "A",
        "D",
        "G"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "graph",
      "objective": "LO6.4",
      "difficulty": "hard",
      "conceptCluster": "real_exchange_rate_reading",
      "primarySkill": "trade_balance_net_exports",
      "repairSkill": "trade_balance_net_exports",
      "feedback": "Point B is on the vertical S - I line at R1; point A is on the NX(R) curve.",
      "image": "realexchangerates.png"
    },
    {
      "id": 226,
      "q": "Refer to the image above. A movement from D to G on the investment-demand curve is most consistent with...",
      "options": [
        "a lower world interest rate raising investment",
        "a higher world interest rate lowering investment",
        "a fall in national saving",
        "a tariff shifting the NX schedule"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.2",
      "difficulty": "hard",
      "conceptCluster": "investment_response_to_interest_rate",
      "primarySkill": "saving_investment_capital_flows",
      "repairSkill": "saving_investment_capital_flows",
      "feedback": "Moving down along I(r) raises investment as the world interest rate falls.",
      "image": "loanablefunds.png"
    },
    {
      "id": 227,
      "q": "In the floating-rate Mundell-Fleming model, a fall in money demand is closest to which policy effect?",
      "options": [
        "monetary expansion: LM* shifts right, the currency depreciates, and output rises",
        "fiscal expansion: IS* shifts right and output is unchanged",
        "trade restriction: IS* shifts right and the currency appreciates",
        "fixed-rate intervention: the central bank sells reserves"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "difficulty": "hard",
      "conceptCluster": "money_demand_shock",
      "primarySkill": "money_demand_shock",
      "repairSkill": "money_demand_shock",
      "feedback": "Lower money demand acts like an expansionary money-market shock in the Mundell-Fleming model."
    },
    {
      "id": 228,
      "q": "Refer to the image above. A leftward LM* shift under floating rates would move the economy from B toward...",
      "options": [
        "A",
        "C",
        "Y3",
        "IS1"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "hard",
      "conceptCluster": "monetary_contraction_graph",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "A leftward LM* shift appreciates the currency and lowers output, moving toward A.",
      "image": "islm_er_change.png"
    },
    {
      "id": 229,
      "q": "Refer to the image above. Choosing side 3 preserves a fixed exchange rate and free capital mobility. What must be surrendered?",
      "options": [
        "independent monetary policy",
        "the fixed exchange rate",
        "free capital mobility",
        "the accounting identity NX = NCO"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "graph",
      "objective": "LO14.3",
      "difficulty": "hard",
      "conceptCluster": "impossible_trinity_application",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Side 3 combines the fixed exchange rate with free capital mobility, so monetary independence is lost.",
      "image": "impossibletrinity.png"
    },
    {
      "q": "A policy memo says: domestic fiscal expansion lowers national saving. Which complete open-economy chain is correct?",
      "options": [
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 230,
      "difficulty": "hard"
    },
    {
      "q": "A policy memo says: domestic fiscal contraction raises national saving. Which complete open-economy chain is correct?",
      "options": [
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 231,
      "difficulty": "hard"
    },
    {
      "q": "A policy memo says: investment demand rises while saving is unchanged. Which complete open-economy chain is correct?",
      "options": [
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "multi-step",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 232,
      "difficulty": "hard"
    },
    {
      "q": "A policy memo says: investment demand falls while saving is unchanged. Which complete open-economy chain is correct?",
      "options": [
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "multi-step",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 233,
      "difficulty": "hard"
    },
    {
      "q": "A policy memo says: foreign fiscal expansion raises the world interest rate. Which complete open-economy chain is correct?",
      "options": [
        "domestic investment falls, S - I rises, and net exports rise",
        "domestic investment rises, S - I falls, and net exports fall",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 234,
      "difficulty": "hard"
    },
    {
      "q": "A policy memo says: foreign fiscal contraction lowers the world interest rate. Which complete open-economy chain is correct?",
      "options": [
        "domestic investment rises, S - I falls, and net exports fall",
        "domestic investment falls, S - I rises, and net exports rise",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 235,
      "difficulty": "hard"
    },
    {
      "q": "In Mundell-Fleming model with floating exchange rates, expansionary fiscal policy, which chain is correct?",
      "options": [
        "IS* shifts right, the exchange rate appreciates, net exports fall, and Y is offset",
        "LM* shifts right, the exchange rate depreciates, net exports rise, and Y rises",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 236,
      "difficulty": "hard"
    },
    {
      "q": "In a Mundell-Fleming model with floating exchange rates, and contractionary fiscal policy, which chain is correct?",
      "options": [
        "IS* shifts left, the exchange rate depreciates, net exports rise, and Y is offset",
        "LM* shifts left, the exchange rate appreciates, net exports fall, and Y falls strongly",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 237,
      "difficulty": "hard"
    },
    {
      "q": "In a Mundell-Fleming model with floating exchange rates, and expansionary monetary policy, which chain is correct?",
      "options": [
        "LM* shifts right, the exchange rate depreciates, net exports rise, and Y rises",
        "IS* shifts right, the exchange rate appreciates, net exports fall, and Y is unchanged",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 238,
      "difficulty": "hard"
    },
    {
      "q": "In a Mundell-Fleming model with floating exchange rates, and contractionary monetary policy, which chain is correct?",
      "options": [
        "LM* shifts left, the exchange rate appreciates, net exports fall, and Y falls",
        "IS* shifts left, the exchange rate depreciates, net exports rise, and Y is unchanged",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 239,
      "difficulty": "hard"
    },
    {
      "q": "In a Mundell-Fleming model with fixed exchange rates, and expansionary fiscal policy, which chain is correct?",
      "options": [
        "IS* shifts right and the central bank expands M to defend the peg, amplifying Y",
        "IS* shifts right but appreciation fully crowds out NX as under floating rates",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.3",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 240,
      "difficulty": "hard"
    },
    {
      "q": "In a Mundell-Fleming model with fixed exchange rates, and expansionary monetary policy, which chain is correct?",
      "options": [
        "pressure for depreciation forces reversal if the peg is defended, so the policy loses independence",
        "LM* remains right because fixed exchange rates strengthen monetary autonomy",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 241,
      "difficulty": "hard"
    },
    {
      "q": "In a Mundell-Fleming model with fixed exchange rates, and contractionary monetary policy, which chain is correct?",
      "options": [
        "pressure for appreciation forces reversal if the peg is defended, so the policy loses independence",
        "LM* remains left because fixed exchange rates strengthen monetary autonomy",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 242,
      "difficulty": "hard"
    },
    {
      "q": "In a Mundell-Fleming model with floating exchange rates, and an import quota, which chain is correct?",
      "options": [
        "IS* shifts right at first, but appreciation offsets the output effect",
        "LM* shifts right and output rises permanently",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "conceptCluster": "trade_policy_under_floating",
      "primarySkill": "trade_policy_under_floating",
      "repairSkill": "trade_policy_under_floating",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 243,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. In the small-open-economy aggregate demand derivation, the price level falls. What is the full chain?",
      "options": [
        "M/P rises, LM* shifts right, e falls/depreciates, net exports rise, and Y rises",
        "M/P moves the opposite way, so Y moves the opposite way",
        "IS* shifts because P changes government spending",
        "the world interest rate adjusts first"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Price changes real money balances, which moves LM* and then the exchange-rate/net-export channel.",
      "image": "mundell_adas.png",
      "id": 244,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. In the small-open-economy aggregate demand derivation, the price level rises. What is the full chain?",
      "options": [
        "M/P falls, LM* shifts left, e rises/appreciates, net exports fall, and Y falls",
        "M/P moves the opposite way, so Y moves the opposite way",
        "IS* shifts because P changes government spending",
        "the world interest rate adjusts first"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Price changes real money balances, which moves LM* and then the exchange-rate/net-export channel.",
      "image": "mundell_adas.png",
      "id": 245,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. A country insists on fixed exchange rate and free capital mobility. According to the impossible trinity, what must it give up?",
      "options": [
        "independent monetary policy",
        "exports",
        "fiscal policy",
        "national saving"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "trap",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The trilemma permits two goals, not all three.",
      "image": "impossibletrinity.png",
      "id": 246,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. A country insists on independent monetary policy and free capital mobility. According to the impossible trinity, what must it give up?",
      "options": [
        "a fixed exchange rate",
        "exports",
        "fiscal policy",
        "national saving"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "trap",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The trilemma permits two goals, not all three.",
      "image": "impossibletrinity.png",
      "id": 247,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. A country insists on fixed exchange rate and independent monetary policy. According to the impossible trinity, what must it give up?",
      "options": [
        "free capital mobility",
        "exports",
        "fiscal policy",
        "national saving"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "trap",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The trilemma permits two goals, not all three.",
      "image": "impossibletrinity.png",
      "id": 248,
      "difficulty": "hard"
    },
    {
      "q": "Fiscal expansion raises the domestic interest rate. Which result fits the model?",
      "options": [
        "investment falls and capital-flow/exchange-rate pressure reduces NX",
        "investment rises because all fiscal expansions increase private investment",
        "the economy has no exchange-rate channel",
        "NX cannot respond to capital flows"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "multi-step",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "In a large open economy, r can move and international flows still matter.",
      "id": 249,
      "difficulty": "hard"
    },
    {
      "q": "Monetary expansion lowers the interest rate. Which result fits the model?",
      "options": [
        "investment rises and capital-flow/exchange-rate pressure affects NX",
        "investment falls because money supply crowds out capital",
        "the economy has no exchange-rate channel",
        "NX cannot respond to capital flows"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "multi-step",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "In a large open economy, r can move and international flows still matter.",
      "id": 250,
      "difficulty": "hard"
    },
    {
      "q": "Investment demand rises. Which result fits the model?",
      "options": [
        "the interest rate rises, partly crowding out other investment and affecting capital flows",
        "the interest rate is pinned at r* exactly as in a small open economy",
        "the economy has no exchange-rate channel",
        "NX cannot respond to capital flows"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "multi-step",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "In a large open economy, r can move and international flows still matter.",
      "id": 251,
      "difficulty": "hard"
    },
    {
      "q": "Exports are 420 and imports are 510. What is NX and the trade position?",
      "options": [
        "-90; deficit",
        "90; surplus",
        "930; trade surplus",
        "90; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 420 - 510 = -90.",
      "id": 252,
      "difficulty": "hard"
    },
    {
      "q": "Exports are 860 and imports are 710. What is NX and the trade position?",
      "options": [
        "150; surplus",
        "-150; deficit",
        "1570; trade surplus",
        "150; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 860 - 710 = 150.",
      "id": 253,
      "difficulty": "hard"
    },
    {
      "q": "Exports are 1250 and imports are 1390. What is NX and the trade position?",
      "options": [
        "-140; deficit",
        "140; surplus",
        "2640; trade surplus",
        "140; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 1250 - 1390 = -140.",
      "id": 254,
      "difficulty": "hard"
    },
    {
      "q": "Exports are 980 and imports are 980. What is NX and the trade position?",
      "options": [
        "0; balanced trade",
        "0; balanced trade",
        "1960; trade surplus",
        "0; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 980 - 980 = 0.",
      "id": 255,
      "difficulty": "hard"
    },
    {
      "q": "Exports are 1540 and imports are 1325. What is NX and the trade position?",
      "options": [
        "215; surplus",
        "-215; deficit",
        "2865; trade surplus",
        "215; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 1540 - 1325 = 215.",
      "id": 256,
      "difficulty": "hard"
    },
    {
      "q": "Exports are 675 and imports are 820. What is NX and the trade position?",
      "options": [
        "-145; deficit",
        "145; surplus",
        "1495; trade surplus",
        "145; balanced trade"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "NX = 675 - 820 = -145.",
      "id": 257,
      "difficulty": "hard"
    },
    {
      "q": "National saving is 900 and domestic investment is 760. What are net exports?",
      "options": [
        "140; surplus",
        "-140; the opposite sign",
        "1660; surplus",
        "140; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 900 - 760 = 140.",
      "id": 258,
      "difficulty": "hard"
    },
    {
      "q": "National saving is 900 and domestic investment is 1020. What are net exports?",
      "options": [
        "-120; deficit",
        "120; the opposite sign",
        "1920; surplus",
        "120; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 900 - 1020 = -120.",
      "id": 259,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. If the world interest rate is r_w1, domestic investment is closest to...",
      "options": [
        "I3",
        "I2",
        "I1",
        "saving minus investment is zero"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "A lower world interest rate raises investment along I(r).",
      "image": "loanablefunds.png",
      "id": 260,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. If the world interest rate is r_w3, domestic investment is closest to...",
      "options": [
        "I1",
        "I2",
        "I3",
        "saving minus investment is zero"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "A higher world interest rate lowers investment along I(r).",
      "image": "loanablefunds.png",
      "id": 261,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. Which saving line shows the lowest level of national saving?",
      "options": [
        "S1",
        "S2",
        "S3",
        "I(r)"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.2",
      "conceptCluster": "saving_shift_nx",
      "primarySkill": "saving_shift_nx",
      "repairSkill": "saving_shift_nx",
      "feedback": "The left-most vertical saving line is the lowest saving level.",
      "image": "loanablefunds_changes.png",
      "id": 262,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. Which saving line shows the highest level of national saving?",
      "options": [
        "S3",
        "S2",
        "S1",
        "I(r)"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.2",
      "conceptCluster": "saving_shift_nx",
      "primarySkill": "saving_shift_nx",
      "repairSkill": "saving_shift_nx",
      "feedback": "The right-most vertical saving line is the highest saving level.",
      "image": "loanablefunds_changes.png",
      "id": 263,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. Which investment curve represents stronger investment demand?",
      "options": [
        "I(r)3",
        "I(r)2",
        "I(r)1",
        "S1"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "The rightward investment-demand curve represents stronger investment demand.",
      "image": "loanablefunds_changes_investment.png",
      "id": 264,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. Moving from E to A means the real exchange rate...",
      "options": [
        "rises/appreciates",
        "falls/depreciates",
        "stays at R2",
        "becomes unrelated to NX"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "conceptCluster": "exchange_rate_adjustment",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "Point A is at R1, a higher real exchange rate than R2.",
      "image": "rer_changes.png",
      "id": 265,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. Moving from E to I means the real exchange rate...",
      "options": [
        "falls/depreciates",
        "rises/appreciates",
        "stays at R2",
        "forces NX to zero"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "conceptCluster": "exchange_rate_adjustment",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "Point I is at R3, a lower real exchange rate than R2.",
      "image": "rer_changes.png",
      "id": 266,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. A shift from NX(R)2 to NX(R)1 moves equilibrium from B to...",
      "options": [
        "A",
        "C",
        "NX",
        "R3"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "A rightward shift of NX demand raises the real exchange rate at fixed S - I.",
      "image": "tradepolicies.png",
      "id": 267,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. A shift from NX(R)2 to NX(R)3 moves equilibrium from B to...",
      "options": [
        "C",
        "A",
        "NX",
        "R1"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "A leftward shift of NX demand lowers the real exchange rate at fixed S - I.",
      "image": "tradepolicies.png",
      "id": 268,
      "difficulty": "hard"
    },
    {
      "q": "A foreign fiscal expansion raises r*. In a small open economy, what happens to domestic investment and NX?",
      "options": [
        "investment falls and net exports rise",
        "investment rises and net exports fall",
        "investment is unchanged and NX is unchanged",
        "net exports rise because imports are banned"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Higher r* lowers domestic investment; with saving fixed, S - I and NX rise.",
      "id": 269,
      "difficulty": "hard"
    },
    {
      "q": "A foreign fiscal contraction lowers r*. In a small open economy, what happens to domestic investment and NX?",
      "options": [
        "investment rises and net exports fall",
        "investment falls and net exports rise",
        "investment is unchanged and NX is unchanged",
        "net exports rise because exports are fixed"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Lower r* raises domestic investment; with saving fixed, S - I and NX fall.",
      "id": 270,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. Moving from E to C is most consistent with...",
      "options": [
        "an increase in S - I",
        "a tariff shifting NX(R) right",
        "a fall in S - I",
        "a monetary expansion"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "conceptCluster": "exchange_rate_adjustment",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "C lies on the rightward S - I line at R1.",
      "image": "rer_changes.png",
      "id": 271,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. Moving from E to G is most consistent with...",
      "options": [
        "a decrease in S - I",
        "a tariff shifting NX(R) left",
        "an increase in S - I",
        "a fixed exchange-rate defense"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "conceptCluster": "exchange_rate_adjustment",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "G lies on the leftward S - I line at R3.",
      "image": "rer_changes.png",
      "id": 272,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. Moving from B to A means...",
      "options": [
        "R rises while equilibrium NX remains pinned by S - I",
        "R falls while net exports rise permanently",
        "S - I shifts right",
        "LM* shifts left"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The NX curve shifts, but the vertical S - I condition still pins equilibrium NX.",
      "image": "tradepolicies.png",
      "id": 273,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. Moving from B to C means...",
      "options": [
        "R falls while equilibrium NX remains pinned by S - I",
        "R rises while net exports rise permanently",
        "S - I shifts left",
        "IS* shifts right"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The NX curve shifts left, and the real exchange rate adjusts downward at fixed S - I.",
      "image": "tradepolicies.png",
      "id": 274,
      "difficulty": "hard"
    },
    {
      "q": "Under floating rates, an increase in government purchases shifts IS* right. What prevents a large output gain?",
      "options": [
        "currency appreciation reduces NX",
        "currency depreciation raises NX",
        "the money supply must expand to defend a peg",
        "r* rises because fiscal policy changed"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "The floating exchange rate appreciates and crowds out net exports.",
      "id": 275,
      "difficulty": "hard"
    },
    {
      "q": "Under floating rates, an increase in the money supply shifts LM* right. What reinforces the output gain?",
      "options": [
        "currency depreciation raises NX",
        "currency appreciation reduces NX",
        "the peg forces money contraction",
        "government spending falls automatically"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Depreciation makes domestic goods cheaper and raises net exports.",
      "id": 276,
      "difficulty": "hard"
    },
    {
      "q": "A central bank tries to expand M while defending a fixed exchange rate. What happens next?",
      "options": [
        "reserve intervention reverses the monetary expansion",
        "IS* shifts right and output rises permanently",
        "the exchange rate floats freely",
        "NX becomes independent of e"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Defending the peg requires offsetting intervention.",
      "id": 277,
      "difficulty": "hard"
    },
    {
      "q": "Fiscal expansion under a fixed exchange rate tends to be powerful because...",
      "options": [
        "the central bank expands M to prevent appreciation",
        "the exchange rate appreciates and crowds out NX",
        "monetary policy is independent of the peg",
        "capital mobility shuts down"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.3",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "To defend the peg after fiscal expansion, the central bank expands the money supply.",
      "id": 278,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. If P rises, which Mundell-Fleming model aggregate demand chain is correct?",
      "options": [
        "M/P falls, LM* shifts left, e rises, net exports fall, and Y falls",
        "M/P rises, LM* shifts right, e falls, net exports rise, and Y rises",
        "IS* shifts right, e rises, and Y rises",
        "S - I shifts right and net exports rise"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Higher P lowers real balances and contracts demand through LM* and NX.",
      "image": "mundell_adas.png",
      "id": 279,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. If P falls, which Mundell-Fleming model aggregate demand chain is correct?",
      "options": [
        "M/P rises, LM* shifts right, e falls, net exports rise, and Y rises",
        "M/P falls, LM* shifts left, e rises, net exports fall, and Y falls",
        "IS* shifts left, e falls, and Y falls",
        "S - I shifts left and net exports fall"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Lower P raises real balances and expands demand through LM* and NX.",
      "image": "mundell_adas.png",
      "id": 280,
      "difficulty": "hard"
    },
    {
      "q": "Y=4,000, C=2,450, I=850, and G=650. What are net exports?",
      "options": [
        "50",
        "-50",
        "700",
        "3,950"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = 4,000 - 2,450 - 850 - 650 = 50.",
      "id": 281,
      "difficulty": "hard"
    },
    {
      "q": "Starting from Y = C + I + G + NX, what does Y > C + I + G imply?",
      "options": [
        "NX > 0 and output exceeds domestic absorption",
        "NX < 0 and domestic absorption exceeds output",
        "NX = 0 by definition",
        "NCO must be negative"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "multi-step",
      "objective": "LO6.1",
      "difficulty": "hard",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "If output exceeds domestic spending, the excess is net exports.",
      "id": 282
    },
    {
      "q": "ε=eP/P*. If e=1.4, P=120, and P*=100, what is ε?",
      "options": [
        "1.68",
        "1.40",
        "1.20",
        "168"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 1.4 × 120 / 100 = 1.68.",
      "id": 283,
      "difficulty": "hard"
    },
    {
      "q": "ε=eP/P*. If e=0.9, P=150, and P*=100, what is ε?",
      "options": [
        "1.35",
        "0.90",
        "1.50",
        "135"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 0.9 × 150 / 100 = 1.35.",
      "id": 284,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. A country keeps a fixed exchange rate and monetary independence. What must be limited?",
      "options": [
        "free capital mobility",
        "fiscal policy",
        "exports",
        "public saving"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "trap",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "To keep the peg and monetary independence, capital mobility cannot be free.",
      "image": "impossibletrinity.png",
      "id": 285,
      "difficulty": "hard"
    },
    {
      "q": "Refer to the image above. A country keeps a fixed exchange rate and free capital mobility. What must be surrendered?",
      "options": [
        "independent monetary policy",
        "fiscal policy",
        "imports",
        "private saving"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "trap",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The central bank must use monetary policy to maintain the peg.",
      "image": "impossibletrinity.png",
      "id": 286,
      "difficulty": "hard"
    },
    {
      "q": "Starting from S = I + NCO and NX = NCO, what does S > I imply?",
      "options": [
        "NCO > 0 and NX > 0",
        "NCO < 0 and NX < 0",
        "NX = 0 because saving is positive",
        "NCO is unrelated to NX"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "multi-step",
      "objective": "LO6.1",
      "difficulty": "hard",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "If S exceeds I, the excess saving flows abroad and equals positive NX.",
      "id": 287
    },
    {
      "q": "Starting from S = I + NCO and NX = NCO, what does S < I imply?",
      "options": [
        "NCO < 0 and NX < 0",
        "NCO > 0 and NX > 0",
        "NX = 0 because investment is positive",
        "NCO is unrelated to NX"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "multi-step",
      "objective": "LO6.1",
      "difficulty": "hard",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "If I exceeds S, the economy uses capital inflow and runs negative NX.",
      "id": 288
    },
    {
      "q": "Which statement confuses an identity with a policy result?",
      "options": [
        "S - I = NX is always true, but it does not say every tariff improves NX",
        "tariffs can shift NX demand",
        "saving minus investment is linked to net exports",
        "net exports equal net capital outflow"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "trap",
      "objective": "LO6.1",
      "difficulty": "hard",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Identities are accounting links; policy effects require the model mechanism.",
      "id": 289
    }
  ],
  "elite": [
    {
      "id": 300,
      "q": "Domestic saving falls while investment demand rises. What happens to S - I and NX?",
      "options": [
        "both shocks push S - I down, so net exports fall",
        "both shocks push S - I up, so net exports rise",
        "the shocks cancel by identity",
        "NX is unchanged because tariffs are absent"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "difficulty": "elite",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Lower saving and higher investment both reduce S - I."
    },
    {
      "id": 301,
      "q": "Domestic fiscal expansion under floating rates and a tariff both appreciate the exchange rate. What differs?",
      "options": [
        "fiscal expansion lowers NX through S - I, while tariff appreciation offsets the direct NX shift",
        "both permanently raise NX",
        "both shift LM* right",
        "neither affects the exchange rate"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "difficulty": "elite",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Same appreciation direction, different underlying curve shift."
    },
    {
      "id": 302,
      "q": "In Chapter 6, fiscal expansion lowers NX. In floating-rate Mundell-Fleming model, fiscal expansion leaves Y unchanged. What links the results?",
      "options": [
        "exchange-rate appreciation reduces net exports",
        "monetary contraction raises imports",
        "the world interest rate must fall",
        "investment demand disappears"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "elite",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "The exchange-rate channel is the connecting mechanism."
    },
    {
      "id": 303,
      "q": "Under floating rates, why can a tariff fail to raise output even though it shifts IS* right?",
      "options": [
        "appreciation offsets the NX increase and returns output to Y*",
        "LM* shifts right automatically",
        "r* collapses",
        "saving rises one-for-one"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "trap",
      "objective": "LO14.1",
      "difficulty": "elite",
      "conceptCluster": "trade_policy_under_floating",
      "primarySkill": "trade_policy_under_floating",
      "repairSkill": "trade_policy_under_floating",
      "feedback": "Trade policy is offset by exchange-rate adjustment under floating rates."
    },
    {
      "id": 304,
      "q": "Which policy combination most likely produces ambiguous net-export pressure in a small open economy?",
      "options": [
        "higher saving and higher investment demand",
        "lower saving and higher investment demand",
        "lower saving and lower exports from appreciation",
        "tariff plus real appreciation only"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "interaction",
      "objective": "LO6.5",
      "difficulty": "elite",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Higher saving raises S - I, while higher investment lowers it."
    },
    {
      "id": 305,
      "q": "A lower price level raises Y in open-economy aggregate demand. Which intermediate movement is essential?",
      "options": [
        "LM* shifts right and the exchange rate depreciates",
        "IS* shifts left and the exchange rate appreciates",
        "S - I shifts left",
        "the world interest rate rises"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "integration",
      "objective": "LO14.4",
      "difficulty": "elite",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "The aggregate demand derivation runs through real balances and depreciation."
    },
    {
      "id": 306,
      "q": "Refer to the image above. Moving from A to C in the aggregate demand derivation corresponds to...",
      "options": [
        "lower P, lower e, and higher Y",
        "higher P, higher e, and lower Y",
        "fixed P and a fiscal shock",
        "higher tariffs only"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "difficulty": "elite",
      "conceptCluster": "open_economy_ad_slope",
      "primarySkill": "open_economy_ad_slope",
      "repairSkill": "open_economy_ad_slope",
      "feedback": "Lower P raises real balances and moves the economy down/right along aggregate demand.",
      "image": "mundell_adas.png"
    },
    {
      "id": 307,
      "q": "Refer to the image above. A move from C back to B would require...",
      "options": [
        "LM* shifting left as monetary conditions tighten",
        "IS* shifting right",
        "NX(R) shifting right",
        "S - I shifting left"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "elite",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "C is the expansionary LM* position; moving back to B reverses it.",
      "image": "islm_er_change.png"
    },
    {
      "id": 308,
      "q": "Refer to the image above. Which policy shock most naturally moves from B to A?",
      "options": [
        "fiscal expansion or a rise in demand for domestic goods",
        "monetary expansion",
        "a fall in money demand",
        "capital controls under a peg"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "elite",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "IS* shifts right and the exchange rate appreciates.",
      "image": "islm_exchangerates.png"
    },
    {
      "id": 309,
      "q": "Refer to the image above. A shift from I(r)2 to I(r)3 at the same saving line implies...",
      "options": [
        "higher investment demand and lower net exports",
        "higher saving and higher net exports",
        "lower investment and higher net exports",
        "no trade-balance effect"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "elite",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "More investment demand lowers S - I.",
      "image": "loanablefunds_changes_investment.png"
    },
    {
      "id": 310,
      "q": "S = 1,250, I = 1,480. Then a fiscal consolidation raises saving by 150. What are the new net exports?",
      "options": [
        "-80",
        "-230",
        "80",
        "150"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "elite",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "Initial NX = -230. New saving = 1400, so NX = 1400 - 1480 = -80.",
      "hint": "Update saving before using S - I."
    },
    {
      "id": 311,
      "q": "Y = 3,000, C = 1,850, I = 725, G = 500. What is the trade balance?",
      "options": [
        "-75",
        "75",
        "425",
        "-425"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "elite",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = 3000 - 1850 - 725 - 500 = -75.",
      "hint": "NX = Y - C - I - G."
    },
    {
      "id": 312,
      "q": "ε = eP/P*. If e rises from 1.1 to 1.3 while P and P* are unchanged, the real exchange rate...",
      "options": [
        "appreciates",
        "depreciates",
        "is unchanged",
        "becomes NX"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "difficulty": "elite",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "With prices fixed, a higher e raises ε.",
      "hint": "Track the direction of ε."
    },
    {
      "id": 313,
      "q": "A central bank under fixed rates wants to stimulate output with monetary expansion. What blocks the plan?",
      "options": [
        "capital outflow and depreciation pressure force the bank to reverse the expansion",
        "fiscal policy must fall",
        "NX always rises enough",
        "LM* cannot move under any regime"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "policy_memo",
      "objective": "LO14.3",
      "difficulty": "elite",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "The peg eliminates independent monetary policy when capital is mobile."
    },
    {
      "id": 314,
      "q": "Why might policymakers prefer fixed rates despite losing monetary flexibility?",
      "options": [
        "exchange-rate stability can reduce uncertainty in trade and investment",
        "fixed rates guarantee full monetary independence",
        "fixed rates eliminate capital flows",
        "fixed rates make NX always positive"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "interpretation",
      "objective": "LO14.3",
      "difficulty": "elite",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "The argument for fixed rates emphasizes stability, not free monetary discretion."
    },
    {
      "id": 315,
      "q": "Why might policymakers prefer floating rates?",
      "options": [
        "monetary policy can respond to domestic conditions",
        "capital mobility disappears",
        "the exchange rate never moves",
        "trade deficits become impossible"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "interpretation",
      "objective": "LO14.3",
      "difficulty": "elite",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "Floating rates preserve monetary independence."
    },
    {
      "id": 316,
      "q": "Which trilemma package is internally consistent?",
      "options": [
        "free capital mobility + independent monetary policy + floating exchange rate",
        "free capital mobility + independent monetary policy + fixed exchange rate",
        "fixed rate + free mobility + monetary independence",
        "fixed rate + floating rate + no currency"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "trap",
      "objective": "LO14.3",
      "difficulty": "elite",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The consistent package gives up the peg."
    },
    {
      "id": 317,
      "q": "In a large open economy, a fiscal expansion affects both investment and NX because...",
      "options": [
        "the interest rate and exchange rate both adjust",
        "r is fixed at r* exactly",
        "NX is defined as imports minus exports",
        "capital cannot move internationally"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "elite",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "Large-open policy chains combine closed-economy interest-rate effects and open-economy capital-flow effects."
    },
    {
      "id": 318,
      "q": "Domestic saving rises while investment demand also rises. Why is the effect on net exports ambiguous?",
      "options": [
        "saving raises S - I, but higher investment lowers S - I",
        "both shocks raise S - I",
        "both shocks lower S - I",
        "neither shock affects S - I"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "difficulty": "elite",
      "conceptCluster": "ambiguous_policy_mix",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "The shocks push S - I in opposite directions, so the net-export effect depends on magnitudes."
    },
    {
      "id": 319,
      "q": "A fiscal expansion and a tariff both appreciate the real exchange rate. Which final variable separates the two stories?",
      "options": [
        "fiscal expansion lowers S - I and net exports; the tariff leaves S - I unchanged",
        "both policies raise S - I and net exports",
        "the tariff lowers saving while fiscal policy shifts NX(R)",
        "neither policy affects the real exchange rate"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "trap",
      "objective": "LO6.5",
      "difficulty": "elite",
      "conceptCluster": "fiscal_vs_tariff",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The same exchange-rate direction can hide different mechanisms."
    },
    {
      "id": 320,
      "q": "Chapter 6 and the floating-rate Mundell-Fleming model both say fiscal expansion appreciates the currency. What differs?",
      "options": [
        "Chapter 6 emphasizes lower net exports; the Mundell-Fleming model emphasizes the offset to output",
        "Chapter 6 says output rises; the Mundell-Fleming model says saving rises",
        "both models say fiscal policy shifts LM* right",
        "both models ignore net exports"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "elite",
      "conceptCluster": "chapter6_vs_mf",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "The shared appreciation result appears in different model frames."
    },
    {
      "id": 321,
      "q": "Under floating rates, a tariff shifts IS* right. Why does that not automatically raise output?",
      "options": [
        "currency appreciation offsets the initial net-export increase",
        "the central bank fixes the exchange rate by law",
        "the price level falls and shifts LM* left immediately",
        "investment demand must rise by the same amount"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "trap",
      "objective": "LO14.3",
      "difficulty": "elite",
      "conceptCluster": "tariff_floating_offset",
      "primarySkill": "floating_trade_policy_offset",
      "repairSkill": "floating_trade_policy_offset",
      "feedback": "Floating-rate appreciation crowds out the tariff’s direct net-export push."
    },
    {
      "id": 322,
      "q": "Which combination creates the clearest fall in net exports in a small open economy?",
      "options": [
        "lower saving plus higher investment demand",
        "higher saving plus lower investment demand",
        "higher saving plus a tariff with S - I fixed",
        "lower investment demand plus fiscal consolidation"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "elite",
      "conceptCluster": "policy_combination",
      "primarySkill": "open_economy_policy_effects",
      "repairSkill": "open_economy_policy_effects",
      "feedback": "Lower saving and higher investment both reduce S - I."
    },
    {
      "id": 323,
      "q": "A lower price level raises output in the open-economy aggregate demand derivation. Which intermediate step is essential?",
      "options": [
        "real money balances rise and LM* shifts right",
        "government spending rises and IS* shifts right",
        "the world interest rate rises and investment falls",
        "the fixed exchange rate becomes floating"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "difficulty": "elite",
      "conceptCluster": "ad_intermediate_step",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "The aggregate demand derivation starts with M/P."
    },
    {
      "id": 324,
      "q": "Refer to the image above. A move from C back toward B is most consistent with...",
      "options": [
        "a higher price level reducing real money balances and shifting LM* left",
        "a lower price level raising real money balances and shifting LM* right",
        "a tariff shifting NX(R) right",
        "higher saving shifting S - I right"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "difficulty": "elite",
      "conceptCluster": "ad_reverse_movement",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Moving back toward B requires a higher P, lower M/P, and a leftward LM* shift.",
      "image": "mundell_adas.png"
    },
    {
      "id": 325,
      "q": "Refer to the image above. If the economy moves from B to C in the left panel, the right-panel implication is...",
      "options": [
        "lower P and higher Y along aggregate demand",
        "higher P and lower Y along aggregate demand",
        "a rightward LRAS shift",
        "a movement to balanced trade"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "difficulty": "elite",
      "conceptCluster": "ad_mapping",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "B to C in the left panel maps lower P to higher Y on aggregate demand.",
      "image": "mundell_adas.png"
    },
    {
      "id": 326,
      "q": "Refer to the image above. A movement from B to A under floating rates is most naturally caused by...",
      "options": [
        "fiscal expansion or a trade-policy IS* shift",
        "monetary expansion shifting LM* right",
        "a fall in the price level shifting LM* right",
        "a decrease in money demand"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "elite",
      "conceptCluster": "is_shift_graph",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "B to A is an IS* shift under floating rates.",
      "image": "islm_exchangerates.png"
    },
    {
      "id": 327,
      "q": "Refer to the image above. A movement from B to C under floating rates is most naturally caused by...",
      "options": [
        "monetary expansion shifting LM* right",
        "fiscal expansion shifting IS* right",
        "a tariff shifting IS* right",
        "higher saving in the Chapter 6 graph"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "elite",
      "conceptCluster": "lm_shift_graph",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "B to C is an LM* shift to the right.",
      "image": "islm_er_change.png"
    },
    {
      "id": 328,
      "q": "S = 1,400 and I = 1,650. A policy raises saving by 200 and investment demand raises investment by 75. What are the new net exports?",
      "options": [
        "-125",
        "-250",
        "25",
        "-525"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "elite",
      "conceptCluster": "combined_s_i_calculation",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "New S is 1,600 and new I is 1,725. NX = -125."
    },
    {
      "id": 329,
      "q": "Y = 4,200, C = 2,600, I = 950, and G = 775. What is the trade balance?",
      "options": [
        "-125",
        "125",
        "875",
        "3,425"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "elite",
      "conceptCluster": "income_identity_calculation",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = 4,200 - 2,600 - 950 - 775 = -125."
    },
    {
      "id": 330,
      "q": "The real exchange rate formula is ε = eP/P*. If e falls while P and P* are unchanged, what happens?",
      "options": [
        "the real exchange rate falls and net exports tend to rise",
        "the real exchange rate rises and net exports tend to fall",
        "the real exchange rate is unchanged because prices are unchanged",
        "net exports become equal to the money supply"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "difficulty": "elite",
      "conceptCluster": "real_exchange_rate_direction",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "With prices fixed, ε moves with e."
    },
    {
      "id": 331,
      "q": "A central bank under fixed rates tries to expand money while the currency faces depreciation pressure. What undoes the policy?",
      "options": [
        "defending the peg forces the bank to buy domestic currency and contract the money supply",
        "defending the peg forces the bank to shift IS* right",
        "capital mobility makes the fiscal multiplier zero",
        "net exports must be zero under fixed rates"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "multi-step",
      "objective": "LO14.3",
      "difficulty": "elite",
      "conceptCluster": "fixed_monetary_offset",
      "primarySkill": "fixed_exchange_rate_policy",
      "repairSkill": "fixed_exchange_rate_policy",
      "feedback": "The peg forces monetary policy to accommodate exchange-rate defense."
    },
    {
      "q": "Domestic saving falls while investment demand rises. What is the cleanest conclusion?",
      "options": [
        "both forces lower S - I, so net exports fall strongly",
        "both forces raise S - I, so net exports rise strongly",
        "the world interest rate must change because the economy is small",
        "the trade balance is unrelated to saving and investment"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Compare the direction of saving and investment before judging S - I.",
      "id": 332,
      "difficulty": "elite"
    },
    {
      "q": "Domestic saving rises while investment demand falls. What is the cleanest conclusion?",
      "options": [
        "both forces raise S - I, so net exports rise strongly",
        "both forces lower S - I, so net exports fall strongly",
        "the world interest rate must change because the economy is small",
        "the trade balance is unrelated to saving and investment"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Compare the direction of saving and investment before judging S - I.",
      "id": 333,
      "difficulty": "elite"
    },
    {
      "q": "Domestic saving rises while investment demand rises. What is the cleanest conclusion?",
      "options": [
        "the effect on S - I is ambiguous without magnitudes",
        "NX must rise because saving changed",
        "the world interest rate must change because the economy is small",
        "the trade balance is unrelated to saving and investment"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Compare the direction of saving and investment before judging S - I.",
      "id": 334,
      "difficulty": "elite"
    },
    {
      "q": "Domestic saving falls while investment demand falls. What is the cleanest conclusion?",
      "options": [
        "the effect on S - I is ambiguous without magnitudes",
        "NX must fall because saving changed",
        "the world interest rate must change because the economy is small",
        "the trade balance is unrelated to saving and investment"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Compare the direction of saving and investment before judging S - I.",
      "id": 335,
      "difficulty": "elite"
    },
    {
      "q": "In Chapter 6, a tariff appreciates the real exchange rate. In floating-rate Mundell-Fleming model, a tariff also appreciates the exchange rate. What is the shared lesson?",
      "options": [
        "exchange-rate adjustment offsets the direct trade-policy effect",
        "tariffs always raise output permanently",
        "tariffs lower the world interest rate",
        "saving automatically rises after trade restrictions"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Trade restrictions trigger exchange-rate adjustment that offsets the direct NX effect.",
      "id": 336,
      "difficulty": "elite"
    },
    {
      "q": "Why does floating-rate fiscal policy fail to raise income strongly in Mundell-Fleming model?",
      "options": [
        "currency appreciation crowds out net exports",
        "money supply rises automatically",
        "the peg forces monetary expansion",
        "investment demand becomes vertical"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "integration",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "The exchange-rate channel offsets the fiscal demand shock.",
      "id": 337,
      "difficulty": "elite"
    },
    {
      "q": "Why is monetary policy powerful under floating rates?",
      "options": [
        "depreciation reinforces the initial LM* expansion through higher net exports",
        "appreciation reinforces the initial LM* expansion through lower net exports",
        "the central bank fixes e and M independently",
        "fiscal policy automatically contracts"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "integration",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Floating rates allow the exchange rate to move, so monetary policy works through NX.",
      "id": 338,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. Moving from A to C in the left panel corresponds to what in the right panel?",
      "options": [
        "moving down the aggregate demand curve as P falls and Y rises",
        "a shift of LRAS to the left",
        "a tariff shifting NX right",
        "a fixed-rate reserve intervention"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "The left panel explains points along the open-economy aggregate demand curve.",
      "image": "mundell_adas.png",
      "id": 339,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. Moving from B to C is most consistent with...",
      "options": [
        "expansionary monetary policy under floating rates",
        "expansionary fiscal policy under floating rates",
        "a fixed exchange rate peg with no money change",
        "a tariff under Chapter 6"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "A move to the right on LM* lowers e and raises Y.",
      "image": "islm_er_change.png",
      "id": 340,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. Moving from B to A is most consistent with...",
      "options": [
        "a rightward IS* shock under floating rates",
        "a monetary expansion under floating rates",
        "a fall in the price level shifting LM* right",
        "capital flight in the large open model"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "A rightward IS* shock raises e with Y pinned at Y*.",
      "image": "islm_exchangerates.png",
      "id": 341,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. Why does moving from B to A not prove net exports rise?",
      "options": [
        "the vertical S - I line fixes equilibrium NX while R adjusts",
        "the NX curve is irrelevant to trade policy",
        "saving always rises after a tariff",
        "the exchange rate cannot move in this graph"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The equilibrium remains on the same S - I line; the real exchange rate absorbs the shift.",
      "image": "tradepolicies.png",
      "id": 342,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. Moving from E to C is best read as...",
      "options": [
        "higher S - I and a higher real exchange rate",
        "lower S - I and a lower real exchange rate",
        "a tariff shifting NX(R)",
        "a money-demand shock shifting LM*"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "graph",
      "objective": "LO6.4",
      "conceptCluster": "exchange_rate_adjustment",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "Point C is on the right-most S - I line and the high R line.",
      "image": "rer_changes.png",
      "id": 343,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. Moving from D to E is best read as...",
      "options": [
        "higher investment demand at the same world interest rate",
        "lower saving at the same world interest rate",
        "a fall in the world interest rate",
        "a tariff shifting NX demand"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "graph",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "The investment-demand curve shifts right at the same r_w2.",
      "image": "loanablefunds_changes_investment.png",
      "id": 344,
      "difficulty": "elite"
    },
    {
      "q": "A nation wants to stabilize its currency and allow free capital flows during a recession. What policy limitation follows?",
      "options": [
        "monetary policy must defend the peg rather than independently stabilize output",
        "fiscal policy becomes illegal",
        "exports must equal imports every period",
        "the country must abandon all capital flows"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "integration",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The peg plus capital mobility sacrifices monetary independence.",
      "id": 345,
      "difficulty": "elite"
    },
    {
      "q": "National saving is 1450 and domestic investment is 1450. What are net exports?",
      "options": [
        "0; balanced trade",
        "0; the opposite sign",
        "2900; surplus",
        "0; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1450 - 1450 = 0.",
      "id": 346,
      "difficulty": "elite"
    },
    {
      "q": "National saving is 1700 and domestic investment is 1325. What are net exports?",
      "options": [
        "375; surplus",
        "-375; the opposite sign",
        "3025; surplus",
        "375; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1700 - 1325 = 375.",
      "id": 347,
      "difficulty": "elite"
    },
    {
      "q": "National saving is 1325 and domestic investment is 1700. What are net exports?",
      "options": [
        "-375; deficit",
        "375; the opposite sign",
        "3025; surplus",
        "375; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1325 - 1700 = -375.",
      "id": 348,
      "difficulty": "elite"
    },
    {
      "q": "National saving is 2100 and domestic investment is 1850. What are net exports?",
      "options": [
        "250; surplus",
        "-250; the opposite sign",
        "3950; surplus",
        "250; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 2100 - 1850 = 250.",
      "id": 349,
      "difficulty": "elite"
    },
    {
      "q": "Y=3000, C=1800, I=700, and G=650. What are net exports?",
      "options": [
        "-150; deficit",
        "150; wrong sign",
        "1200; missing I and G",
        "3150; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -150.",
      "id": 350,
      "difficulty": "elite"
    },
    {
      "q": "Y=4200, C=2600, I=900, and G=800. What are net exports?",
      "options": [
        "-100; deficit",
        "100; wrong sign",
        "1600; missing I and G",
        "4300; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -100.",
      "id": 351,
      "difficulty": "elite"
    },
    {
      "q": "Y=2500, C=1600, I=500, and G=450. What are net exports?",
      "options": [
        "-50; deficit",
        "50; wrong sign",
        "900; missing I and G",
        "2550; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -50.",
      "id": 352,
      "difficulty": "elite"
    },
    {
      "q": "Y=5200, C=3300, I=1100, and G=900. What are net exports?",
      "options": [
        "-100; deficit",
        "100; wrong sign",
        "1900; missing I and G",
        "5300; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -100.",
      "id": 353,
      "difficulty": "elite"
    },
    {
      "q": "Y=3800, C=2300, I=850, and G=750. What are net exports?",
      "options": [
        "-100; deficit",
        "100; wrong sign",
        "1500; missing I and G",
        "3900; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -100.",
      "id": 354,
      "difficulty": "elite"
    },
    {
      "q": "Using ε = eP/P*, if e=1.2, P=100, and P*=120, what is ε?",
      "options": [
        "1",
        "1.2",
        "0.83",
        "120"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 1.2 × 100 / 120 = 1.",
      "id": 355,
      "difficulty": "elite"
    },
    {
      "q": "A policy memo says: domestic fiscal expansion lowers national saving. Which complete open-economy chain is correct?",
      "options": [
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 356,
      "difficulty": "elite"
    },
    {
      "q": "A policy memo says: domestic fiscal contraction raises national saving. Which complete open-economy chain is correct?",
      "options": [
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 357,
      "difficulty": "elite"
    },
    {
      "q": "A policy memo says: investment demand rises while saving is unchanged. Which complete open-economy chain is correct?",
      "options": [
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 358,
      "difficulty": "elite"
    },
    {
      "q": "A policy memo says: investment demand falls while saving is unchanged. Which complete open-economy chain is correct?",
      "options": [
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 359,
      "difficulty": "elite"
    },
    {
      "q": "A policy memo says: foreign fiscal expansion raises the world interest rate. Which complete open-economy chain is correct?",
      "options": [
        "domestic investment falls, S - I rises, and net exports rise",
        "domestic investment rises, S - I falls, and net exports fall",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 360,
      "difficulty": "elite"
    },
    {
      "q": "A policy memo says: foreign fiscal contraction lowers the world interest rate. Which complete open-economy chain is correct?",
      "options": [
        "domestic investment rises, S - I falls, and net exports fall",
        "domestic investment falls, S - I rises, and net exports rise",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 361,
      "difficulty": "elite"
    },
    {
      "q": "In Mundell-Fleming model with floating exchange rates, expansionary fiscal policy, which chain is correct?",
      "options": [
        "IS* shifts right, the exchange rate appreciates, net exports fall, and Y is offset",
        "LM* shifts right, the exchange rate depreciates, net exports rise, and Y rises",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "integration",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 362,
      "difficulty": "elite"
    },
    {
      "q": "In Mundell-Fleming model with floating exchange rates, contractionary fiscal policy, which chain is correct?",
      "options": [
        "IS* shifts left, the exchange rate depreciates, net exports rise, and Y is offset",
        "LM* shifts left, the exchange rate appreciates, net exports fall, and Y falls strongly",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "integration",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 363,
      "difficulty": "elite"
    },
    {
      "q": "In Mundell-Fleming model with floating exchange rates, expansionary monetary policy, which chain is correct?",
      "options": [
        "LM* shifts right, the exchange rate depreciates, net exports rise, and Y rises",
        "IS* shifts right, the exchange rate appreciates, net exports fall, and Y is unchanged",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "integration",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 364,
      "difficulty": "elite"
    },
    {
      "q": "In Mundell-Fleming model with floating exchange rates, contractionary monetary policy, which chain is correct?",
      "options": [
        "LM* shifts left, the exchange rate appreciates, net exports fall, and Y falls",
        "IS* shifts left, the exchange rate depreciates, net exports rise, and Y is unchanged",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "integration",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 365,
      "difficulty": "elite"
    },
    {
      "q": "In Mundell-Fleming model with fixed exchange rates, expansionary fiscal policy, which chain is correct?",
      "options": [
        "IS* shifts right and the central bank expands M to defend the peg, amplifying Y",
        "IS* shifts right but appreciation fully crowds out NX as under floating rates",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "integration",
      "objective": "LO14.3",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 366,
      "difficulty": "elite"
    },
    {
      "q": "In Mundell-Fleming model with fixed exchange rates, expansionary monetary policy, which chain is correct?",
      "options": [
        "pressure for depreciation forces reversal if the peg is defended, so the policy loses independence",
        "LM* remains right because fixed exchange rates strengthen monetary autonomy",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "integration",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 367,
      "difficulty": "elite"
    },
    {
      "q": "In Mundell-Fleming model with fixed exchange rates, contractionary monetary policy, which chain is correct?",
      "options": [
        "pressure for appreciation forces reversal if the peg is defended, so the policy loses independence",
        "LM* remains left because fixed exchange rates strengthen monetary autonomy",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "integration",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 368,
      "difficulty": "elite"
    },
    {
      "q": "In Mundell-Fleming model with floating exchange rates, an import quota, which chain is correct?",
      "options": [
        "IS* shifts right at first, but appreciation offsets the output effect",
        "LM* shifts right and output rises permanently",
        "r* changes because the country is small",
        "NX is fixed by accounting identity alone"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "integration",
      "objective": "LO14.1",
      "conceptCluster": "trade_policy_under_floating",
      "primarySkill": "trade_policy_under_floating",
      "repairSkill": "trade_policy_under_floating",
      "feedback": "Use the exchange-rate regime to decide whether the exchange rate or money supply adjusts.",
      "id": 369,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. In the small-open-economy aggregate demand derivation, the price level falls. What is the full chain?",
      "options": [
        "M/P rises, LM* shifts right, e falls/depreciates, net exports rise, and Y rises",
        "M/P moves the opposite way, so Y moves the opposite way",
        "IS* shifts because P changes government spending",
        "the world interest rate adjusts first"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "integration",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Price changes real money balances, which moves LM* and then the exchange-rate/net-export channel.",
      "image": "mundell_adas.png",
      "id": 370,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. In the small-open-economy aggregate demand derivation, the price level rises. What is the full chain?",
      "options": [
        "M/P falls, LM* shifts left, e rises/appreciates, net exports fall, and Y falls",
        "M/P moves the opposite way, so Y moves the opposite way",
        "IS* shifts because P changes government spending",
        "the world interest rate adjusts first"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "integration",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Price changes real money balances, which moves LM* and then the exchange-rate/net-export channel.",
      "image": "mundell_adas.png",
      "id": 371,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. A country insists on fixed exchange rate and free capital mobility. According to the impossible trinity, what must it give up?",
      "options": [
        "independent monetary policy",
        "exports",
        "fiscal policy",
        "national saving"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "integration",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The trilemma permits two goals, not all three.",
      "image": "impossibletrinity.png",
      "id": 372,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. A country insists on independent monetary policy and free capital mobility. According to the impossible trinity, what must it give up?",
      "options": [
        "a fixed exchange rate",
        "exports",
        "fiscal policy",
        "national saving"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "integration",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The trilemma permits two goals, not all three.",
      "image": "impossibletrinity.png",
      "id": 373,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. A country insists on fixed exchange rate and independent monetary policy. According to the impossible trinity, what must it give up?",
      "options": [
        "free capital mobility",
        "exports",
        "fiscal policy",
        "national saving"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "integration",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The trilemma permits two goals, not all three.",
      "image": "impossibletrinity.png",
      "id": 374,
      "difficulty": "elite"
    },
    {
      "q": "fiscal expansion raises the domestic interest rate. Which result fits the model?",
      "options": [
        "investment falls and capital-flow/exchange-rate pressure reduces NX",
        "investment rises because all fiscal expansions increase private investment",
        "the economy has no exchange-rate channel",
        "NX cannot respond to capital flows"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "integration",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "In a large open economy, r can move and international flows still matter.",
      "id": 375,
      "difficulty": "elite"
    },
    {
      "q": "monetary expansion lowers the interest rate. Which result fits the model?",
      "options": [
        "investment rises and capital-flow/exchange-rate pressure affects NX",
        "investment falls because money supply crowds out capital",
        "the economy has no exchange-rate channel",
        "NX cannot respond to capital flows"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "integration",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "In a large open economy, r can move and international flows still matter.",
      "id": 376,
      "difficulty": "elite"
    },
    {
      "q": "A tax cut lowers saving while a business tax credit raises investment demand. What happens to NX?",
      "options": [
        "net exports fall through both channels",
        "net exports rise through both channels",
        "the effect is ambiguous because the channels offset",
        "NX is fixed by trade policy"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Lower saving and higher investment both lower S - I.",
      "id": 377,
      "difficulty": "elite"
    },
    {
      "q": "A tax increase raises saving while investment pessimism lowers investment demand. What happens to NX?",
      "options": [
        "net exports rise through both channels",
        "net exports fall through both channels",
        "the effect is ambiguous because the channels offset",
        "NX is fixed by the exchange regime"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Higher saving and lower investment both raise S - I.",
      "id": 378,
      "difficulty": "elite"
    },
    {
      "q": "A tax increase raises saving while investment optimism raises investment demand. What is the honest answer for NX?",
      "options": [
        "ambiguous without magnitudes",
        "NX must rise",
        "NX must fall",
        "NX cannot move"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "One force raises S - I while the other lowers it.",
      "id": 379,
      "difficulty": "elite"
    },
    {
      "q": "A tax cut lowers saving while investment pessimism lowers investment demand. What is the honest answer for NX?",
      "options": [
        "ambiguous without magnitudes",
        "NX must rise",
        "NX must fall",
        "NX cannot move"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "One force lowers S - I while the other raises it.",
      "id": 380,
      "difficulty": "elite"
    },
    {
      "q": "Fiscal expansion under floating rates versus fixed rates differs because...",
      "options": [
        "floating rates adjust e; fixed rates require money-supply intervention",
        "floating rates require money-supply intervention; fixed rates adjust e freely",
        "both regimes produce identical exchange-rate movements",
        "neither regime affects NX"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "integration",
      "objective": "LO14.3",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "Regime choice determines whether e or M absorbs the pressure.",
      "id": 381,
      "difficulty": "elite"
    },
    {
      "q": "Monetary expansion under floating rates versus fixed rates differs because...",
      "options": [
        "floating rates allow depreciation; fixed rates force reversal to defend the peg",
        "floating rates force reversal; fixed rates allow depreciation",
        "both regimes make money neutral immediately",
        "neither affects output"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "integration",
      "objective": "LO14.3",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "Monetary autonomy depends on the exchange-rate regime.",
      "id": 382,
      "difficulty": "elite"
    },
    {
      "q": "Why is the open-economy aggregate demand curve downward sloping in Mundell-Fleming model?",
      "options": [
        "lower P raises M/P, shifts LM* right, depreciates e, and raises NX",
        "lower P shifts IS* left and lowers imports",
        "higher P raises M/P and raises output",
        "r* moves down whenever P falls"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "integration",
      "objective": "LO14.4",
      "conceptCluster": "open_economy_ad_slope",
      "primarySkill": "open_economy_ad_slope",
      "repairSkill": "open_economy_ad_slope",
      "feedback": "The price level affects real balances, which triggers the exchange-rate and net-export channel.",
      "id": 383,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. Why does point B sit on LRAS?",
      "options": [
        "Y2 is the long-run output level",
        "P2 is always the highest price",
        "B is a tariff equilibrium",
        "LM* cannot move through B"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "LRAS marks the long-run output level, shown at Y2.",
      "image": "mundell_adas.png",
      "id": 384,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. Why does a movement from A to B require IS* to shift left?",
      "options": [
        "B is back on the middle IS* position at Y*",
        "B requires LM* to shift right",
        "B is a lower price-level point on aggregate demand",
        "B is outside the model"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "graph",
      "objective": "LO14.1",
      "conceptCluster": "is_star_exchange_rate",
      "primarySkill": "is_star_exchange_rate",
      "repairSkill": "is_star_exchange_rate",
      "feedback": "A to B reverses the rightward IS* movement.",
      "image": "islm_exchangerates.png",
      "id": 385,
      "difficulty": "elite"
    },
    {
      "q": "Refer to the image above. Why does a movement from C to B require LM* to shift left?",
      "options": [
        "B is back on the middle LM* position",
        "B requires IS* to shift right",
        "B is a tariff equilibrium",
        "B changes S - I"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "graph",
      "objective": "LO14.1",
      "conceptCluster": "lm_star_money_market",
      "primarySkill": "lm_star_money_market",
      "repairSkill": "lm_star_money_market",
      "feedback": "C to B reverses the rightward LM* movement.",
      "image": "islm_er_change.png",
      "id": 386,
      "difficulty": "elite"
    },
    {
      "q": "Why can Chapter 6 policy questions often start with S - I even when the final answer asks about NX?",
      "options": [
        "because S - I = NX pins the trade balance in the small-open long-run model",
        "because NX is unrelated to saving",
        "because investment is always fixed at zero",
        "because the exchange rate is fixed by fiscal law"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "integration",
      "objective": "LO6.1",
      "difficulty": "elite",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "The identity tells you that changes in S - I map into NX.",
      "id": 387
    },
    {
      "q": "Why does NX = NCO matter before discussing exchange-rate adjustment?",
      "options": [
        "it connects the goods-market balance to international financial flows",
        "it replaces the need for a real exchange rate",
        "it means exports and imports are always equal",
        "it makes fiscal policy irrelevant"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "integration",
      "objective": "LO6.1",
      "difficulty": "elite",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "The exchange-rate story clears the goods-market outcome implied by capital flows.",
      "id": 388
    },
    {
      "q": "Which answer correctly separates identity from mechanism?",
      "options": [
        "S - I = NX is the accounting link; exchange-rate adjustment explains how the goods market reaches it",
        "S - I = NX means tariffs always raise NX",
        "NX = NCO means exchange rates cannot move",
        "Y = C + I + G + NX means saving is irrelevant"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "integration",
      "objective": "LO6.1",
      "difficulty": "elite",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "The identity tells what must hold; the model explains adjustment.",
      "id": 389
    }
  ],
  "legendary": [
    {
      "id": 9000,
      "q": "Same fiscal expansion, two regimes. Under floating rates output is muted; under fixed rates output is amplified. Why?",
      "options": [
        "floating appreciation crowds out NX, while fixed-rate defense expands money supply",
        "floating rates require reserve defense, while fixed rates do not",
        "both regimes produce identical LM* shifts",
        "tariffs determine the entire result"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "difficulty": "legendary",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "The exchange-rate regime determines whether the central bank offsets or reinforces the shock."
    },
    {
      "id": 9001,
      "q": "A tariff under Chapter 6 and under floating-rate Mundell-Fleming model shares what final lesson?",
      "options": [
        "exchange-rate appreciation offsets much of the direct trade effect",
        "tariffs permanently raise NX and output",
        "tariffs shift LM* right",
        "tariffs lower r* in a small economy"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "legendary_trap",
      "objective": "LO6.5",
      "difficulty": "legendary",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The exchange rate does the dirty work in both versions."
    },
    {
      "id": 9002,
      "q": "A country wants to stimulate output but also keep a fixed exchange rate and free capital mobility. Which tool is more plausible?",
      "options": [
        "fiscal expansion, because monetary expansion is blocked by the peg",
        "monetary expansion, because pegs make it stronger",
        "tariffs, because they shift LM*",
        "capital flight, because it raises welfare"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "policy_memo",
      "objective": "LO14.3",
      "difficulty": "legendary",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "Under fixed rates, fiscal policy is effective; monetary independence is sacrificed."
    },
    {
      "id": 9003,
      "q": "A fall in money demand under floating rates is most similar to which policy?",
      "options": [
        "monetary expansion",
        "fiscal expansion",
        "tariff restriction",
        "foreign fiscal contraction"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "legendary",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Lower money demand shifts LM* right, like a monetary expansion."
    },
    {
      "id": 9004,
      "q": "If students say 'depreciation always means stronger economy,' which counterexample should you use?",
      "options": [
        "capital flight can depreciate the currency while signaling crisis",
        "tariffs always depreciate the currency",
        "saving always disappears",
        "fixed rates always float"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "trap",
      "objective": "LO6.5",
      "difficulty": "legendary",
      "conceptCluster": "capital_flight_exchange_rate",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "Exchange-rate direction alone is not a welfare judgment."
    },
    {
      "id": 9005,
      "q": "A domestic fiscal expansion lowers saving while a foreign fiscal contraction lowers r*. What is ambiguous?",
      "options": [
        "the net effect on domestic investment and NX can pull in opposite directions",
        "both shocks necessarily lower net exports",
        "both shocks necessarily raise NX",
        "neither shock affects S - I"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "interaction",
      "objective": "LO6.5",
      "difficulty": "legendary",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Domestic saving falls lowers NX; lower r* raises investment and can also lower net exports, depending framing, but channels must be separated."
    },
    {
      "id": 9006,
      "q": "Refer to the image above. Which movement best represents higher saving rather than a tariff?",
      "options": [
        "E to I",
        "B to A",
        "E to A",
        "A to C on the same S - I line"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "legendary",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Higher saving shifts S - I right, moving from E to I.",
      "image": "rer_changes.png"
    },
    {
      "id": 9007,
      "q": "Refer to the image above. Why is B to A not a saving shock?",
      "options": [
        "the NX(R) curve shifts while S - I stays fixed",
        "S - I shifts right",
        "LM* shifts right",
        "investment demand falls"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "legendary",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "A trade policy shifts the NX curve, not the S - I line.",
      "image": "tradepolicies.png"
    },
    {
      "id": 9008,
      "q": "Refer to the image above. The left panel explains the right-panel aggregate demand curve because...",
      "options": [
        "different price levels shift LM* and produce different Y values",
        "different tariffs shift LRAS",
        "r* is shown changing directly",
        "government spending is on the vertical axis"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "difficulty": "legendary",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Changing P changes M/P, LM*, e, NX, and Y.",
      "image": "mundell_adas.png"
    },
    {
      "id": 9009,
      "q": "Refer to the image above. Choosing side 3 means choosing...",
      "options": [
        "fixed exchange rate and free capital mobility, giving up monetary independence",
        "monetary independence and free capital mobility",
        "fixed rate and monetary independence",
        "all three corners"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "graph",
      "objective": "LO14.3",
      "difficulty": "legendary",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Side 3 connects fixed exchange rate and free capital mobility.",
      "image": "impossibletrinity.png"
    },
    {
      "id": 9010,
      "q": "Y = 4,500, C = 2,800, I = 1,050, G = 900. Which statement is correct?",
      "options": [
        "NX = -250, so there is a trade deficit",
        "NX = 250, so there is a trade surplus",
        "NX = 650, so trade is balanced",
        "NX = -650, so saving exceeds investment"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "legendary",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = 4500 - 2800 - 1050 - 900 = -250."
    },
    {
      "id": 9011,
      "q": "S = 1,600 and I = 1,350. Then investment demand rises by 300 with saving unchanged. New NX is...",
      "options": [
        "-50",
        "250",
        "550",
        "300"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "legendary",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "New I = 1650, so NX = 1600 - 1650 = -50."
    },
    {
      "id": 9012,
      "q": "e = 0.8, P = 150, and P* = 100. If e rises to 1.0 with prices fixed, ε changes from...",
      "options": [
        "1.2 to 1.5",
        "1.5 to 1.2",
        "0.53 to 0.67",
        "120 to 150"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "difficulty": "legendary",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε1 = 0.8×150/100 = 1.2; ε2 = 1.0×150/100 = 1.5."
    },
    {
      "id": 9013,
      "q": "Why does the small-open-economy assumption matter for fiscal-policy questions?",
      "options": [
        "it keeps r fixed at r*, forcing adjustment through capital flows and exchange rates",
        "it eliminates saving",
        "it makes NX unrelated to policy",
        "it makes imports equal zero"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "integration",
      "objective": "LO6.3",
      "difficulty": "legendary",
      "conceptCluster": "small_open_assumption",
      "primarySkill": "small_open_assumption",
      "repairSkill": "small_open_assumption",
      "feedback": "The interest rate does not do the adjusting in the small-open model."
    },
    {
      "id": 9014,
      "q": "Why does the large-open-economy result sit between closed and small-open logic?",
      "options": [
        "both the interest rate and international capital flows adjust",
        "neither the interest rate nor NX adjusts",
        "r is fixed exactly at r*",
        "the exchange rate channel is ignored even though the model uses it"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "legendary",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "Large open economies have partial interest-rate effects and partial capital-flow effects."
    },
    {
      "id": 9015,
      "q": "A central bank under a peg faces appreciation pressure after fiscal expansion. To defend the peg, it must...",
      "options": [
        "sell domestic currency and expand the money supply",
        "buy domestic currency and contract the money supply",
        "let the exchange rate float while keeping the peg",
        "raise tariffs until LM* shifts left"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "policy_memo",
      "objective": "LO14.3",
      "difficulty": "legendary",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "Appreciation pressure requires increasing domestic currency supply."
    },
    {
      "id": 9016,
      "q": "A memo says 'A fixed exchange rate makes monetary policy more predictable because the central bank controls e and M independently.' What is wrong?",
      "options": [
        "under capital mobility, defending e removes independent control of M",
        "the central bank can control the peg and the money supply independently",
        "money supply never changes under pegs",
        "capital flows do not respond to return differences"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "trap",
      "objective": "LO14.3",
      "difficulty": "legendary",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "The peg makes money supply endogenous to maintaining the exchange rate."
    },
    {
      "id": 9017,
      "q": "Which shock shifts IS* right but does not shift LM* directly?",
      "options": [
        "higher government purchases",
        "higher money supply",
        "lower price level",
        "lower money demand"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "legendary",
      "conceptCluster": "is_star_exchange_rate",
      "primarySkill": "is_star_exchange_rate",
      "repairSkill": "is_star_exchange_rate",
      "feedback": "Fiscal changes operate through the goods market and IS*."
    },
    {
      "id": 9018,
      "q": "Which shock shifts LM* right but does not shift IS* directly?",
      "options": [
        "higher money supply",
        "higher government purchases",
        "tariff-induced NX demand",
        "consumer optimism"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "legendary",
      "conceptCluster": "lm_star_money_market",
      "primarySkill": "lm_star_money_market",
      "repairSkill": "lm_star_money_market",
      "feedback": "Monetary expansion works through the money market."
    },
    {
      "id": 9019,
      "q": "If P rises above the level consistent with long-run output, what adjustment pulls Y back?",
      "options": [
        "real balances fall, LM* shifts left, and income falls",
        "real balances rise, LM* shifts right, and income rises",
        "IS* shifts right permanently",
        "net exports rise because appreciation boosts exports"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "difficulty": "legendary",
      "conceptCluster": "open_economy_ad_slope",
      "primarySkill": "open_economy_ad_slope",
      "repairSkill": "open_economy_ad_slope",
      "feedback": "Higher P reduces M/P, appreciating the exchange rate and lowering NX/Y."
    },
    {
      "id": 9020,
      "q": "A fiscal expansion under floating rates and a fiscal expansion under fixed rates can point in opposite output directions. What is the core reason?",
      "options": [
        "the exchange-rate regime determines whether appreciation offsets or monetary accommodation reinforces the IS* shift",
        "floating rates force the central bank to defend the peg",
        "fixed rates always eliminate capital mobility",
        "fiscal policy never affects IS*"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "integration",
      "objective": "LO14.3",
      "difficulty": "legendary",
      "conceptCluster": "regime_comparison",
      "primarySkill": "fixed_floating_exchange_regimes",
      "repairSkill": "fixed_floating_exchange_regimes",
      "feedback": "The exchange-rate regime changes the adjustment path."
    },
    {
      "id": 9021,
      "q": "A tariff in Chapter 6 and a tariff in the floating-rate Mundell-Fleming model share which warning?",
      "options": [
        "exchange-rate appreciation can offset the direct net-export effect",
        "tariffs always raise long-run saving",
        "tariffs always shift LM* right",
        "tariffs remove the need to track S - I"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "integration",
      "objective": "LO6.5",
      "difficulty": "legendary",
      "conceptCluster": "tariff_model_comparison",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Both models warn against stopping at the first import effect."
    },
    {
      "id": 9022,
      "q": "A country wants output stimulus while maintaining a fixed exchange rate and free capital mobility. Which policy is more plausible?",
      "options": [
        "fiscal expansion, because monetary expansion is constrained by peg defense",
        "monetary expansion, because it is fully independent under fixed rates",
        "a tariff, because it eliminates the impossible trinity",
        "doing nothing, because output can never move under fixed rates"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "integration",
      "objective": "LO14.3",
      "difficulty": "legendary",
      "conceptCluster": "policy_under_fixed_rates",
      "primarySkill": "fixed_exchange_rate_policy",
      "repairSkill": "fixed_exchange_rate_policy",
      "feedback": "With fixed rates and free capital mobility, monetary independence is sacrificed."
    },
    {
      "id": 9023,
      "q": "A fall in money demand under floating rates is most similar to what policy movement?",
      "options": [
        "an expansionary LM* movement that depreciates the currency and raises output",
        "a contractionary IS* movement that appreciates the currency and lowers output",
        "a tariff that raises the real exchange rate and leaves output unchanged",
        "a fiscal contraction that lowers saving"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "difficulty": "legendary",
      "conceptCluster": "money_demand_comparison",
      "primarySkill": "money_demand_shock",
      "repairSkill": "money_demand_shock",
      "feedback": "Lower money demand shifts the money-market equilibrium in an expansionary direction."
    },
    {
      "id": 9024,
      "q": "If a student says “depreciation always proves the economy is stronger,” which counterexample breaks that claim?",
      "options": [
        "capital flight can cause depreciation while signaling crisis and lost confidence",
        "a tariff can cause appreciation while raising saving",
        "fiscal consolidation always causes depreciation through higher imports",
        "balanced trade means there is no exchange rate"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "trap",
      "objective": "LO6.5",
      "difficulty": "legendary",
      "conceptCluster": "depreciation_counterexample",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "Depreciation can come from a bad shock."
    },
    {
      "id": 9025,
      "q": "Domestic fiscal expansion lowers saving while foreign fiscal contraction lowers the world interest rate. Which outcome is ambiguous?",
      "options": [
        "the final change in S - I and net exports",
        "the fact that saving falls domestically",
        "the fact that investment responds to r*",
        "the identity NX = NCO"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "difficulty": "legendary",
      "conceptCluster": "opposing_shocks",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "One shock lowers saving; the other changes investment through the world interest rate."
    },
    {
      "id": 9026,
      "q": "Refer to the image above. Which movement is more consistent with higher saving rather than a tariff?",
      "options": [
        "E to I",
        "B to A",
        "B to C",
        "A to B"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "legendary",
      "conceptCluster": "saving_vs_tariff_graph",
      "primarySkill": "trace_saving_shift",
      "repairSkill": "trace_saving_shift",
      "feedback": "Higher saving shifts the vertical S - I line right, moving from E to I.",
      "image": "rer_changes.png"
    },
    {
      "id": 9027,
      "q": "Refer to the image above. Which feature shows this is a trade-policy shift rather than a saving shift?",
      "options": [
        "the net-exports curve shifts while the S - I line stays fixed",
        "the S - I line shifts right while the net-exports curve stays fixed",
        "the world interest rate changes from r_w1 to r_w3",
        "the LM* curve shifts right"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "legendary",
      "conceptCluster": "tariff_vs_saving_graph",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The trade-policy graph shifts NX(R), not the vertical S - I line.",
      "image": "tradepolicies.png"
    },
    {
      "id": 9028,
      "q": "Refer to the image above. Why does a lower price level map to higher output on the aggregate demand curve?",
      "options": [
        "lower P raises M/P, shifts LM* right, depreciates the currency, and raises net exports",
        "lower P shifts IS* left and lowers net exports",
        "lower P fixes the exchange rate and removes the money market",
        "lower P shifts LRAS right immediately"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "difficulty": "legendary",
      "conceptCluster": "ad_graph_synthesis",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "The Mundell-Fleming model channel runs through real balances, LM*, the exchange rate, and net exports.",
      "image": "mundell_adas.png"
    },
    {
      "id": 9029,
      "q": "Refer to the image above. If a country chooses side 3, which policy freedom is lost?",
      "options": [
        "independent monetary policy",
        "free capital mobility",
        "the fixed exchange rate",
        "the ability to trade goods"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "graph",
      "objective": "LO14.3",
      "difficulty": "legendary",
      "conceptCluster": "trinity_graph_synthesis",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Side 3 keeps fixed exchange rates and free capital mobility, so monetary independence is sacrificed.",
      "image": "impossibletrinity.png"
    },
    {
      "q": "A fiscal expansion in a small open economy lowers NX in Chapter 6, but fiscal expansion under floating rates leaves Y largely unchanged in Mundell-Fleming model. What links the two results?",
      "options": [
        "exchange-rate appreciation crowds out net exports",
        "the world interest rate falls in both models",
        "the money supply expands automatically",
        "imports are fixed"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Legendary items require separating the model channel before judging the final outcome.",
      "id": 9030,
      "difficulty": "legendary"
    },
    {
      "q": "A tariff under Chapter 6 and a tariff under floating-rate Mundell-Fleming model both disappoint protectionist expectations. Why?",
      "options": [
        "exchange-rate appreciation offsets the direct NX effect",
        "saving rises enough to cancel the tariff",
        "the central bank must lower the world interest rate",
        "investment demand disappears"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Legendary items require separating the model channel before judging the final outcome.",
      "id": 9031,
      "difficulty": "legendary"
    },
    {
      "q": "A price-level decline in Mundell-Fleming model raises Y along aggregate demand. What is the mechanism?",
      "options": [
        "higher M/P shifts LM* right, depreciates the currency, and raises NX",
        "lower P shifts IS* left and lowers NX",
        "higher P raises real balances and output",
        "r* falls because domestic prices fall"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Legendary items require separating the model channel before judging the final outcome.",
      "id": 9032,
      "difficulty": "legendary"
    },
    {
      "q": "A country wants fixed exchange rates, free capital mobility, and recession-fighting monetary expansion. What is the verdict?",
      "options": [
        "the trilemma blocks all three; one goal must be abandoned",
        "the package works if NX is positive",
        "the package works if the country imports less",
        "the trilemma applies only to closed economies"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Legendary items require separating the model channel before judging the final outcome.",
      "id": 9033,
      "difficulty": "legendary"
    },
    {
      "q": "Capital flight depreciates the currency and may raise NX. Why is that not automatically good news?",
      "options": [
        "the NX rise comes from financial stress and reduced demand for domestic assets",
        "a weaker currency always means stronger real income",
        "capital flight raises investment automatically",
        "capital flight fixes the exchange rate"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Legendary items require separating the model channel before judging the final outcome.",
      "id": 9034,
      "difficulty": "legendary"
    },
    {
      "q": "In a large open economy, fiscal expansion raises r. Why is the result between closed-economy and small-open-economy logic?",
      "options": [
        "both investment crowding out and international capital flows adjust",
        "the interest rate is fixed exactly at r*",
        "NX is absent from the model",
        "the exchange rate channel is ignored entirely"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Legendary items require separating the model channel before judging the final outcome.",
      "id": 9035,
      "difficulty": "legendary"
    },
    {
      "q": "A memo says fixed rates make monetary policy stronger because the central bank controls both e and M. What is wrong?",
      "options": [
        "defending e removes independent control of M under capital mobility",
        "fixed rates eliminate the central bank",
        "money supply can never change under a peg",
        "capital flows cannot respond to returns"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Legendary items require separating the model channel before judging the final outcome.",
      "id": 9036,
      "difficulty": "legendary"
    },
    {
      "q": "A fall in money demand under floating rates is closest to which shock?",
      "options": [
        "an effective rightward LM* shift that lowers e and raises Y",
        "a rightward IS* shift that raises e and leaves Y fixed",
        "a tariff shifting NX(R) right",
        "a saving increase in Chapter 6"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Legendary items require separating the model channel before judging the final outcome.",
      "id": 9037,
      "difficulty": "legendary"
    },
    {
      "q": "If domestic saving falls and foreign fiscal contraction lowers r*, what is the best conclusion for NX?",
      "options": [
        "the forces push in opposite directions, so magnitudes matter",
        "NX must rise because r* falls",
        "NX must fall because saving falls",
        "NX cannot be affected by either force"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Legendary items require separating the model channel before judging the final outcome.",
      "id": 9038,
      "difficulty": "legendary"
    },
    {
      "q": "If investment demand rises and trade policy shifts NX demand right, what should a careful answer separate?",
      "options": [
        "the S - I shift from the NX(R) curve shift",
        "the model channel that moved first",
        "nominal versus real variables",
        "exports from imports and capital flows"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Legendary items require separating the model channel before judging the final outcome.",
      "id": 9039,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. Choosing side 3 means the country keeps fixed rates and free capital mobility. What is sacrificed?",
      "options": [
        "independent monetary policy",
        "fiscal policy",
        "exports",
        "investment"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "graph",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Side 3 pairs fixed exchange rates with free capital mobility, so monetary independence is the missing corner.",
      "image": "impossibletrinity.png",
      "id": 9040,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. A movement from C back toward B after overheating would require...",
      "options": [
        "a higher price level reducing M/P and shifting LM* left",
        "a lower price level shifting LM* right",
        "a tariff shifting IS* right",
        "a saving increase shifting S - I right"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Higher P reduces real balances, moving LM* left and Y back down along aggregate demand.",
      "image": "mundell_adas.png",
      "id": 9041,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. Why is a move from E to C different from a move from B to A in the image above?",
      "options": [
        "E to C changes S - I; B to A shifts NX(R) with S - I fixed",
        "both are identical saving shocks",
        "both are monetary-policy shocks",
        "neither affects the real exchange rate"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "graph",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "One graph shifts S - I; the other shifts NX demand.",
      "id": 9042,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. Why does fiscal expansion under floating rates not move Y past Y*?",
      "options": [
        "appreciation reduces NX enough to offset the IS* increase",
        "LM* shifts right automatically",
        "the central bank defends a peg",
        "the world interest rate falls"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "With floating rates, the exchange rate adjusts and crowds out NX.",
      "image": "islm_exchangerates.png",
      "id": 9043,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. Why does monetary expansion raise Y under floating rates?",
      "options": [
        "LM* shifts right and depreciation raises NX",
        "IS* shifts left and appreciation raises NX",
        "the peg forces fiscal expansion",
        "r* rises because the country is small"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "The LM* shift lowers e, raising net exports and income.",
      "image": "islm_er_change.png",
      "id": 9044,
      "difficulty": "legendary"
    },
    {
      "q": "Using ε = eP/P*, if e=0.8, P=150, and P*=100, what is ε?",
      "options": [
        "1.2",
        "0.8",
        "1.5",
        "120"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 0.8 × 150 / 100 = 1.2.",
      "id": 9045,
      "difficulty": "legendary"
    },
    {
      "q": "Using ε = eP/P*, if e=1.5, P=80, and P*=120, what is ε?",
      "options": [
        "1",
        "1.5",
        "0.67",
        "120"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 1.5 × 80 / 120 = 1.",
      "id": 9046,
      "difficulty": "legendary"
    },
    {
      "q": "Using ε = eP/P*, if e=1.0, P=120, and P*=80, what is ε?",
      "options": [
        "1.5",
        "1.0",
        "1.5",
        "120"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 1.0 × 120 / 80 = 1.5.",
      "id": 9047,
      "difficulty": "legendary"
    },
    {
      "q": "Using ε = eP/P*, if e=2.0, P=90, and P*=150, what is ε?",
      "options": [
        "1.2",
        "2.0",
        "0.6",
        "180"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 2.0 × 90 / 150 = 1.2.",
      "id": 9048,
      "difficulty": "legendary"
    },
    {
      "q": "Using ε = eP/P*, if e=0.75, P=160, and P*=120, what is ε?",
      "options": [
        "1",
        "0.75",
        "1.33",
        "120"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 0.75 × 160 / 120 = 1.",
      "id": 9049,
      "difficulty": "legendary"
    },
    {
      "q": "Domestic saving falls while investment demand rises. What is the cleanest conclusion?",
      "options": [
        "both forces lower S - I, so net exports fall strongly",
        "both forces raise S - I, so net exports rise strongly",
        "the world interest rate must change because the economy is small",
        "the trade balance is unrelated to saving and investment"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Compare the direction of saving and investment before judging S - I.",
      "id": 9050,
      "difficulty": "legendary"
    },
    {
      "q": "Domestic saving rises while investment demand falls. What is the cleanest conclusion?",
      "options": [
        "both forces raise S - I, so net exports rise strongly",
        "both forces lower S - I, so net exports fall strongly",
        "the world interest rate must change because the economy is small",
        "the trade balance is unrelated to saving and investment"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Compare the direction of saving and investment before judging S - I.",
      "id": 9051,
      "difficulty": "legendary"
    },
    {
      "q": "Domestic saving rises while investment demand rises. What is the cleanest conclusion?",
      "options": [
        "the effect on S - I is ambiguous without magnitudes",
        "NX must rise because saving changed",
        "the world interest rate must change because the economy is small",
        "the trade balance is unrelated to saving and investment"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Compare the direction of saving and investment before judging S - I.",
      "id": 9052,
      "difficulty": "legendary"
    },
    {
      "q": "Domestic saving falls while investment demand falls. What is the cleanest conclusion?",
      "options": [
        "the effect on S - I is ambiguous without magnitudes",
        "NX must fall because saving changed",
        "the world interest rate must change because the economy is small",
        "the trade balance is unrelated to saving and investment"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Compare the direction of saving and investment before judging S - I.",
      "id": 9053,
      "difficulty": "legendary"
    },
    {
      "q": "In Chapter 6, a tariff appreciates the real exchange rate. In floating-rate Mundell-Fleming model, a tariff also appreciates the exchange rate. What is the shared lesson?",
      "options": [
        "exchange-rate adjustment offsets the direct trade-policy effect",
        "tariffs always raise output permanently",
        "tariffs lower the world interest rate",
        "saving automatically rises after trade restrictions"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Trade restrictions trigger exchange-rate adjustment that offsets the direct NX effect.",
      "id": 9054,
      "difficulty": "legendary"
    },
    {
      "q": "Why does floating-rate fiscal policy fail to raise income strongly in Mundell-Fleming model?",
      "options": [
        "currency appreciation crowds out net exports",
        "money supply rises automatically",
        "the peg forces monetary expansion",
        "investment demand becomes vertical"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "legendary",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "The exchange-rate channel offsets the fiscal demand shock.",
      "id": 9055,
      "difficulty": "legendary"
    },
    {
      "q": "Why is monetary policy powerful under floating rates?",
      "options": [
        "depreciation reinforces the initial LM* expansion through higher net exports",
        "appreciation reinforces the initial LM* expansion through lower net exports",
        "the central bank fixes e and M independently",
        "fiscal policy automatically contracts"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "legendary",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Floating rates allow the exchange rate to move, so monetary policy works through NX.",
      "id": 9056,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. Moving from A to C in the left panel corresponds to what in the right panel?",
      "options": [
        "moving down the aggregate demand curve as P falls and Y rises",
        "a shift of LRAS to the left",
        "a tariff shifting NX right",
        "a fixed-rate reserve intervention"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "legendary",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "The left panel explains points along the open-economy aggregate demand curve.",
      "image": "mundell_adas.png",
      "id": 9057,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. Moving from B to C is most consistent with...",
      "options": [
        "expansionary monetary policy under floating rates",
        "expansionary fiscal policy under floating rates",
        "a fixed exchange rate peg with no money change",
        "a tariff under Chapter 6"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "legendary",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "A move to the right on LM* lowers e and raises Y.",
      "image": "islm_er_change.png",
      "id": 9058,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. Moving from B to A is most consistent with...",
      "options": [
        "a rightward IS* shock under floating rates",
        "a monetary expansion under floating rates",
        "a fall in the price level shifting LM* right",
        "capital flight in the large open model"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "legendary",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "A rightward IS* shock raises e with Y pinned at Y*.",
      "image": "islm_exchangerates.png",
      "id": 9059,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. Why does moving from B to A not prove net exports rise?",
      "options": [
        "the vertical S - I line fixes equilibrium NX while R adjusts",
        "the NX curve is irrelevant to trade policy",
        "saving always rises after a tariff",
        "the exchange rate cannot move in this graph"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The equilibrium remains on the same S - I line; the real exchange rate absorbs the shift.",
      "image": "tradepolicies.png",
      "id": 9060,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. Moving from E to C is best read as...",
      "options": [
        "higher S - I and a higher real exchange rate",
        "lower S - I and a lower real exchange rate",
        "a tariff shifting NX(R)",
        "a money-demand shock shifting LM*"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "legendary",
      "objective": "LO6.4",
      "conceptCluster": "exchange_rate_adjustment",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "Point C is on the right-most S - I line and the high R line.",
      "image": "rer_changes.png",
      "id": 9061,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. Moving from D to E is best read as...",
      "options": [
        "higher investment demand at the same world interest rate",
        "lower saving at the same world interest rate",
        "a fall in the world interest rate",
        "a tariff shifting NX demand"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "The investment-demand curve shifts right at the same r_w2.",
      "image": "loanablefunds_changes_investment.png",
      "id": 9062,
      "difficulty": "legendary"
    },
    {
      "q": "A nation wants to stabilize its currency and allow free capital flows during a recession. What policy limitation follows?",
      "options": [
        "monetary policy must defend the peg rather than independently stabilize output",
        "fiscal policy becomes illegal",
        "exports must equal imports every period",
        "the country must abandon all capital flows"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "legendary",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The peg plus capital mobility sacrifices monetary independence.",
      "id": 9063,
      "difficulty": "legendary"
    },
    {
      "q": "National saving is 1450 and domestic investment is 1450. What are net exports?",
      "options": [
        "0; balanced trade",
        "0; the opposite sign",
        "2900; surplus",
        "0; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1450 - 1450 = 0.",
      "id": 9064,
      "difficulty": "legendary"
    },
    {
      "q": "National saving is 1700 and domestic investment is 1325. What are net exports?",
      "options": [
        "375; surplus",
        "-375; the opposite sign",
        "3025; surplus",
        "375; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1700 - 1325 = 375.",
      "id": 9065,
      "difficulty": "legendary"
    },
    {
      "q": "National saving is 1325 and domestic investment is 1700. What are net exports?",
      "options": [
        "-375; deficit",
        "375; the opposite sign",
        "3025; surplus",
        "375; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 1325 - 1700 = -375.",
      "id": 9066,
      "difficulty": "legendary"
    },
    {
      "q": "National saving is 2100 and domestic investment is 1850. What are net exports?",
      "options": [
        "250; surplus",
        "-250; the opposite sign",
        "3950; surplus",
        "250; balanced trade"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 2100 - 1850 = 250.",
      "id": 9067,
      "difficulty": "legendary"
    },
    {
      "q": "Y=3000, C=1800, I=700, and G=650. What are net exports?",
      "options": [
        "-150; deficit",
        "150; wrong sign",
        "1200; missing I and G",
        "3150; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -150.",
      "id": 9068,
      "difficulty": "legendary"
    },
    {
      "q": "Y=4200, C=2600, I=900, and G=800. What are net exports?",
      "options": [
        "-100; deficit",
        "100; wrong sign",
        "1600; missing I and G",
        "4300; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -100.",
      "id": 9069,
      "difficulty": "legendary"
    },
    {
      "q": "Y=2500, C=1600, I=500, and G=450. What are net exports?",
      "options": [
        "-50; deficit",
        "50; wrong sign",
        "900; missing I and G",
        "2550; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -50.",
      "id": 9070,
      "difficulty": "legendary"
    },
    {
      "q": "Y=5200, C=3300, I=1100, and G=900. What are net exports?",
      "options": [
        "-100; deficit",
        "100; wrong sign",
        "1900; missing I and G",
        "5300; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -100.",
      "id": 9071,
      "difficulty": "legendary"
    },
    {
      "q": "Y=3800, C=2300, I=850, and G=750. What are net exports?",
      "options": [
        "-100; deficit",
        "100; wrong sign",
        "1500; missing I and G",
        "3900; domestic spending"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G = -100.",
      "id": 9072,
      "difficulty": "legendary"
    },
    {
      "q": "Using ε = eP/P*, if e=1.2, P=100, and P*=120, what is ε?",
      "options": [
        "1",
        "1.2",
        "0.83",
        "120"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "ε = 1.2 × 100 / 120 = 1.",
      "id": 9073,
      "difficulty": "legendary"
    },
    {
      "q": "A policy memo says: domestic fiscal expansion lowers national saving. Which complete open-economy chain is correct?",
      "options": [
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 9074,
      "difficulty": "legendary"
    },
    {
      "q": "A policy memo says: domestic fiscal contraction raises national saving. Which complete open-economy chain is correct?",
      "options": [
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "NX changes first and then mechanically sets saving",
        "the result cannot be traced with S - I = NX"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Trace the first movement through S - I, then connect S - I to NX.",
      "id": 9075,
      "difficulty": "legendary"
    },
    {
      "q": "A country imposes a tariff under floating rates and expects higher output. What is the best critique?",
      "options": [
        "appreciation offsets the IS* increase, so output need not rise",
        "depreciation amplifies the tariff, so output must rise",
        "the money supply automatically expands under floating rates",
        "the world interest rate falls"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "legendary",
      "objective": "LO14.1",
      "conceptCluster": "trade_policy_under_floating",
      "primarySkill": "trade_policy_under_floating",
      "repairSkill": "trade_policy_under_floating",
      "feedback": "Floating exchange rates offset trade-policy demand shocks through appreciation.",
      "id": 9076,
      "difficulty": "legendary"
    },
    {
      "q": "A country imposes a tariff in the long-run trade model and expects a better trade balance. What is the best critique?",
      "options": [
        "real appreciation offsets the direct NX demand shift",
        "saving rises by exactly the tariff revenue",
        "investment collapses automatically",
        "r* must fall"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Trade restrictions change R more than equilibrium NX when S - I is fixed.",
      "id": 9077,
      "difficulty": "legendary"
    },
    {
      "q": "A policy raises saving but foreign fiscal contraction lowers r*. What is the careful conclusion for NX?",
      "options": [
        "the forces work in opposite directions, so magnitudes matter",
        "both forces tend to raise NX",
        "both forces tend to lower net exports",
        "NX cannot respond to r*"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Higher saving raises S - I, while lower r* raises investment and lowers S - I.",
      "id": 9078,
      "difficulty": "legendary"
    },
    {
      "q": "A policy lowers saving while foreign fiscal expansion raises r*. What is the careful conclusion for NX?",
      "options": [
        "the forces work in opposite directions, so magnitudes matter",
        "both forces tend to raise NX",
        "both forces tend to lower net exports",
        "NX cannot respond to r*"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "legendary",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Lower saving lowers S - I, while higher r* lowers investment and raises S - I.",
      "id": 9079,
      "difficulty": "legendary"
    },
    {
      "q": "Fiscal expansion under fixed rates is more powerful than under floating rates because...",
      "options": [
        "the central bank expands money to defend the peg instead of allowing appreciation",
        "the central bank contracts money to defend the peg and reduce output",
        "floating rates fix e and remove NX",
        "fixed rates eliminate capital mobility"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "legendary",
      "objective": "LO14.3",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "The fixed peg turns fiscal pressure into monetary accommodation.",
      "id": 9080,
      "difficulty": "legendary"
    },
    {
      "q": "Monetary expansion under fixed rates is weaker than under floating rates because...",
      "options": [
        "defending the peg reverses independent money creation",
        "the peg causes automatic depreciation",
        "floating rates ban capital flows",
        "fiscal policy must offset every money change"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "legendary",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Fixed rates sacrifice monetary independence under capital mobility.",
      "id": 9081,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. In the image above, starting at Y3 above LRAS, what long-run pressure should follow?",
      "options": [
        "P rises, M/P falls, LM* shifts left, and Y falls toward LRAS",
        "P falls, M/P rises, LM* shifts right, and Y rises further",
        "IS* shifts right because output is high",
        "NX(R) shifts right because LRAS moves"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "legendary",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Above potential output, price pressure reduces real balances and pulls Y back.",
      "image": "mundell_adas.png",
      "id": 9082,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. In the image above, starting at Y1 below LRAS, what long-run pressure should follow?",
      "options": [
        "P falls, M/P rises, LM* shifts right, and Y rises toward LRAS",
        "P rises, M/P falls, LM* shifts left, and Y falls further",
        "IS* shifts left because output is low",
        "NX(R) shifts left because LRAS moves"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "legendary",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Below potential output, price pressure raises real balances and pushes Y back up.",
      "image": "mundell_adas.png",
      "id": 9083,
      "difficulty": "legendary"
    },
    {
      "q": "Refer to the image above. Why can no point inside the triangle hold all three corners?",
      "options": [
        "the model says only two goals can be jointly maintained under capital mobility constraints",
        "the graph is only decorative",
        "each side means rejecting all three goals",
        "fixed exchange rates eliminate fiscal policy"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "graph",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The trilemma is a choose-two constraint.",
      "image": "impossibletrinity.png",
      "id": 9084,
      "difficulty": "legendary"
    },
    {
      "q": "Y=5,200, C=3,050, I=1,150, and G=1,150. Which statement is correct?",
      "options": [
        "NX = -150, so there is a trade deficit",
        "NX = 150, so there is a trade surplus",
        "NX = 2,150, so there is a surplus",
        "NX cannot be calculated from these values"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = 5,200 - 3,050 - 1,150 - 1,150 = -150.",
      "id": 9085,
      "difficulty": "legendary"
    },
    {
      "q": "S=2,250 and I=1,900. Then investment rises by 500 with saving fixed. What is new NX?",
      "options": [
        "-150",
        "350",
        "850",
        "-350"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "New investment is 2,400, so NX = 2,250 - 2,400 = -150.",
      "id": 9086,
      "difficulty": "legendary"
    },
    {
      "q": "ε=eP/P*. If e rises from 0.8 to 1.0 while P=150 and P*=100, what happens to ε?",
      "options": [
        "it rises from 1.2 to 1.5",
        "it falls from 1.5 to 1.2",
        "it stays at 1.0",
        "it becomes NX"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "calculation",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "Initial ε = 0.8×150/100 = 1.2; new ε = 1.0×150/100 = 1.5.",
      "id": 9087,
      "difficulty": "legendary"
    },
    {
      "q": "A large open economy faces investment optimism. Why is the final NX effect not just the small-open answer?",
      "options": [
        "r can rise and partly crowd out investment while capital flows adjust",
        "r is fixed at r* and cannot move",
        "NX is absent from the large-open model",
        "the exchange rate cannot adjust"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "legendary",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "Large-open adjustment includes an endogenous interest-rate response.",
      "id": 9088,
      "difficulty": "legendary"
    },
    {
      "q": "A student says, “Fiscal policy always works better with floating rates.” What is the correction?",
      "options": [
        "under floating rates fiscal policy is weakened by appreciation; under fixed rates it can be amplified",
        "under floating rates fiscal policy always shifts LM* right",
        "under fixed rates fiscal policy cannot move IS*",
        "exchange-rate regimes do not affect fiscal policy"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "legendary",
      "objective": "LO14.3",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "The fiscal multiplier depends heavily on the exchange-rate regime.",
      "id": 9089,
      "difficulty": "legendary"
    }
  ],
  "easyBoss": [
    {
      "id": 2000,
      "q": "The Keeper opens the ledger. Which identity belongs in the missing slot: S = I + ___?",
      "options": [
        "NCO",
        "C",
        "G",
        "P"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "definition",
      "objective": "LO6.1",
      "difficulty": "easyBoss",
      "conceptCluster": "identity_chain",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Saving finances investment and net capital outflow."
    },
    {
      "id": 2001,
      "q": "The Keeper asks why NX and NCO move together. Which answer survives?",
      "options": [
        "international transactions create offsetting goods and asset flows",
        "exports are always larger",
        "imports are illegal",
        "money demand fixes NX"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "interpretation",
      "objective": "LO6.1",
      "difficulty": "easyBoss",
      "conceptCluster": "identity_chain",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Net exports equal net capital outflow by identity."
    },
    {
      "id": 2002,
      "q": "The Keeper sees Y exceed C + I + G. What must NX be?",
      "options": [
        "positive",
        "negative",
        "zero by law",
        "unrelated to Y"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "interpretation",
      "objective": "LO6.1",
      "difficulty": "easyBoss",
      "conceptCluster": "identity_chain",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Output beyond domestic spending is sold abroad."
    },
    {
      "id": 2003,
      "q": "S = 700 and I = 580. What are net exports?",
      "options": [
        "120",
        "-120",
        "1280",
        "0"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easyBoss",
      "conceptCluster": "calculation_chain",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = 120."
    },
    {
      "id": 2004,
      "q": "S = 650 and I = 725. What trade position follows?",
      "options": [
        "trade deficit",
        "trade surplus",
        "balanced trade",
        "fixed exchange rate"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easyBoss",
      "conceptCluster": "calculation_chain",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "S - I is negative, so NX is negative."
    },
    {
      "id": 2005,
      "q": "Y = 1600, C = 950, I = 400, G = 300. What are net exports?",
      "options": [
        "-50",
        "50",
        "250",
        "650"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "easyBoss",
      "conceptCluster": "calculation_chain",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = 1600 - 950 - 400 - 300 = -50."
    },
    {
      "id": 2006,
      "q": "The Keeper asks what makes the economy small. Which answer is right?",
      "options": [
        "it takes r* as given",
        "it sets r*",
        "it has no trade",
        "it has no investment"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "definition",
      "objective": "LO6.3",
      "difficulty": "easyBoss",
      "conceptCluster": "small_open_model",
      "primarySkill": "small_open_assumption",
      "repairSkill": "small_open_assumption",
      "feedback": "A small open economy cannot move the world interest rate."
    },
    {
      "id": 2007,
      "q": "Refer to the image above. Which point shows balanced trade at r_w2?",
      "options": [
        "D",
        "A",
        "B",
        "G"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "difficulty": "easyBoss",
      "conceptCluster": "small_open_model",
      "primarySkill": "small_open_assumption",
      "repairSkill": "small_open_assumption",
      "feedback": "At r_w2, S equals I at D.",
      "image": "loanablefunds.png"
    },
    {
      "id": 2008,
      "q": "Refer to the image above. At r_w3, what trade result occurs?",
      "options": [
        "trade deficit",
        "trade surplus",
        "balanced trade",
        "no capital flow"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "graph",
      "objective": "LO6.3",
      "difficulty": "easyBoss",
      "conceptCluster": "small_open_model",
      "primarySkill": "small_open_assumption",
      "repairSkill": "small_open_assumption",
      "feedback": "At the low world rate, investment exceeds saving.",
      "image": "loanablefunds.png"
    },
    {
      "id": 2009,
      "q": "The Keeper sees appreciation. What happens to domestic goods?",
      "options": [
        "they become relatively more expensive",
        "they become relatively cheaper",
        "NX must rise",
        "saving vanishes"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "interpretation",
      "objective": "LO6.4",
      "difficulty": "easyBoss",
      "conceptCluster": "exchange_rate_basics",
      "primarySkill": "appreciation_nx",
      "repairSkill": "appreciation_nx",
      "feedback": "Appreciation makes exports less attractive."
    },
    {
      "id": 2010,
      "q": "Refer to the image above. Moving from A to G means...",
      "options": [
        "R falls and net exports rise",
        "R rises and net exports fall",
        "R is fixed",
        "NX becomes S"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "graph",
      "objective": "LO6.4",
      "difficulty": "easyBoss",
      "conceptCluster": "exchange_rate_basics",
      "primarySkill": "appreciation_nx",
      "repairSkill": "appreciation_nx",
      "feedback": "Lower R is a real depreciation, raising NX.",
      "image": "realexchangerates.png"
    },
    {
      "id": 2011,
      "q": "A depreciation usually pushes NX...",
      "options": [
        "up",
        "down",
        "to zero",
        "into investment"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "interpretation",
      "objective": "LO6.4",
      "difficulty": "easyBoss",
      "conceptCluster": "exchange_rate_basics",
      "primarySkill": "appreciation_nx",
      "repairSkill": "appreciation_nx",
      "feedback": "Depreciation makes domestic goods cheaper."
    },
    {
      "id": 2012,
      "q": "Domestic fiscal expansion lowers public saving. What happens to S - I?",
      "options": [
        "it falls",
        "it rises",
        "it is fixed",
        "it becomes imports"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "interpretation",
      "objective": "LO6.5",
      "difficulty": "easyBoss",
      "conceptCluster": "policy_basics",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Lower saving lowers S - I."
    },
    {
      "id": 2013,
      "q": "A business tax credit raises investment demand. What happens to S - I?",
      "options": [
        "it falls",
        "it rises",
        "it becomes zero automatically",
        "it equals G"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "interpretation",
      "objective": "LO6.5",
      "difficulty": "easyBoss",
      "conceptCluster": "policy_basics",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Higher investment lowers S - I."
    },
    {
      "id": 2014,
      "q": "A tariff directly shifts which curve?",
      "options": [
        "NX(R)",
        "S",
        "LM*",
        "LRAS"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "definition",
      "objective": "LO6.5",
      "difficulty": "easyBoss",
      "conceptCluster": "policy_basics",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Trade policy shifts the net-export schedule."
    },
    {
      "id": 2015,
      "q": "Refer to the image above. Side 3 combines a fixed exchange rate with...",
      "options": [
        "free capital mobility",
        "independent monetary policy",
        "tariffs",
        "exports"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "graph",
      "objective": "LO14.3",
      "difficulty": "easyBoss",
      "conceptCluster": "trilemma_intro",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Side 3 connects the bottom two corners.",
      "image": "impossibletrinity.png"
    },
    {
      "id": 2016,
      "q": "A country chooses fixed rates and free capital mobility. What is sacrificed?",
      "options": [
        "independent monetary policy",
        "fiscal policy",
        "imports",
        "national saving"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "interpretation",
      "objective": "LO14.3",
      "difficulty": "easyBoss",
      "conceptCluster": "trilemma_intro",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The peg forces monetary policy to defend the exchange rate."
    },
    {
      "id": 2017,
      "q": "Which three cannot all be held at once?",
      "options": [
        "fixed rates, free capital mobility, and monetary independence",
        "floating rates, tariffs, and exports",
        "saving, investment, and GDP",
        "imports, exports, and NX"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "definition",
      "objective": "LO14.3",
      "difficulty": "easyBoss",
      "conceptCluster": "trilemma_intro",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "That is the impossible trinity."
    }
  ],
  "mediumBoss": [
    {
      "id": 3000,
      "q": "The Chancellor asks for the core Mundell-Fleming model assumption.",
      "options": [
        "small open economy with perfect capital mobility",
        "closed economy with no trade",
        "large economy setting r*",
        "no exchange-rate channel"
      ],
      "a": 0,
      "tag": "mundell_fleming_model",
      "type": "definition",
      "objective": "LO14.1",
      "difficulty": "mediumBoss",
      "conceptCluster": "mf_model",
      "primarySkill": "mundell_fleming_assumptions",
      "repairSkill": "mundell_fleming_assumptions",
      "feedback": "Mundell-Fleming model uses r = r*."
    },
    {
      "id": 3001,
      "q": "Why is r pinned at r* in Mundell-Fleming model?",
      "options": [
        "capital mobility arbitrages returns",
        "tariffs set r",
        "NX is fixed",
        "government spending sets r*"
      ],
      "a": 0,
      "tag": "mundell_fleming_model",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "mediumBoss",
      "conceptCluster": "mf_model",
      "primarySkill": "mundell_fleming_assumptions",
      "repairSkill": "mundell_fleming_assumptions",
      "feedback": "Capital flows keep domestic returns aligned with world returns."
    },
    {
      "id": 3002,
      "q": "What makes IS* slope downward in e-Y space?",
      "options": [
        "higher e lowers NX and planned spending",
        "higher e raises NX",
        "LM* shifts right",
        "saving disappears"
      ],
      "a": 0,
      "tag": "mundell_fleming_model",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "mediumBoss",
      "conceptCluster": "mf_model",
      "primarySkill": "mundell_fleming_assumptions",
      "repairSkill": "mundell_fleming_assumptions",
      "feedback": "Appreciation reduces net exports."
    },
    {
      "id": 3003,
      "q": "Under floating rates, fiscal expansion shifts...",
      "options": [
        "IS* right",
        "LM* right",
        "LRAS left",
        "S right"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "mediumBoss",
      "conceptCluster": "floating_fiscal",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Fiscal expansion raises planned spending."
    },
    {
      "id": 3004,
      "q": "Refer to the image above. Fiscal expansion moves from B to...",
      "options": [
        "A",
        "C",
        "Y3",
        "LM1"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "mediumBoss",
      "conceptCluster": "floating_fiscal",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "IS* shifts right and e rises.",
      "image": "islm_exchangerates.png"
    },
    {
      "id": 3005,
      "q": "Why does output not rise much under floating fiscal expansion?",
      "options": [
        "appreciation lowers NX",
        "depreciation raises NX",
        "the peg expands M",
        "tariffs fall"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "trap",
      "objective": "LO14.1",
      "difficulty": "mediumBoss",
      "conceptCluster": "floating_fiscal",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "NX crowding out offsets the fiscal push."
    },
    {
      "id": 3006,
      "q": "Under floating rates, monetary expansion shifts...",
      "options": [
        "LM* right",
        "IS* left",
        "S - I left",
        "NX(R) left"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.1",
      "difficulty": "mediumBoss",
      "conceptCluster": "floating_monetary",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Higher M/P shifts LM* right."
    },
    {
      "id": 3007,
      "q": "Refer to the image above. Monetary expansion moves from B to...",
      "options": [
        "C",
        "A",
        "Y1",
        "IS1"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "mediumBoss",
      "conceptCluster": "floating_monetary",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "LM* right lowers e and raises Y.",
      "image": "islm_er_change.png"
    },
    {
      "id": 3008,
      "q": "The output effect of monetary expansion is reinforced because...",
      "options": [
        "depreciation raises NX",
        "appreciation lowers NX",
        "government spending falls",
        "r* rises"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "difficulty": "mediumBoss",
      "conceptCluster": "floating_monetary",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "The exchange-rate channel amplifies monetary policy under floating rates."
    },
    {
      "id": 3009,
      "q": "Under fixed rates, monetary expansion creates pressure for...",
      "options": [
        "depreciation",
        "appreciation",
        "higher tariffs",
        "balanced trade by law"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.3",
      "difficulty": "mediumBoss",
      "conceptCluster": "fixed_regime",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Lower interest pressure leads to capital outflow and depreciation pressure."
    },
    {
      "id": 3010,
      "q": "To defend a fixed exchange rate against depreciation pressure, the central bank must...",
      "options": [
        "buy domestic currency and contract M",
        "sell domestic currency and expand M",
        "let the peg float",
        "shift IS* right"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "policy_memo",
      "objective": "LO14.3",
      "difficulty": "mediumBoss",
      "conceptCluster": "fixed_regime",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Defending the peg reverses the expansion."
    },
    {
      "id": 3011,
      "q": "Why is independent monetary policy weak under fixed rates?",
      "options": [
        "the money supply must serve the peg",
        "NX disappears",
        "fiscal policy is illegal",
        "IS* is vertical"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "interpretation",
      "objective": "LO14.3",
      "difficulty": "mediumBoss",
      "conceptCluster": "fixed_regime",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "The exchange-rate target dominates monetary independence."
    },
    {
      "id": 3012,
      "q": "Refer to the image above. Choosing side 1 means giving up...",
      "options": [
        "free capital mobility",
        "fixed exchange rate",
        "monetary independence",
        "fiscal policy"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "graph",
      "objective": "LO14.3",
      "difficulty": "mediumBoss",
      "conceptCluster": "trilemma",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Side 1 connects fixed rates and monetary independence, excluding free capital mobility.",
      "image": "impossibletrinity.png"
    },
    {
      "id": 3013,
      "q": "Refer to the image above. Choosing side 2 means giving up...",
      "options": [
        "fixed exchange rate",
        "monetary independence",
        "free capital mobility",
        "imports"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "graph",
      "objective": "LO14.3",
      "difficulty": "mediumBoss",
      "conceptCluster": "trilemma",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Side 2 connects monetary independence and free mobility, excluding the peg.",
      "image": "impossibletrinity.png"
    },
    {
      "id": 3014,
      "q": "The impossible trinity is most directly about the conflict between capital mobility, exchange-rate targets, and...",
      "options": [
        "monetary independence",
        "fiscal multipliers",
        "tax revenue",
        "inflation accounting"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "definition",
      "objective": "LO14.3",
      "difficulty": "mediumBoss",
      "conceptCluster": "trilemma",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "You can pick two, not three."
    },
    {
      "id": 3015,
      "q": "A lower price level changes Mundell-Fleming model first through...",
      "options": [
        "higher real money balances",
        "lower government spending",
        "higher tariffs",
        "lower saving"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "difficulty": "mediumBoss",
      "conceptCluster": "ad_derivation",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "P falls, so M/P rises."
    },
    {
      "id": 3016,
      "q": "Refer to the image above. A lower P moves the Mundell-Fleming model equilibrium toward...",
      "options": [
        "higher Y and lower e",
        "lower Y and higher e",
        "unchanged Y and higher e",
        "lower net exports and higher P"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "difficulty": "mediumBoss",
      "conceptCluster": "ad_derivation",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Lower P shifts LM* right.",
      "image": "mundell_ad.png"
    },
    {
      "id": 3017,
      "q": "Why does open-economy aggregate demand curve slope downward?",
      "options": [
        "lower P raises M/P, depreciates the currency, raises NX, and raises Y",
        "lower P shifts IS* left",
        "higher P raises NX, appreciates the currency, raises M/P, and lowers Y",
        "r* falls automatically"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "difficulty": "mediumBoss",
      "conceptCluster": "ad_derivation",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "That is the Mundell-Fleming model aggregate demand channel."
    }
  ],
  "finalBoss": [
    {
      "id": 4000,
      "q": "The Custodian gives Y = 4,800, C = 3,050, I = 900, and G = 1,050. Which verdict correctly links the identity to the capital-flow position?",
      "options": [
        "net exports are -200, so net capital outflow is -200 and the economy is borrowing from abroad",
        "net exports are 200, so net capital outflow is 200 and the economy is lending abroad",
        "net exports are -200, but net capital outflow must be positive because investment is positive",
        "net exports are 900 because investment is the foreign balance"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "multi-step",
      "objective": "LO6.2",
      "difficulty": "finalBoss",
      "conceptCluster": "identity_capital_flow_synthesis",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "NX = Y - C - I - G. Here NX = -200, so NCO is also -200."
    },
    {
      "id": 4001,
      "q": "National saving is 1,150 and domestic investment is 1,430. Which statement is the cleanest diagnosis?",
      "options": [
        "S - I = -280, so the economy has a trade deficit financed by capital inflow",
        "S - I = 280, so the economy has a trade surplus financed by capital outflow",
        "S - I = -280, so exports must exceed imports",
        "S - I is unrelated to net exports in an open economy"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "finalBoss",
      "conceptCluster": "identity_capital_flow_synthesis",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "NX = S - I = -280. Negative NX means a deficit and capital inflow."
    },
    {
      "id": 4002,
      "q": "A student says, “The country has a trade deficit, so saving must be high.” What is the correction?",
      "options": [
        "a trade deficit means S is below I, not above it",
        "a trade deficit means S is above I because foreigners borrow from the country",
        "a trade deficit only tells us that government spending equals taxes",
        "a trade deficit means exports are larger than imports"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "trap",
      "objective": "LO6.1",
      "difficulty": "finalBoss",
      "conceptCluster": "identity_capital_flow_synthesis",
      "primarySkill": "open_economy_identities",
      "repairSkill": "open_economy_identities",
      "feedback": "The identity is NX = S - I. A deficit means NX < 0, so S < I.",
      "commonError": "reversing S and I"
    },
    {
      "id": 4003,
      "q": "A domestic tax cut lowers national saving in a small open economy. Which chain is correct?",
      "options": [
        "S - I falls, the real exchange rate appreciates, and net exports fall",
        "S - I rises, the real exchange rate depreciates, and net exports rise",
        "investment rises because the world interest rate must fall",
        "net exports are unchanged because fiscal policy cannot affect S - I"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "finalBoss",
      "conceptCluster": "small_open_fiscal_chain",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Fiscal expansion lowers saving, reduces S - I, appreciates the real exchange rate, and lowers net exports."
    },
    {
      "id": 4004,
      "q": "Refer to the image above. Starting from E, a domestic fiscal expansion is best represented by which movement?",
      "options": [
        "E to A",
        "E to I",
        "E to H",
        "E to G"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "finalBoss",
      "conceptCluster": "small_open_fiscal_chain",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Fiscal expansion lowers saving and shifts S - I left. The new equilibrium is A.",
      "image": "rer_changes.png"
    },
    {
      "id": 4005,
      "q": "A business tax credit raises investment demand while national saving stays fixed. What happens in the small-open-economy model?",
      "options": [
        "S - I falls, net exports fall, and the real exchange rate appreciates",
        "S - I rises, net exports rise, and the real exchange rate depreciates",
        "investment cannot change because r is fixed at the world interest rate",
        "the trade balance improves because firms invest more"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "finalBoss",
      "conceptCluster": "small_open_fiscal_chain",
      "primarySkill": "trace_investment_demand_shift",
      "repairSkill": "trace_investment_demand_shift",
      "feedback": "Higher investment reduces S - I. The real exchange rate appreciates until net exports fall to match."
    },
    {
      "id": 4006,
      "q": "The Custodian hears, “A tariff fixes a trade deficit because imports fall.” What is the missing adjustment?",
      "options": [
        "the real exchange rate appreciates and offsets the direct increase in net exports",
        "the world interest rate falls and raises domestic investment",
        "saving automatically rises by the amount of the tariff",
        "capital mobility ends, so the identity no longer applies"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "trap",
      "objective": "LO6.5",
      "difficulty": "finalBoss",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "In the standard small-open-economy model, trade policy shifts NX(R), but the real exchange rate adjusts so NX still equals S - I."
    },
    {
      "id": 4007,
      "q": "Refer to the image above. If a tariff shifts the net-exports schedule right while S - I is fixed, what changes at the new equilibrium?",
      "options": [
        "the real exchange rate rises, but net exports stay tied to S - I",
        "net exports rise permanently because imports are lower",
        "the world interest rate rises until investment falls",
        "saving rises because exports become cheaper"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "finalBoss",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The image shows the tariff raising the real exchange rate while the vertical S - I line pins net exports.",
      "image": "tradepolicies.png"
    },
    {
      "id": 4008,
      "q": "Why is a tariff under floating exchange rates weak as output stimulus in the Mundell-Fleming model?",
      "options": [
        "the exchange rate appreciates and crowds out net exports, leaving output unchanged",
        "the money supply automatically falls and shifts LM* left",
        "the world interest rate rises and forces investment down",
        "the tariff directly lowers aggregate demand"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "multi-step",
      "objective": "LO14.3",
      "difficulty": "finalBoss",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "floating_trade_policy_offset",
      "repairSkill": "floating_trade_policy_offset",
      "feedback": "Under floating rates, the IS* shift is offset by appreciation. Output remains pinned at Y* in the basic model."
    },
    {
      "id": 4009,
      "q": "Under floating exchange rates, expansionary monetary policy works through which complete channel?",
      "options": [
        "LM* shifts right, the exchange rate depreciates, net exports rise, and output rises",
        "IS* shifts right, the exchange rate appreciates, and output is unchanged",
        "LM* shifts left, the exchange rate appreciates, and output falls",
        "the central bank buys foreign currency to defend the peg"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "difficulty": "finalBoss",
      "conceptCluster": "floating_mundell_fleming_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Monetary expansion shifts LM* right. Depreciation raises net exports and output."
    },
    {
      "id": 4010,
      "q": "Under floating exchange rates, fiscal expansion has a muted output effect because...",
      "options": [
        "the exchange rate appreciates and reduces net exports",
        "LM* shifts right and offsets the fiscal expansion",
        "the central bank must buy domestic currency to maintain the peg",
        "investment becomes perfectly interest-inelastic"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "trap",
      "objective": "LO14.1",
      "difficulty": "finalBoss",
      "conceptCluster": "floating_mundell_fleming_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Fiscal expansion shifts IS* right, but appreciation reduces net exports and offsets the effect on output."
    },
    {
      "id": 4011,
      "q": "Compare monetary expansion and fiscal expansion in the floating-rate Mundell-Fleming model. What is the key difference?",
      "options": [
        "monetary expansion shifts LM* and raises output; fiscal expansion shifts IS* and is offset by appreciation",
        "both policies shift LM* and raise output by the same amount",
        "fiscal expansion depreciates the exchange rate while monetary expansion appreciates it",
        "neither policy can move the exchange rate under floating rates"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "finalBoss",
      "conceptCluster": "floating_mundell_fleming_policy",
      "primarySkill": "compare_fiscal_monetary_floating",
      "repairSkill": "compare_fiscal_monetary_floating",
      "feedback": "The two policies move different curves and use different exchange-rate channels."
    },
    {
      "id": 4012,
      "q": "A country insists on a fixed exchange rate and free capital mobility. What happens to independent monetary policy?",
      "options": [
        "it must be sacrificed because the central bank must defend the peg",
        "it becomes stronger because capital moves freely",
        "it is preserved because the exchange rate is fixed by law",
        "it replaces fiscal policy as the main stabilization tool"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "definition",
      "objective": "LO14.3",
      "difficulty": "finalBoss",
      "conceptCluster": "trinity_regime_tradeoffs",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The impossible trinity says a country can choose only two of the three goals."
    },
    {
      "id": 4013,
      "q": "Refer to the image above. Which side preserves independent monetary policy and free capital mobility?",
      "options": [
        "side 2",
        "side 1",
        "side 3",
        "all three sides"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "graph",
      "objective": "LO14.3",
      "difficulty": "finalBoss",
      "conceptCluster": "trinity_regime_tradeoffs",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Side 2 connects independent monetary policy with free capital mobility, which means the fixed exchange rate must be sacrificed.",
      "image": "impossibletrinity.png"
    },
    {
      "id": 4014,
      "q": "A fixed-rate country faces depreciation pressure. Which central-bank action defends the peg but tightens domestic conditions?",
      "options": [
        "sell foreign reserves and buy domestic currency",
        "buy foreign reserves and sell domestic currency",
        "increase money growth and allow depreciation",
        "shift IS* right through tax cuts"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "multi-step",
      "objective": "LO14.3",
      "difficulty": "finalBoss",
      "conceptCluster": "trinity_regime_tradeoffs",
      "primarySkill": "fixed_exchange_rate_policy",
      "repairSkill": "fixed_exchange_rate_policy",
      "feedback": "To defend against depreciation, the central bank buys domestic currency, reducing the money supply."
    },
    {
      "id": 4015,
      "q": "In deriving aggregate demand from the Mundell-Fleming model, a lower price level causes which chain?",
      "options": [
        "higher real money balances, a rightward LM* shift, depreciation, higher net exports, and higher output",
        "lower real money balances, a leftward LM* shift, appreciation, lower net exports, and lower output",
        "a rightward IS* shift because government spending rises automatically",
        "a fixed exchange rate because the price level has changed"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "difficulty": "finalBoss",
      "conceptCluster": "ad_derivation_open_economy",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Lower P raises M/P, shifts LM* right, lowers the exchange rate, raises net exports, and raises Y."
    },
    {
      "id": 4016,
      "q": "Refer to the image above. The aggregate demand curve connects different price levels to output because...",
      "options": [
        "each price level changes real money balances and therefore the LM* position",
        "each price level changes government spending by law",
        "each price level changes the world interest rate in the small economy",
        "each price level fixes net exports at zero"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "difficulty": "finalBoss",
      "conceptCluster": "ad_derivation_open_economy",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "The left panel shows price-level changes moving LM*. The right panel traces the implied aggregate demand curve.",
      "image": "mundell_adas.png"
    },
    {
      "id": 4017,
      "q": "In a large open economy, fiscal expansion raises the domestic interest rate. Why does that make the result different from a small open economy?",
      "options": [
        "investment and capital flows both respond because the domestic interest rate is no longer pinned by r*",
        "the trade balance is fixed because NX must equal zero",
        "monetary policy becomes impossible under all exchange-rate regimes",
        "the national income identity no longer holds"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "finalBoss",
      "conceptCluster": "large_open_policy_synthesis",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "A large open economy is big enough to move the domestic interest rate, so investment and capital flows respond."
    }
  ],
  "legendaryBoss": [
    {
      "id": 9100,
      "q": "A country has S = 1,200 and I = 1,500. A fiscal consolidation raises saving by 250 while an investment boom raises investment by 100. What happens to net exports?",
      "options": [
        "net exports rise by 150, moving from -300 to -150",
        "net exports fall by 350, moving from -300 to -650",
        "net exports rise by 350, moving from -300 to 50",
        "net exports are unchanged because both saving and investment rose"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "calculation",
      "objective": "LO6.2",
      "difficulty": "legendaryBoss",
      "conceptCluster": "identity_synthesis",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "Initial NX is -300. New S is 1,450 and new I is 1,600, so new NX is -150."
    },
    {
      "id": 9101,
      "q": "A trade deficit shrinks while investment is unchanged. What must have happened to national saving?",
      "options": [
        "national saving rose",
        "national saving fell",
        "national saving became irrelevant",
        "national saving must equal zero"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "multi-step",
      "objective": "LO6.2",
      "difficulty": "legendaryBoss",
      "conceptCluster": "identity_synthesis",
      "primarySkill": "saving_investment_capital_flows",
      "repairSkill": "saving_investment_capital_flows",
      "feedback": "NX = S - I. If I is unchanged and net exports rise, S must rise."
    },
    {
      "id": 9102,
      "q": "A student computes NX correctly but says NCO has the opposite sign. What is the correction?",
      "options": [
        "NX and NCO are equal in the accounting identity",
        "NCO is always positive even when NX is negative",
        "NCO equals imports minus exports",
        "NCO only appears in closed-economy models"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "trap",
      "objective": "LO6.1",
      "difficulty": "legendaryBoss",
      "conceptCluster": "identity_synthesis",
      "primarySkill": "open_economy_identities",
      "repairSkill": "open_economy_identities",
      "feedback": "Net exports equal net capital outflow. The signs move together."
    },
    {
      "id": 9103,
      "q": "A domestic budget deficit and a rise in investment demand hit at the same time in a small open economy. What is the combined pressure?",
      "options": [
        "S - I falls from both sides, so net exports fall and the real exchange rate appreciates",
        "S - I rises from both sides, so net exports rise and the real exchange rate depreciates",
        "the two shocks cancel because saving and investment always move together",
        "the world interest rate rises, leaving net exports unchanged"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "integration",
      "objective": "LO6.5",
      "difficulty": "legendaryBoss",
      "conceptCluster": "small_open_policy_synthesis",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Lower saving and higher investment both reduce S - I."
    },
    {
      "id": 9104,
      "q": "Refer to the image above. Moving from E to A and from E to I both involve a change in the real exchange rate. Which interpretation separates them?",
      "options": [
        "E to A reflects lower S - I; E to I reflects higher S - I",
        "E to A reflects higher S - I; E to I reflects lower S - I",
        "both movements are tariff shifts",
        "both movements require the world interest rate to change"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "legendaryBoss",
      "conceptCluster": "small_open_policy_synthesis",
      "primarySkill": "trace_saving_investment_shifts",
      "repairSkill": "trace_saving_investment_shifts",
      "feedback": "Left and right shifts of the vertical S - I line have opposite trade-balance effects.",
      "image": "rer_changes.png"
    },
    {
      "id": 9105,
      "q": "Foreign fiscal contraction lowers the world interest rate while domestic fiscal expansion lowers saving. Why is the net effect not automatic?",
      "options": [
        "one shock raises investment through lower r*, while the other lowers S - I through lower saving",
        "both shocks increase saving by the same amount",
        "foreign policy cannot affect a small open economy",
        "domestic fiscal policy only changes the price level"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "integration",
      "objective": "LO6.5",
      "difficulty": "legendaryBoss",
      "conceptCluster": "small_open_policy_synthesis",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "The shocks push different pieces of the model. You have to trace saving and investment separately."
    },
    {
      "id": 9106,
      "q": "A tariff shifts the net-exports schedule right, but S - I is unchanged. What is the correct final lesson?",
      "options": [
        "the real exchange rate appreciates enough to keep net exports at the S - I level",
        "net exports must rise because imports mechanically fall",
        "saving rises because tariffs raise government revenue",
        "investment falls because tariffs change the world interest rate"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "trap",
      "objective": "LO6.5",
      "difficulty": "legendaryBoss",
      "conceptCluster": "trade_policy_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Trade policy changes the real exchange rate, not the underlying S - I position."
    },
    {
      "id": 9107,
      "q": "Refer to the image above. The tariff movement from B to A mainly demonstrates...",
      "options": [
        "a higher real exchange rate with net exports pinned by S - I",
        "a lower real exchange rate with a permanent trade surplus",
        "a rise in saving caused by the tariff",
        "a fall in the world interest rate"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "graph",
      "objective": "LO6.5",
      "difficulty": "legendaryBoss",
      "conceptCluster": "trade_policy_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The vertical S - I line pins net exports. The NX(R) shift changes R.",
      "image": "tradepolicies.png"
    },
    {
      "id": 9108,
      "q": "Under floating exchange rates, why does a tariff not raise output in the Mundell-Fleming model?",
      "options": [
        "currency appreciation offsets the direct net-export gain",
        "the central bank must reduce the money supply to defend a peg",
        "investment rises until output returns to zero",
        "the tariff directly shifts LM* left"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "multi-step",
      "objective": "LO14.3",
      "difficulty": "legendaryBoss",
      "conceptCluster": "trade_policy_offset",
      "primarySkill": "floating_trade_policy_offset",
      "repairSkill": "floating_trade_policy_offset",
      "feedback": "The IS* shift is neutralized by appreciation under floating rates."
    },
    {
      "id": 9109,
      "q": "Under floating exchange rates, a rise in money demand shifts LM* left. What is the chain?",
      "options": [
        "the exchange rate appreciates, net exports fall, and output falls",
        "the exchange rate depreciates, net exports rise, and output rises",
        "IS* shifts right and output is unchanged",
        "the central bank must buy foreign reserves to fix the exchange rate"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "multi-step",
      "objective": "LO14.1",
      "difficulty": "legendaryBoss",
      "conceptCluster": "floating_mf_policy",
      "primarySkill": "money_demand_shock",
      "repairSkill": "money_demand_shock",
      "feedback": "Higher money demand is contractionary in the Mundell-Fleming model."
    },
    {
      "id": 9110,
      "q": "Refer to the image above. Monetary expansion under floating exchange rates moves from B to C. Why does output rise?",
      "options": [
        "depreciation raises net exports as LM* shifts right",
        "appreciation raises imports and lowers output",
        "IS* shifts left because government spending falls",
        "the world interest rate rises above r*"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "legendaryBoss",
      "conceptCluster": "floating_mf_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "The LM* shift lowers the exchange rate and raises net exports.",
      "image": "islm_er_change.png"
    },
    {
      "id": 9111,
      "q": "Refer to the image above. Fiscal expansion under floating exchange rates moves from B to A. Why is output unchanged?",
      "options": [
        "appreciation crowds out net exports as IS* shifts right",
        "depreciation raises net exports enough to double output",
        "LM* shifts right automatically",
        "the price level falls immediately"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "graph",
      "objective": "LO14.1",
      "difficulty": "legendaryBoss",
      "conceptCluster": "floating_mf_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "The IS* shift is offset by appreciation, keeping output at Y*.",
      "image": "islm_exchangerates.png"
    },
    {
      "id": 9112,
      "q": "A country wants a fixed exchange rate, free capital mobility, and independent monetary policy. What is the verdict?",
      "options": [
        "impossible; one of the three goals must be given up",
        "possible only if exports exceed imports",
        "possible only if the country is small",
        "automatic under floating exchange rates"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "definition",
      "objective": "LO14.3",
      "difficulty": "legendaryBoss",
      "conceptCluster": "trinity_regime_synthesis",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The impossible trinity allows two goals, not all three."
    },
    {
      "id": 9113,
      "q": "Refer to the image above. Choosing side 1 preserves independent monetary policy and a fixed exchange rate. What is sacrificed?",
      "options": [
        "free capital mobility",
        "the fixed exchange rate",
        "independent monetary policy",
        "the national income identity"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "graph",
      "objective": "LO14.3",
      "difficulty": "legendaryBoss",
      "conceptCluster": "trinity_regime_synthesis",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Side 1 connects monetary independence and a fixed rate, so free capital mobility is the missing corner.",
      "image": "impossibletrinity.png"
    },
    {
      "id": 9114,
      "q": "In a fixed-rate regime, why can fiscal policy be more powerful than under floating rates?",
      "options": [
        "the central bank accommodates the pressure to maintain the peg, reinforcing the IS* shift",
        "the exchange rate freely appreciates and cancels the IS* shift",
        "monetary policy becomes independent and offsets fiscal policy",
        "net exports are no longer part of aggregate demand"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "integration",
      "objective": "LO14.3",
      "difficulty": "legendaryBoss",
      "conceptCluster": "trinity_regime_synthesis",
      "primarySkill": "fixed_exchange_rate_policy",
      "repairSkill": "fixed_exchange_rate_policy",
      "feedback": "Under fixed rates, defending the peg can force monetary accommodation."
    },
    {
      "id": 9115,
      "q": "In the open-economy aggregate demand derivation, what is the essential reason lower P raises Y?",
      "options": [
        "lower P raises M/P, shifts LM* right, depreciates the currency, and raises net exports",
        "lower P shifts IS* left because consumption falls",
        "lower P raises the world interest rate and lowers investment",
        "lower P fixes the exchange rate and eliminates net exports"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "multi-step",
      "objective": "LO14.4",
      "difficulty": "legendaryBoss",
      "conceptCluster": "ad_derivation_synthesis",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "The aggregate demand channel runs through real money balances and the exchange rate."
    },
    {
      "id": 9116,
      "q": "Refer to the image above. Moving from A to C in the left panel corresponds to what in the right panel?",
      "options": [
        "moving down along the aggregate demand curve from high P/low Y to low P/high Y",
        "shifting aggregate demand left because net exports fall",
        "moving up along aggregate demand because the price level rises",
        "shifting LRAS because monetary policy changed potential output"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "graph",
      "objective": "LO14.4",
      "difficulty": "legendaryBoss",
      "conceptCluster": "ad_derivation_synthesis",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Lower P raises real balances and output, producing movement along aggregate demand.",
      "image": "mundell_adas.png"
    },
    {
      "id": 9117,
      "q": "If the economy is temporarily beyond long-run output in the aggregate demand and aggregate supply panel, what adjustment closes the gap?",
      "options": [
        "the price level rises, real balances fall, LM* shifts left, and output returns toward LRAS",
        "the price level falls, real balances rise, LM* shifts right, and output moves farther from LRAS",
        "the real exchange rate is fixed, so no adjustment occurs",
        "investment demand shifts right until LRAS moves"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "integration",
      "objective": "LO14.4",
      "difficulty": "legendaryBoss",
      "conceptCluster": "ad_derivation_synthesis",
      "primarySkill": "long_run_price_adjustment",
      "repairSkill": "long_run_price_adjustment",
      "feedback": "Long-run adjustment works through the price level, real balances, and LM*."
    },
    {
      "id": 9118,
      "q": "Capital flight raises the risk premium and causes depreciation. Why is the resulting rise in net exports not simply good news?",
      "options": [
        "it may reflect crisis-driven capital outflow and reduced confidence, not stronger fundamentals",
        "it proves domestic investment has risen",
        "it means imports now exceed exports by a larger amount",
        "it means the country has become a closed economy"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "trap",
      "objective": "LO6.5",
      "difficulty": "legendaryBoss",
      "conceptCluster": "capital_flight_synthesis",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "A crisis can improve net exports mechanically through depreciation while making the economy worse off."
    },
    {
      "id": 9119,
      "q": "Capital flight in a large open economy can raise the interest rate and depreciate the currency. Which pair of effects is most plausible?",
      "options": [
        "investment falls and net exports rise",
        "investment rises and net exports fall",
        "investment is fixed and net exports are fixed",
        "saving disappears from the identity"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "multi-step",
      "objective": "LO6.5",
      "difficulty": "legendaryBoss",
      "conceptCluster": "capital_flight_synthesis",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "Higher r crowds out investment, while depreciation tends to raise net exports."
    },
    {
      "id": 9120,
      "q": "A policymaker celebrates depreciation because exports rise. What question should the Custodian ask next?",
      "options": [
        "why the currency depreciated and whether it reflects a harmful capital-flow shock",
        "whether imports should be counted as exports",
        "whether depreciation eliminates the national income identity",
        "whether the economy has no exchange rate"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "trap",
      "objective": "LO6.5",
      "difficulty": "legendaryBoss",
      "conceptCluster": "capital_flight_synthesis",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "The mechanism matters. Depreciation from crisis is not the same as healthy competitiveness."
    },
    {
      "id": 9121,
      "q": "A real appreciation usually puts what pressure on net exports, holding other forces constant?",
      "options": [
        "net exports fall because domestic goods become relatively more expensive",
        "net exports rise because imports become harder to buy",
        "net exports become equal to government spending",
        "net exports stop depending on relative prices"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "definition",
      "objective": "LO6.4",
      "difficulty": "legendaryBoss",
      "conceptCluster": "exchange_rate_synthesis",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "A real appreciation makes domestic goods relatively expensive and tends to reduce net exports."
    },
    {
      "id": 9122,
      "q": "A real depreciation raises net exports only if you keep which distinction clear?",
      "options": [
        "relative price movement versus the reason the currency moved",
        "exports versus government purchases only",
        "fixed exchange rates versus no exchange rates",
        "saving versus consumption preferences only"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "trap",
      "objective": "LO6.4",
      "difficulty": "legendaryBoss",
      "conceptCluster": "exchange_rate_synthesis",
      "primarySkill": "exchange_rate_adjustment",
      "repairSkill": "exchange_rate_adjustment",
      "feedback": "Depreciation changes relative prices, but the underlying shock still matters."
    },
    {
      "id": 9123,
      "q": "If the nominal exchange rate rises while domestic and foreign prices are unchanged, what happens to the real exchange rate?",
      "options": [
        "it rises in the same direction as the nominal exchange rate",
        "it falls because prices are unchanged",
        "it becomes equal to net exports",
        "it cannot be calculated"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "calculation",
      "objective": "LO6.4",
      "difficulty": "legendaryBoss",
      "conceptCluster": "exchange_rate_synthesis",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "With P and P* unchanged, ε = eP/P* moves with e."
    },
    {
      "id": 9124,
      "q": "In a large open economy, why is fiscal expansion not identical to the small-open-economy case?",
      "options": [
        "the domestic interest rate can rise, changing investment and capital flows",
        "the domestic interest rate is fixed forever at r*",
        "saving and investment disappear from the model",
        "net exports cannot change"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "legendaryBoss",
      "conceptCluster": "large_open_policy_synthesis",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "Large economies can influence the interest rate, so the adjustment has more moving parts."
    },
    {
      "id": 9125,
      "q": "Compared with a small open economy, why is investment more directly affected by fiscal expansion in a large open economy?",
      "options": [
        "because the higher domestic interest rate crowds out investment",
        "because the world interest rate is legally fixed by the country",
        "because net exports must be zero",
        "because fiscal policy shifts LM* instead of saving"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "multi-step",
      "objective": "LO14.1",
      "difficulty": "legendaryBoss",
      "conceptCluster": "large_open_policy_synthesis",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "When r rises, investment falls along the investment-demand curve."
    },
    {
      "id": 9126,
      "q": "A large open economy faces expansionary monetary policy. Why can the exchange-rate and interest-rate channels both matter?",
      "options": [
        "the policy can lower r, stimulate investment, affect capital flows, and depreciate the currency",
        "the policy only changes government spending",
        "the policy fixes net exports at zero",
        "the policy has no effect because large economies are closed"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "legendaryBoss",
      "conceptCluster": "large_open_policy_synthesis",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "Large-open-economy policy blends interest-rate and exchange-rate channels."
    },
    {
      "id": 9127,
      "q": "Which answer best separates Chapter 6 from the Mundell-Fleming model?",
      "options": [
        "Chapter 6 focuses on long-run S - I and real exchange rates; the Mundell-Fleming model adds short-run output and IS*/LM*",
        "Chapter 6 ignores net exports, while the Mundell-Fleming model ignores exchange rates",
        "Chapter 6 assumes fixed prices and the Mundell-Fleming model assumes flexible prices only",
        "the two models give identical answers to every policy question"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "legendaryBoss",
      "conceptCluster": "model_comparison_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Chapter 6 is the long-run open-economy baseline; the Mundell-Fleming model is the short-run IS-LM extension."
    },
    {
      "id": 9128,
      "q": "A student says, “Fiscal policy always raises output.” Which model comparison gives the correction?",
      "options": [
        "under floating-rate Mundell-Fleming model logic, appreciation can crowd out net exports and leave output unchanged",
        "under all models, fiscal policy only changes the money supply",
        "under Chapter 6, fiscal policy directly shifts aggregate demand only",
        "under a fixed exchange rate, fiscal policy is always neutral"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "trap",
      "objective": "LO14.3",
      "difficulty": "legendaryBoss",
      "conceptCluster": "model_comparison_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Policy effects depend on the exchange-rate regime and the model frame."
    },
    {
      "id": 9129,
      "q": "The Custodian asks for the cleanest final rule. Which answer survives across the Citadel?",
      "options": [
        "start with the model assumption, then trace the identity, curve shift, exchange-rate movement, and final variable",
        "start with the answer that names the most variables",
        "assume every policy raises output unless a graph says otherwise",
        "ignore the exchange-rate regime because it only affects labels"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "integration",
      "objective": "LO14.1",
      "difficulty": "legendaryBoss",
      "conceptCluster": "model_comparison_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "The final boss tests chain logic: model, identity, shock, curve, exchange rate, and outcome."
    }
  ]
};

window.microSkillRepairPools = {
  "open_economy_identity": [
    {
      "q": "For open-economy identity, what should be the first move?",
      "options": [
        "start from Y = C + I + G + NX or S = I + NCO",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "repair",
      "objective": "LO6.1",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Repair starts by anchoring the specific mechanism: start from Y = C + I + G + NX or S = I + NCO.",
      "id": 5000,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks open-economy identity?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "repair",
      "objective": "LO6.1",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "The first wrong link usually wrecks the final answer in open-economy identity questions.",
      "id": 5001,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a open-economy identity question?",
      "options": [
        "it asks you to start from Y = C + I + G + NX or S = I + NCO",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "repair",
      "objective": "LO6.1",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "The clue is the model task: start from Y = C + I + G + NX or S = I + NCO.",
      "id": 5002,
      "difficulty": "repair"
    }
  ],
  "calculate_nx_from_s_i": [
    {
      "q": "For NX from S and I, what should be the first move?",
      "options": [
        "use NX = S - I and keep the sign",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "repair",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "Repair starts by anchoring the specific mechanism: use NX = S - I and keep the sign.",
      "id": 5003,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks NX from S and I?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "repair",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "The first wrong link usually wrecks the final answer in NX from S and I questions.",
      "id": 5004,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a NX from S and I question?",
      "options": [
        "it asks you to use NX = S - I and keep the sign",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "repair",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "The clue is the model task: use NX = S - I and keep the sign.",
      "id": 5005,
      "difficulty": "repair"
    }
  ],
  "calculate_nx_from_y_c_i_g": [
    {
      "q": "For NX from Y, C, I, and G, what should be the first move?",
      "options": [
        "rearrange Y = C + I + G + NX",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "repair",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "Repair starts by anchoring the specific mechanism: rearrange Y = C + I + G + NX.",
      "id": 5006,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks NX from Y, C, I, and G?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "repair",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "The first wrong link usually wrecks the final answer in NX from Y, C, I, and G questions.",
      "id": 5007,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a NX from Y, C, I, and G question?",
      "options": [
        "it asks you to rearrange Y = C + I + G + NX",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "repair",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "The clue is the model task: rearrange Y = C + I + G + NX.",
      "id": 5008,
      "difficulty": "repair"
    }
  ],
  "calculate_net_exports": [
    {
      "q": "For net exports from trade data, what should be the first move?",
      "options": [
        "subtract imports from exports",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "repair",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "Repair starts by anchoring the specific mechanism: subtract imports from exports.",
      "id": 5009,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks net exports from trade data?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "repair",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "The first wrong link usually wrecks the final answer in net exports from trade data questions.",
      "id": 5010,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a net exports from trade data question?",
      "options": [
        "it asks you to subtract imports from exports",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "repair",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "The clue is the model task: subtract imports from exports.",
      "id": 5011,
      "difficulty": "repair"
    }
  ],
  "small_open_assumption": [
    {
      "q": "For small-open-economy assumption, what should be the first move?",
      "options": [
        "remember the country takes r* as given",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "repair",
      "objective": "LO6.3",
      "conceptCluster": "small_open_assumption",
      "primarySkill": "small_open_assumption",
      "repairSkill": "small_open_assumption",
      "feedback": "Repair starts by anchoring the specific mechanism: remember the country takes r* as given.",
      "id": 5012,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks small-open-economy assumption?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "repair",
      "objective": "LO6.3",
      "conceptCluster": "small_open_assumption",
      "primarySkill": "small_open_assumption",
      "repairSkill": "small_open_assumption",
      "feedback": "The first wrong link usually wrecks the final answer in small-open-economy assumption questions.",
      "id": 5013,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a small-open-economy assumption question?",
      "options": [
        "it asks you to remember the country takes r* as given",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "repair",
      "objective": "LO6.3",
      "conceptCluster": "small_open_assumption",
      "primarySkill": "small_open_assumption",
      "repairSkill": "small_open_assumption",
      "feedback": "The clue is the model task: remember the country takes r* as given.",
      "id": 5014,
      "difficulty": "repair"
    }
  ],
  "world_interest_rate": [
    {
      "q": "For world interest rate movement, what should be the first move?",
      "options": [
        "move along I(r) when r* changes",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "repair",
      "objective": "LO6.3",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "Repair starts by anchoring the specific mechanism: move along I(r) when r* changes.",
      "id": 5015,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks world interest rate movement?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "repair",
      "objective": "LO6.3",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "The first wrong link usually wrecks the final answer in world interest rate movement questions.",
      "id": 5016,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a world interest rate movement question?",
      "options": [
        "it asks you to move along I(r) when r* changes",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "repair",
      "objective": "LO6.3",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "The clue is the model task: move along I(r) when r* changes.",
      "id": 5017,
      "difficulty": "repair"
    }
  ],
  "trade_balance_terms": [
    {
      "q": "For surplus versus deficit, what should be the first move?",
      "options": [
        "read the sign of NX",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "trade_balance_terms",
      "primarySkill": "trade_balance_terms",
      "repairSkill": "trade_balance_terms",
      "feedback": "Repair starts by anchoring the specific mechanism: read the sign of NX.",
      "id": 5018,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks surplus versus deficit?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "trade_balance_terms",
      "primarySkill": "trade_balance_terms",
      "repairSkill": "trade_balance_terms",
      "feedback": "The first wrong link usually wrecks the final answer in surplus versus deficit questions.",
      "id": 5019,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a surplus versus deficit question?",
      "options": [
        "it asks you to read the sign of NX",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "trade_balance_terms",
      "primarySkill": "trade_balance_terms",
      "repairSkill": "trade_balance_terms",
      "feedback": "The clue is the model task: read the sign of NX.",
      "id": 5020,
      "difficulty": "repair"
    }
  ],
  "nominal_vs_real_exchange_rate": [
    {
      "q": "For nominal versus real exchange rate, what should be the first move?",
      "options": [
        "separate currency prices from relative goods prices",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "nominal_vs_real_exchange_rate",
      "primarySkill": "nominal_vs_real_exchange_rate",
      "repairSkill": "nominal_vs_real_exchange_rate",
      "feedback": "Repair starts by anchoring the specific mechanism: separate currency prices from relative goods prices.",
      "id": 5021,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks nominal versus real exchange rate?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "nominal_vs_real_exchange_rate",
      "primarySkill": "nominal_vs_real_exchange_rate",
      "repairSkill": "nominal_vs_real_exchange_rate",
      "feedback": "The first wrong link usually wrecks the final answer in nominal versus real exchange rate questions.",
      "id": 5022,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a nominal versus real exchange rate question?",
      "options": [
        "it asks you to separate currency prices from relative goods prices",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "nominal_vs_real_exchange_rate",
      "primarySkill": "nominal_vs_real_exchange_rate",
      "repairSkill": "nominal_vs_real_exchange_rate",
      "feedback": "The clue is the model task: separate currency prices from relative goods prices.",
      "id": 5023,
      "difficulty": "repair"
    }
  ],
  "calculate_real_exchange_rate": [
    {
      "q": "For real exchange rate calculation, what should be the first move?",
      "options": [
        "use ε = eP/P* or rearrange it",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "Repair starts by anchoring the specific mechanism: use ε = eP/P* or rearrange it.",
      "id": 5024,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks real exchange rate calculation?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "The first wrong link usually wrecks the final answer in real exchange rate calculation questions.",
      "id": 5025,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a real exchange rate calculation question?",
      "options": [
        "it asks you to use ε = eP/P* or rearrange it",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "The clue is the model task: use ε = eP/P* or rearrange it.",
      "id": 5026,
      "difficulty": "repair"
    }
  ],
  "appreciation_nx": [
    {
      "q": "For appreciation and NX, what should be the first move?",
      "options": [
        "appreciation makes domestic goods relatively expensive",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "appreciation_nx",
      "primarySkill": "appreciation_nx",
      "repairSkill": "appreciation_nx",
      "feedback": "Repair starts by anchoring the specific mechanism: appreciation makes domestic goods relatively expensive.",
      "id": 5027,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks appreciation and NX?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "appreciation_nx",
      "primarySkill": "appreciation_nx",
      "repairSkill": "appreciation_nx",
      "feedback": "The first wrong link usually wrecks the final answer in appreciation and NX questions.",
      "id": 5028,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a appreciation and NX question?",
      "options": [
        "it asks you to appreciation makes domestic goods relatively expensive",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "appreciation_nx",
      "primarySkill": "appreciation_nx",
      "repairSkill": "appreciation_nx",
      "feedback": "The clue is the model task: appreciation makes domestic goods relatively expensive.",
      "id": 5029,
      "difficulty": "repair"
    }
  ],
  "depreciation_nx": [
    {
      "q": "For depreciation and NX, what should be the first move?",
      "options": [
        "depreciation makes domestic goods relatively cheap",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "depreciation_nx",
      "primarySkill": "depreciation_nx",
      "repairSkill": "depreciation_nx",
      "feedback": "Repair starts by anchoring the specific mechanism: depreciation makes domestic goods relatively cheap.",
      "id": 5030,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks depreciation and NX?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "depreciation_nx",
      "primarySkill": "depreciation_nx",
      "repairSkill": "depreciation_nx",
      "feedback": "The first wrong link usually wrecks the final answer in depreciation and NX questions.",
      "id": 5031,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a depreciation and NX question?",
      "options": [
        "it asks you to depreciation makes domestic goods relatively cheap",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "repair",
      "objective": "LO6.4",
      "conceptCluster": "depreciation_nx",
      "primarySkill": "depreciation_nx",
      "repairSkill": "depreciation_nx",
      "feedback": "The clue is the model task: depreciation makes domestic goods relatively cheap.",
      "id": 5032,
      "difficulty": "repair"
    }
  ],
  "trace_domestic_fiscal_expansion": [
    {
      "q": "For domestic fiscal policy chain, what should be the first move?",
      "options": [
        "trace saving to S - I to R to NX",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Repair starts by anchoring the specific mechanism: trace saving to S - I to R to NX.",
      "id": 5033,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks domestic fiscal policy chain?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "The first wrong link usually wrecks the final answer in domestic fiscal policy chain questions.",
      "id": 5034,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a domestic fiscal policy chain question?",
      "options": [
        "it asks you to trace saving to S - I to R to NX",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "The clue is the model task: trace saving to S - I to R to NX.",
      "id": 5035,
      "difficulty": "repair"
    }
  ],
  "investment_shift_trade_balance": [
    {
      "q": "For investment demand shift, what should be the first move?",
      "options": [
        "higher investment lowers S - I when saving is fixed",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "Repair starts by anchoring the specific mechanism: higher investment lowers S - I when saving is fixed.",
      "id": 5036,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks investment demand shift?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "The first wrong link usually wrecks the final answer in investment demand shift questions.",
      "id": 5037,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a investment demand shift question?",
      "options": [
        "it asks you to higher investment lowers S - I when saving is fixed",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "The clue is the model task: higher investment lowers S - I when saving is fixed.",
      "id": 5038,
      "difficulty": "repair"
    }
  ],
  "tariff_exchange_rate_offset": [
    {
      "q": "For tariff exchange-rate offset, what should be the first move?",
      "options": [
        "NX(R) shifts but R adjusts at fixed S - I",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Repair starts by anchoring the specific mechanism: NX(R) shifts but R adjusts at fixed S - I.",
      "id": 5039,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks tariff exchange-rate offset?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The first wrong link usually wrecks the final answer in tariff exchange-rate offset questions.",
      "id": 5040,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a tariff exchange-rate offset question?",
      "options": [
        "it asks you to NX(R) shifts but R adjusts at fixed S - I",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The clue is the model task: NX(R) shifts but R adjusts at fixed S - I.",
      "id": 5041,
      "difficulty": "repair"
    }
  ],
  "capital_flight_exchange_rate": [
    {
      "q": "For capital flight, what should be the first move?",
      "options": [
        "capital outflow pressure depreciates the currency",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "capital_flight_exchange_rate",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "Repair starts by anchoring the specific mechanism: capital outflow pressure depreciates the currency.",
      "id": 5042,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks capital flight?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "capital_flight_exchange_rate",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "The first wrong link usually wrecks the final answer in capital flight questions.",
      "id": 5043,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a capital flight question?",
      "options": [
        "it asks you to capital outflow pressure depreciates the currency",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "capital_flight_exchange_rate",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "The clue is the model task: capital outflow pressure depreciates the currency.",
      "id": 5044,
      "difficulty": "repair"
    }
  ],
  "mundell_fleming_assumptions": [
    {
      "q": "For Mundell-Fleming model assumptions, what should be the first move?",
      "options": [
        "small open economy, perfect capital mobility, r = r*",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "mundell_fleming_model",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "mundell_fleming_assumptions",
      "primarySkill": "mundell_fleming_assumptions",
      "repairSkill": "mundell_fleming_assumptions",
      "feedback": "Repair starts by anchoring the specific mechanism: small open economy, perfect capital mobility, r = r*.",
      "id": 5045,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks Mundell-Fleming model assumptions?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "mundell_fleming_model",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "mundell_fleming_assumptions",
      "primarySkill": "mundell_fleming_assumptions",
      "repairSkill": "mundell_fleming_assumptions",
      "feedback": "The first wrong link usually wrecks the final answer in Mundell-Fleming model assumptions questions.",
      "id": 5046,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a Mundell-Fleming model assumptions question?",
      "options": [
        "it asks you to small open economy, perfect capital mobility, r = r*",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "mundell_fleming_model",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "mundell_fleming_assumptions",
      "primarySkill": "mundell_fleming_assumptions",
      "repairSkill": "mundell_fleming_assumptions",
      "feedback": "The clue is the model task: small open economy, perfect capital mobility, r = r*.",
      "id": 5047,
      "difficulty": "repair"
    }
  ],
  "is_star_exchange_rate": [
    {
      "q": "For IS* exchange-rate channel, what should be the first move?",
      "options": [
        "appreciation reduces NX and planned expenditure",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "is_star_exchange_rate",
      "primarySkill": "is_star_exchange_rate",
      "repairSkill": "is_star_exchange_rate",
      "feedback": "Repair starts by anchoring the specific mechanism: appreciation reduces NX and planned expenditure.",
      "id": 5048,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks IS* exchange-rate channel?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "is_star_exchange_rate",
      "primarySkill": "is_star_exchange_rate",
      "repairSkill": "is_star_exchange_rate",
      "feedback": "The first wrong link usually wrecks the final answer in IS* exchange-rate channel questions.",
      "id": 5049,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a IS* exchange-rate channel question?",
      "options": [
        "it asks you to appreciation reduces NX and planned expenditure",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "is_star_exchange_rate",
      "primarySkill": "is_star_exchange_rate",
      "repairSkill": "is_star_exchange_rate",
      "feedback": "The clue is the model task: appreciation reduces NX and planned expenditure.",
      "id": 5050,
      "difficulty": "repair"
    }
  ],
  "lm_star_money_market": [
    {
      "q": "For LM* money-market channel, what should be the first move?",
      "options": [
        "M/P and r* determine income in the money market",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "lm_star_money_market",
      "primarySkill": "lm_star_money_market",
      "repairSkill": "lm_star_money_market",
      "feedback": "Repair starts by anchoring the specific mechanism: M/P and r* determine income in the money market.",
      "id": 5051,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks LM* money-market channel?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "lm_star_money_market",
      "primarySkill": "lm_star_money_market",
      "repairSkill": "lm_star_money_market",
      "feedback": "The first wrong link usually wrecks the final answer in LM* money-market channel questions.",
      "id": 5052,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a LM* money-market channel question?",
      "options": [
        "it asks you to M/P and r* determine income in the money market",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "lm_star_money_market",
      "primarySkill": "lm_star_money_market",
      "repairSkill": "lm_star_money_market",
      "feedback": "The clue is the model task: M/P and r* determine income in the money market.",
      "id": 5053,
      "difficulty": "repair"
    }
  ],
  "floating_fiscal_policy": [
    {
      "q": "For floating-rate fiscal policy, what should be the first move?",
      "options": [
        "IS* shifts but appreciation crowds out NX",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Repair starts by anchoring the specific mechanism: IS* shifts but appreciation crowds out NX.",
      "id": 5054,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks floating-rate fiscal policy?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "The first wrong link usually wrecks the final answer in floating-rate fiscal policy questions.",
      "id": 5055,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a floating-rate fiscal policy question?",
      "options": [
        "it asks you to IS* shifts but appreciation crowds out NX",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "The clue is the model task: IS* shifts but appreciation crowds out NX.",
      "id": 5056,
      "difficulty": "repair"
    }
  ],
  "floating_monetary_policy": [
    {
      "q": "For floating-rate monetary policy, what should be the first move?",
      "options": [
        "LM* shifts and depreciation raises NX",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Repair starts by anchoring the specific mechanism: LM* shifts and depreciation raises NX.",
      "id": 5057,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks floating-rate monetary policy?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "The first wrong link usually wrecks the final answer in floating-rate monetary policy questions.",
      "id": 5058,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a floating-rate monetary policy question?",
      "options": [
        "it asks you to LM* shifts and depreciation raises NX",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "The clue is the model task: LM* shifts and depreciation raises NX.",
      "id": 5059,
      "difficulty": "repair"
    }
  ],
  "trade_policy_under_floating": [
    {
      "q": "For trade policy under floating rates, what should be the first move?",
      "options": [
        "appreciation offsets the initial IS* increase",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "trade_policy_under_floating",
      "primarySkill": "trade_policy_under_floating",
      "repairSkill": "trade_policy_under_floating",
      "feedback": "Repair starts by anchoring the specific mechanism: appreciation offsets the initial IS* increase.",
      "id": 5060,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks trade policy under floating rates?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "trade_policy_under_floating",
      "primarySkill": "trade_policy_under_floating",
      "repairSkill": "trade_policy_under_floating",
      "feedback": "The first wrong link usually wrecks the final answer in trade policy under floating rates questions.",
      "id": 5061,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a trade policy under floating rates question?",
      "options": [
        "it asks you to appreciation offsets the initial IS* increase",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "trade_policy_under_floating",
      "primarySkill": "trade_policy_under_floating",
      "repairSkill": "trade_policy_under_floating",
      "feedback": "The clue is the model task: appreciation offsets the initial IS* increase.",
      "id": 5062,
      "difficulty": "repair"
    }
  ],
  "fixed_monetary_policy": [
    {
      "q": "For fixed-rate monetary policy, what should be the first move?",
      "options": [
        "monetary policy defends the peg",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Repair starts by anchoring the specific mechanism: monetary policy defends the peg.",
      "id": 5063,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks fixed-rate monetary policy?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "The first wrong link usually wrecks the final answer in fixed-rate monetary policy questions.",
      "id": 5064,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a fixed-rate monetary policy question?",
      "options": [
        "it asks you to monetary policy defends the peg",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "The clue is the model task: monetary policy defends the peg.",
      "id": 5065,
      "difficulty": "repair"
    }
  ],
  "fixed_fiscal_policy": [
    {
      "q": "For fixed-rate fiscal policy, what should be the first move?",
      "options": [
        "the money supply adjusts to defend the peg and amplify fiscal shifts",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "Repair starts by anchoring the specific mechanism: the money supply adjusts to defend the peg and amplify fiscal shifts.",
      "id": 5066,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks fixed-rate fiscal policy?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "The first wrong link usually wrecks the final answer in fixed-rate fiscal policy questions.",
      "id": 5067,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a fixed-rate fiscal policy question?",
      "options": [
        "it asks you to the money supply adjusts to defend the peg and amplify fiscal shifts",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "The clue is the model task: the money supply adjusts to defend the peg and amplify fiscal shifts.",
      "id": 5068,
      "difficulty": "repair"
    }
  ],
  "compare_fixed_floating": [
    {
      "q": "For fixed versus floating regimes, what should be the first move?",
      "options": [
        "ask whether e or M adjusts",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "Repair starts by anchoring the specific mechanism: ask whether e or M adjusts.",
      "id": 5069,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks fixed versus floating regimes?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "The first wrong link usually wrecks the final answer in fixed versus floating regimes questions.",
      "id": 5070,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a fixed versus floating regimes question?",
      "options": [
        "it asks you to ask whether e or M adjusts",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "The clue is the model task: ask whether e or M adjusts.",
      "id": 5071,
      "difficulty": "repair"
    }
  ],
  "impossible_trinity": [
    {
      "q": "For impossible trinity, what should be the first move?",
      "options": [
        "choose two goals and identify the sacrificed third",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Repair starts by anchoring the specific mechanism: choose two goals and identify the sacrificed third.",
      "id": 5072,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks impossible trinity?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The first wrong link usually wrecks the final answer in impossible trinity questions.",
      "id": 5073,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a impossible trinity question?",
      "options": [
        "it asks you to choose two goals and identify the sacrificed third",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "repair",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The clue is the model task: choose two goals and identify the sacrificed third.",
      "id": 5074,
      "difficulty": "repair"
    }
  ],
  "derive_ad_from_mf": [
    {
      "q": "For aggregate demand from Mundell-Fleming model, what should be the first move?",
      "options": [
        "P changes M/P, LM*, e, NX, and Y",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "repair",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Repair starts by anchoring the specific mechanism: P changes M/P, LM*, e, NX, and Y.",
      "id": 5075,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks aggregate demand from Mundell-Fleming model?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "repair",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "The first wrong link usually wrecks the final answer in aggregate demand from Mundell-Fleming model questions.",
      "id": 5076,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a aggregate demand from Mundell-Fleming model question?",
      "options": [
        "it asks you to P changes M/P, LM*, e, NX, and Y",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "repair",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "The clue is the model task: P changes M/P, LM*, e, NX, and Y.",
      "id": 5077,
      "difficulty": "repair"
    }
  ],
  "open_economy_ad_slope": [
    {
      "q": "For open-economy aggregate demand slope, what should be the first move?",
      "options": [
        "lower P raises Y through M/P and NX",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "repair",
      "objective": "LO14.4",
      "conceptCluster": "open_economy_ad_slope",
      "primarySkill": "open_economy_ad_slope",
      "repairSkill": "open_economy_ad_slope",
      "feedback": "Repair starts by anchoring the specific mechanism: lower P raises Y through M/P and NX.",
      "id": 5078,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks open-economy aggregate demand slope?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "repair",
      "objective": "LO14.4",
      "conceptCluster": "open_economy_ad_slope",
      "primarySkill": "open_economy_ad_slope",
      "repairSkill": "open_economy_ad_slope",
      "feedback": "The first wrong link usually wrecks the final answer in open-economy aggregate demand slope questions.",
      "id": 5079,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a open-economy aggregate demand slope question?",
      "options": [
        "it asks you to lower P raises Y through M/P and NX",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "repair",
      "objective": "LO14.4",
      "conceptCluster": "open_economy_ad_slope",
      "primarySkill": "open_economy_ad_slope",
      "repairSkill": "open_economy_ad_slope",
      "feedback": "The clue is the model task: lower P raises Y through M/P and NX.",
      "id": 5080,
      "difficulty": "repair"
    }
  ],
  "large_open_policy": [
    {
      "q": "For large-open-economy text chain, what should be the first move?",
      "options": [
        "remember r can move and capital flows still matter",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "Repair starts by anchoring the specific mechanism: remember r can move and capital flows still matter.",
      "id": 5081,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks large-open-economy text chain?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "The first wrong link usually wrecks the final answer in large-open-economy text chain questions.",
      "id": 5082,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a large-open-economy text chain question?",
      "options": [
        "it asks you to remember r can move and capital flows still matter",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "repair",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "The clue is the model task: remember r can move and capital flows still matter.",
      "id": 5083,
      "difficulty": "repair"
    }
  ],
  "foreign_fiscal_policy": [
    {
      "q": "For foreign fiscal policy, what should be the first move?",
      "options": [
        "foreign fiscal policy moves r* and domestic investment",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Repair starts by anchoring the specific mechanism: foreign fiscal policy moves r* and domestic investment.",
      "id": 5084,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks foreign fiscal policy?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "The first wrong link usually wrecks the final answer in foreign fiscal policy questions.",
      "id": 5085,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a foreign fiscal policy question?",
      "options": [
        "it asks you to foreign fiscal policy moves r* and domestic investment",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "The clue is the model task: foreign fiscal policy moves r* and domestic investment.",
      "id": 5086,
      "difficulty": "repair"
    }
  ],
  "open_economy_synthesis": [
    {
      "q": "For open-economy synthesis, what should be the first move?",
      "options": [
        "identify the model before tracing the chain",
        "pick the answer with the most words",
        "ignore the sign of NX",
        "treat fixed and floating regimes as the same"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Repair starts by anchoring the specific mechanism: identify the model before tracing the chain.",
      "id": 5087,
      "difficulty": "repair"
    },
    {
      "q": "Which mistake most often breaks open-economy synthesis?",
      "options": [
        "reversing the first model link",
        "checking the relevant identity",
        "following the exchange-rate channel",
        "using the graph label carefully"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "The first wrong link usually wrecks the final answer in open-economy synthesis questions.",
      "id": 5088,
      "difficulty": "repair"
    },
    {
      "q": "Which clue tells you this is a open-economy synthesis question?",
      "options": [
        "it asks you to identify the model before tracing the chain",
        "it mentions a random room number",
        "it uses long answer choices",
        "it avoids every macro variable"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "repair",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "The clue is the model task: identify the model before tracing the chain.",
      "id": 5089,
      "difficulty": "repair"
    }
  ]
};

window.microSkillBridgePools = {
  "open_economy_identity": [
    {
      "q": "After you identify open-economy identity, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "bridge",
      "objective": "LO6.1",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6000,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for open-economy identity?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "bridge",
      "objective": "LO6.1",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "The right answer should say what changes and why.",
      "id": 6001,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for open-economy identity, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "bridge",
      "objective": "LO6.1",
      "conceptCluster": "open_economy_identity",
      "primarySkill": "open_economy_identity",
      "repairSkill": "open_economy_identity",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6002,
      "difficulty": "bridge"
    }
  ],
  "calculate_nx_from_s_i": [
    {
      "q": "After you identify NX from S and I, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "bridge",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6003,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for NX from S and I?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "bridge",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "The right answer should say what changes and why.",
      "id": 6004,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for NX from S and I, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "bridge",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_s_i",
      "primarySkill": "calculate_nx_from_s_i",
      "repairSkill": "calculate_nx_from_s_i",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6005,
      "difficulty": "bridge"
    }
  ],
  "calculate_nx_from_y_c_i_g": [
    {
      "q": "After you identify NX from Y, C, I, and G, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "bridge",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6006,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for NX from Y, C, I, and G?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "bridge",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "The right answer should say what changes and why.",
      "id": 6007,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for NX from Y, C, I, and G, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "accounting_identities",
      "type": "bridge",
      "objective": "LO6.2",
      "conceptCluster": "calculate_nx_from_y_c_i_g",
      "primarySkill": "calculate_nx_from_y_c_i_g",
      "repairSkill": "calculate_nx_from_y_c_i_g",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6008,
      "difficulty": "bridge"
    }
  ],
  "calculate_net_exports": [
    {
      "q": "After you identify net exports from trade data, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "bridge",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6009,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for net exports from trade data?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "bridge",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "The right answer should say what changes and why.",
      "id": 6010,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for net exports from trade data, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "bridge",
      "objective": "LO6.2",
      "conceptCluster": "calculate_net_exports",
      "primarySkill": "calculate_net_exports",
      "repairSkill": "calculate_net_exports",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6011,
      "difficulty": "bridge"
    }
  ],
  "small_open_assumption": [
    {
      "q": "After you identify small-open-economy assumption, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "bridge",
      "objective": "LO6.3",
      "conceptCluster": "small_open_assumption",
      "primarySkill": "small_open_assumption",
      "repairSkill": "small_open_assumption",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6012,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for small-open-economy assumption?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "bridge",
      "objective": "LO6.3",
      "conceptCluster": "small_open_assumption",
      "primarySkill": "small_open_assumption",
      "repairSkill": "small_open_assumption",
      "feedback": "The right answer should say what changes and why.",
      "id": 6013,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for small-open-economy assumption, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "bridge",
      "objective": "LO6.3",
      "conceptCluster": "small_open_assumption",
      "primarySkill": "small_open_assumption",
      "repairSkill": "small_open_assumption",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6014,
      "difficulty": "bridge"
    }
  ],
  "world_interest_rate": [
    {
      "q": "After you identify world interest rate movement, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "bridge",
      "objective": "LO6.3",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6015,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for world interest rate movement?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "bridge",
      "objective": "LO6.3",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "The right answer should say what changes and why.",
      "id": 6016,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for world interest rate movement, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "small_open_world_interest_rate",
      "type": "bridge",
      "objective": "LO6.3",
      "conceptCluster": "world_interest_rate",
      "primarySkill": "world_interest_rate",
      "repairSkill": "world_interest_rate",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6017,
      "difficulty": "bridge"
    }
  ],
  "trade_balance_terms": [
    {
      "q": "After you identify surplus versus deficit, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "trade_balance_terms",
      "primarySkill": "trade_balance_terms",
      "repairSkill": "trade_balance_terms",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6018,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for surplus versus deficit?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "trade_balance_terms",
      "primarySkill": "trade_balance_terms",
      "repairSkill": "trade_balance_terms",
      "feedback": "The right answer should say what changes and why.",
      "id": 6019,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for surplus versus deficit, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "trade_balance_net_exports",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "trade_balance_terms",
      "primarySkill": "trade_balance_terms",
      "repairSkill": "trade_balance_terms",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6020,
      "difficulty": "bridge"
    }
  ],
  "nominal_vs_real_exchange_rate": [
    {
      "q": "After you identify nominal versus real exchange rate, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "nominal_vs_real_exchange_rate",
      "primarySkill": "nominal_vs_real_exchange_rate",
      "repairSkill": "nominal_vs_real_exchange_rate",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6021,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for nominal versus real exchange rate?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "nominal_vs_real_exchange_rate",
      "primarySkill": "nominal_vs_real_exchange_rate",
      "repairSkill": "nominal_vs_real_exchange_rate",
      "feedback": "The right answer should say what changes and why.",
      "id": 6022,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for nominal versus real exchange rate, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "nominal_vs_real_exchange_rate",
      "primarySkill": "nominal_vs_real_exchange_rate",
      "repairSkill": "nominal_vs_real_exchange_rate",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6023,
      "difficulty": "bridge"
    }
  ],
  "calculate_real_exchange_rate": [
    {
      "q": "After you identify real exchange rate calculation, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6024,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for real exchange rate calculation?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "The right answer should say what changes and why.",
      "id": 6025,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for real exchange rate calculation, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "real_exchange_rate",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "calculate_real_exchange_rate",
      "primarySkill": "calculate_real_exchange_rate",
      "repairSkill": "calculate_real_exchange_rate",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6026,
      "difficulty": "bridge"
    }
  ],
  "appreciation_nx": [
    {
      "q": "After you identify appreciation and NX, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "appreciation_nx",
      "primarySkill": "appreciation_nx",
      "repairSkill": "appreciation_nx",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6027,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for appreciation and NX?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "appreciation_nx",
      "primarySkill": "appreciation_nx",
      "repairSkill": "appreciation_nx",
      "feedback": "The right answer should say what changes and why.",
      "id": 6028,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for appreciation and NX, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "appreciation_nx",
      "primarySkill": "appreciation_nx",
      "repairSkill": "appreciation_nx",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6029,
      "difficulty": "bridge"
    }
  ],
  "depreciation_nx": [
    {
      "q": "After you identify depreciation and NX, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "depreciation_nx",
      "primarySkill": "depreciation_nx",
      "repairSkill": "depreciation_nx",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6030,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for depreciation and NX?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "depreciation_nx",
      "primarySkill": "depreciation_nx",
      "repairSkill": "depreciation_nx",
      "feedback": "The right answer should say what changes and why.",
      "id": 6031,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for depreciation and NX, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "exchange_rate_adjustment",
      "type": "bridge",
      "objective": "LO6.4",
      "conceptCluster": "depreciation_nx",
      "primarySkill": "depreciation_nx",
      "repairSkill": "depreciation_nx",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6032,
      "difficulty": "bridge"
    }
  ],
  "trace_domestic_fiscal_expansion": [
    {
      "q": "After you identify domestic fiscal policy chain, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6033,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for domestic fiscal policy chain?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "The right answer should say what changes and why.",
      "id": 6034,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for domestic fiscal policy chain, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "trace_domestic_fiscal_expansion",
      "primarySkill": "trace_domestic_fiscal_expansion",
      "repairSkill": "trace_domestic_fiscal_expansion",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6035,
      "difficulty": "bridge"
    }
  ],
  "investment_shift_trade_balance": [
    {
      "q": "After you identify investment demand shift, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6036,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for investment demand shift?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "The right answer should say what changes and why.",
      "id": 6037,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for investment demand shift, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "saving_investment_capital_flows",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "investment_shift_trade_balance",
      "primarySkill": "investment_shift_trade_balance",
      "repairSkill": "investment_shift_trade_balance",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6038,
      "difficulty": "bridge"
    }
  ],
  "tariff_exchange_rate_offset": [
    {
      "q": "After you identify tariff exchange-rate offset, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6039,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for tariff exchange-rate offset?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "The right answer should say what changes and why.",
      "id": 6040,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for tariff exchange-rate offset, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "tariff_exchange_rate_offset",
      "primarySkill": "tariff_exchange_rate_offset",
      "repairSkill": "tariff_exchange_rate_offset",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6041,
      "difficulty": "bridge"
    }
  ],
  "capital_flight_exchange_rate": [
    {
      "q": "After you identify capital flight, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "capital_flight_exchange_rate",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6042,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for capital flight?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "capital_flight_exchange_rate",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "The right answer should say what changes and why.",
      "id": 6043,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for capital flight, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "capital_flight",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "capital_flight_exchange_rate",
      "primarySkill": "capital_flight_exchange_rate",
      "repairSkill": "capital_flight_exchange_rate",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6044,
      "difficulty": "bridge"
    }
  ],
  "mundell_fleming_assumptions": [
    {
      "q": "After you identify Mundell-Fleming model assumptions, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "mundell_fleming_model",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "mundell_fleming_assumptions",
      "primarySkill": "mundell_fleming_assumptions",
      "repairSkill": "mundell_fleming_assumptions",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6045,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for Mundell-Fleming model assumptions?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "mundell_fleming_model",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "mundell_fleming_assumptions",
      "primarySkill": "mundell_fleming_assumptions",
      "repairSkill": "mundell_fleming_assumptions",
      "feedback": "The right answer should say what changes and why.",
      "id": 6046,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for Mundell-Fleming model assumptions, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "mundell_fleming_model",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "mundell_fleming_assumptions",
      "primarySkill": "mundell_fleming_assumptions",
      "repairSkill": "mundell_fleming_assumptions",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6047,
      "difficulty": "bridge"
    }
  ],
  "is_star_exchange_rate": [
    {
      "q": "After you identify IS* exchange-rate channel, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "is_star_exchange_rate",
      "primarySkill": "is_star_exchange_rate",
      "repairSkill": "is_star_exchange_rate",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6048,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for IS* exchange-rate channel?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "is_star_exchange_rate",
      "primarySkill": "is_star_exchange_rate",
      "repairSkill": "is_star_exchange_rate",
      "feedback": "The right answer should say what changes and why.",
      "id": 6049,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for IS* exchange-rate channel, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "is_star_exchange_rate",
      "primarySkill": "is_star_exchange_rate",
      "repairSkill": "is_star_exchange_rate",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6050,
      "difficulty": "bridge"
    }
  ],
  "lm_star_money_market": [
    {
      "q": "After you identify LM* money-market channel, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "lm_star_money_market",
      "primarySkill": "lm_star_money_market",
      "repairSkill": "lm_star_money_market",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6051,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for LM* money-market channel?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "lm_star_money_market",
      "primarySkill": "lm_star_money_market",
      "repairSkill": "lm_star_money_market",
      "feedback": "The right answer should say what changes and why.",
      "id": 6052,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for LM* money-market channel, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "mundell_fleming_is_lm",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "lm_star_money_market",
      "primarySkill": "lm_star_money_market",
      "repairSkill": "lm_star_money_market",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6053,
      "difficulty": "bridge"
    }
  ],
  "floating_fiscal_policy": [
    {
      "q": "After you identify floating-rate fiscal policy, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6054,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for floating-rate fiscal policy?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "The right answer should say what changes and why.",
      "id": 6055,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for floating-rate fiscal policy, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "floating_fiscal_policy",
      "primarySkill": "floating_fiscal_policy",
      "repairSkill": "floating_fiscal_policy",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6056,
      "difficulty": "bridge"
    }
  ],
  "floating_monetary_policy": [
    {
      "q": "After you identify floating-rate monetary policy, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6057,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for floating-rate monetary policy?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "The right answer should say what changes and why.",
      "id": 6058,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for floating-rate monetary policy, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "floating_exchange_policy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "floating_monetary_policy",
      "primarySkill": "floating_monetary_policy",
      "repairSkill": "floating_monetary_policy",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6059,
      "difficulty": "bridge"
    }
  ],
  "trade_policy_under_floating": [
    {
      "q": "After you identify trade policy under floating rates, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "trade_policy_under_floating",
      "primarySkill": "trade_policy_under_floating",
      "repairSkill": "trade_policy_under_floating",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6060,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for trade policy under floating rates?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "trade_policy_under_floating",
      "primarySkill": "trade_policy_under_floating",
      "repairSkill": "trade_policy_under_floating",
      "feedback": "The right answer should say what changes and why.",
      "id": 6061,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for trade policy under floating rates, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "trade_policy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "trade_policy_under_floating",
      "primarySkill": "trade_policy_under_floating",
      "repairSkill": "trade_policy_under_floating",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6062,
      "difficulty": "bridge"
    }
  ],
  "fixed_monetary_policy": [
    {
      "q": "After you identify fixed-rate monetary policy, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6063,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for fixed-rate monetary policy?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "The right answer should say what changes and why.",
      "id": 6064,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for fixed-rate monetary policy, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "fixed_monetary_policy",
      "primarySkill": "fixed_monetary_policy",
      "repairSkill": "fixed_monetary_policy",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6065,
      "difficulty": "bridge"
    }
  ],
  "fixed_fiscal_policy": [
    {
      "q": "After you identify fixed-rate fiscal policy, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6066,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for fixed-rate fiscal policy?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "The right answer should say what changes and why.",
      "id": 6067,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for fixed-rate fiscal policy, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "fixed_exchange_policy",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "fixed_fiscal_policy",
      "primarySkill": "fixed_fiscal_policy",
      "repairSkill": "fixed_fiscal_policy",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6068,
      "difficulty": "bridge"
    }
  ],
  "compare_fixed_floating": [
    {
      "q": "After you identify fixed versus floating regimes, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6069,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for fixed versus floating regimes?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "The right answer should say what changes and why.",
      "id": 6070,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for fixed versus floating regimes, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "fixed_floating_exchange_regimes",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "compare_fixed_floating",
      "primarySkill": "compare_fixed_floating",
      "repairSkill": "compare_fixed_floating",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6071,
      "difficulty": "bridge"
    }
  ],
  "impossible_trinity": [
    {
      "q": "After you identify impossible trinity, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6072,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for impossible trinity?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "The right answer should say what changes and why.",
      "id": 6073,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for impossible trinity, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "impossible_trinity",
      "type": "bridge",
      "objective": "LO14.3",
      "conceptCluster": "impossible_trinity",
      "primarySkill": "impossible_trinity",
      "repairSkill": "impossible_trinity",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6074,
      "difficulty": "bridge"
    }
  ],
  "derive_ad_from_mf": [
    {
      "q": "After you identify aggregate demand from Mundell-Fleming model, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "bridge",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6075,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for aggregate demand from Mundell-Fleming model?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "bridge",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "The right answer should say what changes and why.",
      "id": 6076,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for aggregate demand from Mundell-Fleming model, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "bridge",
      "objective": "LO14.4",
      "conceptCluster": "derive_ad_from_mf",
      "primarySkill": "derive_ad_from_mf",
      "repairSkill": "derive_ad_from_mf",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6077,
      "difficulty": "bridge"
    }
  ],
  "open_economy_ad_slope": [
    {
      "q": "After you identify open-economy aggregate demand slope, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "bridge",
      "objective": "LO14.4",
      "conceptCluster": "open_economy_ad_slope",
      "primarySkill": "open_economy_ad_slope",
      "repairSkill": "open_economy_ad_slope",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6078,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for open-economy aggregate demand slope?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "bridge",
      "objective": "LO14.4",
      "conceptCluster": "open_economy_ad_slope",
      "primarySkill": "open_economy_ad_slope",
      "repairSkill": "open_economy_ad_slope",
      "feedback": "The right answer should say what changes and why.",
      "id": 6079,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for open-economy aggregate demand slope, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "mundell_fleming_ad",
      "type": "bridge",
      "objective": "LO14.4",
      "conceptCluster": "open_economy_ad_slope",
      "primarySkill": "open_economy_ad_slope",
      "repairSkill": "open_economy_ad_slope",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6080,
      "difficulty": "bridge"
    }
  ],
  "large_open_policy": [
    {
      "q": "After you identify large-open-economy text chain, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6081,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for large-open-economy text chain?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "The right answer should say what changes and why.",
      "id": 6082,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for large-open-economy text chain, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "large_open_economy",
      "type": "bridge",
      "objective": "LO14.1",
      "conceptCluster": "large_open_policy",
      "primarySkill": "large_open_policy",
      "repairSkill": "large_open_policy",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6083,
      "difficulty": "bridge"
    }
  ],
  "foreign_fiscal_policy": [
    {
      "q": "After you identify foreign fiscal policy, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6084,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for foreign fiscal policy?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "The right answer should say what changes and why.",
      "id": 6085,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for foreign fiscal policy, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "fiscal_policy_open_economy",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "foreign_fiscal_policy",
      "primarySkill": "foreign_fiscal_policy",
      "repairSkill": "foreign_fiscal_policy",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6086,
      "difficulty": "bridge"
    }
  ],
  "open_economy_synthesis": [
    {
      "q": "After you identify open-economy synthesis, what is the next step?",
      "options": [
        "trace the next variable in the chain",
        "stop after naming the concept",
        "assume NX always rises",
        "switch to an unrelated closed-economy model"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Bridge items force the second link, not just the label.",
      "id": 6087,
      "difficulty": "bridge"
    },
    {
      "q": "Which answer form is strongest for open-economy synthesis?",
      "options": [
        "direction plus mechanism",
        "direction only",
        "a definition with no application",
        "a slogan about policy"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "The right answer should say what changes and why.",
      "id": 6088,
      "difficulty": "bridge"
    },
    {
      "q": "If two answers sound possible for open-economy synthesis, what should you compare?",
      "options": [
        "the model assumption and the first shifted curve or identity",
        "which option has the flashiest wording",
        "whether the answer mentions a boss",
        "whether the option uses no economics terms"
      ],
      "a": 0,
      "tag": "open_economy_synthesis",
      "type": "bridge",
      "objective": "LO6.5",
      "conceptCluster": "open_economy_synthesis",
      "primarySkill": "open_economy_synthesis",
      "repairSkill": "open_economy_synthesis",
      "feedback": "Compare the model assumption and the first actual movement.",
      "id": 6089,
      "difficulty": "bridge"
    }
  ]
};

window.easyConceptPools = window.microSkillRepairPools;
window.mediumConceptPools = window.microSkillBridgePools;

// Dynamic calculation generators. These are intentionally global so the engine's calc bag can call them.
function ecRand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }
function ecChoice(arr){ return arr[Math.floor(Math.random() * arr.length)]; }
function makeECGeneratedQuestion(id, q, correct, wrongs, tag, type, objective, skill, feedback, hint){
  return {id,q,options:[correct,...wrongs],a:0,tag,type,objective,difficulty:"generated",primarySkill:skill,repairSkill:skill,conceptCluster:"generated_calculation",feedback,hint};
}
function getNXFromTradeCalc(){
  const X = ecRand(350, 1500);
  const M = ecRand(300, 1500);
  const nx = X - M;
  return makeECGeneratedQuestion(80000 + ecRand(1,999), `Exports are ${X} and imports are ${M}. What are net exports?`, String(nx), [String(-nx), String(X+M), String(Math.abs(nx)+100)], "trade_balance_net_exports", "calculation", "LO6.2", "calculate_net_exports", `NX = ${X} - ${M} = ${nx}.`, "NX = X - M.");
}
function getNXFromSavingInvestmentCalc(){
  const S = ecRand(600, 2200);
  const I = ecRand(500, 2300);
  const nx = S - I;
  return makeECGeneratedQuestion(81000 + ecRand(1,999), `National saving is ${S} and domestic investment is ${I}. What are net exports?`, String(nx), [String(-nx), String(S+I), String(Math.abs(nx)+75)], "saving_investment_capital_flows", "calculation", "LO6.2", "calculate_nx_from_s_i", `NX = S - I = ${S} - ${I} = ${nx}.`, "Use S - I = NX.");
}
function getNXFromSpendingCalc(){
  const C = ecRand(800, 2600);
  const I = ecRand(300, 1200);
  const G = ecRand(300, 1100);
  const NX = ecChoice([-250,-150,-75,75,125,200,300]);
  const Y = C + I + G + NX;
  return makeECGeneratedQuestion(82000 + ecRand(1,999), `Y = ${Y}, C = ${C}, I = ${I}, and G = ${G}. What are net exports?`, String(NX), [String(-NX), String(Y-C), String(C+I+G)], "accounting_identities", "calculation", "LO6.2", "calculate_nx_from_y_c_i_g", `NX = Y - C - I - G = ${NX}.`, "Rearrange Y = C + I + G + NX.");
}
function getRealExchangeRateCalc(){
  const e = ecChoice([0.8,1.0,1.2,1.5,2.0]);
  const P = ecChoice([80,90,100,120,150]);
  const Pf = ecChoice([80,100,120,150]);
  const epsRaw = e * P / Pf;
  const eps = Number.isInteger(epsRaw) ? String(epsRaw) : epsRaw.toFixed(2).replace(/0$/,'').replace(/0$/,'');
  return makeECGeneratedQuestion(83000 + ecRand(1,999), `If e = ${e}, P = ${P}, and P* = ${Pf}, what is the real exchange rate ε?`, eps, [String(e), String((P/Pf).toFixed(2)), String((e*P).toFixed(0))], "real_exchange_rate", "calculation", "LO6.4", "calculate_real_exchange_rate", `ε = ${e} × ${P} / ${Pf} = ${eps}.`, "ε = eP/P*.");
}
function getNominalExchangeRateCalc(){
  const eps = ecChoice([0.75,1,1.25,1.5,2]);
  const P = ecChoice([80,100,120,150]);
  const Pf = ecChoice([80,100,120]);
  const eRaw = eps * Pf / P;
  const e = Number.isInteger(eRaw) ? String(eRaw) : eRaw.toFixed(2).replace(/0$/,'').replace(/0$/,'');
  return makeECGeneratedQuestion(84000 + ecRand(1,999), `ε = ${eps}, P = ${P}, and P* = ${Pf}. What nominal exchange rate e is implied?`, e, [String(eps), String((P/Pf).toFixed(2)), String((eps*P/Pf).toFixed(2))], "real_exchange_rate", "calculation", "LO6.4", "calculate_real_exchange_rate", `e = εP*/P = ${eps} × ${Pf} / ${P} = ${e}.`, "Rearrange ε = eP/P*.");
}
function getFiscalSavingShiftCalc(){
  const S = ecRand(900, 1900);
  const I = ecRand(700, 1700);
  const dS = ecChoice([-300,-200,-150,150,200,300]);
  const newNX = S + dS - I;
  const direction = dS > 0 ? "rises" : "falls";
  return makeECGeneratedQuestion(85000 + ecRand(1,999), `National saving starts at S = ${S}, domestic investment is I = ${I}, and policy changes saving by ${dS}. What are the new net exports?`, String(newNX), [String(S-I), String(-(newNX)), String(newNX+dS)], "fiscal_policy_open_economy", "calculation", "LO6.5", "trace_domestic_fiscal_expansion", `New saving is ${S+dS}. NX = ${S+dS} - ${I} = ${newNX}. Saving ${direction}, so the trade balance moves with S - I.`, "Update saving first, then use S - I.");
}
function getMFRealBalancesCalc(){
  const M = ecChoice([2000,2400,3000,3600,4000]);
  const P1 = ecChoice([10,12,15,20]);
  const P2 = P1 + ecChoice([2,3,5]);
  const real1 = M / P1;
  const real2 = M / P2;
  return makeECGeneratedQuestion(86000 + ecRand(1,999), `Nominal money is ${M}. If P rises from ${P1} to ${P2}, what happens to real balances M/P?`, "they fall", ["they rise", "they are unchanged", "they become net exports"], "mundell_fleming_ad", "calculation", "LO14.4", "derive_ad_from_mf", `M/P falls from ${real1.toFixed(1)} to ${real2.toFixed(1)}.`, "Real balances = M/P.");
}
function getLargeOpenChainGenerated(){
  return makeECGeneratedQuestion(87000 + ecRand(1,999), "In a large open economy, expansionary fiscal policy raises the interest rate. What follows for investment and net-export pressure?", "investment falls and net exports tend to fall through capital-flow and exchange-rate adjustment", ["investment rises and net exports must rise", "investment is unchanged because r can never move", "net exports are unrelated to interest rates"], "large_open_economy", "multi-step", "LO14.1", "large_open_policy", "Large-open-economy fiscal expansion raises r, crowds out investment, and affects capital flows and the exchange rate.", "Large open economies can move r.");
}
window.calculationGenerators = [getNXFromTradeCalc,getNXFromSavingInvestmentCalc,getNXFromSpendingCalc,getRealExchangeRateCalc,getNominalExchangeRateCalc,getFiscalSavingShiftCalc,getMFRealBalancesCalc,getLargeOpenChainGenerated];

console.log('Exchange Citadel external question bank loaded', {easy: window.questionBanks.easy.length, medium: window.questionBanks.medium.length, hard: window.questionBanks.hard.length, elite: window.questionBanks.elite.length, legendary: window.questionBanks.legendary.length, easyBoss: window.questionBanks.easyBoss.length, mediumBoss: window.questionBanks.mediumBoss.length, finalBoss: window.questionBanks.finalBoss.length, legendaryBoss: window.questionBanks.legendaryBoss.length, repair: Object.values(window.microSkillRepairPools).reduce((s,p)=>s+p.length,0), bridge: Object.values(window.microSkillBridgePools).reduce((s,p)=>s+p.length,0)});
