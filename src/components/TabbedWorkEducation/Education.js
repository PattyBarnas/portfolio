import "./Education.css";

const Education = () => {
  return (
    <div class="timeline">
      <div class="events">
        <div class="event life">
          <svg
            class="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>

          <div class="content">
            <time> March 2021</time>
            <h3>Governors State University </h3>
            <div class="text">
              <ul>
                <li>Bachelor of Engineering- Computer Science.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="event life">
          <svg
            class="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>

          <div class="content">
            <time>November 2020</time>
            <h3>Moraine Valley Community College</h3>
            <div class="text">
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
