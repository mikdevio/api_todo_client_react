
interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className='flex min-h-screen' >
            <div className="flex-1">
                <main className="p-6">{children}</main>
            </div>
        </div >
    )
}

export default MainLayout;