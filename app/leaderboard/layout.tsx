export default function LeaderboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className='flex flex-col w-full items-center mb-4 justify-center gap-4'>
            {children}
        </section>
    )
}
