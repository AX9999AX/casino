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
            label: 'Profile',
            href: '/profile'
        },
        {
            label: 'Dashboard',
            href: '/dashboard'
        },
        {
            label: 'Projects',
            href: '/projects'
        },
        {
            label: 'Team',
            href: '/team'
        },
        {
            label: 'Calendar',
            href: '/calendar'
        },
        {
            label: 'Settings',
            href: '/settings'
        },
        {
            label: 'Help & Feedback',
            href: '/help-feedback'
        },
        {
            label: 'Logout',
            href: '/logout'
        }
    ],
    links: {
        github: 'https://github.com/nextui-org/nextui',
        twitter: 'https://twitter.com/getnextui',
        docs: 'https://nextui.org',
        discord: 'https://discord.gg/9b6yyZKmH4',
        sponsor: 'https://patreon.com/jrgarciadev'
    }
}
