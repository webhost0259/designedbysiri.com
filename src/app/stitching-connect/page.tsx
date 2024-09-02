'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useState } from 'react';
import Blouse from './Blouse';
import Lehanga from './Lehanga';
import Dress from './Dress';
import Men from './Men';

const StitchingPage = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col text-black items-center min-h-screen mt-8 mb-24">
            <h1 className="text-xl font-medium mb-4">Measurements</h1>
            <p className="text-lb font-thin">Connect us with your choice. You are in safe hands.</p>
            <TabGroup className="mt-8">
                <TabList className="space-x-2 tablet:space-x-8">
                    <Tab 
                        key={0}
                        onClick={() => setActiveTab(0)}
                        className={activeTab === 0 ? 'border-none border-b-2 border-green-500 px-2 tablet:px-8 py-2 bg-green-600 text-white rounded-md' : 'px-2 tablet:px-8 py-2'}
                    >
                        Blouse
                    </Tab>
                    <Tab
                        key={1}
                        onClick={() => setActiveTab(1)}
                        className={activeTab === 1 ? 'border-none border-b-2 border-green-500 px-2 tablet:px-8 py-2 bg-green-600 text-white rounded-md' : 'px-2 tablet:px-8 py-2'}
                    >
                        Lehanga
                    </Tab>
                    <Tab
                        key={2}
                        onClick={() => setActiveTab(2)}
                        className={activeTab === 2 ? 'border-none border-b-2 border-green-500 px-2 tablet:px-8 py-2 bg-green-600 text-white rounded-md' : 'px-2 tablet:px-8 py-2'}
                    >
                        Dress
                    </Tab>
                    <Tab
                        key={3}
                        onClick={() => setActiveTab(3)}
                        className={activeTab === 3 ? 'border-none border-b-2 border-green-500 px-2 tablet:px-8 py-2 bg-green-600 text-white rounded-md' : 'px-2 tablet:px-8 py-2'}
                    >
                        Men
                    </Tab>
                </TabList>

                
                
                {/* <TabPanels className="mt-8">
                    <TabPanel>
                        <Blouse />
                    </TabPanel>
                    <TabPanel>Content 2</TabPanel>
                    <TabPanel>Content 3</TabPanel>
                </TabPanels> */}
            </TabGroup>
            <div className='mt-8 p-2'>
                {
                    activeTab === 0 && <Blouse />
                }
                {
                    activeTab === 1 && <Lehanga />
                }
                {
                    activeTab === 2 && <Dress />
                }
                {
                    activeTab === 3 && <Men />
                }
            </div>
        </div>
    );
}

export default StitchingPage;