import React from 'react';

const EmployeeCard = ({ id, name, dob, role }) => (
    <div className="bg-gray-800 text-white p-4 mb-4 rounded">
      <p>EMP ID: 1</p>
      <p>Name: {name}</p>
      <p>DOB: {dob}</p>
      <p>Role: {role}</p>
    </div>
  );
  
  const Employee = () => (
    <div className="bg-black text-white p-4">
      <header className="mb-8">
        <h1>MOPtro</h1>
        <input 
          type="text" 
          placeholder="Search with name" 
          className="bg-gray-800 text-white p-2 rounded"
        />
      </header>
  
      <EmployeeCard id={1} name="Arjun" dob="16-11-2000" role="Software Engineer" />
      <EmployeeCard id={2} name="Mahesh" dob="15-01-2000" role="Web Developer" />
    </div>
  );
  
  export default Employee;


// const Admin123 = () => {
//   return (

    
//   );
// };


// export default Admin_123;   