import Button from "@/components/button/button";
import Input from "@/components/input/input";

const Signup = () => {
  return <div>
    <form action={signup}>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Button type="submit">Sign Up</Button>
    </form>
  </div>;
};

export default Signup;