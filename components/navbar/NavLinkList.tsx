import Link from "next/link";
import {navLinks} from "@/util/links";

const linkClassName = 'font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800';

export default function NavLinkList() {

    //  navLinks

    return (
        <>

            {navLinks && navLinks.map((link, index) => (
                <Link
                    key={`${link.href}_${index}`}
                    href={link.href}
                    className={linkClassName}
                    prefetch={false}
                >
                    {link.href}
                </Link>
            ))}

        </>
    )
}