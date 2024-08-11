import { BsBank } from 'react-icons/bs'
import { IoStatsChart } from 'react-icons/io5'
import { TbHelpSquareFilled } from 'react-icons/tb'
import { RiDashboardHorizontalFill } from 'react-icons/ri'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: 'Bustabit',
    description:
        'Bustabit is a betting game where you try to guess the largest possible magic number in each contest.',
    navItems: [
        {
            label: 'Bankroll',
            href: '/bankroll',
            icon: () => <BsBank className='text-orange' />
        },
        {
            label: 'Stats',
            href: '/stats',
            icon: () => <IoStatsChart className='text-orange' />
        },
        {
            label: 'Leaderboard',
            href: '/leaderboard',
            icon: () => <RiDashboardHorizontalFill className='text-orange' />
        },
        {
            label: 'FAQ',
            href: '/help',
            icon: () => <TbHelpSquareFilled className='text-orange' />
        }
    ],
    navMenuItems: [
        {
            label: 'Bankroll',
            href: '/bankroll'
        },
        {
            label: 'Stats',
            href: '/stats'
        },
        {
            label: 'Leaderboard',
            href: '/leaderboard'
        },
        {
            label: 'Help',
            href: '/help'
        }
    ]
}
