import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Getting Started",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Are you ready to start your interview prep? Get familiar with the UX interview process and
        learn how to make the most out this handbook.
      </>
    ),
    link: "Get Started",
    slug: "/getting-started",
  },
  {
    title: "Prepare",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Learn strategies to nail your interviews. Start with technical & behavioral questions, then
        practice presenting & whiteboard challenges.
      </>
    ),
    link: "Questions",
    slug: "/technical/overview",
  },
  {
    title: "Resources",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
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

function Feature({ Svg, title, description, link, slug }) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--left">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className=''>
        <h3>{title}</h3>
        <p>{description}</p>
        <a className={styles.feature__link} href={slug}>
          {link}
        </a>
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
    </section>
  );
}
