// made by ycangignacy
StartupEvents.registry('item', event => {
  event.create('azudelightsrefined:cinnamon_bark')
    .displayName('Cinnamon Bark')
    .texture('azudelightsrefined:item/cinnamon_bark')

  event.create('azudelightsrefined:ground_cinnamon')
    .displayName('Ground Cinnamon')
    .texture('azudelightsrefined:item/ground_cinnamon')

  event.create('azudelightsrefined:cinnamon_sugar')
    .displayName('Cinnamon Sugar')
    .texture('azudelightsrefined:item/cinnamon_sugar')

  event.create('azudelightsrefined:butter')
    .displayName('Butter')
    .texture('azudelightsrefined:item/butter')

  event.create('azudelightsrefined:cream_cheese')
    .displayName('Cream Cheese')
    .texture('azudelightsrefined:item/cream_cheese')

  event.create('azudelightsrefined:sweet_roll_dough')
    .displayName('Sweet Roll Dough')
    .texture('azudelightsrefined:item/sweet_roll_dough')

  event.create('azudelightsrefined:rolled_dough')
    .displayName('Rolled Dough')
    .texture('azudelightsrefined:item/rolled_dough')

  event.create('azudelightsrefined:buttered_dough')
    .displayName('Buttered Dough')
    .texture('azudelightsrefined:item/buttered_dough')

  event.create('azudelightsrefined:filled_dough')
    .displayName('Cinnamon Filled Dough')
    .texture('azudelightsrefined:item/filled_dough')

  event.create('azudelightsrefined:unbaked_cinnamon_roll')
    .displayName('Unbaked Cinnamon Roll')
    .texture('azudelightsrefined:item/unbaked_cinnamon_roll')

  event.create('azudelightsrefined:baked_cinnamon_roll')
    .displayName('Baked Cinnamon Roll')
    .texture('azudelightsrefined:item/baked_cinnamon_roll')

  event.create('azudelightsrefined:cinnabon')
    .displayName('Cinnabon')
    .texture('azudelightsrefined:item/cinnabon')
    .food(food => {
      food
        .nutrition(8)
        .saturation(0.7)
    })

  event.create('azudelightsrefined:cinnabon_piece')
    .displayName('Cinnabon Piece')
    .texture('azudelightsrefined:item/cinnabon_piece')
    .food(food => {
      food
        .nutrition(5)
        .saturation(0.6)
    })
})
