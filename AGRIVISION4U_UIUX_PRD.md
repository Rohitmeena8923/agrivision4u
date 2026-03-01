# AGRIVISION4U — UI/UX DESIGN PRD
### Version 1.0 | For: Senior UI/UX Designer | Classification: Design Brief

---

## 1. DESIGN BRIEF SUMMARY

**What we're building:** India's most professional Climate-Agriculture Consultancy website — a premium digital platform that serves as the primary lead generation, credibility establishment, and thought leadership vehicle for Agrivision4u across 5 service verticals.

**Who it's for:**
- Government decision-makers (NDMA, state agriculture departments, NABARD)
- International development organizations (World Bank, UNDP, GIZ, FAO)
- Corporate sustainability/ESG teams (ITC, PepsiCo, insurance companies, banks)
- Food startups and MSMEs seeking compliance guidance
- Climate finance bodies and impact investors

**Key Design Goals:**
1. **Authority & Trust:** Must instantly communicate "government-grade credibility" and "scientific expertise"
2. **Premium Aesthetic:** Compete visually with ERM, McKinsey, BCG — not with typical Indian startups
3. **Lead Generation:** Every page must guide visitors toward a consultation booking
4. **Data Sophistication:** Showcase data capabilities through interactive elements and visualizations
5. **Mobile-First:** 60%+ traffic expected from mobile devices, especially government officials in the field

---

## 2. BRAND IDENTITY GUIDELINES

### Logo Concept
- **Primary Mark:** A stylized leaf integrating a data grid/satellite imagery pattern — symbolizing the intersection of nature and technology
- **Wordmark:** "agrivision4u" in lowercase with "4u" in accent color — approachable yet professional
- **Symbolism:** Growth (leaf), precision (grid), global perspective (satellite view), forward vision (eye/lens metaphor)
- **Lockups:** Horizontal (primary), stacked (secondary), icon-only (favicon/social)

### Color System

**Primary Palette:**
| Color | HEX | Usage |
|---|---|---|
| Deep Forest Green | `#1B5E20` | Primary brand, headers, CTAs |
| Medium Green | `#2E7D32` | Secondary elements, hover states |
| Golden Harvest | `#F9A825` | Accent, highlights, badges |
| Almost Black Green | `#0D1B0F` | Dark backgrounds, text |
| Soft Mint White | `#F1F8E9` | Light backgrounds, cards |

**Earth Tones:**
| Color | HEX | Usage |
|---|---|---|
| Earth Brown | `#5D4037` | Data/agriculture elements |
| Sand | `#BCAAA4` | Subtle backgrounds, borders |
| Clay | `#8D6E63` | Charts, secondary data |

**Climate/Data Colors:**
| Color | HEX | Usage |
|---|---|---|
| Sky Blue | `#0277BD` | Data services, charts |
| Deep Water | `#01579B` | Climate/hydrology content |
| Risk Red | `#E53935` | Disaster/risk content, warnings |

**Semantic Colors:**
| Color | HEX | Usage |
|---|---|---|
| Success | `#2E7D32` | Success states, positive indicators |
| Warning | `#F9A825` | Warning states, attention needed |
| Error | `#E53935` | Error states, destructive actions |
| Info | `#0277BD` | Informational elements |

**Dark Mode:** Dark backgrounds use `#0D1B0F` with `#F1F8E9` text. Cards use `#1A2E1D` with `#2E7D32` borders.

### Typography System

**Display Font (Headings H1–H3):** Playfair Display
- Conveys authority, elegance, and editorial quality
- Weight: 700 (bold) for H1, 600 (semibold) for H2-H3

**Body Font:** DM Sans
- Clean, geometric, highly readable at all sizes
- Weights: 400 (regular), 500 (medium), 700 (bold)

**Data/Mono Font:** JetBrains Mono
- For statistics, data tables, code snippets, pricing
- Weight: 400 (regular), 600 (semibold)

**Type Scale:**
| Element | Size (Desktop) | Size (Mobile) | Weight | Font |
|---|---|---|---|---|
| H1 (Page Title) | 64px | 40px | 700 | Playfair Display |
| H2 (Section Title) | 48px | 32px | 700 | Playfair Display |
| H3 (Subsection) | 32px | 24px | 600 | Playfair Display |
| H4 (Card Title) | 24px | 20px | 700 | DM Sans |
| Body Large | 20px | 18px | 400 | DM Sans |
| Body | 16px | 16px | 400 | DM Sans |
| Body Small | 14px | 14px | 400 | DM Sans |
| Caption | 12px | 12px | 500 | DM Sans |
| Data/Stats | 48px | 32px | 600 | JetBrains Mono |

