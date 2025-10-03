import React, { useState } from "react";
import "./Services.css";
import services from "../../assets/services.png";
import FrontendDevelopment from "../../assets/1.png";
import Edit from "../../assets/2.png";
import BackendDevelopment from "../../assets/3.0.png";
import API from "../../assets/4.png";
import DATA from "../../assets/5.png";
import DATA2 from "../../assets/6.png";
import Servers from "../../assets/7.3.0.png";
import Debug from "../../assets/8.png";
import SEO from "../../assets/9.0.png";
import eCom from "../../assets/10.2.0.png";
import Content from "../../assets/11.png";
import Content2 from "../../assets/12.png";
import { TypeAnimation } from "react-type-animation";
const para1 = `Figma designing is very crucial in the development of web apps, websites, mobile apps, and every thing that relates with design. It doesn't just speed up the work—it also provides us freedom from the very robust work of redesigning the entire project from scratch if the client doesn't like the design. This protection comes from two key features: real-time collaboration and reusable components. Real-time sharing of interactive prototypes lets the client test the design early and give feedback before any code is written, catching problems immediately.`;
const para1b = `My Figma approach is built for speed and client alignment. The process immediately begins by capturing the client's preferred aesthetic direction using visual examples. I then establish the core layout, colors, and components in a structured manner. I present low-fidelity prototypes first to quickly validate the structure and flow, minimizing the risk of major redesigns. This ensures a highly efficient workflow and a final product that perfectly matches the client's vision.`;
const para2 = `Data handling is incredibly crucial for the success of any digital product. It doesn't just manage raw information; it gives us freedom from the costly, robust work of reconstructing entire analytics or feature logic when data fails. This protection comes from two key steps: data cleansing and schema enforcement. By strictly cleaning and structuring data early, we let analysts and developers trust their inputs and catch errors immediately, preventing the huge waste of resources that results from building on bad information.`;
const para2b = ` My data handling approach is built for accuracy and efficiency. The process immediately begins by auditing existing data sources to identify inconsistencies and gaps. I then implement automated cleansing routines to standardize formats and remove duplicates. Next, I enforce strict schema definitions to ensure data integrity across systems. This structured approach minimizes errors and maximizes the reliability of insights drawn from the data, ensuring that all decisions are based on accurate information.`;
const para3 = `SEO is a crucial first step in design, not a final polish. It grants us freedom from continuous paid advertising by enabling organic discoverability. This protection stems from mobile-first design and clear content hierarchy established in the design phase. By prioritizing user-friendly structure and speed, we ensure positive UX signals that algorithms demand, turning an efficient Figma design into a high-ranking traffic asset.`;
const para3b = `My SEO approach is built for long-term visibility and user engagement. The process immediately begins by conducting thorough keyword research to identify high-impact terms relevant to the target audience. I then optimize on-page elements such as meta tags, headers, and image alt texts to align with these keywords. Additionally, I focus on creating high-quality, relevant content that addresses user intent. This comprehensive strategy ensures that the website not only ranks well in search engines but also provides genuine value to visitors, driving sustained organic traffic.`;
const para4 = `Full-Stack Development is crucial for all functional digital applications. It doesn't just enable features—it provides us freedom from the robust, costly work of fixing broken connections between the front and back-end. This safeguard comes from unified context and end-to-end ownership. By managing both the UI and server logic, developers can test the full system early and trace bugs immediately, preventing systemic failures before they impact deployment.`;
const para4b = `My Full-Stack Development approach is built for seamless integration and rapid iteration. The process immediately begins by establishing a clear architecture that defines the interaction between front-end and back-end components. I then implement a modular code structure that allows for independent development and testing of each layer. This approach ensures that changes in one part of the stack do not inadvertently break functionality in another, enabling quick iterations and reliable deployments. By maintaining end-to-end ownership, I can efficiently address issues and optimize performance across the entire application.`;
const para5 = `Data Analysis is essential for all successful products. It gives us freedom from the costly work of developing features based on guesswork. This protection comes from two functions: predictive modeling and validation. By analyzing usage data, teams can test hypotheses early and identify opportunities immediately, preventing major strategic missteps.`;
const para5b = `My Data Analysis approach is built for actionable insights and strategic decision-making. The process immediately begins by collecting and cleaning relevant datasets to ensure accuracy. I then employ statistical techniques and visualization tools to identify patterns, trends, and correlations within the data. This analysis is complemented by predictive modeling to forecast future behaviors and outcomes. By translating complex data into clear, actionable insights, I empower stakeholders to make informed decisions that drive business growth and innovation.`;
const para6 = `E-commerce design is crucial for driving revenue and competitiveness. It grants us freedom from the costly overhead of physical stores and manual selling. This success relies on two functions: seamless conversion funnels and strong trust signals. By ensuring an intuitive checkout and displaying clear security proof, the site can capture sales early and scale immediately, preventing revenue loss and operational bottlenecks.`;
const para6b = `My E-commerce approach is built for high conversion and customer retention. The process immediately begins by optimizing the user journey from landing to checkout, minimizing friction points that could lead to cart abandonment. I then implement persuasive design elements such as clear calls-to-action, trust badges, and customer reviews to build confidence. Additionally, I focus on mobile optimization to cater to the growing number of mobile shoppers. This comprehensive strategy ensures a seamless shopping experience that drives sales and fosters long-term customer loyalty.`;
const para7 = `UX/UI design is crucial for all digital product success. It gives us freedom from the costly, robust work of fixing user confusion and high abandonment rates post-launch. This protection comes from empathy-driven workflow and validated usability. By rigorously testing prototypes against user needs, we lock in final designs early and minimize post-launch fixes, preventing critical usability flaws and negative brand impact.`;
const para7b = `My UX/UI approach is built for user-centric design and seamless interaction. The process immediately begins by conducting user research to understand the target audience's needs, behaviors, and pain points. I then create user personas and journey maps to guide the design process. Prototyping and usability testing are integral parts of my approach, allowing for iterative improvements based on real user feedback. This ensures that the final design is not only visually appealing but also intuitive and accessible, providing a positive experience that meets user expectations.`;
const para8 = `Server-Side Development is essential for application functionality and security. It grants us freedom from the crippling work of fixing scaling issues and security breaches. This assurance comes from robust API structuring and database integrity. This work allows the app to handle massive loads and protect data immediately, preventing catastrophic service failure.`;
const para8b = `My Server-Side Development approach is built for scalability and security. The process immediately begins by designing a robust API architecture that supports efficient data exchange and integration with front-end components. I then implement secure authentication and authorization protocols to protect sensitive information. Additionally, I focus on optimizing database performance through indexing and query optimization. This comprehensive strategy ensures that the server can handle high traffic loads while maintaining data integrity and security, providing a reliable backbone for the application.`;
const para9 = `CMS implementation is vital for efficient content publishing. It gives us freedom from the constant, costly work of needing developers for simple content changes. This control comes from user-friendly authoring tools and strict templating. This setup lets teams  publish and update content instantly,  preventing site errors and maintaining brand consistency without developer bottleneck.`;
const para9b = `My CMS approach is built for ease of use and flexibility. The process immediately begins by selecting a CMS platform that aligns with the client's technical proficiency and content needs. I then customize the CMS with intuitive authoring tools and templates that empower non-technical users to create and manage content independently. Additionally, I implement role-based access controls to ensure content integrity and security. This strategy ensures that the client can efficiently maintain their website, keeping content fresh and relevant without relying on constant developer support.`;
const para10 = `API integration is vital for modern software functionality. It grants us freedom from the robust work of building every feature and data pipeline ourselves. This comes from standardized protocols and decoupled architecture. This approach lets teams  access external services and scale features immediately,  preventing massive system failure and complexity.`;
const para10b = `My API integration approach is built for reliability and scalability. The process immediately begins by thoroughly evaluating third-party APIs to ensure they meet the application's requirements and performance standards. I then implement a modular integration strategy that allows for easy swapping or updating of APIs without disrupting the overall system. Additionally, I focus on error handling and logging to monitor API performance and quickly address any issues that arise. This comprehensive strategy ensures that the application can seamlessly leverage external services while maintaining stability and flexibility.`;
const para11 = `Debugging is vital for stable software. It gives us freedom from the costly work of constant user complaints and late-stage system failure. This assurance comes from systematic isolation and continuous testing. This work lets teams resolve issues early and ensure reliability immediately, preventing minor glitches from becoming catastrophic failures.`;
const para11b = `My debugging approach is built for efficiency and thoroughness. The process immediately begins by implementing comprehensive logging and monitoring systems to capture detailed information about application behavior. I then use systematic isolation techniques to identify the root cause of issues, allowing for targeted fixes without introducing new problems. Additionally, I prioritize continuous testing, including unit, integration, and end-to-end tests, to catch bugs early in the development cycle. This structured approach ensures that issues are resolved quickly and effectively, maintaining the stability and reliability of the software.`;
const para12 = `LMS Development is vital for scalable education. It grants us freedom from the robust work of manual student management and progress tracking. This comes from centralized course architecture and integrated analytics. This system lets institutions scale education and prove ROI immediately, preventing low engagement and content gaps.`;
const para12b = `My LMS approach is built for user engagement and administrative efficiency. The process immediately begins by designing a user-friendly interface that facilitates easy navigation and access to course materials. I then implement robust course management features, including enrollment, progress tracking, and assessment tools. Additionally, I focus on integrating analytics to provide insights into learner behavior and course effectiveness. This comprehensive strategy ensures that the LMS not only delivers a seamless learning experience but also empowers educators to manage and optimize their courses effectively.`;

