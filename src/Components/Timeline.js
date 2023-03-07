import styles from '@/styles/Timeline.module.css';

const Timeline = () => {
  return (
    <div>
      <div className={styles.timeline}>
        <div className={styles.timeline__event}>
          <div class={styles.timeline__event__icon}></div>
          <div className={styles.timeline__event__date}>Tokyo Remittance</div>

          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__description}>
              <p>
                Developed a secure and efficient web application for Digiremit,
                integrating VueJs with SpringBoot backend via REST API.
                Implemented encryption protocols for user data privacy and
                streamlined data flow to optimize system performance. Conducted
                thorough code review to minimize risks of bugs or errors. The
                resulting application is a significant technological
                breakthrough in the field of remittance services, providing
                users with a comprehensive view of their transactions and
                personal data in a seamless and secure manner.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.timeline__event}>
          <div class={styles.timeline__event__icon}></div>
          <div className={styles.timeline__event__date}>Mobile Banking</div>

          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__description}>
              <p>
                Assisted in the development of the{' '}
                <i>Investasi Surat Berharga Negara (SBN) Ritel</i> feature for
                the Mobile Banking app, ensuring high standards were met.
                Collaborated with the team to contribute to logic implementation
                and convert Figma design into HTML. Worked with the UX/UI team
                to deliver a user-friendly experience. Provided debugging
                support to identify and address potential issues. Utilized
                skills in logic implementation and debugging to ensure the{' '}
                <i>Investasi Surat Berharga Negara (SBN) Ritel</i> feature was
                delivered to meet the needs of our users.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.timeline__event}>
          <div class={styles.timeline__event__icon}></div>
          <div className={styles.timeline__event__date}>Virtual Asistant</div>

          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__description}>
              <p>
                Contributed to the development of a Virtual Assistant
                application, taking on the role of software quality assurance
                despite having no prior experience in SQA. Demonstrated a
                willingness to learn new skills and methodologies, conducting
                thorough testing throughout the development process to ensure
                optimal functionality and meet all necessary requirements. By
                utilizing a quick learning ability and adaptability to new
                technologies, my contributions enhanced the functionality and
                usability of the Virtual Assistant application, resulting in a
                seamless and engaging experience for users. project.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.timeline__event}>
          <div class={styles.timeline__event__icon}></div>
          <div className={styles.timeline__event__date}>Maverick</div>

          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__description}>
              <p>Recently, I had been selected to join the Maverick team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
