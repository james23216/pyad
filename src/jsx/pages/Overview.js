import React from "react";
import loadable from "@loadable/component";

import { Tab, Nav, Button } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OverviewAppointment = loadable(() => import("../components/charts/apexcharts/OverviewAppointment"));

const Overview = () => {

  return (
    <div>
      <div className="row">
        <div className="col-xl-7 col-xxl-6 col-lg-6">
          <Tab.Container defaultActiveKey="monthly">
            <div className="card dark-bg">
              <div className="card-header border-0 pb-0">
                <h3 className="fs-35 mb-0 text-white"><strong>Good Morning</strong>, Dr.Adam</h3>
              </div>
              <div className="card-header d-sm-flex d-block border-0 pb-0">
                <h3 className="fs-16 mb-3 mb-sm-0 text-white">
                  APPOINTEMENT STATISTIC
                </h3>
                <div className="card-action card-tabs mt-3 mt-sm-0 mt-3 mt-sm-0">
                  <Nav className="nav nav-tabs" role="tablist">
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        data-toggle="tab"
                        eventKey="monthly"
                        role="tab"
                      >
                        Monthly
                      </Nav.Link>
                    </Nav.Item>
                    <li className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        data-toggle="tab"
                        eventKey="weekly"
                        role="tab"
                      >
                        Weekly
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        data-toggle="tab"
                        eventKey="today"
                        role="tab"
                      >
                        Today
                      </Nav.Link>
                    </li>
                  </Nav>
                </div>
              </div>
              <Tab.Content>
                <div className="card-body">
                  <div className="chart" style={{ overflow: "hidden" }}>
                    <OverviewAppointment />
                  </div>
                </div>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
        <div className="col-xl-5 col-xxl-6 col-lg-6">
          <div className="card overview-left-info">
            <div className="card-body pa-10">
              <div className="d-flex align-items-center">
                <div className="w-50">
                  <h3 className="heighted-title fs-16 mb-0 text-black">
                    APPROVAL REQUEST
                  </h3>
                  <div className="overview-left-info-detail">
                    <h1 className="fs-55 text-dgray-200">
                      26
                    </h1>
                    <h1 className="fs-16 text-dgray-200">
                      Request Waiting To Approve
                    </h1>
                  </div>
                  <Button variant='primary btn-rounded more-ico-btn'>
                    <span className='btn-icon-right text-primary'>
                      <i className='fa fa-chevron-right' />
                    </span>
                    More
                  </Button>
                </div>
                <div className="w-50">
                  <h3 className="heighted-title fs-16 mb-0 text-black">
                  UPCOMING APPOINTEMENT
                  </h3>
                  <div className="overview-left-info-detail">
                    <h1 className="fs-55 text-dgray-200">
                      14
                    </h1>
                    <h1 className="fs-16 text-dgray-200">
                    </h1>
                  </div>
                  <Button variant='primary btn-rounded more-ico-btn'>
                    <span className='btn-icon-right text-primary'>
                      <i className='fa fa-chevron-right' />
                    </span>
                    More
                  </Button>
                </div>
              </div>
              <div className="overview-left-bottom-info">
                <h3 className="fs-16 mb-4 mt-2 text-black">
                  CLINIC INFORMATION
                </h3>
                <h1 className="fs-16 mb-4 text-dgray-200">
                  7898 Marsh Ln UNdefined Richardson, Wisconsin 35697<br/>
                  United States
                </h1>
                <h1 className="fs-16 mb-5 text-dgray-200">
                  (205)555-0100 + (262)555-0131
                </h1>
                <Button variant='primary mb-2 btn-rounded more-ico-btn'>
                  <span className='btn-icon-right text-primary'>
                    <i className='fa fa-chevron-right' />
                  </span>
                  More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-6 col-lg-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h3 className="fs-16 mb-0 text-black">
                TODAY'S APPOINTMENT(4)
              </h3>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h1 className="fs-80 mr-4 text-dgray-200">
                  4
                </h1>
                <div className="todays-at-list">
                  <div className="at-item d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h3 className="fs-14 text-dgray-200">Treatment</h3>
                      <h3 className="fs-16">Consultation</h3>
                    </div>
                    <h3 className="fs-14 text-dgray-200">09:00-10:00</h3>
                  </div>
                  <div className="at-item d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h3 className="fs-14 text-dgray-200">Treatment</h3>
                      <h3 className="fs-16">Consultation</h3>
                    </div>
                    <h3 className="fs-14 text-dgray-200">09:00-10:00</h3>
                  </div>
                  <div className="at-item d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="fs-14 text-dgray-200">Treatment</h3>
                      <h3 className="fs-16">Consultation</h3>
                    </div>
                    <h3 className="fs-14 text-dgray-200">09:00-10:00</h3>
                  </div>
                </div>
              </div>
              <Button variant='primary mt-3 btn-rounded more-ico-btn'>
                <span className='btn-icon-right text-primary'>
                  <i className='fa fa-chevron-right' />
                </span>
                More
              </Button>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-6 col-lg-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h3 className="fs-16 mb-0 text-black">
                TOP TREATMENT
              </h3>
            </div>
            <div className="card-body">
              <div className="overview-bottom-info-overflow">
                <h1 className="fs-18 mb-3">
                  1. Consultant
                </h1>
                <h1 className="fs-18 mb-3">
                  2. Scaling
                </h1>
                <h1 className="fs-18 mb-3">
                  3. Root Canal
                </h1>
                <h1 className="fs-18 mb-3">
                  4. Bleaching
                </h1>
                <h1 className="fs-18 mb-3">
                  4. Wisdom Teeth Removal
                </h1>
              </div>
              <Button variant='primary btn-rounded more-ico-btn mt-2'>
                <span className='btn-icon-right text-primary'>
                  <i className='fa fa-chevron-right' />
                </span>
                More
              </Button>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-6 col-lg-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
            </div>
            <div className="card-body">
              <h3 className="heighted-title fs-16 mb-0 text-black">
                TOTAL PATIENTS THIS MONTH
              </h3>
              <h1 className="fs-55 text-dgray-200 mt-4 mb-5">
                10
              </h1>
              <h3 className="heighted-title fs-16 mb-0 text-black">
                TOTAL PATIENTS ALL TIME
              </h3>
              <h1 className="fs-55 text-dgray-200 mt-4">
                103
              </h1>
              <Button variant='primary btn-rounded more-ico-btn mt-4'>
                <span className='btn-icon-right text-primary'>
                  <i className='fa fa-chevron-right' />
                </span>
                More
              </Button>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-6 col-lg-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
            </div>
            <div className="card-body">
              <h3 className="heighted-title fs-16 mb-0 text-black">
                JASPEL
              </h3>
              <h1 className="fs-55 mt-4 mb-2">
                $23,000
              </h1>
              <h3 className="heighted-title text-dgray-200 fs-18 mb-0 bordered">
                This Month So Far
              </h3>
              <h1 className="fs-55 mt-4 mb-2">
                $35,000
              </h1>
              <h3 className="heighted-title text-dgray-200 fs-18 mb-0">
                Previous Month
              </h3>
              <Button variant='primary btn-rounded more-ico-btn mt-4'>
                <span className='btn-icon-right text-primary'>
                  <i className='fa fa-chevron-right' />
                </span>
                More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
