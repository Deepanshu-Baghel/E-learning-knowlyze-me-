import React from 'react';
import CourseCard from './CourseCard';
import './Courses.css';

function Courses(props) {
  const { courses } = props;

  return (
    <div className="courses">
      <h1>Courses</h1>
      <div className="course-grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
