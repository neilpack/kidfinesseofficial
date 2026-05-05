This will go over how to structure a new theme for Shopify:
your-theme-repo/
├── assets/
├── config/
├── layout/
├── locales/
├── sections/
├── snippets/
└── templates/

1. layout/ (The Master Wrapper)
This folder contains your master layout files. Every other template is injected into these files.

What goes here: Liquid files (.liquid).

Required file: theme.liquid. This is the HTML skeleton of your site. It must include the {{ content_for_header }} tag inside the <head> and the {{ content_for_layout }} tag inside the <body>.

2. templates/ (The Page Frameworks)
This folder dictates what is rendered on specific types of pages (like the home page, a product page, or a blog post). In OS 2.0, these are primarily JSON files that declare which sections appear on the page.

What goes here: JSON files (.json) or Liquid files (.liquid for older setups or specific customer pages).

Required files: At minimum, you need an index.json (for the home page). You will typically also have product.json, collection.json, page.json, etc.

3. sections/ (The Building Blocks)
Sections are reusable modules of content (like a header, footer, slideshow, or featured product). This is where the bulk of your HTML and Liquid logic lives.

What goes here: Liquid files (.liquid).

Required files: None are strictly required to upload, but a functional site usually needs at least a header.liquid and footer.liquid, plus whatever sections you reference in your JSON templates.

Key detail: Section files contain a {% schema %} tag at the bottom, which defines the settings merchants can change in the Shopify Theme Editor.

4. snippets/ (The Reusable Chunks)
Snippets are smaller pieces of code that you want to reuse across different files, like an SVG icon, a product card, or pagination logic.

What goes here: Liquid files (.liquid).

How to use them: You call them in other files using the {% render 'snippet-name' %} tag. They do not have schema settings.

5. assets/ (The Static Files)
This is where all your CSS, JavaScript, fonts, and images live.

What goes here: .css, .js, .svg, .png, .jpg, etc.

Strict Rule: No subfolders are allowed here. All assets must sit directly in the assets/ root.

6. config/ (The Global Settings)
This folder powers the global "Theme Settings" tab in the Shopify Editor (where merchants set global colors, typography, and social links).

What goes here: JSON files.

Required files: * settings_schema.json: Defines the input fields for the merchant.

settings_data.json: Stores the actual values the merchant saves.

7. locales/ (The Translations)
This folder handles the translation strings for your theme, allowing it to support multiple languages.

What goes here: JSON files.

Required file: At least one default language file, usually en.default.json (for English).

The Bare Minimum for Shopify to "Sense" It
If you want to push a repository to Shopify right now just to prove it connects, you absolutely must have:

- layout/theme.liquid
- templates/index.json
- config/settings_schema.json