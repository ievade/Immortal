# Immortal
Proxy frontend made for Proxathon 2023, with the famous 3mb tailwind bundle. (trust it adds user experience fr fr)

## Proxy Features
- Custom CSS & JS
  Be able to inject custom CSS & JS code into the page freely, allowing you
  to customize how any page looks or feels. Or you can just completely ruin
  every site, it's up to you.
- Customizible options
  Every bit of Immortal is customizible in the settings, including but not 
  limited to:
   - Tab Cloaking
   Tab Cloaking can be customizible, from enabled always, to enabled when
   the tab is unfocused. There are also a large list of presets, to fit
   every need, or you can specify one yourself, if you want.
   - Emergency Button
   The Emergency button is also very customizible, every aspect can be
   customized, from the hotkey, URL, or use one of our premade presets.
   - Search engine
   You can also customize the search engine preset too, from all the
   major search engines, like Google, ~~Bing~~, and DuckDuckGo!
   And of course, you can specify a custom search engine if you want.
   - Themes
   This is a upcoming feature but you will be able to customize the
   look and feel of Immortal itself, if you want light or dark mode,
   that's an option!

## How to host
Requirements:
- Node.js 17.x or higher
- Git
- This tutorial is made for Windows in mind, but should be similar steps on Linux or Mac.
1. Start by cloning Immortal to your PC (this requires Git to be installed):
   `git clone https://github.com/ievade/Immortal`
2. Install required packages & static folder
   `npm i & npm i ./static`
3. Run Immortal
   `node ./src/index.js`
   This will run Immortal on default port of 8080.
