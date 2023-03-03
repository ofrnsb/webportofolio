import styles from '@/styles/Timeline.module.css';

const Timeline = () => {
  return (
    <div>
      <div className={styles.timeline}>
        <div className={styles.timeline__event}>
          <div class={styles.timeline__event__icon}>
            <i class={styles.lni}></i>
          </div>
          <div className={styles.timeline__event__date}>Tokyo Remittance</div>

          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__description}>
              <p>
                As part of my duties, I was tasked with the development of a new
                web application for Tokyo Remittance, a remittance service that
                allows for seamless transactions between Bank Negara Indonesia
                and Japan. The primary objective of this web app was to provide
                users with a comprehensive view of their transaction status and
                personal data, among other relevant information. To ensure
                seamless user experience and optimal performance, I leveraged
                VueJs to build the web dashboard while connecting it to the
                SpringBoot backend through a REST API. To guarantee the utmost
                security of user data, I implemented top-grade encryption
                protocols that prevent unauthorized access and ensure data
                privacy. Additionally, I worked towards the improvement of data
                processing by streamlining data flow, minimizing bottlenecks,
                and enhancing overall efficiency. Furthermore, I carried out a
                thorough code review and removed any unused or redundant codes
                to optimize system performance and minimize the risk of bugs or
                errors. Overall, this web application represents a significant
                technological breakthrough in the field of remittance services
                and is designed to provide users with a seamless, secure, and
                efficient experience.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.timeline__event}>
          <div class={styles.timeline__event__icon}>
            <i class={styles.lni}></i>
          </div>
          <div className={styles.timeline__event__date}>Mobile Banking</div>

          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__description}>
              <p>
                As part of my role, I was assigned to assist in the development
                of the <i>Reksa Dana</i> feature for the Mobile Banking
                application. This feature would allow users to invest in{' '}
                <i>Reksa Dana</i> through the app, providing a convenient and
                accessible way to manage their finances. To ensure that the
                feature was implemented to the highest standards, I worked
                closely with the team to contribute to the logic implementation
                and convert the Figma design into HTML. I also collaborated with
                the UX/UI team to refine the user interface, ensuring that the
                feature was easy to navigate and intuitive to use. Furthermore,
                I provided support in conducting thorough testing and debugging
                to identify and address any potential issues. I worked with the
                team to test the feature in various scenarios to ensure that it
                performed efficiently and effectively, and met all necessary
                requirements and industry standards. My contributions to this
                project have helped to enhance the functionality and usability
                of the Mobile Banking application, providing users with a
                comprehensive and seamless experience. By leveraging my skills
                in logic implementation, user interface design, and testing, I
                was able to ensure that the <i>Reksa Dana</i> feature was
                developed to the highest standards and delivered a user-friendly
                experience that meets the needs of our users.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.timeline__event}>
          <div class={styles.timeline__event__icon}>
            <i class={styles.lni}></i>
          </div>
          <div className={styles.timeline__event__date}>Virtual Asistant</div>

          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__description}>
              <p>
                As part of my role, I was assigned to work on the development of
                a Virtual Assistant application. Even though I had no prior
                experience in Software Quality Assurance (SQA) and mobile
                development using React Native, I was excited to learn new
                skills and contribute to the project. As a software quality
                assurance, I was responsible for conducting thorough testing to
                ensure that the application met all necessary requirements and
                functioned optimally. I also worked closely with the third-party
                developers to provide feedback and suggest improvements to the
                code and logic flow. Moreover, as a mobile developer using React
                Native, I was tasked with making necessary adjustments to the
                codebase and improving the user interface to enhance the overall
                user experience. Even though I was new to React Native, I
                quickly familiarized myself with the technology and contributed
                significantly to the development of the application. Throughout
                the development process, I demonstrated my ability to learn
                quickly and adapt to new technologies and methodologies. By
                leveraging my problem-solving skills, I was able to identify
                potential issues and suggest solutions to ensure that the
                application was of the highest quality and met all necessary
                standards. My contributions to this project helped to enhance
                the functionality and usability of the Virtual Assistant
                application, providing users with a seamless and engaging
                experience. By demonstrating my ability to learn new skills
                quickly and effectively, I proved to be a valuable member of the
                development team and helped to ensure the success of the
                project.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.timeline__event}>
          <div class={styles.timeline__event__icon}>
            <i class={styles.lni}></i>
          </div>
          <div className={styles.timeline__event__date}>Maverick WM</div>

          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__description}>
              <p>
                Recently, I was about the fact that I had been selected as one
                of the thirty developers to participate in the prestigious
                &quot;Maverick WM&quot; project, I feel incredibly fortunate to
                have been chosen, and I am excited to contribute my skills and
                expertise to this innovative project. I am honored to have the
                opportunity to work alongside some of the brightest minds in the
                industry, and I am eager to see what we can achieve together on
                this exciting new project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
