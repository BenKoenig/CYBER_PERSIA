import { useAuth } from '@/hooks/auth'
import {ResponsiveNavButton} from "@/components/ResponsiveNavLink";

const MobileDisplayUser = () => {
    const { logout } = useAuth()

    return (
        <ResponsiveNavButton onClick={logout}>
            Logout
        </ResponsiveNavButton>
    )
}

export default MobileDisplayUser

