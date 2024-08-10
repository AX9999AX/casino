'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@nextui-org/table'

import { title } from '@/components/primitives'

export default function PricingPage() {
    return (
        <div>
            <h1 className={title()}>Leaderboard</h1>
            <Table aria-label='Player statistics table'>
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
                        <TableCell>₿ 5,505.70470200</TableCell>
                        <TableCell>₿ 468.86788372</TableCell>
                        <TableCell>₿ 516.10904800</TableCell>
                        <TableCell>₿ -21.55203631</TableCell>
                        <TableCell>67,534</TableCell>
                    </TableRow>
                    <TableRow key='2'>
                        <TableCell>2</TableCell>
                        <TableCell>gohard</TableCell>
                        <TableCell>₿ 2,741.08269200</TableCell>
                        <TableCell>₿ 279.27952514</TableCell>
                        <TableCell>₿ 283.03197924</TableCell>
                        <TableCell>₿ -26.63266979</TableCell>
                        <TableCell>12,351</TableCell>
                    </TableRow>
                    <TableRow key='3'>
                        <TableCell>3</TableCell>
                        <TableCell>LosDeXibalbaMC</TableCell>
                        <TableCell>₿ 6,076.45279200</TableCell>
                        <TableCell>₿ 251.37117922</TableCell>
                        <TableCell>₿ 288.04291351</TableCell>
                        <TableCell>₿ -3.08803022</TableCell>
                        <TableCell>57,822</TableCell>
                    </TableRow>
                    <TableRow key='4'>
                        <TableCell>4</TableCell>
                        <TableCell>Predictable</TableCell>
                        <TableCell>₿ 5,489.10235500</TableCell>
                        <TableCell>₿ 234.57655172</TableCell>
                        <TableCell>₿ 393.72575672</TableCell>
                        <TableCell>₿ -107.44096428</TableCell>
                        <TableCell>709</TableCell>
                    </TableRow>
                    <TableRow key='5'>
                        <TableCell>5</TableCell>
                        <TableCell>dudaxmaimons</TableCell>
                        <TableCell>₿ 2,987.09733100</TableCell>
                        <TableCell>₿ 232.44655309</TableCell>
                        <TableCell>₿ 239.31636140</TableCell>
                        <TableCell>₿ -22.21466075</TableCell>
                        <TableCell>26,028</TableCell>
                    </TableRow>
                    <TableRow key='6'>
                        <TableCell>6</TableCell>
                        <TableCell>kalwjdawlkjjkl</TableCell>
                        <TableCell>₿ 6,291.74888400</TableCell>
                        <TableCell>₿ 220.50093536</TableCell>
                        <TableCell>₿ 246.26334036</TableCell>
                        <TableCell>₿ -260.07509760</TableCell>
                        <TableCell>290</TableCell>
                    </TableRow>
                    <TableRow key='7'>
                        <TableCell>7</TableCell>
                        <TableCell>europol</TableCell>
                        <TableCell>₿ 1,232.47033700</TableCell>
                        <TableCell>₿ 213.02703095</TableCell>
                        <TableCell>₿ 213.82928095</TableCell>
                        <TableCell>₿ -0.00348607</TableCell>
                        <TableCell>2,865</TableCell>
                    </TableRow>
                    <TableRow key='8'>
                        <TableCell>8</TableCell>
                        <TableCell>GoLeafsGo</TableCell>
                        <TableCell>₿ 496.80312700</TableCell>
                        <TableCell>₿ 199.27777300</TableCell>
                        <TableCell>₿ 234.20933000</TableCell>
                        <TableCell>₿ 0.00000000</TableCell>
                        <TableCell>58</TableCell>
                    </TableRow>
                    <TableRow key='9'>
                        <TableCell>9</TableCell>
                        <TableCell>FREE-JBAY</TableCell>
                        <TableCell>₿ 2,650.49658200</TableCell>
                        <TableCell>₿ 186.15028601</TableCell>
                        <TableCell>₿ 270.26428601</TableCell>
                        <TableCell>₿ -58.45800059</TableCell>
                        <TableCell>232</TableCell>
                    </TableRow>
                    <TableRow key='10'>
                        <TableCell>10</TableCell>
                        <TableCell>FREE-JBAY3</TableCell>
                        <TableCell>₿ 2,062.10992300</TableCell>
                        <TableCell>₿ 179.74299017</TableCell>
                        <TableCell>₿ 249.91899017</TableCell>
                        <TableCell>₿ -31.42800000</TableCell>
                        <TableCell>167</TableCell>
                    </TableRow>
                    <TableRow key='11'>
                        <TableCell>11</TableCell>
                        <TableCell>AAAB</TableCell>
                        <TableCell>₿ 2,808.51540300</TableCell>
                        <TableCell>₿ 176.76926884</TableCell>
                        <TableCell>₿ 176.76926884</TableCell>
                        <TableCell>₿ -27.13573116</TableCell>
                        <TableCell>11,139</TableCell>
                    </TableRow>
                    <TableRow key='12'>
                        <TableCell>12</TableCell>
                        <TableCell>easternunion</TableCell>
                        <TableCell>₿ 3,918.47434100</TableCell>
                        <TableCell>₿ 159.27251785</TableCell>
                        <TableCell>₿ 230.41656785</TableCell>
                        <TableCell>₿ -0.63000000</TableCell>
                        <TableCell>1,463</TableCell>
                    </TableRow>
                    <TableRow key='13'>
                        <TableCell>13</TableCell>
                        <TableCell>WannaBeWhaleMan</TableCell>
                        <TableCell>₿ 239.31160000</TableCell>
                        <TableCell>₿ 149.32931000</TableCell>
                        <TableCell>₿ 162.01531000</TableCell>
                        <TableCell>₿ -1.55000000</TableCell>
                        <TableCell>27</TableCell>
                    </TableRow>
                    <TableRow key='14'>
                        <TableCell>14</TableCell>
                        <TableCell>needmyathback</TableCell>
                        <TableCell>₿ 1,292.23120400</TableCell>
                        <TableCell>₿ 143.90698252</TableCell>
                        <TableCell>₿ 166.67293652</TableCell>
                        <TableCell>₿ -111.09329688</TableCell>
                        <TableCell>142</TableCell>
                    </TableRow>
                    <TableRow key='15'>
                        <TableCell>15</TableCell>
                        <TableCell>FREE-JBAY2</TableCell>
                        <TableCell>₿ 2,757.22991600</TableCell>
                        <TableCell>₿ 140.43938884</TableCell>
                        <TableCell>₿ 196.84738884</TableCell>
                        <TableCell>₿ -60.26100000</TableCell>
                        <TableCell>218</TableCell>
                    </TableRow>
                    <TableRow key='16'>
                        <TableCell>16</TableCell>
                        <TableCell>perrrrs</TableCell>
                        <TableCell>₿ 1,614.20002800</TableCell>
                        <TableCell>₿ 139.02600112</TableCell>
                        <TableCell>₿ 139.02600112</TableCell>
                        <TableCell>₿ -30.43000000</TableCell>
                        <TableCell>260</TableCell>
                    </TableRow>
                    <TableRow key='17'>
                        <TableCell>17</TableCell>
                        <TableCell>Gainscityboys</TableCell>
                        <TableCell>₿ 1,566.87912800</TableCell>
                        <TableCell>₿ 133.51740475</TableCell>
                        <TableCell>₿ 213.05695241</TableCell>
                        <TableCell>₿ -2.06968337</TableCell>
                        <TableCell>2,016</TableCell>
                    </TableRow>
                    <TableRow key='18'>
                        <TableCell>18</TableCell>
                        <TableCell>rawrrrrrxd</TableCell>
                        <TableCell>₿ 852.78182800</TableCell>
                        <TableCell>₿ 125.15989458</TableCell>
                        <TableCell>₿ 125.15989458</TableCell>
                        <TableCell>₿ -36.00000000</TableCell>
                        <TableCell>115</TableCell>
                    </TableRow>
                    <TableRow key='19'>
                        <TableCell>19</TableCell>
                        <TableCell>25BTCPROFITBYE</TableCell>
                        <TableCell>₿ 1,299.97830000</TableCell>
                        <TableCell>₿ 125.00000000</TableCell>
                        <TableCell>₿ 125.00000000</TableCell>
                        <TableCell>₿ -41.23370000</TableCell>
                        <TableCell>277</TableCell>
                    </TableRow>
                    <TableRow key='20'>
                        <TableCell>20</TableCell>
                        <TableCell>positris</TableCell>
                        <TableCell>₿ 2,180.46347400</TableCell>
                        <TableCell>₿ 120.80630252</TableCell>
                        <TableCell>₿ 121.28630252</TableCell>
                        <TableCell>₿ -55.44936969</TableCell>
                        <TableCell>2,868</TableCell>
                    </TableRow>
                    <TableRow key='21'>
                        <TableCell>21</TableCell>
                        <TableCell>fejfjnejr3</TableCell>
                        <TableCell>₿ 1,580.40000000</TableCell>
                        <TableCell>₿ 114.18000000</TableCell>
                        <TableCell>₿ 114.18000000</TableCell>
                        <TableCell>₿ -36.54000000</TableCell>
                        <TableCell>80</TableCell>
                    </TableRow>
                    <TableRow key='22'>
                        <TableCell>22</TableCell>
                        <TableCell>fgtt</TableCell>
                        <TableCell>₿ 2,881.57607000</TableCell>
                        <TableCell>₿ 104.39415002</TableCell>
                        <TableCell>₿ 104.39415002</TableCell>
                        <TableCell>₿ -17.19125070</TableCell>
                        <TableCell>7,716</TableCell>
                    </TableRow>
                    <TableRow key='23'>
                        <TableCell>23</TableCell>
                        <TableCell>Junya5805</TableCell>
                        <TableCell>₿ 7,530.40300000</TableCell>
                        <TableCell>₿ 104.06834000</TableCell>
                        <TableCell>₿ 251.84834000</TableCell>
                        <TableCell>₿ -1.29166000</TableCell>
                        <TableCell>7,546</TableCell>
                    </TableRow>
                    <TableRow key='24'>
                        <TableCell>24</TableCell>
                        <TableCell>pockeycop</TableCell>
                        <TableCell>₿ 293.42592000</TableCell>
                        <TableCell>₿ 100.35444932</TableCell>
                        <TableCell>₿ 102.55441732</TableCell>
                        <TableCell>₿ -6.64546800</TableCell>
                        <TableCell>153</TableCell>
                    </TableRow>
                    <TableRow key='25'>
                        <TableCell>25</TableCell>
                        <TableCell>IPV7CAT</TableCell>
                        <TableCell>₿ 1,719.61781600</TableCell>
                        <TableCell>₿ 100.00000000</TableCell>
                        <TableCell>₿ 100.11527915</TableCell>
                        <TableCell>₿ -64.98400000</TableCell>
                        <TableCell>11,389</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
