import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className={`w-full min-h-screen bg-whiteColor`}>
            <Header />
            <div
                className={``} style={{ minHeight: "calc(100vh - 72px)" }}>
                <div className={`hidden xl:block fixed left-0 top-0 w-full max-w-[250px] h-full z-10`}>
                    <Sidebar />
                </div>

                <div className={` bg-pageBackground ml-0 xl:ml-[250px]`} style={{ minHeight: "calc(100vh - 72px)" }}>
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
