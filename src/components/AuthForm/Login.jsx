import { useState } from "react";
import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { loading, error, login } = useLogin();

  return (
    <>
      <Input
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        placeholder="Email"
        _placeholder={{ color: "whiteAlpha.500" }}
        fontSize={15}
        size={"sm"}
        type="email"
        _focus={{ boxShadow: "unset", border: "1px solid white" }}
      />
      <Input
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        placeholder="Password"
        _placeholder={{ color: "whiteAlpha.500" }}
        fontSize={15}
        size={"sm"}
        type="password"
        _focus={{ boxShadow: "unset", border: "1px solid white" }}
      />

      {error ? (
        <Alert status="error" fontSize={15} p={2} borderRadius={5}>
          <AlertIcon fontSize={13} />
          {error.message}
        </Alert>
      ) : null}

      <Button
        colorScheme="
        purple"
        size={"sm"}
        w={"full"}
        isLoading={loading}
        onClick={() => login(inputs)}
        _focus={{ boxShadow: "unset", bg: "purple.300" }}
      >
        Log In
      </Button>
    </>
  );
};

export default Login;
