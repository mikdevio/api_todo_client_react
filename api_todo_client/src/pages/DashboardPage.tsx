import MainLayout from "@/components/layout/MainLayout"

interface DashboardPageProps {
    prop: string
}

const DashboardPage: React.FC<DashboardPageProps> = ({ prop }) => {
    return (
        <MainLayout>
            <div className="flex flex-col gap-4">
                <h1>Dashboard panel</h1>
            </div>
        </MainLayout>
    )
}

export default DashboardPage;