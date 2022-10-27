import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
const CoursesList = () => {

    const [categor, setCategor] = useState([]);

    useEffect(() => {
        fetch('https://basic-web-devolepment-server-ex.vercel.app/course-cat')
            .then(res => res.json())
            .then(data => setCategor(data));

    }, [])
    return (
        <div>
            <div>
                <h4 className='text-warning'>Our All Courses: <span className='text-info'>{categor.length}</span></h4>

            </div>
            <div>
                {
                    categor.map(category => <li key={category.id}>
                        <Link
                            style={{ textDecoration: 'none', color: 'Aqua', fontWeight: 'bold' }}
                            to={`/details/${category.id}`}>
                            {category.name}
                        </Link>
                    </li>)
                }
            </div>
        </div >
    );
};

export default CoursesList;