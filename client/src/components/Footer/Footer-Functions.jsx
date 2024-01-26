import indiaGov from "../images/indiaGov.png";
import meity from "../images/meity.png";
import nic_1 from "../images/nic_1.png";
import digIndia from "../images/digIndia.png";
import mygov from "../images/mygov.png";

// footerLinks are still to be done 

const footerLinks = [
  { href: "copyrightPolicy_New", text: "Copyright Policy" },
  { href: "privacyPolicy_New", text: "Privacy Policy" },
  { href: "termsAndConditions_New", text: "Terms and Conditions" },
  { href: "disclaimer_New", text: "Disclaimer" },
  { href: "hyperlinkPolicy_New", text: "Hyperlink Policy" },
  { href: "https://scholarships.gov.in/siteMap", text: "Site Map" },
];

const logos = [
  { link: 'http://meity.gov.in', src: meity, alt: 'Meity Logo' },
  { link: 'https://mygov.in/', src: mygov, alt: 'MyGov Logo' },
  { link: 'https://www.nic.in/', src: nic_1, alt: 'NIC Logo' },
  { link: 'https://www.india.gov.in/', src: indiaGov, alt: 'India Gov Logo' },
  { link: 'https://www.digitalindia.gov.in/', src: digIndia, alt: 'Digital India Logo' },
];

export { footerLinks, logos };
