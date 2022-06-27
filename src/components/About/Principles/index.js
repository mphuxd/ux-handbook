import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import clsx from "clsx";
import { style } from "@mui/system";

const PrincipleList = [
  {
    title: "Reliable",
    description: (
      <>
        Being reliable means you can count on us for accurate information & proven advice, anywhere,
        at any time. For all of our claims, we make sure to cite our sources.
      </>
    ),
  },
  {
    title: "Convenient",
    description: (
      <>
        By compiling all resources, questions, answers all in one document, we make it more
        convenient and easier to focus on your interview prep to land your jobs.
      </>
    ),
  },
  {
    title: "Helpful",
    description: (
      <>
        Everything we do for this project is approached with helpfulness in mind. If it doesn't
        help, it doesn't get added. No unnecessary decoration, irrelevant content to distract you
        from what matters and pulling you out of your flow.
      </>
    ),
  },
  {
    title: "Community",
    description: (
      <>
        As an open-source project, we are committed to helping the UX community. This means no
        paywalls to limit anyone's access, making it free to use forever, and open to feedback to
        make any improvements in order to better serve our community.
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

AboutPrinciples.propTypes = {};

export default AboutPrinciples;
