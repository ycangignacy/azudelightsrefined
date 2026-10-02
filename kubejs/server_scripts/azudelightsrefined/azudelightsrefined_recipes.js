// made by ycangignacy
ServerEvents.recipes(event => {
  event.custom({
    type: "create:cutting",
    ingredients: [{ item: "minecraft:jungle_log" }],
    processing_time: 100,
    results: [{ id: "minecraft:stripped_jungle_log" }, { id: "azudelightsrefined:cinnamon_bark" }]
  }).id("azudelightsrefined:cinnabon/cut_cinnamon_bark")

  event.custom({
    type: "create:crushing",
    ingredients: [{ item: "minecraft:jungle_log" }],
    processing_time: 200,
    results: [{ count: 2, id: "azudelightsrefined:cinnamon_bark" }, { count: 2, id: "minecraft:stick" }]
  }).id("azudelightsrefined:cinnabon/crush_cinnamon_bark")

  event.custom({
    type: "create:milling",
    ingredients: [{ item: "azudelightsrefined:cinnamon_bark" }],
    processing_time: 100,
    results: [{ id: "azudelightsrefined:ground_cinnamon" }]
  }).id("azudelightsrefined:cinnabon/grind_cinnamon")

  event.custom({
    type: "create:mixing",
    ingredients: [{ item: "azudelightsrefined:ground_cinnamon" }, { item: "minecraft:sugar" }],
    results: [{ count: 2, id: "azudelightsrefined:cinnamon_sugar" }]
  }).id("azudelightsrefined:cinnabon/mix_cinnamon_sugar")

  event.custom({
    type: "create:mixing",
    ingredients: [{ type: "neoforge:tag", tag: "c:milk", amount: 500 }],
    results: [{ count: 2, id: "azudelightsrefined:butter" }]
  }).id("azudelightsrefined:cinnabon/churn_butter")

  event.custom({
    type: "create:mixing",
    ingredients: [{ item: "minecraft:apple" }, { type: "neoforge:tag", tag: "c:water", amount: 250 }],
    results: [{ id: "azudelightsrefined:apple_cider_vinegar", amount: 250 }]
  }).id("azudelightsrefined:cinnabon/make_vinegar")

  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [{ type: "neoforge:tag", tag: "c:milk", amount: 500 },
      { type: "neoforge:single", fluid: "azudelightsrefined:apple_cider_vinegar", amount: 250 }],
    results: [{ count: 2, id: "azudelightsrefined:cream_cheese" }]
  }).id("azudelightsrefined:cinnabon/curdle_milk")

  event.custom({
    type: "create:mixing",
    ingredients: [
      { item: "create:wheat_flour" }, { item: "create:wheat_flour" },
      { tag: "c:eggs" }, { item: "minecraft:sugar" }, { item: "azudelightsrefined:butter" }, { type: "neoforge:tag", tag: "c:milk", amount: 250 }
    ],
    results: [{ count: 2, id: "azudelightsrefined:sweet_roll_dough" }]
  }).id("azudelightsrefined:cinnabon/knead_dough")

  event.custom({
    type: "create:pressing",
    ingredients: [{ item: "azudelightsrefined:sweet_roll_dough" }],
    results: [{ id: "azudelightsrefined:rolled_dough" }]
  }).id("azudelightsrefined:cinnabon/roll_dough")

  event.custom({
    type: "create:deploying",
    ingredients: [{ item: "azudelightsrefined:rolled_dough" }, { item: "azudelightsrefined:butter" }],
    results: [{ id: "azudelightsrefined:buttered_dough" }]
  }).id("azudelightsrefined:cinnabon/spread_butter")

  event.custom({
    type: "create:deploying",
    ingredients: [{ item: "azudelightsrefined:buttered_dough" }, { item: "azudelightsrefined:cinnamon_sugar" }],
    results: [{ id: "azudelightsrefined:filled_dough" }]
  }).id("azudelightsrefined:cinnabon/add_filling")

  event.custom({
    type: "create:cutting",
    ingredients: [{ item: "azudelightsrefined:filled_dough" }],
    processing_time: 100,
    results: [{ count: 2, id: "azudelightsrefined:unbaked_cinnamon_roll" }]
  }).id("azudelightsrefined:cinnabon/cut_rolls")

  event.custom({
    type: "minecraft:smoking",
    category: "food",
    cookingtime: 100,
    experience: 0.1,
    ingredient: { item: "azudelightsrefined:unbaked_cinnamon_roll" },
    result: { id: "azudelightsrefined:baked_cinnamon_roll" }
  }).id("azudelightsrefined:cinnabon/bake_roll")

  event.custom({
    type: "create:mixing",
    ingredients: [{ type: "neoforge:tag", tag: "c:milk", amount: 250 }, { item: "azudelightsrefined:cream_cheese" },
      { item: "minecraft:sugar" }, { item: "minecraft:sugar" }],
    results: [{ id: "azudelightsrefined:sweet_icing", amount: 250 }]
  }).id("azudelightsrefined:cinnabon/mix_icing")

  event.custom({
    type: "create:filling",
    ingredients: [{ item: "azudelightsrefined:baked_cinnamon_roll" },
      { type: "neoforge:single", fluid: "azudelightsrefined:sweet_icing", amount: 250 }],
    results: [{ id: "azudelightsrefined:cinnabon" }]
  }).id("azudelightsrefined:cinnabon/ice_roll")

  event.custom({
    type: "create:cutting",
    ingredients: [{ item: "azudelightsrefined:cinnabon" }],
    processing_time: 100,
    results: [{ count: 4, id: "azudelightsrefined:cinnabon_piece" }]
  }).id("azudelightsrefined:cinnabon/slice_cinnabon")
})
