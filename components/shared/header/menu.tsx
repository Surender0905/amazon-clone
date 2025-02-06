import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";

function Menu() {
    return (
        <div className="flex justify-end">
            <nav className="flex gap-3 w-full">
                <Link
                    href="/signin"
                    className="flex items-center header-button"
                >
                    Hello, Sign in
                </Link>

                <Link href="/cart" className="header-button">
                    <div className="flex items-center">
                        {" "}
                        <ShoppingCartIcon className="h-8 w-8" />
                        Cart
                    </div>
                </Link>
            </nav>
        </div>
    );
}

export default Menu;
