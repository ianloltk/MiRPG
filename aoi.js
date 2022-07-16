const aoijs = require('aoi.js');
const bot = new aoijs.Bot({
   "token": "OTk2MjM5MjQxNDcyMzg5MjMw.GfF3Ng.SgZ3Yqn7TkdDvee2vB7f-bgi-KMNHx8QD5hDis",
  prefix: ["$getServerVar[Prefix]", "$getServerVar[Prefix] ", "<@!$clientID>", "<@$clientID> "], // Client ID trigger is mentioning the bot. Can be useful if a user doesn't know the prefix.
  intents : ['guilds','guildMessages'],
});

bot.status({
    mobile: "true",
    text: ".help", 
    type: "LISTENING",
    time: "12",
    })

bot.variables({
	ownid: "764564962815115267", // Change this to your own ID. This is for when $botOwnerID won't work with multiple IDs (like in an $if statement). Can ONLY BE ONE ID.
  Coin: "🪙", // Variable to make typing the coin emoji easier.
    Coi: "🪙",
  Heart: "<:heart:996297836423549000>", // Variable to make typing the hp emoji easier.
  Coins: "0",
  Sord: "<:sord:996351667366805536>",
  HP: "100",
  MaxHP : "100",
  ATK: "1",
  Prefix: ".",
  EmbedColor : "#FFE302",
  afk: "0",
  afkr: "`none specified`",
  FamilyMode : "False",
  UserInt : "True",
  FirstDaily: "True",
  DailyAchievement: "🔒",
  FarmO: "🍊",
  FarmK: "🥝",
  FarmS: "🍓",
  FirstFarm: "True",
  FarmAchievement: "🔒",
  FirstATK: "True",
  ATKAchievement: "🔒",
  InBusiness: "False",
  BusinessType: "None",
  Stone : "0",
  Wood : "0",
  Slime: "0",
  BoughtHouse: "False", // Bought house or not
  BoughtPick: "False", // Bought pickaxe or not
  BoughtBait: "False", // Bought bait or not
  GiftL: "1", // Gift Stock
  HouseL: "1", // House Stock
  PickL: "1", // Pickaxe Stock
  BaitL: "1", // Bait Stock
  PetType: "none",
  PetName: "Your pet hasn't been named yet. Run \`<prefix>petname <name>\`.",
  HasPet: "false",
  PetIMG : "",
  Gold: "0",
  Diamond: "0",
  PX: "<:PX:996350710868344913>",
  Locked: "🔒",
  Unlocked: "🔓",
  SlimeEmoji: "<:slime:996339072253562931>",
  StoneEmoji: "<:stone:996339366504960010>",
  GoldEmoji: "<:goldbars:996339250415022121>",
  DiamondEmoji: "<:dieamond:996339509337800754>",
  AcceptEmoji: "<:accept:996339875097874492>",
  DenyEmoji: "<:deny:996339907880562808>",
  Sender: "",
  MarriageDate: "", // Time in unix since user was married.
  InRelationship: "False",
  MarriedTo: "",
  CatNotificationsOn: "True",
  MiningTime: "10m",
  deerStock: "0",
  mooseStock: "0",
  rabbitStock: "0",
  foxStock: "0",
  bjActive: "False",
  bjBet: "",
  slotAchievement: "🔒",
  slotAmount: "0"
})

bot.onMessage({respondToBots: false})
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"commands/")
 console.log("Enjoy!")
// Error handler so bot doesn't kaboom
try{}catch(error){console.log(error)}