'use client'

import { Card, CardBody } from '@nextui-org/card'
import { Tab, Tabs } from '@nextui-org/tabs'
import { FaConnectdevelop } from 'react-icons/fa'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'

import Chat from '@/components/Chat/Chat'
import { Chart } from '@/components/Chart/Chart'
import Players from '@/components/Players/Players'
import History from '@/components/History/History'
import HistoryCompact from '@/components/HistoryCompact/HistoryCompact'

export default function Home() {
    return (
        <section className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 lg:col-span-8'>
                <div className='grid grid-cols-12 gap-4 chart-section-h'>
                    <Card className='col-span-12 lg:col-span-6 flex-col'>
                        <div className='flex justify-end px-2 py-1'>
                            Max profit: ₿7.77
                        </div>
                        <Chart />
                        <HistoryCompact />
                    </Card>
                    <Card className='hidden col-span-12 lg:col-span-6 lg:flex'>
                        <CardBody className='flex justify-center'>
                            <Button
                                isExternal
                                as={Link}
                                className='text-sm font-normal text-default-600 bg-default-100'
                                startContent={
                                    <FaConnectdevelop
                                        className='text-orange'
                                        size={24}
                                    />
                                }
                                variant='flat'
                            >
                                Connect Wallet to start playing
                            </Button>
                        </CardBody>
                    </Card>
                </div>
                <div className='block md:hidden my-4'>
                    <Card className='col-span-12'>
                        <CardBody className='flex justify-center'>
                            <Button
                                isExternal
                                as={Link}
                                className='text-sm font-normal text-default-600 bg-default-100'
                                startContent={
                                    <FaConnectdevelop
                                        className='text-orange'
                                        size={24}
                                    />
                                }
                                variant='flat'
                            >
                                Connect Wallet to start playing
                            </Button>
                        </CardBody>
                    </Card>
                </div>
                <div className='chart-section-h flex w-full flex-col pt-4'>
                    <Tabs aria-label='Options'>
                        <Tab key='chat' title='Chat'>
                            <Card className='h-full'>
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
                    <CardBody className='players-h flex-col justify-between'>
                        <Players />
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}
