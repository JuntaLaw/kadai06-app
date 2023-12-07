"use Client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleIcon from "../../public/google.svg";

export default function GoogleSigninButton() {
    return (
        <Button variant="outline" size="icon">
        <Image src={GoogleIcon} alt="Google Icon"/>
    </Button>
    )
}