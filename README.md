# Little Lemon Restaurant - Booking Web App

A modern React web application for the Little Lemon restaurant that allows customers to browse the menu and make table reservations. This project is built as part of the Meta Frontend Development course.

## 🍋 Project Overview

Little Lemon is a restaurant booking and dining web application featuring:
- **Restaurant Landing Page** with hero section and restaurant information
- **Table Reservation System** with form validation and booking confirmation
- **Responsive Design** optimized for mobile and desktop
- **Testimonials Section** showcasing customer reviews
- **Team Information** featuring restaurant staff

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/binicode/little-lemon.git
cd little-lemon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
little-lemon/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── assets (icons and social media preview)
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── main/
│   │   │   ├── Main.js (Landing page)
│   │   │   ├── Main.css
│   │   │   ├── BookingForm.js (Reservation form)
│   │   │   ├── BookingForm.css
│   │   │   ├── BookingForm.test.js
│   │   │   ├── Reservation.js (Booking page)
│   │   │   ├── Reservation.css
│   │   │   ├── ConfirmedBooking.js (Confirmation page)
│   │   │   └── ConfirmedBooking.css
│   │   └── icons/
│   │       └── Hamburger.js (Mobile menu icon)
│   ├── assets/
│   │   ├── images/ (Restaurant and menu images)
│   │   └── icons/ (SVG and custom icons)
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
└── README.md
```

## 📦 Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode. Tests include form validation and component functionality.

### `npm run build`
Builds the app for production in the `build` folder. It correctly bundles React and optimizes for the best performance.

### `npm run eject`
**Note: this is a one-way operation!** If you need full control over the configuration, you can eject at any time. This exposes all the configuration files and dependencies.

## 🎯 Features

### Landing Page
- Eye-catching hero section with call-to-action
- Restaurant description and highlights
- Specials menu showcase
- Customer testimonials
- Team member profiles

### Booking System
- Easy-to-use reservation form
- Date and time selection
- Party size selection
- Customer information collection
- Form validation with error handling
- Booking confirmation page
- Reservation summary display

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Optimized layouts for all screen sizes
- Touch-friendly interface

## 🛠️ Tech Stack

- **React** 19.2.0 - UI library
- **React Router DOM** 6.30.3 - Client-side routing
- **CSS3** - Styling and responsive design
- **Jest & React Testing Library** - Unit and component testing

## 🧪 Testing

The project includes comprehensive tests for the booking form functionality:

```bash
npm test
```

Tests cover:
- Form validation
- Input handling
- Button interactions
- Component rendering

## 📱 Components Overview

### Header
Navigation component with logo and menu links. Includes responsive hamburger menu for mobile devices.

### Main
Landing page displaying restaurant information, specials, testimonials, and team members.

### BookingForm
Form component for customers to make reservations. Includes:
- Date picker
- Time selection
- Party size input
- Name, email, and phone fields
- Form validation

### Reservation
Full booking page layout with the booking form.

### ConfirmedBooking
Confirmation page displayed after successful booking.

### Footer
Footer section with restaurant information, links, and contact details.

## 🎨 Assets

The project includes:
- High-quality restaurant and dish images
- SVG icons for UI elements
- Team member photos (Darius, Hannah, John, Michael)
- Hero and background images

## 📝 Available Assets

- `Logo.svg` - Restaurant logo
- `hero.jpg` - Hero section background
- `greek salad.jpg`, `lemon dessert.jpg`, `bruchetta.svg` - Menu items
- `Dish icon.svg`, `home icon.svg`, `basket.svg` - UI icons
- Team member photos in WebP format

## 🚀 Deployment

The app can be deployed to various platforms:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

Build the production bundle:
```bash
npm run build
```

## 📚 Course Information

This project is developed as part of the **Meta Frontend Development Course**, specifically the final capstone project focusing on:
- React best practices
- Component composition
- State management
- Form handling and validation
- Responsive web design
- Testing and debugging

## 🔗 Resources

- [React Documentation](https://reactjs.org/)
- [Create React App Docs](https://facebook.github.io/create-react-app/)
- [React Router Documentation](https://reactrouter.com/)

## 👨‍💻 Author

**binicode** - [GitHub Profile](https://github.com/binicode)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests with improvements.

## 📞 Support

For issues or questions about this project, please create an issue on the [GitHub repository](https://github.com/binicode/little-lemon/issues).

---

**Enjoy exploring Little Lemon! 🍋**