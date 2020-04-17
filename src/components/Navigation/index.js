import React from 'react';

import NavList from './NavList';
import NavItem from './NavItem';
import * as Logo from './Logo';
import NavigationWrapper from './NavigationWrapper';
import IconDashboard from '@material-ui/icons/DashboardTwoTone';
import IconCalendar from '@material-ui/icons/CalendarTodayTwoTone';
import IconTasks from '@material-ui/icons/ListAltTwoTone';
import IconTimetable from '@material-ui/icons/AccessTimeTwoTone';
import IconSchool from '@material-ui/icons/SchoolTwoTone';
import IconAccount from '@material-ui/icons/AccountCircleTwoTone';
import IconSettings from '@material-ui/icons/SettingsTwoTone';
import IconMenu from '@material-ui/icons/MenuTwoTone';

const navigation = () => (
  <NavigationWrapper>
    <NavList>
      <NavList>
        {/*<Logo.wrapper>
          <Logo.img link="https://via.placeholder.com/150" alt="Logo" />
        </Logo.wrapper>*/}
      </NavList>
      <NavList menu>
        <NavItem to="#"><IconMenu /></NavItem>
        <NavItem to="/"><IconDashboard /></NavItem>
        <NavItem to="/calendar"><IconCalendar /></NavItem>
        <NavItem to="/assignments"><IconTasks /></NavItem>
        <NavItem to="/timetable"><IconTimetable /></NavItem>
        <NavItem to="/school"><IconSchool /></NavItem>
      </NavList>
    </NavList>
    <NavList>
      <NavItem to="/settings"><IconSettings /></NavItem>
      <NavItem to="/account"><IconAccount /></NavItem>
    </NavList>
  </NavigationWrapper>
);

export default navigation;