### Iconography Style
- **Icon Family:** Lucide Icons (clean, consistent, MIT licensed)
- **Style:** 1.5px stroke, rounded line caps, 24px default
- **Custom Icons Needed:**
  - 5 vertical-specific icons (leaf+shield for disaster, data grid for climate data, coin+leaf for finance, tag+apple for food, recycle+crop for waste)
  - Sub-service icons (drone, satellite, lab flask, document, chart)
  - Process step icons (assess, analyze, report, implement)

### Imagery & Illustration Style
- **Photography:** Real Indian agricultural landscapes, drone aerial shots, satellite imagery, team in field. Avoid generic green field stock photos — use context-specific imagery (paddy fields, soil sampling, drone surveys, data dashboards on screens)
- **Data Visualization Imagery:** Satellite false-color composites, NDVI heat maps, climate risk maps as decorative elements
- **Illustration Style:** Technical/scientific line illustrations with green accent color — used sparingly for process flows and methodology diagrams

---

## 3. DESIGN SYSTEM COMPONENTS

### Navigation
- **Desktop:** Sticky navbar, transparent on hero → solid on scroll (backdrop-blur with 95% opacity). Logo left-aligned. Mega-menu for "Services" dropdown showing all 5 verticals with icons and 2-line descriptions. Direct links: About, Case Studies, Insights, Contact. Right-aligned "Book Consultation" CTA button (golden accent)
- **Mobile:** Hamburger menu (right). Full-screen drawer overlay with staggered list animation. Logo centered on mobile header. Sticky "Book Consultation" bottom bar on mobile
- **Sticky Behavior:** Transparent → scroll past hero → navbar becomes solid with shadow. Logo shrinks from 48px to 36px height
- **Active State:** Current page gets underline with green gradient

### Hero Sections

**Homepage Hero:**
- Full viewport height (100vh)
- Background: Drone/satellite image of Indian farmland with deep green gradient overlay (70% opacity)
- Animated headline with word-by-word stagger reveal
- Subheadline fades in after headline
- Two CTAs side by side: "Explore Our Services" (primary green) + "Book Free Consultation" (golden accent)
- Three floating stat cards positioned right side (semi-transparent glass effect): "15+ States", "500+ Projects", "10,000+ Hectares"
- Subtle parallax on background image (10px max travel)

**Service Page Heroes:**
| Vertical | Visual Metaphor | Color Accent |
|---|---|---|
| Disaster Management | Satellite flood imagery with red/orange overlay | Risk Red + Deep Green |
| Climate Data | Data visualization grid with flowing data particles | Sky Blue + Deep Green |
| Climate Finance | Green bond/currency imagery with leaf patterns | Golden + Deep Green |
| Food Labelling | Clean lab/food product imagery with certification stamps | Earth Brown + Deep Green |
| Agri Waste | Crop residue transformation imagery (waste → energy) | Medium Green + Golden |

### Card Components

**Service Cards (5 Verticals):**
- 280px×320px, rounded-2xl (16px), white bg with subtle green left border (3px)
- Icon (48px, green) → H4 title → 2-line description → "Learn More →" link
- Hover: translateY(-8px) + shadow-xl + left border grows to 6px + bg shifts to mint

**Case Study Cards:**
- 380px×280px, image top (16:9), rounded-xl
- Category badge (glass effect) top-left over image
- Title, 2-line excerpt, "Read Case Study →"
- Hover: image scale 1.05

**Team Member Cards:**
- 250px×350px, photo top (1:1 circle cutout alternative: square with round corners)
- Name, designation, credentials
- Hover: photo scale 1.08 + overlay with social links + bio snippet

**Blog/Insight Cards:**
- Horizontal layout on desktop (image left, content right)
- Category tag, title, date, read time, author
- Hover: card shifts right 4px + shadow

**Data Product Cards:**
- Dark bg (almost-black-green), green gradient border
- Data type icon, product name, description, "Request Sample" CTA
- Hover: border glow effect (green)

### CTA System
- **Primary CTA:** Rounded-full, bg-brand-primary, white text, 16px padding x/y, font-medium. Hover: bg-brand-secondary + scale 1.02 + shadow-lg. Focus: ring-2 ring-brand-accent
- **Secondary CTA:** Rounded-full, border-2 border-brand-primary, green text, transparent bg. Hover: bg-brand-light + fill effect
- **Inline CTA:** Text link with arrow icon, underline on hover, green color
- **Floating CTA:** WhatsApp button fixed bottom-right (64px circle, green gradient, WhatsApp icon). Pulse animation on page load. "Chat with us" tooltip on hover

