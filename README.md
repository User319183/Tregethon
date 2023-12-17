# Tregethon

## Introduction

This project, formerly a paid service, has now been cracked and is open source for everyone to use. It's a JavaScript-based tool that collects various pieces of information about a user's system and environment, and sends this data to a specified Discord webhook.

## Features

- Collects information such as the user's IP, browser details, platform, language, and more.
- Checks if the user is connected to a VPN.
- Includes anti-tamper measures to prevent unauthorized modifications.
- Can be configured to perform various actions such as opening popups, disabling key presses, clearing the clipboard, and more.

## Usage

Before using this script, it's highly recommended to configure it according to your needs. Here are the steps to get started:

1. **Set your webhook token**: The script sends data to a Discord webhook. You need to provide the URL of this webhook. Replace the `webhook_token` variable in the script with your actual Discord webhook token. The URL should look something like this: `https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz` and your should be like this: `1234567890/abcdefghijklmnopqrstuvwxyz`.

2. **Set your IPinfo token**: The script uses the `ipinfo.io` API to get information about the user's IP address. Replace the `ipinfo_token` variable in the script with your actual IPinfo token. By default, the script uses the trial version of the API, which will get updated every 7 days via a new token. If you want to use your own token, you can get one for free from [here](https://ipinfo.io/signup).

3. **Configure the script**: The script has various options that you can set to customize its behavior, such as `popups`, `disable_key_press`, `clear_clipboard`, `crash_browser`, and `crash_discord_api`. Set these options according to your needs (`true` or `false`).

4. **Obfuscate the script**: This step is optional, but highly recommended. You can obfuscate the script to make it harder to reverse engineer. You can use a tool like [this](https://obfuscator.io/) to obfuscate the script. Once you've obfuscated the script, replace the contents of the `index.js` file with the obfuscated code.

5. **Have the user run the script**: Once you've configured the script, you can have the user run it either through [inspect element] or by using a [bookmarklet](https://www.freecodecamp.org/news/what-are-bookmarklets/). Once the user runs the script, the data will be sent to your Discord webhook.

Remember, incorrect configuration can lead to the script not working as expected. So, take your time to configure it properly.

## Disclaimer

This tool is meant for educational purposes and should be used responsibly. Respect the privacy and rights of others. Do not use this tool for illegal activities. The author is not responsible for any misuse of this tool.

## License

This project is now open source under the MIT license. See the LICENSE file for details.