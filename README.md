# TourKit – Lightweight jQuery Guided Tour Plugin

**TourKit** is a simple, lightweight guided tour/onboarding plugin using jQuery. It helps you highlight elements and guide users step by step across a form or interface.

✔️ Works on non-React websites  
✔️ Supports RTL  
✔️ Uses `localStorage` to prevent repeat tours  
✔️ Bootstrap + Font Awesome compatible  
✔️ Easy to integrate in any existing HTML/Bootstrap project

---

## 🚀 Features

- Highlight elements with visual focus
- Show tooltips with navigation (`Next`, `Back`, `Finish`, `Exit`)
- Persistent tour state using localStorage
- RTL text direction support
- Lightweight: no React, no external tour libraries
- Ability to have many tours in same page
---

## 🧪 Demo

👉 [Live Demo (coming soon)](#)  
Or clone and open `example.html` locally.

---

## 📦 Installation

Include jQuery + Font Awesome + Bootstrap (optional), and then:

```html
<link rel="stylesheet" href="tourkit.css" />
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="tourkit.js"></script>

<!--add following divs that will wrap your tour -->
<div class="tour-overlay" style="display: none;"></div>
<div class="tour-tooltip" style="display: none;"></div>
