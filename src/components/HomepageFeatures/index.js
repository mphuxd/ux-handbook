import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Button from "@mui/material/Button";

const FeatureList = [
  {
    title: "Getting Started",
    description: (
      <>
        Are you ready to start your interview prep? Get familiar with the UX interview process and
        learn how to make the most out this handbook.
      </>
    ),

    // link: <Button className='MuiButton-containedInherit' variant='outlined' color="inherit">Get Started</Button>,
    link: <button className='button button--filled button--primary'>Get Started</button>,
    slug: "/getting-started",
  },
  {
    title: "Prepare",
    description: (
      <>
        Learn strategies to nail your interviews. Start with technical & behavioral questions, then
        practice presenting & whiteboard challenges.
      </>
    ),
    link: "View Questions",
    slug: "/technical/overview",
  },
  {
    title: "Resources",
    description: (
      <>
        Go beyond the basics and discover valuable resources to advance your UX skills and keep
        up-to-date with the industry.
      </>
    ),
    link: "Additional Resources",
    slug: "/resources",
  },
];

const FeatureList2 = [
  {
    title: "About",
    description: (
      <>
        Are you ready to start your interview prep? Get familiar with the UX interview process and
        learn how to make the most out this handbook.
      </>
    ),

    // link: <Button className='MuiButton-containedInherit' variant='outlined' color="inherit">Get Started</Button>,
    link: "Get Started",
    slug: "/getting-started",
  },
  {
    title: "Contribute",
    description: (
      <>
        Learn strategies to nail your interviews. Start with technical & behavioral questions, then
        practice presenting & whiteboard challenges.
      </>
    ),
    link: "View Questions",
    slug: "/technical/overview",
  },
  {
    title: "Resources",
    description: (
      <>
        Go beyond the basics and discover valuable resources to advance your UX skills and keep
        up-to-date with the industry.
      </>
    ),
    link: "Additional Resources",
    slug: "/resources",
  },
];

function Feature({ title, description, link, slug }) {
  return (
    <div className={clsx("col col--4")}>
      <div className='margin-top--md margin-bottom--md'>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={slug}>{link}</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='row'>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
      {/* <div className='row margin-top--lg margin-bottom--md'>
        {FeatureList2.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div> */}
    </section>
  );
}
