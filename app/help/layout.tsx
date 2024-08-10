export default function HelpLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className='flex flex-col items-center justify-center gap-4'>
            <div className='w-full'>{children}</div>
        </section>
    )
}
