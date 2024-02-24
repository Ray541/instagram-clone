import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { loading, login } = useLogin();

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

      {/* {error ? (
        <Alert status="error" fontSize={15} p={2} borderRadius={5}>
          <AlertIcon fontSize={13} />
          {error.message}
        </Alert>
      ) : null} */}

      <Button
        colorScheme="
        purple"
        size={"sm"}
        w={"full"}
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log In
      </Button>
    </>
  );
};

export default Login;
