import React from 'react';
import NB from "./NavBar"; 
import Modal from "../components/Modal";
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { RiArrowLeftSFill } from 'react-icons/ri'
import { RiArrowRightSFill } from 'react-icons/ri'
import progress from '../images/progress.png';

/*
  add, display, complete, filter, and delete todos
*/

const Insights = ({show, setShow, closeModalHandler, inputValue, setInputValue }) => {
    return (
      <div className="App">
        <NB />
      <div className="white">
          <div className="taskwelcome">
              <h2 className="taskwelcometxt"> Good morning, 
              <br></br>
              Jennifer </h2>
          </div>
          <ul className="tasknav">
            <Link to ="/recent">
              <h3> Recent </h3>
            </Link>
            <Link to ="/tasks">
              <h3> Tasks </h3>
            </Link>
            <Link to ="/insights" className="task-link">
              <h3> Insights </h3>
            </Link>
          </ul>

          <div className="cardoutline">
            {/*progress bar */}
              <div className="cardheader">
                  <p>Number of Completed Tasks</p>
              </div>
            {/* insights slider */}
              <div className="insightscontain">
                <div className="insightslide">
                  <img className="progressbar" src={progress} alt="progress"/>
                  <div className="thismonth"><RiArrowLeftSFill/><p> this month </p><RiArrowRightSFill/></div>
                </div>
              </div>
            {/*users*/}
            <div className="insightcontent">
                <div className="insightalign" id="effort3">
                    <FaUserCircle/><p>3/5</p>
                </div>
                <div className="insightalign" id="effort3">
                    <FaUserCircle/><p>2/4</p>
                </div>
            </div>
            <div className="insightcontent2">
                <div className="insightalign" id="effort3">
                    <FaUserCircle/><p>3/3</p>
                </div>
                <div className="insightalign" id="effort3">
                    <FaUserCircle/><p>1/4</p>
                </div>
            </div>
          </div>   
          
          {/*effort distribution*/}
          <div className="cardoutline2">
              <div className="cardheader">
                  <p>Effort Distribution</p>
              </div>
              <div class="pie-chart"></div>
              {/*users*/}
            <div className="insightcontent3">
                <div className="insightalign" id="effort1">
                    <FaUserCircle/><p>38%</p>
                </div>
                <div className="insightalign" id="effort2">
                    <FaUserCircle/><p>80%</p>
                </div>
            </div>
            <div className="insightcontent4">
                <div className="insightalign" id="effort3">
                    <FaUserCircle/><p>23%</p>
                </div>
                <div className="insightalign" id="effort4">
                    <FaUserCircle/><p>23%</p>
                </div>
            </div>
          </div>
          <button onClick={() => setShow(true)} className="btn-openModal">+ Task</button>
          {/* pop up modal for add task */}
          {show && <Modal closeModalHandler={closeModalHandler} inputValue={inputValue} setInputValue={setInputValue} />}
      </div>
    </div>
    );
}
 
export default Insights;