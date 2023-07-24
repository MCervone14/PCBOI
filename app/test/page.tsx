import Description from "@/components/Description";
import GameInfoCard from "@/components/cards/GameInfoCard";
import Image from "next/image";

import HowLongtoBeat from "@/components/tables/HowLongToBeatTable";
import ReviewCard from "@/components/cards/SteamReviewCard";
import MediaWrapper from "@/components/MediaWrapper";
import ScreenShotWrapper from "@/components/ScreenShotWrapper";
import LanguagesChartCard from "@/components/cards/LanguagesChartCard";

const data = {
  appid: "252490",
  title: "Rust",
  background_image:
    "'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/page_bg_generated_v6b.jpg?t=1678981332'",
  header_image:
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg?t=1678981332",
  game_description:
    "\n\t\t\t\t\t\t\t\tThe only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.\t\t\t\t\t\t\t",
  review_descriptor_summary: ["Very Positive", "Very Positive"],
  release_date: "Feb 8, 2018",
  developers: ["Facepunch Studios"],
  publishers: ["Facepunch Studios"],
  tags: [
    "Survival",
    "Crafting",
    "Multiplayer",
    "Open World",
    "Open World Survival Craft",
    "Building",
    "PvP",
    "Sandbox",
    "Adventure",
    "First-Person",
    "Action",
    "FPS",
    "Nudity",
    "Co-op",
    "Shooter",
    "Online Co-Op",
    "Indie",
    "Early Access",
    "Post-apocalyptic",
    "Simulation",
  ],
  movies: [
    "https://cdn.cloudflare.steamstatic.com/steam/apps/256684736/movie.184x123.jpg?t=1624520315",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/256761600/movie.184x123.jpg?t=1568120227",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/256761603/movie.184x123.jpg?t=1568120218",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/256791647/movie.184x123.jpg?t=1593743141",
  ],
  screenshots: [
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_271feae67943bdc141c1249aba116349397e9ba9.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_e825b087b95e51c3534383cfd75ad6e8038147c3.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_0e646f1a70e5cb8eed00efef8adb9579d40d5b2e.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_1c2d0d1eefee54f0c67626c74eb21699bbb0ef52.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_d0fdacaeef5a28a7cee525fd73376adfe083c964.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_827f1bb38361eb3f7de91cff9be5b7176a05a9ac.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_bbf6c96e490326ec877ae548cb148e53516b5f83.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_2a8518810024a5fbf9c714e697a43a1201b5d53e.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_c88939db635d959b25eb1bcf9b4c4dcdec04b3fe.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_eafe26f0577f9fc25d7a89884ea6f40381973c8a.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_9652dbaf2de41b8c8f8305af714ee258564c453d.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_9d2ad1cd00376605d6f9a778eb7bd1cddfd68ee1.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_803a18bcbf6004706f12a1f88bb3cadbd9ac5f5b.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_aaa718a3cb0696a816456283526842c4f2d6b1bc.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_24483e657f7e59d74e4914f79c51d9c821454e98.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_dd5a5bf9a19b8b8a078dfdae8b7e09c0e78d2b4d.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_651097c65458ae555b42c42dd9667d7174397bdf.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_40bde646d6ed6ebda0d7f42f52d66d147935bbfa.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_21afaa3e6697adbb9173e0266c9de913a5a05457.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_9264a17b6bc1b3f9df55cf2aafcc25c6188bba59.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_69b259a1ab43e2e12f119ecb6b48117a7ff0b216.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_2166031b7e6eaedae3dfd8966421c6c4703b89ef.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_6c6269c7c6164876585e0728742156b49af966af.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_3834344f4f347f133a70096113d71ab3c5a7d587.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_f05168330593f4f476cd4a6a6094b248c7c8556e.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_a63f203245f322f28cf489bf46beaeec780cccec.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_521614c60fd57b8dc0c025848cdc5d03e8ccc714.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_326282c7485e8aff1ebf6750c82622afef098998.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_9dfb2cb3e93ab37ff47c7b2e011b1b9e42351107.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_08a111660a92c33c10d62e74620d258c216fd0bb.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_b5925cc5fad7a69486c570e3f912130ae0989f06.116x65.jpg?t=1678981332",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_234b12804c91c911e4095fcb872ef7f1a1371ca2.116x65.jpg?t=1678981332",
  ],
  game_features: [
    "MMO",
    "Online PvP",
    "Online Co-op",
    "Cross-Platform Multiplayer",
    "Steam Achievements",
    "Steam Trading Cards",
    "Steam Workshop",
    "In-App Purchases",
    "Valve Anti-Cheat enabled",
    "Stats",
    "Remote Play on Tablet",
  ],
  languages: [
    {
      language: "English",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "French",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "Italian",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "German",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "Spanish - Spain",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "Japanese",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "Korean",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "Russian",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "Simplified Chinese",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "Ukrainian",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "Polish",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "Portuguese - Portugal",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "Turkish",
      interface: "true",
      fullAudio: "true",
      subtitles: "true",
    },
    {
      language: "Arabic",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
    {
      language: "Czech",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
    {
      language: "Danish",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
    {
      language: "Dutch",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
    {
      language: "Finnish",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
    {
      language: "Greek",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
    {
      language: "Norwegian",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
    {
      language: "Portuguese - Brazil",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
    {
      language: "Spanish - Latin America",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
    {
      language: "Swedish",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
    {
      language: "Traditional Chinese",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
    {
      language: "Vietnamese",
      interface: "true",
      fullAudio: "false",
      subtitles: "false",
    },
  ],
  game_rating_icon: null,
  game_rating_descriptors: null,
  game_rating: null,
  steam_deck_compatibility: "Unsupported",
  about_the_game: [
    '<div id="game_area_description" class="game_area_description">\n\t\t\t\t\t\t\t<h2>About This Game</h2>\n\t\t\t\t\t\t\tThe only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.<br><br><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/252490/extras/Rust_Gif_Opt.gif?t=1678981332"><br><br>Rust is in its 9th year and has now had over 350 content updates, with a guaranteed content patch every month. From regular balance fixes and improvements to AI and graphics updates to adding content like new maps, musical instruments, trains and drones, as well as regular seasons and events, there’s always something interesting or dangerous (or both) happening on the island. Updates to the game include:<br><br><ul class="bb_ul"><li>Procedurally generated worlds with map editor support<br></li><li>Host your own servers and with server-side modding support<br></li><li>Vehicles:  horses, modular cars, hot air balloons, helicopters, trains and more<br></li><li>Complex electrical systems <br></li><li>Farming<br></li><li>New enemies, wildlife and factions<br></li><li>New monuments and areas to explore<br></li><li>Gestures and contact system<br></li><li>Musical instruments<br></li><li>Large train network<br></li><li>Huge recent graphics overhaul<br></li><li>..and more</li></ul><h2 class="bb_tag">EXPLORE</h2><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/252490/extras/explore.jpg?t=1678981332"><br>You wake naked on a mysterious island armed only with a rock and a torch. You’ll need to brave natural dangers (from heat and cold to thirst and starvation), build a shelter, eat (or be eaten), scavenge materials. Explore the island, its abandoned settlements, mysterious monuments and the factions that occupy them. But, above all, watch out for other survivors...<h2 class="bb_tag">BUILD</h2><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/252490/extras/build.jpg?t=1678981332"><br>Design and build bases to defend your territory or control the resources of the island. Research the tech tree, grow farms, command electricity, commandeer vehicles from horses to cars to boats to helicopters. Whatever it takes to get ahead.<h2 class="bb_tag">SURVIVE</h2><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/252490/extras/survive.jpg?t=1678981332"><br>There are no rules in Rust but the ones you make for yourself. Craft tools, armor and weapons to defend yourself. Cooperate with friends and allies and build a town together. Explore the island and what’s happening in it. Trade with other players. Or prey on them, raiding their bases and taking their hard-won goods.<br><br><br>For parental controls, please see Steam Family View: <a href="https://help.steampowered.com/en/faqs/view/6B1A-66BE-E911-3D98" target="_blank" rel="">https://help.steampowered.com/en/faqs/view/6B1A-66BE-E911-3D98</a>\t\t\t\t\t\t</div>',
  ],
  metacritic_score: "69",
  metacritic_link:
    "https://www.metacritic.com/game/pc/rust?ftag=MCD-06-10aaa1f",
  reviews: [
    {
      href: "https://steamcommunity.com/profiles/76561198126750075/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/12a1b5bae11dee9098416249a6713c0d00ab4457.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/12a1b5bae11dee9098416249a6713c0d00ab4457.jpg 1x, https://avatars.cloudflare.steamstatic.com/12a1b5bae11dee9098416249a6713c0d00ab4457_medium.jpg 2x",
      },
      username: "Riipou",
      review_date:
        "\n\t\t\t\t\tPosted: June 30\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSteam Key\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\t&gt; wake up on the beach<br>&gt; wander<br>&gt; meet some guys dressed up in trash holding AK-47\'s<br>&gt;"HEY YOU, NAKED"<br>&gt; I come<br>&gt; "Follow us, you\'re our prisoner now"<br>&gt; They bring me to a base with a crudely drawn ISIS flag on it<br>&gt; They bring me into their base<br>&gt; "SING FOR US"<br>&gt; I don\'t say anything<br>&gt; "well you\'re ♥♥♥♥♥♥♥ useless aren\'t you"<br>&gt; "bring him in to the thunderdome"<br>&gt; waitwhat<br>&gt; they bring me into a prison with another naked<br>&gt; "NOW FIGHT!"<br>&gt; me and the naked fight intensely with rocks<br>&gt; I kill him, everyone is screaming "ALLAHU AKBAR" in bad middle-eastern accents<br>&gt; they bring me outside for a break<br>&gt; one ISIS member leaves the base, and i run outside while the door is open<br>&gt; being shot at by AK-47\'s while zigzagging<br>&gt; I escape the desert<br><br>then left Egypt, bought Rust and the same thing happened in Rust\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Recommended",
      hours_played: "\n\t\t\t\t\t\t134.8 hrs on record\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/profiles/76561198035002318/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/e71f9dc6ec9118809229973680eac827bbd205c7.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/e71f9dc6ec9118809229973680eac827bbd205c7.jpg 1x, https://avatars.cloudflare.steamstatic.com/e71f9dc6ec9118809229973680eac827bbd205c7_medium.jpg 2x",
      },
      username: "Cookie?",
      review_date:
        "\n\t\t\t\t\tPosted: June 24\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSteam Key\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tMy friend who I play Rust with said if I post a review on Rust and it gets 100 likes and 100 Awards that he will buy me a rack of beer and some vodka. So im just gonna leave this here. Help a brotha\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Recommended",
      hours_played: "\n\t\t\t\t\t\t16.6 hrs on record\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/id/Forsymo/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/55f0a9405e99e7762f0bccf1e60446f9cbf72a67.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/55f0a9405e99e7762f0bccf1e60446f9cbf72a67.jpg 1x, https://avatars.cloudflare.steamstatic.com/55f0a9405e99e7762f0bccf1e60446f9cbf72a67_medium.jpg 2x",
      },
      username: "Femto",
      review_date:
        "\n\t\t\t\t\tPosted: June 27\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tThis game gives me Stockholm syndrome!\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Recommended",
      hours_played:
        "\n\t\t\t\t\t\t1,719.0 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(1,651.4 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/profiles/76561198201704766/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/a31a325a0fdcabd033de59e42842961331017abb.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/a31a325a0fdcabd033de59e42842961331017abb.jpg 1x, https://avatars.cloudflare.steamstatic.com/a31a325a0fdcabd033de59e42842961331017abb_medium.jpg 2x",
      },
      username: "Nin-Jogo",
      review_date:
        "\n\t\t\t\t\tPosted: July 3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSteam Key\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tGood game bad people.\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Recommended",
      hours_played:
        "\n\t\t\t\t\t\t3,439.9 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(3,330.6 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/id/OAKXXVII/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/84296f922bca2a4723a33a62d98f0bf6c0b2053a.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/84296f922bca2a4723a33a62d98f0bf6c0b2053a.jpg 1x, https://avatars.cloudflare.steamstatic.com/84296f922bca2a4723a33a62d98f0bf6c0b2053a_medium.jpg 2x",
      },
      username: "o a k. 真",
      review_date:
        "\n\t\t\t\t\tPosted: July 3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSteam Key\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tracist community\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Recommended",
      hours_played: "\n\t\t\t\t\t\t9.0 hrs on record\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/profiles/76561198132195122/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/e27f10e7e54aaf1a3d4d6a2be934cd5796275a83.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/e27f10e7e54aaf1a3d4d6a2be934cd5796275a83.jpg 1x, https://avatars.cloudflare.steamstatic.com/e27f10e7e54aaf1a3d4d6a2be934cd5796275a83_medium.jpg 2x",
      },
      username: "San7ana",
      review_date:
        "\n\t\t\t\t\tPosted: July 10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        "<div class=\"content\">\n\t\t\t\t\tGot free weapons from a ''friendly'' player, got shot when i turned around.<br><br>Got unhealthily angry, but the game is good.\t\t\t\t\t<div class=\"gradient\"></div>\n\t\t\t\t</div>",
      recommendation: "Recommended",
      hours_played: "\n\t\t\t\t\t\t151.9 hrs on record\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/id/katd233333333333333333333/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/7a8b56d199b61e4ae6dbf6c16bfc8f4e80bf4096.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/7a8b56d199b61e4ae6dbf6c16bfc8f4e80bf4096.jpg 1x, https://avatars.cloudflare.steamstatic.com/7a8b56d199b61e4ae6dbf6c16bfc8f4e80bf4096_medium.jpg 2x",
      },
      username: "Anakin Skywalker",
      review_date:
        "\n\t\t\t\t\tPosted: July 5\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tits not a game its a life style it will ruin you\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Not Recommended",
      hours_played:
        "\n\t\t\t\t\t\t1,387.2 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(1,386.1 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/profiles/76561199013365433/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/8dfe278c7493b6984540e57ecd57b791df13841e.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/8dfe278c7493b6984540e57ecd57b791df13841e.jpg 1x, https://avatars.cloudflare.steamstatic.com/8dfe278c7493b6984540e57ecd57b791df13841e_medium.jpg 2x",
      },
      username: "Flamex",
      review_date:
        "\n\t\t\t\t\tPosted: June 30\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tThis game has the highest highs and the lowest lows kinda like a gambling addiction\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Recommended",
      hours_played:
        "\n\t\t\t\t\t\t1,374.1 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(1,349.0 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/id/iCaupo/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/9148cb310b7e33cb9a2ecc962a9108edf0373470.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/9148cb310b7e33cb9a2ecc962a9108edf0373470.jpg 1x, https://avatars.cloudflare.steamstatic.com/9148cb310b7e33cb9a2ecc962a9108edf0373470_medium.jpg 2x",
      },
      username: "iCaupo ‽",
      review_date:
        "\n\t\t\t\t\tPosted: July 2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tGot a cat here. Friends passing by can touch her and click Like to pet her once. Award for good luck, Take My Points for infinite pets :)<br>⠀⠀⠀⠀⠀⠀⠀⠀⠀ ＿＿<br>　　　　　／＞　　フ<br>　　　　　| 　_　 _ l<br>　 　　　／` ミ＿xノ<br>　　 　 /　　　 　 |<br>　　　 /　 ヽ　　 ﾉ<br>　 　 │　　|　|　|<br>　／￣|　　 |　|　|<br>　| (￣ヽ＿ヽ)__)<br>　＼二つ\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Recommended",
      hours_played:
        "\n\t\t\t\t\t\t68.5 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(46.0 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/id/MrSh1tter/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/d6442809772447528a5e3d3c075f03ea34468b63.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/d6442809772447528a5e3d3c075f03ea34468b63.jpg 1x, https://avatars.cloudflare.steamstatic.com/d6442809772447528a5e3d3c075f03ea34468b63_medium.jpg 2x",
      },
      username: "lil grub",
      review_date:
        "\n\t\t\t\t\tPosted: July 11\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tthis game ruined my life dont recommend\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Not Recommended",
      hours_played:
        "\n\t\t\t\t\t\t3,791.1 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(3,789.9 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/profiles/76561198408236095/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/148ff422f2245ab66abfeabf3f7506861d6b703b.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/148ff422f2245ab66abfeabf3f7506861d6b703b.jpg 1x, https://avatars.cloudflare.steamstatic.com/148ff422f2245ab66abfeabf3f7506861d6b703b_medium.jpg 2x",
      },
      username: "mac-14",
      review_date:
        "\n\t\t\t\t\tPosted: June 28\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSteam Key\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tthis game makes me suicidal\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Not Recommended",
      hours_played:
        "\n\t\t\t\t\t\t323.8 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(312.5 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/profiles/76561199124069634/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/62fe79c7f53443fe4867d1f8843e65f833732d8a.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/62fe79c7f53443fe4867d1f8843e65f833732d8a.jpg 1x, https://avatars.cloudflare.steamstatic.com/62fe79c7f53443fe4867d1f8843e65f833732d8a_medium.jpg 2x",
      },
      username: "Kuso",
      review_date:
        "\n\t\t\t\t\tPosted: June 19\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tDo you ever feel useless, like you don\'t matter? Do you feel like anything you accomplish is pointless and leads to nothing? Well congratulations you found the perfect game for yourself. Spawn on the beaches of Normandy and get gunned down instantly. Maybe spawn in a desert and get bashed in the head by a rock. Perhaps spawn in the North Pole and get eaten by a fat ♥♥♥♥♥♥♥ polar bear. When you eventually pick a nice spot to start building your ♥♥♥♥♥♥ honeycomb base made out of the finest wood, make your way to the open roads so you can destroy some barrels and get some silly little scrap and some low grade fuel. Maybe even pick up the green card at the gas station as well. That\'s the only time you are progressing in this game, any other time you are either killed and called racist slurs or have your entire base leveled by mystical little rocket fairies that take your things. This game has made me and my whole friend group spend countless hours to mauled in the very end to the point of blind rage. I have pooped blood because of the sheer speed of the stool coming out of my butt cheeks because I am so infuriated. The graphics are great if you want your PC to explode in your face causing third degree burns. The animations are also nice if you are into games that makes your character look like they have lost control of basic motor skills. You cant even change your characters appearance so I look as disappointing in game as I do in real life.\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Recommended",
      hours_played:
        "\n\t\t\t\t\t\t1,952.3 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(1,896.3 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/profiles/76561199154614764/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/849ded13934f37bdbf1a04b5acb4b6d5fcebfe3f.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/849ded13934f37bdbf1a04b5acb4b6d5fcebfe3f.jpg 1x, https://avatars.cloudflare.steamstatic.com/849ded13934f37bdbf1a04b5acb4b6d5fcebfe3f_medium.jpg 2x",
      },
      username: "BobbyBartholomewJamesTheThirdJr",
      review_date:
        "\n\t\t\t\t\tPosted: June 17\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tracist people\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Not Recommended",
      hours_played:
        "\n\t\t\t\t\t\t2,080.0 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(1,951.8 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/id/chris8155/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/5dfbb46be3f072fa75e9e281711bacc48693d736.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/5dfbb46be3f072fa75e9e281711bacc48693d736.jpg 1x, https://avatars.cloudflare.steamstatic.com/5dfbb46be3f072fa75e9e281711bacc48693d736_medium.jpg 2x",
      },
      username: "HydroOwl",
      review_date:
        "\n\t\t\t\t\tPosted: July 12\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        "<div class=\"content\">\n\t\t\t\t\tSince there are hardly any real reviews I feel compelled to throw in my 2 cents.<br><br>Rust could be fun to screw around in for maybe a few hours. But ultimately there's really no overarching goal or anything to achieve, making it feel pointless. Then the players: the absolute lowest of the low.  The game is filled with, I'd guess, 90%+ of people who never accomplish anything, but exist in the game solely to run around the map killing nakeds, and loot their bodies for a rock and a few bits of wood. Somehow this provides them with such intense thrill and excitement that they're content to never progress, or even attempt to improve their gear or base.<br><br>The rest of the player base seems to be the serious players who join clans. They max out absolutely everything, and build a massive base with top tier gear on day 1. They then have so many resources, and nothing else to do, so they go around eliminating every single person off the server, including useless 1x1 shacks. This makes it almost impossible to progress if you actually want to accomplish something outside of a clan. They also tend to wait until people are offline before trying to wipe them out.<br><br>At its core, the game is completely noncompetitive. If you're out trying to farm, you're gonna get killed by griefers that don't even try to progress themselves. If you try to build a decent base, you're gonna be wiped out by a clan within days of server reset when you're offline. <br><br>Stay away.\t\t\t\t\t<div class=\"gradient\"></div>\n\t\t\t\t</div>",
      recommendation: "Not Recommended",
      hours_played: "\n\t\t\t\t\t\t33.3 hrs on record\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/id/NIGHTMARENIGHTMARENIGHTMARE/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/65ec6e18773f7977fa4ceda69260ec6c2fb29054.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/65ec6e18773f7977fa4ceda69260ec6c2fb29054.jpg 1x, https://avatars.cloudflare.steamstatic.com/65ec6e18773f7977fa4ceda69260ec6c2fb29054_medium.jpg 2x",
      },
      username: "smartmoney",
      review_date:
        "\n\t\t\t\t\tPosted: July 4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\ti have been locked in a box and forced into slavery\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Not Recommended",
      hours_played: "\n\t\t\t\t\t\t26.5 hrs on record\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/id/lol134254121/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/17e8d1f1b54edcddabe2496747b6dff4afd38027.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/17e8d1f1b54edcddabe2496747b6dff4afd38027.jpg 1x, https://avatars.cloudflare.steamstatic.com/17e8d1f1b54edcddabe2496747b6dff4afd38027_medium.jpg 2x",
      },
      username: "FORTNITE GANG ON TOP",
      review_date:
        "\n\t\t\t\t\tPosted: July 1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\t♥♥♥♥ game  it makes u racist<br>\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Not Recommended",
      hours_played:
        "\n\t\t\t\t\t\t1,231.1 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(1,197.6 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/profiles/76561199219005663/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/fd4471f25e934c7e4e98ba82ea30884c8a4ef423.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/fd4471f25e934c7e4e98ba82ea30884c8a4ef423.jpg 1x, https://avatars.cloudflare.steamstatic.com/fd4471f25e934c7e4e98ba82ea30884c8a4ef423_medium.jpg 2x",
      },
      username: "Johnathan Kimble",
      review_date:
        "\n\t\t\t\t\tPosted: July 14\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tThe impact of Rust on my mental health has been overwhelming, leading me down a dark path where the warmth of the sun and the touch of grass have become distant memories. Rust consumed my thoughts and drained my energy, becoming an all-consuming obsession that left no room for anything else. Days turned into nights as I delved into endless fat 30 yr old poofta zergs that have no jobs that gets their kits drained all day but when it\'s time for me to sleep they offline raid me at 5am The isolation and seclusion from the outside world only worsened as time passed. The walls of my room became my confinement, and the screen before me my only connection to the outside. Nature\'s beauty slipped away as I lost myself in the depths of Rust. My mind grew weary, my spirit grew fragile, and the toll on my mental health became undeniable, wanting to end my life everytime I get pummelled by 20 man groups that have no ♥♥♥♥♥♥ life. The impact of Rust on my life has been profound, leaving me yearning for the simple joys that the outside world offers. It\'s time for me to step away, to seek healing and rejuvenation, and reclaim the sunshine and the grass that have long been absent from my life.<br><br><br><br><br>\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Not Recommended",
      hours_played:
        "\n\t\t\t\t\t\t1,076.7 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(1,062.3 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/id/TheCrunchyTriscuit/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/7ef2f7b681df75437850bb74fba77ed2a39d6e7f.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/7ef2f7b681df75437850bb74fba77ed2a39d6e7f.jpg 1x, https://avatars.cloudflare.steamstatic.com/7ef2f7b681df75437850bb74fba77ed2a39d6e7f_medium.jpg 2x",
      },
      username: "C00CHIE MAN",
      review_date:
        "\n\t\t\t\t\tPosted: June 30\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tThe game is fantastic but you WILL get raided at 4am and lose everything. Community is some of the best and WORST people you will ever meet as well.\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Not Recommended",
      hours_played: "\n\t\t\t\t\t\t994.1 hrs on record\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/profiles/76561198093902080/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/93aed2abf011bbfca98e302f8133bbc3c894216a.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/93aed2abf011bbfca98e302f8133bbc3c894216a.jpg 1x, https://avatars.cloudflare.steamstatic.com/93aed2abf011bbfca98e302f8133bbc3c894216a_medium.jpg 2x",
      },
      username: "Anteqs",
      review_date:
        "\n\t\t\t\t\tPosted: July 10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\tnot worth it if you have a job or any other responsibility.\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Not Recommended",
      hours_played:
        "\n\t\t\t\t\t\t157.2 hrs on record\t\t\t\t\t\t\t\t\t\t\t\t(156.7 hrs at review time)\t\t\t\t\t\t\t\t\t\t\t",
    },
    {
      href: "https://steamcommunity.com/id/MrTitanFTW/",
      avatar: {
        src: "https://avatars.cloudflare.steamstatic.com/55c7df35d7d8744c7fe485e15f47d9df084d10b9.jpg",
        srcset:
          "https://avatars.cloudflare.steamstatic.com/55c7df35d7d8744c7fe485e15f47d9df084d10b9.jpg 1x, https://avatars.cloudflare.steamstatic.com/55c7df35d7d8744c7fe485e15f47d9df084d10b9_medium.jpg 2x",
      },
      username: "Titan",
      review_date:
        "\n\t\t\t\t\tPosted: June 19\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDirect from Steam\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t",
      review_text:
        '<div class="content">\n\t\t\t\t\t<div class="bb_h1">Rust Review</div>Rust, developed by Facepunch Studios, is a highly challenging multiplayer survival game set in a post-apocalyptic world. Known for its ruthless player interactions, intense PvP combat, and a robust base-building system, Rust has gained significant popularity since its early access release. This in-depth review will evaluate the game\'s core mechanics, progression system, community dynamics, graphics, and overall state to provide an accurate assessment of Rust in its current form.<br><br><div class="bb_h1">Harsh Survival Mechanics</div>Rust\'s survival mechanics are unforgiving and demand constant attention. Players must contend with hunger, thirst, temperature, and radiation while scavenging for resources and crafting essential items. The game\'s emphasis on survival creates a tense and immersive atmosphere, where every decision counts. From hunting animals for food to managing your base\'s defenses, Rust keeps players on their toes and encourages strategic planning to endure the harsh environment.<br><br><div class="bb_h1">Base Building and Progression</div>Rust\'s base-building system is a standout feature, offering players a vast range of creative possibilities. From small shelters to sprawling fortresses, players can construct elaborate structures using various building materials. The ability to reinforce bases with traps and defensive measures adds an extra layer of complexity to gameplay. The progression system, which involves unlocking new blueprints and crafting better gear, provides a sense of accomplishment and motivates players to explore the world and engage in conflicts to secure valuable resources.<br><br><div class="bb_h1">Player Interactions and PvP Combat</div>Rust is notorious for its cutthroat player interactions, where trust is scarce, and alliances can be shattered in an instant. The game\'s open-world nature encourages both cooperation and conflict among players. Whether teaming up to form powerful factions or engaging in intense firefights, Rust\'s PvP combat is brutal and exhilarating. The high stakes and the constant threat of losing everything add a palpable tension to every encounter, making each interaction a thrilling and unpredictable experience.<br><br><div class="bb_h1">Dynamic Community and Social Aspects</div>Rust\'s community dynamics contribute significantly to its gameplay experience. Servers are populated by diverse groups of players, ranging from friendly collaborators to ruthless bandits. The emergence of player-controlled factions and complex social hierarchies adds depth to the game\'s social interactions. The ability to trade, form alliances, and wage wars with other players fosters a dynamic and evolving ecosystem that keeps the game world alive and engaging.<br><br><div class="bb_h1">Visuals and Sound Design</div>Rust\'s visuals create a stark and atmospheric post-apocalyptic setting. The game\'s environments, ranging from lush forests to desolate wastelands, are beautifully rendered and provide an immersive backdrop for the survival experience. However, it\'s worth noting that the game\'s graphics can vary depending on hardware capabilities and server settings.<br><br>The sound design in Rust is equally impressive, with ambient sounds, gunshots, and environmental effects adding depth to the gameplay. The use of positional audio enhances the immersive nature of the game, allowing players to locate nearby threats and react accordingly.<br><br><div class="bb_h1">Conclusion</div>Rust, in its current state, remains a unique and challenging multiplayer survival game. Its unforgiving survival mechanics, deep base-building system, intense PvP combat, and dynamic player interactions create a highly engaging and unpredictable experience. The game\'s evolving community dynamics and the visual and sound design further contribute to its immersive nature. However, Rust\'s brutal and often hostile environment may not be suitable for players seeking a more relaxed or cooperative gameplay experience. For those seeking a true test of survival instincts and a relentless multiplayer sandbox, Rust offers a thrilling and unforgettable journey in a harsh post-apocalyptic world.\t\t\t\t\t<div class="gradient"></div>\n\t\t\t\t</div>',
      recommendation: "Recommended",
      hours_played: "\n\t\t\t\t\t\t129.3 hrs on record\t\t\t\t\t\t\t\t\t\t\t",
    },
  ],
};

