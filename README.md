# Immortal
Proxy frontend made for Proxathon 2023, with the famous 3mb tailwind bundle. (trust it adds user experience fr fr)

## Proxy Features
- Custom CSS & JS: <br />
  Be able to inject custom CSS & JS code into the page freely, allowing you
  to customize how any page looks or feels. Or you can just completely ruin
  every site, it's up to you.
- Customizible options: <br />
  Every bit of Immortal is customizible in the settings, including but not 
  limited to:
   - Tab Cloaking: <br />
   Tab Cloaking can be customizible, from enabled always, to enabled when
   the tab is unfocused. There are also a large list of presets, to fit
   every need, or you can specify one yourself, if you want.
   - Emergency Button: <br />
   The Emergency button is also very customizible, every aspect can be
   customized, from the hotkey, URL, or use one of our premade presets.
   - Search engine: <br />
   You can also customize the search engine preset too, from all the
   major search engines, like Google, ~~Bing~~, and DuckDuckGo!
   And of course, you can specify a custom search engine if you want.
   - Themes: <br />
   This is a upcoming feature but you will be able to customize the
   look and feel of Immortal itself, if you want light or dark mode,
   that's an option!

## How to host
Requirements:
- Node.js 17.x or higher
- Git
- This tutorial is made for Windows in mind, but should be similar steps on Linux or Mac.
1. Start by cloning Immortal to your PC (this requires Git to be installed):
   ```bash
   git clone https://github.com/ievade/Immortal
   ```
3. Install required packages & static folder
   ```bash
   npm i & npm i ./static
   ```
5. Run Immortal
   ```bash
   node ./src/index.js
   ```
   This will run Immortal on default port of 8080. You can customize the port in [index.js](https://github.com/ievade/Immortal/blob/main/src/index.js)
