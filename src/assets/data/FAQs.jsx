import { NavLink } from "react-router-dom";
import "./Faqs.css"

export const faqData = [
  {
    id: 1,
    question: "Is WiFi Hotspot / Internet Sharing included with Connectra eSIM plans?",
    answer: (
      <div className="faq__answer">
        <p className="faq__text">
          The Wi-Fi Hotspot / Internet Sharing feature is currently available with all Prepaid (non-unlimited) plans, Unlimited Standard, and Unlimited MAX plans, including Apple iOS and Android smartphones
        </p>
      </div>
    ),
  },
  {
    id: 2,
    question: "Does Connectra eSIM record your Internet activity or location?",
    answer: (
      <div className="faq__answer">
        <p className="faq__text">
          We do not record your device location or web browsing activity. Your browsing activity is completely private.
          <br className="faq__linebreak" />
          As required by law, we keep records containing only the time, data (Megabytes) consumed, and cellular provider of each data connection.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    question: "Where can I view my data usage?",
    answer: (
      <div className="faq__answer">
        <p className="faq__text">
          You can view your current data usage any time by logging in to your Connectra eSIM account. Simply go to Plans and check your Data Usage under the corresponding eSIM. 
        </p>
      </div>
    ),
  },
  {
    id: 4,
    question: "Can you activate an eSIM on more than one device?",
    answer: (
      <div className="faq__answer">
        <p className="faq__text">
          Each eSIM can be installed on only one device. If you have other devices that need mobile data, you have two options:
        </p>
        <span className="faq__point">
          1. Turn on <strong>Mobile Hotspot / Internet Sharing</strong> on your phone (if supported in your country), and connect your other devices using the broadcasted Wi-Fi network.
        </span>
        <br className="faq__linebreak" />
        <span className="faq__point">2. Purchase an <strong>additional eSIM</strong> for each extra device.</span>
      </div>
    ),
  },
  {
    id: 5,
    question: "Can you buy an eSIM in advance, and activate it later?",
    answer: (
      <div className="faq__answer">
        <p className="faq__text">
          Yes, in fact we recommend it! When you order an eSIM, you can select the Starting Date for the data package. The data won't be available on our partner networks until the date you choose.
        </p>
        <p className="faq__text">
          This makes it easy to plan your trip in advance and have the eSIM ready to go. If you select a future activation date, your eSIM will be sent to you immediately, while your data plan will activate on the selected activation date.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    question: "Does Connectra eSIM offer physical SIM cards?",
    answer: (
      <div className="faq__answer">
        <p className="faq__text faq__text--inline-link">
          Currently we only offer eSIM data plans, so if your device is not eSIM compatible, unfortunately we cannot provide service to you. Check our compatibility list to verify your phone is eSIM ready: 
          <NavLink to="/esim-compatible-phone"> Smartphones Compatible</NavLink>
        </p>
      </div>
    ),
  },
  {
    id: 7,
    question: "How do upgrades and plan changes work?",
    answer: (
      <div className="faq__answer">
        <p className="faq__text faq__text--inline-link">
          You can change plans, add, or remove data in specific countries at any time. Simply log in to your Connectra eSIM <NavLink to="#">Account</NavLink>  to make changes.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    question: "Will I get a local phone number with an eSIM?",
    answer: (
      <div className="faq__answer">
        <span className="faq__point">
          Our eSIM plans do not include a local phone number, but don't worry!
        </span>
        {/* <br className="faq__linebreak" /> */}
        <span className="faq__point">
          After activating a Connectra eSIM, you can continue using your phone number to send and receive calls and text messages (SMS). Your new eSIM plan will be used for data only, saving you expensive roaming fees.
        </span>
        {/* <br className="faq__linebreak" /> */}
        <span className="faq__point faq__text--inline-link">
          For more information about setting up calls and texts to work with a Connectra eSIM, please see our guide <NavLink> How to Enable Calling and Texting on your eSIM</NavLink>.
        </span>
      </div>
    ),
  },
  {
    id: 9,
    question: "Are there any additional fees?",
    answer: (
      <div className="faq__answer">
        <span className="faq__point">
          Our eSIM data plans are prepaid, and the prices you see are inclusive of all taxes and fees. Connectra eSIM will never charge you roaming fees or other charges with our data plans.
        </span>
        <br className="faq__linebreak" />
        <span className="faq__point">
          <strong>Your Local Carrier:</strong> Our eSIM data plans are intended to replace your local carrier's roaming plan and prevent any additional roaming charges. When the eSIM is installed correctly, typically your local carrier will not charge any additional roaming fees.
        </span>
        <br className="faq__linebreak" />
        <ul className="faq__list">
          <li className="faq__list-item">
            <strong>Roaming Data Charges:</strong> Will not be charged as long as the eSIM is installed and configured correctly, and Data Roaming is turned off on your regular phone plan.
          </li>
          <li className="faq__list-item">
            <strong>International Call Charges:</strong> May be charged by some carriers even when using Wi-Fi calling with the eSIM data connection (not common).
          </li>
          <li className="faq__list-item">
            <strong>International SMS Charges:</strong> May be charged by some carriers even when using Wi-Fi calling with the eSIM data connection (not common).
          </li>
        </ul>
        <br className="faq__linebreak" />
        <span className="faq__point">
          Please note that Connectra eSIM does not interact with your home carrier, and we have no control over your phone plan. It is always best to contact your carrier for more information about their roaming fees when using a secondary data plan.
        </span>
      </div>
    ),
  },
  {
    id: 10,
    question: "How long does it take for a new eSIM to activate?",
    answer: (
      <div className="faq__answer">
        <p className="faq__text">
          eSIM Activation typically it takes less than 20 seconds to activate new eSIM data plans on our partner networks, depending on the coverage in your location. When you receive your activation email with your QR code, it is ready to activate!
        </p>
      </div>
    ),
  },
  {
    id: 11,
    question: "Can you renew an eSIM automatically each month?",
    answer: (
      <div className="faq__answer">
        <p className="faq__text">
          Auto Renew will automatically extend your eSIM each month for an additional 30 days. You can enable or disable Auto Renew any time, at your convenience. Both Prepaid and Unlimited - 30 Days eSIM data plans are eligible for Auto Renew.
          Can I cancel any time? Of course! Our prepaid eSIM plans terminate automatically after the duration you've selected, unless you add more data.
          You can cancel an Unlimited or Monthly plan any time in your Connectra eSIM account to stop automatic renewal.
        </p>
      </div>
    ),
  },
];
