import React from "react";
import styles from "./styles.module.css";

const PrincipleList = [
  {
    title: "Reliable",
    description: (
      <>
        Being reliable means you can count on us for accurate information and proven advice, anywhere,
        at any time. For all of our information, we cite our sources.
      </>
    ),
  },
  {
    title: "Convenient",
    description: (
      <>
        We've compiled the best resources, questions, and answers all in one place, making it more
        convenient for you to prepare and focus on landing that job.
      </>
    ),
  },
  {
    title: "Helpful",
    description: (
      <>
        If it doesn't help, it doesn't get added. No unnecessary decoration or irrelevant content to
        distract you from learning and pulling you out of your flow.
      </>
    ),
  },
  {
    title: "Community",
    description: (
      <>
        As an open-source project, we are committed to helping the UX community. No paywalls, free
        to use forever, and vetted by our users.
      </>
    ),
  },
];

function Principle({ title, description }) {
  return (
    <div className='col col--6'>
      <div className='margin-top--md margin-bottom--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function AboutPrinciples(props) {
  return (
    <section className={styles.aboutPrinciples}>
      <div className='row'>
        {PrincipleList.map((props, idx) => (
          <Principle key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default AboutPrinciples;
