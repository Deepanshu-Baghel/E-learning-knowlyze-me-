import React from 'react';
import './CourseDetail.css';

function CourseDetail(props) {
  const { title, description, instructor, duration, level, price } = props.course || {};

  return (
    <div className="course-detail">
      <h1>{title}</h1>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Level:</strong> {level}</p>
      <p><strong>Price:</strong> ${price}</p>
    </div>
  );
}

export default CourseDetail;
