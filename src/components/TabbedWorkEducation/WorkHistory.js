import "./WorkHistory.css";

const WorkHistory = () => {
  return (
    <div className="timeline">
      <div className="events">
        <div className="event life">
          <svg
            className="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>

          <div className="content">
            <time> March 2025 - Present</time>
            <h3>Web Developer & SEO</h3>
            <div className="text">
              <ul>
                <li>
                  Migrated and optimized 350+ webpages using PHP, JavaScript,
                  HTML, CSS, WordPress REST API, and Node.js.
                </li>

                <li>
                  Local SEO, and web development across PHP, WordPress, Wix, and
                  Google Business Profiles.
                </li>
                <li>
                  Increased organic traffic 225% through technical and
                  data-driven SEO.
                </li>
                <li>
                  Improved site performance, site architecture, Core Web Vitals,
                  accessibility, responsive on all devices, custom schema,
                  indexing, AI visibility.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="event life">
          <svg
            className="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>

          <div className="content">
            <time>Dec 2024 - March 2025</time>
            <h3>Salesforce Developer</h3>
            <div className="text">
              <ul>
                <li>
                  Earned Salesforce Platform Developer I and System
                  Administrator certifications while building a property
                  management app using LWC, Apex, authentication, filtering, and
                  75% test coverage.
                </li>
                <li>
                  Led a 5-person Agile Scrum team, delivering features through
                  iterative development and sprint planning.
                </li>
                <li>
                  Developed Apex triggers, Visualforce pages, and Aura
                  components to automate workflows and improve data management.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="event life">
          <svg
            className="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>

          <div className="content">
            <time>July 2024 – Dec 2024</time>
            <h3>Java Intern</h3>
            <div className="text">
              <ul>
                <li>
                  Developed RESTful APIs and a SQL-backed data access layer for
                  a social media application using Spring Boot, JDBC.
                </li>
                <li>
                  Parameterized database queries to mitigate SQL injection risks
                  and practiced Test-Driven Development (TDD) using JUnit and
                  Mockito, achieving over 80% code coverage.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="event life">
          <svg
            className="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>

          <div className="content">
            <time>November 2023 – April 2024</time>
            <h3>Full Stack Developer Internship</h3>
            <div className="text">
              <ul>
                <li>
                  Developed responsive and reusable React components and dynamic
                  UI features using HTML, CSS, JavaScript.
                </li>
                <li>
                  Integrated front-end applications with Node.js services and
                  Azure cloud services.
                </li>
                <li>
                  Refactored React.js components improving website performance
                  by 15%.
                </li>
                <li>
                  Wrote Jest unit tests to improve code quality and
                  maintainability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