### Forms
- **Input Fields:** Rounded-lg, border-gray-200, 48px height, bg-white. Focus: border-brand-primary + ring-2 ring-brand-light. Error: border-error + error message below
- **Textarea:** Same style, min-height 120px
- **Select/Dropdown:** Custom styled to match input, with Lucide chevron icon
- **File Upload:** Dashed border zone with drag-drop support, file icon, "Drop files or click to browse" text
- **Form Layout:** Single column on mobile, two-column on desktop for shorter fields (Name + Email side by side)
- **Submit Button:** Full-width primary CTA

### Data Visualization Components
- **Climate Risk Maps:** Mapbox GL JS embed with custom green/yellow/red choropleth layers, tooltips on hover, legend panel
- **Charts:** Recharts library — Bar (vertical, green gradient), Line (smooth curves, blue), Donut (multi-color with center stat)
- **KPI/Stat Cards:** Glass-effect background, large JetBrains Mono number, small label, icon left, animate up from 0 on scroll
- **Progress Indicators:** Circular progress ring (green fill) for project tracking

---

## 4. PAGE-BY-PAGE WIREFRAME SPECIFICATIONS

### Page 1: HOMEPAGE

**Layout Grid:** 12-column, max-width 1280px centered, 24px gutter

**Above the Fold:**
- Navbar (64px height, transparent)
- Hero Section (100vh): Left-aligned text block (6 cols), right side: floating stat cards with glass effect

**Scroll Journey:**
1. Hero Section (100vh)
2. Services Grid — "Our Five Verticals" (3-2 card layout with staggered reveal)
3. Impact Stats — Full-width green bg, 4 animated counters
4. Why Agrivision4u — 3-column feature grid with icons
5. Case Studies Preview — 3 featured cards
6. Testimonials — 3-card carousel
7. Partners/Trusted By — Logo strip with grayscale → color hover
8. Insights Preview — 3 latest articles
9. CTA Banner — Full-width dark section
10. Footer — 4-column with newsletter

**Mobile Behavior:**
- Hero: Stack text and CTAs, stat cards become horizontal scroll
- Services: Single column stack
- Stats: 2x2 grid
- Case Studies: Horizontal scroll
- Everything stacks vertically

**Micro-interactions:**
- Hero text: Word-by-word stagger (150ms delay each)
- Stats: CountUp animation triggered by IntersectionObserver
- Cards: Stagger reveal (100ms between cards) on scroll
- Partner logos: Grayscale → color on hover (filter transition 300ms)
- Navbar: Background transition (200ms ease) on scroll past hero

### Page 2: ABOUT US

**Scroll Journey:**
1. Hero: "Bridging Climate Science and Agriculture" — full-width with team photo background
2. Mission & Vision — Two-column with text left, illustration right
3. Our Story — Timeline design (vertical on mobile, zigzag on desktop)
4. Team Section — Grid of team cards (3-4 per row desktop)
5. Credentials & Certifications — Icon grid
6. Partners — Logo grid with details on hover
7. Values — 4 cards with icons
8. CTA: Join our team / Work with us

### Pages 3-7: SERVICE VERTICAL PAGES (Template)

**Each vertical page follows this structure:**

1. **Hero:** Full-width 60vh, vertical-specific imagery and color, icon + title + subtitle + breadcrumb
2. **Problem Statement:** Two-column — text left with key statistics, infographic/image right
3. **Our Approach:** 4-step horizontal process flow with numbered circles and connecting lines. Each step: icon, title, description
4. **Sub-Services:** Cards grid (2 per row desktop) — 4-5 sub-service detailed cards with icon, title, description, key deliverables list
5. **Tools & Technology:** Horizontal scroll of technology badges/logos (satellite, GIS, AI, drone icons)
6. **Case Study Spotlight:** Full-width highlighted case study card with hero image, title, challenge, solution, impact metrics
7. **FAQs:** Accordion component (5-7 items) with smooth expand animation
8. **Related Verticals:** 2 cards linking to other relevant services
9. **CTA:** Inline consultation form with service preselected in dropdown

### Page 8: CASE STUDIES

**Layout:** Masonry or grid (3-column desktop)
**Filters:** Vertical category filters (horizontal pill buttons)
**Card Design:** Image + category tag + title + excerpt + metrics
**Individual Case Study Page:** Hero image, challenge, approach, solution, impact (with data visualizations), client testimonial

### Page 9: INSIGHTS / BLOG

**Layout:** Featured post (hero card, full-width) + grid (3-column) below
**Filters:** Category, vertical, date
**Card:** Thumbnail, category tag, title, date, read time, author avatar
**Individual Post:** Clean reading layout (max-width 768px), TOC sidebar, related posts

### Page 10: CONTACT / BOOK CONSULTATION

**Two-column layout:**
- Left: Full-featured form (Name, Organization, Designation, Email, Phone, Service Interest dropdown, Message, File Upload)
- Right: Office info (address, map embed, phone, email, working hours), WhatsApp direct link

**Mobile:** Stack — info first, form below

