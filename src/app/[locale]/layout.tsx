import { Inter } from "next/font/google";
import { Provider } from "@/store/Provider";
import { GlobalStyle } from "@/styles/globalStyle";
import { NextIntlClientProvider } from "next-intl";
import { AntStyle } from "@/styles/AntdStyle";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      ></link>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale}>
          <Provider>
            <AntStyle> {children}</AntStyle>
          </Provider>
        </NextIntlClientProvider>

        <GlobalStyle />
      </body>
    </html>
  );
}
