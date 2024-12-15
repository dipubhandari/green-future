import React from 'react'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import './IdeatorHome.css'
import { RxDashboard } from 'react-icons/rx'
import { MdOutlineWork } from 'react-icons/md'

const IdeatorHome = (props) => {



    const [component, setComponent] = useState('job')

    const handleJobComponent = (e) => {
        console.log(e)
        setComponent(e)
    }

    return (
        <div className='employercontainer'>
            <section className="dashboard">


                <section className="left_dashboard">
                    <button><RxDashboard />Dashboard</button>
                    <input onClick={() => setComponent('yourIdeas')} type="button" value='Your Ideas' />
                    {/* <input onClick={() => setComponent('chatlist')} type="button" value='Chats' />
                    <input onClick={() => setComponent('aboutuser')} type="button" value='Your Information' />
                    <input onClick={() => setComponent('changepassword')} type="button" value='Change Password' /> */}
                </section>
                <section className="right_dashboard">
                    {
                        // (component == 'job') && <JobApplication handleJobComponent={handleJobComponent} />
                        }
                  

                </section>

            </section>

            {/* </section> */}
        </div>
    )
}

export default IdeatorHome
