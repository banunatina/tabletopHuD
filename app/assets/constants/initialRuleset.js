export default state = {
  name: "DnD3.5",
  classes: [{name: 'Barbarian', keyatr: ["Str", "Dex", "Con"], role: "Melee Combat", description: "The barbarian is an excellent warrior. Where the fighter’s skill in combat comes from training and discipline, however, the barbarian has a powerful rage. While in this berserk fury, he becomes stronger and tougher, better able to defeat his foes and withstand their attacks. These rages leave him winded, and he has the energy for only a few such spectacular displays per day, but those few rages are usually sufficient. He is at home in the wild, and he runs at great speed."},
          {name: 'Bard', keyatr: ["Cha", "Dex", "Int"], role: "Caster Support", description: "It is said that music has a special magic, and the bard proves that saying true. Wandering across the land, gathering lore, telling stories, working magic with his music, and living on the gratitude of his audience—such is the life of a bard. When chance or opportunity draws them into a conflict, bards serve as diplomats, negotiators, messengers, scouts, and spies."},
          {name: 'Cleric', keyatr: ["Wis", "Cha", "Con"], role: "Divine Caster", description: "The handiwork of the gods is everywhere—in places of natural beauty, in mighty crusades, in soaring temples, and in the hearts of worshipers. Like people, gods run the gamut from benevolent to malicious, reserved to intrusive, simple to inscrutable. The gods, however, work mostly through intermediaries—their clerics. Good clerics heal, protect, and avenge. Evil clerics pillage, destroy, and sabotage. A cleric uses the power of his god to make his god’s will manifest. And if a cleric uses his god’s power to improve his own lot, that’s to be expected, too."},
          {name: 'Druid', keyatr: ["Wis", "Dex"], role: "Divine Caster", description: "The fury of a storm, the gentle strength of the morning sun, the cunning of the fox, the power of the bear—all these and more are at the druid’s command. The druid however, claims no mastery over nature. That claim, she says, is the empty boast of a city dweller. The druid gains her power not by ruling nature but by being at one with it. To trespassers in a druid’s sacred grove, and to those who feel her wrath, the distinction is overly fine."},
          {name: 'Fighter', role: "Melee Combat or Support", keyatr: ["Str", "Con", "Dex"], description: "Of all classes, fighters have the best all-around fighting capabilities (hence the name). Fighters are familiar with all the standard weapons and armors. In addition to general fighting prowess, each fighter develops particular specialties of his own. A given fighter may be especially capable with certain weapons, another might be trained to execute specific fancy maneuvers. As fighters gain experience, they get more opportunities to develop their fighting skills. Thanks to their focus on combat maneuvers, they can master the most difficult ones relatively quickly."}, 
          {name: 'Monk', role: "Melee Combat", keyatr: ["Wis", "Dex", "Str"], description: "The key feature of the monk is her ability to fight unarmed and unarmored. Thanks to her rigorous training, she can strike as hard as if she were armed and strike faster than a warrior with a sword."},
          {name: 'Paladin', role: "Melee Combat", keyatr: ["Cha", "Str", "Wis"], description: "The compassion to pursue good, the will to uphold law, and the power to defeat evil—these are the three weapons of the paladin. Few have the purity and devotion that it takes to walk the paladin’s path, but those few are rewarded with the power to protect, to heal, and to smite. In a land of scheming wizards, unholy priests, bloodthirsty dragons, and infernal fiends, the paladin is the final hope that cannot be extinguished."},
          {name: 'Ranger', description: "A ranger often accepts the role of protector, aiding those who live in or travel through the woods. In addition, a ranger carries grudges against certain types of creatures and looks for opportunities to find and destroy them. He may adventure for all the reasons that a fighter does.", role:"Ranged or Melee Combat", keyatr: ["Dex", "Str", "Wis"]},
          {name: 'Rogue', keyatr: ["Dex", "Int", "Wis"], role: "Melee Combat or Support", description: "Rogues share little in common with each other. Some are stealthy thieves. Others are silver-tongued tricksters. Still others are scouts, infiltrators, spies, diplomats, or thugs. What they share is versatility, adaptability, and resourcefulness. In general, rogues are skilled at getting what others don’t want them to get: entrance into a locked treasure vault, safe passage past a deadly trap, secret battle plans, a guard’s trust, or some random person’s pocket money."},
          {name: 'Sorcerer', keyatr: ["Cha", "Dex", "Con"], role: "Arcane Caster", description: "Sorcerers cast spells through innate power rather than through careful training and study. Their magic is intuitive rather than logical. Sorcerers know fewer spells than wizards do and acquire powerful spells more slowly than wizards, but they can cast spells more often and have no need to select and prepare their spells ahead of time. Sorcerers do not specialize in certain schools of magic the way wizards sometimes do."},
          {name: 'Wizard', keyatr: ["Int", "Dex", "Con"], role: "Arcane Caster", description: "Wizards conduct their adventures with caution and forethought. When prepared, they can use their spells to devastating effect. When caught by surprise, they are vulnerable. They seek knowledge, power, and the resources to conduct their studies. They may also have any of the noble or ignoble motivations that other adventurers have."},
          ],
  races: [
          {name: "Human", description: "Most humans are the descendants of pioneers, conquerors, traders, travelers, refugees, and other people on the move. As a result, human lands are home to a mix of people—physically, culturally, religiously, and politically different. Hardy or fine, light-skinned or dark, showy or austere, primitive or civilized, devout or impious, humans run the gamut.", bonus:"Extra feat, extra skills", languages: "Common", racial: []},
          {name: "Dwarf", bonus: "Darkvision", racial: [{name: 'Con', mod: 2}, {name: 'Cha', mod: -2}], languages: "Common, Dwarvish", description: "Dwarves are known for their skill in warfare, their ability to with- stand physical and magical punishment, their knowledge of the earth’s secrets, their hard work, and their capacity for drinking ale. Their mysterious kingdoms, carved out from the insides of mountains, are renowned for the marvelous treasures that they produce as gifts or for trade."},
          {name: "Elf", bonus: "Low-light vision, Immune to magic sleep effects, resistance to enchantment", racial: [{name: 'Dex', mod: 2}, {name: 'Con', mod: -2}], description: "Elves mingle freely in human lands, always welcome yet never at home there. They are well known for their poetry, dance, song, lore, and magical arts. Elves favor things of natural and simple beauty. When danger threatens their woodland homes, however, elves reveal a more martial side, demonstrating skill with sword, bow, and battle strategy."},
          {name: "Gnome", bonus: "Low-light vision", racial: [{name: 'Con', mod: 2}, {name: 'Str', mod: -2}], description: ""},
          {name: "Half-Elf", bonus: "", racial: [], description: ""},
          {name: "Half-Orc", bonus: "", racial: [], description: ""},
          {name: "Halfling", bonus: "", racial: [], description: ""},
          ],
  attributes: ['Str', 'Dex', 'Con', 'Wis', 'Int', 'Cha']
}