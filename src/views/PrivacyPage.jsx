import { MenuBar } from "../components/menu-bar/MenuBar";
import styles from "./privacy.module.css";

export const PrivacyPage = () => {
  return (
    <div>
      <MenuBar />
      <main className={styles.page}>
        <article className={styles.content}>
          <h1>Privacy Policy for Masterworks of Horror: The Prologue</h1>
          <div className={styles.meta}>
            <p>
              <strong>Effective Date</strong>: May 8, 2026
            </p>
            <p>
              <strong>Last Updated</strong>: May 8, 2026
            </p>
          </div>

          <p>
            This Privacy Policy describes how Masterworks Studios C Corp ("we,"
            "us," or "our") collects, uses, and shares information when you
            play Masterworks of Horror: The Prologue (the "Game") on iOS,
            macOS, Windows, or other supported platforms.
          </p>
          <p>
            By installing or playing the Game, you agree to the practices
            described in this policy. If you do not agree, please do not
            install or use the Game.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            The Game does <strong>not</strong> require you to create an
            account, sign in, or provide any personally identifiable
            information. The Game does <strong>not</strong> display
            advertisements and does <strong>not</strong> offer in-app
            purchases.
          </p>

          <h3>1.1 Anonymous Player Identifier</h3>
          <p>
            When you launch the Game for the first time, our backend service
            provider (Microsoft PlayFab) generates an{" "}
            <strong>anonymous player identifier</strong> that is associated
            with your installation of the Game. This identifier is a randomly
            generated string. We do not link it to your real name, email,
            phone number, payment information, or any other personally
            identifiable information.
          </p>
          <p>
            We may also use a device-level identifier issued by your operating
            system (such as Apple's Identifier for Vendor (IDFV) on iOS) to
            associate gameplay data with your installation of the Game on this
            device. The IDFV is reset when you uninstall the Game.
          </p>

          <h3>1.2 Gameplay Data</h3>
          <p>
            While you play the Game, we collect data about your in-game
            activity to operate, support, and improve the Game. This includes:
          </p>
          <ul>
            <li>Match outcomes (wins, losses, ties)</li>
            <li>
              Cards played, in-game zones changed, and the timing of in-match
              events
            </li>
            <li>Aggregated session and match statistics</li>
            <li>
              Optional gameplay reports you choose to upload at the end of a
              match
            </li>
          </ul>
          <p>
            This data is associated only with your anonymous player
            identifier.
          </p>

          <h3>1.3 Diagnostic Information</h3>
          <p>
            We do not currently integrate any third-party crash reporting or
            performance telemetry SDK. If your operating system (iOS, macOS)
            has been configured to share crash reports with developers, we may
            receive aggregated, OS-level crash logs through Apple's standard
            developer tools. These reports are managed by Apple, not by us,
            and you can opt out at any time in your device settings.
          </p>

          <h3>
            1.4 Information We Do <strong>Not</strong> Collect
          </h3>
          <ul>
            <li>
              Real names, email addresses, phone numbers, or contact
              information
            </li>
            <li>Account credentials (the Game has no sign-in flow)</li>
            <li>
              Advertising identifiers (the Game shows no advertisements)
            </li>
            <li>
              Payment or financial information (the Game has no in-app
              purchases)
            </li>
            <li>Browsing history or search history</li>
            <li>Health, fitness, or financial information</li>
            <li>Precise or coarse location</li>
            <li>Microphone, camera, photos, or contacts</li>
            <li>
              Any information from users known to be under 13 (see Section 6)
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Operate, maintain, and provide features of the Game</li>
            <li>Match you with opponents and synchronize gameplay</li>
            <li>Diagnose technical issues and fix bugs</li>
            <li>Analyze and improve game balance, difficulty, and content</li>
            <li>Protect against fraud and abuse</li>
          </ul>
          <p>
            We do <strong>not</strong> sell your personal information. We do{" "}
            <strong>not</strong> use your data to target advertising or
            profile you across other apps or websites.
          </p>

          <h2>3. How We Share Your Information</h2>
          <p>
            We share information only with the service providers we use to
            operate the Game, and only as needed for them to perform their
            services:
          </p>
          <div className={styles.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th>Service Provider</th>
                  <th>Purpose</th>
                  <th>Privacy Policy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Microsoft (PlayFab)</td>
                  <td>
                    Anonymous player ID generation, gameplay data storage,
                    analytics
                  </td>
                  <td>
                    <a
                      href="https://privacy.microsoft.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://privacy.microsoft.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Unity Technologies (Unity Gaming Services)</td>
                  <td>Multiplayer matchmaking, game services backend</td>
                  <td>
                    <a
                      href="https://unity.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://unity.com/legal/privacy-policy
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Apple (App Store, TestFlight)</td>
                  <td>Distribution, platform crash logs</td>
                  <td>
                    <a
                      href="https://www.apple.com/legal/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.apple.com/legal/privacy/
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Audiokinetic (Wwise)</td>
                  <td>Audio middleware (no user data transmitted)</td>
                  <td>
                    <a
                      href="https://www.audiokinetic.com/privacy-policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.audiokinetic.com/privacy-policy/
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We may also disclose information if required by law, court order,
            or government request, or to protect the rights, property, or
            safety of Masterworks Studios C Corp, our users, or the public.
          </p>
          <p>
            We do <strong>not</strong> share your data with advertisers, data
            brokers, or any other third party not listed above.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            We retain anonymous player and gameplay data for as long as your
            installation of the Game is active. If you uninstall the Game, the
            device identifier resets and any new session generates a new
            anonymous player identifier. Aggregated and anonymized data may be
            retained indefinitely for analytics purposes.
          </p>
          <p>
            You may request deletion of data associated with your anonymous
            player identifier by contacting us at the address in Section 9.
          </p>

          <h2>5. Your Rights (United States)</h2>
          <p>
            The Game is operated from the United States and primarily directed
            at users in the United States.
          </p>

          <h3>California Residents (CCPA/CPRA)</h3>
          <p>California residents have the right to:</p>
          <ul>
            <li>Know what personal information we collect</li>
            <li>Request deletion of personal information</li>
            <li>
              Opt out of the "sale" or "sharing" of personal information
            </li>
          </ul>
          <p>
            We do <strong>not</strong> sell or share personal information as
            defined under the CCPA. To exercise your rights, contact us at{" "}
            <strong>alvarez_0001@yahoo.com</strong>.
          </p>

          <h3>Other U.S. State Privacy Laws</h3>
          <p>
            Residents of states with comprehensive privacy laws (such as
            Virginia, Colorado, Connecticut, Utah, and others) may have
            similar rights to access or delete their personal information. To
            exercise these rights, contact us at{" "}
            <strong>alvarez_0001@yahoo.com</strong>.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            The Game is <strong>not</strong> directed to children under 13,
            and we do not knowingly collect personal information from children
            under 13. If you believe a child under 13 has used the Game and we
            have collected information from them, please contact us at{" "}
            <strong>alvarez_0001@yahoo.com</strong> and we will delete any
            such information.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We use commercially reasonable safeguards to protect your data,
            including encryption in transit (HTTPS/TLS) and access controls on
            our backend systems. No method of transmission or storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make
            material changes, we will update the "Last Updated" date above
            and, where required, notify you in-game. Continued use of the Game
            after the updated policy takes effect constitutes acceptance of
            the changes.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data
            practices, contact us at:
          </p>
          <div className={styles.contactBlock}>
            <p>Masterworks Studios C Corp</p>
            <p>
              Email:{" "}
              <a href="mailto:alvarez_0001@yahoo.com">
                alvarez_0001@yahoo.com
              </a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};
