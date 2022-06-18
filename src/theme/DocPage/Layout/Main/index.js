import React from "react";
import { useDocsSidebar } from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "./styles.module.css";
import Footer from "@theme/Footer";
import { motion } from "framer-motion";

export default function DocPageLayoutMain({ hiddenSidebarContainer, children }) {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const sidebar = useDocsSidebar();
  return (
    <motion.main
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.4 }}
      className={clsx(
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced
      )}
    >
      <div
        className={clsx(
          "container padding-top--md padding-bottom--lg",
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced
        )}
      >
        {children}
      </div>
      <Footer />
    </motion.main>
  );
}
