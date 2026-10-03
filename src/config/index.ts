import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Rifky Ramdhani — Data Engineer",
  author: "Rifky Ramdhani",
  description:
    "Data Engineer with 3+ years of experience building ETL/ELT pipelines, optimizing SQL performance and automating data operations with Python.",
  lang: "en",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "Certifications", href: "#certifications" },
    { text: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/rifkyramdhani/" },
    { text: "Github", href: "https://github.com/rifkyramdhani" },
    {
      text: "Credly",
      href: "https://www.credly.com/users/rifkyramdhani/badges/credly",
    },
    {
      text: "Download CV",
      href: "https://drive.google.com/drive/folders/1AmfNw2kJ1szqac4VIaiy7jh0TxM3jcDi?usp=share_link",
    },
  ],
  socialImage: "/og.png",
  canonicalURL: "https://rifkyramdhani.github.io",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Rifky Ramdhani",
    roles: [
      "Data Engineer",
      "ETL / ELT Pipelines",
      "SQL Optimization",
      "Python Automation",
    ],
    summary:
      "Data Engineer at Insignia with over 3 years of experience building and maintaining ETL pipelines, developing Python automation and optimizing SQL performance. Currently working with AWS, Databricks, Apache Airflow, dbt and Snowflake to build reliable, scalable and high-quality data platforms.",
    email: "rifkyramdhani@gmail.com",
  },
  experience: [
    {
      company: "Insignia",
      role: "Data Engineer",
      type: "Full-time · Hybrid",
      location: "Jakarta, Indonesia",
      startDate: "Sep 2026",
      endDate: "Present",
      current: true,
      summary: [
        "Reviewed a client's legacy AWS Glue pipelines in a consulting engagement, analyzing Glue scripts, CloudWatch logs, CPU usage history and workflow dependencies.",
        "Built an end-to-end data pipeline on Databricks.",
        "Built a Databricks App with a React front end.",
        "Ran a POC to rebuild an existing pipeline (MySQL → Airflow on Cloud Composer → Hive on GCP) as MySQL → Airflow on AWS EKS → S3 Iceberg → dbt → Snowflake.",
      ],
      tech: [
        "AWS Glue",
        "CloudWatch",
        "Databricks",
        "React",
        "Airflow",
        "Cloud Composer",
        "Hive",
        "GCP",
        "Amazon EKS",
        "S3",
        "Apache Iceberg",
        "dbt",
        "Snowflake",
        "MySQL",
      ],
    },
    {
      company: "Bina Nusantara IT Division",
      role: "Data Engineer",
      type: "Full-time · On-site",
      location: "West Jakarta, Indonesia",
      startDate: "Feb 2023",
      endDate: "Jun 2026",
      summary: [
        "Optimized SQL queries in Microsoft SQL Server and PostgreSQL, improving ETL pipeline performance and reducing query execution time by up to 70%.",
        "Developed a Python automation script that cleaned 595 GB of inactive cache data in Delman Data Lab, reducing storage usage by 94% and removing the need for manual maintenance.",
        "Developed Python scripts to automate ETL monitoring and error recovery.",
        "Monitored ETL pipelines in Azure Data Factory (ADF) and Google BigQuery to ensure reliable data processing, data quality and successful scheduled executions.",
        "Helped migrate ETL processes from SQL Server Integration Services (SSIS) to Delman Data Lab.",
        "Handled 10+ data engineering requests each month, building and updating ETL pipelines based on business requirements, including Full Load, Incremental Load and Delta Load implementations.",
        "Developed Tableau dashboards and performed data validation to ensure accurate reporting and support business decisions.",
        "Managed ETL job scheduling and collaborated with vendors and infrastructure teams to troubleshoot issues, deploy ETL improvements and optimize on-premises systems.",
      ],
      tech: [
        "Python",
        "SQL Server",
        "PostgreSQL",
        "Azure Data Factory",
        "BigQuery",
        "SSIS",
        "Delman Data Lab",
        "Tableau",
      ],
    },
  ],
  education: [
    {
      school: "Bina Nusantara University",
      degree: "Bachelor's Degree in Information Systems",
      location: "Jakarta, Indonesia",
      period: "Nov 2021 – Jul 2024",
      detail: "GPA 3.65 / 4.00 · Cum Laude · Diploma to Bachelor's Program",
    },
    {
      school: "State Polytechnic of Malang",
      degree: "Diploma in Mechanical Engineering",
      location: "Malang, Indonesia",
      period: "Aug 2016 – Aug 2019",
      detail: "GPA 3.39 / 4.00",
    },
  ],
  projects: [
    {
      name: "E-Commerce Data Engineering Pipeline (Microsoft Fabric)",
      summary:
        "End-to-end Medallion Architecture (Bronze, Silver, Gold) on Microsoft Fabric Lakehouse and Delta Lake. PySpark pipelines handle cleaning, de-duplication, null handling, timestamp standardization and feature engineering, and business-ready Gold tables are served to Power BI through Direct Lake.",
      links: [
        {
          text: "Documentation",
          href: "https://github.com/rifkyramdhani/data-engineer-portfolio/tree/main/microsoft-fabric/fabric-medallion-ecommerce-pipeline",
        },
      ],
      image: "/project-medallion.svg",
      tags: [
        "Microsoft Fabric",
        "PySpark",
        "Delta Lake",
        "Spark SQL",
        "OneLake",
        "Power BI",
      ],
    },
    {
      name: "Modern ELT Data Pipeline",
      summary:
        "An end-to-end ELT pipeline where Apache Airflow orchestrates ingestion into Snowflake, dbt models handle transformation, and automated data quality tests guard the output.",
      status: "In progress",
      image: "/project-elt.svg",
      links: [],
      tags: ["Python", "SQL", "Apache Airflow", "dbt", "Snowflake"],
    },
    {
      name: "E-Commerce Business Performance with SQL",
      summary:
        "Analysis of annual customer activity, product category performance and payment method usage using PostgreSQL, built for the Rakamin Academy Data Science Bootcamp.",
      links: [
        {
          text: "Documentation",
          href: "https://drive.google.com/file/d/1aOqiv_a-ct-bXiA8jLmUvGvlRCrjfdrF/view",
        },
      ],
      image: "/project-sql.svg",
      tags: ["PostgreSQL", "SQL"],
    },
    {
      name: "Machine Learning: E-Commerce Customer Churn Prediction",
      summary:
        "An end-to-end customer churn prediction model covering business understanding, data preprocessing, model evaluation and business recommendations, built for the Rakamin Academy Data Science Bootcamp final project.",
      links: [
        {
          text: "Documentation",
          href: "https://drive.google.com/file/d/1MjDdBDcV201zsV56D28MeTl00OQ1WZvZ/view",
        },
      ],
      image: "/project-churn.svg",
      tags: ["Python", "Pandas", "NumPy", "Google Colab"],
    },
    {
      name: "Tableau Analytics Portfolio",
      summary:
        "Three interactive Tableau dashboards on public datasets: Netflix content, US flight delays, and global energy and CO₂ emissions.",
      links: [
        {
          text: "Documentation",
          href: "https://drive.google.com/file/d/1D5mSBjCkpcWlBYOKhUROM-uEIK_eo3pN/view?usp=sharing",
        },
        {
          text: "Dashboard",
          href: "https://public.tableau.com/app/profile/rifky.ramdhani/vizzes",
        },
      ],
      image: "/project-tableau.svg",
      tags: ["Tableau", "Dashboards"],
    },
    {
      name: "Image Classification with TensorFlow",
      summary:
        "A CNN built with TensorFlow that predicts rock, paper and scissors hand gestures, trained in Python on Google Colab.",
      links: [
        {
          text: "Notebook",
          href: "https://colab.research.google.com/drive/13YwBd7uNvJS6XGSqGIwAnqSqAhdkUebP#scrollTo=6Uk4Rj-oI2F5",
        },
      ],
      image: "/project-cnn.svg",
      tags: ["TensorFlow", "CNN", "Python"],
    },
  ],
  skills: [
    {
      title: "Data Pipeline & Orchestration",
      items: [
        "Apache Airflow",
        "dbt",
        "Delman Data Lab",
        "SQL Server Integration Services (SSIS)",
      ],
    },
    {
      title: "Programming",
      items: ["Python", "SQL", "PostgreSQL", "SQL Server", "MySQL", "Oracle"],
    },
    {
      title: "Cloud & Data Platform",
      items: [
        "Microsoft Fabric",
        "Snowflake",
        "Azure Data Factory",
        "Databricks",
        "Google BigQuery",
        "AWS Glue",
        "Amazon S3 / Apache Iceberg",
        "Amazon EKS",
        "Cloud Composer",
        "Hive",
      ],
    },
    {
      title: "Concepts & Methods",
      items: [
        "ETL / ELT",
        "Full / Incremental / Delta Load",
        "Data Validation",
        "Data Migration",
        "SQL Query Optimization",
        "Agile (Scrum / Waterfall)",
      ],
    },
    { title: "Version Control", items: ["Git", "GitHub", "Docker"] },
    {
      title: "BI & Visualization",
      items: ["Tableau", "Power BI", "Looker Studio"],
    },
  ],
  certifications: [
    {
      title: "Certifications",
      items: [
        {
          name: "Apache Airflow 3 Fundamentals",
          issuer: "Astronomer",
          year: "2025",
          logo: "/airflow-certification.png",
          href: "https://www.credly.com/badges/4896a94e-973f-4e18-918e-e33ab8ca1dc4/linked_in_profile",
        },
        {
          name: "IBM Data Engineer",
          issuer: "Coursera",
          year: "2025",
          logo: "/IBM-logo.png",
          href: "https://coursera.org/share/1361328f7b43dc2849680947c82c1fca",
        },
        {
          name: "IBM Data Warehouse Engineer",
          issuer: "Coursera",
          year: "2025",
          logo: "/IBM-logo.png",
          href: "https://www.coursera.org/share/2ffdcb38c5df39804a02ed382754d9ac",
        },
        {
          name: "Google Cloud Skill Badges",
          issuer: "Google",
          year: "2025",
          logo: "/google-cloud.png",
          href: "https://www.credly.com/users/rifkyramdhani/badges/credly",
        },
      ],
    },
    {
      title: "Courses",
      items: [
        {
          name: "Data Science: Machine Learning Specialization Bootcamp",
          issuer: "Rakamin Academy",
          year: "2022",
          logo: "/rakamin-logo.png",
          href: "https://drive.google.com/file/d/18NuVuKpKS8vh_c6-Z3yYwI7wPvzW4THy/view",
        },
        {
          name: "Data Visualization with Tableau",
          issuer: "HabisKerja",
          year: "2022",
          logo: "/habiskerja-logo.jpeg",
          href: "https://drive.google.com/file/d/1UqNRI2GEGkkpGgTXr3yFNlTprZEwA_1c/view",
        },
        {
          name: "Business Analyst: Mastering Excel and PowerBI",
          issuer: "HabisKerja",
          year: "2022",
          logo: "/habiskerja-logo.jpeg",
          href: "https://drive.google.com/file/d/1wCGCyspqT3ZBndc90aQGqwo3CMb_PO4D/view",
        },
        {
          name: "Basic Data Visualization",
          issuer: "Dicoding Academy",
          year: "2022",
          logo: "/dicoding-logo.png",
          href: "https://www.dicoding.com/certificates/07Z6GLW9RXQR",
        },
        {
          name: "Getting Started Programming with Python",
          issuer: "Dicoding Academy",
          year: "2022",
          logo: "/dicoding-logo.png",
          href: "https://www.dicoding.com/certificates/1RXYO4KK1PVM",
        },
        {
          name: "Machine Learning for Beginner",
          issuer: "Dicoding Academy",
          year: "2022",
          logo: "/dicoding-logo.png",
          href: "https://www.dicoding.com/certificates/2VX3Y6OQNPYQ",
        },
      ],
    },
  ],
  about: {
    description: [
      "I'm a Data Engineer at Insignia with over 3 years of experience building and maintaining ETL pipelines, writing Python automation and optimizing SQL performance. I care about pipelines that run reliably without anyone watching them.",
      "Today I work across AWS, Databricks, Apache Airflow, dbt and Snowflake, from reviewing existing pipelines to building and prototyping new ones. Before that, at Bina Nusantara IT Division, I worked with Azure Data Factory, Google BigQuery, Microsoft SQL Server and PostgreSQL.",
      "I hold an Apache Airflow certification and a Bachelor's degree in Information Systems from Bina Nusantara University (Cum Laude), and I keep learning through hands-on projects.",
    ],
  },
  contact: {
    email: "rifkyramdhani@gmail.com",
    formAction: "https://formsubmit.co/rifkyramdhani@gmail.com",
  },
};
