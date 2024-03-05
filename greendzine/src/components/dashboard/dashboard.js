import React from 'react';

const Dashboard = () => {
  return (
    <div> 
    <div className="dashboard_bg">
    <img className='help_icon' src='./Group4.png'></img>
      <img src="./moptrologo.png" alt="MOPtro logo" className="MOPtro_IMG" ></img>

      <h2 className="dashboard_text">Employee Productivity Dashboard</h2>
      
      <div className="dashboard_box">
        <div className="mb-4">
          <p className="text1">Productivity on Monday</p>
          <div className="apperance1">
            <div className="percentage1" style={{ width: '4%' }}>4%</div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text2">Productivity on Tuesday</p>
          <div className="apperance2">
            <div className="percentage2" style={{ width: '92%' }}>92%</div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text3">Productivity on Wednesday</p>
          <div className="apperance3">
            <div className="percentage3" style={{ width: '122%' }}>122%</div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text4">Productivity on Thursday</p>
          <div className="apperance4">
            <div className="percentage4" style={{ width: '93%' }}>93%</div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text5">Productivity on Friday</p>
          <div className="apperance5">
            <div className="percentage5" style={{ width: '89%' }}>89%</div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text6">Productivity on Saturday</p>
          <div className="apperance6">
            <div className="percentage6" style={{ width: '98%' }}>98%</div>
          </div>
        </div>
        <nav className='navbar'>

          <div className='home'>
            <img src="./house.png" className="dog_home"></img>
          </div>

          <div className='user'>
            <img src="./user.png" className="user_icon"></img>
          </div>

        </nav>
      </div>
    </div>
    </div>

  );
};


export default Dashboard;   