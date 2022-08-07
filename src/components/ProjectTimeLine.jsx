import { Button, Timeline } from "flowbite-react";
import EditMenu from "../partials/EditMenu";

import React from 'react';
import { Link } from 'react-router-dom';

// Import utilities
import { tailwindConfig, hexToRGB } from '../utils/Utils';
import { Tabs } from 'flowbite-react';
import { CalendarIcon, CheckIcon } from '@heroicons/react/solid'

const PingVerified = (ping) => {
    return (
        <CheckIcon className={ping ? "animate-pulse": ""} />
    );
}

const ProjectTimeLine = () => {
    return (
        <React.Fragment>
            <Timeline horizontal={true}>
                <Timeline.Item>
                    <Timeline.Point icon={CheckIcon}/>
                    <Timeline.Content>
                        <Timeline.Title>
                            Test Data In(TDI)
                        </Timeline.Title>
                        <Timeline.Time>
                            Released on December 2, 2021
                        </Timeline.Time>
                        <Timeline.Body>
                            Get started with dozens of web components and interactive elements.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={CalendarIcon}/>
                        <Timeline.Content>
                        <Timeline.Title>
                            Final Data In(FDI)
                        </Timeline.Title>
                        <Timeline.Time>
                            Released on December 23, 2021
                        </Timeline.Time>
                        <Timeline.Body>
                            Get started with dozens of web components and interactive elements.
                        </Timeline.Body>
                        </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={CalendarIcon}/>
                        <Timeline.Content>
                        <Timeline.Title>
                            Taped Out(TO Plan)
                        </Timeline.Title>
                        <Timeline.Time>
                            Released on January 5, 2022
                        </Timeline.Time>
                        <Timeline.Body>
                            Get started with dozens of web components and interactive elements.
                        </Timeline.Body>
                        </Timeline.Content>
                </Timeline.Item>
            </Timeline>
            <div className="
                flex
                justify-end"
            >
                <Button className="
                    right-0 
                    justify-self-end 
                    align"
                >
                    Modify
                </Button>
            </div>
        </React.Fragment>
    );
}
export default ProjectTimeLine;