### Page 11: 404 ERROR PAGE
- Centered design with custom illustration (lost satellite/drone over a field)
- "Looks like this page has migrated to greener pastures" headline
- Search bar + quick links (Home, Services, Contact)
- Animated floating leaf particles in background

### Page 12: PRIVACY POLICY & TERMS
- Clean, minimal reading layout
- TOC sidebar
- Last updated date prominent
- Back to home link

---

## 5. ANIMATION & INTERACTION DESIGN

### Page Load Animations
- Hero text: Staggered word reveal — first word at 0ms, each subsequent +150ms, translateY(20px) → 0, opacity 0 → 1, duration 600ms, easeOut
- Hero CTAs: Fade in at 600ms delay, translateY(10px) → 0
- Hero stat cards: Stagger from right, 300ms apart, translateX(50px) → 0
- Images: Fade + scale from 95% → 100%, 500ms
- Navigation: Slide down from top, 300ms on page load

### Scroll-Triggered Animations
- Stats counters: Count from 0 to target number over 2000ms, easeOut, triggered at 20% visibility
- Card reveals: translateY(30px) → 0, opacity 0 → 1, stagger 100ms between cards
- Section headings: Clip-path reveal from left (scaleX 0 → 1 on decorative line, then text fades)
- Parallax backgrounds: translateY at 10% scroll speed (max 40px travel)

### Hover States
- Service cards: translateY(-8px) + boxShadow("0 25px 50px rgba(0,0,0,0.15)") + border-left color transition
- CTA buttons: Background color shift + scale(1.02) + boxShadow elevation
- Team cards: Image scale(1.08) + overlay gradient appears + info slides up
- Blog cards: translateX(4px) + shadow increase
- Nav links: Underline grows from center (scaleX: 0 → 1)

### Loading States
- Skeleton screens: Animated gradient shimmer (gray-100 → gray-200 → gray-100) for data-heavy components
- Form submission: Button text → spinner → checkmark animation → success message
- Page transitions: Fade between pages (opacity, 200ms)

---

## 6. RESPONSIVE DESIGN BREAKPOINTS

| Breakpoint | Range | Grid Columns | Container |
|---|---|---|---|
| Mobile | 320px – 767px | 4 columns | 100% - 32px padding |
| Tablet | 768px – 1023px | 8 columns | 100% - 48px padding |
| Desktop | 1024px – 1439px | 12 columns | 1024px max |
| Wide | 1440px+ | 12 columns | 1280px max |

**Key Responsive Rules:**
- Service cards: 1 col (mobile) → 2 col (tablet) → 3-2 layout (desktop)
- Stats: 1 col (mobile) → 2x2 (tablet) → 4 col (desktop)
- Navigation: Bottom drawer (mobile/tablet) → horizontal mega-menu (desktop)
- Hero text: Reduce H1 from 64px to 40px, remove floating stat cards on mobile (show as horizontal scroll below)
- Forms: Single column always, full-width inputs

---

## 7. ACCESSIBILITY REQUIREMENTS

### Color Contrast
- All text must meet WCAG 2.1 AA minimum: 4.5:1 for normal text, 3:1 for large text
- Primary green (#1B5E20) on white: 8.1:1 ✅
- Golden (#F9A825) on dark (#0D1B0F): 7.2:1 ✅
- White on primary green: 8.1:1 ✅
- Avoid using color alone to convey information

### Focus States
- All interactive elements must have visible focus ring (2px ring offset, brand-primary color)
- Tab order must follow logical reading flow
- Skip navigation link at page top

### Alt Text Strategy
- All decorative images: alt="" (empty)
- Content images: Descriptive alt text including context ("Drone surveying flood-damaged paddy fields in Assam")
- Charts/data viz: Provide data table alternative
- Icons: aria-label on interactive icons, aria-hidden on decorative

### ARIA Labels
- Navigation landmarks: nav[aria-label="Main navigation"], nav[aria-label="Footer navigation"]
- Form inputs: Associated labels or aria-label
- Accordion: aria-expanded, aria-controls attributes
- Modal: aria-modal, focus trap
- Live regions: aria-live="polite" for form feedback

### Screen Reader-Friendly Data
- Data tables: proper th scope, caption
- Stats: Provide text alternative (aria-label="500 projects completed")
- Charts: Summary descriptions + data table toggle

---

## 8. DESIGN DELIVERABLES EXPECTED

1. ✅ Design system with all tokens and components
2. ✅ Component library with all states (default, hover, focus, active, disabled, error)
3. ✅ High-fidelity mockups for all 12 pages (desktop + mobile)
4. ✅ Interactive prototype for Homepage and Disaster Management vertical
5. ✅ Design tokens export (JSON/CSS variables for developer handoff)
6. ✅ Style guide document for brand consistency
