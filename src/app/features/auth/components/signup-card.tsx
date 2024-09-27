import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";

interface SignupCardProps {
    onSignin: () => void;
    onSignup: () => void;
}

const SignupCard = ({onSignin, onSignup}: SignupCardProps) => {
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
                <div className="space-y-4">
                    <form onSubmit={onSignup}>
                        <div className="mb-4">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required/>
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required/>
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="confirm-password">Password</Label>
                            <Input id="confirm-password" type="password" required/>
                        </div>
                        <Button type="submit" className="w-full size-lg font-semibold">
                            Login
                        </Button>
                    </form>
                    <div className="flex items-center gap-4">
                        <Separator className="flex-1"/>
                        <span className="text-muted-foreground uppercase text-xs">Or continue with</span>
                        <Separator className="flex-1"/>
                    </div>
                    <Button type="button" className="w-full font-semibold" variant="outline">
                        <FcGoogle className="size-5 mr-2"/>Google
                    </Button>
                    <Button type="button"  className="w-full font-semibold relative" variant="outline">
                        <FaGithub className="size-5 mr-2" />Github
                    </Button>
                </div>
                <p className="text-sm text-muted-foreground">Already have an account? <Button type="button" variant="link" className="text-sky-700 ml-0.5" size="icon" onClick={onSignin}>Sign in</Button></p>
            </CardContent>
        </Card>
    );
}

export default SignupCard;