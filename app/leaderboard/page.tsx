'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@nextui-org/table'
import { SiBitcoinsv } from 'react-icons/si'

import { title } from '@/components/primitives'

export default function LeaderboardPage() {
    return (
        <>
            <h1 className={title()}>Leaderboard</h1>
            <Table aria-label='Player statistics table' selectionMode='single'>
                <TableHeader>
                    <TableColumn>Rank</TableColumn>
                    <TableColumn>Player</TableColumn>
                    <TableColumn>Wagered</TableColumn>
                    <TableColumn>Profit</TableColumn>
                    <TableColumn>Profit (ATH)</TableColumn>
                    <TableColumn>Profit (ATL)</TableColumn>
                    <TableColumn>Bets</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key='1'>
                        <TableCell>1</TableCell>
                        <TableCell>KLITZ</TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <SiBitcoinsv
                                    className='pr-1 text-yellow-500'
                                    size={24}
                                />
                                5,505.70470200
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <SiBitcoinsv
                                    className='pr-1 text-yellow-500'
                                    size={24}
                                />
                                468.86788372
                            </div>
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            516.10904800
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            21.55203631
                        </TableCell>
                        <TableCell>67,534</TableCell>
                    </TableRow>
                    <TableRow key='2'>
                        <TableCell>2</TableCell>
                        <TableCell>gohard</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            2,741.08269200
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            279.27952514
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            283.03197924
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            26.63266979
                        </TableCell>
                        <TableCell>12,351</TableCell>
                    </TableRow>
                    <TableRow key='3'>
                        <TableCell>3</TableCell>
                        <TableCell>LosDeXibalbaMC</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            6,076.45279200
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            251.37117922
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            288.04291351
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            3.08803022
                        </TableCell>
                        <TableCell>57,822</TableCell>
                    </TableRow>
                    <TableRow key='4'>
                        <TableCell>4</TableCell>
                        <TableCell>Predictable</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            5,489.10235500
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            234.57655172
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            393.72575672
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            107.44096428
                        </TableCell>
                        <TableCell>709</TableCell>
                    </TableRow>
                    <TableRow key='5'>
                        <TableCell>5</TableCell>
                        <TableCell>dudaxmaimons</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            2,987.09733100
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            232.44655309
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            239.31636140
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            22.21466075
                        </TableCell>
                        <TableCell>26,028</TableCell>
                    </TableRow>
                    <TableRow key='6'>
                        <TableCell>6</TableCell>
                        <TableCell>kalwjdawlkjjkl</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            6,291.74888400
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            220.50093536
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            246.26334036
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            260.07509760
                        </TableCell>
                        <TableCell>290</TableCell>
                    </TableRow>
                    <TableRow key='7'>
                        <TableCell>7</TableCell>
                        <TableCell>europol</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            1,232.47033700
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            213.02703095
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            213.82928095
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            0.00348607
                        </TableCell>
                        <TableCell>2,865</TableCell>
                    </TableRow>
                    <TableRow key='8'>
                        <TableCell>8</TableCell>
                        <TableCell>GoLeafsGo</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            496.80312700
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            199.27777300
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            234.20933000
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            0.00000000
                        </TableCell>
                        <TableCell>58</TableCell>
                    </TableRow>
                    <TableRow key='9'>
                        <TableCell>9</TableCell>
                        <TableCell>FREE JBAY</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            2,650.49658200
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            186.15028601
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            270.26428601
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            58.45800059
                        </TableCell>
                        <TableCell>232</TableCell>
                    </TableRow>
                    <TableRow key='10'>
                        <TableCell>10</TableCell>
                        <TableCell>FREE JBAY3</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            2,062.10992300
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            179.74299017
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            249.91899017
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            31.42800000
                        </TableCell>
                        <TableCell>167</TableCell>
                    </TableRow>
                    <TableRow key='11'>
                        <TableCell>11</TableCell>
                        <TableCell>AAAB</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            2,808.51540300
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            176.76926884
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            176.76926884
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            27.13573116
                        </TableCell>
                        <TableCell>11,139</TableCell>
                    </TableRow>
                    <TableRow key='12'>
                        <TableCell>12</TableCell>
                        <TableCell>easternunion</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            3,918.47434100
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            159.27251785
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            230.41656785
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            0.63000000
                        </TableCell>
                        <TableCell>1,463</TableCell>
                    </TableRow>
                    <TableRow key='13'>
                        <TableCell>13</TableCell>
                        <TableCell>WannaBeWhaleMan</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            239.31160000
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            149.32931000
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            162.01531000
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            1.55000000
                        </TableCell>
                        <TableCell>27</TableCell>
                    </TableRow>
                    <TableRow key='14'>
                        <TableCell>14</TableCell>
                        <TableCell>needmyathback</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            1,292.23120400
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            143.90698252
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            166.67293652
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            111.09329688
                        </TableCell>
                        <TableCell>142</TableCell>
                    </TableRow>
                    <TableRow key='15'>
                        <TableCell>15</TableCell>
                        <TableCell>FREE JBAY2</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            2,757.22991600
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            140.43938884
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            196.84738884
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            60.26100000
                        </TableCell>
                        <TableCell>218</TableCell>
                    </TableRow>
                    <TableRow key='16'>
                        <TableCell>16</TableCell>
                        <TableCell>perrrrs</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            1,614.20002800
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            139.02600112
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            139.02600112
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            30.43000000
                        </TableCell>
                        <TableCell>260</TableCell>
                    </TableRow>
                    <TableRow key='17'>
                        <TableCell>17</TableCell>
                        <TableCell>Gainscityboys</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            1,566.87912800
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            133.51740475
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            213.05695241
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            2.06968337
                        </TableCell>
                        <TableCell>2,016</TableCell>
                    </TableRow>
                    <TableRow key='18'>
                        <TableCell>18</TableCell>
                        <TableCell>rawrrrrrxd</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            852.78182800
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            125.15989458
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            125.15989458
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            36.00000000
                        </TableCell>
                        <TableCell>115</TableCell>
                    </TableRow>
                    <TableRow key='19'>
                        <TableCell>19</TableCell>
                        <TableCell>25BTCPROFITBYE</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            1,299.97830000
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            125.00000000
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            125.00000000
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            41.23370000
                        </TableCell>
                        <TableCell>277</TableCell>
                    </TableRow>
                    <TableRow key='20'>
                        <TableCell>20</TableCell>
                        <TableCell>positris</TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            2,180.46347400
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            120.80630252
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            121.28630252
                        </TableCell>
                        <TableCell>
                            <SiBitcoinsv
                                className='pr-1 text-yellow-500'
                                size={24}
                            />
                            55.44936969
                        </TableCell>
                        <TableCell>2,868</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}
