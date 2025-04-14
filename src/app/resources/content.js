import { InlineCode } from "@/once-ui/components";
import { title } from "process";

const person = {
  firstName: "Reece",
  lastName: "Hayward",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack & Devops Engineer",
  avatar: "/images/me.jpg",
  location: "Asia/Tokyo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "日本語"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/reecewithnospoon",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/reece-hayward-9777a42bb/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:dev@reecehayward.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Profile`,
  description: `Personal website to showcase my ${person.role} skills and experience.`,
  headline: <>Full Stack & Devops Engineer</>,
  subline: (
    <>
      I'm Reece, a software engineer at <InlineCode>Kotozna inc.</InlineCode>, where I build
      <br /> multilingual AI solutions on cloud infrastructure.
    </>
  ),
};

const about = {
  label: "About ${person.name}'s Profile",
  title: `${person.name}'s Profile`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Tokyo-based full stack engineer with a passion for studying new technologies,
        building high-quality frontend and backend solutions, and creating real value.
        With an academic background in business, and strong leadership experience, I can quickly impact any project.
        <p>Email: <strong>dev@reecehayward.com</strong></p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Kotozna",
        timeframe: "May 2023 - Present",
        role: "Full Stack Engineer",
        achievements: [
          <>
            Team leader and project lead, in charge of training, and task
            estimation and allocation during regular meetings with PO’s.
          </>,
          <>
            Reduced costs for our ETL pipeline by ~30% by: optimizing our
            existing custom jobs; migrating new tasks to AWS Glue.
          </>,
          <>
            Created a new front-end, generative AI product from scratch, and
            deployed across our various stages via terraform and bitbucket
            pipelines.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/kotozna/kotozna-hp.png",
            alt: "Kotozna Homepage",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "TheTicketSellers",
        timeframe: "September 2016 - October 2017",
        role: "Software Engineer",
        achievements: [
          <>
            Maintained and developed a legacy events management SAAS in PHP.
          </>,
          <>
            Migrated the old solution to MEAN stack.
          </>,
          <>
            Set up networking infrastructure for large events.
          </>
        ],
        images: [
          {
            src: "/images/projects/tts/tts-hp.png",
            alt: "Eventree Homepage",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Bluehub Solutions",
        timeframe: "August 2013 - September 2016",
        role: "Software Engineer",
        achievements: [
          <>
            Built bespoke ERP and CRM solutions for local businesses in C#.NET
            and Telerik Kendo UI front-end framework.
          </>,
          <>
            Worked independently on PHP-based side projects, including an
            e-commerce website for Cancer Research UK.
          </>,
        ],
        images: [],
      },
      {
        company: "RedTeaWeb",
        timeframe: "January 2013 - August 2013",
        role: "Software Engineer",
        achievements: [
          <>
            Built marketing websites for local businesses in PHP / Wordpress.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "The University of Manchester",
        description: <>(2017 - 2021) Bachelors in Business and Management and Modern Language (Japanese)</>,
      },
      {
        name: "Hitotsubashi University",
        description: <>(2019 - 2020) Global Exchange Program</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Python",
        description: <>Microservices built with GraphQL, Flask, SQLAlchemy, AWS Lambda, Pandas.</>,
        // optional: leave the array empty if you don't want to display images
        images: []
      },
      {
        title: "Typescript / Vue.js / Next.js",
        description: <>Worked on various SAAS front-end projects integrated with generative AI.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/kotozna/tpg-guest.png",
            alt: "Guest AI Application",
            width: 9,
            height: 16,
          },
        ],
      },
      {
        title: "AWS",
        description: <>Certified Solutions Architect with experience in: AWS Glue, Lambda, S3, ECS, RDS, IAM etc.</>,
        images: [
          {
            src: "/images/aws-cert.png",
            alt: "AWS CSA Certificate",
            width: 16,
            height: 9,
          }
      ]
      },
      {
        title: "Terraform",
        description: <>Built and and deployed infrastructure on AWS.</>,
      },
      {
        title: "Docker",
        description: <>Experience in building and deploying to ECS with Docker Compose.</>,
      },
      {
        title: "Linux",
        description: <>Distros I have used professionally and personally: Debian; Arch; CentOS; Ubuntu; Kali; Mint.</>,
      },
      {
        title: "Continuous Integration",
        description: <>Bitbucket Pipelines; GitHub Actions; Jenkins.</>,
      },
      {
        title: "ETL & Google BigQuery",
        description: <>Experience with data pipelines and data warehousing.</>,
      },
      {
        title: "Team Leadership",
        description: <>Experience in mentoring, training, and task allocation.</>,
      },
      {
        title: "Japanese",
        description: <>Business level.</>,
      }
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Some side projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
