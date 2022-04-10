/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";


class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }
  state = {
    loveEmoji: false,
  };
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li className={`${path === 'overview' ? "mm-active" : ""}`}>
              <Link 
                className="ai-icon" 
                to="/dashboard/overview"
                onClick={() => this.props.onClick3()}>
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Overview</span>
              </Link>
            </li>
            <li className={`${path === 'calendar' ? "mm-active" : ""}`}>
              <Link 
                className="ai-icon" 
                to="/dashboard/calendar"
                onClick={() => this.props.onClick3()}>
                <i className="flaticon-381-calendar"></i>
                <span className="nav-text">Calendar</span>
              </Link>
            </li>
            <li className={`${path === 'patient-list' ? "mm-active" : ""}`}>
              <Link 
                className="ai-icon" 
                to="/dashboard/patient-list"
                onClick={() => this.props.onClick3()}>
                <i className="flaticon-381-user"></i>
                <span className="nav-text">Patient List</span>
              </Link>
            </li>
            <li className={`${path === 'messages' ? "mm-active" : ""}`}>
              <Link 
                className="ai-icon" 
                to="/dashboard/messages"
                onClick={() => this.props.onClick3()}>
                <i className="flaticon-381-note"></i>
                <span className="nav-text">Messages</span>
              </Link>
            </li>
            <li className={`${path === 'payment-information' ? "mm-active" : ""}`}>
              <Link 
                className="ai-icon" 
                to="/dashboard/payment-information"
                onClick={() => this.props.onClick3()}>
                <i className="flaticon-381-diamond"></i>
                <span className="nav-text">Payment information</span>
              </Link>
            </li>
            <li className={`${path === 'settings' ? "mm-active" : ""}`}>
              <Link 
                className="ai-icon" 
                to="/dashboard/settings"
                onClick={() => this.props.onClick3()}>
                <i className="flaticon-381-settings-2"></i>
                <span className="nav-text">Settings</span>
              </Link>
            </li>
          </MM>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
