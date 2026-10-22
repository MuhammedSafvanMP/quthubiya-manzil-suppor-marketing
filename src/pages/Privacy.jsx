import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy · Quthubiya Manzil';
  }, []);

  return (
    <div id="privacy-page">
      <div className="privacy-card">
        <h1>Privacy Policy</h1>
        <span className="last-updated">
          <i className="fas fa-calendar-alt"></i> Last updated: January 15, 2026
        </span>

        <p>
          At <strong>Quthubiya Manzil</strong>, we respect your privacy and are
          committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, and safeguard your information when you
          use our mobile application and website. By using Quthubiya Manzil, you
          agree to the practices described in this policy.
        </p>

        <h2>
          <i className="fas fa-database"></i> 1. Information We Collect
        </h2>
        <p>
          We may collect the following types of information to provide and
          improve our services:
        </p>
        <ul>
          <li>
            <strong>Location Data:</strong> We use your device's location to
            calculate accurate prayer times and Qibla direction. This data is
            processed on your device and is not stored on our servers unless you
            explicitly save a location.
          </li>
          <li>
            <strong>Device Information:</strong> Anonymous technical data such
            as device model, operating system version, and app version for
            troubleshooting and analytics.
          </li>
          <li>
            <strong>Usage Data:</strong> Non-personal information about how you
            interact with the app (e.g., features used, session duration) to
            help us improve the experience.
          </li>
          <li>
            <strong>Contact Information:</strong> If you contact us via email or
            the support form, we collect your name and email address to respond
            to your inquiry.
          </li>
        </ul>

        <div className="highlight-box">
          <p>
            <i
              className="fas fa-lock"
              style={{ color: 'var(--primary)', marginRight: '10px' }}
            ></i>
            <strong>
              We do not sell, rent, or trade your personal information
            </strong>{' '}
            with any third parties for marketing purposes.
          </p>
        </div>

        <h2>
          <i className="fas fa-cogs"></i> 2. How We Use Your Information
        </h2>
        <p>Your information helps us deliver a better, more personalised experience:</p>
        <ul>
          <li>Calculate accurate prayer times and Qibla direction based on your location.</li>
          <li>Send you prayer reminders and adhan notifications (if enabled).</li>
          <li>Respond to your support requests and feedback.</li>
          <li>Analyse app usage to improve features and fix issues.</li>
          <li>Comply with legal obligations and enforce our terms.</li>
        </ul>

        <h2>
          <i className="fas fa-mobile-alt"></i> 3. Permissions We Request
        </h2>
        <p>To function properly, Quthubiya Manzil may request the following permissions:</p>
        <ul>
          <li>
            <strong>Location:</strong> For prayer times and Qibla compass. You
            can disable this at any time in your device settings.
          </li>
          <li>
            <strong>Notifications:</strong> For prayer reminders and adhan
            alerts. You can manage these within the app or device settings.
          </li>
          <li>
            <strong>Storage (optional):</strong> For saving downloaded Quran
            recitations or offline content.
          </li>
        </ul>

        <h2>
          <i className="fas fa-share-alt"></i> 4. Data Sharing & Third Parties
        </h2>
        <p>
          We may use trusted third-party services for analytics and crash
          reporting (e.g., Google Analytics for Firebase, Sentry). These
          services collect anonymised data and are bound by their own privacy
          policies. We do not share your personal data with advertisers or data
          brokers.
        </p>
        <p>
          We may disclose your information if required by law, or to protect the
          rights, property, or safety of Quthubiya Manzil, our users, or the
          public.
        </p>

        <h2>
          <i className="fas fa-shield-alt"></i> 5. Data Security
        </h2>
        <p>
          We implement industry-standard security measures to protect your data.
          However, no method of electronic transmission or storage is 100%
          secure. While we strive to protect your personal information, we
          cannot guarantee its absolute security.
        </p>

        <h2>
          <i className="fas fa-child"></i> 6. Children's Privacy
        </h2>
        <p>
          Quthubiya Manzil is suitable for users of all ages. We do not knowingly
          collect personal information from children under 13. If you are a
          parent or guardian and believe your child has provided us with
          personal data, please contact us and we will delete it promptly.
        </p>

        <h2>
          <i className="fas fa-user-check"></i> 7. Your Rights
        </h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, correct, or delete your personal information.</li>
          <li>Withdraw consent for location or notification permissions at any time.</li>
          <li>Request information about how your data is used.</li>
          <li>Contact us with any privacy-related concerns.</li>
        </ul>

        <h2>
          <i className="fas fa-sync-alt"></i> 8. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with a revised "Last updated" date. We
          encourage you to review this policy periodically to stay informed.
        </p>

        <h2>
          <i className="fas fa-envelope"></i> 9. Contact Us
        </h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy
          Policy or your personal data, please reach out to us:
        </p>

        <div className="contact-box">
          <i className="fas fa-envelope-open-text"></i>
          <div>
            <h3>Privacy Team – Quthubiya Manzil</h3>
            <p>
              Email: <a href="mailto:zorrowtech@gmail.com">zorrowtech@gmail.com</a>
            </p>
            <p>
              Support: <a href="mailto:zorrowtech@gmail.com">zorrowtech@gmail.com</a>
            </p>
            <p style={{ marginTop: '10px' }}>
              Zorrow Tech IT Solutions PVT LTD, Malappuram, Kerala, India 676505
            </p>
          </div>
        </div>

        <p
          style={{
            marginTop: '32px',
            fontSize: '0.95rem',
            color: '#3b5e4a',
            borderTop: '1px solid #e0eee4',
            paddingTop: '24px',
          }}
        >
          <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i>{' '}
          By using Quthubiya Manzil, you acknowledge that you have read and
          understood this Privacy Policy.
        </p>
      </div>
    </div>
  );
}