function Services() {
  const [lightboxData, setLightboxData] = useState(null);

  const openLightbox = (image, title, description, title2, description2) => {
    setLightboxData({ image, title, description, title2, description2 });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };
  return (
    <>
      <div className="service-heading">
        <a href="/services" className="service-main-img-div">
          <img className="service-main-img" src={services} alt="" />
          <div className="services-main-text">Services</div>
        </a>
      </div>
      <div className="services-block-main">
        <div className="service-item-g1">
          <button
            onClick={() =>
              openLightbox(
                Edit,
                "Figma Designing",
                `${para1}`,
                "My Approach",
                para1b
              )
            }
            className="service-item edit"
          >
            <img className="service-img edit-img" src={Edit} alt="" />
            <div className="service-edit-text">Figma Designing</div>
          </button>
          <button
            onClick={() =>
              openLightbox(
                DATA,
                "Data Handling",
                ` ${para2} `,
                `My Approach`,
                `${para2b}`
              )
            }
            className="service-item data"
          >
            <img className="service-img data-img" src={DATA} alt="" />
            <div className="service-data-text">
              Data
              <br />
              Handling
            </div>
          </button>
          <button
            onClick={() =>
              openLightbox(
                SEO,
                "Search Engine Optimization",
                `${para3}`,
                "My Approach",
                `${para3b}`
              )
            }
            className="service-item seo"
          >
            <img className="service-img seo-img" src={SEO} alt="" />
            <div className="service-seo-text">
              <p className="content-bold">SEO</p>
              <br />
              <p className="content-light">Search Engine Optimization</p>
            </div>
          </button>
        </div>
        <div className="service-item-g2">
          <button
            onClick={() =>
              openLightbox(
                FrontendDevelopment,
                "Full Stack Development",
                `${para4}`,
                "My Approach",
                `${para4b}`
              )
            }
            className="service-item frontend"
          >
            <img
              className="service-img frontend-img"
              src={FrontendDevelopment}
              alt=""
            />
            <div className="service-frontend-text">
              Full Stack
              <br />
              Development
            </div>
          </button>
          <button
            onClick={() =>
              openLightbox(
                DATA2,
                "Data Analysis",
                `${para5}`,
                "My Approach",
                `${para5b}`
              )
            }
            className="service-item data2"
          >
            <img className="service-img data2-img" src={DATA2} alt="" />
            <div className="service-data2-text">
              Data
              <br />
              Analysis
            </div>
          </button>{" "}
          <button
            onClick={() =>
              openLightbox(
                eCom,
                "Ecommerce Website & App",
                ` ${para6}`,
                "My Approach",
                `${para6b}`
              )
            }
            className="service-item ecom"
          >
            <img className="service-img ecom-img" src={eCom} alt="" />
            <div className="service-ecom-text">
              <p className="content-bold">E-Com</p>
              <br />
              <p className="content-light">Ecommerce Website & App</p>
            </div>
          </button>{" "}
          {/* <div className="service-item"></div> */}
        </div>
        <div className="service-item-g3">
          <button
            onClick={() =>
              openLightbox(
                BackendDevelopment,
                "UX/UI Designing",
                `${para7}`,
                "My Approach",
                `${para7b}`
              )
            }
            className="service-item backend"
          >
            <img
              className="service-img backend-img"
              src={BackendDevelopment}
              alt=""
            />
            <div className="service-backend-text">
              UX/UI
              <br />
              Designing{" "}
            </div>
          </button>
          <button
            onClick={() =>
              openLightbox(
                Servers,
                "Server-Side Development",
                `${para8}`,
                "My Approach",
                `${para8b}`
              )
            }
            className="service-item servers"
          >
            <img className="service-img servers-img" src={Servers} alt="" />
            <div className="service-servers-text">
              Server-Side
              <br />
              Development
              <br />
            </div>
          </button>{" "}
          <button
            onClick={() =>
              openLightbox(
                Content,
                "Content Management System",
                `${para9}`,
                "My Approach",
                `${para9b}`
              )
            }
            className="service-item content"
          >
            <img className="service-img content-img" src={Content} alt="" />
            <div className="service-content-text">
              <p className="content-bold">CMS</p>
              <br />
              <p className="content-light">Content Management System</p>
            </div>
          </button>{" "}
          {/* <div className="service-item"></div> */}
        </div>
        <div className="service-item-g4">
          <button
            onClick={() =>
              openLightbox(
                API,
                "API Intigration",
                `${para10}`,
                "My Approach",
                `${para10b}`
              )
            }
            className="service-item api"
          >
            <img className="service-img api-img" src={API} alt="" />
            <div className="service-api-text">
              API
              <br />
              Intigration
            </div>
          </button>{" "}
          <button
            onClick={() =>
              openLightbox(
                Debug,
                "Debugging",
                `${para11}`,
                "My Approach",
                `${para11b}`
              )
            }
            className="service-item debug"
          >
            <img className="service-img debug-img" src={Debug} alt="" />
            <div className="service-debug-text">
              {" "}
              <p className="content-bold">Debugging</p>
              <br />
            </div>
          </button>{" "}
          <button
            onClick={() =>
              openLightbox(
                Content2,
                "Learning Management System",
                `${para12}`,
                "My Approach",
                `${para12b}`
              )
            }
            className="service-item content2"
          >
            <img className="service-img content2-img" src={Content2} alt="" />
            <div className="service-content2-text">
              <p className="content-bold">LMS</p>
              <br />
              <p className="content-light">Learning Management System</p>
            </div>
          </button>{" "}
        </div>
      </div>
      {lightboxData && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img
              className="lightbox-img"
              src={lightboxData.image}
              alt={lightboxData.title}
            />
            <div className="lightbox-text-content">
              <h3>{lightboxData.title}</h3>
              <TypeAnimation
                sequence={[lightboxData.description, 25000]}
                wrapper="p"
                cursor={true}
                repeat={0}
                style={{ fontSize: "1em ", marginTop: ".5rem" }}
                speed={98}
              />
              {/* <p className="description">{lightboxData.description}</p> */}
              <h3>My Approach</h3>
              <TypeAnimation
                sequence={[lightboxData.description2, 25000]}
                wrapper="p"
                cursor={true}
                repeat={0}
                style={{ fontSize: "1em ", marginTop: ".5rem" }}
                speed={98}
              />
              {/* <p className="MyApproach">{lightboxData.description2}</p> */}
            </div>
          </div>
        </div>
      )}
      <div className="bottom-line"></div>
    </>
  );
}

export default Services;
