import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className={`w-full min-h-screen bg-whiteColor`}>
            <Header />
            <div
                className={`grid grid-cols-12`}
                style={{ minHeight: "calc(100vh - 72px)" }}
            >
                <div className={`hidden  xl:block xl:col-span-2`}>
                    <Sidebar />
                </div>

                <div className={`col-span-12 xl:col-span-10 bg-pageBackground`}>
                    <div className={`xl:container mx-auto h-full`}>
                        <div className={`p-3 md:px-6 md:py-5 h-full`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;
