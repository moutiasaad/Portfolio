import predictiveMaintenance from "../../assets/projects/predictive_maintenance.png"
import msTransport from "../../assets/projects/ms_transport.png"
import glowy from "../../assets/projects/glowy.png"
import neapolisCar from "../../assets/projects/neapolis_car.png"
import siameGprs from "../../assets/projects/siame_gprs.png"

import glowy1 from "../../assets/projects/details/glowy_1.jpg"
import glowy2 from "../../assets/projects/details/glowy_2.jpg"
import glowy3 from "../../assets/projects/details/glowy_3.jpg"
import glowy4 from "../../assets/projects/details/glowy_4.jpg"
import glowy5 from "../../assets/projects/details/glowy_5.jpg"
import glowy6 from "../../assets/projects/details/glowy_6.jpg"
import glowy7 from "../../assets/projects/details/glowy_7.jpg"
import glowyM1 from "../../assets/projects/details/glowy_m1.jpg"
import glowyM2 from "../../assets/projects/details/glowy_m2.jpg"
import mst1 from "../../assets/projects/details/mst_1.jpg"
import mst2 from "../../assets/projects/details/mst_2.jpg"
import mst3 from "../../assets/projects/details/mst_3.jpg"
import mst4 from "../../assets/projects/details/mst_4.jpg"
import mstM1 from "../../assets/projects/details/mst_m1.jpg"
import mstM2 from "../../assets/projects/details/mst_m2.jpg"
import siame1 from "../../assets/projects/details/siame_1.jpg"
import siame2 from "../../assets/projects/details/siame_2.jpg"
import siame3 from "../../assets/projects/details/siame_3.jpg"
import siameM1 from "../../assets/projects/details/siame_m1.jpg"
import pfePrototype from "../../assets/projects/details/pfe_prototype.jpg"
import pfeArchitecture from "../../assets/projects/details/pfe_architecture.jpg"
import pfeSensors from "../../assets/projects/details/pfe_sensors.jpg"
import pfeAiDiagnostic from "../../assets/projects/details/pfe_ai_diagnostic.jpg"
import pfeKpiMobile from "../../assets/projects/details/pfe_kpi_mobile.jpg"
import pfeConfusion from "../../assets/projects/details/pfe_confusion.jpg"
import pfeRoc from "../../assets/projects/details/pfe_roc.jpg"

export type Shot = { src: string; caption: string; mobile?: boolean }

export type ProjectItem = {
  slug: string
  title: string
  category: string
  description: string
  techs: string[]
  image?: string
  link?: string
  linkLabel?: string
  featured?: boolean
  details: {
    context: string
    role: string
    features: string[]
    highlights: string[]
    stack: { label: string; items: string[] }[]
    gallery: Shot[]
  }
}

