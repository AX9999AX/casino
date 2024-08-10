export default function PricingLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className='flex flex-col items-center justify-center gap-4 py-6 md:py-6'>
            <div className='w-full'>{children}</div>
        </section>
    )
}
