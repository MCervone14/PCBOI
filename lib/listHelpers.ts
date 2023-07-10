export const years = Array.from(
  { length: 2025 - 1975 + 1 },
  (_, index) => 1975 + index
).sort((a, b) => b - a);

export const tag_items = [
  { tag_title: "Indie", tag_id: "492" },
  { tag_title: "Action", tag_id: "19" },
  { tag_title: "Adventure", tag_id: "21" },
  { tag_title: "Casual", tag_id: "597" },
  { tag_title: "RPG", tag_id: "122" },
  { tag_title: "Simulation", tag_id: "599" },
  { tag_title: "Strategy", tag_id: "9" },
  { tag_title: "Singleplayer", tag_id: "4182" },
  { tag_title: "Early Access", tag_id: "493" },
  { tag_title: "Free to Play", tag_id: "113" },
  { tag_title: "2D", tag_id: "3871" },
  { tag_title: "3D", tag_id: "4191" },
  { tag_title: "Atmospheric", tag_id: "4166" },
  { tag_title: "Fantasy", tag_id: "1684" },
  { tag_title: "Story Rich", tag_id: "1742" },
  { tag_title: "Colorful", tag_id: "4305" },
  { tag_title: "Multiplayer", tag_id: "3859" },
  { tag_title: "Puzzle", tag_id: "1664" },
  { tag_title: "Massively Multiplayer", tag_id: "128" },
  { tag_title: "Pixel Graphics", tag_id: "3964" },
  { tag_title: "Sports", tag_id: "701" },
  { tag_title: "Exploration", tag_id: "3834" },
  { tag_title: "Violent", tag_id: "4667" },
  { tag_title: "Cute", tag_id: "4726" },
  { tag_title: "First-Person", tag_id: "3839" },
  { tag_title: "Combat", tag_id: "3993" },
  { tag_title: "Racing", tag_id: "699" },
  { tag_title: "Anime", tag_id: "4085" },
  { tag_title: "Nudity", tag_id: "6650" },
  { tag_title: "Sexual Content", tag_id: "12095" },
  { tag_title: "Funny", tag_id: "4136" },
  { tag_title: "Arcade", tag_id: "1773" },
  { tag_title: "Action-Adventure", tag_id: "4106" },
  { tag_title: "Sci-fi", tag_id: "3942" },
  { tag_title: "Shooter", tag_id: "1774" },
  { tag_title: "Gore", tag_id: "4345" },
  { tag_title: "Relaxing", tag_id: "1654" },
  { tag_title: "Horror", tag_id: "1667" },
  { tag_title: "Retro", tag_id: "4004" },
  { tag_title: "Family Friendly", tag_id: "5350" },
  { tag_title: "Third Person", tag_id: "1697" },
  { tag_title: "Female Protagonist", tag_id: "7208" },
  { tag_title: "Open World", tag_id: "1695" },
  { tag_title: "Controller", tag_id: "7481" },
  { tag_title: "Stylized", tag_id: "4252" },
  { tag_title: "Co-op", tag_id: "1685" },
  { tag_title: "Platformer", tag_id: "1625" },
  { tag_title: "Survival", tag_id: "1662" },
  { tag_title: "PvP", tag_id: "1775" },
  { tag_title: "Choices Matter", tag_id: "6426" },
  { tag_title: "Top-Down", tag_id: "4791" },
  { tag_title: "Comedy", tag_id: "1719" },
  { tag_title: "Realistic", tag_id: "4175" },
  { tag_title: "Visual Novel", tag_id: "3799" },
  { tag_title: "Dark", tag_id: "4342" },
  { tag_title: "PvE", tag_id: "6730" },
  { tag_title: "Character Customization", tag_id: "4747" },
  { tag_title: "Physics", tag_id: "3968" },
  { tag_title: "FPS", tag_id: "1663" },
  { tag_title: "Cartoony", tag_id: "4195" },
  { tag_title: "Old School", tag_id: "3916" },
  { tag_title: "Mystery", tag_id: "5716" },
  { tag_title: "Online Co-Op", tag_id: "3843" },
  { tag_title: "Linear", tag_id: "7250" },
  { tag_title: "2D Platformer", tag_id: "5379" },
  { tag_title: "Difficult", tag_id: "4026" },
  { tag_title: "Multiple Endings", tag_id: "6971" },
  { tag_title: "VR", tag_id: "21978" },
  { tag_title: "Great Soundtrack", tag_id: "1756" },
  { tag_title: "Psychological Horror", tag_id: "1721" },
  { tag_title: "Sandbox", tag_id: "3810" },
  { tag_title: "Magic", tag_id: "4057" },
  { tag_title: "Medieval", tag_id: "4172" },
  { tag_title: "Tactical", tag_id: "1708" },
  { tag_title: "Action RPG", tag_id: "4231" },
  { tag_title: "Minimalist", tag_id: "4094" },
  { tag_title: "Futuristic", tag_id: "4295" },
  { tag_title: "Space", tag_id: "1755" },
  { tag_title: "Building", tag_id: "1643" },
  { tag_title: "Point & Click", tag_id: "1698" },
  { tag_title: "Hand-drawn", tag_id: "6815" },
  { tag_title: "Crafting", tag_id: "1702" },
  { tag_title: "Shoot 'Em Up", tag_id: "4255" },
  { tag_title: "Management", tag_id: "12472" },
  { tag_title: "Roguelike", tag_id: "1716" },
  { tag_title: "Local Multiplayer", tag_id: "7368" },
  { tag_title: "Cartoon	", tag_id: "4562" },
  { tag_title: "Drama	", tag_id: "5984" },
  { tag_title: "Side Scroller	", tag_id: "3798" },
  { tag_title: "Procedural Generation", tag_id: "5125" },
  { tag_title: "Resource Management", tag_id: "8945" },
  { tag_title: "Roguelite	", tag_id: "3959" },
  { tag_title: "Dark Fantasy", tag_id: "4604" },
  { tag_title: "Logic", tag_id: "6129" },
  { tag_title: "Mature", tag_id: "5611" },
  { tag_title: "Survival Horror", tag_id: "3978" },
  { tag_title: "3D Platformer", tag_id: "5395" },
  { tag_title: "Education", tag_id: "1036" },
  { tag_title: "Choose Your Own Adventure", tag_id: "4486" },
  { tag_title: "Puzzle Platformer", tag_id: "5537" },
  { tag_title: "Romance", tag_id: "4947" },
  { tag_title: "Turn-Based Combat", tag_id: "4325" },
  { tag_title: "Hack and Slash", tag_id: "1646" },
  { tag_title: "Turn-Based Strategy", tag_id: "1741" },
  { tag_title: "War", tag_id: "1678" },
  { tag_title: "Tabletop", tag_id: "17389" },
  { tag_title: "Turn-Based Tactics", tag_id: "14139" },
  { tag_title: "Zombies", tag_id: "1659" },
  { tag_title: "Post-apocalyptic", tag_id: "3835" },
  { tag_title: "Immersive Sim", tag_id: "9204" },
  { tag_title: "Hentai", tag_id: "9130" },
  { tag_title: "Base Building", tag_id: "7332" },
  { tag_title: "Nature", tag_id: "30358" },
  { tag_title: "Dating Sim", tag_id: "9551" },
  { tag_title: "JRPG", tag_id: "4434" },
  { tag_title: "Local Co-Op", tag_id: "3841" },
  { tag_title: "Dungeon Crawler", tag_id: "1720" },
  { tag_title: "Third-Person Shooter", tag_id: "3814" },
  { tag_title: "Top-Down Shooter", tag_id: "4637" },
  { tag_title: "2.5D", tag_id: "4975" },
  { tag_title: "Aliens", tag_id: "1673" },
  { tag_title: "Cyberpunk", tag_id: "4115" },
  { tag_title: "Robots", tag_id: "5752" },
  { tag_title: "Isometric", tag_id: "5851" },
  { tag_title: "Team-Based", tag_id: "5711" },
  { tag_title: "Dark Humor", tag_id: "5923" },
  { tag_title: "Nonlinear", tag_id: "6869" },
  { tag_title: "Inventory Management", tag_id: "6276" },
  { tag_title: "Card Game", tag_id: "1666" },
  { tag_title: "Psychological", tag_id: "5186" },
  { tag_title: "Perma Death", tag_id: "1759" },
  { tag_title: "Economy", tag_id: "4695" },
  { tag_title: "Detective", tag_id: "5613" },
  { tag_title: "Driving", tag_id: "1644" },
  { tag_title: "Board Game", tag_id: "1770" },
  { tag_title: "Tower Defense", tag_id: "1645" },
  { tag_title: "Loot", tag_id: "4236" },
  { tag_title: "City Builder", tag_id: "4328" },
  { tag_title: "Souls-like", tag_id: "29482" },
  { tag_title: "Metroidvania", tag_id: "1628" },
  { tag_title: "CRPG", tag_id: "4474" },
  { tag_title: "MMORPG", tag_id: "1754" },
  { tag_title: "Co-op Campaign", tag_id: "4508" },
  { tag_title: "Farming Sim", tag_id: "87918" },
  { tag_title: "Open World Survival Craft", tag_id: "1100689" },
  { tag_title: "Looter Shooter", tag_id: "353880" },
  { tag_title: "Steampunk", tag_id: "1777" },
  { tag_title: "MOBA", tag_id: "1718" },
  { tag_title: "Party Game", tag_id: "7178" },
  { tag_title: "Hobby Sim", tag_id: "1220528" },
];