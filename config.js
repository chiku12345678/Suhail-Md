const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID =
E0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaTUwY2lpRnlJT0ZzRThES2VES2FLRzl3Nnc2c3FrTUlvY3p1c1VwWUpzST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQTlCLXVqTVVSY2lqX2VyYWpKcURpUVwiLFxuICBcInBob25lSWRcIjogXCI2YzY4NGM1My1lODMwLTRmNjktYmNlYS0wODM0M2YxMDRjZjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMjU1LFxuICAgICAgMTYyLFxuICAgICAgMTQ4LFxuICAgICAgMTkyLFxuICAgICAgMjQsXG4gICAgICAyNTAsXG4gICAgICAxNzIsXG4gICAgICAyMDEsXG4gICAgICAxMTUsXG4gICAgICAxNTAsXG4gICAgICAxNjAsXG4gICAgICAxNzcsXG4gICAgICAxNDMsXG4gICAgICAxMDgsXG4gICAgICAxNDAsXG4gICAgICAxMzUsXG4gICAgICAyMjMsXG4gICAgICAyMTMsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAxMSxcbiAgICAgIDEwNyxcbiAgICAgIDE0NixcbiAgICAgIDI0MCxcbiAgICAgIDI1NCxcbiAgICAgIDE1LFxuICAgICAgNTksXG4gICAgICA0MCxcbiAgICAgIDEyOSxcbiAgICAgIDI1MyxcbiAgICAgIDIxNSxcbiAgICAgIDI3LFxuICAgICAgMTIyLFxuICAgICAgMjM1LFxuICAgICAgMTUsXG4gICAgICAxNzAsXG4gICAgICAzMyxcbiAgICAgIDUyLFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjFCTkdRNkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQzNDkxMDI3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NTMzNTg1ODg2NDIwNjoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZmZvUjhRMDltWXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjV3OGFRVW1RS21oQ0ZHdUNZeS9UOThVKytGYnQveVdCQ25WM2g0eHVlRUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT09WQVVaWjFOWVJQQ0VIMDg5RUVZUnRLSS8yY3pxVERYaDlZbkZMYUtxSVpmbnRBQlMvNi9jcFpNTWFYUS8rQnhIRVJDTkhDdkhTandUYmxxeXhpQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYmszZE8vR0xmZ3VmdHhDVG54R1oxZGFhcmZsZGtGaDBNejE4WENOZ1FlWGJVRFl3anlxY0g5ZDQ1bktGajNtaVI4M2lXS2MvQ3RINGJqTFVHblB4Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDM0OTEwMjc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDY5MzM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHFLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIcUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYQk5rMFJVanJ4a1RoNU5tOFBsazY3dXlYYTBlMmxhUXYwd1dYaVNoMDVZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1NTY0NTk2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
