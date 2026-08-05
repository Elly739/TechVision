# TechVision

TechVision is a responsive marketing website for a digital product and software consultancy. The site presents TechVision's services, integrations, case studies, pricing, project estimation workflow, insights, and contact options through a cohesive multi-page experience.

## Overview

The website is implemented as a lightweight static site using semantic HTML, shared CSS, and vanilla JavaScript. It is designed to communicate technical credibility while remaining approachable for growing teams evaluating a digital delivery partner.

### Primary sections

- Homepage with service overview, proof points, integrations, case studies, and insights
- About page with company positioning, values, and delivery approach
- Services page covering web, mobile, cloud, automation, and product development
- Integrations directory with searchable business and productivity tools
- Case studies showcasing representative project outcomes
- Pricing and project cost estimator pages
- Blog and insights page with image-led article cards
- Contact page for project enquiries

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- SVG icons and illustrations
- Responsive CSS Grid and Flexbox layouts
- Local image assets in `assets/`

No frontend framework, package manager, or build step is required for the current site.

## Project Structure

```text
.
├── index.html          # Homepage
├── about.html          # Company overview and values
├── services.html       # Services and delivery process
├── integrations.html   # Integration directory and search
├── case-studies.html   # Selected project examples
├── pricing.html        # Pricing information
├── estimator.html      # Project cost estimator
├── blog.html           # Insights and article cards
├── contact.html        # Contact and enquiry page
├── style.css           # Shared site styles and responsive rules
├── script.js            # Shared client-side interactions
├── assets/             # Images, illustrations, logos, and icons
└── README.md           # Project documentation
```

## Running Locally

Because this is a static website, it can be opened directly in a browser. For the most reliable results, serve the project from a local HTTP server so relative paths and browser behavior match a deployed environment.

For example, with Python installed:

```bash
python3 -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

## Development Guidelines

- Keep shared styling in `style.css` rather than adding repeated inline styles.
- Keep reusable behavior in `script.js` and avoid page-specific duplication where practical.
- Use semantic HTML elements and maintain a logical heading hierarchy.
- Provide descriptive `alt` text for meaningful images and empty alt text for decorative images.
- Test layouts at mobile, tablet, and desktop widths after visual changes.
- Preserve the existing indigo, cyan, neutral, and text color system when adding new sections.
- Use SVG icons or image assets instead of emoji-based interface icons.
- Optimize new images before adding them to `assets/` and use descriptive filenames.

## Content and Visual System

The site uses a modern technology-consultancy visual language built around:

- Indigo as the primary brand color
- Cyan as a supporting accent
- Light neutral surfaces and dark readable text
- Rounded cards with restrained shadows
- Image-led case studies and insight cards
- Responsive layouts using CSS Grid and Flexbox
- Subtle hover and scroll-reveal interactions

## Deployment

The project can be deployed to any service that supports static files, including Vercel, GitHub Pages, Netlify, or a traditional web server. Ensure that all HTML files, `style.css`, `script.js`, and the complete `assets/` directory are included in the deployment.

For a Vercel deployment, connect the repository or import the project as a static project. No environment variables or server-side runtime are required by the current implementation.

## Quality Checklist

Before publishing changes:

- Confirm every navigation link resolves correctly.
- Check the homepage, services, integrations, case studies, blog, and contact pages.
- Test the site at mobile and desktop widths.
- Verify that images load from the deployed `assets/` directory.
- Confirm interactive controls such as integration search and the estimator behave as expected.
- Check keyboard focus states and readable color contrast.
- Remove temporary placeholder content and debugging output.

## License

This repository contains proprietary TechVision website content and design work. Unless explicitly authorized, do not redistribute, resell, or reuse the brand assets, copy, or source files outside the project.
