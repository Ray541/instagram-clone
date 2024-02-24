import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Input
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        placeholder="Email"
        _placeholder={{ color: "purple.100" }}
        fontSize={15}
        size={"sm"}
        type="email"
      />
      <Input
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        placeholder="Password"
        _placeholder={{ color: "purple.100" }}
        fontSize={15}
        size={"sm"}
        type="password"
      />
      <Button
        colorScheme="
          purple"
        size={"sm"}
        w={"full"}
      >
        Log In
      </Button>
    </>
  );
};

export default Login;
