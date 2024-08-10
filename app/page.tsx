'use client'

import { Card, CardBody } from '@nextui-org/card'
import { Tab, Tabs } from '@nextui-org/tabs'

import Chat from '@/components/Chat/Chat'
import { Chart } from '@/components/Chart/Chart'
import Players from '@/components/Players/Players'
import History from '@/components/History/History'

export default function Home() {
    return (
        <section className='grid grid-cols-12 gap-4 py-8 md:py-10'>
            <div className='col-span-12 lg:col-span-8'>
                <div className='flex w-full flex-col'>
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
                <Players />
            </div>
        </section>
    )
}
