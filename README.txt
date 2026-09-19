SHERWIN JOHN S. RAMA - BLUE CODING PORTFOLIO

FILES:
- index.html    Home page
- about.html    About page
- work.html     Work page
- contact.html  Contact page
- styles.css    Main responsive stylesheet
- script.js     Vanilla JavaScript navbar dropdown behavior

HOW TO OPEN:
1. Keep all files in the same folder.
2. Open index.html in your browser.
3. Use the navigation links to move between all 4 pages.

PROFILE PICTURE:
The Home page currently contains a profile-picture placeholder.
To add your picture:
1. Put your image in this folder, for example: profile.jpg
2. In index.html, replace the content inside:
   <div class="profile-photo"> ... </div>
   with:
   <img src="profile.jpg" alt="Sherwin John S. Rama" class="profile-photo">

DESIGN:
- Dark blue coding-inspired theme
- Responsive HTML/CSS-only mobile menu
- Works on desktop, tablet, and mobile
- Coding-style labels, monospace text, grid background, and terminal window elements

ABOUT PAGE PROFILE PHOTO:
Save your actual picture inside this folder using the filename:
profile.jpg

The About page will automatically display it above your Personal Information and Education.


WORK PAGE:
The Work page now displays these GitHub projects:
- ProductManagement — CSS — 2 stars — Updated May 30
- gamehub — Dart — 2 stars — Updated May 19
- testproductAPI — JavaScript — 2 stars — Updated Apr 25
- RAMZCODE — 2 stars — Updated Apr 21

If you want each project card to open the exact GitHub repository,
add the repository URL to each project card in work.html.


REVISED PROFILE PHOTO
- profile.jpg is already included.
- The Home page displays the real photo inside a circular blue/cyan frame.
- The About page uses the same profile.jpg file.


CLICKABLE GITHUB PROJECT CARDS:
Open work.html and replace these placeholders with the actual repository URLs:
- PRODUCT_MANAGEMENT_GITHUB_LINK
- GAMEHUB_GITHUB_LINK
- TESTPRODUCTAPI_GITHUB_LINK
- RAMZCODE_GITHUB_LINK

Example:
href="https://github.com/yourusername/ProductManagement"

Each project card will open the GitHub repository in a new browser tab.


JAVASCRIPT DOM ACTIVITY:
- Added a Projects dropdown to the navbar on all pages.
- The dropdown contains three project links.
- Uses document.querySelector(), addEventListener(), and classList.toggle().
- Dropdown is hidden by default and opens/closes on click.
- Bonus: clicking outside closes the menu.
- Bonus: arrow changes between down/up when the menu opens/closes.
- Responsive: works with the existing mobile navigation.
- No JavaScript frameworks or libraries are used.
