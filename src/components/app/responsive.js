import { Card, CardMedia } from 'material-ui/Card';

import RaisedButton from 'material-ui/RaisedButton';
import * as moment from 'moment'
import { browserHistory } from 'react-router'
import { Debugger } from 'ts-debug';
import AppBarComponent from '../AppBar/AppBar';
import Footer from '../footer/footer'
const Config = { isProd: false }; // example config in your application

const debug = new Debugger(console, !Config.isProd, '[DEBUG] ');
import './employeesView.css';

import * as React from 'react';



type Props = Partial<{
    EmployeeArray: any,
    RoleProp: any
}>

interface ISTATE {
    roll: undefined
}
let CardStyleCounter: any = 0;
class EmployeesViewComponent extends React.Component<Props, ISTATE> {
    constructor(props: any) {
        super(props)
        this.state = {
            roll: undefined
        }
    }
    public ChangeRouteToDashboard = () => {
        if (window.location.pathname !== 'dashboard') {
            const obj = this.props.RoleProp
            delete obj.employeeName
            browserHistory.push({
                pathname: '/dashboard',
                state: obj
            })
        }
    }
    public ChangeRouteToSettings = () => {
        if (window.location.pathname !== 'settings') {
            const obj = this.props.RoleProp
            delete obj.employeeName
            browserHistory.push({
                pathname: '/settings',
                state: obj
            })
        }
    }



    public ChangeRouteToAttendance = (value: any) => {
        const CurrentMonthFormat = moment().format("YYYY-MM-DD")
        const AttendanceRouteObject = this.props.RoleProp
        AttendanceRouteObject.CurrentMonthFormat = CurrentMonthFormat
        const userid = value._id;
        browserHistory.push({
            pathname: `/employees/${userid}/attendance/${CurrentMonthFormat}`,
            state: AttendanceRouteObject
        })
    }

    public ChangeRouteToPayslip = (value: any) => {
        const userid = value._id;
        const obj = this.props.RoleProp;
        obj.employeeName = value.name
        browserHistory.push({
            pathname: `/employees/${userid}/payslip`,
            state: obj
        })

    }

    public ChangeRouteToAddNewEmployee = () => {
        browserHistory.push({
            pathname: '/AddEmployee',
            state: this.props.RoleProp
        })
    }

    public ChangeRouteToSingleEmployee = (value: any) => {
        debug.log(value._id, 'single test')
        const obj = this.props.RoleProp;
        browserHistory.push({
            pathname: `employees/${value._id}`,
            state: obj
        })

    }

