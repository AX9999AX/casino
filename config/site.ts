export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: 'Bustabit',
    description:
        'Bustabit is a betting game where you try to guess the largest possible magic number in each contest.',
    navItems: [
        {
            label: 'Bankroll',
            href: '/bankroll'
        },
        {
            label: 'Backtesting',
            href: '/backtesting'
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
    ],
    navMenuItems: [
        {
            label: 'Bankroll',
            href: '/bankroll'
        },
        {
            label: 'Backtesting',
            href: '/backtesting'
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
