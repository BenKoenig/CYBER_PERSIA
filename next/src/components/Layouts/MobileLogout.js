import { useAuth } from '@/hooks/auth'


const MobileLogout = () => {
    const { user } = useAuth({ middleware: 'auth' })


    return (
        <>
            <div className="font-medium text-base text-gray-800">
                {user?.name}
            </div>
            <div className="font-medium text-sm text-gray-500">
                {user?.email}
            </div>
        </>
    )


}

export default MobileLogout

