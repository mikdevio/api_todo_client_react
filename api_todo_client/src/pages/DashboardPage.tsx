
interface DashboardPageProps {
    title: string
}

const DashboardPage: React.FC<DashboardPageProps> = ({ title }) => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1>Dashboard panel</h1>
            </div>
        </>
    )
}

export default DashboardPage;