    public render() {
        CardStyleCounter = 0;
        debug.log(this.props.RoleProp, 'role test')

        return (
            <div>
                <AppBarComponent RoleProp={this.props.RoleProp} HideNavigationItemEmployees='toggler' />
                <div className={`DashboardMainBody ${!this.props.RoleProp ? ('MainBodyPaddingTopNone') : null}`}>
                    <div className='sidebar'>

                        {
                            this.props.RoleProp ?
                                this.props.RoleProp.role === 'company' ?
                                    (
                                        <ul className='sidebarList'>

                                            <li className='sidebarListFirstTwoLi' onClick={this.ChangeRouteToDashboard}><i className="material-icons dashboardIcon">dashboard</i>Dashboard</li>
                                            <li className='sidebarListFirstTwoLi employeesactivecolor' ><i className="material-icons dashboardIcon">dashboard</i>Employees</li>
                                            <li className='sidebarListLastLi' onClick={this.ChangeRouteToSettings}><i className="material-icons dashboardIcon">dashboard</i>Settings</li>

                                        </ul>
                                    )
                                    :

                                    this.props.RoleProp.role === 'employee' ?
                                        (
                                            <ul className='sidebarList'>

                                                <li className='sidebarListFirstTwoLi' onClick={this.ChangeRouteToDashboard}><i className="material-icons dashboardIcon">dashboard</i>Dashboard</li>
                                                <li className='sidebarListLastLi' ><i className="material-icons dashboardIcon">dashboard</i>Settings</li>

                                            </ul>

                                        ) : null : null

                        }
                    </div>
                    <div className='sideMainBody employessViewSideMainBodyPaddingBottom'>

                        <div className='sideMainBodyonlyChild'>
                            <div className='sideMainBodyChild1 employeesviewMobileView'>
                                <h1 className='ViewEmployeesHeading'>EMPLOYEES</h1>



                                <RaisedButton label="ADD NEW" backgroundColor='rgb(62,176,151)' className='btnFontColor ViewSalaryButton' onClick={this.ChangeRouteToAddNewEmployee} />

                            </div>
                            <div className='sideMainBodyChild2'>
                                {
                                    this.props.EmployeeArray === undefined ? (
                                        <div className='sideMainBodyChild2OnlyChild'>
                                            <div className='SalaryViewChildDiv1'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>
                                                            <div className="background-masker content-third-line dot">.</div>




                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>
                                            <div className='SalaryViewChildDiv2'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>


                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>
                                            <div className='SalaryViewChildDiv3'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>


                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>
                                            <div className='SalaryViewChildDiv4'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>


                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>


                                        </div>
                                    ) : null
                                }


                                {
                                    this.props.EmployeeArray === undefined ? (
                                        <div className='sideMainBodyChild2OnlyChild'>
                                            <div className='SalaryViewChildDiv1'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>
                                                            <div className="background-masker content-third-line dot">.</div>




                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>
                                            <div className='SalaryViewChildDiv2'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>


                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>
                                            <div className='SalaryViewChildDiv3'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>


                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>
                                            <div className='SalaryViewChildDiv4'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>


                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>


                                        </div>
                                    ) : null
                                }


                                {
                                    this.props.EmployeeArray === undefined ? (
                                        <div className='sideMainBodyChild2OnlyChild'>
                                            <div className='SalaryViewChildDiv1'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>


                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>
                                            <div className='SalaryViewChildDiv2'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>


                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>
                                            <div className='SalaryViewChildDiv3'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>


                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>
                                            <div className='SalaryViewChildDiv4'>
                                                <Card>


                                                    <div className="timeline-item">
                                                        <div className="animated-background facebook">

                                                            <div className="background-masker content-top dot">.</div>

                                                            <div className="background-masker content-second-line dot">.</div>

                                                            <div className="background-masker content-third-line dot">.</div>


                                                        </div>





                                                    </div>
                                                </Card>
                                            </div>


                                        </div>
                                    ) : null
                                }
                                <div className='sideMainBodyChild2OnlyChild'>
                                    {
                                        this.props.EmployeeArray ?
                                            this.props.EmployeeArray.data.map((value: any, index: any) => {
                                                CardStyleCounter = CardStyleCounter + 1;
                                                if (CardStyleCounter > 4) {
                                                    CardStyleCounter = 1;
                                                }

                                                return (
                                                    <div className={`SalaryViewChildDiv${CardStyleCounter} dynamicEmployeeClass`} key={index}>
                                                        <Card className='viewEmployeesCard'>
                                                            <CardMedia
                                                            >
                                                                <img src={require('../../images/avatar.jpg')} className='avatartImg' onClick={this.ChangeRouteToSingleEmployee.bind(this, value)} />
                                                                <h1 className='CardHead mapCardHEd'>{value.name}</h1>
                                                                <p className='CardPara'>{value.group}</p>
                                                            </CardMedia>
                                                            <div className='CardButtonMainDiv'>
                                                                <div className='CardButtonMainDivChild1'>

                                                                    <RaisedButton label="Attendance" backgroundColor='rgb(62,176,151)' fullWidth={true} className='btnFontColor' style={{ color: 'white', display: 'inline-block' }} onClick={this.ChangeRouteToAttendance.bind(this, value)} />
                                                                </div>
                                                                <div className='CardButtonMainDivChild2'>
                                                                    <RaisedButton label="Payslip" backgroundColor='rgb(62,176,151)' fullWidth={true} className='btnFontColor' style={{ color: 'white', display: 'inline-block' }} onClick={this.ChangeRouteToPayslip.bind(this, value)} />
                                                                </div>
                                                            </div>

                                                        </Card>
                                                    </div>
                                                )
                                            })
                                            : null
                                    }


                                </div>
                            </div>





                        </div>
                    </div>
                </div>
                <Footer FooterClass='ResgisterFooter' />
            </div>
        );
    }
}

export default EmployeesViewComponent;
