import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "./globals.css"
import Header from '@/modules/Header';
import { GlobalContextProvider } from '@/context/Context';
import ReactQueryProvider from '@/query';
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
        <head>
            <link rel="icon" href="./MainLogo.svg" />
            <title>Ashyo Market </title>
        </head>
      <body>
        <NextIntlClientProvider>
          <ReactQueryProvider>
            <GlobalContextProvider>
                <Header/>
                {children}
            </GlobalContextProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}