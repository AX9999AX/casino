export default function HelpLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className='flex flex-col w-full items-center justify-center gap-4 mb-4'>
            {children}
        </section>
    )
}
