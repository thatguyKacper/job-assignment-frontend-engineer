import Footer from "components/Footer";
import Nav from "components/Nav";
import { ReactNode } from "react";

export default function BaseLayout({ children }: { children?: ReactNode }) {
    return (
        <>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}