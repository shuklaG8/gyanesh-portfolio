export default function Footer() {
    return (
        <footer className="bg-black py-8 border-t border-gray-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
                <p className="text-sm">© {new Date().getFullYear()} Gyanesh Shukla. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-green-500 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-green-500 transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
}
