tapiconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="auliaputri48281@gmail.com"
global.location="INDONESIA."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/EkA2B2miDqOJOrvm1LCHtq";
global.website=process.env.GURL || "https://chat.whatsapp.com/EkA2B2miDqOJOrvm1LCHtq" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "+6283861040903" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "+6283861040903"
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+6283861040903";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_15_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDcwLFxuICAgICAgICA2MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY2LFxuICAgICAgICA3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDU4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxmTXdDVkRtc0ZZb24vczFoK0R1Q0tydzhJdWtjOXN5THUxaFo5STVFdFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4Mzg2MjE0NTc2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0VFQkUyODQwNzgxQjIyQzBFOERDRTZFM0UzRjQyM0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTMxMzIyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4Mzg2MjE0NTc2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUNGMTE1QzZFQTEwNzVEOUFDOUI0NjREMjBBQ0JGM0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTMxMzIyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1aZ2t5UlI5VFJLNUZpVFcxZmx4X3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjNjMzE2MDgtYmQ5NS00MTgzLWJkMTktYTlmOWY3M2VmZmQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgOTgsXG4gICAgICAxODMsXG4gICAgICAxMjgsXG4gICAgICAxNTksXG4gICAgICAyMTgsXG4gICAgICAxNDQsXG4gICAgICAxMDcsXG4gICAgICAxMDEsXG4gICAgICAyNDAsXG4gICAgICAxOTcsXG4gICAgICAxMTksXG4gICAgICAyMTEsXG4gICAgICA3MSxcbiAgICAgIDIwNixcbiAgICAgIDIyMSxcbiAgICAgIDIzMyxcbiAgICAgIDIwMCxcbiAgICAgIDM1LFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDExMCxcbiAgICAgIDE5LFxuICAgICAgMyxcbiAgICAgIDI0NixcbiAgICAgIDEzMyxcbiAgICAgIDE2OSxcbiAgICAgIDE1MyxcbiAgICAgIDMyLFxuICAgICAgNjIsXG4gICAgICAxNjMsXG4gICAgICAyMjUsXG4gICAgICA3NCxcbiAgICAgIDEzNixcbiAgICAgIDIwOCxcbiAgICAgIDYsXG4gICAgICAwLFxuICAgICAgMjM5LFxuICAgICAgMTM3LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzI0TDVMN01cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjYyODM4NjIxNDU3NjE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUzNzkwMzMwMjIwNjgxOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwieWFuenp6XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkxCMkpNQ0VQSzluTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZKzNLenl6MlE2a0hMZnRlekx5WWEyalY2OER3MTVGR091aWxGOVZXZmlBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBxbGxzV045dFpZTW1iczlvK0J0TFVQdWtVUENQaDRiYUpFSXc1SXFGclZ4QmQ1RERnTUloU3ordzRJb0p2Rm9YNVRRUlBFU2U3a2JmMzVEbzJGTUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNtMVhVbDRHZE80YWdmNmVjRjZkWlNrL1k3YnhueUhMb1RWVVJSZTR4N2U3NGJkTTJhcjMxbWdzR08rVm1KSGozc0tJeFNTOWJlZXBjK04yOHZMZkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYyODM4NjIxNDU3NjE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDEzMTMxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1XSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVdKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNWNWYlRFMC9peHpraWpWR29hRHhBTUJ2MHpvN1FiREk2NmkxdkNZSDhiMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NzgxNjY5OTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDEzMTMxODkzMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "YANZZ-MD",
  packname: process.env.PACK_NAME || "❤️",
  botname : process.env.BOT_NAME  || "YANZZ-MD",
  ownername:process.env.OWNER_NAME|| "YANZZ_STORE",


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
