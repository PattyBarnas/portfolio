import "./Education.css";

const Education = () => {
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
            <time> March 2021</time>
            <h3>Governors State University </h3>
            <div className="text">
              <ul>
                <li>
                  Bachelor of Engineering- Computer Science. I graduated with a
                  3.63 GPA. I enjoy working with Web, Mobile, and App
                  development TDD APPROACHED.
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
            <time>November 2020</time>
            <h3>Moraine Valley Community College</h3>
            <div className="text">
              <ul>
                <li>Associates of Science.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
