import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">Yes</h1>
                <p className="text-lg">You are here.</p>
                <Link
                    href="/poems/"
                >
                    Take me to the poems
                </Link>
            </section>
        </main>
    );
}
