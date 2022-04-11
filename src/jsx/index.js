import React, { useState } from 'react'
/// React router dom
import { Switch, Route } from 'react-router-dom'
/// Css
import '../css/index.css';
import '../css/chart.css';
import '../css/step.css';

/// Layout
import Nav from './layouts/nav';
import Footer from './layouts/Footer';

/// Dashboard
import Overview from './pages/Overview';
import PatientList from "./pages/PatientList";
import Calendar from './pages/Calendar/Calendar';
import Messages from './pages/Messages';
import PaymentInformation from './pages/PaymentInformation';
import Settings from './pages/Settings';

//Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';


const Markup = () => {
  let path = window.location.pathname;
  path = path.split('/');
  path = path[path.length - 1];
  let pagePath = path.split('-').includes('page');
  const [activeEvent, setActiveEvent] = useState(!path);

  const routes = [
    { url: "", component: Overview },
    { url: "overview", component: Overview },
    { url: "patient-list", component: PatientList },
    { url: 'calendar', component: Calendar },
    { url: 'messages', component: Messages },
    { url: 'payment-information', component: PaymentInformation },
    { url: 'settings', component: Settings}
  ];

  return (
    <>
      <div
        id={`${!pagePath ? 'main-wrapper' : ''}`}
        className={`${!pagePath ? 'show' : 'mh100vh'}`}
      >
        {!pagePath && (
          <Nav
            onClick={() => setActiveEvent(!activeEvent)}
            activeEvent={activeEvent}
            onClick2={() => setActiveEvent(false)}
            onClick3={() => setActiveEvent(true)}
          />
        )}
        <div
          className={` ${!path && activeEvent ? 'rightside-event' : ''} ${!pagePath ? 'content-body' : ''
            }`}
        >
          <div
            className={`${!pagePath ? 'container-fluid' : ''}`}
            style={{ minHeight: window.screen.height - 60 }}
          >
            <Switch>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/dashboard/${data.url}`}
                  component={data.component}
                />
              ))}
            </Switch>
          </div>
        </div>
        {!pagePath && <Footer />}
      </div>
      <ScrollToTop />
    </>
  )
}

export default Markup
