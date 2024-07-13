import type { Project } from '~/types';

/**
 * Manually Defined Projects
 *
 * Returns a manually curated list of projects with descriptions and links.
 */
export async function fetchProjects(): Promise<Array<Project>> {
  return [
    {
      name: "Syllabus Generator System",
      description: "Devised a SQL-based department-centric syllabus generator to streamline educational administration.",
      url: "https://github.com/snavyaakshitha/Syllabus-Generator-",
      icon: "📄",
      homepage: undefined,
      post: undefined,
      template: false,
    },
    {
      name: "Product Review Analysis Pipeline",
      description: "Developed an end-to-end data engineering project using an ELT data pipeline to analyze Amazon Product Reviews.",
      url: "https://github.com/snavyaakshitha/product-review-analysis-pipeline",
      icon: "📈",
      homepage: undefined,
      post: undefined,
      template: false,
    },
    {
      name: "Weather Data Analysis using PySpark",
      description: "Led weather data analysis with Apache Spark, delivering valuable insights through concise visualizations.",
      url: "https://github.com/snavyaakshitha/Weather-Analysis-Using-PySpark",
      icon: "🌦️",
      homepage: undefined,
      post: undefined,
      template: false,
    },
    {
      name: "COVID 19 Trends Dashboard",
      description: "Orchestrated a dashboard illustrating global COVID-19 trends, enhancing data-driven decision-making.",
      url: "https://github.com/snavyaakshitha/COVID19-Trends-Dashboard",
      icon: "📊",
      homepage: undefined,
      post: undefined,
      template: false,
    },
    {
      name: "Alumni Tracking System",
      description: "Developed a web application for colleges to monitor alumni and for alumni to stay updated with college activities. Secured 7th position for this project at Smart India Hackathon.",
      url: "https://github.com/snavyaakshitha/alumni-tracking-system-SIH2020",
      icon: "🎓",
      homepage: undefined,
      post: undefined,
      template: false,
    },
    {
      name: "Online Book Exchange Platform",
      description: "Revolutionized literary interactions with innovative technology stack, enhancing scalability & security.",
      url: "https://github.com/snavyaakshitha/Online-Book-Exchange-Platform-",
      icon: "📚",
      homepage: undefined,
      post: undefined,
      template: false,
    },
    {
      name: "Real-Time Face Mask Detection Using a Deep-Learning Network",
      description: "Developed an application for mask/no mask classification in webcam and real-world videos.",
      url: "https://github.com/snavyaakshitha/face-mask-detection",
      icon: "😷",
      homepage: undefined,
      post: undefined,
      template: false,
    },
    {
      name: "Authentication of Products and Counterfeit Elimination Using Blockchain Technology",
      description: "Developed an application for handling product data with blockchain for authentication and counterfeit elimination.",
      url: "https://github.com/snavyaakshitha/product-authentication-blockchain",
      icon: "🔗",
      homepage: undefined,
      post: undefined,
      template: false,
    },
    {
      name: "Password Manager Using Cryptographic Techniques",
      description: "Developed a password manager implementing AES for enhanced security, featuring a strength checker and 2FA.",
      url: "https://github.com/snavyaakshitha/password-manager-crypto",
      icon: "🔐",
      homepage: undefined,
      post: undefined,
      template: false,
    },
  ];
}
