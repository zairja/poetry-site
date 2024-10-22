import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | ZL',
        default: 'Zairja\'s Poems'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="nord">
            <head>
                <link rel="icon" href="/images/icon.png" sizes="any" />
            </head>
            <body>
                <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <div className="grow">{children}</div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
