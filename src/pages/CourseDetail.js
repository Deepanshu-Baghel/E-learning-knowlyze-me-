import React from 'react';
import './CourseDetail.css';

function CourseDetail(props) {
  const { title, description, instructor, duration, level, price } = props.course || {};

  return (
    <>
      <div className="cardd-container1">
    
    <div className="cardd">
      <div className="cardd-image"></div>
      <div className="category">Illustration</div>
      <div className="heading">that must span over two lines
        <div className="author">By <span className="name">Abi</span> 4 days ago</div>
      </div>
    </div>

    <div className="cardd">
      <div className="cardd-image"></div>
      <div className="category">Photography</div>
      <div className="heading">Capturing the beauty of nature
        <div className="author">By <span className="name">John</span> 2 days ago</div>
      </div>
    </div>
    {/* invnsilne is impo */}

    <div className="cardd">
      <div className="cardd-image"></div>
      <div className="category">Design</div>
      <div className="heading">Creating intuitive user interfaces
        <div className="author">By <span className="name">Emily</span> 1 day ago</div>
      </div>
    </div>

    <div className="cardd">
      <div className="cardd-image"></div>
      <div className="category">Writing</div>
      <div className="heading">Exploring the art of storytelling
        <div className="author">By <span className="name">Alex</span> 5 days ago</div>
      </div>
    </div>
    
  </div>
  <br/>
  <div className="cardd-container2">
    
    <div className="cardd">
      <div className="cardd-image"></div>
      <div className="category">Illustration</div>
      <div className="heading">that must span over two lines
        <div className="author">By <span className="name">Abi</span> 4 days ago</div>
      </div>
    </div>

    <div className="cardd">
      <div className="cardd-image"></div>
      <div className="category">Photography</div>
      <div className="heading">Capturing the beauty of nature
        <div className="author">By <span className="name">John</span> 2 days ago</div>
      </div>
    </div>

    <div className="cardd">
      <div className="cardd-image"></div>
      <div className="category">Design</div>
      <div className="heading">Creating intuitive user interfaces
        <div className="author">By <span className="name">Emily</span> 1 day ago</div>
      </div>
    </div>

    <div className="cardd">
      <div className="cardd-image"></div>
      <div className="category">Writing</div>
      <div className="heading">Exploring the art of storytelling
        <div className="author">By <span className="name">Alex</span> 5 days ago</div>
      </div>
    </div>
    
  </div>

    </>
  );
}

export default CourseDetail;