export const projects: ProjectItem[] = [
  {
    slug: "predictive-maintenance",
    title: "Intelligent Predictive Maintenance System for Industrial Machines",
    category: "IoT · AI · Web & Mobile — Final-year project",
    description:
      "Final-year project (Professional Master). A Raspberry Pi 5 with 5 sensors (temperature, vibration, thermal camera, current) monitors wire processing machines. A Random Forest model identifies the probable failure cause and XGBoost estimates the 24-hour failure risk. Alerts reach the maintenance team in real time on a React web dashboard and a Flutter mobile app, with interventions, preventive checklists and MTBF / MTTR indicators.",
    techs: ["Raspberry Pi", "Python", "scikit-learn", "XGBoost", "FastAPI", "Node.js", "MongoDB", "React", "Flutter"],
    image: predictiveMaintenance,
    featured: true,
    details: {
      context:
        "Six-month final-year internship in a wire harness factory in Tunisia. Maintenance of the Komax wire processing machines (Alpha 433 H and Gamma 333 PC) was purely corrective and tracked on paper. The goal was to see failures coming and to give the maintenance team one tool for alerts, interventions and daily checks.",
      role: "Whole project, alone: hardware, firmware scripts, machine learning, REST API, web dashboard and mobile app.",
      features: [
        "Raspberry Pi 5 on the machine: 2 DHT22 temperature sensors, MPU6050 vibration, AMG8833 thermal camera and SCT-013 current clamp, with a local buffer when the network drops",
        "AI service every 5 minutes on a 2-hour window: Random Forest gives the probable cause, XGBoost the risk of failure within 24 hours",
        "Alerts pushed to the right person (line leader, then maintenance manager), approval of an alert into a predictive intervention",
        "Interventions, preventive checklists with photo evidence, daily follow-up sheet, maintenance calendar",
        "MTBF / MTTR indicators and reliability reports per machine",
        "Sensor and Raspberry Pi watchdog: offline Pi or silent sensor raises its own alert",
      ],
      highlights: [
        "Random Forest: macro F1 0.85 on 5 failure causes, validated with week-blocked cross-validation",
        "XGBoost 24-hour risk: AUC 0.94, all 69 test failures announced, median 19.5 h in advance, about 1 false alert per week (6.5 with simple thresholds)",
        "Real prototype tested on an Alpha 433 H machine",
      ],
      stack: [
        { label: "IoT", items: ["Raspberry Pi 5", "Python", "I²C", "systemd"] },
        { label: "AI", items: ["scikit-learn", "XGBoost", "pandas", "FastAPI"] },
        { label: "Backend", items: ["Node.js", "Express", "MongoDB", "JWT", "Firebase Cloud Messaging"] },
        { label: "Apps", items: ["React", "Flutter"] },
      ],
      gallery: [
        { src: predictiveMaintenance, caption: "Web dashboard and mobile app" },
        { src: pfeArchitecture, caption: "System architecture: IoT units, central server, web and mobile apps" },
        { src: pfePrototype, caption: "Prototype wiring: Raspberry Pi, DHT22 ×2, MPU6050, AMG8833 and SCT-013 current clamp" },
        { src: pfeSensors, caption: "Live sensor values on a machine (web)" },
        { src: pfeAiDiagnostic, caption: "AI diagnostic when creating an intervention" },
        { src: pfeKpiMobile, caption: "Maintenance KPIs in the mobile app (MTTR, MTBF, availability)" },
        { src: pfeConfusion, caption: "Random Forest: confusion matrix on the 5 failure causes + normal" },
        { src: pfeRoc, caption: "XGBoost 24-hour risk: ROC curve (AUC 0.94)" },
      ],
    },
  },
  {
    slug: "ms-transport",
    title: "MS Transport – Moving & Freight Platform (Web + Mobile)",
    category: "Web & Mobile — Bachelor final-year project",
    description:
      "Built from scratch for a moving company in France: customers estimate the volume of their furniture or goods, get an instant quote and book a date; admins validate requests, assign carriers and follow payments. The Flutter app adds Stripe payments and live carrier tracking on Google Maps.",
    techs: ["React", "Material UI", "Flutter", "Django REST", "MySQL", "Stripe", "Google Maps"],
    image: msTransport,
    details: {
      context:
        "Bachelor final-year project for a moving and freight company based in France. Quotes were done by phone and by hand; the company wanted customers to price their move online and follow it until delivery.",
      role: "Whole project: database design, Django REST API, React website with admin area and Flutter app for customers and drivers.",
      features: [
        "Quote simulator: pick furniture room by room (or goods by dimensions), live volume in m³ and instant price",
        "Booking with address check and date, request follow-up by status",
        "Admin area: validate or refuse requests, assign a carrier, manage carriers and payments",
        "Mobile app: Stripe payment, notifications, live position of the carrier on Google Maps",
        "Driver side: list of missions, start / finish a delivery, GPS sharing",
      ],
      highlights: [
        "Same REST API serves the website and the mobile app",
        "Addresses checked with the Google Maps Geocoding API before a booking is accepted",
      ],
      stack: [
        { label: "Web", items: ["React", "Material UI"] },
        { label: "Mobile", items: ["Flutter", "Stripe", "Google Maps", "Workmanager"] },
        { label: "Backend", items: ["Django REST Framework", "MySQL"] },
      ],
      gallery: [
        { src: mst1, caption: "Home page" },
        { src: mst2, caption: "Quote: choose furniture room by room" },
        { src: mst3, caption: "Quote summary with volume and price" },
        { src: mst4, caption: "Admin dashboard" },
        { src: mstM1, caption: "Mobile: quote", mobile: true },
        { src: mstM2, caption: "Mobile: quote result", mobile: true },
      ],
    },
  },
  {
    slug: "glowy",
    title: "Glowy – Cosmetics E-commerce Store + Admin Dashboard",
    category: "Web — Freelance",
    description:
      "Online store for a Tunisian cosmetics brand: catalogue with categories, cart, checkout with or without an account, cash on delivery to all 24 governorates and order tracking. The admin dashboard follows orders from confirmation to delivery, manages products, photos and stock, and shows revenue and best sellers.",
    techs: ["React", "Material UI", "CoreUI", "Node.js", "Express", "Sequelize", "MySQL", "JWT"],
    image: glowy,
    link: "https://github.com/Youandme001/client",
    linkLabel: "Source code",
    details: {
      context:
        "Freelance project for Glowy, a Tunisian brand of lip glosses, gift boxes and skincare. The brand sold through social media; it needed its own shop with cash on delivery and a simple back-office to handle orders and stock.",
      role: "Whole project: REST API, customer store and admin dashboard, deployment on a VPS.",
      features: [
        "Store: home page, catalogue with category filters, search and sorting, product pages with photos and stock left",
        "Cart drawer and checkout with or without an account, address form with the 24 governorates, order confirmation",
        "Customer account: order history with status, profile and password",
        "Admin: revenue, orders to handle, 6-month revenue chart, best sellers, low-stock alerts",
        "Order workflow pending → confirmed → delivered (or rejected) with a printable delivery slip",
        "Products with several photos, categories and customer list (with or without account)",
      ],
      highlights: [
        "Order totals are computed by the server from database prices; stock is taken when an order is confirmed and given back if it is rejected",
        "Access control: customers only reach their own data; guest tokens can only place an order",
        "Responsive store designed mobile first",
      ],
      stack: [
        { label: "Store", items: ["React", "Material UI"] },
        { label: "Admin", items: ["React", "CoreUI", "Chart.js"] },
        { label: "Backend", items: ["Node.js", "Express", "Sequelize", "MySQL", "JWT", "Multer"] },
      ],
      gallery: [
        { src: glowy1, caption: "Store home page" },
        { src: glowy2, caption: "Catalogue with filters and search" },
        { src: glowy3, caption: "Product page" },
        { src: glowy4, caption: "Checkout with cash on delivery" },
        { src: glowy5, caption: "Admin dashboard" },
        { src: glowy6, caption: "Order detail and status workflow" },
        { src: glowy7, caption: "Products and stock" },
        { src: glowyM1, caption: "Mobile: home", mobile: true },
        { src: glowyM2, caption: "Mobile: product", mobile: true },
      ],
    },
  },
  {
    slug: "neapolis-car",
    title: "Neapolis Car – Car Rental Mobile App",
    category: "Mobile",
    description:
      "First mobile application of Neapolis Car, a car rental company, extending its reservation website. Clients can browse available cars, book a rental or a transfer service and follow their reservations. Published on Google Play.",
    techs: ["Flutter", "Django", "PostgreSQL"],
    image: neapolisCar,
    link: "https://play.google.com/store/apps/details?id=com.neapolis_car.neapolis_car&pcampaignid=web_share",
    linkLabel: "Google Play",
    details: {
      context:
        "Neapolis Car rents cars and offers transfers and excursions in Tunisia. Reservations were only possible on the website; the company wanted a mobile app connected to the same backend.",
      role: "Flutter client app: screens, API integration with the existing Django backend, publication on Google Play.",
      features: [
        "Browse available cars with details and prices",
        "Book a rental for given dates, or a transfer service",
        "Account creation and login",
        "Follow and manage reservations",
      ],
      highlights: ["Live product published on Google Play"],
      stack: [
        { label: "Mobile", items: ["Flutter", "Dart"] },
        { label: "Backend", items: ["Django", "PostgreSQL"] },
      ],
      gallery: [{ src: neapolisCar, caption: "Reservation, car list, car details and registration screens" }],
    },
  },
  {
    slug: "siame",
    title: "SIAME – Remote Machine Monitoring over GPRS",
    category: "Embedded · IoT — Internship (SIAME)",
    description:
      "Internship at SIAME (electrical equipment manufacturer). An Arduino Uno with a SIM900 GSM/GPRS module sends each injection press's temperature (DHT22) to a PHP/MySQL server, receives remote on/off commands, and a PIR sensor triggers SMS alerts for server-room intrusions.",
    techs: ["Arduino", "SIM900 GPRS", "DHT22", "PIR", "PHP 8", "MySQL", "Chart.js", "Python"],
    image: siameGprs,
    link: "https://github.com/moutiasaad/siame",
    linkLabel: "Source code",
    details: {
      context:
        "Second-year internship at SIAME, a manufacturer of electrical equipment in Grombalia. The injection presses had no remote supervision, and the server room had no intrusion alarm.",
      role: "Electronics prototype, Arduino firmware and the PHP web application.",
      features: [
        "Arduino Uno + SIM900: periodic GPRS request with temperature and humidity, the reply carries the on/off command for the machine relay",
        "PIR sensor in the server room: SMS to the person in charge, buzzer and an intrusion alarm on the dashboard",
        "Web dashboard: machines online, live temperatures, 24-hour charts with the alarm threshold",
        "Remote start / stop with a log of who sent each command",
        "Alarm list with acknowledgement, user and machine administration",
        "Python simulator to test the server without the board",
      ],
      highlights: [
        "Non-blocking firmware: AT commands wait for the modem replies instead of fixed delays",
        "Each board authenticates with a device key; the server rejects out-of-range readings",
      ],
      stack: [
        { label: "Embedded", items: ["Arduino Uno", "SIM900 GSM/GPRS", "DHT22", "PIR", "Relay"] },
        { label: "Web", items: ["PHP 8", "MySQL", "Chart.js"] },
        { label: "Tools", items: ["Python", "arduino-cli"] },
      ],
      gallery: [
        { src: siame1, caption: "Supervision dashboard" },
        { src: siame2, caption: "Machine detail with 24-hour temperature chart" },
        { src: siame3, caption: "Alarms: intrusion and overheating" },
        { src: siameM1, caption: "Mobile view", mobile: true },
      ],
    },
  },
]
