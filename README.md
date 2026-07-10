# Salem Jump Rope Website

This is the website folder for Salem Jump Rope.

## How To Preview

Open `index.html` in a browser for a quick fallback preview.

If you want a local preview link, run this from the website folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

Use the local preview link when testing CMS-loaded content, because the browser needs to fetch `content/site.json`.

## How The Owner Updates The Site

The site now has a CMS admin page.

After the site is live and connected to GitHub/Netlify, send the owner the admin link:

`https://your-site-name.netlify.app/admin/`

The owner can update most site content from that screen, including:

- homepage headline, mission, and stats
- clinic and tryout dates, times, locations, and descriptions
- coaches, captains, ACE athletes, and history timeline
- sponsorship levels and current sponsors
- mentorship values, tutorials, workouts, fitness cards, and event types
- store products, prices, images, and Square payment links
- FAQ and chatbot answers
- contact information and social links

The editable content lives in:

`content/site.json`

The admin configuration lives in:

`admin/config.yml`

Before launch, replace this placeholder in `admin/config.yml`:

`REPLACE_WITH_GITHUB_OWNER/REPLACE_WITH_REPO_NAME`

with the real GitHub repository, for example:

`salem-jump-rope/salem-jump-rope-website`

The old hidden `#updates` page can remain as a fallback for one-off requests, but it is no longer the main update process.

## Team Access Plan

If the team wants one shared username and password, that can work for basic team access.

The password should be set through the website host. It should not be placed inside the public website files.

Simple setup:

1. Host the site.
2. Protect the Team Access page through the host.
3. Give the team one username and one password.
4. Change the password each season or whenever someone leaves the team.
5. Do not post private information until the page protection is turned on.

## Square Payment Plan

The easiest Square setup is to use Square Payment Links first.

Simple setup:

1. Create a Square account for the business.
2. Create a payment link for each item or fee.
3. Example links: clinic fee, tryout fee, team fee, shirt, hoodie, sponsorship.
4. Send the payment link to whoever manages the website.
5. Paste each Square link into the matching product's `Square Payment URL` field in the CMS.

This keeps payments inside Square and avoids storing payment information on the website.

Use custom Square checkout code only if the team later needs a full online cart.

## Still Needed

Real email and phone number.

Spring clinic date.

David's Team Constitution PDF.

Form delivery setup so messages go to email.

Square payment links for store, clinic, or tryout payments.

Domain name and hosting account.

## Main Files

`index.html` has the pages.

`styles.css` has the design.

`script.js` has the cards, lists, FAQ, and form behavior.
