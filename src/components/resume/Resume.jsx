import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

import EducationExperience from "./EducationExperience";

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Education</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {EducationExperience.map((experience, index) => {
                            const { id, company } = experience;
                            return (
                                <Tab className="tab" key={`company-${id}`}>
                                    <Button>{company}</Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {EducationExperience.map((experience) => {
                        const { id, company, yearsActive, title, information,certify } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                                <h2 className="tab__panel-title">
                                    {title} @ {company}
                                </h2>
                                <p className="tab__panel-subtitle">{yearsActive}</p>
                                <ul className="tab__panel-list">
                                    {information.map((info, index) => {
                                        return <li key={`info-${index}`}>{info}</li>;
                                    })}

                                    <a href={certify} target="_blank" className="btn" id="btn-certifications"> Certification</a>
                                </ul>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Resume;