const TestingPage = () => {
  return (
    <div className="container relative">
      <div
        style={{
          backgroundImage: `url(${data.background_image})`,
        }}
        className="fixed z-[-1] w-full min-h-screen left-0 top-0 opacity-50 bg-cover"
      />
      <div className="flex flex-row"></div>
      <div className="flex justify-around w-full pt-16">
        <div>
          <Image
            src={data.header_image}
            alt={data.title}
            width={400}
            height={400}
            className="object-cover mb-5"
          />
          <div className="mb-2">
            <MediaWrapper movies={data.movies} />
            <ScreenShotWrapper screenshots={data.screenshots} />
          </div>
          <div className="flex flex-col justify-center mb-5">
            <GameInfoCard {...data} />
            <LanguagesChartCard languages={data.languages} />
            <HowLongtoBeat />
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <h1 className="text-5xl z-10">{data.title}</h1>
          <p>
            <span className="opacity-75 mr-5">Release Date:</span>{" "}
            {data.release_date}
          </p>

          <Description data={data.about_the_game} />
        </div>
      </div>
      <div className="mb-10 ">
        <h2 className="text-3xl">Steam Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="grid-cols-1">
            {data.reviews
              .map((review) => <ReviewCard key={review.username} {...review} />)
              .slice(0, Math.ceil(data.reviews.length / 2))}
          </div>
          <div className="grid-cols-1 ">
            {data.reviews
              .map((review) => <ReviewCard key={review.username} {...review} />)
              .slice(Math.ceil(data.reviews.length / 2))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingPage;
