/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";

import LogoutLink from './Logout';

import profile from "../../../images/profile/12.png";

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
        <MM>
          <li className={`${path === 'help' ? "mm-active" : ""}`}>
            <Link 
              className="ai-icon" 
              to="/dashboard/help"
              onClick={() => this.props.onClick3()}>
              <i className="flaticon-381-help"></i>
              <span className="nav-text">Help</span>
            </Link>
          </li>
          <li
            className="dropdown header-profile"
            onClick={() => this.props.onProfile()}
          >
            <Link
              className="nav-link has-arrow"
              to="#"
              role="button"
              data-toggle="dropdown"
            >
              <img src={profile} width={20} alt="" />
              <div className="header-info">
                <span>
                  <strong>Dr. Roberto</strong><br/>
                  Dentist
                </span>
              </div>
            </Link>

            <div
              className={`dropdown-menu dropdown-menu-right ${this.props.toggle === "profile" ? "show" : ""
                }`}
            >
              <Link
                to="/app-profile"
                className="dropdown-item ai-icon"
              >
                <svg
                  id="icon-user1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
                <span className="ml-2">Profile </span>
              </Link>
              <Link
                to="./email-inbox"
                className="dropdown-item ai-icon"
              >
                <svg
                  id="icon-inbox"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-success"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="ml-2">Inbox </span>
              </Link>
              <LogoutLink />
            </div>
          </li>
        </MM>
      </div>
    );
  }
}

export default SideBar;
