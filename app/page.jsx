import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const ctx = getNetlifyContext();

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
            
            {/* <section className="flex flex-col gap-4">
                
                <RandomQuote />
                
            </section> */}
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}
        </main>
    );
}
