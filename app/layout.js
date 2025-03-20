import "./globals.css";
import ReduxProvider from './reduxProvider';
import ApolloContext from "../lib/ApolloContext.js";
import Header from '../components/Header';

export const metadata = {
  title: "Rick and Morty",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-7">
        <ReduxProvider>
          <ApolloContext>
            <Header />
            <div className="mt-12">
              {children}
            </div>
          </ApolloContext>
        </ReduxProvider>
      </body>
    </html>
  );
}
