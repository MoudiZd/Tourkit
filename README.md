# TourKit – Lightweight jQuery Guided Tour Plugin

**TourKit** is a simple, lightweight guided tour/onboarding plugin using jQuery. It helps you highlight elements and guide users step by step across a form or interface.


- ✔️ Works on non-React websites
- ✔️ Supports RTL
- ✔️ Uses `localStorage` to prevent repeat tours
- ✔️ Bootstrap + Font Awesome compatible
- ✔️ Easy to integrate in any existing HTML/Bootstrap project
- ✔️ Use tourParent to separate forms tours by their global wrapper

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

👉 Clone and open `example.html` locally.

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
```

## 🛠️ Usage 

```
let tour = new Tourkit({
  steps: [
    {element: '#name', text: 'Enter your name here'},
    {element: '#email', text: 'Your email goes here'},
    {element: '#submit', text: 'Click to submit your form'}
  ]
});

tour.startTour();
```

## 🧩 Options

| Option | Type	 | Description |
|--------|------ |-------------|
| steps	 | Array | Array of steps  { element, text } |
| seenVariableName | String	| LocalStorage key to remember if tour was shown |
| tourParent | String or jQuery	Container | for scoped tour (optional)

## 💰 Want More Features?

A **Pro version** is coming soon with:
- Auto-step detection (`data-tour` attributes)
- Better mobile layout & responsiveness
- Support for resuming or skipping steps
- Multiple themes & visual configurator

Support its development and get early access at [BuyMeACoffee - available soon](#) or [Gumroad - available soon](#) ☕️

---

## 📳 Contact

Need help integrating TourKit into your project?  
[Telegram me](https://t.me/advanced_developer) • [Email me](mailto:advanced-developer@hotmail.com)
