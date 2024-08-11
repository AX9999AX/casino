import { BsBank } from 'react-icons/bs'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: 'Bustabit',
    description:
        'Bustabit is a betting game where you try to guess the largest possible magic number in each contest.',
    navItems: [
        {
            label: 'Bankroll',
            href: '/bankroll',
            icon: () => <BsBank />
        },
        {
            label: 'Stats',
            href: '/stats',
            icon: () => <BsBank />
        },
        {
            label: 'Leaderboard',
            href: '/leaderboard',
            icon: () => <BsBank />
        },
        {
            label: 'FAQ',
            href: '/help',
            icon: () => <BsBank />
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
