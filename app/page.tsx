'use client'

import { Card, CardBody } from '@nextui-org/card'
import { Tab, Tabs } from '@nextui-org/tabs'

import Chat from '@/components/Chat/Chat'
import { Chart } from '@/components/Chart/Chart'
import Players from '@/components/Players/Players'
import History from '@/components/History/History'

export default function Home() {
    return (
        <section className='grid grid-cols-12 gap-4 py-2'>
            <div className='col-span-12 lg:col-span-8'>
                <div className='max-h-40vh min-h-40vh flex w-full flex-col'>
                    <Chart />
                </div>
                <div className='flex w-full flex-col'>
                    <Tabs aria-label='Options'>
                        <Tab key='chat' title='Chat'>
                            <Card>
                                <CardBody>
                                    <Chat />
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key='history' title='History'>
                            <Card>
                                <CardBody>
                                    <History />
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-4'>
                <Card>
                    <CardBody className='max-h-85vh min-h-85vh scrollbar-thin scrollbar-thumb-orange scrollbar-track-gray-600 overflow-auto'>
                        <Players />
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}
