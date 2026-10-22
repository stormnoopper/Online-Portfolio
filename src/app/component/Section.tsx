export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
        <section id={id} className="scroll-mt-20 border-t border-zinc-200 py-14 md:py-20">
            <div className="grid gap-6 lg:grid-cols-[180px_1fr] lg:gap-12">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900 lg:sticky lg:top-24 lg:self-start">
                    {title}
                </h2>
                <div>{children}</div>
            </div>
        </section>
    );
}
