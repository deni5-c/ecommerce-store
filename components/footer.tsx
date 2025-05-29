const Footer = () => {
    return (
        <footer className="bg-white border-t border-[#e5e7eb]">
            <div className="mx-auto py-10">
                <p className="text-center text-xs text-black">
                    &copy; {new Date().getFullYear()} DevDen. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;