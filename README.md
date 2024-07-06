# Reddit Redirector

Reddit Redirector is a Chrome extension that automatically redirects you from "www.reddit.com" to "new.reddit.com". It includes a toggle switch to easily enable or disable the redirection.

## Features

- Automatically redirects from "www.reddit.com" to "new.reddit.com"
- Popup interface with a toggle switch to enable/disable the extension
- Persists user preference across browser sessions
- Built with Manifest V3 for improved performance and security

## Installation

1. Clone this repository or download it as a ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.
5. The Reddit Redirector extension should now appear in your extensions list and be ready to use.

## Usage

1. Click on the Reddit Redirector icon in your Chrome toolbar to open the popup.
2. Use the toggle switch to enable or disable the redirection.
3. When enabled, any attempts to access "www.reddit.com" will automatically redirect to "new.reddit.com".

## Files

- `manifest.json`: Defines the extension structure and permissions
- `background.js`: Handles the redirection logic and manages extension state
- `popup.html`: Defines the structure of the popup interface
- `popup.js`: Manages the popup functionality and user interactions
- `icon16.png`, `icon48.png`, `icon128.png`: Extension icons in various sizes

## Development

To modify or enhance the extension:

1. Make changes to the relevant files.
2. If you modify `manifest.json`, you may need to reload the extension in `chrome://extensions/`.
3. For changes to other files, you can usually just refresh the target page to see updates.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
